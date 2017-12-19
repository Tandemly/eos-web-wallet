import withUserId from "../../containers/current-user";
import withProfile from "../../containers/profile";
import Profile from "./UserProfile";

export default withUserId(withProfile(Profile));
