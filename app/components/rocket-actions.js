import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openUploadModal() {
      Ember.$('#upload-modal').openModal();
    }
  }
});
