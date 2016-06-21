import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from 'rocket-flights-ember/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.HOST,
  authorizer: 'authorizer:auth0'
});
