import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model() {
    return this.get('session.currentUser').then((user) => {
      const userId = user.get('id');
      return this.store.query('userRocket', { filter: { user_id: userId }, include: 'rocket' });
    });
  },
  setupController(controller, model) {
    controller.setProperties({
      session: this.get('session'),
      model: model
    });
  }
});
