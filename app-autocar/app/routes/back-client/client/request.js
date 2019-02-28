import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
<<<<<<< HEAD
    this.store.findRecord('quote', params.idrequest)
=======
    return this.store.findRecord('quote', params.idrequest);
>>>>>>> 0be21ff53006b9d5d9880c176ac3c26b6951c20b
  },
  actions: {
    didTransition() {
      document.title = 'Client - Votre demande';
    }
  }
});
