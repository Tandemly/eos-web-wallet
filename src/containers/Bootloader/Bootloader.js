import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import App from "containers/App";
import Loading from "containers/Loading";
import { configureStore } from "util/configureStore";

import store from "fixtures/store";

class Bootloader extends Component {
  state = {
    store: null
  };

  async componentWillMount() {
    const store = await configureStore(
      process.env.NODE_ENV === "development" ? store : {}
    );

    console.log(store.getState());

    this.setState({ store });
  }

  render() {
    const { history } = this.props;
    const { store } = this.state;

    if (!store) {
      return <Loading />;
    }

    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route component={App} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default Bootloader;
