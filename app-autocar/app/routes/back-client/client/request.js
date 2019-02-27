import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    console.log(params.idrequest);
  },
  actions: {
    didTransition() {
      document.title = 'Client - Votre demande';
    }
  }
});
