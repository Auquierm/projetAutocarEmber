// import Controller from '@ember/controller';
// import Contact from '../models/contact';
// import {inject as service} from '@ember/service';

// export default Controller.extend({
//   contactFirstname: '',
//   contactLastname: '',
//   contactEmail: '',
//   contactConfirmEmail: '',
//   contactMessage: '',
//   ajax : service(),
//   actions: {
//     async sendMessage(event) {
//       event.preventDefault();
//       console.log('coucou contact');
//       let{confirmEmail, email} = this;

//       if(email === confirmEmail){
//       let newMessage = await Contact.create({
//         contactFirstname: this.get('contactFirstname'),
//         contactLastname: this.get('contactLastname'),
//         contactEmail: this.get('contactEmail'),
//         contactMessage: this.get('contactMessage')
//       })
//       this.model.pushObject(newMessage);
//       console.log(newMesage);
//       }
//     }

//   }
// });
