import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  successful: attr('boolean'),
  notes: attr('string'),
  flightDate: attr('date'),
  altitude: attr('number'),
  rocket: belongsTo('rocket'),
  flightMotors: hasMany('flightMotor')
});
