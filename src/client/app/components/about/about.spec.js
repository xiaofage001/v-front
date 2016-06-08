import AboutModule from './index';
import AboutController from './about.controller';
import AboutComponent from './about.component';
import aboutTemplate from './about.jade';

describe('About', () => {
  let $rootScope, makeController; // eslint-disable-line

  beforeEach(window.module(AboutModule)); // eslint-disable-line
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new AboutController();
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
      expect(aboutTemplate()).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = AboutComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(aboutTemplate());
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AboutController);
    });
  });
});
