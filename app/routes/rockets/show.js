import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rocket', params.rocket_id, { include: 'flights' });
  },
  actions: {
    saveRocket(model) {
      model.save().then(() => {
        Materialize.toast("Rocket saved", 1500);
      });
    },
    cancelRocket() {
      this.transitionTo('rockets.index');
    },
    removeFlightFromRocket(flight) {
      flight.destroyRecord().then(() => {
        Materialize.toast('Flight successfully removed', 1500);
      }).catch((errors) => {
        errors.errors.forEach((error) => {
          Materialize.toast(error.details, 3000);
        });
      });
    }
  }
});
