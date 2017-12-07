Users example:

```js
const noop = () => {};

<div style={{ backgroundColor: "#3a4249", padding: "2rem"}}>
    <Users data={users.default.splice(0, 4)} callAPI={noop} />
</div>
```
