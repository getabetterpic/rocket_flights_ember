import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Materialize.updateTextFields();
    Ember.$('select').material_select();
  }
});
