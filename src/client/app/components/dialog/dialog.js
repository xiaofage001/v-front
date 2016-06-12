import angular from 'angular';

export default angular.module('dialog', [])

.service('dialogService', ['$q', function($q) {
	this.confirm = message => {
		return $q.when(window.confirm(message || 'Is it OK?'));
	};
}]);