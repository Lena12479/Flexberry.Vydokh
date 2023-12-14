import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-vydokh-материал-l');
  this.route('i-i-s-vydokh-материал-e',
  { path: 'i-i-s-vydokh-материал-e/:id' });
  this.route('i-i-s-vydokh-материал-e.new',
  { path: 'i-i-s-vydokh-материал-e/new' });
  this.route('i-i-s-vydokh-отпуск-l');
  this.route('i-i-s-vydokh-отпуск-e',
  { path: 'i-i-s-vydokh-отпуск-e/:id' });
  this.route('i-i-s-vydokh-отпуск-e.new',
  { path: 'i-i-s-vydokh-отпуск-e/new' });
  this.route('i-i-s-vydokh-сотрудники-l');
  this.route('i-i-s-vydokh-сотрудники-e',
  { path: 'i-i-s-vydokh-сотрудники-e/:id' });
  this.route('i-i-s-vydokh-сотрудники-e.new',
  { path: 'i-i-s-vydokh-сотрудники-e/new' });
});

export default Router;
