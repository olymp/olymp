import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/select/style';
import _Select2 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { layout } from 'olymp-utils';

import getRules from '../get-rules';

var TagSelect = function TagSelect(_ref) {
  var item = _ref.item,
      field = _ref.field,
      label = _ref.label,
      layout = _ref.layout,
      initialValue = _ref.initialValue,
      rules = _ref.rules,
      placeholder = _ref.placeholder,
      form = _ref.form,
      options = _ref.options,
      rest = _objectWithoutProperties(_ref, ['item', 'field', 'label', 'layout', 'initialValue', 'rules', 'placeholder', 'form', 'options']);

  return React.createElement(
    _Form.Item,
    _extends({ key: field, label: label }, layout),
    form.getFieldDecorator(field, {
      initialValue: _get(item, field || '', []) || [],
      rules: getRules(rules, label)
    })(React.createElement(
      _Select2,
      _extends({
        style: { width: '100%' },
        mode: 'multiple',
        placeholder: placeholder || label
      }, rest),
      options.map(function (value) {
        return React.createElement(
          _Select.Option,
          { key: value },
          value
        );
      })
    ))
  );
};
TagSelect.defaultProps = { layout: layout };
export default TagSelect;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2VkaXRzL3RhZ3MuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwibGF5b3V0IiwiZ2V0UnVsZXMiLCJUYWdTZWxlY3QiLCJpdGVtIiwiZmllbGQiLCJsYWJlbCIsImluaXRpYWxWYWx1ZSIsInJ1bGVzIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwib3B0aW9ucyIsInJlc3QiLCJnZXRGaWVsZERlY29yYXRvciIsIndpZHRoIiwibWFwIiwidmFsdWUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBRUEsU0FBU0MsTUFBVCxRQUF1QixhQUF2Qjs7QUFFQSxPQUFPQyxRQUFQLE1BQXFCLGNBQXJCOztBQUVBLElBQU1DLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQ2hCQyxJQURnQixRQUNoQkEsSUFEZ0I7QUFBQSxNQUVoQkMsS0FGZ0IsUUFFaEJBLEtBRmdCO0FBQUEsTUFHaEJDLEtBSGdCLFFBR2hCQSxLQUhnQjtBQUFBLE1BSWhCTCxNQUpnQixRQUloQkEsTUFKZ0I7QUFBQSxNQUtoQk0sWUFMZ0IsUUFLaEJBLFlBTGdCO0FBQUEsTUFNaEJDLEtBTmdCLFFBTWhCQSxLQU5nQjtBQUFBLE1BT2hCQyxXQVBnQixRQU9oQkEsV0FQZ0I7QUFBQSxNQVFoQkMsSUFSZ0IsUUFRaEJBLElBUmdCO0FBQUEsTUFTaEJDLE9BVGdCLFFBU2hCQSxPQVRnQjtBQUFBLE1BVWJDLElBVmE7O0FBQUEsU0FZaEI7QUFBQSxVQUFNLElBQU47QUFBQSxlQUFXLEtBQUtQLEtBQWhCLEVBQXVCLE9BQU9DLEtBQTlCLElBQXlDTCxNQUF6QztBQUNHUyxTQUFLRyxpQkFBTCxDQUF1QlIsS0FBdkIsRUFBOEI7QUFDN0JFLG9CQUFjLEtBQUlILElBQUosRUFBVUMsU0FBUyxFQUFuQixFQUF1QixFQUF2QixLQUE4QixFQURmO0FBRTdCRyxhQUFPTixTQUFTTSxLQUFULEVBQWdCRixLQUFoQjtBQUZzQixLQUE5QixFQUlDO0FBQUE7QUFBQTtBQUNFLGVBQU8sRUFBRVEsT0FBTyxNQUFULEVBRFQ7QUFFRSxjQUFLLFVBRlA7QUFHRSxxQkFBYUwsZUFBZUg7QUFIOUIsU0FJTU0sSUFKTjtBQU1HRCxjQUFRSSxHQUFSLENBQVk7QUFBQSxlQUNYO0FBQUEsa0JBQVEsTUFBUjtBQUFBLFlBQWUsS0FBS0MsS0FBcEI7QUFBNEJBO0FBQTVCLFNBRFc7QUFBQSxPQUFaO0FBTkgsS0FKRDtBQURILEdBWmdCO0FBQUEsQ0FBbEI7QUE4QkFiLFVBQVVjLFlBQVYsR0FBeUIsRUFBRWhCLGNBQUYsRUFBekI7QUFDQSxlQUFlRSxTQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2VkaXRzL3RhZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0LCBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGdldFJ1bGVzIGZyb20gJy4uL2dldC1ydWxlcyc7XG5cbmNvbnN0IFRhZ1NlbGVjdCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsYWJlbCxcbiAgbGF5b3V0LFxuICBpbml0aWFsVmFsdWUsXG4gIHJ1bGVzLFxuICBwbGFjZWhvbGRlcixcbiAgZm9ybSxcbiAgb3B0aW9ucyxcbiAgLi4ucmVzdFxufSkgPT4gKFxuICA8Rm9ybS5JdGVtIGtleT17ZmllbGR9IGxhYmVsPXtsYWJlbH0gey4uLmxheW91dH0+XG4gICAge2Zvcm0uZ2V0RmllbGREZWNvcmF0b3IoZmllbGQsIHtcbiAgICAgIGluaXRpYWxWYWx1ZTogZ2V0KGl0ZW0sIGZpZWxkIHx8ICcnLCBbXSkgfHwgW10sXG4gICAgICBydWxlczogZ2V0UnVsZXMocnVsZXMsIGxhYmVsKSxcbiAgICB9KShcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgfHwgbGFiZWx9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICB7b3B0aW9ucy5tYXAodmFsdWUgPT4gKFxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17dmFsdWV9Pnt2YWx1ZX08L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9TZWxlY3Q+LFxuICAgICl9XG4gIDwvRm9ybS5JdGVtPlxuKTtcblRhZ1NlbGVjdC5kZWZhdWx0UHJvcHMgPSB7IGxheW91dCB9O1xuZXhwb3J0IGRlZmF1bHQgVGFnU2VsZWN0O1xuIl19
