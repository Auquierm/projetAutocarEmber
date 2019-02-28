import Controller from '@ember/controller';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';
import Moment from 'moment';
let larg = window.innerWidth;

export default Controller.extend({
  ajax : service(),
  isHidden: larg >= 768 ? true : false,
  dateValue: computed(() => { return new Date(); }),
  dateDp:'',
  dateRt: '',
  skibox : false,
  trailer: false,
  actions: {
    toggleCheckBox(params) {
      let index = '';
      if(params ==="Box de ski" && this.get('model.isCheckedSkibox')===true || params ==="Remorque" && this.get('model.isCheckedTrailer')===true){
        if(params === "Box de ski"){
          this.set('model.isCheckedSkibox', false);
        }else{
          this.set('model.isCheckedTrailer', false);
        }
        if(this.get('model.isCheckedSkibox') === false && this.get('model.infoQuote.options').includes("Box de ski")){
          index = this.get('model.infoQuote.options').indexOf("Box de ski");
          this.get('model.infoQuote.options').splice(index, 1);
        }
        if(this.get('model.isCheckedTrailer') === false && this.get('model.infoQuote.options').includes("Remorque")){
          index = this.get('model.infoQuote.options').indexOf("Remorque");
          this.get('model.infoQuote.options').splice(index, 1);
          console.log("delete remorque");
        }
        return;
      }
      if(params === "Box de ski"){
        this.set('model.isCheckedSkibox', true);
      }else{
        this.set('model.isCheckedTrailer', true);
      }

      if(!this.get('model.infoQuote.options').includes(params)){
        this.get('model.infoQuote.options').push(params);
        console.log(this.get('model.infoQuote.options'));
      }
    },
    async sendDevis(event){
      event.preventDefault();
      console.log(this.get('model.infoQuote.placeDeparture.country'));
      console.log(this.get('model.infoQuote.capacityAutocar'));
      console.log(this.get('model.infoQuote.placeArrival.country'));


      // let client = await this.store.findRecord('client', this.get('model.id'));
      // let newQuote = await this.store.createRecord('quote',  {
      //   placeDeparture: {
      //     street : this.tripDpStreet,
      //     number : this.tripDpNumber,
      //     zip : this.tripDpZip,
      //     city : this.tripDpCity,
      //     country : this.countryDp
      //   },
      //   placeArrival: {
      //     street : this.tripRtStreet,
      //     number : this.tripRtNumber,
      //     zip : this.tripRtZip,
      //     city : this.tripRtCity,
      //     country : this.countryRt
      //   },
      //   dateArrival: this.dateRt,
      //   dateDeparture: this.dateDp,
      //   pax: this.tripPax,
      //   options: this.arrayOption,
      //   capacityAutocar: this.placeAutocar,
      //   status: "attente",
      //   com : this.quoteCom,
      //   idClient: client,
      // });
      // await newQuote.save();
      // this.setProperties({
      //   tripDpCity:'',
      //   tripDpNumber:'',
      //   tripDpStreet: '',
      //   tripDpZip: '',
      //   tripPax : '',
      //   countryDp: 'Belgique',
      //   countryRt: 'Belgique',
      //   tripRtStreet: '',
      //   tripRtNumber: '',
      //   tripRtZip: '',
      //   tripRtCity: '',
      //   dateRt: '',
      //   dateDp: '',
      //   arrayOption: [],
      //   placeAutocar: '30',
      //   quoteCom: '',
      // });
      // await this.transitionToRoute('back-client.client.dashboard');
    },
    toggleMenu() {
      this.toggleProperty("isHidden");
    },
    async onChangeTime(params, value) {
      let dateFormatOnChange = Moment(value[0]).format('DD-MM-YYYY HH:mm');
      // console.log(dateFormat);
      if(params === "dateRt"){
       await this.set(params, dateFormatOnChange);
        console.log(this.dateRt);
      }else if(params === "dateDp"){
        await this.set(params, dateFormatOnChange);
        console.log(this.dateDp);
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
    selectOption(params, option){
      this.set(params, option.target.value);
    },
  }
});
