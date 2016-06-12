import angular from 'angular';
import CrisisService from './crisis.service';
import CrisisComponent from './crisis.component';

import CrisisListComponent from '../crisisList/crisisList.component';
import CrisisDetailComponent from '../crisisDetail/crisisDetail.component';

import dialogService from '../dialog/dialog';

export default angular.module('crisis-center', ['dialog'])

.service('crisisService', CrisisService)

.component('crisisCenter', CrisisComponent)

.component('crisisList', CrisisListComponent)
.component('crisisDetail', CrisisDetailComponent);