'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRedux = exports.createPrefetchPage = exports.PREFETCH = undefined;

var _olympRedux = require('olymp-redux');

var defaultState = {
  prefetch: null
};
var PREFETCH = exports.PREFETCH = 'CMS_PREFETCH';

var name = 'cms';
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case PREFETCH:
      return (0, _olympRedux.immutable)(state).set('prefetch', action.payload).value();
    default:
      return state;
  }
};

var createPrefetchPage = exports.createPrefetchPage = function createPrefetchPage(dispatch) {
  return function (payload) {
    return dispatch({ type: PREFETCH, payload: payload });
  };
};

var withRedux = exports.withRedux = (0, _olympRedux.withDynamicRedux)({
  name: name,
  reducer: reducer
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbXMvcmVkdXguZXM2Il0sIm5hbWVzIjpbImRlZmF1bHRTdGF0ZSIsInByZWZldGNoIiwiUFJFRkVUQ0giLCJuYW1lIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNldCIsInBheWxvYWQiLCJ2YWx1ZSIsImNyZWF0ZVByZWZldGNoUGFnZSIsImRpc3BhdGNoIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsZUFBZTtBQUNuQkMsWUFBVTtBQURTLENBQXJCO0FBR08sSUFBTUMsOEJBQVcsY0FBakI7O0FBRVAsSUFBTUMsT0FBTyxLQUFiO0FBQ0EsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QkwsWUFBeUI7QUFBQSxNQUFYTSxNQUFXOztBQUNoRCxNQUFJLENBQUNBLE1BQUQsSUFBVyxDQUFDQSxPQUFPQyxJQUF2QixFQUE2QjtBQUMzQixXQUFPRixLQUFQO0FBQ0Q7QUFDRCxVQUFRQyxPQUFPQyxJQUFmO0FBQ0UsU0FBS0wsUUFBTDtBQUNFLGFBQU8sMkJBQVVHLEtBQVYsRUFDSkcsR0FESSxDQUNBLFVBREEsRUFDWUYsT0FBT0csT0FEbkIsRUFFSkMsS0FGSSxFQUFQO0FBR0Y7QUFDRSxhQUFPTCxLQUFQO0FBTko7QUFRRCxDQVpEOztBQWNPLElBQU1NLGtEQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsU0FBWTtBQUFBLFdBQVdDLFNBQVMsRUFBRUwsTUFBTUwsUUFBUixFQUFrQk8sZ0JBQWxCLEVBQVQsQ0FBWDtBQUFBLEdBQVo7QUFBQSxDQUEzQjs7QUFFQSxJQUFNSSxnQ0FBWSxrQ0FBaUI7QUFDeENWLFlBRHdDO0FBRXhDQztBQUZ3QyxDQUFqQixDQUFsQiIsImZpbGUiOiJjbXMvY21zL3JlZHV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW1tdXRhYmxlLCB3aXRoRHluYW1pY1JlZHV4IH0gZnJvbSAnb2x5bXAtcmVkdXgnO1xuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIHByZWZldGNoOiBudWxsLFxufTtcbmV4cG9ydCBjb25zdCBQUkVGRVRDSCA9ICdDTVNfUFJFRkVUQ0gnO1xuXG5jb25zdCBuYW1lID0gJ2Ntcyc7XG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgaWYgKCFhY3Rpb24gfHwgIWFjdGlvbi50eXBlKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFBSRUZFVENIOlxuICAgICAgcmV0dXJuIGltbXV0YWJsZShzdGF0ZSlcbiAgICAgICAgLnNldCgncHJlZmV0Y2gnLCBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgLnZhbHVlKCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByZWZldGNoUGFnZSA9IGRpc3BhdGNoID0+IHBheWxvYWQgPT4gZGlzcGF0Y2goeyB0eXBlOiBQUkVGRVRDSCwgcGF5bG9hZCB9KTtcblxuZXhwb3J0IGNvbnN0IHdpdGhSZWR1eCA9IHdpdGhEeW5hbWljUmVkdXgoe1xuICBuYW1lLFxuICByZWR1Y2VyLFxufSk7XG4iXX0=
