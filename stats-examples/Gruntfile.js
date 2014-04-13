module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        compass: {
            dev: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },

        connect: {
            'static': {
                options: {
                    hostname: 'localhost',
                    port: 9999
                }
            }
        },

        uglify: {
            dev: {
                files: {
                    'js/bootstrap.js': [
                        'js/bootstrap/affix.js',
                        'js/bootstrap/alert.js',
                        'js/bootstrap/button.js',
                        'js/bootstrap/carousel.js',
                        'js/bootstrap/collapse.js',
                        'js/bootstrap/dropdown.js',
                        'js/bootstrap/tab.js',
                        'js/bootstrap/transition.js',
                        'js/bootstrap/scrollspy.js',
                        'js/bootstrap/modal.js',
                        'js/bootstrap/tooltip.js',
                        'js/bootstrap/popover.js'
                    ]
                }
            }
        },

        watch: {
            files: ['sass/*.scss', 'js/bootstrap/*.js'],
            tasks: ['compass:dev', 'uglify:dev']
        }
    });

    grunt.registerTask('default', ['compass:dev', 'uglify:dev', 'connect:static', 'watch']);

}
