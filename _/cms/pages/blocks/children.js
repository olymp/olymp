'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.page = undefined;

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  query page($id: String) {\n    page(id: $id) {\n      id\n      children {\n        id\n        slug\n        name\n        description\n        blocks {\n          extract\n          image {\n            url\n            width\n            height\n            caption\n          }\n        }\n      }\n    }\n  }\n'], ['\n  query page($id: String) {\n    page(id: $id) {\n      id\n      children {\n        id\n        slug\n        name\n        description\n        blocks {\n          extract\n          image {\n            url\n            width\n            height\n            caption\n          }\n        }\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _reactRedux = require('react-redux');

var _olympFela = require('olymp-fela');

var _panorama = require('olymp-fela/panorama');

var _panorama2 = _interopRequireDefault(_panorama);

var _olympCloudinary = require('olymp-cloudinary');

var _olympRouter = require('olymp-router');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var page = exports.page = (0, _graphqlTag2.default)(_templateObject);

var enhance = (0, _recompose.compose)((0, _reactApollo.graphql)(page, {
  options: function options(_ref) {
    var editor = _ref.editor;
    return {
      variables: { id: editor.props.id }
    };
  }
}), (0, _reactRedux.connect)(function (_ref2) {
  var location = _ref2.location;
  return {
    pathname: location.pathname
  };
}, function (dispatch) {
  return {
    push: (0, _olympRouter.createPushPathname)(dispatch)
  };
}));
var BannerBlock = enhance(function (_ref3) {
  var attributes = _ref3.attributes,
      className = _ref3.className,
      children = _ref3.children,
      data = _ref3.data,
      push = _ref3.push,
      pathname = _ref3.pathname;
  return _react2.default.createElement(
    'div',
    _extends({ className: className }, attributes),
    _react2.default.createElement(
      _olympFela.Container,
      null,
      children,
      _react2.default.createElement(_panorama2.default, { items: (0, _get3.default)(data.page, 'children', []).map(function (x) {
          return {
            id: x.id,
            image: (0, _get3.default)(x.blocks, 'image'),
            name: x.name
          };
        })
      })
    )
  );
});

exports.default = {
  type: 'children',
  isVoid: true,
  kind: 'block',
  label: 'Unterseiten',
  category: 'Media',
  styles: function styles(_ref4) {
    var theme = _ref4.theme;
    return {
      width: '100%',
      marginBottom: 20,
      paddingY: theme.space3
    };
  },
  component: BannerBlock
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvY2hpbGRyZW4uZXM2Il0sIm5hbWVzIjpbInBhZ2UiLCJlbmhhbmNlIiwib3B0aW9ucyIsImVkaXRvciIsInZhcmlhYmxlcyIsImlkIiwicHJvcHMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHVzaCIsImRpc3BhdGNoIiwiQmFubmVyQmxvY2siLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkYXRhIiwibWFwIiwieCIsImltYWdlIiwiYmxvY2tzIiwibmFtZSIsInR5cGUiLCJpc1ZvaWQiLCJraW5kIiwibGFiZWwiLCJjYXRlZ29yeSIsInN0eWxlcyIsInRoZW1lIiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nWSIsInNwYWNlMyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdPLElBQU1BLGdFQUFOOztBQXVCUCxJQUFNQyxVQUFVLHdCQUNkLDBCQUFRRCxJQUFSLEVBQWM7QUFDWkUsV0FBUztBQUFBLFFBQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFdBQWlCO0FBQ3hCQyxpQkFBVyxFQUFFQyxJQUFJRixPQUFPRyxLQUFQLENBQWFELEVBQW5CO0FBRGEsS0FBakI7QUFBQTtBQURHLENBQWQsQ0FEYyxFQU1kLHlCQUNFO0FBQUEsTUFBR0UsUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFDakJDLGNBQVVELFNBQVNDO0FBREYsR0FBbkI7QUFBQSxDQURGLEVBSUU7QUFBQSxTQUFhO0FBQ1hDLFVBQU0scUNBQW1CQyxRQUFuQjtBQURLLEdBQWI7QUFBQSxDQUpGLENBTmMsQ0FBaEI7QUFlQSxJQUFNQyxjQUFjVixRQUNsQjtBQUFBLE1BQUdXLFVBQUgsU0FBR0EsVUFBSDtBQUFBLE1BQWVDLFNBQWYsU0FBZUEsU0FBZjtBQUFBLE1BQTBCQyxRQUExQixTQUEwQkEsUUFBMUI7QUFBQSxNQUFvQ0MsSUFBcEMsU0FBb0NBLElBQXBDO0FBQUEsTUFBMENOLElBQTFDLFNBQTBDQSxJQUExQztBQUFBLE1BQWdERCxRQUFoRCxTQUFnREEsUUFBaEQ7QUFBQSxTQUNFO0FBQUE7QUFBQSxlQUFLLFdBQVdLLFNBQWhCLElBQStCRCxVQUEvQjtBQUNFO0FBQUE7QUFBQTtBQUNHRSxjQURIO0FBRUUsMERBQVUsT0FDUixtQkFBSUMsS0FBS2YsSUFBVCxFQUFlLFVBQWYsRUFBMkIsRUFBM0IsRUFBK0JnQixHQUEvQixDQUFtQztBQUFBLGlCQUFNO0FBQ3ZDWCxnQkFBSVksRUFBRVosRUFEaUM7QUFFdkNhLG1CQUFPLG1CQUFJRCxFQUFFRSxNQUFOLEVBQWMsT0FBZCxDQUZnQztBQUd2Q0Msa0JBQU1ILEVBQUVHO0FBSCtCLFdBQU47QUFBQSxTQUFuQztBQURGO0FBRkY7QUFERixHQURGO0FBQUEsQ0FEa0IsQ0FBcEI7O2tCQWlCZTtBQUNiQyxRQUFNLFVBRE87QUFFYkMsVUFBUSxJQUZLO0FBR2JDLFFBQU0sT0FITztBQUliQyxTQUFPLGFBSk07QUFLYkMsWUFBVSxPQUxHO0FBTWJDLFVBQVE7QUFBQSxRQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxXQUFnQjtBQUN0QkMsYUFBTyxNQURlO0FBRXRCQyxvQkFBYyxFQUZRO0FBR3RCQyxnQkFBVUgsTUFBTUk7QUFITSxLQUFoQjtBQUFBLEdBTks7QUFXYkMsYUFBV3JCO0FBWEUsQyIsImZpbGUiOiJjbXMvcGFnZXMvYmxvY2tzL2NoaWxkcmVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IFBhbm9yYW1hIGZyb20gJ29seW1wLWZlbGEvcGFub3JhbWEnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdvbHltcC1jbG91ZGluYXJ5JztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNyZWF0ZVB1c2hQYXRobmFtZSB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNvbnN0IHBhZ2UgPSBncWxgXG4gIHF1ZXJ5IHBhZ2UoJGlkOiBTdHJpbmcpIHtcbiAgICBwYWdlKGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBjaGlsZHJlbiB7XG4gICAgICAgIGlkXG4gICAgICAgIHNsdWdcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBibG9ja3Mge1xuICAgICAgICAgIGV4dHJhY3RcbiAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICAgIGNhcHRpb25cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICBncmFwaHFsKHBhZ2UsIHtcbiAgICBvcHRpb25zOiAoeyBlZGl0b3IgfSkgPT4gKHtcbiAgICAgIHZhcmlhYmxlczogeyBpZDogZWRpdG9yLnByb3BzLmlkIH0sXG4gICAgfSksXG4gIH0pLFxuICBjb25uZWN0KFxuICAgICh7IGxvY2F0aW9uIH0pID0+ICh7XG4gICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgfSksXG4gICAgZGlzcGF0Y2ggPT4gKHtcbiAgICAgIHB1c2g6IGNyZWF0ZVB1c2hQYXRobmFtZShkaXNwYXRjaCksXG4gICAgfSksXG4gICksXG4pO1xuY29uc3QgQmFubmVyQmxvY2sgPSBlbmhhbmNlKFxuICAoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGNoaWxkcmVuLCBkYXRhLCBwdXNoLCBwYXRobmFtZSB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLmF0dHJpYnV0ZXN9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8UGFub3JhbWEgaXRlbXM9e1xuICAgICAgICAgIGdldChkYXRhLnBhZ2UsICdjaGlsZHJlbicsIFtdKS5tYXAoeCA9PiAoe1xuICAgICAgICAgICAgaWQ6IHguaWQsXG4gICAgICAgICAgICBpbWFnZTogZ2V0KHguYmxvY2tzLCAnaW1hZ2UnKSxcbiAgICAgICAgICAgIG5hbWU6IHgubmFtZVxuICAgICAgICAgIH0pKX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlOiAnY2hpbGRyZW4nLFxuICBpc1ZvaWQ6IHRydWUsXG4gIGtpbmQ6ICdibG9jaycsXG4gIGxhYmVsOiAnVW50ZXJzZWl0ZW4nLFxuICBjYXRlZ29yeTogJ01lZGlhJyxcbiAgc3R5bGVzOiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2UzLFxuICB9KSxcbiAgY29tcG9uZW50OiBCYW5uZXJCbG9jayxcbn07XG4iXX0=
