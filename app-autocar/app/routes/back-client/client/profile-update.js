import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    didTransition() {
      document.title = "Client - Modification de votre profil";
    }
  }

});
