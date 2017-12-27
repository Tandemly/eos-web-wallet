import withUserId from "../../containers/current-user";
import withProfile from "../../containers/profile";
import EditProfile from "./EditProfile";

export default withUserId(withProfile(EditProfile));
