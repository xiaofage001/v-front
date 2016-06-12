import template from './app.jade';

// const appComponent = {
//   template: template(),
//   restrict: 'E',
//   $routeConfig: [
//   	{path: '/navbar', name: 'navbar', component: , useAsDefault: true},
//   	{path: '/about', name: 'about', component: }
//   ]
// };

// export default appComponent;

export default {
	template: template(),
	$routeConfig: [
		{path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true},
		{path: '/heroes/...', name: 'Heroes', component: 'heroes'}
	]
};