'use strict';

var Camelton = require('camelton');

module.exports = function(grunt) {

  grunt.registerMultiTask('camelton', 'Generate and synchronize data skeletons across files.', function() {
    var options = this.options({
      prune: false,
      verbose: false
    });

    this.files.forEach(function(file) {
      file.src.forEach(function(source) {
        var camelton = new Camelton(source, file.dest, options);
        camelton.run();
        camelton.report();
      });
    });
  });

};
