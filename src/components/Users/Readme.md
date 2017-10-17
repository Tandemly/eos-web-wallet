Users example:

```js
const noop = () => {};

<Background className="users-example content">
  <DisplayRedux>
    <DisplayReactRouter>
      <ErrorBoundary>
        <Users callAPI={noop} />
      </ErrorBoundary>
    </DisplayReactRouter>
  </DisplayRedux>
</Background>
```
