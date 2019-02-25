import Ember from 'ember';
import { computed } from '@ember/object';
let larg = window.innerWidth;

export default Ember.Controller.extend({
  dateValue: computed(() => { return new Date(); }),
  actions: {
    onChangeTime() { },
    onCloseTime() { },
    onReadyTime() { },
  }
});
