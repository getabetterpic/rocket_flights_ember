import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import { computed } from 'ember';

export default Model.extend({
  user: belongsTo('user'),
  rocket: belongsTo('rocket'),
  rocketName: computed('rocket.name', 'rocket.manufacturer', function() {
    return `${this.get('rocket.manufacturer')} ${this.get('rocket.name')}`;
  }),
  rocketFlightsLength: computed('rocket.flights.@each', function() {
    return this.get('rocket.flights.length');
  })
});
