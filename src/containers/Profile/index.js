import { connect } from "react-redux";
import { selectWalletUserProfile } from "../../redux-modules/profile/profile-selectors";

const mapStateToProps = state => ({
  userProfile: selectWalletUserProfile(state)
});

const withProfile = connect(mapStateToProps);

export default withProfile;
