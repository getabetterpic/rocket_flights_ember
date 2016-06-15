import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveMotor() {
      this.attrs.saveMotor();
    },
    cancelMotor() {
      this.attrs.cancelMotor();
    }
  }
});
