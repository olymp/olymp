'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _layout = require('../layout');

var _layout2 = _interopRequireDefault(_layout);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Inner = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    width: '100%',
    height: '100%',
    backgroundColor: theme.light,
    // boxShadow: theme.boxShadow,
    border: '1px solid ' + theme.dark1,
    borderRadius: theme.borderRadius
  };
}, function (p) {
  return _react2.default.createElement(_layout2.default, _extends({ affix: true }, p));
}, []);

exports.default = function (_ref2) {
  var header = _ref2.header,
      footer = _ref2.footer,
      container = _ref2.container,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ['header', 'footer', 'container', 'children']);

  return _react2.default.createElement(
    _modal2.default,
    props,
    _react2.default.createElement(
      Inner,
      null,
      header && _react2.default.createElement(
        _layout2.default.Header,
        { container: container },
        header
      ),
      _react2.default.createElement(
        _layout2.default.Body,
        { container: container },
        children
      ),
      footer && _react2.default.createElement(
        _layout2.default.Footer,
        { container: container },
        footer
      )
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbW9kYWwvZGlhbG9nLmVzNiJdLCJuYW1lcyI6WyJJbm5lciIsInRoZW1lIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaWdodCIsImJvcmRlciIsImRhcmsxIiwiYm9yZGVyUmFkaXVzIiwicCIsImhlYWRlciIsImZvb3RlciIsImNvbnRhaW5lciIsImNoaWxkcmVuIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVEsZ0NBQ1o7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxXQUFPLE1BRE87QUFFZEMsWUFBUSxNQUZNO0FBR2RDLHFCQUFpQkgsTUFBTUksS0FIVDtBQUlkO0FBQ0FDLDJCQUFxQkwsTUFBTU0sS0FMYjtBQU1kQyxrQkFBY1AsTUFBTU87QUFOTixHQUFoQjtBQUFBLENBRFksRUFTWjtBQUFBLFNBQUssMkRBQVEsV0FBUixJQUFrQkMsQ0FBbEIsRUFBTDtBQUFBLENBVFksRUFVWixFQVZZLENBQWQ7O2tCQWFlO0FBQUEsTUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsTUFBV0MsTUFBWCxTQUFXQSxNQUFYO0FBQUEsTUFBbUJDLFNBQW5CLFNBQW1CQSxTQUFuQjtBQUFBLE1BQThCQyxRQUE5QixTQUE4QkEsUUFBOUI7QUFBQSxNQUEyQ0MsS0FBM0M7O0FBQUEsU0FDYjtBQUFBO0FBQVdBLFNBQVg7QUFDRTtBQUFDLFdBQUQ7QUFBQTtBQUNHSixnQkFBVTtBQUFBLHlCQUFRLE1BQVI7QUFBQSxVQUFlLFdBQVdFLFNBQTFCO0FBQXNDRjtBQUF0QyxPQURiO0FBRUU7QUFBQSx5QkFBUSxJQUFSO0FBQUEsVUFBYSxXQUFXRSxTQUF4QjtBQUFvQ0M7QUFBcEMsT0FGRjtBQUdHRixnQkFBVTtBQUFBLHlCQUFRLE1BQVI7QUFBQSxVQUFlLFdBQVdDLFNBQTFCO0FBQXNDRDtBQUF0QztBQUhiO0FBREYsR0FEYTtBQUFBLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9tb2RhbC9kaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5cbmNvbnN0IElubmVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5saWdodCxcbiAgICAvLyBib3hTaGFkb3c6IHRoZW1lLmJveFNoYWRvdyxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5kYXJrMX1gLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLFxuICB9KSxcbiAgcCA9PiA8TGF5b3V0IGFmZml4IHsuLi5wfSAvPixcbiAgW10sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBoZWFkZXIsIGZvb3RlciwgY29udGFpbmVyLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8TW9kYWwgey4uLnByb3BzfT5cbiAgICA8SW5uZXI+XG4gICAgICB7aGVhZGVyICYmIDxMYXlvdXQuSGVhZGVyIGNvbnRhaW5lcj17Y29udGFpbmVyfT57aGVhZGVyfTwvTGF5b3V0LkhlYWRlcj59XG4gICAgICA8TGF5b3V0LkJvZHkgY29udGFpbmVyPXtjb250YWluZXJ9PntjaGlsZHJlbn08L0xheW91dC5Cb2R5PlxuICAgICAge2Zvb3RlciAmJiA8TGF5b3V0LkZvb3RlciBjb250YWluZXI9e2NvbnRhaW5lcn0+e2Zvb3Rlcn08L0xheW91dC5Gb290ZXI+fVxuICAgIDwvSW5uZXI+XG4gIDwvTW9kYWw+XG4pO1xuIl19
