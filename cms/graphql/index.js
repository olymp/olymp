function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import gql from 'graphql-tag';
import shortId from 'shortid';
import omit from './omit-type';

export var APOLLO_MUTATE = 'APOLLO_MUTATE';
export var APOLLO_QUERY = 'APOLLO_QUERY';

export var ACTION_SUFFIX_PENDING = '_PENDING';
export var ACTION_SUFFIX_RESOLVED = '_RESOLVED';
export var ACTION_SUFFIX_REJECTED = '_REJECTED';

export var pending = function pending(action) {
  return '' + action + ACTION_SUFFIX_PENDING;
};
export var rejected = function rejected(action) {
  return '' + action + ACTION_SUFFIX_REJECTED;
};
export var resolved = function resolved(action) {
  return '' + action + ACTION_SUFFIX_RESOLVED;
};

var apolloMiddleware = function apolloMiddleware(client) {
  return function (_ref) {
    var dispatch = _ref.dispatch;
    return function (nextDispatch) {
      return function (action) {
        if (action.type && (action.mutation || action.query)) {
          var requestId = shortId.generate();
          dispatch({
            type: pending(action.type),
            payload: action.payload,
            requestId: requestId
          });
          var invoker = action.mutation ? function () {
            return client.mutate({
              mutation: typeof action.mutation === 'string' ? gql(action.mutation) : action.mutation,
              variables: omit(action.payload || action.variables),
              refetchQueries: action.refetchQueries,
              optimisticResponse: action.optimisticResponse,
              update: action.update
            });
          } : function () {
            return client.query({
              query: typeof action.query === 'string' ? gql(action.query) : action.query,
              variables: omit(action.payload || action.variables)
            });
          };
          return invoker().then(function (_ref2) {
            var data = _ref2.data,
                errors = _ref2.errors,
                xy = _objectWithoutProperties(_ref2, ['data', 'errors']);

            if (errors) {
              dispatch({
                type: rejected(action.type),
                requestId: requestId,
                payload: errors
              });
            } else {
              dispatch({
                type: resolved(action.type),
                requestId: requestId,
                payload: data[Object.keys(data)[0]]
              });
            }
            return data[Object.keys(data)[0]];
          }).catch(function (err) {
            dispatch({
              type: rejected(action.type),
              requestId: requestId,
              payload: err
            });
            throw err;
          });
        }
        nextDispatch(action);
      };
    };
  };
};

