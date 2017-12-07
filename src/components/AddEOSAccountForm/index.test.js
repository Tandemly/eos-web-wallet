import * as React from "react";
import { Provider } from "react-redux";
import { configureStore } from "util/configureStore";
import AddEOSAccountForm from "./";

describe("<AddEOSAccountForm /> container", () => {
  it("renders without crashing", () => {
    const { store } = configureStore({});
    snapshot(
      <Provider store={store}>
        <AddEOSAccountForm />
      </Provider>
    );
  });
});
