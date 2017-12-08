Login form example:

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
      <LoginForm callAPI={noop} />
    </div>
  </Router>
</Provider>
```
