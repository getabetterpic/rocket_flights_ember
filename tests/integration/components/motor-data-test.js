import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('motor-data', 'Integration | Component | motor data', {
  integration: true
});

test('it saves a motor', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{motor-data}}`);

  assert.ok(this.$('form'));
});
