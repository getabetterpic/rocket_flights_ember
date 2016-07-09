import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['collapsible', 'popout'],
  didInsertElement() {
    $('.collapsible').collapsible();
  }
});
