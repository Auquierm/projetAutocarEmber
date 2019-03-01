import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findAll('client')
  },
  actions: {
    didTransition() {
      document.title = 'Agent - Tableau de bord';
    }
  }
});
