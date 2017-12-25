import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/input-number/style';
import _InputNumber from 'antd/lib/input-number';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import getRules from '../get-rules';
import layout from '../layout';

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
    })(React.createElement(_InputNumber, _extends({ placeholder: placeholder || label }, rest)))
  );
};
Input.defaultProps = { layout: layout };
export default Input;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy9udW1iZXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0UnVsZXMiLCJsYXlvdXQiLCJJbnB1dCIsIml0ZW0iLCJmaWVsZCIsImxhYmVsIiwiaW5pdGlhbFZhbHVlIiwicnVsZXMiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJyZXN0IiwiZ2V0RmllbGREZWNvcmF0b3IiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUdBLE9BQU9DLFFBQVAsTUFBcUIsY0FBckI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztBQUVBLElBQU1DLFFBQVEsU0FBUkEsS0FBUTtBQUFBLE1BQ1pDLElBRFksUUFDWkEsSUFEWTtBQUFBLE1BRVpDLEtBRlksUUFFWkEsS0FGWTtBQUFBLE1BR1pDLEtBSFksUUFHWkEsS0FIWTtBQUFBLE1BSVpKLE1BSlksUUFJWkEsTUFKWTtBQUFBLE1BS1pLLFlBTFksUUFLWkEsWUFMWTtBQUFBLE1BTVpDLEtBTlksUUFNWkEsS0FOWTtBQUFBLE1BT1pDLFdBUFksUUFPWkEsV0FQWTtBQUFBLE1BUVpDLElBUlksUUFRWkEsSUFSWTtBQUFBLE1BU1RDLElBVFM7O0FBQUEsU0FXWjtBQUFBLFVBQU0sSUFBTjtBQUFBLGVBQVcsS0FBS04sS0FBaEIsRUFBdUIsT0FBT0MsS0FBOUIsSUFBeUNKLE1BQXpDO0FBQ0dRLFNBQUtFLGlCQUFMLENBQXVCUCxLQUF2QixFQUE4QjtBQUM3QkUsb0JBQWMsS0FBSUgsSUFBSixFQUFVQyxLQUFWLENBRGU7QUFFN0JHLGFBQU9QLFNBQVNPLEtBQVQsRUFBZ0JGLEtBQWhCO0FBRnNCLEtBQTlCLEVBR0UsNkNBQWEsYUFBYUcsZUFBZUgsS0FBekMsSUFBb0RLLElBQXBELEVBSEY7QUFESCxHQVhZO0FBQUEsQ0FBZDtBQWtCQVIsTUFBTVUsWUFBTixHQUFxQixFQUFFWCxjQUFGLEVBQXJCO0FBQ0EsZUFBZUMsS0FBZiIsImZpbGUiOiJjbXMvcGFnZXMvZWRpdHMvbnVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGdldFJ1bGVzIGZyb20gJy4uL2dldC1ydWxlcyc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5cbmNvbnN0IElucHV0ID0gKHtcbiAgaXRlbSxcbiAgZmllbGQsXG4gIGxhYmVsLFxuICBsYXlvdXQsXG4gIGluaXRpYWxWYWx1ZSxcbiAgcnVsZXMsXG4gIHBsYWNlaG9sZGVyLFxuICBmb3JtLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxGb3JtLkl0ZW0ga2V5PXtmaWVsZH0gbGFiZWw9e2xhYmVsfSB7Li4ubGF5b3V0fT5cbiAgICB7Zm9ybS5nZXRGaWVsZERlY29yYXRvcihmaWVsZCwge1xuICAgICAgaW5pdGlhbFZhbHVlOiBnZXQoaXRlbSwgZmllbGQpLFxuICAgICAgcnVsZXM6IGdldFJ1bGVzKHJ1bGVzLCBsYWJlbCksXG4gICAgfSkoPElucHV0TnVtYmVyIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlciB8fCBsYWJlbH0gey4uLnJlc3R9IC8+KX1cbiAgPC9Gb3JtLkl0ZW0+XG4pO1xuSW5wdXQuZGVmYXVsdFByb3BzID0geyBsYXlvdXQgfTtcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19
