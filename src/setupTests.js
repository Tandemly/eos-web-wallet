import "isomorphic-fetch";
import fetch from "jest-fetch-mock";
import requestAnimationFrame from "raf/polyfill";
import "jest-localstorage-mock";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import shallowRenderer from "react-test-renderer/shallow";

Enzyme.configure({ adapter: new Adapter() });

global.snapshot = component =>
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
global.shallowSnapshot = component =>
  expect(shallowRenderer.createRenderer().render(component)).toMatchSnapshot();

global.window = {};
global.fetch = fetch;
global.window.requestAnimationFrame = global.requestAnimationFrame = requestAnimationFrame;
