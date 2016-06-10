import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('rocket', params.rocket_id).then((rocket) => {
      const dt = new Date();
      return this.store.createRecord('flight', {
        rocket: rocket,
        flightDate: dt
      });
    });
  }
});
