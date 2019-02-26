import Route from '@ember/routing/route';
import client from '../../../models/client';
//injecter le router, importer le service ember
export default Route.extend({
  // async afterModel(model) {
  //   let id = window.location.href.split('/')[4];
  //   model = this.store.findRecord('client', id);
  //   return model;
  // },

  actions: {
    didTransition() {
      document.title = 'Client - Votre profil';
    }
  }
});
