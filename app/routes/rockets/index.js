import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  
  model() {
    return this.store.findAll('rocket', { include: 'flights' });
  },
  setupController(controller, model) {
    controller.setProperties({
      session: this.get('session'),
      model: model
    });
  }
});
