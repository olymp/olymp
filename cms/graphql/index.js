'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createQuery = exports.createMutation = exports.apolloMiddleware = exports.resolved = exports.rejected = exports.pending = exports.ACTION_SUFFIX_REJECTED = exports.ACTION_SUFFIX_RESOLVED = exports.ACTION_SUFFIX_PENDING = exports.APOLLO_QUERY = exports.APOLLO_MUTATE = undefined;

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _omitType = require('./omit-type');

var _omitType2 = _interopRequireDefault(_omitType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var APOLLO_MUTATE = exports.APOLLO_MUTATE = 'APOLLO_MUTATE';
var APOLLO_QUERY = exports.APOLLO_QUERY = 'APOLLO_QUERY';

var ACTION_SUFFIX_PENDING = exports.ACTION_SUFFIX_PENDING = '_PENDING';
var ACTION_SUFFIX_RESOLVED = exports.ACTION_SUFFIX_RESOLVED = '_RESOLVED';
var ACTION_SUFFIX_REJECTED = exports.ACTION_SUFFIX_REJECTED = '_REJECTED';

var pending = exports.pending = function pending(action) {
  return '' + action + ACTION_SUFFIX_PENDING;
};
var rejected = exports.rejected = function rejected(action) {
  return '' + action + ACTION_SUFFIX_REJECTED;
};
var resolved = exports.resolved = function resolved(action) {
  return '' + action + ACTION_SUFFIX_RESOLVED;
};

var apolloMiddleware = function apolloMiddleware(client) {
  return function (_ref) {
    var dispatch = _ref.dispatch;
    return function (nextDispatch) {
      return function (action) {
        if (action.type && (action.mutation || action.query)) {
          var requestId = _shortid2.default.generate();
          dispatch({
            type: pending(action.type),
            payload: action.payload,
            requestId: requestId
          });
          var invoker = action.mutation ? function () {
            return client.mutate({
              mutation: typeof action.mutation === 'string' ? (0, _graphqlTag2.default)(action.mutation) : action.mutation,
              variables: (0, _omitType2.default)(action.payload || action.variables),
              refetchQueries: action.refetchQueries,
              optimisticResponse: action.optimisticResponse,
              update: action.update
            });
          } : function () {
            return client.query({
              query: typeof action.query === 'string' ? (0, _graphqlTag2.default)(action.query) : action.query,
              variables: (0, _omitType2.default)(action.payload || action.variables)
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

exports.apolloMiddleware = apolloMiddleware;
var createMutation = exports.createMutation = function createMutation(dispatch) {
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
var createQuery = exports.createQuery = function createQuery(dispatch) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL2luZGV4LmVzNiJdLCJuYW1lcyI6WyJBUE9MTE9fTVVUQVRFIiwiQVBPTExPX1FVRVJZIiwiQUNUSU9OX1NVRkZJWF9QRU5ESU5HIiwiQUNUSU9OX1NVRkZJWF9SRVNPTFZFRCIsIkFDVElPTl9TVUZGSVhfUkVKRUNURUQiLCJwZW5kaW5nIiwiYWN0aW9uIiwicmVqZWN0ZWQiLCJyZXNvbHZlZCIsImFwb2xsb01pZGRsZXdhcmUiLCJkaXNwYXRjaCIsInR5cGUiLCJtdXRhdGlvbiIsInF1ZXJ5IiwicmVxdWVzdElkIiwiZ2VuZXJhdGUiLCJwYXlsb2FkIiwiaW52b2tlciIsImNsaWVudCIsIm11dGF0ZSIsInZhcmlhYmxlcyIsInJlZmV0Y2hRdWVyaWVzIiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwidXBkYXRlIiwidGhlbiIsImRhdGEiLCJlcnJvcnMiLCJ4eSIsIk9iamVjdCIsImtleXMiLCJjYXRjaCIsImVyciIsIm5leHREaXNwYXRjaCIsImNyZWF0ZU11dGF0aW9uIiwiY3JlYXRlUXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRU8sSUFBTUEsd0NBQWdCLGVBQXRCO0FBQ0EsSUFBTUMsc0NBQWUsY0FBckI7O0FBRUEsSUFBTUMsd0RBQXdCLFVBQTlCO0FBQ0EsSUFBTUMsMERBQXlCLFdBQS9CO0FBQ0EsSUFBTUMsMERBQXlCLFdBQS9COztBQUVBLElBQU1DLDRCQUFVLFNBQVZBLE9BQVU7QUFBQSxjQUFhQyxNQUFiLEdBQXNCSixxQkFBdEI7QUFBQSxDQUFoQjtBQUNBLElBQU1LLDhCQUFXLFNBQVhBLFFBQVc7QUFBQSxjQUFhRCxNQUFiLEdBQXNCRixzQkFBdEI7QUFBQSxDQUFqQjtBQUNBLElBQU1JLDhCQUFXLFNBQVhBLFFBQVc7QUFBQSxjQUFhRixNQUFiLEdBQXNCSCxzQkFBdEI7QUFBQSxDQUFqQjs7QUFFQSxJQUFNTSxtQkFBbUIsU0FBbkJBLGdCQUFtQjtBQUFBLFNB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UEMsWUFBTVYsWUFEQztBQUVQWSxrQkFGTztBQUdQTztBQUhPLEtBQVQsQ0FEcUM7QUFBQSxHQUFaO0FBQUEsQ0FBcEIiLCJmaWxlIjoiY21zL2dyYXBocWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xuaW1wb3J0IG9taXQgZnJvbSAnLi9vbWl0LXR5cGUnO1xuXG5leHBvcnQgY29uc3QgQVBPTExPX01VVEFURSA9ICdBUE9MTE9fTVVUQVRFJztcbmV4cG9ydCBjb25zdCBBUE9MTE9fUVVFUlkgPSAnQVBPTExPX1FVRVJZJztcblxuZXhwb3J0IGNvbnN0IEFDVElPTl9TVUZGSVhfUEVORElORyA9ICdfUEVORElORyc7XG5leHBvcnQgY29uc3QgQUNUSU9OX1NVRkZJWF9SRVNPTFZFRCA9ICdfUkVTT0xWRUQnO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9TVUZGSVhfUkVKRUNURUQgPSAnX1JFSkVDVEVEJztcblxuZXhwb3J0IGNvbnN0IHBlbmRpbmcgPSBhY3Rpb24gPT4gYCR7YWN0aW9ufSR7QUNUSU9OX1NVRkZJWF9QRU5ESU5HfWA7XG5leHBvcnQgY29uc3QgcmVqZWN0ZWQgPSBhY3Rpb24gPT4gYCR7YWN0aW9ufSR7QUNUSU9OX1NVRkZJWF9SRUpFQ1RFRH1gO1xuZXhwb3J0IGNvbnN0IHJlc29sdmVkID0gYWN0aW9uID0+IGAke2FjdGlvbn0ke0FDVElPTl9TVUZGSVhfUkVTT0xWRUR9YDtcblxuZXhwb3J0IGNvbnN0IGFwb2xsb01pZGRsZXdhcmUgPSBjbGllbnQgPT4gKHtcbiAgZGlzcGF0Y2gsXG59KSA9PiBuZXh0RGlzcGF0Y2ggPT4gYWN0aW9uID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlICYmIChhY3Rpb24ubXV0YXRpb24gfHwgYWN0aW9uLnF1ZXJ5KSkge1xuICAgIGNvbnN0IHJlcXVlc3RJZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBwZW5kaW5nKGFjdGlvbi50eXBlKSxcbiAgICAgIHBheWxvYWQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgcmVxdWVzdElkLFxuICAgIH0pO1xuICAgIGNvbnN0IGludm9rZXIgPSBhY3Rpb24ubXV0YXRpb25cbiAgICAgID8gKCkgPT5cbiAgICAgICAgICBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgIG11dGF0aW9uOlxuICAgICAgICAgICAgICB0eXBlb2YgYWN0aW9uLm11dGF0aW9uID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gZ3FsKGFjdGlvbi5tdXRhdGlvbilcbiAgICAgICAgICAgICAgICA6IGFjdGlvbi5tdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlczogb21pdChhY3Rpb24ucGF5bG9hZCB8fCBhY3Rpb24udmFyaWFibGVzKSxcbiAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBhY3Rpb24ucmVmZXRjaFF1ZXJpZXMsXG4gICAgICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IGFjdGlvbi5vcHRpbWlzdGljUmVzcG9uc2UsXG4gICAgICAgICAgICB1cGRhdGU6IGFjdGlvbi51cGRhdGUsXG4gICAgICAgICAgfSlcbiAgICAgIDogKCkgPT5cbiAgICAgICAgICBjbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6XG4gICAgICAgICAgICAgIHR5cGVvZiBhY3Rpb24ucXVlcnkgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBncWwoYWN0aW9uLnF1ZXJ5KVxuICAgICAgICAgICAgICAgIDogYWN0aW9uLnF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvbWl0KGFjdGlvbi5wYXlsb2FkIHx8IGFjdGlvbi52YXJpYWJsZXMpLFxuICAgICAgICAgIH0pO1xuICAgIHJldHVybiBpbnZva2VyKClcbiAgICAgIC50aGVuKCh7IGRhdGEsIGVycm9ycywgLi4ueHkgfSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogcmVqZWN0ZWQoYWN0aW9uLnR5cGUpLFxuICAgICAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICAgICAgcGF5bG9hZDogZXJyb3JzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IHJlc29sdmVkKGFjdGlvbi50eXBlKSxcbiAgICAgICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgICAgIHBheWxvYWQ6IGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhW09iamVjdC5rZXlzKGRhdGEpWzBdXTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IHJlamVjdGVkKGFjdGlvbi50eXBlKSxcbiAgICAgICAgICByZXF1ZXN0SWQsXG4gICAgICAgICAgcGF5bG9hZDogZXJyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gIH1cbiAgbmV4dERpc3BhdGNoKGFjdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTXV0YXRpb24gPSBkaXNwYXRjaCA9PiAoe1xuICBtdXRhdGlvbixcbiAgdmFyaWFibGVzLFxuICByZWZldGNoUXVlcmllcyxcbiAgdXBkYXRlLFxufSkgPT5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFQT0xMT19NVVRBVEUsXG4gICAgbXV0YXRpb24sXG4gICAgdmFyaWFibGVzLFxuICAgIHJlZmV0Y2hRdWVyaWVzLFxuICAgIHVwZGF0ZSxcbiAgfSk7XG5leHBvcnQgY29uc3QgY3JlYXRlUXVlcnkgPSBkaXNwYXRjaCA9PiAoeyBxdWVyeSwgdmFyaWFibGVzIH0pID0+XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBBUE9MTE9fUVVFUlksXG4gICAgcXVlcnksXG4gICAgdmFyaWFibGVzLFxuICB9KTtcbiJdfQ==
