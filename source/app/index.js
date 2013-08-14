define([
	"ember",
	"application",
	"text!index.hbs"
], function(
	Ember,
	Application,
	IndexTemplate
) {

	"use strict";

	Application.IndexController = Ember.Controller.extend({
		// ...
	});

	Application.IndexView = Ember.View.extend({
		defaultTemplate: null,
		template: Ember.Handlebars.compile(IndexTemplate),
		templateName: "index"
	});

});