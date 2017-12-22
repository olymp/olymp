import 'antd/lib/select/style';
import _Select3 from 'antd/lib/select';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/select/style';
import _Select2 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import tinycolor from 'tinycolor2';
import { withColors } from '../decorators';
import FaMagic from 'olymp-icons/lib/fa-magic';


var ColorPicker = null;
if (typeof document !== 'undefined') {
  // ColorPicker = require('@mapbox/react-colorpickr');
}

var hasNativePicker = function hasNativePicker() {
  if (!ColorPicker) {
    return true;
  }
  if (typeof document === 'undefined') {
    return true;
  }
  if (!document.createElement) {
    return true;
  }
  var i = document.createElement('input');
  i.setAttribute('type', 'color');
  return i.type !== 'text';
};

var _ref2 = React.createElement(
  _Select3.Option,
  { value: 'other', key: 'other' },
  React.createElement(
    'span',
    { className: 'react-custom-trigger' },
    'Eigene Farbe'
  )
);

var ColorEditor = function ColorEditor(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      _ref$colors = _ref.colors,
      colors = _ref$colors === undefined ? [] : _ref$colors,
      rest = _objectWithoutProperties(_ref, ['value', 'onChange', 'colors']);

  var newColors = [].concat(_toConsumableArray(colors));
  if (!value) {
    value = '#000000';
  }

  var isOwnColor = void 0;
  if (value && value !== 'other') {
    var valueIndex = colors.findIndex(function (color) {
      return tinycolor(value).toRgbString() === tinycolor(color.color).toRgbString();
    });

    isOwnColor = valueIndex === -1;

    if (isOwnColor) {
      newColors.push({ color: value, name: value });
    }
  }

  var select = void 0;
  if (colors.length) {
    select = React.createElement(
      _Select2,
      _extends({
        showSearch: true,
        value: value && tinycolor(value).toRgbString()
      }, rest, {
        filterOption: function filterOption(input, option) {
          return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }),
      newColors.map(function (color, i) {
        return React.createElement(
          _Select.Option,
          { value: tinycolor(color.color).toRgbString(), key: i },
          React.createElement('i', {
            className: 'fa fa-square',
            style: { color: tinycolor(color.color).toRgbString() }
          }),
          ' ',
          color.name
        );
      }),
      _ref2
    );
  }

  // Show Picker
  var picker = void 0;
  if (!colors.length || value === 'other' || isOwnColor) {
    if (hasNativePicker()) {
      picker = React.createElement(_Input, {
        type: 'color',
        style: { width: 100 },
        value: tinycolor(value).toHexString(),
        defaultValue: tinycolor(value).toHexString(),
        onChange: onChange
      });
    } else {
      picker = React.createElement(ColorPicker, _extends({}, rest, { value: value }));
    }
  }

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      select
    ),
    React.createElement(
      'div',
      { style: { marginTop: 2 } },
      picker
    )
  );
};

