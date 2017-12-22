import { connect } from 'react-redux';
import { createLogout } from './redux';

export default connect(
  ({ auth }) => ({ auth }),
  dispatch => ({ logout: createLogout(dispatch) }),
);
