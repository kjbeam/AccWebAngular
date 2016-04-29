module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        useminPrepare:{
            html: '<%= pkg.directories.root %>/index.html',
            options: {
                dest: '<%= pkg.directories.dist %>'
            }
        },
        
        usemin:{html:['<%= pkg.directories.dist %>/index.html']},
        
        
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    '<%= pkg.directories.minsafe %>/<%= pkg.name %>.annotated.js':
                        ['<%= pkg.directories.root %>/*.js', '<%= pkg.directories.root %>/*/*.js', 
                         '!<%= pkg.directories.root %>/*/*.min.js', '!<%= pkg.directories.root %>/*/*.annotated.js']

                }

            }
        },
        jshint: {
            files: ['Gruntfile.js', 'karma.conf.js', '<%= pkg.directories.minsafe %>/*.annotated.js'],
            options: {
            }
        },
        eslint: {
            src: ['Gruntfile.js', 'karma.conf.js', '<%= pkg.directories.minsafe %>/*.annotated.js']
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                        //mangle: false
            },
            dist: {
                files: {
                    '<%= pkg.directories.dist %>/<%= pkg.name %>.min.js': ['<%= pkg.directories.minsafe %>/<%= pkg.name %>.annotated.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                        expand: true,
                        cwd: '<%= pkg.directories.styles %>',
                        src: ['*.css', '!*.min.css'],
                        dest: '<%= pkg.directories.dist %>',
                        ext: '.min.css'
                    }]
            }
        },
        copy: {
            indexHTMLtoDist: {
                expand: true, 
                cwd:    '<%= pkg.directories.root %>',
                src:    'index.html',
                dest:   '<%= pkg.directories.dist %>'
            },
            main: {
                files: [
                    // includes all images to the deployment directory
                    {expand: true, cwd: '<%= pkg.directories.images %>', src: ['*'], dest: '<%= pkg.directories.deploy %>/images/'},
                    // copy index.html to deployment directory 
                    {expand: true, cwd: '<%= pkg.directories.dist %>', src: ['index.html'], dest: '<%= pkg.directories.deploy %>'},
                    // copy minified js to deployment directory 
                    {expand: true, cwd: '<%= pkg.directories.dist %>', src: ['<%= pkg.name %>.min.js'], dest: '<%= pkg.directories.deploy %>'},
                    // copy minified css to deployment directory 
                    {expand: true, cwd: '<%= pkg.directories.dist %>', src: ['main.min.css'], dest: '<%= pkg.directories.deploy %>'},
                    // copy all views/partials to deployment directory 
                    {expand: true, cwd: '<%= pkg.directories.views %>', src: ['**'], dest: '<%= pkg.directories.deploy %>/views'}
                ]
            }
        },
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            unit: {
                singleRun: true
            }
        }
    });
    //load grunt tasks
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("gruntify-eslint");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-karma');
    //register grunt default task
    grunt.registerTask('default', ['copy:indexHTMLtoDist','useminPrepare','ngAnnotate', 'jshint', 'eslint',
                                   'uglify:dist', 'cssmin:target','usemin']);
    grunt.registerTask('deploy', ['copy:indexHTMLtoDist','useminPrepare','ngAnnotate', 
                                  'jshint', 'eslint', 'uglify:dist', 'cssmin:target', 'usemin','copy:main']);
};