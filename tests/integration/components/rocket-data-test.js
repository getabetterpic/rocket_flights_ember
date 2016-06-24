import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rocket-data', 'Integration | Component | rocket data', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{rocket-data}}`);
  assert.equal(this.$('#rocket-data-form').length, 1);
});
