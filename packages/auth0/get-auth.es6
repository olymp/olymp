import { connect } from 'react-redux';
import { SET, INIT, LOGIN, LOGOUT } from './redux';

export default connect(
  ({ auth }) => ({
    user: auth.user,
    isAuthenticated: !!auth.user,
  }),
  dispatch => ({
    login: payload => dispatch({ type: LOGIN, payload }),
    logout: payload => dispatch({ type: LOGOUT, payload }),
    setUser: payload => dispatch({ type: SET, payload }),
    initAuth: payload => dispatch({ type: INIT, payload }),
  }),
);
