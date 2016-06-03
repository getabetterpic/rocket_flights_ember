import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  successful: attr('boolean'),
  notes: attr('string'),
  flightDate: attr('date'),
  rocket: belongsTo('rocket')
});
