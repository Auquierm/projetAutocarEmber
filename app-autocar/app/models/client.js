import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  adresseFacturation: attr(),
  numTva: attr('string'),
  numFax: attr('string'),
  societe: attr('string'),
  numBank: attr('string'),
  idUser: belongsTo('user')
});
