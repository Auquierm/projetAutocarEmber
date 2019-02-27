import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    return this.store.findRecord('quote', params.idrequest);
  },
  actions: {
    didTransition() {
      document.title = 'Client - Votre demande';
    }
  }
});
