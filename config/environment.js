/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'rocket-flights-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-simple-auth': {
      authenticationRoute: '',
      routeAfterAuthentication: 'flights',
      routeIfAlreadyAuthenticated: 'flights'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.HOST = 'http://localhost:3000';
    ENV['auth0-ember-simple-auth'] = {
      clientID: "Z2j7Ipj6GnOmD1wjGLNxW8ba3MoXhm28",
      domain: "getabetterpic.auth0.com"
    };
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.HOST = 'https://rocket-flights-api.getabetterpic.com';
    ENV['auth0-ember-simple-auth'] = {
      clientID: "Z2j7Ipj6GnOmD1wjGLNxW8ba3MoXhm28",
      domain: "getabetterpic.auth0.com"
    };
  }

  return ENV;
};
