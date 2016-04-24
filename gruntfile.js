module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                mangle: false
            },
            dist: {
                files: {
                    'public_html/dist/<%= pkg.name %>.min.js': ['public_html/min-safe/<%= pkg.name %>.annotated.js']
                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    
                    'public_html/min-safe/<%= pkg.name %>.annotated.js' : 
                            ['public_html/*.js','public_html/*/*.js','!public_html/*/*.min.js','!public_html/*/*.annotated.js']

                }

            }
        }

    });
    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    //register grunt default task
    grunt.registerTask('default', ['ngAnnotate', 'uglify']);
};