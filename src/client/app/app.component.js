import template from './app.jade';

export default {
	template: template(),
	$routeConfig: [
	    { path: '/home', name: 'Home', component: 'home', useAsDefault: true },
	    { path: '/about', name: 'About', component: 'about' },
		{ path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter'},
		{ path: '/heroes/...', name: 'Heroes', component: 'heroes'},
	]
};
