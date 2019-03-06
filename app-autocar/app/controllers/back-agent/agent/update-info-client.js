import Controller from '@ember/controller'
import { inject as service } from '@ember/service'
export default Controller.extend({
  session: service(),
  ajax: service(),
  gender: '',
  country: '',
  countryUser: '',
  actions: {

    async update() {
      if (this.gender === '') {
        this.gender = this.get('model.idUser.sexe')
      }
      if (this.country === '') {
        this.country = this.get('model.adresseFacturation.country')
      }
      if (this.countryUser === '') {
        this.countryUser = this.get('model.idUser.address.country')
      }
      await this.ajax.patch(`http://localhost:8001/api/v1/clients/${this.get('model.id')}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          firstname: this.get('model.idUser.firstname'),
          lastname: this.get('model.idUser.lastname'),
          age: this.get('model.idUser.age'),
          sexe: this.gender,
          email: this.get('model.idUser.email'),
          phone: this.get('model.idUser.phone'),
          address: {
            street: this.get('model.idUser.address.street'),
            country: this.countryUser,
            city: this.get('model.idUser.address.city'),
            zip: this.get('model.idUser.address.zip'),
            number: this.get('model.idUser.address.number')
          },
          adresseFacturation: {
            street: this.get('model.adresseFacturation.street'),
            city: this.get('model.adresseFacturation.city'),
            zip: this.get('model.adresseFacturation.zip'),
            number: this.get('model.adresseFacturation.number'),
            country: this.country,
          },
          societe: this.get('model.societe'),
          numFax: this.get('model.numFax'),
          numTva: this.get('model.numTva'),
          numBank: this.get('model.numBank')
        }
      })
      this.model.reload()
      this.model.idUser.reload()
      this.transitionToRoute('back-agent.agent.client-card', this.get('model.id'))
    },

    selectOption(params, option) {
      this.set(params, option.target.value)
    }
  }
});
