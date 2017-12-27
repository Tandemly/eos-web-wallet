import { connect } from "react-redux";
import { selectCurrentUserProfile } from "../../redux-modules/profile/profile-selectors";

const mapStateToProps = state => ({
  userProfile: selectCurrentUserProfile(state)
});

const withProfile = connect(mapStateToProps);

export default withProfile;
