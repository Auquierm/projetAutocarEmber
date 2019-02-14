import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  session: service(),
  ajax: service(),
  async model(params){
    console.log(params.token);
    try {
      return this.get('ajax').request('/auth/token-gen-client', {
        method : 'POST',
        data : {
          token : params.token,
        }
      });

    } catch (error) {
      console.log(error.message);
    }
  },
  async afterModel(){
    console.log(this);
    let {email, password} = this;
    await this.session.authenticate('authenticator:credentials', email, password);
    // await this.transitionToRoute('changepassword');
  }
});
