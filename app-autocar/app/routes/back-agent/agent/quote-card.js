// import Route from '@ember/routing/route'

export default Ember.Route.extend({
  model(params) {
    // return this.store.findRecord('quote', params.idquote)
    return Ember.RSVP.hash({
      quote: this.store.findRecord('quote', params.idquote),
      pricing: this.store.findAll('pricing')
    })
  },
  setupController(controller, models) {
    controller.set('quote', models.quote);
    controller.set('pricing', models.pricing);
  },
  actions: {
    didTransition() {
      document.title = 'Agent - Fiche devis';
    }
  }
});