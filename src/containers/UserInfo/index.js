import { connect } from "react-redux";
import { selectWalletUserId } from "../../redux-modules/user/user-selectors";

const mapStateToProps = state => ({
  userId: selectWalletUserId(state)
});

const withUserId = connect(mapStateToProps);

export default withUserId;
