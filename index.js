
const { fs, fetch, StreamZip, zipper, del, inquirer, yargs,chalk, configBuild,extractedFolder } = require('./config/imports');
const g = require('./shared/main');

// yargs.command({
// 	command:"add",
// 	describe:"testpwy opis",
// 	builder: {
// 		title: {
// 			describe: "opis builder",
// 			demandOption: true,
// 			type:"string"
// 		}
// 	},
// 	handler: function (argv){
// 		console.log(chalk.bgBlue("testowy opis"));
		
// 	}
// })
yargs.command({
	command:"credential",
	describe:"Ustawienie danych dostepowych do jenkinsa",
	builder: {
		title: {
			describe: "opis builder",
			demandOption: true,
			type:"string"
		}
	},
	handler: function (argv){
		console.log(chalk.bgBlue("testowy opis"));
		
	}
})
yargs.parse()

// inquirer
// 	.prompt([
// 		{
// 			type: 'list',
// 			name: 'choice',
// 			message: 'Wybierz co chesz zrobic',
// 			choices: [{ name: "zbudj apki na jankinsie" }, { name: "pobierz buildy" }],
// 		},
// 	])
// 	.then(answers => {
// 		console.log(answers);

// 	});







