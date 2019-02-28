import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    let pricing = this.store.findAll('pricing');
    let priceTest = pricing._arrangedContent;
    console.log(pricing);
  }
});
