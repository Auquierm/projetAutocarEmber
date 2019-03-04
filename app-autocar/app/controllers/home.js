import Controller from '@ember/controller';
import Contact from '../models/contact';
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
      // console.log('coucou');
      // console.log(this.get('contactFirstname'));
      // let newMessage = Contact.create({firstname:this.get('contactFirstname')});
      // // this.model.pushObject(newMessage);
      // console.log(newMessage);
    }
  }
});
