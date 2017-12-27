Profile example:

```js
<div style={{ backgroundColor: "#3a4249", padding: "2rem"}}>
  <Profile userId="here@there.com"
    userProfile={
      {
        eosAccount: "inita",
        imageUrl: "https://bytemaster.github.io/assets/img/authorimage.jpg",
        location: "Unknown",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        website: "https://twitter.com/tandemly"
      }
    }
  />
</div>
```

Profile example (no EOS account or image):

```js
<div style={{ backgroundColor: "#3a4249", padding: "2rem"}}>
  <Profile userId="here@there.com"
    userProfile={
      {
        location: "Unknown",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        website: "https://twitter.com/tandemly"
      }
    }
  />
</div>
```