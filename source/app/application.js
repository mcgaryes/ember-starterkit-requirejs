define(["ember"], function(Ember) {

	"use strict";

	var Application = window.Application = Ember.Application.create({
		NAME: "Application",
		VERSION: "0.1.0",
		LOG_TRANSITIONS: true
	});

	Application.Router.map(function() {
		// define routes here
	});

	Application.deferReadiness();

	return Application;

});