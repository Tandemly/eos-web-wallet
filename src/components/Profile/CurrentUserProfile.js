//@flow
import Profile from "./Profile";
import withProfile from "../../containers/profile/index";
import withUserId from "../../containers/current-user/index";

export default withUserId(withProfile(Profile));
