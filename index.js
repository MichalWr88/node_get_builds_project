
const { fs, inquirer, yargs } = require('./config/imports');
const g = require('./shared/main');

yargs.command({
	command: "auth",
	describe: "Ustawienie danych dostepowych do jenkinsa",
	handler: function (argv) {
		fs.stat('./config/credential.json', (err, stats) => {
			if (err) {
				fs.writeFileSync('./config/credential.json')
			} else {
				fs.readFile('./config/credential.json', 'utf8', (err, data) => {
					let auth = JSON.parse(data);
					if (auth.login === undefined || auth.password === undefined) {
						auth = {
							login: '',
							password: ''
						}
					}
					inquirer
						.prompt([
							{
								type: 'input',
								name: 'login',
								message: 'Wpisz swój login',
							},
						])
						.then(answers => {
							auth = Object.assign(auth, answers);
							return inquirer.prompt([
								{
									type: 'password',
									name: 'password',
									message: 'Wpisz swóje hasło',
								},
							])
								.then(answers => {
									auth = Object.assign(auth, answers);
								});
						}).then(() => {
							fs.writeFile('./config/credential.json', JSON.stringify(auth));
						})
				})
			}
		})

	}
})
yargs.parse()







