import template from './heroes.jade';

export default {
	template: template(),
	$routeConfig: [
		{path: '/', name: 'HeroList', component: 'heroList', useAsDefault: true},
		{path: '/:id', name: 'HeroDetail', component: 'heroDetail'}
	]
};