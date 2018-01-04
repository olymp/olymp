'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _portal = require('olymp-fela/portal');

var _portal2 = _interopRequireDefault(_portal);

var _reactFela = require('react-fela');

var _reactRedux = require('react-redux');

var _reader = require('olymp-pages/reader');

var _reader2 = _interopRequireDefault(_reader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Invisible = (0, _reactFela.createComponent)(function () {
  return {
    position: 'absolute',
    bottom: -10000,
    left: -10000,
    width: 0,
    height: 0,
    overflow: 'hidden'
  };
}, 'div');

var enhance = (0, _recompose.compose)((0, _reactRedux.connect)(function (_ref) {
  var cms = _ref.cms;
  return {
    pathname: cms.prefetch && cms.prefetch.pathname
  };
}), (0, _recompose.withContext)({
  prefetch: _propTypes2.default.bool
}, function () {
  return {
    prefetch: true
  };
}), (0, _recompose.withPropsOnChange)(['flatNavigation', 'pathname'], function (_ref2) {
  var flatNavigation = _ref2.flatNavigation,
      pathname = _ref2.pathname;

  var item = void 0;
  if (pathname) {
    for (var x = 0; x < flatNavigation.length; x++) {
      var page = flatNavigation[x];
      if (decodeURI(unescape(page.pathname)) === pathname || '/' + page.id === pathname) {
        item = page;
        break;
      }
    }
  }
  return {
    item: item
  };
}));

var PagePrefetchRoute = enhance(function (props) {
  var item = props.item;

  if (!item) {
    return null;
  }
  return _react2.default.createElement(
    _portal2.default,
    null,
    _react2.default.createElement(
      Invisible,
      null,
      _react2.default.createElement(_reader2.default.WithData, {
        key: item.pageId || item.aliasId || item.id,
        id: item.pageId || item.aliasId || item.id,
        bindingId: item.bindingId,
        binding: item.binding,
        prefetch: true
      })
    )
  );
});
PagePrefetchRoute.displayName = 'PagePrefetchRoute';
exports.default = PagePrefetchRoute;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbXMvcHJlZmV0Y2gtcm91dGVzLmVzNiJdLCJuYW1lcyI6WyJJbnZpc2libGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwiZW5oYW5jZSIsImNtcyIsInBhdGhuYW1lIiwicHJlZmV0Y2giLCJib29sIiwiZmxhdE5hdmlnYXRpb24iLCJpdGVtIiwieCIsImxlbmd0aCIsInBhZ2UiLCJkZWNvZGVVUkkiLCJ1bmVzY2FwZSIsImlkIiwiUGFnZVByZWZldGNoUm91dGUiLCJwcm9wcyIsInBhZ2VJZCIsImFsaWFzSWQiLCJiaW5kaW5nSWQiLCJiaW5kaW5nIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZLGdDQUNoQjtBQUFBLFNBQU87QUFDTEMsY0FBVSxVQURMO0FBRUxDLFlBQVEsQ0FBQyxLQUZKO0FBR0xDLFVBQU0sQ0FBQyxLQUhGO0FBSUxDLFdBQU8sQ0FKRjtBQUtMQyxZQUFRLENBTEg7QUFNTEMsY0FBVTtBQU5MLEdBQVA7QUFBQSxDQURnQixFQVNoQixLQVRnQixDQUFsQjs7QUFZQSxJQUFNQyxVQUFVLHdCQUNkLHlCQUFRO0FBQUEsTUFBR0MsR0FBSCxRQUFHQSxHQUFIO0FBQUEsU0FBYztBQUNwQkMsY0FBVUQsSUFBSUUsUUFBSixJQUFnQkYsSUFBSUUsUUFBSixDQUFhRDtBQURuQixHQUFkO0FBQUEsQ0FBUixDQURjLEVBSWQsNEJBQ0U7QUFDRUMsWUFBVSxvQkFBVUM7QUFEdEIsQ0FERixFQUlFO0FBQUEsU0FBTztBQUNMRCxjQUFVO0FBREwsR0FBUDtBQUFBLENBSkYsQ0FKYyxFQVlkLGtDQUNFLENBQUMsZ0JBQUQsRUFBbUIsVUFBbkIsQ0FERixFQUVFLGlCQUFrQztBQUFBLE1BQS9CRSxjQUErQixTQUEvQkEsY0FBK0I7QUFBQSxNQUFmSCxRQUFlLFNBQWZBLFFBQWU7O0FBQ2hDLE1BQUlJLGFBQUo7QUFDQSxNQUFJSixRQUFKLEVBQWM7QUFDWixTQUFLLElBQUlLLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsZUFBZUcsTUFBbkMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLFVBQU1FLE9BQU9KLGVBQWVFLENBQWYsQ0FBYjtBQUNBLFVBQ0VHLFVBQVVDLFNBQVNGLEtBQUtQLFFBQWQsQ0FBVixNQUF1Q0EsUUFBdkMsSUFDQSxNQUFJTyxLQUFLRyxFQUFULEtBQWtCVixRQUZwQixFQUdFO0FBQ0FJLGVBQU9HLElBQVA7QUFDQTtBQUNEO0FBQ0Y7QUFDRjtBQUNELFNBQU87QUFDTEg7QUFESyxHQUFQO0FBR0QsQ0FuQkgsQ0FaYyxDQUFoQjs7QUFtQ0EsSUFBTU8sb0JBQW9CYixRQUFRLGlCQUFTO0FBQUEsTUFDakNNLElBRGlDLEdBQ3hCUSxLQUR3QixDQUNqQ1IsSUFEaUM7O0FBRXpDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1QsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsZUFBRDtBQUFBO0FBQ0UscURBQU0sUUFBTjtBQUNFLGFBQUtBLEtBQUtTLE1BQUwsSUFBZVQsS0FBS1UsT0FBcEIsSUFBK0JWLEtBQUtNLEVBRDNDO0FBRUUsWUFBSU4sS0FBS1MsTUFBTCxJQUFlVCxLQUFLVSxPQUFwQixJQUErQlYsS0FBS00sRUFGMUM7QUFHRSxtQkFBV04sS0FBS1csU0FIbEI7QUFJRSxpQkFBU1gsS0FBS1ksT0FKaEI7QUFLRTtBQUxGO0FBREY7QUFERixHQURGO0FBYUQsQ0FsQnlCLENBQTFCO0FBbUJBTCxrQkFBa0JNLFdBQWxCLEdBQWdDLG1CQUFoQztrQkFDZU4saUIiLCJmaWxlIjoiY21zL2Ntcy9wcmVmZXRjaC1yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoQ29udGV4dCB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJ29seW1wLWZlbGEvcG9ydGFsJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQYWdlIGZyb20gJ29seW1wLXBhZ2VzL3JlYWRlcic7XG5cbmNvbnN0IEludmlzaWJsZSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKCkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IC0xMDAwMCxcbiAgICBsZWZ0OiAtMTAwMDAsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgfSksXG4gICdkaXYnLFxuKTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIGNvbm5lY3QoKHsgY21zIH0pID0+ICh7XG4gICAgcGF0aG5hbWU6IGNtcy5wcmVmZXRjaCAmJiBjbXMucHJlZmV0Y2gucGF0aG5hbWUsXG4gIH0pKSxcbiAgd2l0aENvbnRleHQoXG4gICAge1xuICAgICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIH0sXG4gICAgKCkgPT4gKHtcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0pLFxuICApLFxuICB3aXRoUHJvcHNPbkNoYW5nZShcbiAgICBbJ2ZsYXROYXZpZ2F0aW9uJywgJ3BhdGhuYW1lJ10sXG4gICAgKHsgZmxhdE5hdmlnYXRpb24sIHBhdGhuYW1lIH0pID0+IHtcbiAgICAgIGxldCBpdGVtO1xuICAgICAgaWYgKHBhdGhuYW1lKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZmxhdE5hdmlnYXRpb24ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICBjb25zdCBwYWdlID0gZmxhdE5hdmlnYXRpb25beF07XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZGVjb2RlVVJJKHVuZXNjYXBlKHBhZ2UucGF0aG5hbWUpKSA9PT0gcGF0aG5hbWUgfHxcbiAgICAgICAgICAgIGAvJHtwYWdlLmlkfWAgPT09IHBhdGhuYW1lXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpdGVtID0gcGFnZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbSxcbiAgICAgIH07XG4gICAgfSxcbiAgKSxcbik7XG5cbmNvbnN0IFBhZ2VQcmVmZXRjaFJvdXRlID0gZW5oYW5jZShwcm9wcyA9PiB7XG4gIGNvbnN0IHsgaXRlbSB9ID0gcHJvcHM7XG4gIGlmICghaXRlbSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgPFBvcnRhbD5cbiAgICAgIDxJbnZpc2libGU+XG4gICAgICAgIDxQYWdlLldpdGhEYXRhXG4gICAgICAgICAga2V5PXtpdGVtLnBhZ2VJZCB8fCBpdGVtLmFsaWFzSWQgfHwgaXRlbS5pZH1cbiAgICAgICAgICBpZD17aXRlbS5wYWdlSWQgfHwgaXRlbS5hbGlhc0lkIHx8IGl0ZW0uaWR9XG4gICAgICAgICAgYmluZGluZ0lkPXtpdGVtLmJpbmRpbmdJZH1cbiAgICAgICAgICBiaW5kaW5nPXtpdGVtLmJpbmRpbmd9XG4gICAgICAgICAgcHJlZmV0Y2hcbiAgICAgICAgLz5cbiAgICAgIDwvSW52aXNpYmxlPlxuICAgIDwvUG9ydGFsPlxuICApO1xufSk7XG5QYWdlUHJlZmV0Y2hSb3V0ZS5kaXNwbGF5TmFtZSA9ICdQYWdlUHJlZmV0Y2hSb3V0ZSc7XG5leHBvcnQgZGVmYXVsdCBQYWdlUHJlZmV0Y2hSb3V0ZTtcbiJdfQ==
