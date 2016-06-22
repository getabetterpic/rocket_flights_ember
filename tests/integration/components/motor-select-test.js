import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('motor-select', 'Integration | Component | motor select', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{motor-select}}`);

  assert.ok(this.$('#motor-select'));
});

test('it prompts the user to select a motor', function(assert) {
  assert.expect(2);

  this.render(hbs`{{motor-select}}`);

  assert.equal(this.$('select option:selected').text(), 'Select a motor');
  assert.equal(this.$('select').val(), null);
});

test('it fills in select with motors', function(assert) {
  const motorObjects = [
    Ember.Object.create({ name: 'A8-3', manufacturer: 'Estes' }),
    Ember.Object.create({ name: 'B6-4', manufacturer: 'Estes' }),
    Ember.Object.create({ name: 'D12-7', manufacturer: 'Estes' })
  ];

  this.set('motors', motorObjects);
  this.render(hbs`{{motor-select motors=motors}}`);

  const $dropdown = this.$('#motor-select');

  let motor0 = motorObjects[0];
  assert.equal(
    $dropdown.find('option:eq(1)').text().trim(),
    `${motor0.get('manufacturer')} ${motor0.get('name')}`
  );

  let motor1 = motorObjects[1];
  assert.equal(
    $dropdown.find('option:eq(2)').text().trim(),
    `${motor1.get('manufacturer')} ${motor1.get('name')}`
  );
});

test('it changes the selectedMotor on selecting a motor', function(assert) {
  const motorObjects = Ember.A([
    Ember.Object.create({ name: 'A8-3', manufacturer: 'Estes', id: '1' }),
    Ember.Object.create({ name: 'B6-4', manufacturer: 'Estes', id: '2' }),
    Ember.Object.create({ name: 'D12-7', manufacturer: 'Estes', id: '3' })
  ]);

  this.set('motors', motorObjects);
  this.set('selectedMotor', motorObjects[2]);

  this.render(hbs`{{motor-select
                    motors=motors
                    selectedMotor=selectedMotor
                    onchange=(action (mut selectedMotor))}}`);

  let $select = this.$('#motor-select');
  $select.val('1');
  $select.change();

  assert.equal(this.get('selectedMotor.id'), motorObjects[0].get('id'));
});
