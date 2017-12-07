A list of shortcuts example:

```js
const { Provider } = require( "react-redux");
const { Router } = require("react-router-dom");
const { createBrowserHistory } = require("history");
const store = {
  getState: () => ({}),
  dispatch: _ => _,
  subscribe: _ => _
};
const noop = () => {};

<Provider store={store}>
  <Router history={createBrowserHistory()}>
    <div style={{ backgroundColor: "#575f68", padding: "2rem"}}>
      <Shortcuts data={[
        {
          to: "/",
          text: "Transfer",
          iconClass: "icon-transfer u-mr1"
        },
        {
          to: "/transactions",
          text: "Transaction History",
          iconClass: "icon-history u-mr1"
        },
        {
          to: "/accounts",
          text: "Accounts",
          iconClass: "icon-account u-mr1"
        }
      ]}
    />
    </div>
  </Router>
</Provider>
```
