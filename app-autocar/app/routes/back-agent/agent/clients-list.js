import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    console.log('coucou')
 return this.store.findAll('client')

  },

   actions: {
    didTransition() {
      document.title = 'Agent - Liste des clients';
    }
  }
});
