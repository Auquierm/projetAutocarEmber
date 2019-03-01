// import Route from '@ember/routing/route';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('quote', params.idproposal);

  },
  actions: {
    didTransition() {
      document.title = 'Client - Proposition de devis';
    }
  }
});
