import Controller from '@ember/controller';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';
let larg = window.innerWidth;

export default Controller.extend({
  ajax : service(),
  isHidden: larg >= 768 ? true : false,
  dateValue: computed(() => { return new Date(); }),
  // Info client/user
  // firstname : '',
  // lastname : '',
  gender : 'Femme',
  country : 'Belgique',
  // age : '',
  // email: '',
  // confirmEmail : '',
  // phone: '',
  // fax: '',
  // city: '',
  // street: '',
  // number : '',
  // zip: '',
  // societyTva :'',
  // societyName : '',
  // societyFax : '',
  // societyPhone : '',
  // societyCity : '',
  // societyStreet: '',
  // societyNumber : '',
  // societyZip : '',
  societeCountry: 'Belgique',
  // societyBankNumber: '',
  emailDiff : false,
  // info devis

  // tripPax : '',
  placeAutocar: '30',
  dateDp:'',
  countryDp: 'Belgique',
  // tripDpCity: '',
  // tripDpStreet: '',
  // tripDpNumber :'',
  // tripDpZip: '',
  dateRt: '',
  countryRt : 'Belgique',
  // tripRtCity: '',
  // tripRtStreet: '',
  // tripRtNumber: '',
  // tripRtZip: '',
  skibox : false,
  trailer: false,
  arrayOption : [],
  actions: {
    selectOption(params, option){
      this.set(params, option.target.value);
    },
    toggleCheckBox(params) {
      let {arrayOption, trailer, skibox} = this;
      let index = '';
      if(params ==="skibox" && skibox===true || params ==="trailer" && trailer===true){
        this.set(params, false);
        if(this.skibox === false && arrayOption.includes("skibox")){
          index = arrayOption.indexOf("skibox");
          arrayOption.splice(index, 1);
        }
        if(this.trailer === false && arrayOption.includes("trailer")){
          index = arrayOption.indexOf("trailer");
          arrayOption.splice(index, 1);
        }
        return;
      }
      this.set(params, true);
      if(!arrayOption.includes(params)){
        arrayOption.push(params);
      }
    },
    async sendDevis(event){
      event.preventDefault();
      let{confirmEmail, email} = this;

      if(email === confirmEmail){
        this.set('emailDiff', false);
        let newClient = await this.ajax.post('/clients', {
          data : {
            firstname : this.firstname,
            lastname :  this.lastname,
            sexe : this.gender,
            age : this.age,
            email: this.email,
            phone : this.phone,
            address : {
              street : this.street,
              number : this.number,
              zip : this.zip,
              city : this.city,
              country : this.country
            },
            adresseFacturation : {
              street : this.societyStreet,
              number : this.societyNumber,
              zip : this.societyZip,
              city : this.societyCity,
              country : this.societeCountry
            },
            societeTel : this.societyPhone,
            numTva : this.societyTva,
            numFax : this.societyfax,
            societe : this.societyName,
            numBank : this.societyBankNumber
          }
        });
        let newQuote = this.store.createRecord('quote',  {
          placeDeparture: {
            street : this.tripDpStreet,
            number : this.tripDpNumber,
            zip : this.tripDpZip,
            city : this.tripDpCity,
            country : this.countryDp
          },
          placeArrival: {
            street : this.tripRtStreet,
            number : this.tripRtNumber,
            zip : this.tripRtZip,
            city : this.tripRtCity,
            country : this.countryRt
          },
          dateArrival: this.dateRt,
          dateDeparture: this.dateDp,
          pax: this.tripPax,
          options: this.arrayOption,
          capacityAutocar: this.placeAutocar,
          status: "attente",
          com : this.quoteCom,
          idClient: newClient._id
        });
        await newQuote.save();
      }else{
        this.set('emailDiff', true);
      }
    },
    toggleMenu() {
      this.toggleProperty("isHidden");
    },
    onChangeTime(params, value) {
      // console.log(value);
      if(params === "dateRt"){
        this.set(params, value[0]);
        console.log(this.dateRt);
      }else if(params === "dateDp"){
        this.set(params, value[0]);
        console.log(this.dateDp);
      }
    },
    onCloseTime() { },
    onReadyTime(params, value) {
      if(params === "dateRt"){
        this.set(params, value[0]);
      }else if(params === "dateDp"){
        this.set(params, value[0]);
      }
    },
  }
});
