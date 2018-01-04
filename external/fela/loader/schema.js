'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _container = require('../container');

var _container2 = _interopRequireDefault(_container);

var _grid = require('../grid');

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// const loaderSchema2 = `450,[c[m5[100,200,400]]g]`
var Panel = (0, _reactFela.createComponent)(function (_ref) {
  var height = _ref.height,
      width = _ref.width,
      pad = _ref.pad,
      theme = _ref.theme;
  return {
    height: height,
    width: width,
    paddingRight: pad ? theme.space3 : 0,
    marginBottom: theme.space3
  };
}, 'div', []);

var _ref4 = _react2.default.createElement(_content2.default, { isLoading: true });

var _ref5 = _react2.default.createElement(_content2.default, { isLoading: true });

var SchemaLoaderItem = function SchemaLoaderItem(_ref2) {
  var height = _ref2.height,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? '100%' : _ref2$width,
      grid = _ref2.grid,
      children = _ref2.children,
      size = _ref2.size;

  var inner = void 0;
  if (grid) {
    inner = _react2.default.createElement(
      _grid2.default,
      { height: '100%' },
      grid.map(function (_ref3, i) {
        var children = _ref3.children,
            item = _objectWithoutProperties(_ref3, ['children']);

        return _react2.default.createElement(
          _grid2.default.Item,
          _extends({ key: i, height: '100%' }, item),
          _react2.default.createElement(
            Panel,
            { height: '100%', width: '100%', pad: true },
            children ? children.map(function (child, i) {
              return _react2.default.createElement(
                Panel,
                { key: i },
                _react2.default.createElement(_content2.default, _extends({ isLoading: true }, child))
              );
            }) : _ref4
          )
        );
      })
    );
  } else if (children) {
    inner = children.map(function (child, i) {
      return _react2.default.createElement(
        Panel,
        { key: i },
        _react2.default.createElement(_content2.default, _extends({ isLoading: true }, child))
      );
    });
  } else {
    inner = _ref5;
  }

  if (width === 'container') {
    return _react2.default.createElement(
      _container2.default,
      { height: height, size: size },
      _react2.default.createElement(
        Panel,
        { height: '100%', width: '100%' },
        inner
      )
    );
  }
  return _react2.default.createElement(
    Panel,
    { height: height, width: width },
    inner
  );
};

var cache = {};

