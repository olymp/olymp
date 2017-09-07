import gql from 'graphql-tag';

export const AUTH_ACTIONS = {
  LOGIN: 'AUTH_LOGIN',
  LOGOUT: 'AUTH_LOGOUT',
};
export const AUTH_ACTION_SUFFIX = {
  PENDING: '_PENDING',
  REJECTED: '_REJECTED',
  RESOLVED: '_RESOLVED',
};
export const pending = action => `${action}${AUTH_ACTION_SUFFIX.PENDING}`;
export const rejected = action => `${action}${AUTH_ACTION_SUFFIX.REJECTED}`;
export const resolved = action => `${action}${AUTH_ACTION_SUFFIX.RESOLVED}`;

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
    case `${AUTH_ACTIONS.LOGIN}${AUTH_ACTION_SUFFIX.RESOLVED}`:
      return { ...state, user: action.payload };
    case `${AUTH_ACTIONS.LOGOUT}${AUTH_ACTION_SUFFIX.RESOLVED}`:
      return { ...state, user: null };
    default:
      return state;
  }
};

export const authMiddleware = client => ({ dispatch, getState }) => nextDispatch => (action) => {
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

  // Next dispatch
  if (action.type.indexOf('AUTH_') === -1 || !action.mutation) {
    return nextDispatch(action);
  }

  // Query
  const payload = client
    .mutate({
      mutation: gql(action.mutation),
      variables: action.payload,
    })
    .then(({ data, errors }) => {
      if (errors) {
        dispatch({
          type: `${action.type}${AUTH_ACTION_SUFFIX.REJECTED}`,
          payload: errors,
        });
      } else {
        dispatch({
          type: `${action.type}${AUTH_ACTION_SUFFIX.RESOLVED}`,
          payload: data[Object.keys(data)[0]],
        });
      }
      return data[Object.keys(data)[0]];
    })
    .catch((err) => {
      dispatch({
        type: `${action.type}${AUTH_ACTION_SUFFIX.REJECTED}`,
        payload: err,
      });
      throw err;
    });
  dispatch({
    type: `${action.type}${AUTH_ACTION_SUFFIX.PENDING}`,
    payload: action.payload,
  });
  return payload;
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
