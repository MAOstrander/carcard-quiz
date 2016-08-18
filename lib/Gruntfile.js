module.exports = function(grunt) {

grunt.initConfig({
  jshint: {
    options: {
      predef: [ "document", "console" ],
      esnext: true,
      globalstrict: true,
      browserify: true
    },
    files: ['../src/**/*.js']
  },
  watch: {
    javascripts: {
      files: ['../src/**/*.js'],
      tasks: ['jshint']
    }
  }
});

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
grunt.registerTask('default', ['jshint', 'watch']);
}
