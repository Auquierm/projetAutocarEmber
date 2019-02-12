import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  adresseFacturation : attr(),
  uniqueField: attr('string'),
  numTva : attr('string'),
  numFax : attr('string'),
  societe : attr('string'),
  numBank : attr('string'),
  idUser : attr('string'),
});
