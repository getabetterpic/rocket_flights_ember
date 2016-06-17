import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Materialize.updateTextFields();
  },

  actions: {
    removeFlightFromRocket(flight) {
      this.removeFlightFromRocket(flight);
    }
  }
});
