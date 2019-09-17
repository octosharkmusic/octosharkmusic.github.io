import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('number'),
  locationName: DS.attr('string'),
  image: DS.attr('string'),
  locationGeo: DS.attr('number')
});
