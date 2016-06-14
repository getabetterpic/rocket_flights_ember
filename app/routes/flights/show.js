import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('flight', params.flight_id);
  },
  setupController(controller, model) {
    controller.setProperties({
      rockets: this.store.findAll('rocket'),
      model: model
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
    }
  }
});
