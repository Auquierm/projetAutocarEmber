import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
export default Controller.extend({
  ajax : service(),
  gender : 'Femme',
  country : 'Belgique',
  emailDiff : false,
  actions: {
    async createDriver(){
      this.set('emailDiff', false);
      await this.ajax.post('/driver', {
        // headers: {
        //   'Content-type': 'application/json',
        //   'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        // },
        data : {
          firstname : this.firstname,
          lastname :  this.lastname,
          sexe : this.gender,
          age : this.age,
          email: this.email,
          phone : this.phone,
          servicePhone: this.servicePhone,
          numPermis: this.numPermis,
          capDate: this.capDate,
          medicalDate: this.medicalDate,
          language: this.language,
          address : {
            street : this.street,
            number : this.number,
            zip : this.zip,
            city : this.city,
            country : this.country
          }

      }});
      this.transitionToRoute('back-agent.agent.drivers-list');
    }

  }
});
