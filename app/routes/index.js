import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    let rockets = this.store.findAll('rocket', { includes: 'flight' });
    let flights = this.store.findAll('flight', { includes: 'motor' });
    let motors = this.store.findAll('motor');

    controller.setProperties({
      rockets: rockets,
      flights: flights,
      motors: motors
    });
  }
});
