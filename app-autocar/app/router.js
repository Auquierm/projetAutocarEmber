import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('home');
  this.route('about-us');
  this.route('contact');
  this.route('devis');
  this.route('login');
  this.route('agent');
  this.route('chauffeur');
  this.route('client', function () {
    this.route('dashboard');
    this.route('requests');
    this.route('request', { path: ':id' });
  });
  this.route('changepassword');
  this.route('tokenauth');
});

export default Router;
