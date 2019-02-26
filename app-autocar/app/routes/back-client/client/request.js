import Route from '@ember/routing/route';

export default Route.extend({
  // async model(params) {
  //   return await this.store.findRecord('quote', params.idRequest);
  // },
  actions: {
    didTransition() {
      document.title = 'Client - Votre demande';
    }
  }
});
