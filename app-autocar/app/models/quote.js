import DS from 'ember-data';
const { attr, belongsTo, hasMany } = DS;
export default DS.Model.extend({
  numFolder: attr('number'),
  status: attr('string'),
  placeDeparture: attr('string'),
  placeArrival: attr('string'),
  dateArrival: attr('string'),
  totalKm: attr('number'),
  pax: attr('number'),
  numberDriver: attr('number'),
  capacityAutocar: attr('number'),
  numberAutocar: attr('number'),
  includeIn: attr('string'),
  notIncludeIn: attr('string'),
  price: attr('number'),
  idUser: belongsTo('client')
});
