import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session : service(),
  transitionHistory: [],
  transitioningToBack: false,
  async model(){
    if (this.session.data.isChanged === false) {
      this.transitionTo("/changepassword")
    }
  },
  actions: {
    willTransition() {
      if (!this.get('transitioningToBack')) {
        this.get('transitionHistory').push(window.location.pathname);
      }
      this.set('transitioningToBack', false);
    },
    back() {
      var last = this.get('transitionHistory').pop();
      last = last ? last : '/dash';
      this.set('transitioningToBack', true);
      this.transitionTo(last);
    }
  }
});
