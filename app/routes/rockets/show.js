import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('rocket', params.rocket_id, { include: 'flights' });
  },
  actions: {
    saveRocket(model) {
      model.save().then(() => {
        Materialize.toast("Rocket saved", 1500);
      });
    },
    removeFlightFromRocket(flight) {
      flight.destroyRecord().then(() => {
        Materialize.toast('Flight successfully removed', 1500);
      }).catch((errors) => {
        errors.errors.forEach((error) => {
          Materialize.toast(error.details, 3000);
        });
      });
    },
    addRocketToCollection(rocket) {
      this.get('session.currentUser').then((user) => {
        this.store.createRecord('userRocket', {
          user: user,
          rocket: rocket
        }).save().then(() => {
          Materialize.toast('Rocket successfully added to collection', 1500);
          this.transitionTo('rockets.my-rockets');
        });
      });
    }
  }
});
