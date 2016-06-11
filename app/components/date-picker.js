import Ember from 'ember';
const { $ } = Ember;

export default Ember.Component.extend({
  tagName: 'input',
  type: 'date',
  classNames: ['datepicker'],
  attributeBindings: ['type', 'data-value'],
  "data-value"() {
    return moment(this.get('date')).format("LL");
  },
  didInsertElement() {
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 5,
      format: 'd mmmm, yyyy'
    });
  }
});
