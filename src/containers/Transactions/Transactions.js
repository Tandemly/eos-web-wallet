import * as React from "react";
import Transaction from "./Transaction";
import List from "components/List";

type PropTypes = {
  data: Array<any>,
};

// TODO add paging
const Transactions = ({ data = [] }: PropTypes) => (
  <div>
    <List
      data={data}
      renderItem={Transaction} />
  </div>
);

export default Transactions;