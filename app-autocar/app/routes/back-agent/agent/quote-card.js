import Route from '@ember/routing/route'

export default Route.extend({
  model(params) {
    return this.store.findRecord('quote', params.idquote)
  },
  afterModel(model) {
    model.reload();
  },
  actions: {
    didTransition() {
      document.title = 'Agent - Fiche devis';
      // console.log(this.get('controller.model'));
      // this.set('controller.model',)
    }
  }
});
