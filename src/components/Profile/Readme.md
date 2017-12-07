Profile example:

```js
<div style={{ backgroundColor: "#3a4249", padding: "2rem"}}>
  <Profile userId="here@there.com"
    userProfile={
      {
        imageUrl: "/images/user.png",
        location: "Unknown",
        displayName: "Here N. There",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    }
  />
</div>
```

Profile example (no display name):

```js
<div style={{ backgroundColor: "#3a4249", padding: "2rem"}}>
  <Profile userId="here@there.com"
    userProfile={
      {
        imageUrl: "/images/user.png",
        location: "Unknown",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    }
  />
</div>
```