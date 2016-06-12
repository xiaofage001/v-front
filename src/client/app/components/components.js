import angular from 'angular';
import Home from './home';
import About from './about';

function upperFirstCharactor(name) {
  if (angular.isString(name) && name.length > 0) {
    return name.charAt(0).toUpperCase() + name.substr(1);
  }
  return null;
}

const componentsList = [{
  name: upperFirstCharactor(Home),
  value: '家',
}, {
  name: upperFirstCharactor(About),
  value: '关于',
}];

export default angular.module('app.components', [Home, About]).name;

export { componentsList };
