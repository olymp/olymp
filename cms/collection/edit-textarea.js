import 'antd/lib/input/style';
import _Input from 'antd/lib/input';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { toClass } from 'recompose';

import FormItem from './form-item';

export default {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return ['Markdown'].indexOf(innerType.name) !== -1;
  },
  form: toClass(function (_ref2) {
    var value = _ref2.value,
        onChange = _ref2.onChange,
        dataField = _ref2['data-__field'],
        dataMeta = _ref2['data-__meta'],
        p = _objectWithoutProperties(_ref2, ['value', 'onChange', 'data-__field', 'data-__meta']);

    return React.createElement(
      FormItem,
      p,
      React.createElement(_Input.TextArea, {
        value: value,
        autosize: true,
        onChange: onChange,
        type: 'text',
        'data-__field': dataField,
        'data-__meta': dataMeta
      })
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC10ZXh0YXJlYS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJ0b0NsYXNzIiwiRm9ybUl0ZW0iLCJydWxlIiwiaW5uZXJUeXBlIiwiaW5kZXhPZiIsIm5hbWUiLCJmb3JtIiwidmFsdWUiLCJvbkNoYW5nZSIsImRhdGFGaWVsZCIsImRhdGFNZXRhIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixXQUF4Qjs7QUFFQSxPQUFPQyxRQUFQLE1BQXFCLGFBQXJCOztBQUVBLGVBQWU7QUFDYkMsUUFBTTtBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFdBQW1CLENBQUMsVUFBRCxFQUFhQyxPQUFiLENBQXFCRCxVQUFVRSxJQUEvQixNQUF5QyxDQUFDLENBQTdEO0FBQUEsR0FETztBQUViQyxRQUFNTixRQUNKO0FBQUEsUUFDRU8sS0FERixTQUNFQSxLQURGO0FBQUEsUUFFRUMsUUFGRixTQUVFQSxRQUZGO0FBQUEsUUFHa0JDLFNBSGxCLFNBR0UsY0FIRjtBQUFBLFFBSWlCQyxRQUpqQixTQUlFLGFBSkY7QUFBQSxRQUtLQyxDQUxMLHlEQUdFLGNBSEYsRUFJRSxhQUpGOztBQUFBLFdBT0U7QUFBQyxjQUFEO0FBQWNBLE9BQWQ7QUFDRSxpQ0FBTyxRQUFQO0FBQ0UsZUFBT0osS0FEVDtBQUVFLHNCQUZGO0FBR0Usa0JBQVVDLFFBSFo7QUFJRSxjQUFLLE1BSlA7QUFLRSx3QkFBY0MsU0FMaEI7QUFNRSx1QkFBYUM7QUFOZjtBQURGLEtBUEY7QUFBQSxHQURJO0FBRk8sQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL2VkaXQtdGV4dGFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9DbGFzcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJy4vZm9ybS1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlOiAoeyBpbm5lclR5cGUgfSkgPT4gWydNYXJrZG93biddLmluZGV4T2YoaW5uZXJUeXBlLm5hbWUpICE9PSAtMSxcbiAgZm9ybTogdG9DbGFzcyhcbiAgICAoe1xuICAgICAgdmFsdWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgICdkYXRhLV9fZmllbGQnOiBkYXRhRmllbGQsXG4gICAgICAnZGF0YS1fX21ldGEnOiBkYXRhTWV0YSxcbiAgICAgIC4uLnBcbiAgICB9KSA9PiAoXG4gICAgICA8Rm9ybUl0ZW0gey4uLnB9PlxuICAgICAgICA8SW5wdXQuVGV4dEFyZWFcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgYXV0b3NpemVcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGRhdGEtX19maWVsZD17ZGF0YUZpZWxkfVxuICAgICAgICAgIGRhdGEtX19tZXRhPXtkYXRhTWV0YX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgKSxcbiAgKSxcbn07XG4iXX0=
