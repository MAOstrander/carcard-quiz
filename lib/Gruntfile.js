module.exports = function(grunt) {

grunt.initConfig({
  browserify: {
    '../dist/app.js': ['../src/app.js']
  },
  jshint: {
    options: {
      predef: [ "document", "console" ],
      esnext: true,
      globalstrict: true,
      globals: {
        "CarLot": true
      },
      browserify: true
    },
    files: ['../src/**/*.js']
  },
  watch: {
    javascripts: {
      files: ['../src/**/*.js'],
      tasks: ['jshint', 'browserify']
    }
  }
});

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
}
