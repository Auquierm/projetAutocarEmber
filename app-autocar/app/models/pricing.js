import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  priceKms: attr('number'),
  vat: attr('number'),
  priceOneCar: attr('number'),
  capacity: attr(),
  margin: attr(),
  priceDriver: attr(),
  tollFee: attr('number'),
  season: attr(),
  options: attr(),
  divers: attr()
});
