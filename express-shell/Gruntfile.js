module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			files: {
				src: ['public/js/*.js', '!public/js/*.min.js'] // source files mask
				dest: 'public/js/', // destination folder
				expand: true, // allow dynamic building
				flatten: true, // remove all unnecessary nesting
				ext: '.min.js' // replace .js to .min.js
			}
		},

		compass: {
			dist: {
				options: {
					sassDir: 'assets/scss',
					cssDir: 'public/css'
				}
			}
		},

		concat: {
			dist: {
				src: ['assets/js/*.js'],
				dest: 'public/js/app.js',
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'public/css',
					src: ['*.css', '!*.min.css'],
					dest: 'public/css',
					ext: '.min.css'
                }]
			}
		},

		watch: {
			js: {
				files: 'assets/js/*.js',
				tasks: ['concat', 'uglify']
			},

			css: {
				files: '**/*.scss',
				tasks: ['compass', 'cssmin']
			}
		},
		jshint: {
			options: {
				curly: true,
				eqnull: true,
				browser: true,
				expr: true,
				globals: {
					jQuery: true
				},
				sub: true

			},
			uses_defaults: ['assets/js/*.js', '!assets/js/__*.js', 'assets/js/*/*.js', '!assets/js/*/__*.js']
		}
	});

	// load plugins
	// load plugins
	require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

	// register at least this one task
	// register at least this one task
	grunt.registerTask('default', ['concat', 'uglify', 'compass', 'cssmin']);
	grunt.registerTask('dev', ['jshint', 'concat', 'uglify', 'compass', 'cssmin', 'watch']);
};
