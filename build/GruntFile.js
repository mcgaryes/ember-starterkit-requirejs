module.exports = function(grunt) {

    'use strict';

    var NAME = 'Application';
    var DESCRIPTION = 'Ember application.';
    var URL = 'https://www.yourdomainhere.com/';
    var VERSION = '0.1.0';
    var BANNER = '/**\n * ' + NAME + ' v' + VERSION + '\n * ' + DESCRIPTION + '\n * ' + URL + '\n */\n';

    var path = require('path');
    var uglify = {};
    var srcpath = '../source/assets/js/';
    var destpath = '../www/assets/js/';

    grunt.file.expand({
        cwd: srcpath
    }, '**/*.js').forEach(function(relpath) {
        uglify[path.join(destpath, relpath)] = path.join(srcpath, relpath);
    });

    // config
    grunt.initConfig({
        uglify: {
            options: {},
            all: {
                files: uglify
            }
        },
        jasmine: {
            all: {
                options: {
                    specs: "../tests/specs/*.js",
                    template: "../tests/custom.tmpl"
                }
            }
        },
        copy: {
            code: {
                files: {
                    "../www/favicon.ico": "../source/favicon.ico",
                    "../www/index.html": "../source/index.html",
                    "../www/assets/css/main.css": "../source/assets/css/main.css",
                    "../www/assets/data/bootstrap.json": "../source/assets/data/bootstrap.json",
                    "../www/assets/img/": "../source/assets/img/**",
                    "../www/package.json": "../source/package.json",
                    "../www/server.js": "../source/server.js"
                }
            },
            version: {
                options: {
                    processContent: function() {
                        return VERSION;
                    }
                },
                files: {
                    "../VERSION": "../VERSION"
                }
            }
        },
        yuidoc: {
            compile: {
                name: NAME,
                description: DESCRIPTION,
                version: VERSION,
                url: URL,
                options: {
                    paths: '../source/app/',
                    outdir: '../docs/'
                }
            }
        },
        jshint: {
            files: ['GruntFile.js', '../source/app/**/*.js'],
            options: {
                jshintrc: '../.jshintrc'
            }
        },
        requirejs: {
            all: {
                options: {
                    appDir: "../source/app",
                    baseUrl: "./",
                    mainConfigFile: "../source/app/config.js",
                    locale: "en-us",
                    dir: "../www/app",
                    optimize: "uglify",
                    name: "main",
                    fileExclusionRegExp: /^\./
                }
            }
        },
        sass: {
            all: {
                files: {
                    '../source/assets/css/main.css': '../source/assets/scss/main.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['../source/assets/scss/*.scss'],
                tasks: ['sass'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // tasks
    grunt.registerTask("default", ["jshint", "jasmine", "sass", "requirejs", "copy:code", "uglify", "copy:version", "yuidoc"]);

};