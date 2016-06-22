import { moduleForModel, test } from 'ember-qunit';

moduleForModel('flight', 'Unit | Model | flight', {
  // Specify the other units that are required for this test.
  needs: ['model:rocket', 'model:flight-motor']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
