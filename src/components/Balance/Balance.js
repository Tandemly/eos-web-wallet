import * as React from "react";
import numeral from 'numeral';

const Balance = ({ total, difference, symbol /* , account_name */ }) => (
  <div className="-is-logged-in">
    <div className="financials u-p3">
      <p className="title is-1 balance">{numeral(total).format('0.00a')}<span>B</span></p>
      <p className="subtitle is-6 full-balance">{numeral(total).format('0,0[.]0000')}</p>
      {difference && <div className="tag is-primary change">{symbol}{difference}</div>}
    </div>
  </div>
);

export default Balance;
