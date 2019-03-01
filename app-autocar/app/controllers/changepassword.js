import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  ajax: service(),
  pwd: '1234567',
  confirmPwd: '1234567',
  pwdDiff: false,
  actions: {
    async changePwd(event) {
      event.preventDefault();
      let { pwd, confirmPwd } = this;
      if (pwd === confirmPwd) {
        this.set('pwdDiff', false);
        await this.ajax.patch(`/auth/${this.session.data.authenticated.id}`, {
          data: {
            password: confirmPwd
          }
        });
        this.session.invalidate();
        this.session.data['isChanged'] = true;
        await this.transitionToRoute("/login");
      } else {
        this.set('pwdDiff', true);
      }
    }
  }
});
