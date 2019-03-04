import DS from 'ember-data';

const { attr, belongsTo} = DS;
// const roles = ['client', 'agent', 'chauffeur'];

export default DS.Model.extend({
  firstname: attr('string'),
  lastname: attr('string'),
  sexe: attr('string'),
  password: attr('string'),
  age: attr('string'),
  email: attr('string'),
  phone: attr('string'),
  address: attr(),
  idUser: belongsTo('client'),
  idUser: belongsTo('agent'),
  idUser: belongsTo('driver')
});
