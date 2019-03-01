import Route from '@ember/routing/route'

export default Route.extend({
  model(params){
return this.store.findRecord('quote', params.idQuote)
  },
  actions: {
    didTransition() {
      document.title = 'Agent - Fiche devis'
    }
  }
});
