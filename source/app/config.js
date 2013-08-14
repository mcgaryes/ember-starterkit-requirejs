/**
 * RequireJS configuration file.
 * @module config
 */
require.config({
	deps: ["main"],
	paths: {

		// libraries
		ember: "../assets/js/ember-1.0.0-rc.7",
		jquery: "../assets/js/jquery-1.9.1",
		handlebars: "../assets/js/handlebars-1.0.0",

		// require plugins
		text: "../assets/js/text",
		domready: "../assets/js/dom-ready",

	},
	shim: {
		"jquery": {
			exports: "$"
		},
		"ember": {
			exports: "Ember",
			deps: ["jquery", "handlebars"],
		},
		"handlebars": {
			exports: "handlebars"
		}
	}
});