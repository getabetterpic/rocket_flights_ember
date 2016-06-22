import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('radio-button', 'Integration | Component | radio button', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{radio-button id="radio-button-test"}}`);

  assert.ok(this.$('#radio-button-test'));
});

test('a group updates the groupValue when changed', function(assert) {
  this.set('groupValue', false);
  this.render(hbs`{{radio-button value=true groupValue=groupValue id="radio-button-test"}}`);

  assert.equal(this.get('groupValue'), false);
  assert.equal(this.$('#radio-button-test').is(':checked'), false);

  this.$('#radio-button-test').click();

  assert.equal(this.get('groupValue'), true);
  assert.equal(this.$('#radio-button-test').is(':checked'), true);
});
