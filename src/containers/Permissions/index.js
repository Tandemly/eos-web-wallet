import { connect } from 'react-redux';
import { Keystore } from '../../components';

/* eslint-disable camelcase */
const mapStateToProps = ({ errors, login: { user } }) => ({
  errors,
  owner_key: user && user.auth && user.auth.owner_key,
  active_key: user && user.auth && user.auth.active_key,
});
/* eslint-enable camelcase */

const KeystoreContainer = connect(
  mapStateToProps,
)(Keystore);

export default KeystoreContainer;
