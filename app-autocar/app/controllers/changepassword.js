import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  session: service(),
  ajax: service(),
  pwd:'1234567',
  confirmPwd:'1234567',
  actions: {
    async changePwd(event){
      event.preventDefault()
      let {pwd, confirmPwd} = this
      //TODO: test pwd et confirmpwd
      await this.ajax.patch(`/auth/${this.session.data.authenticated.id}`, {
        data : {
          password : confirmPwd
        }
      });
      this.session.invalidate();
      await this.transitionToRoute("/login")
    }
  }
});
