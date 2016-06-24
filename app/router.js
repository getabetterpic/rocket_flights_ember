import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('motors', function() {
    this.route('show', { path: '/:motor_id' });
    this.route('new');
  });
  this.route('rockets', function() {
    this.route('show', { path: '/:rocket_id' });
    this.route('new');
    this.route('my-rockets');
  });
  this.route('flights', function() {
    this.route('show', { path: '/:flight_id' });
    this.route('new');
    this.route('my-flights');
  });
});

export default Router;
