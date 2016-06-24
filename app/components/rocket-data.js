import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['id'],
  id: 'rocket-data-form',
  didInsertElement() {
    Materialize.updateTextFields();
  },

  actions: {
    removeFlightFromRocket(flight) {
      this.removeFlightFromRocket(flight);
    },
    cancelRocket() {
      history.back(-1);
    }
  }
});
