import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  imageUrl: attr('string'),
  imageFileName: attr('string'),
  rocket: belongsTo('rocket'),
  imageRocketLink: Ember.computed('rocket.id', 'imageFileName', function() {
    return `rockets/${this.get('rocket.id')}#${this.get('imageFileName')}`
  })
});
