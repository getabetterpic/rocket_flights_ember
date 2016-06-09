import Ember from 'ember';

export function formatDate(params, options) {
  return moment(params).format(options.format);
}

export default Ember.Helper.helper(formatDate);
