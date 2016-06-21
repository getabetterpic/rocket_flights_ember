import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';
const { isEmpty } = Ember;

export default Base.extend({
  authorize(sessionData, block) {
    const tokenAttributeName = 'jwt';
    const userToken = sessionData[tokenAttributeName];
    if (!isEmpty(userToken)) {
      block('Authorization', `Bearer ${userToken}`);
    }
  }
});
