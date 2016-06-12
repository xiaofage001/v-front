export default ['$q', function($q) {
	const heroesPromise = $q.when([
		{ id: 11, name: 'Mr. Nice' },
	    { id: 12, name: 'Narco' },
	    { id: 13, name: 'Bombasto' },
	    { id: 14, name: 'Celeritas' },
	    { id: 15, name: 'Magneta' },
	    { id: 16, name: 'RubberMan' }
	]);

	this.getHeroes = () => {
		return heroesPromise;
	};

	this.getHero = id => {
		return heroesPromise.then(heroes => {
			for(let i = 0; i < heroes.length; i++){
				if(heroes[i].id == id) return heroes[i];
			}
		});
	};
}];