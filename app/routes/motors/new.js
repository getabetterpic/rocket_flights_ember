import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('motor');
  },
  actions: {
    saveMotor(motor) {
      motor.save().then((motor) => {
        this.transitionTo('motors.show', motor).then(() => {
          Materialize.toast("Motor saved", 1500);
        });
      }).catch((error) => {
        error.errors.forEach((error) => {
          Materialize.toast(error.detail.capitalize(), 3000);
        });
      });
    },
    willTransition() {
      if (this.controller.get('model.isNew')) {
        this.controller.get('model').destroyRecord();
      }
      return true;
    },
    cancelMotor() {
      this.transitionTo('motors.index');
    }
  }
});
