import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';
export default Base.extend({
  ajax: service(),
  async restore(data) {
    return data;
  },
  async authenticate(email, password, token) {
    if(!token){
      let response = await this.ajax.post('/auth/login', {
        data : {
          email : email,
          password : password
        }
      });
      // let {role, token} = response;
      console.log(response);
      return {response};
    }else{
      console.log(token)
      let clientId = await this.store.findRecord('user', token.userId);
      console.log(clienId);
      // let data = {token : token.tokenObject, id : token.token}
      // return
    }

  }
});
