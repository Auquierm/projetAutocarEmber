import Controller from '@ember/controller';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';
let larg = window.innerWidth;

export default Controller.extend({
  ajax : service(),
  isHidden: larg >= 768 ? true : false,
  dateValue: computed(() => { return new Date(); }),
  // Info client/user
  firstname : '',
  lastname : '',
  gender : 'Femme',
  country : 'Belgique',
  age : '',
  email: '',
  confirmEmail : '',
  phone: '',
  fax: '',
  city: '',
  street: '',
  number : '',
  zip: '',
  societyTva :'',
  societyName : '',
  societyFax : '',
  societyPhone : '',
  societyCity : '',
  societyStreet: '',
  societyNumber : '',
  societyZip : '',
  societeCountry: 'Belgique',
  societyBankNumber: '',
  emailDiff : false,
  // info devis
  tripPax : '',
  placeAutocar: '30',
  dateDp:'',
  countryDp: 'Belgique',
  tripDpCity: '',
  tripDpStreet: '',
  tripDpNumber :'',
  tripDpZip: '',
  dateRt: '',
  countryRt : 'Belgique',
  tripRtCity: '',
  tripRtStreet: '',
  tripRtNumber: '',
  tripRtZip: '',
  skibox : false,
  actions: {
    selectOptionGender(option){
      this.set('gender', option);
    },
    selectOptionCountry(option){
      this.set('country', option);
    },
    selectOptionCountrySociety(option){
      this.set('societeCountry', option);
    },
    selectOptionPlaceAutocar(option){
      this.set('placeAutocar', option);
    },
    selectOptionCountryDp(option){
      this.set('countryDp', option);
    },
    selectOptionCountryRt(option){
      this.set('countryRt', option);
    },
    toggleCheckBox() {
      if(this.skibox === false){
        this.set('skibox', true);
      }else{
        this.set('skibox', false);
      }

      console.log(this.skibox);
    },
    async sendDevis(event){
      event.preventDefault();
      let{confirmEmail, email} = this;
      if(email === confirmEmail){
        this.set('emailDiff', false);
        // await this.ajax.post('/clients', {
        //   data : {
        //     firstname : this.firstname,
        //     lastname :  this.lastname,
        //     sexe : this.gender,
        //     age : this.age,
        //     email: this.email,
        //     phone : this.phone,
        //     address : {
        //       street : this.street,
        //       number : this.number,
        //       zip : this.zip,
        //       city : this.city,
        //       country : this.country
        //     },
        //     adresseFacturation : {
        //       street : this.societyStreet,
        //       number : this.societyNumber,
        //       zip : this.societyZip,
        //       city : this.societyCity,
        //       country : this.societeCountry
        //     },
        //     societeTel : this.societyPhone,
        //     numTva : this.societyTva,
        //     numFax : this.societyfax,
        //     societe : this.societyName,
        //     numBank : this.societyBankNumber
        //   }
        // });
      }else{
        this.set('emailDiff', true);
      }
    },
    toggleMenu() {
      this.toggleProperty("isHidden");
    },
    onChangeTime() { },
    onCloseTime() { },
    onReadyTime() { },
  }
});
