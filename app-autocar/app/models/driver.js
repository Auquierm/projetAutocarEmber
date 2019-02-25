import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  firstname: attr('string'),
  lastname: attr('string'),
  sexe: attr('string'),
  password: attr('string'),
  age: attr('string'),
  email: attr('string'),
  phone: attr('string'),
  servicePhone: attr('string'),
  language: attr('string'),
  numPermis: attr('string'),
  medicalDate: attr('date'),
  capDate: attr('date'),
  tripDone: attr(),
  tripToDo: attr(),
  surveyNote: attr(),
  address: attr(),
  idUser: belongsTo('user'),
});
