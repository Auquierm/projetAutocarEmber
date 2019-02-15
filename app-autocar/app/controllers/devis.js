import Ember from 'ember';
import { computed } from '@ember/object';
let larg = window.innerWidth;

export default Ember.Controller.extend({
  isHidden: larg >= 768 ? true : false,
  dateValue: computed(() => { return new Date(); }),
  actions: {
    toggleMenu() {
      this.toggleProperty("isHidden");
    },
    onChangeTime() { },
    onCloseTime() { },
    onReadyTime() { },
  }
});
