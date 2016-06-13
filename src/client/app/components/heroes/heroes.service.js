/**
 * HeroService 服务类（包含２个方法）
 *
 * 1、getHeroes　获取所有英雄
 * 
 * 2、getHero　根据id获取改英雄
 * 
 */
export default class HeroService {

	constructor($q) {
		this.heroesPromise = $q.when([
			{ id: 11, name: 'Mr. Nice' },
		    { id: 12, name: 'Narco' },
		    { id: 13, name: 'Bombasto' },
		    { id: 14, name: 'Celeritas' },
		    { id: 15, name: 'Magneta' },
		    { id: 16, name: 'RubberMan' }
		]);
	}

	getHeroes() {
		return this.heroesPromise;
	}

	getHero(id) {
		return this.heroesPromise.then(heroes => {
			for(let i = 0, len = heroes.length; i < len; i++){
				if(heroes[i].id === id) return heroes[i];
			}
		});
	}
}

HeroService.$inject = ['$q'];