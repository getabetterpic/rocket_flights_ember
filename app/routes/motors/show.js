import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveMotor(motor) {
      motor.save().then(() => {
        Materialize.toast("Motor saved", 1500);
      }).catch((error) => {
        error.errors.forEach((error) => {
          Materialize.toast(error.detail.capitalize(), 3000);
        });
      });
    }
  }
});
