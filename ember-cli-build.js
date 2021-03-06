/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['bower_components/Materialize/sass']
    }
  });

  app.import('bower_components/Materialize/dist/js/materialize.js');
  app.import('bower_components/moment/moment.js');

  const destDir = 'fonts/roboto';
  app.import('bower_components/Materialize/fonts/roboto/Roboto-Regular.woff2', { destDir: destDir });
  app.import('bower_components/Materialize/fonts/roboto/Roboto-Regular.woff', { destDir: destDir });
  app.import('bower_components/Materialize/fonts/roboto/Roboto-Regular.ttf', { destDir: destDir });

  app.import('bower_components/Materialize/fonts/roboto/Roboto-Medium.woff2', { destDir: destDir });
  app.import('bower_components/Materialize/fonts/roboto/Roboto-Medium.woff', { destDir: destDir });
  app.import('bower_components/Materialize/fonts/roboto/Roboto-Medium.ttf', { destDir: destDir });

  app.import('bower_components/Materialize/fonts/roboto/Roboto-Light.woff2', { destDir: destDir });
  app.import('bower_components/Materialize/fonts/roboto/Roboto-Light.woff', { destDir: destDir });
  app.import('bower_components/Materialize/fonts/roboto/Roboto-Light.ttf', { destDir: destDir });

  app.import('bower_components/Materialize/fonts/roboto/Roboto-Thin.woff2', { destDir: destDir });
  app.import('bower_components/Materialize/fonts/roboto/Roboto-Thin.woff', { destDir: destDir });
  app.import('bower_components/Materialize/fonts/roboto/Roboto-Thin.ttf', { destDir: destDir });


  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
