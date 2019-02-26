import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    console.log('hello');
    console.log(params.id);
    
 return await this.store.findRecord('agent', params.id);
  }

});
