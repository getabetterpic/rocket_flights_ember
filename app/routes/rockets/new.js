import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('rocket');
  },
  actions: {
    saveRocket(model) {
      model.save().then((model) => {
        this.transitionTo('rockets.show', model);
      }).catch((errors) => {
        errors.errors.forEach((error) => {
          Materialize.toast(error.details.capitalize(), 3000);
        });
      });
    },
    cancelRocket() {
      this.transitionTo('rockets.index');
    },
    willTransition() {
      if(this.controller.get('model.isNew')) {
        this.controller.get('model').destroyRecord();
      }
      return true;
    }
  }
});
