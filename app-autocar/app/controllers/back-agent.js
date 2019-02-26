import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
    async logout(event) {
      event.preventDefault()
      this.session.invalidate();
      await this.transitionToRoute("/login")
    }
  }
});
