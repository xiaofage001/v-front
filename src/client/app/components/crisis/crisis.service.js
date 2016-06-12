const crisisService = ['$q', function($q) {

	const crisisPromise = $q.when([
		{id: 1, name: 'Princess Held Captive'},
	    {id: 2, name: 'Dragon Burning Cities'},
	    {id: 3, name: 'Giant Asteroid Heading For Earth'},
	    {id: 4, name: 'Release Deadline Looms'}
	]);

	this.getCrises = () => {
		return crisisPromise;
	};

	this.getCrisis = id => {
		return crisisPromise.then(crises => {
			for(let i = 0; i < crises.length; i++){
				if(crises[i].id == id) return crises[i];
			}
		});
	};
}];

export default crisisService;