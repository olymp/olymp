import { pending, rejected, resolved } from 'olymp-graphql';

export const AUTH_ACTIONS = {
  LOGIN: 'AUTH_LOGIN',
  LOGOUT: 'AUTH_LOGOUT',
};
export const AUTH_VERIFY = 'AUTH_VERIFY';

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
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case pending(AUTH_VERIFY):
      return {
        ...state,
        verifying: true,
      };
    case resolved(AUTH_VERIFY):
      return {
        ...state,
        user: action.payload,
        verifying: false,
      };
    case rejected(AUTH_VERIFY):
      return {
        ...state,
        verifying: false,
      };
    case resolved(AUTH_ACTIONS.LOGIN):
      return { ...state, user: action.payload };
    case resolved(AUTH_ACTIONS.LOGOUT):
      return { ...state, user: null };
    default:
      return state;
  }
};

export const authMiddleware = ({ dispatch, getState }) => nextDispatch => (action) => {
  if (typeof localStorage !== 'undefined' && action.type === resolved(AUTH_VERIFY)) {
    if (action.payload) {
      localStorage.setItem('token', action.payload.token);
    } else {
      localStorage.removeItem('token');
    }
  }
  if (typeof localStorage !== 'undefined' && action.type === rejected(AUTH_VERIFY)) {
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

export const createVerify = dispatch => payload =>
  dispatch({
    type: AUTH_VERIFY,
    payload,
    query: `
      query verify {
        user: verify {
          ${attributes}
        }
      }
    `,
  });

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
    payload: {},
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
