import { connect } from 'react-redux';
import ResetPasswordForm from './ResetPasswordForm';
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

export default ResetPassword;
