import { formatDate } from 'rocket-flights-ember/helpers/format-date';
import { module, test } from 'qunit';

module('Unit | Helper | format date');

// Replace this with your real tests.
test('it correctly formats a date object', function(assert) {
  let result = formatDate([moment('June 9, 2016', 'MMMM D, YYYY').toDate()], { format: 'LL' });
  assert.equal(result, 'June 9, 2016');
});
