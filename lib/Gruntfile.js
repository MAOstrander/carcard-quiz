module.exports = function(grunt) {

grunt.initConfig({
  jshint: {
    options: {
      predef: [ "document", "console" ],
      esnext: true,
      globalstrict: true,
      browserify: true
    },
    files: ['../js/**/*.js']
  },
  watch: {
    javascripts: {
      files: ['../js/**/*.js'],
      tasks: ['jshint', 'browserify']
    }
  },
  jshintrc: './.jshintrc'
});

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
grunt.registerTask('default', ['jshint', 'watch']);
}