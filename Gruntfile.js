/* global require, process */
module.exports = function( grunt ) {
	require( "time-grunt" )( grunt );

	// Define project configuration
	var project = {
		paths: {
			get config() {
				return this.grunt + "config/";
			},
			grunt: "grunt/",
			js: "js/src/",
		},
		files: {
			js: [
				"js/src/**/*.js",
			],
			get config() {
				return project.paths.config + "*.js";
			},
			grunt: "Gruntfile.js",
		},
		pkg: grunt.file.readJSON( "package.json" ),
	};

	// Load Grunt configurations and tasks
	require( "load-grunt-config" )( grunt, {
		configPath: require( "path" ).join( process.cwd(), project.paths.config ),
		data: project,
	} );
};
