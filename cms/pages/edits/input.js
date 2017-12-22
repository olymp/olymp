import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { layout } from 'olymp-utils';

import getRules from '../get-rules';

var Input = function Input(_ref) {
  var item = _ref.item,
      field = _ref.field,
      label = _ref.label,
      layout = _ref.layout,
      initialValue = _ref.initialValue,
      rules = _ref.rules,
      placeholder = _ref.placeholder,
      form = _ref.form,
      rest = _objectWithoutProperties(_ref, ['item', 'field', 'label', 'layout', 'initialValue', 'rules', 'placeholder', 'form']);

  return React.createElement(
    _Form.Item,
    _extends({ key: field, label: label }, layout),
    form.getFieldDecorator(field, {
      initialValue: _get(item, field),
      rules: getRules(rules, label)
    })(React.createElement(_Input, _extends({ placeholder: placeholder || label }, rest)))
  );
};
Input.defaultProps = { layout: layout };
export default Input;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2VkaXRzL2lucHV0LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImxheW91dCIsImdldFJ1bGVzIiwiSW5wdXQiLCJpdGVtIiwiZmllbGQiLCJsYWJlbCIsImluaXRpYWxWYWx1ZSIsInJ1bGVzIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwicmVzdCIsImdldEZpZWxkRGVjb3JhdG9yIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjs7QUFFQSxTQUFTQyxNQUFULFFBQXVCLGFBQXZCOztBQUVBLE9BQU9DLFFBQVAsTUFBcUIsY0FBckI7O0FBRUEsSUFBTUMsUUFBUSxTQUFSQSxLQUFRO0FBQUEsTUFDWkMsSUFEWSxRQUNaQSxJQURZO0FBQUEsTUFFWkMsS0FGWSxRQUVaQSxLQUZZO0FBQUEsTUFHWkMsS0FIWSxRQUdaQSxLQUhZO0FBQUEsTUFJWkwsTUFKWSxRQUlaQSxNQUpZO0FBQUEsTUFLWk0sWUFMWSxRQUtaQSxZQUxZO0FBQUEsTUFNWkMsS0FOWSxRQU1aQSxLQU5ZO0FBQUEsTUFPWkMsV0FQWSxRQU9aQSxXQVBZO0FBQUEsTUFRWkMsSUFSWSxRQVFaQSxJQVJZO0FBQUEsTUFTVEMsSUFUUzs7QUFBQSxTQVdaO0FBQUEsVUFBTSxJQUFOO0FBQUEsZUFBVyxLQUFLTixLQUFoQixFQUF1QixPQUFPQyxLQUE5QixJQUF5Q0wsTUFBekM7QUFDR1MsU0FBS0UsaUJBQUwsQ0FBdUJQLEtBQXZCLEVBQThCO0FBQzdCRSxvQkFBYyxLQUFJSCxJQUFKLEVBQVVDLEtBQVYsQ0FEZTtBQUU3QkcsYUFBT04sU0FBU00sS0FBVCxFQUFnQkYsS0FBaEI7QUFGc0IsS0FBOUIsRUFHRSx1Q0FBVSxhQUFhRyxlQUFlSCxLQUF0QyxJQUFpREssSUFBakQsRUFIRjtBQURILEdBWFk7QUFBQSxDQUFkO0FBa0JBUixNQUFNVSxZQUFOLEdBQXFCLEVBQUVaLGNBQUYsRUFBckI7QUFDQSxlQUFlRSxLQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2VkaXRzL2lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0IGFzIEFudElucHV0LCBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGdldFJ1bGVzIGZyb20gJy4uL2dldC1ydWxlcyc7XG5cbmNvbnN0IElucHV0ID0gKHtcbiAgaXRlbSxcbiAgZmllbGQsXG4gIGxhYmVsLFxuICBsYXlvdXQsXG4gIGluaXRpYWxWYWx1ZSxcbiAgcnVsZXMsXG4gIHBsYWNlaG9sZGVyLFxuICBmb3JtLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxGb3JtLkl0ZW0ga2V5PXtmaWVsZH0gbGFiZWw9e2xhYmVsfSB7Li4ubGF5b3V0fT5cbiAgICB7Zm9ybS5nZXRGaWVsZERlY29yYXRvcihmaWVsZCwge1xuICAgICAgaW5pdGlhbFZhbHVlOiBnZXQoaXRlbSwgZmllbGQpLFxuICAgICAgcnVsZXM6IGdldFJ1bGVzKHJ1bGVzLCBsYWJlbCksXG4gICAgfSkoPEFudElucHV0IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlciB8fCBsYWJlbH0gey4uLnJlc3R9IC8+KX1cbiAgPC9Gb3JtLkl0ZW0+XG4pO1xuSW5wdXQuZGVmYXVsdFByb3BzID0geyBsYXlvdXQgfTtcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19
