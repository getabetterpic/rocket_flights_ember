import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('rocket', params.rocket_id, { include: 'flights,images' });
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('session', this.get('session'));
    if (this.get('session.isAuthenticated')) {
      this.get('session.currentUser').then((user) => {
        const userId = user.get('id');
        let userRockets = this.store.query('userRocket', { filter: { user_id: userId }, include: 'rocket' });
        controller.set('userRockets', userRockets);
        userRockets.then((userRockets) => {
          if (userRockets.isAny('rocket.id', model.get('id'))) {
            controller.set('isInCollection', true);
          } else {
            controller.set('isInCollection', false);
          }
        });
      });
    }
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
    },
    removeRocketFromCollection(rocket) {
      this.get('session.currentUser').then((user) => {
        this.controller.get('userRockets').forEach((ur) => {
          console.log(ur.get('rocket.id'));
          console.log(ur.get('user.id'));
          if (ur.get('rocket.id') === rocket.get('id')) {
            ur.destroyRecord().then(() => {
              this.transitionTo('rockets.my-rockets');
            });
          }
        });
      });
    },
    addImageToStore(image) {
      this.store.pushPayload('image', image);
      this.controller.get('model').reload();
    }
  }
});
