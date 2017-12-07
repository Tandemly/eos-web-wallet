import { connect } from "react-redux";
import {
  selectWalletUserId,
  selectWalletUserAuthenticated
} from "../../redux-modules/user/user-selectors";

const mapStateToProps = state => ({
  userId: selectWalletUserId(state),
  isAuthenticated: selectWalletUserAuthenticated(state)
});

export const withUserId = connect(mapStateToProps);

export default withUserId;
