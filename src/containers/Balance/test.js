import * as React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { configureStore } from "util/configureStore";
import Balance from "./";

describe("<BalanceContainer />", () => {
  it("renders without crashing", () => {
    const { store } = configureStore({
      user: {
        profile: {
          account_name: "inita"
        }
      }
    });
    const tree = (
      <Provider store={store}>
        <Balance />
      </Provider>
    );

    shallow(tree);
  });
});
