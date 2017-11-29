//@flow
import Profile from "./Profile";
import withProfile from "../../containers/Profile/index";
import withUserId from "../../containers/UserInfo/index";

export default withUserId(withProfile(Profile));
