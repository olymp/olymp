import { pending, rejected, resolved } from 'olymp-graphql';

export const AUTH_ACTIONS = {
  LOGIN: 'AUTH_LOGIN',
  LOGOUT: 'AUTH_LOGOUT',
};

let attributes = `
  id
  name
  email
  isAdmin
  token
`;

export const setAttributes = newAttributes => (attributes = newAttributes);
export const getAttributes = () => attributes;

const defaultState = { verifying: true };
export const authReducer = (state = defaultState, action) => {
  if (action.type === 'APOLLO_QUERY_INIT' && action.operationName === 'verify') {
    return {
      ...state,
      verifying: true,
      verifyingRequestId: action.requestId,
    };
  }
  if (action.type.indexOf('APOLLO_QUERY_RESULT') === 0 && action.operationName === 'verify') {
    return {
      ...state,
      user: action.result.data.user,
      verifying: false,
    };
  }
  if (action.type === 'APOLLO_QUERY_ERROR' && action.requestId === state.verifyingRequestId) {
    return { ...state, verifying: false };
  }
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case resolved(AUTH_ACTIONS.LOGIN):
      return { ...state, user: action.payload };
    case resolved(AUTH_ACTIONS.LOGOUT):
      return { ...state, user: null };
    default:
      return state;
  }
};

export const authMiddleware = ({ dispatch, getState }) => nextDispatch => (action) => {
  // LocalStorage
  if (
    typeof localStorage !== 'undefined' &&
    action.type.indexOf('APOLLO_QUERY_RESULT') === 0 &&
    action.operationName === 'verify'
  ) {
    if (action.result.data.user) {
      localStorage.setItem('token', action.result.data.user.token);
    } else {
      localStorage.removeItem('token');
    }
  }
  if (
    typeof localStorage !== 'undefined' &&
    action.type === 'APOLLO_QUERY_ERROR' &&
    getState().auth.verifyingRequestId === action.requestId
  ) {
    localStorage.removeItem('token');
  }
  if (typeof localStorage !== 'undefined' && action.type === resolved(AUTH_ACTIONS.LOGIN)) {
    localStorage.setItem('token', action.payload.token);
  }
  if (typeof localStorage !== 'undefined' && action.type === rejected(AUTH_ACTIONS.LOGIN)) {
    localStorage.removeItem('token');
  }
  if (typeof localStorage !== 'undefined' && action.type === resolved(AUTH_ACTIONS.LOGOUT)) {
    localStorage.removeItem('token');
  }

  return nextDispatch(action);
};

export const createSave = dispatch => payload =>
  dispatch({
    type: 'AUTH_SAVE',
    payload,
    mutation: `
      mutation user($user: UserInput, $id: String) {
        user(input: $user, id: $id) {
          ${attributes}
        }
      }
    `,
  });

export const createCheckToken = dispatch => payload =>
  dispatch({
    type: 'AUTH_CHECK_TOKEN',
    mutation: `
      query checkToken($token: String!) {
        checkToken(token: $token)
      }
    `,
    payload,
  });

export const createTotpConfirm = dispatch => payload =>
  dispatch({
    type: 'AUTH_TOTP_CONFIRM',
    mutation: `
      mutation totpConfirm($token: String, $totp: String) {
        totpConfirm(token: $token, totp: $totp)
      }
    `,
    payload,
  });

export const createRegister = dispatch => payload =>
  dispatch({
    type: 'AUTH_REGISTER',
    mutation: `
      mutation register($user: UserInput, $password: String, $token: String) {
        register(input: $user, password: $password, token: $token) {
          ${attributes}
        }
      }
    `,
    payload,
  });

export const createLogin = dispatch => payload =>
  dispatch({
    type: AUTH_ACTIONS.LOGIN,
    mutation: `
      mutation login($email: Email, $password: String, $totp: String) {
        user: login(email: $email, password: $password, totp: $totp) {
          ${attributes}
        }
      }
    `,
    payload,
  });

export const createLogout = dispatch => () =>
  dispatch({
    type: AUTH_ACTIONS.LOGOUT,
    mutation: `
      mutation logout {
        logout
      }
    `,
    payload: null,
  });

export const createForgot = dispatch => payload =>
  dispatch({
    type: 'AUTH_FORGOT',
    mutation: `
      mutation forgot($email: String!) {
        forgot(email: $email)
      }
    `,
    payload,
  });

export const createReset = dispatch => payload =>
  dispatch({
    type: 'AUTH_RESET',
    mutation: `
      mutation reset($token: String!, $password: String!) {
        reset(token: $token, password: $password) {
          email
        }
      }
    `,
    payload,
  });

export const createConfirm = dispatch => payload =>
  dispatch({
    type: 'AUTH_CONFIRM',
    mutation: `
      mutation confirm($token: String!) {
        confirm(token: $token) {
          email
        }
      }
    `,
    payload,
  });
