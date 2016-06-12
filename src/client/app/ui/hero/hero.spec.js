import HeroModule from './index';
import HeroController from './hero.controller';
import HeroComponent from './hero.component';
import heroTemplate from './hero.jade';

describe('Hero', () => {
  let $rootScope, makeController; // eslint-disable-line

  beforeEach(window.module(HeroModule)); // eslint-disable-line

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new HeroController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      const controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(heroTemplate()).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = HeroComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(heroTemplate());
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HeroController);
    });
  });
});
