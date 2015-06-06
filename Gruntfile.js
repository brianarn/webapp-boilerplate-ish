var webpackConfig = require('./webpack.config');

module.exports = function (grunt) {
  grunt.initConfig({
    webpack: webpackConfig,

    hapi: {
      create_options: {
        options: {
          server: __dirname + '/lib/server'
        }
      }
    },

    watch: {
      webpack: {
        files: ['lib/client/**/*.js'],
        tasks: ['webpack']
      },
      hapi: {
        files: ['lib/server/*.js'],
        tasks: ['hapi'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-hapi');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['webpack', 'hapi', 'watch']);
  grunt.registerTask('server', ['hapi', 'watch']);
};
