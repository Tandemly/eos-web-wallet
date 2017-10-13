import * as React from "react";
import Transaction from "./Transaction";
import List from "components/List";

type PropTypes = {
  data: Array<any>,
};

// TODO add paging
// TODO add count as query params
const Transactions = ({ count, data = [] }: PropTypes) => (
  <div>
    <List
      data={count ? data.slice(0, count) : data}
      renderItem={Transaction} />
  </div>
);

export default Transactions;