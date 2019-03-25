
const fs = require('fs'),
	fetch = require('node-fetch'),
	StreamZip = require('node-stream-zip'),
	del = require('del'),
	inquirer = require('inquirer'),
	handlebars = require('handlebars'),
	yargs = require('yargs'),
	chalk = require('chalk'),
	zipper = require("zip-local"),
	config = require('./config'),
	credential = require('./credential.json'),
	setConfig = () => {
		try {
			const template = handlebars.compile(JSON.stringify(config));
			const configBuild = JSON.parse(template({ "jenkinsUrl": config.jenkinsUrl, "artifactUrl": config.artifactUrl, "login": credential.login, "password": credential.password }));
			return configBuild;
		} catch (error) {
			console.log(chalk.red(error));

		}
	},
	configBuild = setConfig(),
	jenkins = require('jenkins')({ baseUrl: configBuild.jenkinsAuthUrl });


module.exports.fs = fs;
module.exports.fetch = fetch;
module.exports.StreamZip = StreamZip;
module.exports.zipper = zipper;
module.exports.del = del;
module.exports.inquirer = inquirer;
module.exports.handlebars = handlebars;
module.exports.yargs = yargs;
module.exports.extractedFolder = config.extractedFolder;
module.exports.configBuild = configBuild;
module.exports.jenkins = jenkins;
module.exports.chalk = chalk;