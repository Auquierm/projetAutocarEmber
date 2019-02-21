import Route from '@ember/routing/route';

export default Route.extend({
  acionts: {
    didTransition() {
      document.title = 'Pimp My Trip - Login';
    }
  },
  resetController(controller) {
    controller.setProperties({ 'email': '', 'password': '' })
  }
});
