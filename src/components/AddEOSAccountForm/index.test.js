import * as React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";
const { createBrowserHistory } = require("history");
import { configureStore } from "util/configureStore";
import AddEOSAccountForm from "./";

describe("<AddEOSAccountForm /> container", () => {
  it("renders without crashing", () => {
    const { store } = configureStore({});
    snapshot(
      <Provider store={store}>
        <StaticRouter location="/" context={{}}>
          <AddEOSAccountForm />
        </StaticRouter>
      </Provider>
    );
  });
});
