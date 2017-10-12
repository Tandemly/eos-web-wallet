// @flow
// global localStorage, window
import * as React from "react";
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from "components/Header";
import Footer from "components/Footer";
import Menu from "components/Menu";
import Transfer from "routes/Transfer";
import Modal from "util/component-utils/Modal";
import {
  toggleMenu,
  closeMenu,
  routeLoad
} from "./actions";

import "./App.scss";

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    /* eslint-disable */
    this.previousLocation = this.unauthLocation = {
      pathname: '/about',
      hash: '',
      search: '',
    };
    /* eslint-enable */
  }

  componentWillUpdate(nextProps) {
    const { auth, location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = auth ? this.props.location : this.unauthLocation;
    }
  }

  handleModalClose() {
    const { history } = this.props;
    history.push(this.previousLocation);
  }

  render() {
    const {
      isModalOpen,
    } = this.props;
    const renderRoute = () => {};
    const handleModalClose = this.handleModalClose.bind(this);
    // const isModal = modalRoutes.some(({ path }) => new RegExp(path).test(location.pathname));

    return (
      <main>
        <Helmet titleTemplate="%s | EOS Wallet" defaultTitle="EOS Wallet" />
    
        <Header />
        
        <section className="columns is-variable is-0">
          <div className="column is-narrow is-hidden-mobile">
            <Menu />
          </div>
    
          <div className="column">
            <div  
              onClick={closeMenu}
              className="menu-closer"
              role="button"
              tabIndex="0" />

            <Transfer />
    
            <Footer />
          </div>
        </section>
    
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          renderRoute={renderRoute} />
      </main>
    );
  }
}

export default App;
