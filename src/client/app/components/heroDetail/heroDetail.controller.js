import heroService from '../heroes/heroes.service';

export default ['heroService', function(heroService) {
	var $ctrl = this;

	this.$routerOnActivate = next => {
		var id = next.params.id;
		heroService.getHero(id).then(hero => {
			$ctrl.hero = hero;
		});
	};

	this.goHeroes = () => {
		var heroId = this.hero && this.hero.id;
		this.$router.navigate(['HeroList', {id: heroId}]);
	};
}];