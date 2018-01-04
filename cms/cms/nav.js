'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _olympRouter = require('olymp-router');

var _olympFela = require('olymp-fela');

var _prefetchLink = require('./prefetch-link');

var _prefetchLink2 = _interopRequireDefault(_prefetchLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var toggleComponent = function toggleComponent(_ref) {
  var toggled = _ref.toggled,
      onToggle = _ref.onToggle,
      props = _objectWithoutProperties(_ref, ['toggled', 'onToggle']);

  return _react2.default.createElement(_olympRouter.Link, _extends({ updateQuery: { toggled: toggled ? undefined : null } }, props));
};

var fromPages = function fromPages(items) {
  return items.map(function (item) {
    if (item.name === 'Leistungen') {
      var childs = fromPages(item.children);
      return _react2.default.createElement(
        _olympFela.Nav.Mega,
        {
          pathname: item.pathname || undefined,
          renderLabel: _prefetchLink2.default,
          title: item.name,
          key: item.id,
          columns: childs.length
        },
        childs
      );
    }
    if (item.children && item.children.length) {
      return _react2.default.createElement(
        _olympFela.Nav.Menu,
        {
          pathname: item.pathname || undefined,
          renderLabel: _prefetchLink2.default,
          title: item.name,
          key: item.id
        },
        fromPages(item.children)
      );
    }
    return _react2.default.createElement(
      _olympFela.Nav.Item,
      {
        pathname: item.pathname,
        key: item.id,
        renderLabel: _prefetchLink2.default
      },
      item.name
    );
  });
};

var PrefetchItem = function PrefetchItem(props) {
  return _react2.default.createElement(_olympFela.Nav.Item, _extends({}, props, {
    renderLabel: props.pathname ? _prefetchLink2.default : undefined
  }));
};

var CmsNav = (0, _reactRedux.connect)(function (_ref2) {
  var location = _ref2.location;
  return {
    toggled: location.query.toggled !== undefined,
    renderItemLink: _prefetchLink2.default,
    toggleComponent: toggleComponent
  };
})(function (_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement(
    _olympFela.Nav,
    null,
    children
  );
});
CmsNav.fromPages = fromPages;
CmsNav.PrefetchItem = PrefetchItem;
CmsNav.Item = _olympFela.Nav.Item;
CmsNav.Menu = _olympFela.Nav.Menu;
CmsNav.Right = _olympFela.Nav.Right;
exports.default = CmsNav;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbXMvbmF2LmVzNiJdLCJuYW1lcyI6WyJ0b2dnbGVDb21wb25lbnQiLCJ0b2dnbGVkIiwib25Ub2dnbGUiLCJwcm9wcyIsInVuZGVmaW5lZCIsImZyb21QYWdlcyIsIml0ZW1zIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJjaGlsZHMiLCJjaGlsZHJlbiIsInBhdGhuYW1lIiwiaWQiLCJsZW5ndGgiLCJQcmVmZXRjaEl0ZW0iLCJDbXNOYXYiLCJsb2NhdGlvbiIsInF1ZXJ5IiwicmVuZGVySXRlbUxpbmsiLCJJdGVtIiwiTWVudSIsIlJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlDLFFBQVosUUFBWUEsUUFBWjtBQUFBLE1BQXlCQyxLQUF6Qjs7QUFBQSxTQUN0Qiw0REFBTSxhQUFhLEVBQUVGLFNBQVNBLFVBQVVHLFNBQVYsR0FBc0IsSUFBakMsRUFBbkIsSUFBZ0VELEtBQWhFLEVBRHNCO0FBQUEsQ0FBeEI7O0FBSUEsSUFBTUUsWUFBWSxTQUFaQSxTQUFZO0FBQUEsU0FDaEJDLE1BQU1DLEdBQU4sQ0FBVSxnQkFBUTtBQUNoQixRQUFJQyxLQUFLQyxJQUFMLEtBQWMsWUFBbEIsRUFBZ0M7QUFDOUIsVUFBTUMsU0FBU0wsVUFBVUcsS0FBS0csUUFBZixDQUFmO0FBQ0EsYUFDRTtBQUFBLHVCQUFLLElBQUw7QUFBQTtBQUNFLG9CQUFVSCxLQUFLSSxRQUFMLElBQWlCUixTQUQ3QjtBQUVFLDZDQUZGO0FBR0UsaUJBQU9JLEtBQUtDLElBSGQ7QUFJRSxlQUFLRCxLQUFLSyxFQUpaO0FBS0UsbUJBQVNILE9BQU9JO0FBTGxCO0FBT0dKO0FBUEgsT0FERjtBQVdEO0FBQ0QsUUFBSUYsS0FBS0csUUFBTCxJQUFpQkgsS0FBS0csUUFBTCxDQUFjRyxNQUFuQyxFQUEyQztBQUN6QyxhQUNFO0FBQUEsdUJBQUssSUFBTDtBQUFBO0FBQ0Usb0JBQVVOLEtBQUtJLFFBQUwsSUFBaUJSLFNBRDdCO0FBRUUsNkNBRkY7QUFHRSxpQkFBT0ksS0FBS0MsSUFIZDtBQUlFLGVBQUtELEtBQUtLO0FBSlo7QUFNR1Isa0JBQVVHLEtBQUtHLFFBQWY7QUFOSCxPQURGO0FBVUQ7QUFDRCxXQUNFO0FBQUEscUJBQUssSUFBTDtBQUFBO0FBQ0Usa0JBQVVILEtBQUtJLFFBRGpCO0FBRUUsYUFBS0osS0FBS0ssRUFGWjtBQUdFO0FBSEY7QUFLR0wsV0FBS0M7QUFMUixLQURGO0FBU0QsR0FwQ0QsQ0FEZ0I7QUFBQSxDQUFsQjs7QUF1Q0EsSUFBTU0sZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FDbkIsNkNBQUssSUFBTCxlQUNNWixLQUROO0FBRUUsaUJBQWFBLE1BQU1TLFFBQU4sNEJBQWdDUjtBQUYvQyxLQURtQjtBQUFBLENBQXJCOztBQU9BLElBQU1ZLFNBQVMseUJBQVE7QUFBQSxNQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUN4Q2hCLGFBQVNnQixTQUFTQyxLQUFULENBQWVqQixPQUFmLEtBQTJCRyxTQURJO0FBRXhDZSwwQ0FGd0M7QUFHeENuQjtBQUh3QyxHQUFuQjtBQUFBLENBQVIsRUFJWDtBQUFBLE1BQUdXLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQWtCO0FBQUE7QUFBQTtBQUFNQTtBQUFOLEdBQWxCO0FBQUEsQ0FKVyxDQUFmO0FBS0FLLE9BQU9YLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0FXLE9BQU9ELFlBQVAsR0FBc0JBLFlBQXRCO0FBQ0FDLE9BQU9JLElBQVAsR0FBYyxlQUFJQSxJQUFsQjtBQUNBSixPQUFPSyxJQUFQLEdBQWMsZUFBSUEsSUFBbEI7QUFDQUwsT0FBT00sS0FBUCxHQUFlLGVBQUlBLEtBQW5CO2tCQUNlTixNIiwiZmlsZSI6ImNtcy9jbXMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IE5hdiB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IFByZWZldGNoTGluayBmcm9tICcuL3ByZWZldGNoLWxpbmsnO1xuXG5jb25zdCB0b2dnbGVDb21wb25lbnQgPSAoeyB0b2dnbGVkLCBvblRvZ2dsZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8TGluayB1cGRhdGVRdWVyeT17eyB0b2dnbGVkOiB0b2dnbGVkID8gdW5kZWZpbmVkIDogbnVsbCB9fSB7Li4ucHJvcHN9IC8+XG4pO1xuXG5jb25zdCBmcm9tUGFnZXMgPSBpdGVtcyA9PlxuICBpdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0ubmFtZSA9PT0gJ0xlaXN0dW5nZW4nKSB7XG4gICAgICBjb25zdCBjaGlsZHMgPSBmcm9tUGFnZXMoaXRlbS5jaGlsZHJlbik7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TmF2Lk1lZ2FcbiAgICAgICAgICBwYXRobmFtZT17aXRlbS5wYXRobmFtZSB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgcmVuZGVyTGFiZWw9e1ByZWZldGNoTGlua31cbiAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxuICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICBjb2x1bW5zPXtjaGlsZHMubGVuZ3RofVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkc31cbiAgICAgICAgPC9OYXYuTWVnYT5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TmF2Lk1lbnVcbiAgICAgICAgICBwYXRobmFtZT17aXRlbS5wYXRobmFtZSB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgcmVuZGVyTGFiZWw9e1ByZWZldGNoTGlua31cbiAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxuICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtmcm9tUGFnZXMoaXRlbS5jaGlsZHJlbil9XG4gICAgICAgIDwvTmF2Lk1lbnU+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPE5hdi5JdGVtXG4gICAgICAgIHBhdGhuYW1lPXtpdGVtLnBhdGhuYW1lfVxuICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgIHJlbmRlckxhYmVsPXtQcmVmZXRjaExpbmt9XG4gICAgICA+XG4gICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICA8L05hdi5JdGVtPlxuICAgICk7XG4gIH0pO1xuXG5jb25zdCBQcmVmZXRjaEl0ZW0gPSBwcm9wcyA9PiAoXG4gIDxOYXYuSXRlbVxuICAgIHsuLi5wcm9wc31cbiAgICByZW5kZXJMYWJlbD17cHJvcHMucGF0aG5hbWUgPyBQcmVmZXRjaExpbmsgOiB1bmRlZmluZWR9XG4gIC8+XG4pO1xuXG5jb25zdCBDbXNOYXYgPSBjb25uZWN0KCh7IGxvY2F0aW9uIH0pID0+ICh7XG4gIHRvZ2dsZWQ6IGxvY2F0aW9uLnF1ZXJ5LnRvZ2dsZWQgIT09IHVuZGVmaW5lZCxcbiAgcmVuZGVySXRlbUxpbms6IFByZWZldGNoTGluayxcbiAgdG9nZ2xlQ29tcG9uZW50LFxufSkpKCh7IGNoaWxkcmVuIH0pID0+IDxOYXY+e2NoaWxkcmVufTwvTmF2Pik7XG5DbXNOYXYuZnJvbVBhZ2VzID0gZnJvbVBhZ2VzO1xuQ21zTmF2LlByZWZldGNoSXRlbSA9IFByZWZldGNoSXRlbTtcbkNtc05hdi5JdGVtID0gTmF2Lkl0ZW07XG5DbXNOYXYuTWVudSA9IE5hdi5NZW51O1xuQ21zTmF2LlJpZ2h0ID0gTmF2LlJpZ2h0O1xuZXhwb3J0IGRlZmF1bHQgQ21zTmF2O1xuIl19
