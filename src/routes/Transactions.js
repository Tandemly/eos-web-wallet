import React from 'react';
import { TransactionsContainer } from '../containers';
import { Helmet } from 'react-helmet';
import Authenticated from './Authenticated';

const Transactions = () => (
  <div>
    <Helmet>
      <title>Transaction History</title>
    </Helmet>
    <div className="container-full">
      <div className="d-md-flex justify-content-between items-center">
        <div>
          <h2>Transaction History</h2>
        </div>
        <div className="d-flex items-center mb-2 mb-md-0">
          <div className="export icon-eos_icons_export" />
          <div className="module-search">
            <input
              className="form-control"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <TransactionsContainer />
        </div>
      </div>
    </div>
  </div>
);

export default Authenticated(Transactions);
