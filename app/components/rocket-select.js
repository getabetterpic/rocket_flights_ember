import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
  },
  actions: {
    rocketDidChange(value) {
      let selection = this.get('rockets').findBy('id', value);
      this.get('onchange')(selection);
    }
  }
});
