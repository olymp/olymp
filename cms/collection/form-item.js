import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import Form, { defaultLayout } from 'olymp-ui/form';
import { createComponent } from 'olymp-fela';


var Div = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    paddingY: theme.space2,
    paddingX: theme.space2,
    '> div.ant-form-item.ant-row.ant-form-item.ant-form-item-no-colon': {
      marginBottom: 0
    }
  };
}, 'div', ['onClick']);

export default (function (_ref2) {
  var children = _ref2.children,
      field = _ref2.field,
      props = _objectWithoutProperties(_ref2, ['children', 'field']);

  var label = _get(field, 'specialFields.label');

  return React.createElement(
    Div,
    null,
    React.createElement(
      Form.Item,
      _extends({}, defaultLayout, props, { label: label }),
      children
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZm9ybS1pdGVtLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm0iLCJkZWZhdWx0TGF5b3V0IiwiY3JlYXRlQ29tcG9uZW50IiwiRGl2IiwidGhlbWUiLCJwYWRkaW5nWSIsInNwYWNlMiIsInBhZGRpbmdYIiwibWFyZ2luQm90dG9tIiwiY2hpbGRyZW4iLCJmaWVsZCIsInByb3BzIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxJQUFQLElBQWVDLGFBQWYsUUFBb0MsZUFBcEM7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDOzs7QUFHQSxJQUFNQyxNQUFNRCxnQkFDVjtBQUFBLE1BQUdFLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLGNBQVVELE1BQU1FLE1BREY7QUFFZEMsY0FBVUgsTUFBTUUsTUFGRjtBQUdkLHdFQUFvRTtBQUNsRUUsb0JBQWM7QUFEb0Q7QUFIdEQsR0FBaEI7QUFBQSxDQURVLEVBUVYsS0FSVSxFQVNWLENBQUMsU0FBRCxDQVRVLENBQVo7O0FBWUEsZ0JBQWUsaUJBQW1DO0FBQUEsTUFBaENDLFFBQWdDLFNBQWhDQSxRQUFnQztBQUFBLE1BQXRCQyxLQUFzQixTQUF0QkEsS0FBc0I7QUFBQSxNQUFaQyxLQUFZOztBQUNoRCxNQUFNQyxRQUFRLEtBQUlGLEtBQUosRUFBVyxxQkFBWCxDQUFkOztBQUVBLFNBQ0U7QUFBQyxPQUFEO0FBQUE7QUFDRTtBQUFDLFVBQUQsQ0FBTSxJQUFOO0FBQUEsbUJBQWVULGFBQWYsRUFBa0NVLEtBQWxDLElBQXlDLE9BQU9DLEtBQWhEO0FBQ0dIO0FBREg7QUFERixHQURGO0FBT0QsQ0FWRCIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL2Zvcm0taXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSwgeyBkZWZhdWx0TGF5b3V0IH0gZnJvbSAnb2x5bXAtdWkvZm9ybSc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IERpdiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2UyLFxuICAgIHBhZGRpbmdYOiB0aGVtZS5zcGFjZTIsXG4gICAgJz4gZGl2LmFudC1mb3JtLWl0ZW0uYW50LXJvdy5hbnQtZm9ybS1pdGVtLmFudC1mb3JtLWl0ZW0tbm8tY29sb24nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICBbJ29uQ2xpY2snXSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCBmaWVsZCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBsYWJlbCA9IGdldChmaWVsZCwgJ3NwZWNpYWxGaWVsZHMubGFiZWwnKTtcblxuICByZXR1cm4gKFxuICAgIDxEaXY+XG4gICAgICA8Rm9ybS5JdGVtIHsuLi5kZWZhdWx0TGF5b3V0fSB7Li4ucHJvcHN9IGxhYmVsPXtsYWJlbH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgIDwvRGl2PlxuICApO1xufTtcbiJdfQ==
