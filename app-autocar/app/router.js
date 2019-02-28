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
  this.route('back-client', function () {
    this.route('client', { path: ':id' }, function () {
      this.route('dashboard');
      this.route('proposals');
      this.route('proposal', { path: '/proposal/:idproposal' });
      this.route('requests');
      this.route('request', { path: '/request/:idrequest' });
      this.route('folders');
      this.route('folder', { path: '/folder/:idfolder' });
      this.route('profile');
      this.route('profile-update');
      this.route('create-quote');
    });
  });
  this.route('tokenauth', { path: 'tokenauth/:token' });

  this.route('back-agent', function () {
    this.route('agent', { path: ':id' }, function () {
      this.route('dashboard');
      this.route('clients-list', function () {
        this.route('client-card');
      });
      this.route('folders-list', function () {
        this.route('folder-card');
      });
      this.route('quotes-list', function () {
        this.route('quote-card');
      });
      this.route('drivers-list', function () {
        this.route('driver-card');
      });
      this.route('client-card', { path: ':idAgent' });
      this.route('driver-card');
      this.route('folder-card', { path: ':idFolder' });
      this.route('quote-card', { path: ':idQuote' });
      this.route('day-program');
    });
  });
  this.route('back-driver', function () {
    this.route('driver', function () {
      this.route('dashboard');

      this.route('scheduled-trips', function () {
        this.route('trip-card');
      });

      this.route('ended-trips', function () {
        this.route('trip-card');
      });
      this.route('trip-card');
    });
  });
});

export default Router;
