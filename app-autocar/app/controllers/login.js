import Controller from '@ember/controller'
import { inject as service } from '@ember/service'

export default Controller.extend({
  session: service(),
  contactConfirmEmail: '',
  contactConfirmPwd: '',
  actions: {
    async login(event) {
      event.preventDefault()
      let { contactConfirmEmail, contactConfirmPwd } = this
      await this.session.authenticate('authenticator:credentials', contactConfirmEmail, contactConfirmPwd);
      await this.transitionToRoute("/back-" + this.session.data.authenticated.response.user + '/' + this.session.data.authenticated.response.id + "/dashboard")
    }
  }
});
