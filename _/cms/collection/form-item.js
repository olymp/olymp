'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _form = require('olymp-ui/form');

var _form2 = _interopRequireDefault(_form);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Div = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    paddingY: theme.space2,
    paddingX: theme.space2,
    '> div.ant-form-item.ant-row.ant-form-item.ant-form-item-no-colon': {
      marginBottom: 0
    }
  };
}, 'div', ['onClick']);

exports.default = function (_ref2) {
  var children = _ref2.children,
      field = _ref2.field,
      props = _objectWithoutProperties(_ref2, ['children', 'field']);

  var label = (0, _get3.default)(field, 'specialFields.label');

  return _react2.default.createElement(
    Div,
    null,
    _react2.default.createElement(
      _form2.default.Item,
      _extends({}, _form.defaultLayout, props, { label: label }),
      children
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2Zvcm0taXRlbS5lczYiXSwibmFtZXMiOlsiRGl2IiwidGhlbWUiLCJwYWRkaW5nWSIsInNwYWNlMiIsInBhZGRpbmdYIiwibWFyZ2luQm90dG9tIiwiY2hpbGRyZW4iLCJmaWVsZCIsInByb3BzIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTUEsTUFBTSxnQ0FDVjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLGNBQVVELE1BQU1FLE1BREY7QUFFZEMsY0FBVUgsTUFBTUUsTUFGRjtBQUdkLHdFQUFvRTtBQUNsRUUsb0JBQWM7QUFEb0Q7QUFIdEQsR0FBaEI7QUFBQSxDQURVLEVBUVYsS0FSVSxFQVNWLENBQUMsU0FBRCxDQVRVLENBQVo7O2tCQVllLGlCQUFtQztBQUFBLE1BQWhDQyxRQUFnQyxTQUFoQ0EsUUFBZ0M7QUFBQSxNQUF0QkMsS0FBc0IsU0FBdEJBLEtBQXNCO0FBQUEsTUFBWkMsS0FBWTs7QUFDaEQsTUFBTUMsUUFBUSxtQkFBSUYsS0FBSixFQUFXLHFCQUFYLENBQWQ7O0FBRUEsU0FDRTtBQUFDLE9BQUQ7QUFBQTtBQUNFO0FBQUEscUJBQU0sSUFBTjtBQUFBLHdDQUFrQ0MsS0FBbEMsSUFBeUMsT0FBT0MsS0FBaEQ7QUFDR0g7QUFESDtBQURGLEdBREY7QUFPRCxDIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL2Zvcm0taXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSwgeyBkZWZhdWx0TGF5b3V0IH0gZnJvbSAnb2x5bXAtdWkvZm9ybSc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IERpdiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2UyLFxuICAgIHBhZGRpbmdYOiB0aGVtZS5zcGFjZTIsXG4gICAgJz4gZGl2LmFudC1mb3JtLWl0ZW0uYW50LXJvdy5hbnQtZm9ybS1pdGVtLmFudC1mb3JtLWl0ZW0tbm8tY29sb24nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICBbJ29uQ2xpY2snXSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCBmaWVsZCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBsYWJlbCA9IGdldChmaWVsZCwgJ3NwZWNpYWxGaWVsZHMubGFiZWwnKTtcblxuICByZXR1cm4gKFxuICAgIDxEaXY+XG4gICAgICA8Rm9ybS5JdGVtIHsuLi5kZWZhdWx0TGF5b3V0fSB7Li4ucHJvcHN9IGxhYmVsPXtsYWJlbH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgIDwvRGl2PlxuICApO1xufTtcbiJdfQ==
