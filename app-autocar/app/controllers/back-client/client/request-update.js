import Controller from '@ember/controller';
// import { computed } from '@ember/object';
import {inject as service} from '@ember/service';
import Moment from 'moment';
let larg = window.innerWidth;

export default Controller.extend({
  ajax : service(),
  session: service(),
  isHidden: larg >= 768 ? true : false,
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
      }
    },
    async sendDevis(event){
      event.preventDefault();
      await this.ajax.patch(`/quotes/${this.get('model.infoQuote.id')}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          placeDeparture: {
            street : this.get('model.infoQuote.placeDeparture.street'),
            number : this.get('model.infoQuote.placeDeparture.number'),
            zip : this.get('model.infoQuote.placeDeparture.zip'),
            city : this.get('model.infoQuote.placeDeparture.city'),
            country : this.get('model.infoQuote.placeDeparture.country')
          },
          placeArrival: {
            street : this.get('model.infoQuote.placeArrival.street'),
            number : this.get('model.infoQuote.placeArrival.number'),
            zip : this.get('model.infoQuote.placeArrival.zip'),
            city : this.get('model.infoQuote.placeArrival.city'),
            country : this.get('model.infoQuote.placeArrival.country')
          },
          dateArrival: this.get('model.infoQuote.dateArrival'),
          dateDeparture: this.get('model.infoQuote.dateDeparture'),
          pax: this.get('model.infoQuote.pax'),
          options: this.get('model.infoQuote.options'),
          capacityAutocar: this.get('model.infoQuote.capacityAutocar'),
          com : this.get('model.infoQuote.com'),
        }
      });
      this.transitionToRoute('back-client.client.request', this.get('model.infoQuote.id'));
    },
    toggleMenu() {
      this.toggleProperty("isHidden");
    },
    async onChangeTime(params, value) {
      let dateFormatOnChange = Moment(value[0]).format('DD-MM-YYYY HH:mm');
      if(params === "model.infoQuote.dateArrival"){
       await this.set(params, dateFormatOnChange);
      }else if(params === "model.infoQuote.dateDeparture"){
        await this.set(params, dateFormatOnChange);
      }
    },
    onCloseTime() { },
    onReadyTime() { },
    selectOption(params, option){
      this.set(params, option.target.value);
    },
  }
});
