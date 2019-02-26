import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    console.log('coucou quote')
 return this.store.findAll('quote')

  },
  actions: {
    didTransition() {
      document.title = 'Agent - Liste devis';
    }
  }
});
