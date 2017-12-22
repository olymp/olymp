import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/input-number/style';
import _InputNumber from 'antd/lib/input-number';
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
    })(React.createElement(_InputNumber, _extends({ placeholder: placeholder || label }, rest)))
  );
};
Input.defaultProps = { layout: layout };
export default Input;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2VkaXRzL251bWJlci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJsYXlvdXQiLCJnZXRSdWxlcyIsIklucHV0IiwiaXRlbSIsImZpZWxkIiwibGFiZWwiLCJpbml0aWFsVmFsdWUiLCJydWxlcyIsInBsYWNlaG9sZGVyIiwiZm9ybSIsInJlc3QiLCJnZXRGaWVsZERlY29yYXRvciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBRUEsU0FBU0MsTUFBVCxRQUF1QixhQUF2Qjs7QUFFQSxPQUFPQyxRQUFQLE1BQXFCLGNBQXJCOztBQUVBLElBQU1DLFFBQVEsU0FBUkEsS0FBUTtBQUFBLE1BQ1pDLElBRFksUUFDWkEsSUFEWTtBQUFBLE1BRVpDLEtBRlksUUFFWkEsS0FGWTtBQUFBLE1BR1pDLEtBSFksUUFHWkEsS0FIWTtBQUFBLE1BSVpMLE1BSlksUUFJWkEsTUFKWTtBQUFBLE1BS1pNLFlBTFksUUFLWkEsWUFMWTtBQUFBLE1BTVpDLEtBTlksUUFNWkEsS0FOWTtBQUFBLE1BT1pDLFdBUFksUUFPWkEsV0FQWTtBQUFBLE1BUVpDLElBUlksUUFRWkEsSUFSWTtBQUFBLE1BU1RDLElBVFM7O0FBQUEsU0FXWjtBQUFBLFVBQU0sSUFBTjtBQUFBLGVBQVcsS0FBS04sS0FBaEIsRUFBdUIsT0FBT0MsS0FBOUIsSUFBeUNMLE1BQXpDO0FBQ0dTLFNBQUtFLGlCQUFMLENBQXVCUCxLQUF2QixFQUE4QjtBQUM3QkUsb0JBQWMsS0FBSUgsSUFBSixFQUFVQyxLQUFWLENBRGU7QUFFN0JHLGFBQU9OLFNBQVNNLEtBQVQsRUFBZ0JGLEtBQWhCO0FBRnNCLEtBQTlCLEVBR0UsNkNBQWEsYUFBYUcsZUFBZUgsS0FBekMsSUFBb0RLLElBQXBELEVBSEY7QUFESCxHQVhZO0FBQUEsQ0FBZDtBQWtCQVIsTUFBTVUsWUFBTixHQUFxQixFQUFFWixjQUFGLEVBQXJCO0FBQ0EsZUFBZUUsS0FBZiIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9lZGl0cy9udW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIEZvcm0gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGxheW91dCB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZ2V0UnVsZXMgZnJvbSAnLi4vZ2V0LXJ1bGVzJztcblxuY29uc3QgSW5wdXQgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGFiZWwsXG4gIGxheW91dCxcbiAgaW5pdGlhbFZhbHVlLFxuICBydWxlcyxcbiAgcGxhY2Vob2xkZXIsXG4gIGZvcm0sXG4gIC4uLnJlc3Rcbn0pID0+IChcbiAgPEZvcm0uSXRlbSBrZXk9e2ZpZWxkfSBsYWJlbD17bGFiZWx9IHsuLi5sYXlvdXR9PlxuICAgIHtmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGZpZWxkLCB7XG4gICAgICBpbml0aWFsVmFsdWU6IGdldChpdGVtLCBmaWVsZCksXG4gICAgICBydWxlczogZ2V0UnVsZXMocnVsZXMsIGxhYmVsKSxcbiAgICB9KSg8SW5wdXROdW1iZXIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyIHx8IGxhYmVsfSB7Li4ucmVzdH0gLz4pfVxuICA8L0Zvcm0uSXRlbT5cbik7XG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7IGxheW91dCB9O1xuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0=
