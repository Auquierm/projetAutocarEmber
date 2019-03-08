import {hash} from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    return hash({
      quote: await this.store.findRecord('quote', params.idfolder),
      pricing: await this.store.findAll('pricing')
    })
  },
  setupController(controller, models) {
    controller.set('quote', models.quote);
    controller.set('pricing', models.pricing);
  },
  actions: {
    didTransition() {
      document.title = 'Client - Votre devis accepté';
    }
  }
});
