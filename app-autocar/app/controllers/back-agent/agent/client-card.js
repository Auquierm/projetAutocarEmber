import Controller from '@ember/controller';

export default Controller.extend({
    actions :{
        async newQuote(params){
            await this.transitionToRoute('back-agent.agent.create-quote', params);
        },
        async updateClientInfo(params){
            await this.transitionToRoute('back-agent.agent.update-info-client', params);
        }
    }
});
