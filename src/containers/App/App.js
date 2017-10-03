// @flow
import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import logo from "../../images/tandemly-full-logo-black-white.svg";
import Button from "../../components/Button";
import "./App.scss";

const App = () => (
  <div className="App">
    <Navbar
      transparent
      renderLogo={() => (
        <a className="navbar-item" href="#">
          <img src={logo} alt="Tandem.ly Logo" width="112" height="28" />
        </a>
      )}
      renderLeftMenu={() => [
        <a href="#" className="navbar-item">
          One
        </a>,
        <a href="#" className="navbar-item">
          Two
        </a>,
        <a href="#" className="navbar-item is-active">
          Three
        </a>
      ]}
    />
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Button text="Click Me" className="is-primary" />
  </div>
);

export default App;
