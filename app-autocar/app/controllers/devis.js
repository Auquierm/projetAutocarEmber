import Controller from '@ember/controller';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';
import Moment from 'moment';
let larg = window.innerWidth;

export default Controller.extend({
  ajax : service(),
  isHidden: larg >= 768 ? true : false,
  dateValue: computed(() => { return new Date(); }),
  confirmEmail: '',
  gender : 'Femme',
  country : 'Belgique',
  societeCountry: 'Belgique',
  emailDiff : false,
  placeAutocar: '30',
  dateDp:'',
  countryDp: 'Belgique',
  dateRt: '',
  countryRt : 'Belgique',
  skibox : false,
  trailer: false,
  arrayOption : [],
  actions: {
    selectOption(params, option){
      this.set(params, option.target.value);
      console.log(option.target.value);
    },
    toggleCheckBox(params) {
      let {arrayOption, trailer, skibox} = this;
      let index = '';
      if(params ==="Box de ski" && skibox===true || params ==="trailer" && trailer===true){
        if(params === "Box de ski"){
          this.set('skibox', false)
        }else if(params === "Remorque"){
          this.set('trailer', false)
        }
        if(this.skibox === false && arrayOption.includes("Box de ski")){
          index = arrayOption.indexOf("Box de ski");
          arrayOption.splice(index, 1);
        }
        if(this.trailer === false && arrayOption.includes("Remorque")){
          index = arrayOption.indexOf("Remorque");
          arrayOption.splice(index, 1);
        }
        return;
      }
      if(params === "Box de ski"){
        this.set('skibox', true)
      }else if(params === "Remorque"){
        this.set('trailer', true)
      }
      if(!arrayOption.includes(params)){
        arrayOption.push(params);
      }
    },
    async sendDevis(event){
      event.preventDefault();
      let{confirmEmail, email} = this;
      if(email === confirmEmail){
        this.set('emailDiff', false);
        let newClient = await this.ajax.post('http://localhost:8001/api/v1/clients', {
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
            numFax : this.societyFax,
            societe : this.societyName,
            numBank : this.societyBankNumber
          }
        });
        let client = await this.store.findRecord('client', newClient._id);
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
          idClient: client
        });
        await newQuote.save();
        this.transitionToRoute('message-create-account', newClient._id);
      }else{
        this.set('emailDiff', true);
      }
    },
    toggleMenu() {
      this.toggleProperty("isHidden");
    },
    async onChangeTime(params, value) {
      let dateFormatOnChange = Moment(value[0]).format('DD-MM-YYYY HH:mm');
      if(params === "dateRt"){
       await this.set(params, dateFormatOnChange);
      }else if(params === "dateDp"){
        await this.set(params, dateFormatOnChange);
      }
    },
    onCloseTime() { },
    onReadyTime(params, value) {
      let dateFormatOnReady = Moment(value[0]).format('DD-MM-YYYY HH:mm');
      if(params === "dateRt"){
        this.set(params, dateFormatOnReady);
      }else if(params === "dateDp"){
        this.set(params, dateFormatOnReady);
      }
    },
  }
});
