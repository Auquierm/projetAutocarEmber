import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session : service(),
  async model(){
    if (this.session.data.isChanged === false) {
      this.transitionTo("/changepassword")
    }
  }
});
