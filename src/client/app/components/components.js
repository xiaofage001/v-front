import angular from 'angular';
import Home from './home';
import About from './about';

const componentsList = [Home, About];

export default angular.module('app.components', componentsList).name;

export { componentsList };
