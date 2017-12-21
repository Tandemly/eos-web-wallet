import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { change } from "redux-form";
import TransferForm from "./TransferForm";
import { selectEOSAccountBalance } from "../../redux-modules/eos-balances/balance-selectors";
import { doTransfer } from "../../thunks/transfer";

function setAmountToBalance() {
  return (dispatch, getState) => {
    const balance = selectEOSAccountBalance(getState()).total;

    return dispatch(change("transfer", "amount", balance));
  };
}

const mapDispatchToProps = dispatch => ({
  callAPI(values) {
    return dispatch(doTransfer(values.to, values.amount, values.memo));
  },
  updateAmount() {
    dispatch(setAmountToBalance());
  }
});

export const EOSTransferForm = connect(null, mapDispatchToProps)(TransferForm);

export default withRouter(EOSTransferForm);
