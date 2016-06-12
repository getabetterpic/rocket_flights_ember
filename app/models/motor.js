import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  manufacturer: attr('string'),
  name: attr('string'),
  diameterInMm: attr('number'),
  flightMotor: hasMany('flightMotor')
});
