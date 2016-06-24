import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.$('ul.tabs').tabs();
  }
});
