import * as React from "react";
import { Helmet } from 'react-helmet';
import Container from 'containers/Transactions';
import transactions from "fixtures/transactions";

// TODO add search
const Transactions = () => (
  <div>
    <Helmet>
      <title>Transaction History</title>
    </Helmet>
    
    <div className="content">
      <div className="d-md-flex justify-content-between items-center">
        <div>
          <h2>Transaction History</h2>
        </div>
      </div>

      <Container data={transactions} />
    </div>
  </div>
);

export default Transactions;
