import Route from '@ember/routing/route'
import {hash} from 'rsvp';

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
  resetController(controller){
    controller.setProperties({
      "totalKm":"",
      "addCost":""
    })
  },
  actions: {
    didTransition() {
      document.title = 'Agent - Fiche dossier';
    }
  }
});
