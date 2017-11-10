import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import App from "containers/App";
import Loading from "containers/Loading";
import { configureStoreAsync } from "util/configureStore";
import { apiRequest } from "util/fetchUtil";
import { unsetNotification } from "../../redux-modules/notifications/actions";

class Bootloader extends Component {
  state = {
    store: null
  };

  async componentWillMount() {
    const { history } = this.props;
    const store = await configureStoreAsync(history);

    this.setState({ store });

    // quick check for API access + connectivity
    apiRequest("/v1/status")
      .then(resp => console.log(`=> API connection: ${resp.message}`))
      .catch(resp => console.log(`=> API connection: ${resp}`));
  }

  render() {
    const { history } = this.props;
    const { store } = this.state;

    if (!store) {
      return <Loading />;
    } else {
      // Clear notifications...not completely sure about this
      store.dispatch(unsetNotification());
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
