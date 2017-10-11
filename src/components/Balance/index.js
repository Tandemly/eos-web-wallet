import React from 'react';
import numeral from 'numeral';

const tmpStyle = {
  color: '#434b54',
  margin: '-.2rem 0 .5rem'
};

const Balance = ({ total, difference, symbol /* , account_name */ }) => (
  <div className="account-info logged-in p-4">
    <div className="balance">{numeral(total).format('0.00 a')}</div>
    <div className="full_balance" style={tmpStyle}>{numeral(total).format('0,0[.]0000')}</div>
    <div className="change">{symbol}{difference}</div>
  </div>
);

export default Balance;
