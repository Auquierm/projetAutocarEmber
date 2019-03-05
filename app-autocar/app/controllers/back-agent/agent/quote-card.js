import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
  session: service(),
  ajax: service(),
  actions: {
    async sendQuote() {
      let pricing = this.get('pricing._arrangedContent.0.__recordData.__data');
      let price = 0;
      let quote = this.get('quote');
      //calculer la durée du voyage et le prix
      let pricePerDay = pricing.priceDriver.oneDriver;
      let tableArrival = this.get('quote.dateArrival').split('-');
      let tableDeparture = this.get('quote.dateDeparture').split('-');
      let dayArrival = tableArrival[0];
      let monthArrival = tableArrival[1];
      let yearTimeArrival = tableArrival[2].split(' ');
      let yearArrival = yearTimeArrival[0];
      let dayDeparture = tableDeparture[0];
      let monthDeparture = tableDeparture[1];
      let yearTimeDeparture = tableDeparture[2].split(' ');
      let yearDeparture = yearTimeDeparture[0];
      let nbDays = 0;
      nbDays = dayArrival - dayDeparture;
      nbDays++;

      let nbMonth = 0;
      nbMonth = monthArrival - monthDeparture;
      if (nbMonth > 0) {
        for (let i = 0; i < nbMonth; i++) {
          nbDays += 30;
        }
      }
      console.log('la durée est de ' + nbDays + ' jour');
      let priceForTime = nbDays * pricePerDay;
      console.log('le coût pour la durée du voyage est de : ' + priceForTime + '€');
      price += priceForTime;

      //calcul du type de car
      if (quote.capacityAutocar === 30) {
        console.log('la capacité du car est de 30 passagers');
        console.log('le prix dun car ainsi est de : ' + pricing.capacity.car1);
        price += pricing.capacity.car1;
      } else if (quote.capacityAutocar === 50) {
        console.log('la capacité du car est de 50 passagers');
        console.log('le prix dun car ainsi est de : ' + pricing.capacity.car2);
        price += pricing.capacity.car2;
      } else if (quote.capacityAutocar === 70) {
        console.log('la capacité du car est de 70 passagers');
        console.log('le prix dun car ainsi est de : ' + pricing.capacity.car3);
        price += pricing.capacity.car3;
      } else {
        console.log('La capacité du car n\'est pas correcte');
      }

      //calcul du coût des options
      quote.options.forEach(option => {
        if (option === 'remorque') {
          price += pricing.options.ski;
        } else if (option === 'Box de ski') {
          price += pricing.options.remorque
        }
      });

      //calcul du prix par km
      let totalKm = this.get('totalKm');
      // console.log('nombre de km : ' + totalkm);

      console.log(price);

      await this.ajax.patch(`/quotes/${this.get('quote.id')}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          status: 'traitement',
          price: price
        }
      });
      this.get('quote').reload();
      this.transitionToRoute('back-agent.agent.dashboard');
    },
    async validateQuote() {
      await this.ajax.patch(`/quotes/${this.get('quote.id')}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          status: 'valide'
        }
      });
      this.model.reload();
      this.transitionToRoute('back-agent.agent.dashboard');
    },
    async refuseQuote() {
      await this.ajax.patch(`/quotes/${this.get('quote.id')}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          status: 'refuse'
        }
      });
      this.model.reload();
      this.transitionToRoute('back-agent.agent.dashboard');
    },
  }
});
