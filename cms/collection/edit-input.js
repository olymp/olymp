import 'antd/lib/input/style';
import _Input from 'antd/lib/input';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { toClass } from 'recompose';

import FormItem from './form-item';

export default {
  isDefault: true,
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return ['Slug', 'Email', 'PhoneNumber', 'Website'].indexOf(innerType.name) !== -1;
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
      React.createElement(_Input, {
        value: value,
        onChange: onChange,
        type: 'text',
        'data-__field': dataField,
        'data-__meta': dataMeta
      })
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1pbnB1dC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJ0b0NsYXNzIiwiRm9ybUl0ZW0iLCJpc0RlZmF1bHQiLCJydWxlIiwiaW5uZXJUeXBlIiwiaW5kZXhPZiIsIm5hbWUiLCJmb3JtIiwidmFsdWUiLCJvbkNoYW5nZSIsImRhdGFGaWVsZCIsImRhdGFNZXRhIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixXQUF4Qjs7QUFFQSxPQUFPQyxRQUFQLE1BQXFCLGFBQXJCOztBQUVBLGVBQWU7QUFDYkMsYUFBVyxJQURFO0FBRWJDLFFBQU07QUFBQSxRQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxXQUNKLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsYUFBbEIsRUFBaUMsU0FBakMsRUFBNENDLE9BQTVDLENBQW9ERCxVQUFVRSxJQUE5RCxNQUF3RSxDQUFDLENBRHJFO0FBQUEsR0FGTztBQUliQyxRQUFNUCxRQUNKO0FBQUEsUUFDRVEsS0FERixTQUNFQSxLQURGO0FBQUEsUUFFRUMsUUFGRixTQUVFQSxRQUZGO0FBQUEsUUFHa0JDLFNBSGxCLFNBR0UsY0FIRjtBQUFBLFFBSWlCQyxRQUpqQixTQUlFLGFBSkY7QUFBQSxRQUtLQyxDQUxMLHlEQUdFLGNBSEYsRUFJRSxhQUpGOztBQUFBLFdBT0U7QUFBQyxjQUFEO0FBQWNBLE9BQWQ7QUFDRTtBQUNFLGVBQU9KLEtBRFQ7QUFFRSxrQkFBVUMsUUFGWjtBQUdFLGNBQUssTUFIUDtBQUlFLHdCQUFjQyxTQUpoQjtBQUtFLHVCQUFhQztBQUxmO0FBREYsS0FQRjtBQUFBLEdBREk7QUFKTyxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b0NsYXNzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgRm9ybUl0ZW0gZnJvbSAnLi9mb3JtLWl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzRGVmYXVsdDogdHJ1ZSxcbiAgcnVsZTogKHsgaW5uZXJUeXBlIH0pID0+XG4gICAgWydTbHVnJywgJ0VtYWlsJywgJ1Bob25lTnVtYmVyJywgJ1dlYnNpdGUnXS5pbmRleE9mKGlubmVyVHlwZS5uYW1lKSAhPT0gLTEsXG4gIGZvcm06IHRvQ2xhc3MoXG4gICAgKHtcbiAgICAgIHZhbHVlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICAnZGF0YS1fX2ZpZWxkJzogZGF0YUZpZWxkLFxuICAgICAgJ2RhdGEtX19tZXRhJzogZGF0YU1ldGEsXG4gICAgICAuLi5wXG4gICAgfSkgPT4gKFxuICAgICAgPEZvcm1JdGVtIHsuLi5wfT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgZGF0YS1fX2ZpZWxkPXtkYXRhRmllbGR9XG4gICAgICAgICAgZGF0YS1fX21ldGE9e2RhdGFNZXRhfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtSXRlbT5cbiAgICApLFxuICApLFxufTtcbiJdfQ==
