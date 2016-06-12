import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';

export default angular.module('navbar', [
  uiRouter,
])
// config the top level routed App component
.value('$routerRootComponent', 'app')

.component('navbar', navbarComponent).name;
