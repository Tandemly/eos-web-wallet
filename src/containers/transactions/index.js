import { connect } from "react-redux";
import {
  selectRecentTransactions,
  selectRecentTransactionsByAccount
} from "../../redux-modules/transactions/transactions-selectors";
import { selectUserProfile } from "../../redux-modules/profile/profile-selectors";

const mapStateToPropsForUserId = (state, ownProps) => ({
  transactions: selectRecentTransactionsByAccount(
    selectUserProfile(ownProps.userId)(state).eosAccount
  )(state)
});

export const withTransactionsForUserId = connect(mapStateToPropsForUserId);

const mapStateToProps = state => ({
  transactions: selectRecentTransactions(state)
});
export const withTransactions = connect(mapStateToProps);

export default withTransactions;
