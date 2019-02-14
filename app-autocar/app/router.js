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
  this.route('driver');
  this.route('changepassword');
  this.route('tokenauth');
  this.route('back-client', function () {
    this.route('client', { path: ':id' }, function () {
      this.route('dashboard');
      this.route('proposals');
      this.route('proposal');
      this.route('requests');
      this.route('request');
      this.route('folders');
      this.route('folder');
    });
  });
});

export default Router;
