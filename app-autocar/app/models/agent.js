import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  servicePhone: attr('string'),
  language: attr('string'),
  idUser:belongsTo('user')
  //grâce à l'idUser il va chercher les propriétés du model user
});
