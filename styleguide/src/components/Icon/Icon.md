Icon example using Icomoon. Custom font files can be made at <a target="_blank" href="https://icomoon.io/app/">Icomoon.io</a>.

```js
<div>
  <Icon icon="icon-check-circle"/>
  <Icon icon="icon-list-ul"/>
  <Icon icon="icon-envelope"/>
  <Icon icon="icon-plus"/>
  <Icon icon="icon-navicon" className="text-primary"/>
  <Icon icon="icon-forward" className="text-secondary"/>
</div>
```

```js
<div className="button-example">
  <Button className="is-primary icon-navicon" />
  <Button text={'Navigation'} className="is-primary icon-navicon" />
  <Button text={'Navigation'} className="is-light icon-navicon" />
</div>
```

Generate new source files and add them to src/fonts/. CSS file containing classes to genertate fonts is located at src/styles/icons.css