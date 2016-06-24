import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),
  model() {
    return this.get('session.currentUser').then((user) => {
      const userId = user.get('id');
      return this.store.query('userFlight', { filter: { user_id: userId }, include: 'flight' });
    });
  },
  setupController(controller, model) {
    controller.setProperties({
      session: this.get('session'),
      model: model
    });
  }
});
