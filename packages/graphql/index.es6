import gql from 'graphql-tag';

export const ACTION_SUFFIX = {
  PENDING: '_PENDING',
  REJECTED: '_REJECTED',
  RESOLVED: '_RESOLVED',
};

export const pending = action => `${action}${ACTION_SUFFIX.PENDING}`;
export const rejected = action => `${action}${ACTION_SUFFIX.REJECTED}`;
export const resolved = action => `${action}${ACTION_SUFFIX.RESOLVED}`;

export const clientMiddleware = (client, dispatch, action) => {
  const payload = client
    .mutate({
      mutation: gql(action.mutation),
      variables: action.payload,
    })
    .then(({ data, errors }) => {
      if (errors) {
        dispatch({
          type: rejected(action.type),
          payload: errors,
        });
      } else {
        dispatch({
          type: resolved(action.type),
          payload: data[Object.keys(data)[0]],
        });
      }
      return data[Object.keys(data)[0]];
    })
    .catch((err) => {
      dispatch({
        type: rejected(action.type),
        payload: err,
      });
      throw err;
    });
  dispatch({
    type: pending(action.type),
    payload: action.payload,
  });
  return payload;
};
