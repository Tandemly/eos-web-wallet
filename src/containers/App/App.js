// @flow
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "components/Header";
import Footer from "components/Footer";
import Menu from "components/Menu";
import Transfer from "routes/Transfer";
import Modal from "util/component-utils/Modal";

import "./App.scss";

class App extends Component {
  render() {
    
    const {
      isModalOpen,
    } = this.props;
    const renderRoute = () => {};

    return (
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
    
        <Modal
          isOpen={isModalOpen}
          renderRoute={renderRoute} />
      </main>
    );
  }
}

export default App;
