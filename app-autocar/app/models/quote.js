import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  numFolder: attr('string'),
  placeDeparture: attr(),
  placeArrival: attr(),
  dateArrival: attr('date'),
  dateDeparture: attr('date'),
  totalKm : attr('number'),
  pax: attr('number'),
  options: attr('string'),
  numberDriver: attr('number'),
  capacityAutocar: attr('number'),
  includeIn: attr('string'),
  notIncludeIn: attr('string'),
  price: attr('number'),
  Status: attr('string'),
  idUser: belongsTo('client'),
  com: attr('string')



});
