import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    didTransition() {
      document.title = 'Client - Tableau de bord';
    }
  }
});
