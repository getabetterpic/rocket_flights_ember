import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    // Have to run #material_select later due to values not showing up
    // in dropdown properly. 100 ms seems to be about the right amount
    // of time, in development at least.
    Ember.run.later(() => {
      Ember.$('#motor-select').material_select();
    }, 100);
  },
  actions: {
    motorDidChange(value) {
      let selection = this.get('motors').findBy('id', value);
      this.get('onchange')(selection);
    }
  }
});
