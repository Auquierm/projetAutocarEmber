import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createDriver(){
      this.transitionToRoute('back-agent.agent.create-driver');
    }
  }
});
