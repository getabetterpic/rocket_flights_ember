import Ember from 'ember';
import FlightRoutesMixin from 'rocket-flights-ember/mixins/flight-routes';
import { module, test } from 'qunit';

module('Unit | Mixin | flight routes');

// Replace this with your real tests.
test('it works', function(assert) {
  let FlightRoutesObject = Ember.Object.extend(FlightRoutesMixin);
  let subject = FlightRoutesObject.create();
  assert.ok(subject);
});
