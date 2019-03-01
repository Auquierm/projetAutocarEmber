import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.findAll('quote')
  },
  actions: {
    didTransition() {
      document.title = 'Agent - Liste dossiers';
    }
  }
});
