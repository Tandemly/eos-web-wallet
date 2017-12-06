Icon example using Icomoon. Custom font files can be made at <a target="_blank" href="https://icomoon.io/app/">Icomoon.io</a>.

```js
<div>
  <Icon icon="icon-edit" size="small"/>
  <Icon icon="icon-export" size="medium"/>
  <Icon icon="icon-history" size="large"/>
  <Icon icon="icon-fail_warn" size="bogus"/>
  <Icon icon="icon-permissions"/>
  <Icon icon="icon-loader" className="text-primary"/>
  <Icon icon="icon-logout" className="text-secondary"/>
</div>
```

```js
<div className="button-example">
  <Button className="is-primary icon-menu" />
  <Button text={'Navigation'} className="is-primary icon-menu" />
  <Button text={'Navigation'} className="is-light icon-menu" />
</div>
```

Generate new source files and add them to src/fonts/. CSS file containing classes to genertate fonts is located at src/styles/icons.css