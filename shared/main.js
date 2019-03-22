const { jenkins } = require('../config/imports');

const getNamesList = (arrayObj) => {
	const arrayNames = [];
	arrayObj.forEach(elem => { arrayNames.push(elem.comandName); })
	return arrayNames;
}

const getInfobuild = (name) => {
	return new Promise((resolve, reject) => {
		jenkins.job.get(name, function (err, data) {
			if (err) { reject(err); };
			const number = data.lastSuccessfulBuild.number;
			jenkins.build.get(name, number, function (err, data) {
				if (err) { reject(err); };
				const name = data.number + "# " + new Date(data.timestamp).toLocaleDateString("pl-PL", { year: "2-digit", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).replace(":", ".");
				resolve(name);
			});
		});
	})
}

module.exports.getNamesList = getNamesList;
module.exports.getInfobuild = getInfobuild;