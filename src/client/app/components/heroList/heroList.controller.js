import heroService from '../heroes/heroes.service';

export default ['heroService', function(heroService) {
	var selectedId = null;
	var $ctrl = this;

	this.$routerOnActivate = next => {
		heroService.getHeroes().then(heroes => {
			$ctrl.heroes = heroes;
			selectedId = next.params.id;
		});
	};

	this.isSelected = hero => {
		return (hero.id == selectedId);
	};
}];