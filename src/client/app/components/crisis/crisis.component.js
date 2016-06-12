import template from './crisis.jade';

export default {
	template: template(),
	$routeConfig: [
		{path: '/', name: 'CrisisList', component: 'crisisList', useAsDefault: true},
		{path: '/:id', name: 'CrisisDetail', component: 'crisisDetail'}
	]
};