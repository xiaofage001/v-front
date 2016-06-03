import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ui from './ui';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
  uiRouter,
  ui,
  Components,
])

.component('app', AppComponent);
