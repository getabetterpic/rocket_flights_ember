import Ember from 'ember';

export default Ember.Mixin.create({
  setupController(controller, model) {
    controller.setProperties({
      rockets: this.store.findAll('rocket'),
      model: model,
      motors: this.store.findAll('motor')
    });

    if (model.get('rocket')) {
      controller.set('selectedRocket', model.get('rocket'));
    }
  },

  actions: {
    cancelFlight() {
      this.transitionTo('flights.index');
    },
    saveMotor() {
      let flightMotor = this.controller.get('newFlightMotor');
      if (flightMotor.get('motor.isEmpty') === undefined) {
        flightMotor.destroyRecord();
      } else {
        flightMotor.save().then((motor) => {
          Materialize.toast('Motor attached to flight', 1500);
          this.controller.set('newFlightMotor', undefined);
        }).catch((errors) => {
          errors.errors.forEach((error) => {
            Materialize.toast(error.details.capitalize(), 3000);
          });
        });
      }
    },
    openMotorModal() {
      let flightMotor = this.store.createRecord('flightMotor', {
        flight: this.controller.get('model')
      });
      this.controller.set('newFlightMotor', flightMotor);
      this.controller.set('motors', this.store.findAll('motor'));
      Ember.$('#motor-modal').openModal();
    },
    cancelMotor() {
      let flightMotor = this.controller.get('newFlightMotor');
      flightMotor.destroyRecord();
    },
    removeMotor(flightMotor) {
      flightMotor.destroyRecord().then(() => {
        Materialize.toast('Motor removed', 1500);
      }).catch((errors) => {
        errors.errors.forEach((error) => {
          Materialize.toast(error.details, 3000);
        });
      });
    },
    updateDate(epoch) {
      let dt = new Date(epoch);
      this.controller.get('model').set('flightDate', dt);
    }
  }
});
