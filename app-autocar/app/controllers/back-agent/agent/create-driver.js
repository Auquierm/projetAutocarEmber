import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
export default Controller.extend({
  ajax : service(),
  session: service(),
  gender : 'Femme',
  country : 'Belgique',
  emailDiff : false,
  actions: {
    async createDriver(){
      this.set('emailDiff', false);
      let newDriver = await this.store.createRecord('driver', {
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
            street : this.addressStreet,
            number : this.addressNumber,
            zip : this.addressZip,
            city : this.addressCity,
            country : this.addressCountry
          }

      });
       await newDriver.save();
      // this.transitionToRoute('back-agent.agent.drivers-list');
    }

  }
});
