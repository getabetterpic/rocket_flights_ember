import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    login() {
      this.login();
    },
    logout() {
      this.logout();
    }
  }
});
