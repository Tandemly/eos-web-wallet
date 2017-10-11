// @flow
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "components/Header";
import Footer from "components/Footer";
import Menu from "components/Menu";
import Transfer from "routes/Transfer";

import "./App.scss";

const App = () => (
  <main>
    <Helmet titleTemplate="%s | EOS Wallet" defaultTitle="EOS Wallet" />

    <Header />
    
    <section className="columns is-variable is-0">
      <div className="column is-narrow is-hidden-mobile">
        <Menu />
      </div>

      <div className="column">
        <div className="menu-closer" role="button" tabIndex="0" />

        <Transfer />

        <Footer />
      </div>
    </section>
  </main>
);

export default App;
