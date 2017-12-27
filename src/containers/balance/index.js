import { connect } from "react-redux";
import {
  selectEOSAccountBalance,
  selectEOSBalanceForAccount
} from "../../redux-modules/eos-balances/balance-selectors";

export const withCurrentEOSBalance = connect(state =>
  selectEOSAccountBalance(state)
);

export const withEOSBalanceForAccount = connect((state, ownProps) =>
  selectEOSBalanceForAccount(ownProps.account)(state)
);
