import Route from '@ember/routing/route';

export default Route.extend({
<<<<<<< HEAD
  model(params){
    return this.store.findRecord('quote', params.idfolder)
      },
=======
  model(params) {
    return this.store.findRecord('quote', params.idfolder)
  },
>>>>>>> cac827cd4e1b374039a99e9d3fda08c65afb767e
  actions: {
    didTransition() {
      document.title = 'Agent - Fiche dossier';
    }
  }
});
