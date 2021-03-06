import Controller from '@ember/controller';
let larg = window.innerWidth;

export default Controller.extend({
  isHidden: larg >= 768 ? true : false,
  firstname: '',
  actions: {
    toggleMenu() {
      this.toggleProperty("isHidden");
    },
    sendMessage(e) {
      e.preventDefault();
    }
  }
});

