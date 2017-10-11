A simple List example:

```js
let data = [
  { text: 'one' },
  { text: 'two' },
  { text: 'three' }
];

const renderItem = ({ text }) => (
  <li><div>{text}</div></li>
);

<div className="list-example">
  <List data={data} renderItem={renderItem} />
</div>
```
