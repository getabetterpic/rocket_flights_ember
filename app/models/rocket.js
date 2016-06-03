import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  manufacturer: attr('string'),
  length: attr('number'),
  diameter: attr('number'),
  centerOfPressure: attr('number'),
  centerOfGravity: attr('number'),
  dragCoefficient: attr('number'),
  stages: attr('number'),
  flights: hasMany('flight')
});
