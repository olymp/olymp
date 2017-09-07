import gql from 'graphql-tag';
import shortId from 'shortid';

export const ACTION_SUFFIX = {
  PENDING: '_PENDING',
  REJECTED: '_REJECTED',
  RESOLVED: '_RESOLVED',
};

export const pending = action => `${action}${ACTION_SUFFIX.PENDING}`;
export const rejected = action => `${action}${ACTION_SUFFIX.REJECTED}`;
export const resolved = action => `${action}${ACTION_SUFFIX.RESOLVED}`;

export const clientMiddleware = (client, dispatch, action) => {
  const requestId = shortId.generate();
  const payload = client
    .mutate({
      mutation: gql(action.mutation),
      variables: action.payload,
    })
    .then(({ data, errors }) => {
      if (errors) {
        dispatch({
          type: rejected(action.type),
          requestId,
          payload: errors,
        });
      } else {
        dispatch({
          type: resolved(action.type),
          requestId,
          payload: data[Object.keys(data)[0]],
        });
      }
      return data[Object.keys(data)[0]];
    })
    .catch((err) => {
      dispatch({
        type: rejected(action.type),
        requestId,
        payload: err,
      });
      throw err;
    });
  dispatch({
    type: pending(action.type),
    payload: action.payload,
    requestId,
  });
  return payload;
};
