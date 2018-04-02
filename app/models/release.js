import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  version:  attr('string'),
  dateCreated: attr(),
  lastEvent: attr()
  // @TODO - create a DATE transform
});
