// @flow
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory as createHistory } from "history";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import App from "./App";
import Loading from "./components/Loading";
import { configureStore } from "util/configureStore";
import { apiRequest } from "util/fetchUtil";
import registerServiceWorker from "./registerServiceWorker";
import { parse as parseQueryString } from "querystring";

import "./styles/index.scss";

const styles = [...document.querySelectorAll("head style")];
const link = document.querySelector('link[type="text/css"]');

styles.forEach(
  style =>
    link && link.parentElement && link.parentElement.insertBefore(style, link)
);

const history = createHistory();

// helper to add parsed query-property to history.location
function addLocationQuery(historyObject) {
  historyObject.location = Object.assign(
    historyObject.location,
    // slice(1) removes the `?` at the beginning of `location.search`
    { query: parseQueryString(historyObject.location.search.slice(1)) }
  );
}

// parse query-parameters at first page load
addLocationQuery(history);

// add parsing for all following history-changes
history.listen(() => addLocationQuery(history));

function getElement(id: string): Element {
  return ((document.getElementById(id): any): Element); // type cast
}

const { store, persistor } = configureStore(undefined, history);

const onBeforeLift = () => {
  // quick check for API access + connectivity
  apiRequest("/v1/status")
    .then(resp => console.log(`=> API connection: ${resp.message}`))
    .catch(resp => console.log(`=> API connection: ${resp}`));
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<Loading />}
      onBeforeLift={onBeforeLift}
      persistor={persistor}
    >
      <div>
        <Router history={history}>
          <Route component={App} />
        </Router>
      </div>
    </PersistGate>
  </Provider>,
  getElement("root")
);
registerServiceWorker();
