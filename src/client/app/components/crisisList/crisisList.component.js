import template from './crisisList.jade';
import controller from './crisisList.controller';

export default {
	template: template(),
	bindings: {$router: '<'},
	controller
};