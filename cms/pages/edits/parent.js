import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/tree-select/style';
import _TreeSelect from 'antd/lib/tree-select';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { layout } from 'olymp-utils';
import { withPropsOnChange } from 'recompose';
import getRules from '../get-rules';

var NullableTree = withPropsOnChange(['onChange'], function (_ref) {
  var _onChange = _ref.onChange;
  return {
    onChange: function onChange(x) {
      return _onChange(x || null);
    }
  };
})(_TreeSelect);

var ParentSelect = function ParentSelect(_ref2) {
  var item = _ref2.item,
      field = _ref2.field,
      label = _ref2.label,
      layout = _ref2.layout,
      initialValue = _ref2.initialValue,
      rules = _ref2.rules,
      placeholder = _ref2.placeholder,
      form = _ref2.form,
      rest = _objectWithoutProperties(_ref2, ['item', 'field', 'label', 'layout', 'initialValue', 'rules', 'placeholder', 'form']);

  return React.createElement(
    _Form.Item,
    _extends({ key: field, label: label }, layout),
    form.getFieldDecorator(field, {
      initialValue: item && item[field] ? item[field] : initialValue,
      rules: getRules(rules, label)
    })(React.createElement(NullableTree, _extends({
      placeholder: placeholder || label,
      style: { width: '100%' },
      allowClear: true,
      onChange: function onChange(x) {
        return console.log(x);
      },
      dropdownStyle: { maxHeight: 400, overflowY: 'auto' }
    }, rest)))
  );
};
ParentSelect.defaultProps = { layout: layout };
export default ParentSelect;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2VkaXRzL3BhcmVudC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJsYXlvdXQiLCJ3aXRoUHJvcHNPbkNoYW5nZSIsImdldFJ1bGVzIiwiTnVsbGFibGVUcmVlIiwib25DaGFuZ2UiLCJ4IiwiUGFyZW50U2VsZWN0IiwiaXRlbSIsImZpZWxkIiwibGFiZWwiLCJpbml0aWFsVmFsdWUiLCJydWxlcyIsInBsYWNlaG9sZGVyIiwiZm9ybSIsInJlc3QiLCJnZXRGaWVsZERlY29yYXRvciIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsIm1heEhlaWdodCIsIm92ZXJmbG93WSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjs7QUFFQSxTQUFTQyxNQUFULFFBQXVCLGFBQXZCO0FBQ0EsU0FBU0MsaUJBQVQsUUFBa0MsV0FBbEM7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGNBQXJCOztBQUVBLElBQU1DLGVBQWVGLGtCQUFrQixDQUFDLFVBQUQsQ0FBbEIsRUFBZ0M7QUFBQSxNQUFHRyxTQUFILFFBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUN0RUEsY0FBVTtBQUFBLGFBQUtBLFVBQVNDLEtBQUssSUFBZCxDQUFMO0FBQUE7QUFENEQsR0FBbkI7QUFBQSxDQUFoQyxjQUFyQjs7QUFJQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxNQUNuQkMsSUFEbUIsU0FDbkJBLElBRG1CO0FBQUEsTUFFbkJDLEtBRm1CLFNBRW5CQSxLQUZtQjtBQUFBLE1BR25CQyxLQUhtQixTQUduQkEsS0FIbUI7QUFBQSxNQUluQlQsTUFKbUIsU0FJbkJBLE1BSm1CO0FBQUEsTUFLbkJVLFlBTG1CLFNBS25CQSxZQUxtQjtBQUFBLE1BTW5CQyxLQU5tQixTQU1uQkEsS0FObUI7QUFBQSxNQU9uQkMsV0FQbUIsU0FPbkJBLFdBUG1CO0FBQUEsTUFRbkJDLElBUm1CLFNBUW5CQSxJQVJtQjtBQUFBLE1BU2hCQyxJQVRnQjs7QUFBQSxTQVduQjtBQUFBLFVBQU0sSUFBTjtBQUFBLGVBQVcsS0FBS04sS0FBaEIsRUFBdUIsT0FBT0MsS0FBOUIsSUFBeUNULE1BQXpDO0FBQ0dhLFNBQUtFLGlCQUFMLENBQXVCUCxLQUF2QixFQUE4QjtBQUM3QkUsb0JBQWNILFFBQVFBLEtBQUtDLEtBQUwsQ0FBUixHQUFzQkQsS0FBS0MsS0FBTCxDQUF0QixHQUFvQ0UsWUFEckI7QUFFN0JDLGFBQU9ULFNBQVNTLEtBQVQsRUFBZ0JGLEtBQWhCO0FBRnNCLEtBQTlCLEVBSUMsb0JBQUMsWUFBRDtBQUNFLG1CQUFhRyxlQUFlSCxLQUQ5QjtBQUVFLGFBQU8sRUFBRU8sT0FBTyxNQUFULEVBRlQ7QUFHRSxzQkFIRjtBQUlFLGdCQUFVO0FBQUEsZUFBS0MsUUFBUUMsR0FBUixDQUFZYixDQUFaLENBQUw7QUFBQSxPQUpaO0FBS0UscUJBQWUsRUFBRWMsV0FBVyxHQUFiLEVBQWtCQyxXQUFXLE1BQTdCO0FBTGpCLE9BTU1OLElBTk4sRUFKRDtBQURILEdBWG1CO0FBQUEsQ0FBckI7QUEyQkFSLGFBQWFlLFlBQWIsR0FBNEIsRUFBRXJCLGNBQUYsRUFBNUI7QUFDQSxlQUFlTSxZQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2VkaXRzL3BhcmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUcmVlU2VsZWN0LCBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgeyB3aXRoUHJvcHNPbkNoYW5nZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgZ2V0UnVsZXMgZnJvbSAnLi4vZ2V0LXJ1bGVzJztcblxuY29uc3QgTnVsbGFibGVUcmVlID0gd2l0aFByb3BzT25DaGFuZ2UoWydvbkNoYW5nZSddLCAoeyBvbkNoYW5nZSB9KSA9PiAoe1xuICBvbkNoYW5nZTogeCA9PiBvbkNoYW5nZSh4IHx8IG51bGwpLFxufSkpKFRyZWVTZWxlY3QpO1xuXG5jb25zdCBQYXJlbnRTZWxlY3QgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGFiZWwsXG4gIGxheW91dCxcbiAgaW5pdGlhbFZhbHVlLFxuICBydWxlcyxcbiAgcGxhY2Vob2xkZXIsXG4gIGZvcm0sXG4gIC4uLnJlc3Rcbn0pID0+IChcbiAgPEZvcm0uSXRlbSBrZXk9e2ZpZWxkfSBsYWJlbD17bGFiZWx9IHsuLi5sYXlvdXR9PlxuICAgIHtmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGZpZWxkLCB7XG4gICAgICBpbml0aWFsVmFsdWU6IGl0ZW0gJiYgaXRlbVtmaWVsZF0gPyBpdGVtW2ZpZWxkXSA6IGluaXRpYWxWYWx1ZSxcbiAgICAgIHJ1bGVzOiBnZXRSdWxlcyhydWxlcywgbGFiZWwpLFxuICAgIH0pKFxuICAgICAgPE51bGxhYmxlVHJlZVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgfHwgbGFiZWx9XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgYWxsb3dDbGVhclxuICAgICAgICBvbkNoYW5nZT17eCA9PiBjb25zb2xlLmxvZyh4KX1cbiAgICAgICAgZHJvcGRvd25TdHlsZT17eyBtYXhIZWlnaHQ6IDQwMCwgb3ZlcmZsb3dZOiAnYXV0bycgfX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPixcbiAgICApfVxuICA8L0Zvcm0uSXRlbT5cbik7XG5QYXJlbnRTZWxlY3QuZGVmYXVsdFByb3BzID0geyBsYXlvdXQgfTtcbmV4cG9ydCBkZWZhdWx0IFBhcmVudFNlbGVjdDtcbiJdfQ==
