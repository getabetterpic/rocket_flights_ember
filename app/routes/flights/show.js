import Ember from 'ember';
import FlightRoutes from '../../mixins/flight-routes';

export default Ember.Route.extend(FlightRoutes, {
  model(params) {
    return this.store.findRecord('flight', params.flight_id, { include: 'rocket,flight-motors' });
  },
  setupController(controller, model) {
    controller.setProperties({
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
    }
  }
});
