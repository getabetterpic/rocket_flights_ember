import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal() {
      Ember.$('#upload-modal').closeModal();
    }
  }
});
