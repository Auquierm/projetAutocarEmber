import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    return await this.store.findRecord('agent', params.id);
  }

});
