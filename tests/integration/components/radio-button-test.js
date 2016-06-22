import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('radio-button', 'Integration | Component | radio button', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{radio-button id="radio-button-test"}}`);

  assert.ok(this.$('#radio-button-test'));
});