exports.default = function (_ref6) {
  var schema = _ref6.schema,
      isLoading = _ref6.isLoading,
      children = _ref6.children;

  if (isLoading) {
    var components = schema.map(function (item, i) {
      return _react2.default.createElement(SchemaLoaderItem, _extends({ key: i }, item));
    });
    return _react2.default.createElement(
      'div',
      null,
      components
    );
  }
  if (children) {
    return _react.Children.only(children);
  }
  return null;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbG9hZGVyL3NjaGVtYS5lczYiXSwibmFtZXMiOlsiUGFuZWwiLCJoZWlnaHQiLCJ3aWR0aCIsInBhZCIsInRoZW1lIiwicGFkZGluZ1JpZ2h0Iiwic3BhY2UzIiwibWFyZ2luQm90dG9tIiwiU2NoZW1hTG9hZGVySXRlbSIsImdyaWQiLCJjaGlsZHJlbiIsInNpemUiLCJpbm5lciIsIm1hcCIsImkiLCJpdGVtIiwiY2hpbGQiLCJjYWNoZSIsInNjaGVtYSIsImlzTG9hZGluZyIsImNvbXBvbmVudHMiLCJvbmx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUdBO0FBQ0EsSUFBTUEsUUFBUSxnQ0FDWjtBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLE1BQVdDLEtBQVgsUUFBV0EsS0FBWDtBQUFBLE1BQWtCQyxHQUFsQixRQUFrQkEsR0FBbEI7QUFBQSxNQUF1QkMsS0FBdkIsUUFBdUJBLEtBQXZCO0FBQUEsU0FBb0M7QUFDbENILGtCQURrQztBQUVsQ0MsZ0JBRmtDO0FBR2xDRyxrQkFBY0YsTUFBTUMsTUFBTUUsTUFBWixHQUFxQixDQUhEO0FBSWxDQyxrQkFBY0gsTUFBTUU7QUFKYyxHQUFwQztBQUFBLENBRFksRUFPWixLQVBZLEVBUVosRUFSWSxDQUFkOztZQXlCa0IsbURBQWUsZUFBZixHOztZQWFOLG1EQUFlLGVBQWYsRzs7QUEzQlosSUFBTUUsbUJBQW1CLFNBQW5CQSxnQkFBbUIsUUFBc0Q7QUFBQSxNQUFuRFAsTUFBbUQsU0FBbkRBLE1BQW1EO0FBQUEsMEJBQTNDQyxLQUEyQztBQUFBLE1BQTNDQSxLQUEyQywrQkFBbkMsTUFBbUM7QUFBQSxNQUEzQk8sSUFBMkIsU0FBM0JBLElBQTJCO0FBQUEsTUFBckJDLFFBQXFCLFNBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsU0FBWEEsSUFBVzs7QUFDN0UsTUFBSUMsY0FBSjtBQUNBLE1BQUlILElBQUosRUFBVTtBQUNSRyxZQUNFO0FBQUE7QUFBQSxRQUFNLFFBQU8sTUFBYjtBQUNHSCxXQUFLSSxHQUFMLENBQVMsaUJBQXdCQyxDQUF4QjtBQUFBLFlBQUdKLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFlBQWdCSyxJQUFoQjs7QUFBQSxlQUNQO0FBQUEseUJBQU0sSUFBTjtBQUFBLHFCQUFXLEtBQUtELENBQWhCLEVBQW1CLFFBQU8sTUFBMUIsSUFBcUNDLElBQXJDO0FBQ0M7QUFBQyxpQkFBRDtBQUFBLGNBQU8sUUFBTyxNQUFkLEVBQXFCLE9BQU0sTUFBM0IsRUFBa0MsU0FBbEM7QUFDR0wsdUJBQ0dBLFNBQVNHLEdBQVQsQ0FBYSxVQUFDRyxLQUFELEVBQVFGLENBQVI7QUFBQSxxQkFDWjtBQUFDLHFCQUFEO0FBQUEsa0JBQU8sS0FBS0EsQ0FBWjtBQUNDLDRFQUFlLGVBQWYsSUFBNkJFLEtBQTdCO0FBREQsZUFEWTtBQUFBLGFBQWIsQ0FESDtBQURIO0FBREQsU0FETztBQUFBLE9BQVQ7QUFESCxLQURGO0FBaUJELEdBbEJELE1Ba0JPLElBQUlOLFFBQUosRUFBYztBQUNuQkUsWUFBUUYsU0FBU0csR0FBVCxDQUFhLFVBQUNHLEtBQUQsRUFBUUYsQ0FBUjtBQUFBLGFBQ2xCO0FBQUMsYUFBRDtBQUFBLFVBQU8sS0FBS0EsQ0FBWjtBQUNDLG9FQUFlLGVBQWYsSUFBNkJFLEtBQTdCO0FBREQsT0FEa0I7QUFBQSxLQUFiLENBQVI7QUFLRCxHQU5NLE1BTUE7QUFDTEo7QUFDRDs7QUFFRCxNQUFJVixVQUFVLFdBQWQsRUFBMkI7QUFDekIsV0FDRTtBQUFBO0FBQUEsUUFBVyxRQUFRRCxNQUFuQixFQUEyQixNQUFNVSxJQUFqQztBQUNFO0FBQUMsYUFBRDtBQUFBLFVBQU8sUUFBTyxNQUFkLEVBQXFCLE9BQU0sTUFBM0I7QUFDR0M7QUFESDtBQURGLEtBREY7QUFPRDtBQUNELFNBQ0U7QUFBQyxTQUFEO0FBQUEsTUFBTyxRQUFRWCxNQUFmLEVBQXVCLE9BQU9DLEtBQTlCO0FBQ0dVO0FBREgsR0FERjtBQUtELENBNUNEOztBQThDQSxJQUFNSyxRQUFRLEVBQWQ7O2tCQUNlLGlCQUFxQztBQUFBLE1BQWxDQyxNQUFrQyxTQUFsQ0EsTUFBa0M7QUFBQSxNQUExQkMsU0FBMEIsU0FBMUJBLFNBQTBCO0FBQUEsTUFBZlQsUUFBZSxTQUFmQSxRQUFlOztBQUNsRCxNQUFJUyxTQUFKLEVBQWU7QUFDYixRQUFNQyxhQUFhRixPQUFPTCxHQUFQLENBQVcsVUFBQ0UsSUFBRCxFQUFPRCxDQUFQO0FBQUEsYUFDNUIsOEJBQUMsZ0JBQUQsYUFBa0IsS0FBS0EsQ0FBdkIsSUFBOEJDLElBQTlCLEVBRDRCO0FBQUEsS0FBWCxDQUFuQjtBQUdBLFdBQU87QUFBQTtBQUFBO0FBQU1LO0FBQU4sS0FBUDtBQUNEO0FBQ0QsTUFBSVYsUUFBSixFQUFjO0FBQ1osV0FBTyxnQkFBU1csSUFBVCxDQUFjWCxRQUFkLENBQVA7QUFDRDtBQUNELFNBQU8sSUFBUDtBQUNELEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9sb2FkZXIvc2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgQ29udGVudExvYWRlciBmcm9tICcuL2NvbnRlbnQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb250YWluZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi4vZ3JpZCc7XG5cblxuLy8gY29uc3QgbG9hZGVyU2NoZW1hMiA9IGA0NTAsW2NbbTVbMTAwLDIwMCw0MDBdXWddYFxuY29uc3QgUGFuZWwgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IGhlaWdodCwgd2lkdGgsIHBhZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBoZWlnaHQsXG4gICAgd2lkdGgsXG4gICAgcGFkZGluZ1JpZ2h0OiBwYWQgPyB0aGVtZS5zcGFjZTMgOiAwLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2UzLFxuICB9KSxcbiAgJ2RpdicsXG4gIFtdXG4pO1xuXG5jb25zdCBTY2hlbWFMb2FkZXJJdGVtID0gKHsgaGVpZ2h0LCB3aWR0aCA9ICcxMDAlJywgZ3JpZCwgY2hpbGRyZW4sIHNpemUgfSkgPT4ge1xuICBsZXQgaW5uZXI7XG4gIGlmIChncmlkKSB7XG4gICAgaW5uZXIgPSAoXG4gICAgICA8R3JpZCBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgIHtncmlkLm1hcCgoeyBjaGlsZHJlbiwgLi4uaXRlbSB9LCBpKSA9PlxuICAgICAgICAgICg8R3JpZC5JdGVtIGtleT17aX0gaGVpZ2h0PVwiMTAwJVwiIHsuLi5pdGVtfT5cbiAgICAgICAgICAgIDxQYW5lbCBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgcGFkPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW5cbiAgICAgICAgICAgICAgICA/IGNoaWxkcmVuLm1hcCgoY2hpbGQsIGkpID0+XG4gICAgICAgICAgICAgICAgICAoPFBhbmVsIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50TG9hZGVyIGlzTG9hZGluZyB7Li4uY2hpbGR9IC8+XG4gICAgICAgICAgICAgICAgICA8L1BhbmVsPilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiA8Q29udGVudExvYWRlciBpc0xvYWRpbmcgLz59XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgIDwvR3JpZC5JdGVtPilcbiAgICAgICAgKX1cbiAgICAgIDwvR3JpZD5cbiAgICApO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgaW5uZXIgPSBjaGlsZHJlbi5tYXAoKGNoaWxkLCBpKSA9PlxuICAgICAgKDxQYW5lbCBrZXk9e2l9PlxuICAgICAgICA8Q29udGVudExvYWRlciBpc0xvYWRpbmcgey4uLmNoaWxkfSAvPlxuICAgICAgPC9QYW5lbD4pXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBpbm5lciA9IDxDb250ZW50TG9hZGVyIGlzTG9hZGluZyAvPjtcbiAgfVxuXG4gIGlmICh3aWR0aCA9PT0gJ2NvbnRhaW5lcicpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBoZWlnaHQ9e2hlaWdodH0gc2l6ZT17c2l6ZX0+XG4gICAgICAgIDxQYW5lbCBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAge2lubmVyfVxuICAgICAgICA8L1BhbmVsPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxQYW5lbCBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofT5cbiAgICAgIHtpbm5lcn1cbiAgICA8L1BhbmVsPlxuICApO1xufTtcblxuY29uc3QgY2FjaGUgPSB7fTtcbmV4cG9ydCBkZWZhdWx0ICh7IHNjaGVtYSwgaXNMb2FkaW5nLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gc2NoZW1hLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgIDxTY2hlbWFMb2FkZXJJdGVtIGtleT17aX0gey4uLml0ZW19IC8+XG4gICAgKTtcbiAgICByZXR1cm4gPGRpdj57Y29tcG9uZW50c308L2Rpdj47XG4gIH1cbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbiJdfQ==
