import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('session', this.get('session'));
  }
});
