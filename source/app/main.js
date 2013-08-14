/**
 * Main entry point to the application.
 * @module main
 */
require([
	"ember",
	"handlebars",
	"jquery",
	"application",
	"index"
], function(
	Ember,
	Handlebars,
	$,
	Application
) {

	'use strict';

	Application.advanceReadiness();

});