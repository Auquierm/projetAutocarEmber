import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  ajax: service(),
  status: 'traitement',
  actions: {
    async acceptProposal() {
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
      this.transitionToRoute('back-client.client.dashboard');
    },
    async rejectProposal() {
      await this.ajax.patch(`/quotes/${this.get('model.id')}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          status: 'attente'
      }
    });
      this.model.reload();
      this.transitionToRoute('back-client.client.dashboard');
    }
  }
});
