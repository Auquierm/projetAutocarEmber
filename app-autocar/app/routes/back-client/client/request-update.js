import Route from '@ember/routing/route';

export default Route.extend({
  skibox: false,
  trailer: false,
  async model(params) {
    let infoQuote = await this.store.findRecord('quote', params.idrequestupdate);
    if(infoQuote.options[0] === "Box de ski" || infoQuote.options[1] === "Box de ski"){
      this.set('skibox', true)
    }
    if(infoQuote.options[0] === "Remorque" || infoQuote.options[1] === "Remorque"){
      this.set('trailer', true)
    }
    return {infoQuote, isCheckedSkibox : this.get('skibox'), isCheckedTrailer : this.get('trailer')};
   },
  beforeModel() {
    this.skibox = false,
    this.trailer = false;
  },
  actions: {
    didTransition() {
      document.title = 'Client - Mise à jour de votre voyage';
    }
  }
});
