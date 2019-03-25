
module.exports = {
	"jenkinsAuthUrl": "http://{{login}}:{{password}}@hudsonwroc2.gispartner.pl:8080",
	"jenkinsUrl": "http://hudsonwroc2.gispartner.pl:8080",
	"credentialPath":"./credential.json",
	"artifactUrl": "lastSuccessfulBuild/artifact/*zip*/",
	"extractedFolder": "builds/",
	"buildList": [
		{
			"fileName": "mdd_imgw",
			"comandName": "MDD_IMGW_MANAGER",
			"url": `{{jenkinsUrl}}/job/mdd_imgw/{{artifactUrl}}mdd_imgw.zip`
		},
		{
			"fileName": "mdd_wody",
			"comandName": "MDD_WODY_MANAGER",
			"url": `{{jenkinsUrl}}/job/mdd_wody/{{artifactUrl}}mdd_wody.zip`
		},
		{
			"fileName": "imap-manager",
			"comandName": "CAPAP_MANAGER",
			"url": `{{jenkinsUrl}}/job/imap-manager/{{artifactUrl}}imap-manager.zip`
		},
		{
			"fileName": "imap-wizard",
			"comandName": "CAPAP_WIZARD",
			"url": `{{jenkinsUrl}}/job/imap-manager/{{artifactUrl}}imap-manager.zip`
		},
		{
			"fileName": "UMWD-imap-studio",
			"comandName": "UMWD_WIZARD",
			"url": `{{jenkinsUrl}}/job/UMWD-imap-studio/{{artifactUrl}}UMWD-imap-studio.zip`
		},
		{
			"fileName": "UMWD-imap-manager",
			"comandName": "UMWD_MANAGER",
			"url": `{{jenkinsUrl}}/job/UMWD-imap-manager/{{artifactUrl}}UMWD-imap-manager.zip`
		},
		{
			"fileName": "capap_imap-layer-viewer",
			"comandName": "CAPAP_VIEWER",
			"url": `{{jenkinsUrl}}/job/capap_imap-layer-viewer/{{artifactUrl}}capap_imap-layer-viewer.zip`
		},
		{
			"fileName": "imap-mzs",
			"comandName": "MZS",
			"url": `{{jenkinsUrl}}/job/imap-mzs/{{artifactUrl}}imap-mzs.zip`
		},
	]

};
