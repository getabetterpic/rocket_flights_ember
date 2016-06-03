import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('rocket');
  },
  actions: {
    saveRocket(model) {
      model.save().then(model => {
        this.transitionTo(model);
      });
    }
  }
});
