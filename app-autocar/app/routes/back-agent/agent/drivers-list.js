import Route from '@ember/routing/route';

export default Route.extend({
  model(){
     return this.store.findAll('user')

      },

  actions: {
    didTransition() {
      document.title = 'Agent - Liste chauffeurs';
    }
  }
});
