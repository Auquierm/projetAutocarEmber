import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('driver', params.iddriver)
  },
  actions: {
    didTransition() {
      document.title = 'Agent - Fiche chauffeur';
    }
  }
});
