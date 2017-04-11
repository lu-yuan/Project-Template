module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8000,
                    keepalive: true,
                    hostname: '*'
                }
            }
        },
        less: {
            compile: {
                files: {
                    'project/css/project.css':'project/less/project/project.less'
                }
            }
        },
        watch: {
            less:{
                files: ['project/less/**/*.less'],
                options: {livereload:false},
                tasks: ['less:compile']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dist-less', ['less']);
    grunt.registerTask('default', ['watch']); 
}
