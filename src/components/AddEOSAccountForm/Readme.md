Connected EOS accounts example:

```js
const { Provider } = require( "react-redux");
const store = {
  getState: () => ({}),
  dispatch: _ => _,
  subscribe: _ => _
};
const noop = () => {};

<Provider store={store}>
  <AddEOSAccountForm callAPI={noop} />
</Provider>
```
