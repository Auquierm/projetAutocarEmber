import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
  session: service(),
  ajax: service(),
  totalKm: 0,
  addCost: 0,
  actions: {
    updateTotalKm() {
      this.set(this.totalKm, this.get('totalKm'));
    },
    updateAddCost() {
      this.set(this.addCost, this.get('addCost'));
    },
    async sendQuote() {
      let pricing = this.get('pricing').firstObject;
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

      let priceForTime = nbDays * pricePerDay;
      price += priceForTime;

      //calcul du type de car
      if (quote.capacityAutocar === 30) {
        price += pricing.capacity.car1;
      } else if (quote.capacityAutocar === 50) {
        price += pricing.capacity.car2;
      } else if (quote.capacityAutocar === 70) {
        price += pricing.capacity.car3;
      } else {
        console.log('La capacité du car n\'est pas correcte');
      }

      //calcul du coût des options
      this.get('quote.options').forEach(option => {
        if (option === 'remorque') {
          price += pricing.options.remorque;
        } else if (option === 'Box de ski') {
          price += pricing.options.ski;
        }
      });

      //calcul du prix par km
      let totalKm = this.totalKm;
      let priceForKm = totalKm * pricing.priceKms;
      price += priceForKm;

      //calcul du rajout cout supp
      let addCost = this.addCost;
      if (addCost > 0) {
        price += parseInt(addCost);
      }


      await this.ajax.patch(`http://localhost:8001/api/v1/quotes/${this.get('quote.id')}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          status: 'traitement',
          price: price,
          totalKm: totalKm,
          timeTravel: nbDays,
          notIncludeIn: addCost
        }
      });
      this.get('quote').reload();
      this.transitionToRoute('back-agent.agent.dashboard');
    },
    async validateQuote() {
      await this.ajax.patch(`http://localhost:8001/api/v1/quotes/${this.get('quote.id')}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          status: 'valide'
        }
      });
      this.get('quote').reload();
      this.transitionToRoute('back-agent.agent.dashboard');
    },
    async refuseQuote() {
      await this.ajax.patch(`http://localhost:8001/api/v1/quotes/${this.get('quote.id')}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.data.authenticated.response.accessToken}`
        },
        data: {
          status: 'refuse'
        }
      });
      this.get('quote').reload();
      this.transitionToRoute('back-agent.agent.dashboard');
    },
  }
});
