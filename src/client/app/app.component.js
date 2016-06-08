import template from './app.jade';

const appComponent = {
  template: template(),
  restrict: 'E',
  $routeConfig: [
    { path: '/home', name: 'Home', component: 'home', useAsDefault: true },
    { path: '/about', name: 'About', component: 'about' },
  ],
};

export default appComponent;
