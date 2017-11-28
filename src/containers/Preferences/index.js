import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PreferencesForm from "components/PreferencesForm";
import { updateProfile } from "../../thunks/profile";
import withProfile from "../Profile/index";

const mapStateToProps = (state, ownProps) => ({
  initialValues: ownProps.userProfile
});

const mapDispatchToProps = dispatch => ({
  callAPI(values) {
    return dispatch(
      updateProfile({
        ...values
      })
    );
  }
});

const Preferences = connect(mapStateToProps, mapDispatchToProps)(
  PreferencesForm
);

export default withRouter(withProfile(Preferences));
