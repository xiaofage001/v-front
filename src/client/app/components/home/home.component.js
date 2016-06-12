import template from './home.jade';
import controller from './home.controller';

const homeComponent = {
  restrict: 'E',
  bindings: {},
  template: template(),
  controller,
  controllerAs: 'vm',
};

export default homeComponent;
