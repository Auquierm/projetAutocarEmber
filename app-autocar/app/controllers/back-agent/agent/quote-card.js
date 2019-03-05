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
      console.log('nbreKm encodé : ' + this.get('totalKm'));
    },
    updateAddCost() {
      this.set(this.addCost, this.get('addCost'));
      console.log('Coûts supp : ' + this.get('addCost'));
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
      this.get('quote.options').forEach(option => {
        if (option === 'remorque') {
          console.log('ajout de loption remorque');
          price += pricing.options.remorque;
        } else if (option === 'Box de ski') {
          console.log('ajout de loption ski');
          price += pricing.options.ski;
        }
      });

      //calcul du prix par km
      let totalKm = this.totalKm;
      console.log('nombre de km : ' + totalKm);
      let priceForKm = totalKm * pricing.priceKms;
      console.log('Prix pour le nombre de km : ' + priceForKm);
      price += priceForKm;

      //calcul du rajout cout supp
      let addCost = this.addCost;
      console.log('Coûts supp qui va se rajouter au total : ' + addCost);
      if (addCost > 0) {
        price += parseInt(addCost);
      }

      console.log('Prix total : ' + price);

      await this.ajax.patch(`/quotes/${this.get('quote.id')}`, {
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
