import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Materialize.updateTextFields();
    Ember.$('select').material_select();
  },

  actions: {
    openMotorModal() {
      this.openMotorModal();
    },
    removeMotor(flightMotor) {
      this.removeMotor(flightMotor);
    },
    cancelFlight() {
      history.back(-1);
    }
  }
});
