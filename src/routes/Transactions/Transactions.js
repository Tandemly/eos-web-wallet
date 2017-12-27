import * as React from "react";
import { Helmet } from "react-helmet";
import TransactionsList from "../../components/Transactions";
//import Filter from "components/Filter";

const Transactions = ({ transactions }) => (
  <div>
    <Helmet>
      <title>Transaction History</title>
    </Helmet>

    <div className="content">
      <div className="d-md-flex justify-content-between items-center">
        <div>
          <h2 className="title is-2">Transaction History</h2>
        </div>
      </div>

      <div>
        {/*<Filter data={transactions}>*/}
        <TransactionsList data={transactions} />
        {/*</Filter>*/}
      </div>
    </div>
  </div>
);

export default Transactions;
