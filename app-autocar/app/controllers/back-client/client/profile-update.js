import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
  session: service(),
  ajax: service(),
  actions: {
    async update(event) {
      event.preventDefault();
      console.log('id du client : ' + this.get('model.id'));
      console.log('id du user : ' + this.get('model.idUser.id'));
      console.log(this.get('model.idUser.firstname') + " " + this.get('model.idUser.lastname'));
      await this.ajax.patch(`/users/${this.get('model.idUser.id')}`, {
        data: {
          firstname: this.get('model.idUser.firstname'),
          lastname: this.get('model.idUser.lastname'),
          age: this.get('model.idUser.age'),
          sexe: this.get('model.idUser.sexe'),
          email: this.get('model.idUser.email'),
          phone: this.get('model.idUser.phone'),
          address: {
            street: this.get('model.idUser.address.street'),
            country: this.get('model.idUser.address.country'),
            city: this.get('model.idUser.address.city'),
            zip: this.get('model.idUser.address.zip'),
            number: this.get('model.idUser.address.number')
          }
        }
      });
      await this.ajax.patch(`/clients/${this.get('model.id')}`, {
        data: {
          adresseFacturation: {
            street: this.get('model.adresseFacturation.street'),
            city: this.get('model.adresseFacturation.city'),
            zip: this.get('model.adresseFacturation.zip'),
            number: this.get('model.adresseFacturation.number')
          },
          societe: this.get('model.societe'),
          numFax: this.get('model.numFax'),
          numTva: this.get('model.numTva'),
          numBank: this.get('model.numBank')
        }
      });



    }

  }
});
