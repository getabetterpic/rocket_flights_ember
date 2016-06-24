import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['row'],
  didInsertElement() {
    Ember.$('ul.tabs').tabs();
  }
});
