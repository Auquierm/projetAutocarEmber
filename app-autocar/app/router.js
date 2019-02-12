import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('client', { path: ':id' }, function () {
    this.route('dashboard');
    this.route('requests');
    this.route('request', { path: ':id' });
  });
});

export default Router;
