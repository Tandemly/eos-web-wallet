Connected EOS accounts example:

```js
const noop = () => {};
const keyPair = {
  publicKey: "EOSABCD123",
  privateKey: "EOSABCD123"
};


<EOSAccount
  accountName="inita"
  ownerKeys={keyPair}
  activeKeys={keyPair}
  onDisconnect={noop}
  onCopy={copied => window.alert(`Copied ${copied}`)} />
```
