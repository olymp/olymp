import 'antd/lib/icon/style';
import _Icon3 from 'antd/lib/icon';
import 'antd/lib/icon/style';
import _Icon2 from 'antd/lib/icon';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/select/style';
import _Select4 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select3 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select2 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { layout } from 'olymp-utils';
import getRules from '../get-rules';

var _ref2 = React.createElement(_Icon, { type: 'inbox' });

var _ref3 = React.createElement(_Icon2, { type: 'check' });

var _ref4 = React.createElement(_Icon3, { type: 'delete' });

var StateInput = function StateInput(_ref) {
  var item = _ref.item,
      field = _ref.field,
      label = _ref.label,
      layout = _ref.layout,
      initialValue = _ref.initialValue,
      _ref$rules = _ref.rules,
      rules = _ref$rules === undefined ? ['required'] : _ref$rules,
      placeholder = _ref.placeholder,
      form = _ref.form,
      rest = _objectWithoutProperties(_ref, ['item', 'field', 'label', 'layout', 'initialValue', 'rules', 'placeholder', 'form']);

  return React.createElement(
    _Form.Item,
    _extends({ key: field, label: label }, layout),
    form.getFieldDecorator(field, {
      initialValue: item ? item[field] : undefined,
      rules: getRules(rules, label)
    })(React.createElement(
      _Select4,
      _extends({ style: { width: '100%' } }, rest),
      React.createElement(
        _Select.Option,
        { value: 'DRAFT' },
        React.createElement(
          'b',
          { style: { color: 'blue' } },
          _ref2
        ),
        ' ',
        'Ablage'
      ),
      React.createElement(
        _Select2.Option,
        { value: 'PUBLISHED' },
        React.createElement(
          'b',
          { style: { color: 'green' } },
          _ref3
        ),
        ' ',
        'Ver\xF6ffentlicht'
      ),
      React.createElement(
        _Select3.Option,
        { value: 'REMOVED' },
        React.createElement(
          'b',
          { style: { color: 'red' } },
          _ref4
        ),
        ' ',
        'Gel\xF6scht'
      )
    ))
  );
};
StateInput.defaultProps = { layout: layout };
export default StateInput;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2VkaXRzL3N0YXRlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImxheW91dCIsImdldFJ1bGVzIiwiU3RhdGVJbnB1dCIsIml0ZW0iLCJmaWVsZCIsImxhYmVsIiwiaW5pdGlhbFZhbHVlIiwicnVsZXMiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJyZXN0IiwiZ2V0RmllbGREZWNvcmF0b3IiLCJ1bmRlZmluZWQiLCJ3aWR0aCIsImNvbG9yIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUVBLFNBQVNDLE1BQVQsUUFBdUIsYUFBdkI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGNBQXJCOztZQXFCWSw2QkFBTSxNQUFLLE9BQVgsRzs7WUFNQSw4QkFBTSxNQUFLLE9BQVgsRzs7WUFNQSw4QkFBTSxNQUFLLFFBQVgsRzs7QUEvQlosSUFBTUMsYUFBYSxTQUFiQSxVQUFhO0FBQUEsTUFDakJDLElBRGlCLFFBQ2pCQSxJQURpQjtBQUFBLE1BRWpCQyxLQUZpQixRQUVqQkEsS0FGaUI7QUFBQSxNQUdqQkMsS0FIaUIsUUFHakJBLEtBSGlCO0FBQUEsTUFJakJMLE1BSmlCLFFBSWpCQSxNQUppQjtBQUFBLE1BS2pCTSxZQUxpQixRQUtqQkEsWUFMaUI7QUFBQSx3QkFNakJDLEtBTmlCO0FBQUEsTUFNakJBLEtBTmlCLDhCQU1ULENBQUMsVUFBRCxDQU5TO0FBQUEsTUFPakJDLFdBUGlCLFFBT2pCQSxXQVBpQjtBQUFBLE1BUWpCQyxJQVJpQixRQVFqQkEsSUFSaUI7QUFBQSxNQVNkQyxJQVRjOztBQUFBLFNBV2pCO0FBQUEsVUFBTSxJQUFOO0FBQUEsZUFBVyxLQUFLTixLQUFoQixFQUF1QixPQUFPQyxLQUE5QixJQUF5Q0wsTUFBekM7QUFDR1MsU0FBS0UsaUJBQUwsQ0FBdUJQLEtBQXZCLEVBQThCO0FBQzdCRSxvQkFBY0gsT0FBT0EsS0FBS0MsS0FBTCxDQUFQLEdBQXFCUSxTQUROO0FBRTdCTCxhQUFPTixTQUFTTSxLQUFULEVBQWdCRixLQUFoQjtBQUZzQixLQUE5QixFQUlDO0FBQUE7QUFBQSxpQkFBUSxPQUFPLEVBQUVRLE9BQU8sTUFBVCxFQUFmLElBQXNDSCxJQUF0QztBQUNFO0FBQUEsZ0JBQVEsTUFBUjtBQUFBLFVBQWUsT0FBTSxPQUFyQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE9BQU8sRUFBRUksT0FBTyxNQUFULEVBQVY7QUFBQTtBQUFBLFNBREY7QUFHTyxXQUhQO0FBQUE7QUFBQSxPQURGO0FBT0U7QUFBQSxpQkFBUSxNQUFSO0FBQUEsVUFBZSxPQUFNLFdBQXJCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsT0FBTyxFQUFFQSxPQUFPLE9BQVQsRUFBVjtBQUFBO0FBQUEsU0FERjtBQUdPLFdBSFA7QUFBQTtBQUFBLE9BUEY7QUFhRTtBQUFBLGlCQUFRLE1BQVI7QUFBQSxVQUFlLE9BQU0sU0FBckI7QUFDRTtBQUFBO0FBQUEsWUFBRyxPQUFPLEVBQUVBLE9BQU8sS0FBVCxFQUFWO0FBQUE7QUFBQSxTQURGO0FBR08sV0FIUDtBQUFBO0FBQUE7QUFiRixLQUpEO0FBREgsR0FYaUI7QUFBQSxDQUFuQjtBQXVDQVosV0FBV2EsWUFBWCxHQUEwQixFQUFFZixjQUFGLEVBQTFCO0FBQ0EsZUFBZUUsVUFBZiIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9lZGl0cy9zdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBTZWxlY3QsIEljb24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGxheW91dCB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCBnZXRSdWxlcyBmcm9tICcuLi9nZXQtcnVsZXMnO1xuXG5jb25zdCBTdGF0ZUlucHV0ID0gKHtcbiAgaXRlbSxcbiAgZmllbGQsXG4gIGxhYmVsLFxuICBsYXlvdXQsXG4gIGluaXRpYWxWYWx1ZSxcbiAgcnVsZXMgPSBbJ3JlcXVpcmVkJ10sXG4gIHBsYWNlaG9sZGVyLFxuICBmb3JtLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxGb3JtLkl0ZW0ga2V5PXtmaWVsZH0gbGFiZWw9e2xhYmVsfSB7Li4ubGF5b3V0fT5cbiAgICB7Zm9ybS5nZXRGaWVsZERlY29yYXRvcihmaWVsZCwge1xuICAgICAgaW5pdGlhbFZhbHVlOiBpdGVtID8gaXRlbVtmaWVsZF0gOiB1bmRlZmluZWQsXG4gICAgICBydWxlczogZ2V0UnVsZXMocnVsZXMsIGxhYmVsKSxcbiAgICB9KShcbiAgICAgIDxTZWxlY3Qgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSB7Li4ucmVzdH0+XG4gICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiRFJBRlRcIj5cbiAgICAgICAgICA8YiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19PlxuICAgICAgICAgICAgPEljb24gdHlwZT1cImluYm94XCIgLz5cbiAgICAgICAgICA8L2I+eycgJ31cbiAgICAgICAgICBBYmxhZ2VcbiAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIlBVQkxJU0hFRFwiPlxuICAgICAgICAgIDxiIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PlxuICAgICAgICAgICAgPEljb24gdHlwZT1cImNoZWNrXCIgLz5cbiAgICAgICAgICA8L2I+eycgJ31cbiAgICAgICAgICBWZXLDtmZmZW50bGljaHRcbiAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIlJFTU9WRURcIj5cbiAgICAgICAgICA8YiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XG4gICAgICAgICAgICA8SWNvbiB0eXBlPVwiZGVsZXRlXCIgLz5cbiAgICAgICAgICA8L2I+eycgJ31cbiAgICAgICAgICBHZWzDtnNjaHRcbiAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgPC9TZWxlY3Q+LFxuICAgICl9XG4gIDwvRm9ybS5JdGVtPlxuKTtcblN0YXRlSW5wdXQuZGVmYXVsdFByb3BzID0geyBsYXlvdXQgfTtcbmV4cG9ydCBkZWZhdWx0IFN0YXRlSW5wdXQ7XG4iXX0=
