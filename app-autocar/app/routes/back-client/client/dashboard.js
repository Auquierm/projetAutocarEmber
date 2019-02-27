import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(model){
    return model.reload();
  },
  actions: {
    didTransition() {
      document.title = 'Client - Tableau de bord';
    }
  }
});
