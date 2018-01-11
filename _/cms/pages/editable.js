'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helmet = require('olymp-utils/helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _olympFela = require('olymp-fela');

var _recompose = require('recompose');

var _reactRedux = require('react-redux');

var _writer = require('./writer');

var _writer2 = _interopRequireDefault(_writer);

var _ = require('./404');

var _2 = _interopRequireDefault(_);

var _navigation = require('./navigation');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _recompose.compose)((0, _reactRedux.connect)(function (_ref) {
  var location = _ref.location;
  return {
    pathname: location.pathname
  };
}), (0, _recompose.withState)('formOpen', 'setFormOpen', false), (0, _recompose.withPropsOnChange)(['flatNavigation', 'pathname'], function (_ref2) {
  var flatNavigation = _ref2.flatNavigation,
      pathname = _ref2.pathname;

  var item = void 0;
  for (var x = 0; x < flatNavigation.length; x++) {
    var page = flatNavigation[x];
    if (decodeURI(page.pathname) === pathname || '/' + page.id === pathname) {
      item = page;
      break;
    }
  }
  return {
    item: item
  };
}));

var _ref4 = _react2.default.createElement(_2.default, null);

exports.default = enhance(function (props) {
  var Wrapped = props.Wrapped,
      pathname = props.pathname,
      loading = props.loading,
      item = props.item;

  var _ref3 = item || {},
      id = _ref3.id,
      binding = _ref3.binding,
      pageId = _ref3.pageId,
      bindingId = _ref3.bindingId;

  var notFound = !item && pathname !== '__new' && pathname !== '/__new';

  return _react2.default.createElement(
    _navigation2.default,
    _extends({}, props, { left: 72 }),
    _react2.default.createElement(
      Wrapped,
      _extends({}, props, { match: item }),
      notFound ? _react2.default.createElement(
        _olympFela.ContentLoader,
        { height: 600, isLoading: loading },
        _react2.default.createElement(_2.default, _extends({}, props, {
          render: function render() {
            return _react2.default.createElement(
              Wrapped,
              props,
              (0, _helmet2.default)({
                name: '404',
                description: 'Seite wurde nicht gefunden',
                pathname: pathname
              }),
              _ref4
            );
          }
        }))
      ) : _react2.default.createElement(
        _olympFela.ContentLoader,
        { height: 600, isLoading: loading },
        _react2.default.createElement(
          _writer2.default,
          _extends({}, props, {
            match: item,
            key: pageId || id,
            id: pageId || id,
            bindingId: bindingId,
            binding: binding
          }),
          (0, _helmet2.default)(item, pathname)
        )
      )
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0YWJsZS5lczYiXSwibmFtZXMiOlsiZW5oYW5jZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJmbGF0TmF2aWdhdGlvbiIsIml0ZW0iLCJ4IiwibGVuZ3RoIiwicGFnZSIsImRlY29kZVVSSSIsImlkIiwiV3JhcHBlZCIsInByb3BzIiwibG9hZGluZyIsImJpbmRpbmciLCJwYWdlSWQiLCJiaW5kaW5nSWQiLCJub3RGb3VuZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLHdCQUNkLHlCQUFRO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFDekJDLGNBQVVELFNBQVNDO0FBRE0sR0FBbkI7QUFBQSxDQUFSLENBRGMsRUFJZCwwQkFBVSxVQUFWLEVBQXNCLGFBQXRCLEVBQXFDLEtBQXJDLENBSmMsRUFLZCxrQ0FDRSxDQUFDLGdCQUFELEVBQW1CLFVBQW5CLENBREYsRUFFRSxpQkFBa0M7QUFBQSxNQUEvQkMsY0FBK0IsU0FBL0JBLGNBQStCO0FBQUEsTUFBZkQsUUFBZSxTQUFmQSxRQUFlOztBQUNoQyxNQUFJRSxhQUFKO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLGVBQWVHLE1BQW5DLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxRQUFNRSxPQUFPSixlQUFlRSxDQUFmLENBQWI7QUFDQSxRQUNFRyxVQUFVRCxLQUFLTCxRQUFmLE1BQTZCQSxRQUE3QixJQUNBLE1BQUlLLEtBQUtFLEVBQVQsS0FBa0JQLFFBRnBCLEVBR0U7QUFDQUUsYUFBT0csSUFBUDtBQUNBO0FBQ0Q7QUFDRjtBQUNELFNBQU87QUFDTEg7QUFESyxHQUFQO0FBR0QsQ0FqQkgsQ0FMYyxDQUFoQjs7WUE4Q2tCLCtDOztrQkFwQkhKLFFBQVEsaUJBQVM7QUFBQSxNQUN0QlUsT0FEc0IsR0FDZUMsS0FEZixDQUN0QkQsT0FEc0I7QUFBQSxNQUNiUixRQURhLEdBQ2VTLEtBRGYsQ0FDYlQsUUFEYTtBQUFBLE1BQ0hVLE9BREcsR0FDZUQsS0FEZixDQUNIQyxPQURHO0FBQUEsTUFDTVIsSUFETixHQUNlTyxLQURmLENBQ01QLElBRE47O0FBQUEsY0FFYUEsUUFBUSxFQUZyQjtBQUFBLE1BRXRCSyxFQUZzQixTQUV0QkEsRUFGc0I7QUFBQSxNQUVsQkksT0FGa0IsU0FFbEJBLE9BRmtCO0FBQUEsTUFFVEMsTUFGUyxTQUVUQSxNQUZTO0FBQUEsTUFFREMsU0FGQyxTQUVEQSxTQUZDOztBQUk5QixNQUFNQyxXQUFXLENBQUNaLElBQUQsSUFBU0YsYUFBYSxPQUF0QixJQUFpQ0EsYUFBYSxRQUEvRDs7QUFFQSxTQUNFO0FBQUE7QUFBQSxpQkFBZ0JTLEtBQWhCLElBQXVCLE1BQU0sRUFBN0I7QUFDRTtBQUFDLGFBQUQ7QUFBQSxtQkFBYUEsS0FBYixJQUFvQixPQUFPUCxJQUEzQjtBQUNHWSxpQkFDQztBQUFBO0FBQUEsVUFBZSxRQUFRLEdBQXZCLEVBQTRCLFdBQVdKLE9BQXZDO0FBQ0UsK0RBQ01ELEtBRE47QUFFRSxrQkFBUTtBQUFBLG1CQUNOO0FBQUMscUJBQUQ7QUFBYUEsbUJBQWI7QUFDRyxvQ0FBYTtBQUNaTSxzQkFBTSxLQURNO0FBRVpDLDZCQUFhLDRCQUZEO0FBR1poQjtBQUhZLGVBQWIsQ0FESDtBQUFBO0FBQUEsYUFETTtBQUFBO0FBRlY7QUFERixPQURELEdBaUJDO0FBQUE7QUFBQSxVQUFlLFFBQVEsR0FBdkIsRUFBNEIsV0FBV1UsT0FBdkM7QUFDRTtBQUFBO0FBQUEsdUJBQ01ELEtBRE47QUFFRSxtQkFBT1AsSUFGVDtBQUdFLGlCQUFLVSxVQUFVTCxFQUhqQjtBQUlFLGdCQUFJSyxVQUFVTCxFQUpoQjtBQUtFLHVCQUFXTSxTQUxiO0FBTUUscUJBQVNGO0FBTlg7QUFRRyxnQ0FBYVQsSUFBYixFQUFtQkYsUUFBbkI7QUFSSDtBQURGO0FBbEJKO0FBREYsR0FERjtBQW9DRCxDQTFDYyxDIiwiZmlsZSI6ImNtcy9wYWdlcy9lZGl0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVuZGVySGVsbWV0IGZyb20gJ29seW1wLXV0aWxzL2hlbG1ldCc7XG5pbXBvcnQgeyBDb250ZW50TG9hZGVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHNPbkNoYW5nZSwgd2l0aFN0YXRlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgV3JpdGVyIGZyb20gJy4vd3JpdGVyJztcbmltcG9ydCBFcnJvcjQwNCBmcm9tICcuLzQwNCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL25hdmlnYXRpb24nO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgY29ubmVjdCgoeyBsb2NhdGlvbiB9KSA9PiAoe1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgfSkpLFxuICB3aXRoU3RhdGUoJ2Zvcm1PcGVuJywgJ3NldEZvcm1PcGVuJywgZmFsc2UpLFxuICB3aXRoUHJvcHNPbkNoYW5nZShcbiAgICBbJ2ZsYXROYXZpZ2F0aW9uJywgJ3BhdGhuYW1lJ10sXG4gICAgKHsgZmxhdE5hdmlnYXRpb24sIHBhdGhuYW1lIH0pID0+IHtcbiAgICAgIGxldCBpdGVtO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBmbGF0TmF2aWdhdGlvbi5sZW5ndGg7IHgrKykge1xuICAgICAgICBjb25zdCBwYWdlID0gZmxhdE5hdmlnYXRpb25beF07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBkZWNvZGVVUkkocGFnZS5wYXRobmFtZSkgPT09IHBhdGhuYW1lIHx8XG4gICAgICAgICAgYC8ke3BhZ2UuaWR9YCA9PT0gcGF0aG5hbWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgaXRlbSA9IHBhZ2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW0sXG4gICAgICB9O1xuICAgIH0sXG4gICksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlKHByb3BzID0+IHtcbiAgY29uc3QgeyBXcmFwcGVkLCBwYXRobmFtZSwgbG9hZGluZywgaXRlbSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIGJpbmRpbmcsIHBhZ2VJZCwgYmluZGluZ0lkIH0gPSBpdGVtIHx8IHt9O1xuXG4gIGNvbnN0IG5vdEZvdW5kID0gIWl0ZW0gJiYgcGF0aG5hbWUgIT09ICdfX25ldycgJiYgcGF0aG5hbWUgIT09ICcvX19uZXcnO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdmlnYXRpb24gey4uLnByb3BzfSBsZWZ0PXs3Mn0+XG4gICAgICA8V3JhcHBlZCB7Li4ucHJvcHN9IG1hdGNoPXtpdGVtfT5cbiAgICAgICAge25vdEZvdW5kID8gKFxuICAgICAgICAgIDxDb250ZW50TG9hZGVyIGhlaWdodD17NjAwfSBpc0xvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICAgICAgPEVycm9yNDA0XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgcmVuZGVyPXsoKSA9PiAoXG4gICAgICAgICAgICAgICAgPFdyYXBwZWQgey4uLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJIZWxtZXQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnNDA0JyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTZWl0ZSB3dXJkZSBuaWNodCBnZWZ1bmRlbicsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8RXJyb3I0MDQgLz5cbiAgICAgICAgICAgICAgICA8L1dyYXBwZWQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudExvYWRlcj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q29udGVudExvYWRlciBoZWlnaHQ9ezYwMH0gaXNMb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgICAgIDxXcml0ZXJcbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICBtYXRjaD17aXRlbX1cbiAgICAgICAgICAgICAga2V5PXtwYWdlSWQgfHwgaWR9XG4gICAgICAgICAgICAgIGlkPXtwYWdlSWQgfHwgaWR9XG4gICAgICAgICAgICAgIGJpbmRpbmdJZD17YmluZGluZ0lkfVxuICAgICAgICAgICAgICBiaW5kaW5nPXtiaW5kaW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cmVuZGVySGVsbWV0KGl0ZW0sIHBhdGhuYW1lKX1cbiAgICAgICAgICAgIDwvV3JpdGVyPlxuICAgICAgICAgIDwvQ29udGVudExvYWRlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvV3JhcHBlZD5cbiAgICA8L05hdmlnYXRpb24+XG4gICk7XG59KTtcbiJdfQ==
