import Route from '@ember/routing/route';

export default Route.extend({
  async model(params){
    try {
      console.log(params.token);

    } catch (error) {
      console.log(error.message);
    }

  }
});
