import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ResetPasswordForm from 'components/ResetPasswordForm';
// import { tryPostEmail } from './reducer';

const mapDispatchToProps = (dispatch, { history }) => ({
  callAPI(values) {
    // return dispatch(tryPostEmail({
    //   history,
    //   ...values
    // }));
  },
});

const ResetPassword = connect(
  null,
  mapDispatchToProps,
)(ResetPasswordForm);

export default withRouter(ResetPassword);
