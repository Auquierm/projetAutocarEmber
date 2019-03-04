// import Controller from '@ember/controller';
import Ember from 'ember';
import { inject as service } from '@ember/service';
export default Ember.Controller.extend({
  session: service(),
  ajax: service(),
  actions: {
    async sendQuote() {
      console.log(this.get('model'));
      await this.ajax.patch(`/quotes/${this.get('model.id')}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          status: 'traitement',

        }
      });
      this.model.reload();
      this.transitionToRoute('back-agent.agent.dashboard');
    },
    async validateQuote() {
      await this.ajax.patch(`/quotes/${this.get('model.id')}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          status: 'valide'
        }
      });
      this.model.reload();
      this.transitionToRoute('back-agent.agent.dashboard');
    },
    async refuseQuote() {
      await this.ajax.patch(`/quotes/${this.get('model.id')}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          status: 'refuse'
        }
      });
      this.model.reload();
      this.transitionToRoute('back-agent.agent.dashboard');
    },
  }
});
