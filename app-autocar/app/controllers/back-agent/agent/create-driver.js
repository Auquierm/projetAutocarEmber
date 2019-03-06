import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import { computed } from '@ember/object';
import Moment from 'moment';
let larg = window.innerWidth;

export default Controller.extend({
  ajax : service(),
  session: service(),
  isHidden: larg >= 768 ? true : false,
  dateValue: computed(() => { return new Date(); }),
  gender : 'Femme',
  addressCountry : 'Belgique',
  typePermis : 'D',
  language : 'français',
  capDate:'',
  medicalDate:'',
  actions: {
    selectOption(params, option){
      this.set(params, option.target.value);
    },
    async createDriver(event){
      event.preventDefault();
      let newDriver = await this.store.createRecord('driver', {
          firstname : this.firstname,
          lastname :  this.lastname,
          sexe : this.gender,
          age : this.age,
          email: this.email,
          phone : this.phone,
          password : '1234567',
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
      this.get('model.idUser').reload();
      await this.transitionToRoute('back-agent.agent.drivers-list');
    },
    onChangeTime(params, value) {
      let dateFormatOnChange = Moment(value[0]).format('DD-MM-YYYY HH:mm');
      if(params === "medicalDate"){
        this.set(params, dateFormatOnChange);
      }else if(params === "capDate"){
        this.set(params, dateFormatOnChange);
      }
    },
    onCloseTime() { },
    onReadyTime(params, value) {
      let dateFormatOnChange = Moment(value[0]).format('DD-MM-YYYY HH:mm');
      if(params === "medicalDate"){
        this.set(params, dateFormatOnChange);
      }else if(params === "capDate"){
        this.set(params, dateFormatOnChange);
      }
    },
  }
});
