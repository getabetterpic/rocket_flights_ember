import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),

  model() {
    return this.store.createRecord('rocket');
  },
  actions: {
    saveRocket(model) {
      model.save().then((model) => {
        this.get('session.currentUser').then((user) => {
          this.store.createRecord('userRocket', {
            user: user,
            rocket: model
          }).save();
        });
        this.transitionTo('rockets.show', model);
      }).catch((errors) => {
        errors.errors.forEach((error) => {
          Materialize.toast(error.detail.capitalize(), 3000);
        });
      });
    },
    willTransition() {
      if(this.controller.get('model.isNew')) {
        this.controller.get('model').destroyRecord();
      }
      return true;
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
