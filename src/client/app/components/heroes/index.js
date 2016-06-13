import angular from 'angular';
import HeroService from './heroes.service';
import HeroesComponent from './heroes.component';
import HeroListComponent from '../heroList/heroList.component';
import HeroDetailComponent from '../heroDetail/heroDetail.component';

export default angular.module('heroes', [])

.service('heroService', HeroService)

.component('heroes', HeroesComponent)
.component('heroList', HeroListComponent)
.component('heroDetail', HeroDetailComponent)
.name;
