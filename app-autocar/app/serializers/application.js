import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey:'_id',

  // normalizeResponse (store, primaryModelClass, payload, id, requestType) {
  //   let newPayload = {}
  //   newPayload[primaryModelClass.modelName]=payload;
  //   //console.log(newPayload)
  //   return this._super(store, primaryModelClass, newPayload, id, requestType)
  // },


});
