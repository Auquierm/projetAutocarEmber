import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
  ajax: service(),
  actions: {
    async sendQuote() {
      console.log('salut jenvoie la proposition !');
      console.log(this.get('model'));
      await this.ajax.patch(`/quotes/${this.get('model.id')}`, {
        data: {
          status: 'traitement'
        }
      });
      this.model.reload();
      this.transitionToRoute('back-agent.agent.dashboard');
    },
    async validateQuote() {
      await this.ajax.patch(`/quotes/${this.get('model.id')}`, {
        data: {
          status: 'valide'
        }
      });
      this.model.reload();
      this.transitionToRoute('back-agent.agent.dashboard');
    },
    async refuseQuote() {
      await this.ajax.patch(`/quotes/${this.get('model.id')}`, {
        data: {
          status: 'refuse'
        }
      });
      this.model.reload();
      this.transitionToRoute('back-agent.agent.dashboard');
    },
  }
});
