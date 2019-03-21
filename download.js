
const { fs, fetch, StreamZip, zipper, del, inquirer, configBuild, extractedFolder } = require('./config/imports');
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
				zip.extract('archive/build', urlExtracted, err => {
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
		fs.rename(`./${extractedFolder}${name}/es6`, `./${extractedFolder}${name}/${name}`, () => {
			zipper.zip(`./${extractedFolder}${name}`, function (error, zipped) {
				if (!error) {
					zipped.compress(); // compress before exporting
					var buff = zipped.memory(); // get the zipped file as a Buffer
					// or save the zipped file to disk
					g.getInfobuild(name).then((infoBuild) => {

						zipped.save(`./${extractedFolder}/${name}-${infoBuild}.zip`, function (error) {
							if (!error) {
								resolve(name);
								console.log("saved successfully !");
							}
						});
					})
				}
			});
		})
	})
}


inquirer
	.prompt([
		{
			type: 'checkbox',
			name: 'buildList',
			message: 'Wybierz które buildy chcesz pobrac',
			choices: g.getNamesList(configBuild),
		},
	])
	.then(answers => { answers.buildList.forEach(elem => { downloadBuild(configBuild.find(item => elem == item.comandName)) }) });







