import Users from "./Users";
import { connect } from "react-redux";
import { listEOSAccountBalances } from "../../thunks/balance";
import { updateProfilesForUsersList } from "../../thunks/profile";
import { selectPagedUsers } from "../../redux-modules/users-list/users-list-selectors";

const getNumberItem = (location, name, defaultValue) =>
  (location &&
    location.query &&
    location.query[name] &&
    Number.parseInt(location.query[name], 10)) ||
  defaultValue;

const mapStateToProps = (state, ownProps) => ({
  skip: getNumberItem(ownProps.location, "skip", 0),
  limit: getNumberItem(ownProps.location, "limit", 30),
  users: selectPagedUsers(state)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const skip = getNumberItem(ownProps.location, "skip", 0);
  const limit = getNumberItem(ownProps.location, "limit", 30);
  return {
    loadUsers: async () => {
      await dispatch(listEOSAccountBalances(skip, limit));
      return dispatch(updateProfilesForUsersList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
