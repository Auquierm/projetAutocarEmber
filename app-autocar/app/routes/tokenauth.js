import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  session: service(),
  ajax: service(),
  async model(params){
    try {
      // let test = this.get('ajax').request('/auth/token-gen-client', {
      //   method : 'POST',
      //   data : {
      //     token : params.token,
      //   }
      // });
      // console.log(test);
      this.session.data['isChanged'] = false;
      await this.session.authenticate('authenticator:credentials-without-password', params);
      await this.transitionTo('/changepassword');
      //TODO: chercher le user avec l'id de l'user dans l'ajax promise ou autre
    } catch (error) {
      console.log(error.message);
    }
  },
  // async afterModel(params){
  //   // let {email, password} = this;
  //   // await this.session.authenticate('authenticator:credentials', );
  //   // await this.transitionToRoute('changepassword');
  // }
});
