import 'antd/lib/button/style';
import _Button3 from 'antd/lib/button';
import 'antd/lib/button/style';
import _Button2 from 'antd/lib/button';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { compose, toClass, withState } from 'recompose';
import SlateWriter from 'olymp-slate/slate-writer';

import FormItem from './form-item';

var enhance = compose(withState('isOpen', 'setOpen', false), toClass);

export default {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.name === 'Blocks';
  },
  form: enhance(function (_ref2) {
    var isOpen = _ref2.isOpen,
        setOpen = _ref2.setOpen,
        dataField = _ref2['data-__field'],
        dataMeta = _ref2['data-__meta'],
        onChange = _ref2.onChange,
        value = _ref2.value,
        binding = _ref2.binding,
        label = _ref2.label,
        children = _ref2.children,
        p = _objectWithoutProperties(_ref2, ['isOpen', 'setOpen', 'data-__field', 'data-__meta', 'onChange', 'value', 'binding', 'label', 'children']);

    return React.createElement(
      FormItem,
      _extends({ label: label }, p),
      React.createElement(
        _Button3.Group,
        { 'data-__field': dataField, 'data-__meta': dataMeta },
        React.createElement(
          _Button,
          {
            type: isOpen === true ? 'primary' : 'default',
            onClick: function onClick() {
              return setOpen(!isOpen);
            }
          },
          'Bearbeiten'
        ),
        React.createElement(
          _Button2,
          { onClick: function onClick() {
              return setOpen('full');
            } },
          'Vollbildmodus'
        )
      ),
      isOpen && React.createElement(
        SlateWriter,
        {
          onChange: onChange,
          value: value,
          binding: binding,
          placeholder: label || 'Hier Text eingeben!',
          style: { padding: 20 },
          full: isOpen === 'full',
          setFull: function setFull() {
            return setOpen(false);
          }
        },
        children
      )
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1zbGF0ZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjb21wb3NlIiwidG9DbGFzcyIsIndpdGhTdGF0ZSIsIlNsYXRlV3JpdGVyIiwiRm9ybUl0ZW0iLCJlbmhhbmNlIiwicnVsZSIsImlubmVyVHlwZSIsIm5hbWUiLCJmb3JtIiwiaXNPcGVuIiwic2V0T3BlbiIsImRhdGFGaWVsZCIsImRhdGFNZXRhIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImJpbmRpbmciLCJsYWJlbCIsImNoaWxkcmVuIiwicCIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCQyxTQUEzQixRQUE0QyxXQUE1QztBQUNBLE9BQU9DLFdBQVAsTUFBd0IsMEJBQXhCOztBQUVBLE9BQU9DLFFBQVAsTUFBcUIsYUFBckI7O0FBRUEsSUFBTUMsVUFBVUwsUUFBUUUsVUFBVSxRQUFWLEVBQW9CLFNBQXBCLEVBQStCLEtBQS9CLENBQVIsRUFBK0NELE9BQS9DLENBQWhCOztBQUVBLGVBQWU7QUFDYkssUUFBTTtBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFdBQW1CQSxVQUFVQyxJQUFWLEtBQW1CLFFBQXRDO0FBQUEsR0FETztBQUViQyxRQUFNSixRQUNKO0FBQUEsUUFDRUssTUFERixTQUNFQSxNQURGO0FBQUEsUUFFRUMsT0FGRixTQUVFQSxPQUZGO0FBQUEsUUFHa0JDLFNBSGxCLFNBR0UsY0FIRjtBQUFBLFFBSWlCQyxRQUpqQixTQUlFLGFBSkY7QUFBQSxRQUtFQyxRQUxGLFNBS0VBLFFBTEY7QUFBQSxRQU1FQyxLQU5GLFNBTUVBLEtBTkY7QUFBQSxRQU9FQyxPQVBGLFNBT0VBLE9BUEY7QUFBQSxRQVFFQyxLQVJGLFNBUUVBLEtBUkY7QUFBQSxRQVNFQyxRQVRGLFNBU0VBLFFBVEY7QUFBQSxRQVVLQyxDQVZMLHlEQUdFLGNBSEYsRUFJRSxhQUpGOztBQUFBLFdBWUU7QUFBQyxjQUFEO0FBQUEsaUJBQVUsT0FBT0YsS0FBakIsSUFBNEJFLENBQTVCO0FBQ0U7QUFBQSxpQkFBUSxLQUFSO0FBQUEsVUFBYyxnQkFBY1AsU0FBNUIsRUFBdUMsZUFBYUMsUUFBcEQ7QUFDRTtBQUFBO0FBQUE7QUFDRSxrQkFBTUgsV0FBVyxJQUFYLEdBQWtCLFNBQWxCLEdBQThCLFNBRHRDO0FBRUUscUJBQVM7QUFBQSxxQkFBTUMsUUFBUSxDQUFDRCxNQUFULENBQU47QUFBQTtBQUZYO0FBQUE7QUFBQSxTQURGO0FBT0U7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNQyxRQUFRLE1BQVIsQ0FBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQVBGLE9BREY7QUFXR0QsZ0JBQ0M7QUFBQyxtQkFBRDtBQUFBO0FBQ0Usb0JBQVVJLFFBRFo7QUFFRSxpQkFBT0MsS0FGVDtBQUdFLG1CQUFTQyxPQUhYO0FBSUUsdUJBQWFDLFNBQVMscUJBSnhCO0FBS0UsaUJBQU8sRUFBRUcsU0FBUyxFQUFYLEVBTFQ7QUFNRSxnQkFBTVYsV0FBVyxNQU5uQjtBQU9FLG1CQUFTO0FBQUEsbUJBQU1DLFFBQVEsS0FBUixDQUFOO0FBQUE7QUFQWDtBQVNHTztBQVRIO0FBWkosS0FaRjtBQUFBLEdBREk7QUFGTyxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1zbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB0b0NsYXNzLCB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IFNsYXRlV3JpdGVyIGZyb20gJ29seW1wLXNsYXRlL3NsYXRlLXdyaXRlcic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKHdpdGhTdGF0ZSgnaXNPcGVuJywgJ3NldE9wZW4nLCBmYWxzZSksIHRvQ2xhc3MpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJ1bGU6ICh7IGlubmVyVHlwZSB9KSA9PiBpbm5lclR5cGUubmFtZSA9PT0gJ0Jsb2NrcycsXG4gIGZvcm06IGVuaGFuY2UoXG4gICAgKHtcbiAgICAgIGlzT3BlbixcbiAgICAgIHNldE9wZW4sXG4gICAgICAnZGF0YS1fX2ZpZWxkJzogZGF0YUZpZWxkLFxuICAgICAgJ2RhdGEtX19tZXRhJzogZGF0YU1ldGEsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHZhbHVlLFxuICAgICAgYmluZGluZyxcbiAgICAgIGxhYmVsLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICAuLi5wXG4gICAgfSkgPT4gKFxuICAgICAgPEZvcm1JdGVtIGxhYmVsPXtsYWJlbH0gey4uLnB9PlxuICAgICAgICA8QnV0dG9uLkdyb3VwIGRhdGEtX19maWVsZD17ZGF0YUZpZWxkfSBkYXRhLV9fbWV0YT17ZGF0YU1ldGF9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9e2lzT3BlbiA9PT0gdHJ1ZSA/ICdwcmltYXJ5JyA6ICdkZWZhdWx0J31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIWlzT3Blbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQmVhcmJlaXRlblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3BlbignZnVsbCcpfT5Wb2xsYmlsZG1vZHVzPC9CdXR0b24+XG4gICAgICAgIDwvQnV0dG9uLkdyb3VwPlxuXG4gICAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICAgIDxTbGF0ZVdyaXRlclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgYmluZGluZz17YmluZGluZ31cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtsYWJlbCB8fCAnSGllciBUZXh0IGVpbmdlYmVuISd9XG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fVxuICAgICAgICAgICAgZnVsbD17aXNPcGVuID09PSAnZnVsbCd9XG4gICAgICAgICAgICBzZXRGdWxsPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9TbGF0ZVdyaXRlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgKSxcbiAgKSxcbn07XG4iXX0=
