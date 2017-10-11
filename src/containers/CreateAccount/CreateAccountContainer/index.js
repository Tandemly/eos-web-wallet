import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CreateAccountForm } from '../../../components';
import { tryPostSignup } from '../reducer';

const mapDispatchToProps = (dispatch, { history }) => ({
  callAPI(values) {
    dispatch(tryPostSignup({
      history,
      ...values
    }));
  },
});

const CreateAccountFormContainer = connect(
  null,
  mapDispatchToProps,
)(CreateAccountForm);

export default withRouter(CreateAccountFormContainer);
