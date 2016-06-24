import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    return this.store.findAll('motor');
  },
  setupController(controller, model) {
    controller.setProperties({
      session: this.get('session'),
      model: model
    });
  }
});