export default withColors(ColorEditor);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2VkaXRzL2NvbG9yLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInRpbnljb2xvciIsIndpdGhDb2xvcnMiLCJDb2xvclBpY2tlciIsImRvY3VtZW50IiwiaGFzTmF0aXZlUGlja2VyIiwiY3JlYXRlRWxlbWVudCIsImkiLCJzZXRBdHRyaWJ1dGUiLCJ0eXBlIiwiQ29sb3JFZGl0b3IiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiY29sb3JzIiwicmVzdCIsIm5ld0NvbG9ycyIsImlzT3duQ29sb3IiLCJ2YWx1ZUluZGV4IiwiZmluZEluZGV4IiwidG9SZ2JTdHJpbmciLCJjb2xvciIsInB1c2giLCJuYW1lIiwic2VsZWN0IiwibGVuZ3RoIiwiaW5wdXQiLCJvcHRpb24iLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJtYXAiLCJwaWNrZXIiLCJ3aWR0aCIsInRvSGV4U3RyaW5nIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUVBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxVQUFULFFBQTJCLGVBQTNCOzs7O0FBR0EsSUFBTUMsY0FBYyxJQUFwQjtBQUNBLElBQUksT0FBT0MsUUFBUCxLQUFvQixXQUF4QixFQUFxQztBQUNuQztBQUNEOztBQUVELElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixNQUFJLENBQUNGLFdBQUwsRUFBa0I7QUFDaEIsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxNQUFJLE9BQU9DLFFBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkMsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxNQUFJLENBQUNBLFNBQVNFLGFBQWQsRUFBNkI7QUFDM0IsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxNQUFNQyxJQUFJSCxTQUFTRSxhQUFULENBQXVCLE9BQXZCLENBQVY7QUFDQUMsSUFBRUMsWUFBRixDQUFlLE1BQWYsRUFBdUIsT0FBdkI7QUFD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aWxlIjoicGFja2FnZXMvdWkvZWRpdHMvY29sb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0LCBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJztcbmltcG9ydCB7IHdpdGhDb2xvcnMgfSBmcm9tICcuLi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IEZhTWFnaWMgfSBmcm9tICdvbHltcC1pY29ucyc7XG5cbmNvbnN0IENvbG9yUGlja2VyID0gbnVsbDtcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIENvbG9yUGlja2VyID0gcmVxdWlyZSgnQG1hcGJveC9yZWFjdC1jb2xvcnBpY2tyJyk7XG59XG5cbmNvbnN0IGhhc05hdGl2ZVBpY2tlciA9ICgpID0+IHtcbiAgaWYgKCFDb2xvclBpY2tlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFkb2N1bWVudC5jcmVhdGVFbGVtZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NvbG9yJyk7XG4gIHJldHVybiBpLnR5cGUgIT09ICd0ZXh0Jztcbn07XG5cbmNvbnN0IENvbG9yRWRpdG9yID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBjb2xvcnMgPSBbXSwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IG5ld0NvbG9ycyA9IFsuLi5jb2xvcnNdO1xuICBpZiAoIXZhbHVlKSB7XG4gICAgdmFsdWUgPSAnIzAwMDAwMCc7XG4gIH1cblxuICBsZXQgaXNPd25Db2xvcjtcbiAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSAnb3RoZXInKSB7XG4gICAgY29uc3QgdmFsdWVJbmRleCA9IGNvbG9ycy5maW5kSW5kZXgoXG4gICAgICBjb2xvciA9PlxuICAgICAgICB0aW55Y29sb3IodmFsdWUpLnRvUmdiU3RyaW5nKCkgPT09IHRpbnljb2xvcihjb2xvci5jb2xvcikudG9SZ2JTdHJpbmcoKVxuICAgICk7XG5cbiAgICBpc093bkNvbG9yID0gdmFsdWVJbmRleCA9PT0gLTE7XG5cbiAgICBpZiAoaXNPd25Db2xvcikge1xuICAgICAgbmV3Q29sb3JzLnB1c2goeyBjb2xvcjogdmFsdWUsIG5hbWU6IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGxldCBzZWxlY3Q7XG4gIGlmIChjb2xvcnMubGVuZ3RoKSB7XG4gICAgc2VsZWN0ID0gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICBzaG93U2VhcmNoXG4gICAgICAgIHZhbHVlPXt2YWx1ZSAmJiB0aW55Y29sb3IodmFsdWUpLnRvUmdiU3RyaW5nKCl9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBmaWx0ZXJPcHRpb249eyhpbnB1dCwgb3B0aW9uKSA9PlxuICAgICAgICAgIG9wdGlvbi52YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPj0gMH1cbiAgICAgID5cbiAgICAgICAge25ld0NvbG9ycy5tYXAoKGNvbG9yLCBpKSA9PlxuICAgICAgICAgICg8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17dGlueWNvbG9yKGNvbG9yLmNvbG9yKS50b1JnYlN0cmluZygpfSBrZXk9e2l9PlxuICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IHRpbnljb2xvcihjb2xvci5jb2xvcikudG9SZ2JTdHJpbmcoKSB9fVxuICAgICAgICAgICAgLz57JyAnfVxuICAgICAgICAgICAge2NvbG9yLm5hbWV9XG4gICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPilcbiAgICAgICAgKX1cblxuICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17J290aGVyJ30ga2V5PXsnb3RoZXInfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWFjdC1jdXN0b20tdHJpZ2dlclwiPkVpZ2VuZSBGYXJiZTwvc3Bhbj5cbiAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgPC9TZWxlY3Q+XG4gICAgKTtcbiAgfVxuXG4gIC8vIFNob3cgUGlja2VyXG4gIGxldCBwaWNrZXI7XG4gIGlmICghY29sb3JzLmxlbmd0aCB8fCB2YWx1ZSA9PT0gJ290aGVyJyB8fCBpc093bkNvbG9yKSB7XG4gICAgaWYgKGhhc05hdGl2ZVBpY2tlcigpKSB7XG4gICAgICBwaWNrZXIgPSAoXG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEwMCB9fVxuICAgICAgICAgIHZhbHVlPXt0aW55Y29sb3IodmFsdWUpLnRvSGV4U3RyaW5nKCl9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aW55Y29sb3IodmFsdWUpLnRvSGV4U3RyaW5nKCl9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGlja2VyID0gPENvbG9yUGlja2VyIHsuLi5yZXN0fSB2YWx1ZT17dmFsdWV9IC8+O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtzZWxlY3R9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAyIH19PlxuICAgICAgICB7cGlja2VyfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29sb3JzKENvbG9yRWRpdG9yKTtcbiJdfQ==
