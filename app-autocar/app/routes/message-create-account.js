import Route from '@ember/routing/route';

export default Route.extend({
  async model(params){
    return this.store.findRecord('client', params.idclient);
  },
  actions: {
    didTransition() {
      document.title = 'Pimp My Trip - Message de création de compte';
    }
  }
});
