import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'input',
  type: 'radio',
  id: computed('id', function() {
    return this.get('id');
  }),
  attributeBindings: ['type', 'checked', 'id'],
  checked: computed('value', 'groupValue', function() {
    return this.get('value') === this.get('groupValue');
  }).readOnly(),

  change() {
    let value = this.get('value');
    let groupValue = this.get('groupValue');

    if (groupValue !== value) {
      this.set('groupValue', value);
    }
  }
});
