import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('motors');
  this.route('rockets', function() {
    this.route('show', { path: '/:rocket_id' });
    this.route('new');
  });
  this.route('flights', function() {
    this.route('show', { path: '/:flight_id' });
    this.route('new');
  });
});

export default Router;
