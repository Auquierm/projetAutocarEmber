import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async sendToUpdateRequest(){
            await this.transitionToRoute('back-client.client.request-update', this.get('model.id'));
        }
    }
});
