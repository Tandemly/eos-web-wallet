Basic navigation bar for the home page:

```js
<div style={{ background: '#9BCA3B' }}>
    <Navbar 
        transparent 
        renderLogo={() => <NavbarLogo img="/tandemly-full-logo-black-white.svg" alt="Tandem.ly Logo" href="http://tandem.ly" />}
        renderLeftMenu={() => [
            <NavbarLink>One</NavbarLink>
            <NavbarLink>Two</NavbarLink>
            <NavbarLink className="is-active">Three</NavbarLink>
        ]}
    />
</div>
```