export { apolloMiddleware };
export var createMutation = function createMutation(dispatch) {
  return function (_ref3) {
    var mutation = _ref3.mutation,
        variables = _ref3.variables,
        refetchQueries = _ref3.refetchQueries,
        update = _ref3.update;
    return dispatch({
      type: APOLLO_MUTATE,
      mutation: mutation,
      variables: variables,
      refetchQueries: refetchQueries,
      update: update
    });
  };
};
export var createQuery = function createQuery(dispatch) {
  return function (_ref4) {
    var query = _ref4.query,
        variables = _ref4.variables;
    return dispatch({
      type: APOLLO_QUERY,
      query: query,
      variables: variables
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvaW5kZXguZXM2Il0sIm5hbWVzIjpbImdxbCIsInNob3J0SWQiLCJvbWl0IiwiQVBPTExPX01VVEFURSIsIkFQT0xMT19RVUVSWSIsIkFDVElPTl9TVUZGSVhfUEVORElORyIsIkFDVElPTl9TVUZGSVhfUkVTT0xWRUQiLCJBQ1RJT05fU1VGRklYX1JFSkVDVEVEIiwicGVuZGluZyIsImFjdGlvbiIsInJlamVjdGVkIiwicmVzb2x2ZWQiLCJhcG9sbG9NaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJ0eXBlIiwibXV0YXRpb24iLCJxdWVyeSIsInJlcXVlc3RJZCIsImdlbmVyYXRlIiwicGF5bG9hZCIsImludm9rZXIiLCJjbGllbnQiLCJtdXRhdGUiLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsIm9wdGltaXN0aWNSZXNwb25zZSIsInVwZGF0ZSIsInRoZW4iLCJkYXRhIiwiZXJyb3JzIiwieHkiLCJPYmplY3QiLCJrZXlzIiwiY2F0Y2giLCJlcnIiLCJuZXh0RGlzcGF0Y2giLCJjcmVhdGVNdXRhdGlvbiIsImNyZWF0ZVF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEdBQVAsTUFBZ0IsYUFBaEI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLFNBQXBCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixhQUFqQjs7QUFFQSxPQUFPLElBQU1DLGdCQUFnQixlQUF0QjtBQUNQLE9BQU8sSUFBTUMsZUFBZSxjQUFyQjs7QUFFUCxPQUFPLElBQU1DLHdCQUF3QixVQUE5QjtBQUNQLE9BQU8sSUFBTUMseUJBQXlCLFdBQS9CO0FBQ1AsT0FBTyxJQUFNQyx5QkFBeUIsV0FBL0I7O0FBRVAsT0FBTyxJQUFNQyxVQUFVLFNBQVZBLE9BQVU7QUFBQSxjQUFhQyxNQUFiLEdBQXNCSixxQkFBdEI7QUFBQSxDQUFoQjtBQUNQLE9BQU8sSUFBTUssV0FBVyxTQUFYQSxRQUFXO0FBQUEsY0FBYUQsTUFBYixHQUFzQkYsc0JBQXRCO0FBQUEsQ0FB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WjtBQUFBLENBQXZCO0FBYVAsT0FBTyxJQUFNVyxjQUFjLFNBQWRBLFdBQWM7QUFBQSxTQUFZO0FBQUEsUUFBR3JCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFFBQVVPLFNBQVYsU0FBVUEsU0FBVjtBQUFBLFdBQ3JDVixTQUFTO0FBQ1BDLFlBQU1WLFlBREM7QUFFUFksa0JBRk87QUFHUE87QUFITyxLQUFULENBRHFDO0FBQUEsR0FBWjtBQUFBLENBQXBCIiwiZmlsZSI6InBhY2thZ2VzL2dyYXBocWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xuaW1wb3J0IG9taXQgZnJvbSAnLi9vbWl0LXR5cGUnO1xuXG5leHBvcnQgY29uc3QgQVBPTExPX01VVEFURSA9ICdBUE9MTE9fTVVUQVRFJztcbmV4cG9ydCBjb25zdCBBUE9MTE9fUVVFUlkgPSAnQVBPTExPX1FVRVJZJztcblxuZXhwb3J0IGNvbnN0IEFDVElPTl9TVUZGSVhfUEVORElORyA9ICdfUEVORElORyc7XG5leHBvcnQgY29uc3QgQUNUSU9OX1NVRkZJWF9SRVNPTFZFRCA9ICdfUkVTT0xWRUQnO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9TVUZGSVhfUkVKRUNURUQgPSAnX1JFSkVDVEVEJztcblxuZXhwb3J0IGNvbnN0IHBlbmRpbmcgPSBhY3Rpb24gPT4gYCR7YWN0aW9ufSR7QUNUSU9OX1NVRkZJWF9QRU5ESU5HfWA7XG5leHBvcnQgY29uc3QgcmVqZWN0ZWQgPSBhY3Rpb24gPT4gYCR7YWN0aW9ufSR7QUNUSU9OX1NVRkZJWF9SRUpFQ1RFRH1gO1xuZXhwb3J0IGNvbnN0IHJlc29sdmVkID0gYWN0aW9uID0+IGAke2FjdGlvbn0ke0FDVElPTl9TVUZGSVhfUkVTT0xWRUR9YDtcblxuZXhwb3J0IGNvbnN0IGFwb2xsb01pZGRsZXdhcmUgPSBjbGllbnQgPT4gKHtcbiAgZGlzcGF0Y2gsXG59KSA9PiBuZXh0RGlzcGF0Y2ggPT4gYWN0aW9uID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlICYmIChhY3Rpb24ubXV0YXRpb24gfHwgYWN0aW9uLnF1ZXJ5KSkge1xuICAgIGNvbnN0IHJlcXVlc3RJZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBwZW5kaW5nKGFjdGlvbi50eXBlKSxcbiAgICAgIHBheWxvYWQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgcmVxdWVzdElkLFxuICAgIH0pO1xuICAgIGNvbnN0IGludm9rZXIgPSBhY3Rpb24ubXV0YXRpb25cbiAgICAgID8gKCkgPT5cbiAgICAgICAgICBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgIG11dGF0aW9uOlxuICAgICAgICAgICAgICB0eXBlb2YgYWN0aW9uLm11dGF0aW9uID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gZ3FsKGFjdGlvbi5tdXRhdGlvbilcbiAgICAgICAgICAgICAgICA6IGFjdGlvbi5tdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlczogb21pdChhY3Rpb24ucGF5bG9hZCB8fCBhY3Rpb24udmFyaWFibGVzKSxcbiAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBhY3Rpb24ucmVmZXRjaFF1ZXJpZXMsXG4gICAgICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IGFjdGlvbi5vcHRpbWlzdGljUmVzcG9uc2UsXG4gICAgICAgICAgICB1cGRhdGU6IGFjdGlvbi51cGRhdGUsXG4gICAgICAgICAgfSlcbiAgICAgIDogKCkgPT5cbiAgICAgICAgICBjbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6XG4gICAgICAgICAgICAgIHR5cGVvZiBhY3Rpb24ucXVlcnkgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBncWwoYWN0aW9uLnF1ZXJ5KVxuICAgICAgICAgICAgICAgIDogYWN0aW9uLnF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvbWl0KGFjdGlvbi5wYXlsb2FkIHx8IGFjdGlvbi52YXJpYWJsZXMpLFxuICAgICAgICAgIH0pO1xuICAgIHJldHVybiBpbnZva2VyKClcbiAgICAgIC50aGVuKCh7IGRhdGEsIGVycm9ycywgLi4ueHkgfSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogcmVqZWN0ZWQoYWN0aW9uLnR5cGUpLFxuICAgICAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICAgICAgcGF5bG9hZDogZXJyb3JzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IHJlc29sdmVkKGFjdGlvbi50eXBlKSxcbiAgICAgICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgICAgIHBheWxvYWQ6IGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhW09iamVjdC5rZXlzKGRhdGEpWzBdXTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IHJlamVjdGVkKGFjdGlvbi50eXBlKSxcbiAgICAgICAgICByZXF1ZXN0SWQsXG4gICAgICAgICAgcGF5bG9hZDogZXJyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gIH1cbiAgbmV4dERpc3BhdGNoKGFjdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTXV0YXRpb24gPSBkaXNwYXRjaCA9PiAoe1xuICBtdXRhdGlvbixcbiAgdmFyaWFibGVzLFxuICByZWZldGNoUXVlcmllcyxcbiAgdXBkYXRlLFxufSkgPT5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFQT0xMT19NVVRBVEUsXG4gICAgbXV0YXRpb24sXG4gICAgdmFyaWFibGVzLFxuICAgIHJlZmV0Y2hRdWVyaWVzLFxuICAgIHVwZGF0ZSxcbiAgfSk7XG5leHBvcnQgY29uc3QgY3JlYXRlUXVlcnkgPSBkaXNwYXRjaCA9PiAoeyBxdWVyeSwgdmFyaWFibGVzIH0pID0+XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBBUE9MTE9fUVVFUlksXG4gICAgcXVlcnksXG4gICAgdmFyaWFibGVzLFxuICB9KTtcbiJdfQ==
