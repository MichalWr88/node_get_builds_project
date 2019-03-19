
const fs = require('fs'),
	fetch = require('node-fetch'),
	StreamZip = require('node-stream-zip'),
	del = require('del'),
	inquirer = require('inquirer'),
	handlebars = require('handlebars'),
	argv = require('yargs').argv,
	zipper = require("zip-local"),
	config = require('./config'),
	comand = [...argv._];
	
const setConfig = ()=>{
	const template = handlebars.compile(JSON.stringify(config.buildList));
	const configBuild = JSON.parse(template({ "iMapClientUrl": config.iMapClientUrl, "artifactUrl": config.artifactUrl }));
	return configBuild
}

module.exports.fs = fs;
module.exports.fetch = fetch;
module.exports.StreamZip = StreamZip;
module.exports.zipper = zipper;
module.exports.del = del;
module.exports.inquirer = inquirer;
module.exports.handlebars = handlebars;
module.exports.argv = argv;
module.exports.comand = comand;
module.exports.extractedFolder = config.extractedFolder;
module.exports.configBuild = setConfig();