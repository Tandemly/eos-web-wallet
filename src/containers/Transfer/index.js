import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TransferForm } from '../../components';
import { tryPostTransaction } from './reducer';
// import { tryGetBalance } from '../BalanceContainer/reducer';

const mapDispatchToProps = (dispatch, { history }) => ({
  callAPI(values) {
    dispatch(tryPostTransaction({
      history,
      ...values,
    }));
  },
  // TODO
  updateAmount() {
  },
});

const TransferContainer = connect(
  null,
  mapDispatchToProps,
)(TransferForm);

export default withRouter(TransferContainer);
