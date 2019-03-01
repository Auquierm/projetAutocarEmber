import Route from '@ember/routing/route';

export default Route.extend({
<<<<<<< HEAD
  model(params){
return this.store.findRecord('client', params.idclient)
=======
  model(params) {
    return this.store.findRecord('client', params.idclient)
>>>>>>> cac827cd4e1b374039a99e9d3fda08c65afb767e
  },
  actions: {
    didTransition() {
      document.title = 'Agent - Fiche client';
    }
  }
});
