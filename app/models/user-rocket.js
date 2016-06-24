import Model from 'ember-data/model';
import Ember from 'ember';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user'),
  rocket: belongsTo('rocket'),
  rocketName: Ember.computed('rocket.name', 'rocket.manufacturer', function() {
    return `${this.get('rocket.manufacturer')} ${this.get('rocket.name')}`;
  }),
  rocketFlightsLength: Ember.computed('rocket.flights.@each', function() {
    return this.get('rocket.flights.length');
  })
});
