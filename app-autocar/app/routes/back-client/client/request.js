import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
   return await this.store.findRecord('quote', params.idrequest)
  },
  afterModel(model) {
    return model.reload();
  },
  actions: {
    didTransition() {
      document.title = 'Client - Votre demande';
    }
  }
});
