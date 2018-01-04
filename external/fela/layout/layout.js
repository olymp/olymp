'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Layout = (0, _reactFela.createComponent)(function (_ref) {
  var fullHeight = _ref.fullHeight,
      affix = _ref.affix;
  return {};
}, function (_ref2) {
  var children = _ref2.children,
      affix = _ref2.affix,
      rest = _objectWithoutProperties(_ref2, ['children', 'affix']);

  return _react2.default.createElement(
    'div',
    rest,
    _react.Children.map(children, function (child) {
      return child && (0, _react.cloneElement)(child, { affix: affix });
    })
  );
}, function (_ref3) {
  var fullHeight = _ref3.fullHeight,
      p = _objectWithoutProperties(_ref3, ['fullHeight']);

  return Object.keys(p);
});
Layout.displayName = 'Layout';
Layout.propTypes = {
  fullHeight: _propTypes2.default.bool,
  affix: _propTypes2.default.bool
};
Layout.defaultProps = {
  fullHeight: false,
  affix: false
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGF5b3V0L2xheW91dC5lczYiXSwibmFtZXMiOlsiTGF5b3V0IiwiZnVsbEhlaWdodCIsImFmZml4IiwiY2hpbGRyZW4iLCJyZXN0IiwibWFwIiwiY2hpbGQiLCJwIiwiT2JqZWN0Iiwia2V5cyIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLGdDQUNiO0FBQUEsTUFBR0MsVUFBSCxRQUFHQSxVQUFIO0FBQUEsTUFBZUMsS0FBZixRQUFlQSxLQUFmO0FBQUEsU0FBNEIsRUFBNUI7QUFBQSxDQURhLEVBRWI7QUFBQSxNQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFhRCxLQUFiLFNBQWFBLEtBQWI7QUFBQSxNQUF1QkUsSUFBdkI7O0FBQUEsU0FDRTtBQUFBO0FBQVNBLFFBQVQ7QUFDRyxvQkFBU0MsR0FBVCxDQUFhRixRQUFiLEVBQXVCO0FBQUEsYUFBU0csU0FBUyx5QkFBYUEsS0FBYixFQUFvQixFQUFFSixZQUFGLEVBQXBCLENBQWxCO0FBQUEsS0FBdkI7QUFESCxHQURGO0FBQUEsQ0FGYSxFQU9iO0FBQUEsTUFBR0QsVUFBSCxTQUFHQSxVQUFIO0FBQUEsTUFBa0JNLENBQWxCOztBQUFBLFNBQTBCQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBMUI7QUFBQSxDQVBhLENBQWY7QUFTQVAsT0FBT1UsV0FBUCxHQUFxQixRQUFyQjtBQUNBVixPQUFPVyxTQUFQLEdBQW1CO0FBQ2pCVixjQUFZLG9CQUFVVyxJQURMO0FBRWpCVixTQUFPLG9CQUFVVTtBQUZBLENBQW5CO0FBSUFaLE9BQU9hLFlBQVAsR0FBc0I7QUFDcEJaLGNBQVksS0FEUTtBQUVwQkMsU0FBTztBQUZhLENBQXRCOztrQkFLZUYsTSIsImZpbGUiOiJleHRlcm5hbC9mZWxhL2xheW91dC9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuY29uc3QgTGF5b3V0ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyBmdWxsSGVpZ2h0LCBhZmZpeCB9KSA9PiAoe30pLFxuICAoeyBjaGlsZHJlbiwgYWZmaXgsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxkaXYgey4uLnJlc3R9PlxuICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gY2hpbGQgJiYgY2xvbmVFbGVtZW50KGNoaWxkLCB7IGFmZml4IH0pKX1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgKHsgZnVsbEhlaWdodCwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5MYXlvdXQuZGlzcGxheU5hbWUgPSAnTGF5b3V0JztcbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGZ1bGxIZWlnaHQ6IFByb3BUeXBlcy5ib29sLFxuICBhZmZpeDogUHJvcFR5cGVzLmJvb2wsXG59O1xuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZnVsbEhlaWdodDogZmFsc2UsXG4gIGFmZml4OiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ==
