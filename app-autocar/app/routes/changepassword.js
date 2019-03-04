import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    didTransition() {
      document.title = 'Pimp My Trip - Changement de mot de passe';
    }
  }
});
