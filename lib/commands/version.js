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
    if(options.verbose) {
      var versions = process.versions;

      versions['npm'] = require('npm').version;

      for (module in versions) {
        this.ui.write(module + ': ' + versions[module] + '\n');
      }
    }
  }
});
