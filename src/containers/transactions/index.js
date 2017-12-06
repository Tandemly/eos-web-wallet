import { connect } from "react-redux";
import { selectRecentTransactions } from "../../redux-modules/transactions/transactions-selectors";

// TODO parameterize props
const mapStateToProps = state => ({
  data: selectRecentTransactions(state)
});

export const withTransactions = connect(mapStateToProps);

export default withTransactions;
