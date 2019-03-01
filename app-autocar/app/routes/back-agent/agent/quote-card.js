import Route from '@ember/routing/route'

export default Route.extend({
<<<<<<< HEAD
  model(params){
return this.store.findRecord('quote', params.idquote)
=======
  model(params) {
    return this.store.findRecord('quote', params.idquote)
  },
  afterModel(model) {
    model.reload();
>>>>>>> cac827cd4e1b374039a99e9d3fda08c65afb767e
  },
  actions: {
    didTransition() {
      document.title = 'Agent - Fiche devis';
      // console.log(this.get('controller.model'));
      // this.set('controller.model',)
    }
  }
});
