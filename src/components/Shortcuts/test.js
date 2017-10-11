import * as React from "react";
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router';
import Shortcuts from './';

describe('<Shortcuts />', () => {
  it('renders without crashing', () => {
    const staticContext = {};
    const tree = renderer.create(
      <StaticRouter location="/" context={staticContext}>
        <Shortcuts />
      </StaticRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
})


