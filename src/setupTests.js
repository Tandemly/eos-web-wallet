const fetch = require('jest-fetch-mock');
const requestAnimationFrame = require('raf/polyfill');
require("jest-localstorage-mock");

const Enzyme  = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

import renderer from 'react-test-renderer';
import shallowRenderer from 'react-test-renderer/shallow';

Enzyme.configure({ adapter: new Adapter() });

global.snapshot = component => expect(renderer.create(component).toJSON()).toMatchSnapshot();
global.shallowSnapshot = component => expect(shallowRenderer.createRenderer().render(component)).toMatchSnapshot();

global.window = {};
global.fetch = fetch;
global.window.requestAnimationFrame =
global.requestAnimationFrame = requestAnimationFrame;