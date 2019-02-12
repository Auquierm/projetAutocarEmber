import Route from '@ember/routing/route';

export default Route.extend({
  async model(params){
    try {
      // let test = await this.store.findAll('client');

      let test = await this.store.findRecord('client', '5c62d735eba22da39f871563');

      console.log(test);
      return test;
      // //console.log(params.token);
      // let test = this.store.findAll('client').then( (result) => {
      //   console.log(result);
      //   console.log(result.content.firstObject.addressFacturation);
      // });
      //console.log(test.content.firstObject.addressFacturation)
    } catch (error) {
      console.log(error.message);
    }

  }
});
