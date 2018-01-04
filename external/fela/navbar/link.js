'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _olympRouter = require('olymp-router');

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Link = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      inverse = _ref.inverse;
  return {
    cursor: 'pointer',
    onHover: {
      color: inverse ? theme.light : theme.dark,
      textDecoration: 'underline solid ' + (inverse ? theme.light : theme.color)
    },
    '&.active': {
      textDecoration: 'underline solid ' + (inverse ? theme.light : theme.color)
    }
  };
}, function (_ref2) {
  var inverse = _ref2.inverse,
      onClick = _ref2.onClick,
      LinkComponent = _ref2.renderItemLink,
      rest = _objectWithoutProperties(_ref2, ['inverse', 'onClick', 'renderItemLink']);

  return onClick ? _react2.default.createElement('span', _extends({ onClick: onClick }, rest)) : _react2.default.createElement(LinkComponent, rest);
}, function (p) {
  return Object.keys(p);
});

var Placeholder = (0, _reactFela.createComponent)(function () {
  return {
    cursor: 'default'
  };
}, 'a', function (_ref3) {
  var inverse = _ref3.inverse,
      p = _objectWithoutProperties(_ref3, ['inverse']);

  return Object.keys(p);
});

var NavbarLink = (0, _reactFela.createComponent)(function (_ref4) {
  var theme = _ref4.theme,
      inverse = _ref4.inverse;
  return {
    color: inverse ? theme.light2 : theme.dark2,
    display: 'block',
    fontFamily: theme.fontFamily,
    textDecoration: 'none',
    ellipsis: true,
    position: 'relative'
  };
}, function (_ref5) {
  var to = _ref5.to,
      onClick = _ref5.onClick,
      renderItemLink = _ref5.renderItemLink,
      rest = _objectWithoutProperties(_ref5, ['to', 'onClick', 'renderItemLink']);

  return to || onClick ? _react2.default.createElement(Link, _extends({
    to: to,
    renderItemLink: renderItemLink,
    onClick: onClick
  }, rest)) : _react2.default.createElement(Placeholder, rest);
}, function (p) {
  return Object.keys(p);
});
NavbarLink.displayName = 'Navbar.Link';
NavbarLink.propTypes = {
  to: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};
