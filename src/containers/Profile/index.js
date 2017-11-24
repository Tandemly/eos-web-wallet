import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "components/Profile";
import {
  selectWalletUserImage,
  selectWalletUserName
} from "../../redux-modules/user/user-selectors";

// TODO genericize this to network call to specific user
const mapStateToProps = state => ({
  displayName: selectWalletUserName(state),
  imageUrl: selectWalletUserImage(state)
});

const Container = connect(mapStateToProps)(Profile);

export default withRouter(Container);
