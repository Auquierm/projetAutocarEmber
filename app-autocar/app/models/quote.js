import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  numFolder: attr('number'),
  placeDeparture: attr(),
  placeArrival: attr(),
  dateArrival: attr('string'),
  dateDeparture: attr('string'),
  totalKm: attr('number'),
  pax: attr('number'),
  options: attr(),
  numberDriver: attr('number'),
  capacityAutocar: attr('number'),
  includeIn: attr('number'),
  notIncludeIn: attr('number'),
  numberAutocar: attr('number'),
  price: attr('number'),
  status: attr('string'),
  com: attr('string'),
  idClient: belongsTo('client'),
  dateCreation: attr('string'),
  timeTravel: attr('number'),
  nameDriver : attr()
});
