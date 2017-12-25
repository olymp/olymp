import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { layout } from 'olymp-antd';

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy9pbnB1dC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJsYXlvdXQiLCJnZXRSdWxlcyIsIklucHV0IiwiaXRlbSIsImZpZWxkIiwibGFiZWwiLCJpbml0aWFsVmFsdWUiLCJydWxlcyIsInBsYWNlaG9sZGVyIiwiZm9ybSIsInJlc3QiLCJnZXRGaWVsZERlY29yYXRvciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBRUEsU0FBU0MsTUFBVCxRQUF1QixZQUF2Qjs7QUFFQSxPQUFPQyxRQUFQLE1BQXFCLGNBQXJCOztBQUVBLElBQU1DLFFBQVEsU0FBUkEsS0FBUTtBQUFBLE1BQ1pDLElBRFksUUFDWkEsSUFEWTtBQUFBLE1BRVpDLEtBRlksUUFFWkEsS0FGWTtBQUFBLE1BR1pDLEtBSFksUUFHWkEsS0FIWTtBQUFBLE1BSVpMLE1BSlksUUFJWkEsTUFKWTtBQUFBLE1BS1pNLFlBTFksUUFLWkEsWUFMWTtBQUFBLE1BTVpDLEtBTlksUUFNWkEsS0FOWTtBQUFBLE1BT1pDLFdBUFksUUFPWkEsV0FQWTtBQUFBLE1BUVpDLElBUlksUUFRWkEsSUFSWTtBQUFBLE1BU1RDLElBVFM7O0FBQUEsU0FXWjtBQUFBLFVBQU0sSUFBTjtBQUFBLGVBQVcsS0FBS04sS0FBaEIsRUFBdUIsT0FBT0MsS0FBOUIsSUFBeUNMLE1BQXpDO0FBQ0dTLFNBQUtFLGlCQUFMLENBQXVCUCxLQUF2QixFQUE4QjtBQUM3QkUsb0JBQWMsS0FBSUgsSUFBSixFQUFVQyxLQUFWLENBRGU7QUFFN0JHLGFBQU9OLFNBQVNNLEtBQVQsRUFBZ0JGLEtBQWhCO0FBRnNCLEtBQTlCLEVBR0UsdUNBQVUsYUFBYUcsZUFBZUgsS0FBdEMsSUFBaURLLElBQWpELEVBSEY7QUFESCxHQVhZO0FBQUEsQ0FBZDtBQWtCQVIsTUFBTVUsWUFBTixHQUFxQixFQUFFWixjQUFGLEVBQXJCO0FBQ0EsZUFBZUUsS0FBZiIsImZpbGUiOiJjbXMvcGFnZXMvZWRpdHMvaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgYXMgQW50SW5wdXQsIEZvcm0gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGxheW91dCB9IGZyb20gJ29seW1wLWFudGQnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBnZXRSdWxlcyBmcm9tICcuLi9nZXQtcnVsZXMnO1xuXG5jb25zdCBJbnB1dCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsYWJlbCxcbiAgbGF5b3V0LFxuICBpbml0aWFsVmFsdWUsXG4gIHJ1bGVzLFxuICBwbGFjZWhvbGRlcixcbiAgZm9ybSxcbiAgLi4ucmVzdFxufSkgPT4gKFxuICA8Rm9ybS5JdGVtIGtleT17ZmllbGR9IGxhYmVsPXtsYWJlbH0gey4uLmxheW91dH0+XG4gICAge2Zvcm0uZ2V0RmllbGREZWNvcmF0b3IoZmllbGQsIHtcbiAgICAgIGluaXRpYWxWYWx1ZTogZ2V0KGl0ZW0sIGZpZWxkKSxcbiAgICAgIHJ1bGVzOiBnZXRSdWxlcyhydWxlcywgbGFiZWwpLFxuICAgIH0pKDxBbnRJbnB1dCBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgfHwgbGFiZWx9IHsuLi5yZXN0fSAvPil9XG4gIDwvRm9ybS5JdGVtPlxuKTtcbklucHV0LmRlZmF1bHRQcm9wcyA9IHsgbGF5b3V0IH07XG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ==
