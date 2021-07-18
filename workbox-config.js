module.exports = {
	globDirectory: 'site/',
	globPatterns: [
		'**/*.{png,xml,ico,jpg,html,css,svg,webmanifest}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'site/sw.js'
};