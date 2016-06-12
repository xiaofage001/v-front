import crisisService from '../crisis/crisis.service';

export default ['crisisService', '$scope', function(crisisService, $scope) {
	var selectedId = null;
	var $ctrl = $scope.$ctrl = {};

	this.$routerOnActivate = next => {

		console.log('$routerOnActivate', this, arguments);

		crisisService.getCrises().then(crises => {
			$ctrl.crises = crises;
			selectedId = next.params.id;
		});
	};

	$ctrl.isSelected = crisis => {
		return (crisis.id == selectedId);
	};

	$ctrl.onSelect = crisis => {
		this.$router.navigate(['CrisisDetail', {id: crisis.id}]);
	};
}];