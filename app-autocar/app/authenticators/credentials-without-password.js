import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';

export default Base.extend({
  ajax: service(),
  async restore(data) {
    return data;
  },
  async authenticate(params) {
    let test = await this.ajax.post('/auth/token-gen-client', {
      data : {
        token : params.token,
      }
    });
    let response = {accessToken : test.accessToken, id : test.refreshToken.userId, isChanged : false};
    return response;
  },
});
