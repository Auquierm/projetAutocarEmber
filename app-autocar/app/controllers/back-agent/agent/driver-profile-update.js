import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateDriver(){
      this.transitionToRoute('back-agent.agent.drivers-list');
    }
  }
});
