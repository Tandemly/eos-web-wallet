import * as React from "react";
import Transaction from "./";
import List from "components/List";

import stub from "containers/Transactions/stub";

type PropTypes = {
  data: Array<any>,
};

const Transactions = ({ data = stub }: PropTypes) => (
  <div>
    {console.log(data)}
    <List
      data={data}
      renderItem={Transaction} />
  </div>
);

export default Transactions;