import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  attributeBindings: ['id'],
  id: 'nav-bar',
  didInsertElement() {
    Ember.$('.button-collapse').sideNav({
      closeOnClick: true
    });
  },

  actions: {
    login() {
      this.login();
    },
    logout() {
      this.logout();
    }
  }
});
