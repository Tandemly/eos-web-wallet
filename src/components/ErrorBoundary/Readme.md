Error boundry example (not currently working as expected):

```js
<ErrorBoundary>
  <Button className="is-primary" onClick={() => { throw new Error("Bad stuff"); }}>Boom</Button>
</ErrorBoundary>
```
