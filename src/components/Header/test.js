import * as React from "react";
import renderer from "react-test-renderer";
import { StaticRouter } from "react-router";
import Header from "./";
import { Provider } from "react-redux";
import { configureStore } from "../../util/configureStore";

describe("<Header />", () => {
  it("renders without crashing", () => {
    const staticContext = {};
    const { store } = configureStore();

    const tree = renderer
      .create(
        <StaticRouter location="/" context={staticContext}>
          <Provider store={store}>
            <Header />
          </Provider>
        </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
