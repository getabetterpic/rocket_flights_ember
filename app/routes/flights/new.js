import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    if (params.rocket_id) {
      return this.store.find('rocket', params.rocket_id).then((rocket) => {
        const dt = new Date();
        return this.store.createRecord('flight', {
          rocket: rocket,
          flightDate: dt
        });
      });
    } else {
      const dt = new Date();
      return this.store.createRecord('flight', {
        flightDate: dt
      });
    }
  },
  actions: {
    saveFlight(model) {
      model.save().then(() => {
        Materialize.toast("Flight saved", 1500);
      });
    }
  }
});
