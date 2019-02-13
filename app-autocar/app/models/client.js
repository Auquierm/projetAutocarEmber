import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  firstname : attr('string'),
  lastname :  attr('string'),
  sexe : attr('string'),
  age : attr('string'),
  email: attr('string'),
  phone : attr('string'),
  address : attr(),
  adresseFacturation : attr(),
  numTva : attr('string'),
  numFax : attr('string'),
  societe : attr('string'),
  numBank : attr('string'),
  idUser : attr('string'),
});
