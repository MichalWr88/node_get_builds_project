
module.exports = {
	"iMapClientUrl": "http://hudsonwroc2.gispartner.pl:8080/view/iMapClient/view/",
	"artifactUrl": "lastSuccessfulBuild/artifact/",
	"extractedFolder":"builds/",
	"buildList": [
		{
			"fileName": "mdd_imgw",
			"comandName": "MDD_IMGW_MANAGER",
			"url": `{{iMapClientUrl}}ISOK/job/mdd_imgw/{{artifactUrl}}*zip*/mdd_imgw.zip`
		},
		{
			"fileName": "mdd_wody",
			"comandName": "MDD_WODY_MANAGER",
			"url": `{{iMapClientUrl}}ISOK/job/mdd_wody/{{artifactUrl}}*zip*/mdd_wody.zip`
		},
		{
			"fileName": "imap-manager",
			"comandName": "CAPAP_MANAGER",
			"url": `{{iMapClientUrl}}iMapLite/job/imap-manager/{{artifactUrl}}*zip*/imap-manager.zip`
		},
		{
			"fileName": "imap-wizard",
			"comandName": "CAPAP_WIZARD",
			"url": `{{iMapClientUrl}}iMapLite/job/imap-manager/{{artifactUrl}}*zip*/imap-manager.zip`
		},
		{
			"fileName": "UMWD-imap-studio",
			"comandName": "UMWD_WIZARD",
			"url": `{{iMapClientUrl}}UMWD/job/UMWD-imap-studio/{{artifactUrl}}*zip*/UMWD-imap-studio.zip`
		},
		{
			"fileName": "UMWD-imap-manager",
			"comandName": "UMWD_MANAGER",
			"url": `{{iMapClientUrl}}UMWD/job/UMWD-imap-manager/{{artifactUrl}}*zip*/UMWD-imap-manager.zip`
		},
		{
			"fileName": "capap_imap-layer-viewer",
			"comandName": "CAPAP_VIEWER",
			"url": `{{iMapClientUrl}}CAPAP/job/capap_imap-layer-viewer/{{artifactUrl}}*zip*/capap_imap-layer-viewer.zip`
		},
		{
			"fileName": "imap-mzs",
			"comandName": "MZS",
			"url": `{{iMapClientUrl}}ISOK/job/imap-mzs/{{artifactUrl}}*zip*/imap-mzs.zip`
		},
	]

};
