import Profile from "./UserProfile";
import { selectUserProfile } from "../../redux-modules/profile/profile-selectors";
import { connect } from "react-redux";
import { getTransactionsByUserId } from "../../thunks/transactions";
// import { getBalanceByUserId } from "../../thunks/balance";
import { withTransactionsForUserId } from "../../containers/transactions";
import { getProfileByUserId } from "../../thunks/profile";

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId,
  userProfile: selectUserProfile(ownProps.match.params.userId)(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUser: async () => {
    await dispatch(getProfileByUserId(ownProps.match.params.userId)).then(
      () => {
        // dispatch(getBalanceByUserId(stateProps.userId));
        dispatch(getTransactionsByUserId(ownProps.match.params.userId));
      }
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withTransactionsForUserId(Profile)
);
