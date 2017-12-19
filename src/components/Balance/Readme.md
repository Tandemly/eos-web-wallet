A Balance example with positive difference:

```js
<div style={{ backgroundColor: "#575f68", padding: "2rem"}}>
  <Balance total="200" difference={0.0001} symbol={<span className="icon-increase"></span>} />
</div>
```

A Balance example with negative difference:

```js
<div style={{ backgroundColor: "#575f68", padding: "2rem"}}>
  <Balance total="200" difference={0.0001} symbol={<span className="icon-decrease"></span>} />
</div>
```

A Balance example with nothing:

```js
<div style={{ backgroundColor: "#575f68", padding: "2rem"}}>
  <Balance total="0" />
</div>
```

A Balance example with many decimals:

```js
<div style={{ backgroundColor: "#575f68", padding: "2rem"}}>
  <Balance total="200.23223232" difference={0.232323} symbol={<span className="icon-increase"></span>} />
</div>
```

A large total value Balance example with negative difference:

```js
<div style={{ backgroundColor: "#575f68", padding: "2rem"}}>
  <Balance total="20000000.23223232" difference={-0.232323} symbol={<span className="icon-increase"></span>} />
</div>
```
