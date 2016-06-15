import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('flight', params.flight_id);
  },
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
    saveFlight(model) {
      model.save().then(() => {
        Materialize.toast("Flight saved", 1500);
      }).catch((error) => {
        Materialize.toast("There was a problem saving flight", 1500);
        Materialize.toast(error, 1500);
      });
    },
    cancelFlight() {
      this.transitionTo('flights.index');
    },
    saveMotor() {
      let flightMotor = this.controller.get('newFlightMotor');
      Ember.debug(flightMotor.get('motor.isEmpty'));
      if (flightMotor.get('motor.isEmpty') === undefined) {
        flightMotor.destroyRecord();
      } else {
        flightMotor.save();
        this.controller.set('newFlightMotor', undefined);
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
    }
  }
});
