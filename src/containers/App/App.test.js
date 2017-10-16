import * as React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App history={{}} />);
});
