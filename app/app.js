import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

Ember.Router.reopen({
  notifyGoogleAnalytics: Ember.on('didTransition', function() {
    if (!ga) { return; }
		return ga('send', 'pageview', {
			page: this.get('url'),
			title: this.get('url')
		});
  })
});

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
