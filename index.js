
const { fs, fetch, StreamZip, zipper, del, inquirer, configBuild, comand, extractedFolder } = require('./config/imports');
const g = require('./shared/main');


const getZip = (obj) => {
	return fetch(`${obj.url}`).then(resp => {
		return new Promise((resolve, reject) => {
			const file = fs.createWriteStream(`${obj.fileName}.zip`);
			if (resp.status != 200) {
				reject(`Server responded with ${resp.status}: ${resp.statusText} | build: ${obj.fileName}`);
			}
			else { resp.body.pipe(file); }
			file.on("finish", () => {
				resolve(obj.fileName);
			});
		})
	})
}
const downloadBuild = (obj) => {
	getZip(obj)
		.then((name) => {
			return extractZip(name);
		}).then((name) => {
			return makeZipBuild(name);
		}).then((name) => {
			return clearTemp(name)
		}).catch((err) => { console.log(err) });
}
const clearTemp = (name) => {
	return del([`${name}.zip`, `./${extractedFolder}${name}`])
};
const extractZip = (fileName) => {
	return new Promise((resolve, reject) => {
		const urlExtracted = `${extractedFolder}${fileName}`;
		if (!fs.existsSync(extractedFolder)) {
			fs.mkdirSync(extractedFolder)
		}
		del([urlExtracted, '']).then(paths => {
			const zip = new StreamZip({ file: `${fileName}.zip`, storeEntries: true });
			zip.on('ready', () => {
				fs.mkdirSync(urlExtracted);
				zip.extract('archive/build/es6', urlExtracted, err => {
					if (err) { reject(`Extract error ${fileName}`) }
					console.log(`Extracted ${fileName}`);
					zip.close();
					resolve(fileName);
				})
			});
		})
	})
};
const makeZipBuild = (name) => {
	return new Promise((resolve, reject) => {
		zipper.zip(`./${extractedFolder}${name}`, function (error, zipped) {
			if (!error) {
				zipped.compress(); // compress before exporting
				var buff = zipped.memory(); // get the zipped file as a Buffer
				// or save the zipped file to disk
				zipped.save(`./${extractedFolder}${name}.zip`, function (error) {
					if (!error) {
						resolve(name);
						console.log("saved successfully !");
					}
				});
			}
		});
	})
}


inquirer
	.prompt([
		{
			type: 'list',
			name: 'choice',
			message: 'Wybierz co chesz zrobic',
			choices: [{name:"zbudj apki na jankinsie"},{name:"pobierz buildy"}],
		},
	])
	.then(answers => { 
		console.log(answers);
		
	});







