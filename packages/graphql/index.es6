import gql from 'graphql-tag';
import shortId from 'shortid';

export const APOLLO_ACTIONS = {
  MUTATE: 'APOLLO_MUTATE',
  QUERY: 'APOLLO_QUERY',
};

export const ACTION_SUFFIX = {
  PENDING: '_PENDING',
  REJECTED: '_REJECTED',
  RESOLVED: '_RESOLVED',
};

export const pending = action => `${action}${ACTION_SUFFIX.PENDING}`;
export const rejected = action => `${action}${ACTION_SUFFIX.REJECTED}`;
export const resolved = action => `${action}${ACTION_SUFFIX.RESOLVED}`;

export const apolloMiddleware = client => ({ dispatch, getState }) => nextDispatch => (action) => {
  if (
    action.type.indexOf('APOLLO_MUTATION') !== 0 &&
    action.type.indexOf('APOLLO_QUERY') !== 0 &&
    (action.mutation || action.query)
  ) {
    if (action.payload && typeof action.payload === 'function') {
      action.payload = action.payload(getState());
      if (!action.payload) {
        return;
      }
    }
    const requestId = shortId.generate();
    const invoker = action.mutation
      ? () =>
        client.mutate({
          mutation: typeof action.mutation === 'string' ? gql(action.mutation) : action.mutation,
          variables: action.payload,
          refetchQueries: action.refetchQueries,
        })
      : () =>
        client.query({
          query: typeof action.query === 'string' ? gql(action.query) : action.query,
          variables: action.payload,
          refetchQueries: action.refetchQueries,
        });
    const payload = invoker()
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
  }
  nextDispatch(action);
};

export const createMutation = dispatch => (mutation, payload, refetchQueries) =>
  dispatch({
    type: APOLLO_ACTIONS.MUTATE,
    mutation,
    payload,
    refetchQueries,
  });
export const createQuery = dispatch => (query, payload, refetchQueries) =>
  dispatch({
    type: APOLLO_ACTIONS.MUTATE,
    query,
    payload,
    refetchQueries,
  });
