import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('flight-data', 'Integration | Component | flight data', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });


  this.render(hbs`{{flight-data}}`);

  assert.equal(this.$('#flight-data').length, 1);
});

test('it sends openMotorModal action when the open-motor-modal link is clicked', function(assert) {
  this.set('openMotorModal', function() { assert.ok('openMotorModal called'); });

  this.render(hbs`{{flight-data openMotorModal=openMotorModal}}`);

  this.$('#open-motor-modal').click();
});
