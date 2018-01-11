import gql from 'graphql-tag';
import shortId from 'shortid';
import omit from './omit-type';

export const APOLLO_MUTATE = 'APOLLO_MUTATE';
export const APOLLO_QUERY = 'APOLLO_QUERY';

export const ACTION_SUFFIX_PENDING = '_PENDING';
export const ACTION_SUFFIX_RESOLVED = '_RESOLVED';
export const ACTION_SUFFIX_REJECTED = '_REJECTED';

export const pending = action => `${action}${ACTION_SUFFIX_PENDING}`;
export const rejected = action => `${action}${ACTION_SUFFIX_REJECTED}`;
export const resolved = action => `${action}${ACTION_SUFFIX_RESOLVED}`;

export const apolloMiddleware = client => ({
  dispatch
}) => nextDispatch => action => {
  if (action.type && (action.mutation || action.query)) {
    const requestId = shortId.generate();
    dispatch({
      type: pending(action.type),
      payload: action.payload,
      requestId
    });
    const invoker = action.mutation
      ? () =>
          client.mutate({
            mutation:
              typeof action.mutation === 'string'
                ? gql(action.mutation)
                : action.mutation,
            variables: omit(action.payload || action.variables),
            refetchQueries: action.refetchQueries,
            optimisticResponse: action.optimisticResponse,
            update: action.update
          })
      : () =>
          client.query({
            query:
              typeof action.query === 'string'
                ? gql(action.query)
                : action.query,
            variables: omit(action.payload || action.variables)
          });
    return invoker()
      .then(({ data, errors, ...xy }) => {
        if (errors) {
          dispatch({
            type: rejected(action.type),
            requestId,
            payload: errors
          });
        } else {
          dispatch({
            type: resolved(action.type),
            requestId,
            payload: data[Object.keys(data)[0]]
          });
        }
        return data[Object.keys(data)[0]];
      })
      .catch(err => {
        dispatch({
          type: rejected(action.type),
          requestId,
          payload: err
        });
        throw err;
      });
  }
  nextDispatch(action);
};

export const createMutation = dispatch => ({
  mutation,
  variables,
  refetchQueries,
  update
}) =>
  dispatch({
    type: APOLLO_MUTATE,
    mutation,
    variables,
    refetchQueries,
    update
  });
export const createQuery = dispatch => ({ query, variables }) =>
  dispatch({
    type: APOLLO_QUERY,
    query,
    variables
  });
