import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('date-picker', 'Integration | Component | date picker', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const date = new Date('2016', '06', '11');
  this.set('date', date);
  this.render(hbs`{{date-picker}}`);
  assert.ok(this.$('input'));
});
