import * as React from "react";
import Transaction from "./";
import List from "components/List";

type PropTypes = {
  data: Array<any>,
};

const Transactions = ({ data }: PropTypes) => (
  <div>
    {console.log(data)}
    <List
      data={data}
      renderItem={Transaction} />
  </div>
);

export default Transactions;