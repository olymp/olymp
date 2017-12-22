import { pending, rejected, resolved } from 'olymp-graphql';

export const VERIFY = 'AUTH_VERIFY';
export const LOGIN = 'AUTH_LOGIN';
export const LOGOUT = 'AUTH_LOGOUT';
export const SKIP = 'AUTH_SKIP';

let attributes = `
  id
  name
  email
  isAdmin
  token
`;

export const setAttributes = newAttributes => (attributes = newAttributes);
export const getAttributes = () => attributes;

export const authReducer = (def = {}) => (state = def, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case SKIP:
      return {
        ...state,
        verifying: false,
      };
    case pending(VERIFY):
      return {
        ...state,
        verifying: true,
      };
    case resolved(VERIFY):
      return {
        ...state,
        user: action.payload,
        verifying: false,
      };
    case rejected(VERIFY):
      return {
        ...state,
        verifying: false,
      };
    case resolved(LOGIN):
      return { ...state, user: action.payload };
    case resolved(LOGOUT):
      return { ...state, user: null };
    default:
      return state;
  }
};

export const authMiddleware = ({ dispatch, getState }) => nextDispatch => (action) => {
  if (typeof localStorage !== 'undefined' && action.type === resolved(VERIFY)) {
    if (action.payload) {
      localStorage.setItem('token', action.payload.token);
    } else {
      localStorage.removeItem('token');
    }
  }
  if (typeof localStorage !== 'undefined' && action.type === rejected(VERIFY)) {
    localStorage.removeItem('token');
  }
  if (typeof localStorage !== 'undefined' && action.type === resolved(LOGIN)) {
    localStorage.setItem('token', action.payload.token);
  }
  if (typeof localStorage !== 'undefined' && action.type === rejected(LOGIN)) {
    localStorage.removeItem('token');
  }
  if (typeof localStorage !== 'undefined' && action.type === resolved(LOGOUT)) {
    localStorage.removeItem('token');
  }

  return nextDispatch(action);
};

export const createVerify = dispatch => () =>
  dispatch({
    type: VERIFY,
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
    type: LOGIN,
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
    type: LOGOUT,
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
