import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { UsernameForm } from '../../../components';
import { tryPostUsername } from '../reducer';

const mapDispatchToProps = (dispatch, { history }) => ({
  callAPI(values) {
    console.log(history);
    dispatch(tryPostUsername({
      history,
      ...values
    }));
  },
});

const UsernameContainer = connect(
  null,
  mapDispatchToProps,
)(UsernameForm);

export default withRouter(UsernameContainer);
