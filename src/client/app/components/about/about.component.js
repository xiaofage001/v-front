import template from './about.jade';
import controller from './about.controller';

const aboutComponent = {
  restrict: 'E',
  bindings: {},
  template: template(),
  controller,
  controllerAs: 'vm',
};

export default aboutComponent;
