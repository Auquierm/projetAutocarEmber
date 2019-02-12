import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  username: attr('string'),
  firstname: attr('string'),
  lastname: attr('string'),
  sexe: attr('string'),
  password: attr('string'),
  age: attr('string'),
  email: attr('string'),
  phone: attr('string'),
  adress: attr(),
  idRole: ('client')
});
