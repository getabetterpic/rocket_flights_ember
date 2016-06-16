import Ember from 'ember';
const { $, computed } = Ember;

export default Ember.Component.extend({
  tagName: 'input',
  type: 'date',
  classNames: ['datepicker'],
  attributeBindings: ['type', 'data-value'],
  "data-value": computed('date', function() {
    return moment(this.get('date')).format("D MMMM, YYYY");
  }).readOnly(),
  didInsertElement() {
    let component = this;
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 5,
      format: 'd mmmm, yyyy',
      onSet: function(context) {
        component.updateDate(context.select);
      }
    });
  }
});
