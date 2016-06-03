import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from 'rocket-flights-ember/config/environment';

export default JSONAPIAdapter.extend({
  host: ENV.HOST
});
