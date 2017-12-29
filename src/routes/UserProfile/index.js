import Profile from "./UserProfile";
import {
  selectAccountProfile,
  selectUserProfile
} from "../../redux-modules/profile/profile-selectors";
import { connect } from "react-redux";
// import { getBalanceByUserId } from "../../thunks/balance";
import { withTransactionsForUserId } from "../../containers/transactions";
import { refreshUser, refreshAccount } from "../../thunks/users";

const mapStateToProps = (state, ownProps) => ({
  userId: !ownProps.match.params.userId.startsWith("@")
    ? ownProps.match.params.userId
    : undefined,
  userProfile: !ownProps.match.params.userId.startsWith("@")
    ? selectUserProfile(ownProps.match.params.userId)(state)
    : selectAccountProfile(ownProps.match.params.userId.substr(1))(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUser: () =>
    !ownProps.match.params.userId.startsWith("@")
      ? dispatch(refreshUser(ownProps.match.params.userId))
      : dispatch(refreshAccount(ownProps.match.params.userId.substr(1)))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withTransactionsForUserId(Profile)
);
