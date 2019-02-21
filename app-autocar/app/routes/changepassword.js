import Route from '@ember/routing/route';
// import AuthenticatedRoute from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service'

export default Route.extend( {
  session : service(),
  async model() {

    console.log(this.session);
  }
  //TODO: faire la même chose pour back-agent/chauffeur
  //TODO: faire logout
});
