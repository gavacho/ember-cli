'use strict';

var Command = require('../models/command');

module.exports = Command.extend({
  name: 'version',
  description: 'outputs ember-cli version',
  works: 'everywhere',

  availableOptions: [
    { name: 'verbose', type: Boolean, default: false }
  ],

  aliases: ['v', 'version', '-v', '--version'],
  run: function(options) {
    var versions = process.versions;

    versions['npm'] = require('npm').version;

    for(var module in versions) {
      switch(module) {
        case 'npm':
        case 'node':
          this.printVersion(module, versions[module]);
          break;

        default:
          if(options.verbose) {
            this.printVersion(module, versions[module]);
          }
      }
    }
  },
  printVersion: function(module, version) {
      this.ui.write(module + ': ' + version + '\n');
  }
});
