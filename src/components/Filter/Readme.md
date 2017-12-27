Fitler list example:

```js
const { StaticRouter } = require('react-router-dom');
<StaticRouter location="/" context={{}}>
<Filter data={transactions.default.slice(0, 4)}>
  <Transactions />
</Filter>
</StaticRouter>
```
