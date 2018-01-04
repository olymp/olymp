'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withPrefetch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _olympRouter = require('olymp-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var createPrefetchPage = function createPrefetchPage(dispatch) {
  return function (payload) {
    return dispatch({ type: 'CMS_PREFETCH', payload: payload });
  };
};

var withPrefetch = exports.withPrefetch = (0, _reactRedux.connect)(null, function (dispatch) {
  return {
    prefetch: createPrefetchPage(dispatch)
  };
});

var PrefetchLink = _olympRouter.Link.withLocation(withPrefetch(function (_ref) {
  var prefetch = _ref.prefetch,
      props = _objectWithoutProperties(_ref, ['prefetch']);

  return _react2.default.createElement(_olympRouter.Link, _extends({}, props, { onPreload: prefetch }));
}));

PrefetchLink.displayName = 'Prefetcher';
exports.default = PrefetchLink;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9wcmVmZXRjaC1saW5rLmVzNiJdLCJuYW1lcyI6WyJjcmVhdGVQcmVmZXRjaFBhZ2UiLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIiwid2l0aFByZWZldGNoIiwicHJlZmV0Y2giLCJQcmVmZXRjaExpbmsiLCJ3aXRoTG9jYXRpb24iLCJwcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsU0FBckJBLGtCQUFxQjtBQUFBLFNBQVk7QUFBQSxXQUFXQyxTQUFTLEVBQUVDLE1BQU0sY0FBUixFQUF3QkMsZ0JBQXhCLEVBQVQsQ0FBWDtBQUFBLEdBQVo7QUFBQSxDQUEzQjs7QUFFTyxJQUFNQyxzQ0FBZSx5QkFBUSxJQUFSLEVBQWM7QUFBQSxTQUFhO0FBQ3JEQyxjQUFVTCxtQkFBbUJDLFFBQW5CO0FBRDJDLEdBQWI7QUFBQSxDQUFkLENBQXJCOztBQUlQLElBQU1LLGVBQWUsa0JBQUtDLFlBQUwsQ0FDbkJILGFBQWE7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFnQkcsS0FBaEI7O0FBQUEsU0FDWCw4REFBVUEsS0FBVixJQUFpQixXQUFXSCxRQUE1QixJQURXO0FBQUEsQ0FBYixDQURtQixDQUFyQjs7QUFNQUMsYUFBYUcsV0FBYixHQUEyQixZQUEzQjtrQkFDZUgsWSIsImZpbGUiOiJjbXMvcGFnZXMvcHJlZmV0Y2gtbGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5cbmNvbnN0IGNyZWF0ZVByZWZldGNoUGFnZSA9IGRpc3BhdGNoID0+IHBheWxvYWQgPT4gZGlzcGF0Y2goeyB0eXBlOiAnQ01TX1BSRUZFVENIJywgcGF5bG9hZCB9KTtcblxuZXhwb3J0IGNvbnN0IHdpdGhQcmVmZXRjaCA9IGNvbm5lY3QobnVsbCwgZGlzcGF0Y2ggPT4gKHtcbiAgcHJlZmV0Y2g6IGNyZWF0ZVByZWZldGNoUGFnZShkaXNwYXRjaCksXG59KSk7XG5cbmNvbnN0IFByZWZldGNoTGluayA9IExpbmsud2l0aExvY2F0aW9uKFxuICB3aXRoUHJlZmV0Y2goKHsgcHJlZmV0Y2gsIC4uLnByb3BzIH0pID0+IChcbiAgICA8TGluayB7Li4ucHJvcHN9IG9uUHJlbG9hZD17cHJlZmV0Y2h9IC8+XG4gICkpLFxuKTtcblxuUHJlZmV0Y2hMaW5rLmRpc3BsYXlOYW1lID0gJ1ByZWZldGNoZXInO1xuZXhwb3J0IGRlZmF1bHQgUHJlZmV0Y2hMaW5rO1xuIl19
