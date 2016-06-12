import crisisService from '../crisis/crisis.service';
import dialogService from '../dialog/dialog';

export default ['crisisService', 'dialogService', function(crisisService, dialogService) {
	var $ctrl = this;

	this.$routerOnActivate = next => {
		var id = next.params.id;
		crisisService.getCrisis(id).then(crisis => {
			if(crisis){
				$ctrl.editName = crisis.name;
				$ctrl.crisis = crisis;
			}else{
				$ctrl.gotoCrises();
			}
		});
	};

	this.$routerCanDeactivate = () => {
		if(!this.crisis || this.crisis.name === this.editName){
			return true;
		}

		return dialogService.confirm('Discard changes?');
	};

	this.cancel = () => {
		$ctrl.editName = $ctrl.crisis.name;
		$ctrl.gotoCrises();
	};

	this.save = () => {
		$ctrl.crisis.name = $ctrl.editName;
		$ctrl.gotoCrises();
	};

	this.gotoCrises = () => {
		var crisisId = $ctrl.crisis && $ctrl.crisis.id;
		this.$router.navigate(['CrisisList', {id: crisisId}]);
	};
}];