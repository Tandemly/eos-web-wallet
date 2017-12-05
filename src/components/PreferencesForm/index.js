import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PreferencesForm from "./PreferencesForm";
import { updateProfile } from "../../thunks/profile";
import withProfile from "../../containers/profile/index";

const mapStateToProps = (state, ownProps) => ({
  initialValues: ownProps.userProfile,
  enableReinitialize: true
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
