import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  async model(params) {
    let quoteInfo = await this.store.findAll('quote');
    let idFolder;
    let testIfValide = 0;
    await quoteInfo.forEach(item => {
      if(item.status === "valide" && item.nameDriver.length === 0){
        idFolder = item.id;
        testIfValide++;
      }
    });
    return hash({
      quote: this.store.findAll('quote'),
      driver : this.store.findRecord('driver', params.iddriver),
      folderNum : idFolder,
      emptySelect : testIfValide
    })
  },
  setupController(controller, models) {
    controller.set('quote', models.quote);
    controller.set('driver', models.driver);
    controller.set('folderNum', models.folderNum);
    controller.set('emptySelect', models.emptySelect)
  },
  actions: {
    didTransition() {
      document.title = 'Agent - Fiche chauffeur';
    }
  }
});
