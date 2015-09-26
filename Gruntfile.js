'use strict';

module.exports = function(grunt) {
  var srcFile = './test/fixtures/source.json',
      srcDestFile = './test/fixtures/destination.json';

  // Project configuration.
  grunt.initConfig({
    jscs: {
      options: {
        config: '.jscsrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Generate new boilerplate destination files.
    copy: {
      copyTestFiles: {
        options: {
          filter: 'isFile'
        },
        files: [
          {src: srcDestFile, dest: './tmp/destination-default.json'},
          {src: srcDestFile, dest: './tmp/destination-sort-asc.json'},
          {src: srcDestFile, dest: './tmp/destination-sort-desc.json'},
          {src: srcDestFile, dest: './tmp/destination-prune.json'},
          {src: srcDestFile, dest: './tmp/destination-placeholder.json'}
        ]
      }
    },

    // Configuration to be run (and then tested).
    camelton: {
      defaultOptions: {
        options: {},
        files: {
          'tmp/destination-default.json': srcFile
        }
      },
      sortAsc: {
        options: {
          sort: 'asc'
        },
        files: {
          'tmp/destination-sort-asc.json': srcFile
        }
      },
      sortDesc: {
        options: {
          sort: 'desc'
        },
        files: {
          'tmp/destination-sort-desc.json': srcFile
        }
      },
      prune: {
        options: {
          prune: true
        },
        files: {
          'tmp/destination-prune.json': srcFile
        }
      },
      placeholder: {
        options: {
          placeholder: true
        },
        files: {
          'tmp/destination-placeholder.json': srcFile
        }
      }
    },

    // Unit tests.
    nodeunit: {
      options: {
        reporter: 'verbose'
      },
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('lint', ['jshint', 'jscs']);
  grunt.registerTask('test', ['clean', 'copy', 'camelton', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['lint', 'test']);
};
