import Controller from '@ember/controller'
import { inject as service } from '@ember/service'

export default Controller.extend({
  session: service(),
  contactConfirmEmail: 'auquier1234@gmail.com',
  contactConfirmPwd: 'hSYLR7Ketrgb',
  actions: {
    async login(event) {
      event.preventDefault()
      let { contactConfirmEmail, contactConfirmPwd } = this
      console.log(contactConfirmEmail, contactConfirmPwd)
      await this.session.authenticate('authenticator:credentials', contactConfirmEmail, contactConfirmPwd);
      console.log("back-" + this.session.data.authenticated.response.user + '/' + this.session.data.authenticated.response.id + "/dashboard");
      await this.transitionToRoute("/back-" + this.session.data.authenticated.response.user + '/' + this.session.data.authenticated.response.id + "/dashboard")
    }
  }
});
//EpDPdeOQZv5W
// james1223bond@gmail.com
