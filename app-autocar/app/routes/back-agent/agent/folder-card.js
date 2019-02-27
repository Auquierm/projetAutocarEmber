import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.store.findRecord('quote', params.idFolder)
      },
  actions: {
    didTransition() {
      document.title = 'Agent - Fiche dossier';
    }
  }
});
