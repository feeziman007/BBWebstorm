module.exports = function(grunt) {

  grunt.initConfig({
    clean: ['dist/*.js'],
    uglify: {
      options:{
        mangle: false
      },
      target: {
        files: {
          'dist/new-main.js': 'js/*.js'
        }
      }
    },
    jshint: {
      all: ['js/*.js'],
      options: {
        unused: false,
        eqeqeq: true,
        asi: true


      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')

  grunt.registerTask('default', ['jshint', 'clean', 'uglify'])

}