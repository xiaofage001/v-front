/**
 * HeroListController 业务处理类（包含２个方法）
 * 
 * 1、页面加载时（$routerOnActivate　当前路由在活动时）获取所有的heroes
 * 
 * 2、判断当前hero是否被选用
 * 
 */
export default class HeroList {

	constructor(heroService) {
		this.selectedId = null;
		this._heroService = heroService;
	}
	
	$routerOnActivate(next) {
		this._heroService.getHeroes().then(heroes => {
			this.heroes = heroes;
			this.selectedId = next.params.id;
		});
	}

	isSelected(hero) {
		return (hero.id == this.selectedId);
	}
}

HeroList.$inject = ['heroService'];