import Controller from '@ember/controller';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';
import Moment from 'moment';
let larg = window.innerWidth;

export default Controller.extend({
  ajax : service(),
  isHidden: larg >= 768 ? true : false,
  dateValue: computed(() => { return new Date(); }),
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
    },
    toggleCheckBox(params) {
      let {arrayOption, trailer, skibox} = this;
      let index = '';
      if (params === "Box de ski" && skibox === true || params === "Remorque" && trailer === true) {

        if(params === "Box de ski"){
          this.set('skibox', false)
        }else if(params === "Remorque"){
          this.set('trailer', false)
        }

        if (this.skibox === false && arrayOption.includes("Box de ski")) {
          index = arrayOption.indexOf("Box de ski");
          arrayOption.splice(index, 1);
        }
        if (this.trailer === false && arrayOption.includes("Remorque")) {
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

      if (!arrayOption.includes(params)) {
        arrayOption.push(params);
      }
    },
    async sendDevis(event){
      event.preventDefault();
      let client = await this.store.findRecord('client', this.get('model.idclient'));
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
          idClient: client,
        });
        await newQuote.save();
        this.setProperties({
          tripDpCity:'',
          tripDpNumber:'',
          tripDpStreet: '',
          tripDpZip: '',
          tripPax : '',
          countryDp: 'Belgique',
          countryRt: 'Belgique',
          tripRtStreet: '',
          tripRtNumber: '',
          tripRtZip: '',
          tripRtCity: '',
          dateRt: '',
          dateDp: '',
          arrayOption: [],
          placeAutocar: '30',
          quoteCom: '',
        });
        await this.transitionToRoute('back-agent.agent.client-card', this.get('model.idclient'));
    },
    toggleMenu() {
      this.toggleProperty("isHidden");
    },
    onChangeTime(params, value) {
      let dateFormatOnChange = Moment(value[0]).format('DD-MM-YYYY HH:mm');
      if(params === "dateRt"){
        this.set(params, dateFormatOnChange);
      }else if(params === "dateDp"){
        this.set(params, dateFormatOnChange);;
      }
    },
    onCloseTime() { },
    onReadyTime(params, value) {
      let dateFormatOnChange = Moment(value[0]).format('DD-MM-YYYY HH:mm');
      if(params === "dateRt"){
        this.set(params, dateFormatOnChange);
      }else if(params === "dateDp"){
        this.set(params, dateFormatOnChange);
      }
    },
  }
});
