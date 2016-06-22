import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('motor-modal', 'Integration | Component | motor modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{motor-modal}}`);

  assert.equal(this.$('#motor-modal').length, 1);
});

test('it sends saveMotor action when save button is clicked', function(assert) {
  this.set('saveMotor', function() { assert.ok('saveMotor called'); });

  this.render(hbs`{{motor-modal saveMotor=saveMotor}}`);

  this.$('#save').click();
});

test('it sends cancelMotor action when cancel button is clicked', function(assert) {
  this.set('cancelMotor', function() { assert.ok('cancelMotor called'); });

  this.render(hbs`{{motor-modal cancelMotor=cancelMotor}}`);

  this.$('#cancel').click();
});
