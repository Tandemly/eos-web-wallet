import { connect } from 'react-redux';
import Balance from '../../components/Balance';

/* eslint-disable camelcase */
const mapStateToProps = ({ login: { user: { account_name } }, account: { total, difference, symbol } }) => ({
  symbol,
  account_name,
  difference: difference ? difference.toFixed(6) : 0,
  total: parseFloat(total || 0),
});

const BalanceContainer = connect(
  mapStateToProps,
)(Balance);

export default BalanceContainer;
