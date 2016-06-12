import template from './hero.jade';
import controller from './hero.controller';

const heroComponent = {
  restrict: 'E',
  bindings: {},
  template: template(),
  controller,
  controllerAs: 'vm',
};

export default heroComponent;
