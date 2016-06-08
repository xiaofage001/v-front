import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ui from './ui';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import '@angular/router/angular1/angular_1_router';

angular.module('app', [
  uiRouter,
  ui,
  Components,
  'ngComponentRouter',
])
// config the top level routed App component
.value('$routerRootComponent', 'app')

.component('app', AppComponent);
