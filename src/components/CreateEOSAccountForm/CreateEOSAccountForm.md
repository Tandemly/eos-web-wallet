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
  <div style={{ backgroundColor: "#575f68", padding: "2rem"}}>
    <CreateEOSAccountForm onSubmit={noop} />
  </div>
</Provider>
```
