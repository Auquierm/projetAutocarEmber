import Route from '@ember/routing/route';

export default Route.extend({
  model(){
return this.store.findAll('client', 'quote')

  },
  actions: {
    didTransition() {
      document.title = 'Agent - Tableau de bord';
    }
  }
});
