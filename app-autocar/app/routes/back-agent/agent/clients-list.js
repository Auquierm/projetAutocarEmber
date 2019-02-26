import Route from '@ember/routing/route';

export default Route.extend({
  model(){
//  return this.store.findAll('user'),
 return this.store.query('user', {
      filter: {
        onModel: 'client'
      }

})
  },

   actions: {
    didTransition() {
      document.title = 'Agent - Liste des clients';
    }
  }
});
