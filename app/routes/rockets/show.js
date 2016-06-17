import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rocket', params.rocket_id, { include: 'flights' });
  },
  actions: {
    saveRocket(model) {
      model.save().then(() => {
        Materialize.toast("Rocket saved", 1500);
      });
    },
    cancelRocket() {
      this.transitionTo('rockets.index');
    }
  }
});
