import template from './heroDetail.jade';
import controller from './heroDetail.controller';

export default {
	template: template(),
	bindings: {$router: '<'},
	controller
};