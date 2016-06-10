import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let flight;
    this.store.find('rocket', params.rocket).then((rocket) => {
      const dt = new Date();
      flight = this.store.createRecord('flight', {
        rocket: rocket,
        flightDate: dt
      });
    });
    console.log(flight);
    return flight;
  }
});
