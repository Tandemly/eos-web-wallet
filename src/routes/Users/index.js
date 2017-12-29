import Users from "./Users";
import { connect } from "react-redux";
import { listEOSAccountBalances } from "../../thunks/balance";
import { updateProfilesForUsersList } from "../../thunks/profile";
import { selectPagedUsers } from "../../redux-modules/users-list/users-list-selectors";

const mapStateToProps = (state, ownProps) => ({
  skip: Number.parseInt(ownProps.location.query.skip, 10) || 0,
  limit: Number.parseInt(ownProps.location.query.limit, 10) || 30,
  users: selectPagedUsers(state)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const skip = ownProps.location.query.skip || 0;
  const limit = ownProps.location.query.limit || 30;
  return {
    loadUsers: async () => {
      await dispatch(listEOSAccountBalances(skip, limit));
      return dispatch(updateProfilesForUsersList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
