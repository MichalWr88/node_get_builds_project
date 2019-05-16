const { jenkins, configBuild, yargs, chalk, inquirer } = require('./config/imports');
const g = require('./shared/main');

yargs.command({
	command: "run",
	describe: "Wystartuj budowanie aplikacji",
	handler: () => {
		console.log(chalk.bgBlue("Startowanie budowania aplikacji"));
		inquirer
			.prompt([
				{
					type: 'checkbox',
					name: 'buildList',
					message: 'Wybierz które apki chcesz zbudowac',
					choices: g.getNamesList(configBuild.buildList),
				},
			])
			.then(answers => {
				answers.buildList.forEach(elem => {
					const item = configBuild.buildList.find(item => elem == item.comandName);
					// downloadBuild(item);
					jenkins.job.build(item.fileName, function (err, data) {
						if (err) throw err;
						console.log('queue item number', data);
					});

				})
			});
	}
})
yargs.parse()