NavbarLink.defaultProps = {
  to: undefined,
  onClick: undefined,
  renderItemLink: function renderItemLink(props) {
    return _react2.default.createElement(_olympRouter.NavLink, props);
  }
};
exports.default = NavbarLink;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbmF2YmFyL2xpbmsuZXM2Il0sIm5hbWVzIjpbIkxpbmsiLCJ0aGVtZSIsImludmVyc2UiLCJjdXJzb3IiLCJvbkhvdmVyIiwiY29sb3IiLCJsaWdodCIsImRhcmsiLCJ0ZXh0RGVjb3JhdGlvbiIsIm9uQ2xpY2siLCJMaW5rQ29tcG9uZW50IiwicmVuZGVySXRlbUxpbmsiLCJyZXN0IiwiT2JqZWN0Iiwia2V5cyIsInAiLCJQbGFjZWhvbGRlciIsIk5hdmJhckxpbmsiLCJsaWdodDIiLCJkYXJrMiIsImRpc3BsYXkiLCJmb250RmFtaWx5IiwiZWxsaXBzaXMiLCJwb3NpdGlvbiIsInRvIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPLGdDQUNYO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsT0FBVixRQUFVQSxPQUFWO0FBQUEsU0FBeUI7QUFDdkJDLFlBQVEsU0FEZTtBQUV2QkMsYUFBUztBQUNQQyxhQUFPSCxVQUFVRCxNQUFNSyxLQUFoQixHQUF3QkwsTUFBTU0sSUFEOUI7QUFFUEMsNENBQW1DTixVQUFVRCxNQUFNSyxLQUFoQixHQUF3QkwsTUFBTUksS0FBakU7QUFGTyxLQUZjO0FBTXZCLGdCQUFZO0FBQ1ZHLDRDQUFtQ04sVUFBVUQsTUFBTUssS0FBaEIsR0FBd0JMLE1BQU1JLEtBQWpFO0FBRFU7QUFOVyxHQUF6QjtBQUFBLENBRFcsRUFXWDtBQUFBLE1BQUdILE9BQUgsU0FBR0EsT0FBSDtBQUFBLE1BQVlPLE9BQVosU0FBWUEsT0FBWjtBQUFBLE1BQXFDQyxhQUFyQyxTQUFxQkMsY0FBckI7QUFBQSxNQUF1REMsSUFBdkQ7O0FBQUEsU0FDRUgsVUFDRSxpREFBTSxTQUFTQSxPQUFmLElBQTRCRyxJQUE1QixFQURGLEdBR0UsOEJBQUMsYUFBRCxFQUFtQkEsSUFBbkIsQ0FKSjtBQUFBLENBWFcsRUFpQlg7QUFBQSxTQUFLQyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBakJXLENBQWI7O0FBb0JBLElBQU1DLGNBQWMsZ0NBQ2xCO0FBQUEsU0FBTztBQUNMYixZQUFRO0FBREgsR0FBUDtBQUFBLENBRGtCLEVBSWxCLEdBSmtCLEVBS2xCO0FBQUEsTUFBR0QsT0FBSCxTQUFHQSxPQUFIO0FBQUEsTUFBZWEsQ0FBZjs7QUFBQSxTQUF1QkYsT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQXZCO0FBQUEsQ0FMa0IsQ0FBcEI7O0FBUUEsSUFBTUUsYUFBYSxnQ0FDakI7QUFBQSxNQUFHaEIsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVUMsT0FBVixTQUFVQSxPQUFWO0FBQUEsU0FBeUI7QUFDdkJHLFdBQU9ILFVBQVVELE1BQU1pQixNQUFoQixHQUF5QmpCLE1BQU1rQixLQURmO0FBRXZCQyxhQUFTLE9BRmM7QUFHdkJDLGdCQUFZcEIsTUFBTW9CLFVBSEs7QUFJdkJiLG9CQUFnQixNQUpPO0FBS3ZCYyxjQUFVLElBTGE7QUFNdkJDLGNBQVU7QUFOYSxHQUF6QjtBQUFBLENBRGlCLEVBU2pCO0FBQUEsTUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsTUFBT2YsT0FBUCxTQUFPQSxPQUFQO0FBQUEsTUFBZ0JFLGNBQWhCLFNBQWdCQSxjQUFoQjtBQUFBLE1BQW1DQyxJQUFuQzs7QUFBQSxTQUNFWSxNQUFNZixPQUFOLEdBQ0UsOEJBQUMsSUFBRDtBQUNFLFFBQUllLEVBRE47QUFFRSxvQkFBZ0JiLGNBRmxCO0FBR0UsYUFBU0Y7QUFIWCxLQUlNRyxJQUpOLEVBREYsR0FRRSw4QkFBQyxXQUFELEVBQWlCQSxJQUFqQixDQVRKO0FBQUEsQ0FUaUIsRUFvQmpCO0FBQUEsU0FBS0MsT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxDQXBCaUIsQ0FBbkI7QUFzQkFFLFdBQVdRLFdBQVgsR0FBeUIsYUFBekI7QUFDQVIsV0FBV1MsU0FBWCxHQUF1QjtBQUNyQkYsTUFBSSxvQkFBVUcsTUFETztBQUVyQmxCLFdBQVMsb0JBQVVtQjtBQUZFLENBQXZCO0FBSUFYLFdBQVdZLFlBQVgsR0FBMEI7QUFDeEJMLE1BQUlNLFNBRG9CO0FBRXhCckIsV0FBU3FCLFNBRmU7QUFHeEJuQixrQkFBZ0I7QUFBQSxXQUFTLG9EQUFhb0IsS0FBYixDQUFUO0FBQUE7QUFIUSxDQUExQjtrQkFLZWQsVSIsImZpbGUiOiJleHRlcm5hbC9mZWxhL25hdmJhci9saW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5jb25zdCBMaW5rID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgaW52ZXJzZSB9KSA9PiAoe1xuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG9uSG92ZXI6IHtcbiAgICAgIGNvbG9yOiBpbnZlcnNlID8gdGhlbWUubGlnaHQgOiB0aGVtZS5kYXJrLFxuICAgICAgdGV4dERlY29yYXRpb246IGB1bmRlcmxpbmUgc29saWQgJHtpbnZlcnNlID8gdGhlbWUubGlnaHQgOiB0aGVtZS5jb2xvcn1gLFxuICAgIH0sXG4gICAgJyYuYWN0aXZlJzoge1xuICAgICAgdGV4dERlY29yYXRpb246IGB1bmRlcmxpbmUgc29saWQgJHtpbnZlcnNlID8gdGhlbWUubGlnaHQgOiB0aGVtZS5jb2xvcn1gLFxuICAgIH0sXG4gIH0pLFxuICAoeyBpbnZlcnNlLCBvbkNsaWNrLCByZW5kZXJJdGVtTGluazogTGlua0NvbXBvbmVudCwgLi4ucmVzdCB9KSA9PlxuICAgIG9uQ2xpY2sgPyAoXG4gICAgICA8c3BhbiBvbkNsaWNrPXtvbkNsaWNrfSB7Li4ucmVzdH0gLz5cbiAgICApIDogKFxuICAgICAgPExpbmtDb21wb25lbnQgey4uLnJlc3R9IC8+XG4gICAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IFBsYWNlaG9sZGVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoKSA9PiAoe1xuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICB9KSxcbiAgJ2EnLFxuICAoeyBpbnZlcnNlLCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgTmF2YmFyTGluayA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGludmVyc2UgfSkgPT4gKHtcbiAgICBjb2xvcjogaW52ZXJzZSA/IHRoZW1lLmxpZ2h0MiA6IHRoZW1lLmRhcmsyLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udEZhbWlseTogdGhlbWUuZm9udEZhbWlseSxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGVsbGlwc2lzOiB0cnVlLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9KSxcbiAgKHsgdG8sIG9uQ2xpY2ssIHJlbmRlckl0ZW1MaW5rLCAuLi5yZXN0IH0pID0+XG4gICAgdG8gfHwgb25DbGljayA/IChcbiAgICAgIDxMaW5rXG4gICAgICAgIHRvPXt0b31cbiAgICAgICAgcmVuZGVySXRlbUxpbms9e3JlbmRlckl0ZW1MaW5rfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgKSA6IChcbiAgICAgIDxQbGFjZWhvbGRlciB7Li4ucmVzdH0gLz5cbiAgICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbk5hdmJhckxpbmsuZGlzcGxheU5hbWUgPSAnTmF2YmFyLkxpbmsnO1xuTmF2YmFyTGluay5wcm9wVHlwZXMgPSB7XG4gIHRvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5OYXZiYXJMaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgdG86IHVuZGVmaW5lZCxcbiAgb25DbGljazogdW5kZWZpbmVkLFxuICByZW5kZXJJdGVtTGluazogcHJvcHMgPT4gPE5hdkxpbmsgey4uLnByb3BzfSAvPixcbn07XG5leHBvcnQgZGVmYXVsdCBOYXZiYXJMaW5rO1xuIl19
