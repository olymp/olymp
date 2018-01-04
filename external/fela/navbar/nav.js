'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

var _olympFela = require('olymp-fela');

var _sub = require('./sub');

var _sub2 = _interopRequireDefault(_sub);

var _mega = require('./mega');

var _mega2 = _interopRequireDefault(_mega);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Nav = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      inverse = _ref.inverse,
      vertically = _ref.vertically,
      right = _ref.right,
      sub = _ref.sub;
  return sub && {
    backgroundColor: inverse ? (0, _olympFela.fade)(theme.color, 85) : '#FFFFFF',
    border: (0, _olympFela.border)(theme, inverse ? theme.color : theme.dark4),
    display: 'none',
    position: 'absolute',
    top: !vertically ? '100%' : -theme.borderWidth,
    left: !right && (vertically ? '100%' : 0),
    right: right && (!vertically ? 0 : '100%'),
    zIndex: 10,
    '> div': {
      textAlign: 'left'
    },
    ifMini: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      fontSize: theme.fontSizeSmall,
      backgroundColor: inverse && theme.dark5,
      border: 'none'
    }
  };
}, function (_ref2) {
  var mega = _ref2.mega,
      sub = _ref2.sub,
      vertically = _ref2.vertically,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ['mega', 'sub', 'vertically', 'children']);

  return mega && mega(_extends({ mega: mega, sub: sub, vertically: vertically, children: children }, props)) ? _react2.default.createElement(_mega2.default, props) : _react2.default.createElement(
    _sub2.default,
    _extends({}, props, { vertically: sub || vertically }),
    children
  );
}, function (p) {
  return Object.keys(p);
});
Nav.displayName = 'Navbar.Nav';
Nav.propTypes = {
  /** Array of page-objects */
  pages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    pathname: _propTypes2.default.string,
    children: _propTypes2.default.arrayOf(_propTypes2.default.object)
  })),
  /** aligns nav-items right */
  right: _propTypes2.default.bool
};
Nav.defaultProps = {
  pages: [],
  right: false
};
exports.default = Nav;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbmF2YmFyL25hdi5lczYiXSwibmFtZXMiOlsiTmF2IiwidGhlbWUiLCJpbnZlcnNlIiwidmVydGljYWxseSIsInJpZ2h0Iiwic3ViIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJkYXJrNCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInRvcCIsImJvcmRlcldpZHRoIiwibGVmdCIsInpJbmRleCIsInRleHRBbGlnbiIsImlmTWluaSIsImZvbnRTaXplIiwiZm9udFNpemVTbWFsbCIsImRhcms1IiwibWVnYSIsImNoaWxkcmVuIiwicHJvcHMiLCJPYmplY3QiLCJrZXlzIiwicCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwicGFnZXMiLCJhcnJheU9mIiwic2hhcGUiLCJuYW1lIiwic3RyaW5nIiwicGF0aG5hbWUiLCJvYmplY3QiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLE1BQU0sZ0NBQ1Y7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxPQUFWLFFBQVVBLE9BQVY7QUFBQSxNQUFtQkMsVUFBbkIsUUFBbUJBLFVBQW5CO0FBQUEsTUFBK0JDLEtBQS9CLFFBQStCQSxLQUEvQjtBQUFBLE1BQXNDQyxHQUF0QyxRQUFzQ0EsR0FBdEM7QUFBQSxTQUNFQSxPQUFPO0FBQ0xDLHFCQUFpQkosVUFBVSxxQkFBS0QsTUFBTU0sS0FBWCxFQUFrQixFQUFsQixDQUFWLEdBQWtDLFNBRDlDO0FBRUxDLFlBQVEsdUJBQU9QLEtBQVAsRUFBY0MsVUFBVUQsTUFBTU0sS0FBaEIsR0FBd0JOLE1BQU1RLEtBQTVDLENBRkg7QUFHTEMsYUFBUyxNQUhKO0FBSUxDLGNBQVUsVUFKTDtBQUtMQyxTQUFLLENBQUNULFVBQUQsR0FBYyxNQUFkLEdBQXVCLENBQUNGLE1BQU1ZLFdBTDlCO0FBTUxDLFVBQU0sQ0FBQ1YsS0FBRCxLQUFXRCxhQUFhLE1BQWIsR0FBc0IsQ0FBakMsQ0FORDtBQU9MQyxXQUFPQSxVQUFVLENBQUNELFVBQUQsR0FBYyxDQUFkLEdBQWtCLE1BQTVCLENBUEY7QUFRTFksWUFBUSxFQVJIO0FBU0wsYUFBUztBQUNQQyxpQkFBVztBQURKLEtBVEo7QUFZTEMsWUFBUTtBQUNOTixnQkFBVSxVQURKO0FBRU5DLFdBQUssTUFGQztBQUdORSxZQUFNLE1BSEE7QUFJTlYsYUFBTyxNQUpEO0FBS05jLGdCQUFVakIsTUFBTWtCLGFBTFY7QUFNTmIsdUJBQWlCSixXQUFXRCxNQUFNbUIsS0FONUI7QUFPTlosY0FBUTtBQVBGO0FBWkgsR0FEVDtBQUFBLENBRFUsRUF3QlY7QUFBQSxNQUFHYSxJQUFILFNBQUdBLElBQUg7QUFBQSxNQUFTaEIsR0FBVCxTQUFTQSxHQUFUO0FBQUEsTUFBY0YsVUFBZCxTQUFjQSxVQUFkO0FBQUEsTUFBMEJtQixRQUExQixTQUEwQkEsUUFBMUI7QUFBQSxNQUF1Q0MsS0FBdkM7O0FBQUEsU0FDRUYsUUFBUUEsZ0JBQU9BLFVBQVAsRUFBYWhCLFFBQWIsRUFBa0JGLHNCQUFsQixFQUE4Qm1CLGtCQUE5QixJQUEyQ0MsS0FBM0MsRUFBUixHQUNJLDhDQUFVQSxLQUFWLENBREosR0FFSTtBQUFBO0FBQUEsaUJBQVNBLEtBQVQsSUFBZ0IsWUFBWWxCLE9BQU9GLFVBQW5DO0FBQ0NtQjtBQURELEdBSE47QUFBQSxDQXhCVSxFQThCVjtBQUFBLFNBQUtFLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0E5QlUsQ0FBWjtBQWdDQTFCLElBQUkyQixXQUFKLEdBQWtCLFlBQWxCO0FBQ0EzQixJQUFJNEIsU0FBSixHQUFnQjtBQUNkO0FBQ0FDLFNBQU8sb0JBQVVDLE9BQVYsQ0FDTCxvQkFBVUMsS0FBVixDQUFnQjtBQUNkQyxVQUFNLG9CQUFVQyxNQURGO0FBRWRDLGNBQVUsb0JBQVVELE1BRk47QUFHZFgsY0FBVSxvQkFBVVEsT0FBVixDQUFrQixvQkFBVUssTUFBNUI7QUFISSxHQUFoQixDQURLLENBRk87QUFTZDtBQUNBL0IsU0FBTyxvQkFBVWdDO0FBVkgsQ0FBaEI7QUFZQXBDLElBQUlxQyxZQUFKLEdBQW1CO0FBQ2pCUixTQUFPLEVBRFU7QUFFakJ6QixTQUFPO0FBRlUsQ0FBbkI7a0JBSWVKLEciLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9uYXZiYXIvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IGZhZGUsIGJvcmRlciB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IFN1YiBmcm9tICcuL3N1Yic7XG5pbXBvcnQgTWVnYSBmcm9tICcuL21lZ2EnO1xuXG5jb25zdCBOYXYgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBpbnZlcnNlLCB2ZXJ0aWNhbGx5LCByaWdodCwgc3ViIH0pID0+XG4gICAgc3ViICYmIHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaW52ZXJzZSA/IGZhZGUodGhlbWUuY29sb3IsIDg1KSA6ICcjRkZGRkZGJyxcbiAgICAgIGJvcmRlcjogYm9yZGVyKHRoZW1lLCBpbnZlcnNlID8gdGhlbWUuY29sb3IgOiB0aGVtZS5kYXJrNCksXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogIXZlcnRpY2FsbHkgPyAnMTAwJScgOiAtdGhlbWUuYm9yZGVyV2lkdGgsXG4gICAgICBsZWZ0OiAhcmlnaHQgJiYgKHZlcnRpY2FsbHkgPyAnMTAwJScgOiAwKSxcbiAgICAgIHJpZ2h0OiByaWdodCAmJiAoIXZlcnRpY2FsbHkgPyAwIDogJzEwMCUnKSxcbiAgICAgIHpJbmRleDogMTAsXG4gICAgICAnPiBkaXYnOiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgfSxcbiAgICAgIGlmTWluaToge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgICAgcmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplU21hbGwsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaW52ZXJzZSAmJiB0aGVtZS5kYXJrNSxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gICh7IG1lZ2EsIHN1YiwgdmVydGljYWxseSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+XG4gICAgbWVnYSAmJiBtZWdhKHsgbWVnYSwgc3ViLCB2ZXJ0aWNhbGx5LCBjaGlsZHJlbiwgLi4ucHJvcHMgfSlcbiAgICAgID8gPE1lZ2Egey4uLnByb3BzfSAvPlxuICAgICAgOiA8U3ViIHsuLi5wcm9wc30gdmVydGljYWxseT17c3ViIHx8IHZlcnRpY2FsbHl9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1N1Yj4sXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5OYXYuZGlzcGxheU5hbWUgPSAnTmF2YmFyLk5hdic7XG5OYXYucHJvcFR5cGVzID0ge1xuICAvKiogQXJyYXkgb2YgcGFnZS1vYmplY3RzICovXG4gIHBhZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHBhdGhuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIH0pXG4gICksXG4gIC8qKiBhbGlnbnMgbmF2LWl0ZW1zIHJpZ2h0ICovXG4gIHJpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5OYXYuZGVmYXVsdFByb3BzID0ge1xuICBwYWdlczogW10sXG4gIHJpZ2h0OiBmYWxzZSxcbn07XG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXX0=
