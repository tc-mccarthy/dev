module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            files: {
                src: 'public/js/app.js', // source files mask
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
                src: ['assets/js/*.js', '!assets/js/app.js'],
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
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // register at least this one task
    grunt.registerTask('default', ['concat', 'uglify', 'compass', 'cssmin']);
    grunt.registerTask('dev', ['concat', 'uglify', 'compass', 'cssmin', 'watch']);
};