import template from './home.jade';
import controller from './home.controller';

const homeComponent = {
  restrict: 'E',
  bindings: {},
  template: template({ fucks: ['you', 'he', 'she'] }),
  controller,
  controllerAs: 'vm',
};

export default homeComponent;
