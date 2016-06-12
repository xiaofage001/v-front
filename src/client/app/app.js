import angular from 'angular';
// import uiRouter from 'angular-ui-router';
import ngComponentRouter from '@angular/router/angular1/angular_1_router';
// import ui from './ui';
// import Components from './components/components';
import AppComponent from './app.component';
import heroes from './components/heroes/index';
import crisisCenter from './components/crisis/index';

import 'normalize.css';

angular.module('app', [
  'ngComponentRouter',
  'heroes',
  'crisis-center',
])

.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}])

.value('$routerRootComponent', 'app')

.component('app', AppComponent);
