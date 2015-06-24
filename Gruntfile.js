module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= pkg.license %> */\n',
        // Task configuration
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            main: {
                src: ['index.js']
            }
        }
    });

    // These plugins provide necessary tasks
    require('load-grunt-tasks')(grunt);

    // Default task
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['test']);
};
