import Controller from '@ember/controller';
import Contact from '../models/contact';


export default Controller.extend({
  contactFirstname: '',
  actions: {
    sendMessage() {
      let newMessage = Contact.create({ contactFirstname: this.get('contactFirstname') });
      this.model.pushObject(newMessage);
    }
  }
});
