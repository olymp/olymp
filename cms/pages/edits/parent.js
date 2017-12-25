import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/tree-select/style';
import _TreeSelect from 'antd/lib/tree-select';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { layout } from 'olymp-antd';
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy9wYXJlbnQuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwibGF5b3V0Iiwid2l0aFByb3BzT25DaGFuZ2UiLCJnZXRSdWxlcyIsIk51bGxhYmxlVHJlZSIsIm9uQ2hhbmdlIiwieCIsIlBhcmVudFNlbGVjdCIsIml0ZW0iLCJmaWVsZCIsImxhYmVsIiwiaW5pdGlhbFZhbHVlIiwicnVsZXMiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJyZXN0IiwiZ2V0RmllbGREZWNvcmF0b3IiLCJ3aWR0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBRUEsU0FBU0MsTUFBVCxRQUF1QixZQUF2QjtBQUNBLFNBQVNDLGlCQUFULFFBQWtDLFdBQWxDO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixjQUFyQjs7QUFFQSxJQUFNQyxlQUFlRixrQkFBa0IsQ0FBQyxVQUFELENBQWxCLEVBQWdDO0FBQUEsTUFBR0csU0FBSCxRQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFDdEVBLGNBQVU7QUFBQSxhQUFLQSxVQUFTQyxLQUFLLElBQWQsQ0FBTDtBQUFBO0FBRDRELEdBQW5CO0FBQUEsQ0FBaEMsY0FBckI7O0FBSUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsTUFDbkJDLElBRG1CLFNBQ25CQSxJQURtQjtBQUFBLE1BRW5CQyxLQUZtQixTQUVuQkEsS0FGbUI7QUFBQSxNQUduQkMsS0FIbUIsU0FHbkJBLEtBSG1CO0FBQUEsTUFJbkJULE1BSm1CLFNBSW5CQSxNQUptQjtBQUFBLE1BS25CVSxZQUxtQixTQUtuQkEsWUFMbUI7QUFBQSxNQU1uQkMsS0FObUIsU0FNbkJBLEtBTm1CO0FBQUEsTUFPbkJDLFdBUG1CLFNBT25CQSxXQVBtQjtBQUFBLE1BUW5CQyxJQVJtQixTQVFuQkEsSUFSbUI7QUFBQSxNQVNoQkMsSUFUZ0I7O0FBQUEsU0FXbkI7QUFBQSxVQUFNLElBQU47QUFBQSxlQUFXLEtBQUtOLEtBQWhCLEVBQXVCLE9BQU9DLEtBQTlCLElBQXlDVCxNQUF6QztBQUNHYSxTQUFLRSxpQkFBTCxDQUF1QlAsS0FBdkIsRUFBOEI7QUFDN0JFLG9CQUFjSCxRQUFRQSxLQUFLQyxLQUFMLENBQVIsR0FBc0JELEtBQUtDLEtBQUwsQ0FBdEIsR0FBb0NFLFlBRHJCO0FBRTdCQyxhQUFPVCxTQUFTUyxLQUFULEVBQWdCRixLQUFoQjtBQUZzQixLQUE5QixFQUlDLG9CQUFDLFlBQUQ7QUFDRSxtQkFBYUcsZUFBZUgsS0FEOUI7QUFFRSxhQUFPLEVBQUVPLE9BQU8sTUFBVCxFQUZUO0FBR0Usc0JBSEY7QUFJRSxnQkFBVTtBQUFBLGVBQUtDLFFBQVFDLEdBQVIsQ0FBWWIsQ0FBWixDQUFMO0FBQUEsT0FKWjtBQUtFLHFCQUFlLEVBQUVjLFdBQVcsR0FBYixFQUFrQkMsV0FBVyxNQUE3QjtBQUxqQixPQU1NTixJQU5OLEVBSkQ7QUFESCxHQVhtQjtBQUFBLENBQXJCO0FBMkJBUixhQUFhZSxZQUFiLEdBQTRCLEVBQUVyQixjQUFGLEVBQTVCO0FBQ0EsZUFBZU0sWUFBZiIsImZpbGUiOiJjbXMvcGFnZXMvZWRpdHMvcGFyZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyZWVTZWxlY3QsIEZvcm0gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGxheW91dCB9IGZyb20gJ29seW1wLWFudGQnO1xuaW1wb3J0IHsgd2l0aFByb3BzT25DaGFuZ2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IGdldFJ1bGVzIGZyb20gJy4uL2dldC1ydWxlcyc7XG5cbmNvbnN0IE51bGxhYmxlVHJlZSA9IHdpdGhQcm9wc09uQ2hhbmdlKFsnb25DaGFuZ2UnXSwgKHsgb25DaGFuZ2UgfSkgPT4gKHtcbiAgb25DaGFuZ2U6IHggPT4gb25DaGFuZ2UoeCB8fCBudWxsKSxcbn0pKShUcmVlU2VsZWN0KTtcblxuY29uc3QgUGFyZW50U2VsZWN0ID0gKHtcbiAgaXRlbSxcbiAgZmllbGQsXG4gIGxhYmVsLFxuICBsYXlvdXQsXG4gIGluaXRpYWxWYWx1ZSxcbiAgcnVsZXMsXG4gIHBsYWNlaG9sZGVyLFxuICBmb3JtLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxGb3JtLkl0ZW0ga2V5PXtmaWVsZH0gbGFiZWw9e2xhYmVsfSB7Li4ubGF5b3V0fT5cbiAgICB7Zm9ybS5nZXRGaWVsZERlY29yYXRvcihmaWVsZCwge1xuICAgICAgaW5pdGlhbFZhbHVlOiBpdGVtICYmIGl0ZW1bZmllbGRdID8gaXRlbVtmaWVsZF0gOiBpbml0aWFsVmFsdWUsXG4gICAgICBydWxlczogZ2V0UnVsZXMocnVsZXMsIGxhYmVsKSxcbiAgICB9KShcbiAgICAgIDxOdWxsYWJsZVRyZWVcbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyIHx8IGxhYmVsfVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgIGFsbG93Q2xlYXJcbiAgICAgICAgb25DaGFuZ2U9e3ggPT4gY29uc29sZS5sb2coeCl9XG4gICAgICAgIGRyb3Bkb3duU3R5bGU9e3sgbWF4SGVpZ2h0OiA0MDAsIG92ZXJmbG93WTogJ2F1dG8nIH19XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz4sXG4gICAgKX1cbiAgPC9Gb3JtLkl0ZW0+XG4pO1xuUGFyZW50U2VsZWN0LmRlZmF1bHRQcm9wcyA9IHsgbGF5b3V0IH07XG5leHBvcnQgZGVmYXVsdCBQYXJlbnRTZWxlY3Q7XG4iXX0=
