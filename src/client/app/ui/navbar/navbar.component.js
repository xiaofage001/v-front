import template from './navbar.jade';
import controller from './navbar.controller';
import './navbar.less';

const navbarComponent = {
  restrict: 'E',
  bindings: {},
  template: template(),
  controller,
  controllerAs: 'vm',
};

export default navbarComponent;
