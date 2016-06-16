import Ember from 'ember';
import FlightRoutes from '../../mixins/flight-routes';

export default Ember.Route.extend(FlightRoutes, {
  model(params) {
    const dt = new Date();
    if (params.rocket_id) {
      return this.store.find('rocket', params.rocket_id).then((rocket) => {
        return this.store.createRecord('flight', {
          rocket: rocket,
          flightDate: dt
        });
      });
    } else {
      return this.store.createRecord('flight', {
        flightDate: dt
      });
    }
  },

  actions: {
    saveFlight(model) {
      model.save().then((model) => {
        this.transitionTo('flights.show', model);
      }).catch((error) => {
        Materialize.toast("There was a problem saving flight", 1500);
        Materialize.toast(error, 1500);
      });
    },
    willTransition() {
      if (this.controller.get('model.isNew')) {
        this.controller.get('model').destroyRecord();
      }
      return true;
    }
  }
});
