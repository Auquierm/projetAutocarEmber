import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
return this.store.findRecord('client', params.idClient)
  },
  actions: {
    didTransition() {
      document.title = 'Agent - Fiche client';
    }
  }
});
