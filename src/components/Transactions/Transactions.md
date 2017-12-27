A short list of transactions:

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
    <div style={{ backgroundColor: "#3a4249", padding: "2rem"}}>
      <Transactions
        data={transactions.default}
        count={5}
      />
    </div>
  </Router>
</Provider>

```
