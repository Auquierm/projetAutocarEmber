import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    togglePika() {
      this.toggleProperty('showPika');
    }
  }
});