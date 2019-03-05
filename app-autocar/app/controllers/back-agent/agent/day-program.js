import Ember from 'ember';
import { computed } from '@ember/object';


export default Ember.Controller.extend({
  dateValue: computed(() => { return new Date(); }),
  actions: {
    onChangeTime() { },
    onCloseTime() { },
    onReadyTime() { },
  }
});
