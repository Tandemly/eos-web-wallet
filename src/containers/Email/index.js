import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { EmailForm } from '../../../components';
import { tryPostEmail } from '../reducer';

const mapDispatchToProps = (dispatch, { history }) => ({
  callAPI(values) {
    dispatch(tryPostEmail({
      history,
      ...values
    }));
  },
});

const EmailContainer = connect(
  null,
  mapDispatchToProps,
)(EmailForm);

export default withRouter(EmailContainer);
