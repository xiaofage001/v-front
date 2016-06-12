import template from './navbar.jade';
import controller from './navbar.controller';
import './navbar.less';
import { componentsList as components } from '../../components/components';

const navbarComponent = {
  restrict: 'E',
  bindings: {},
  template: template({ components }),
  controller,
  controllerAs: 'vm',
};

export default navbarComponent;
