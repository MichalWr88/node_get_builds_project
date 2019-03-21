const { fs, jenkins, configBuild, inquirer } = require('./config/imports');
const g = require('./shared/main');

// jenkins.info(function(err, data) {
// 	if (err) throw err;

// 	console.log('info', data);
//   });

inquirer
	.prompt([
		{
			type: 'checkbox',
			name: 'buildList',
			message: 'Wybierz które buildy chcesz pobrac',
			choices: g.getNamesList(configBuild),
		},
	])
	.then(answers => {
		answers.buildList.forEach(elem => {
			const item = configBuild.find(item => elem == item.comandName);
			// downloadBuild(item);
			jenkins.job.build(item.fileName, function (err, data) {
				if (err) throw err;
				console.log('queue item number', data);
			});
			// console.log(item);
		})
	});

// jenkins.build.get('mdd_wody', 1, function(err, data) {
// 	if (err) throw err;

// 	console.log('build', data);
//   });
// ok

const getInfobuild = (name) => {
	jenkins.job.get(name, function (err, data) {
		if (err) throw err;
		const number = data.lastSuccessfulBuild.number;
		// console.log('job', data.lastSuccessfulBuild.number);
		jenkins.build.get(name, number, function (err, data) {
			if (err) throw err;
			console.log('build', data.number + "# " + new Date(data.timestamp).toLocaleDateString("pl-PL", { year: "2-digit", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).replace(":", "."));
		});
	});
}

// jenkins.build.get('mdd_wody', 285, function(err, data) {
// 	if (err) throw err;

// 	console.log('build', data);
//   });



// jenkins.build.get('mdd_wody', 1, function (err, data) {
// 	if (err) throw err;

// 	console.log('build', data);
// });


