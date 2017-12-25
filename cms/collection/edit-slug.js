import 'antd/lib/input/style';
import _Input from 'antd/lib/input';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { toClass } from 'recompose';

import slugify from 'slugify';
import FormItem from './form-item';

export default {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.name === 'Slug';
  },
  form: toClass(function (_ref2) {
    var form = _ref2.form,
        value = _ref2.value,
        onChange = _ref2.onChange,
        dataField = _ref2['data-__field'],
        dataMeta = _ref2['data-__meta'],
        p = _objectWithoutProperties(_ref2, ['form', 'value', 'onChange', 'data-__field', 'data-__meta']);

    var slug = slugify(form.getFieldValue('name'));
    return React.createElement(
      FormItem,
      _extends({ form: form }, p),
      React.createElement(_Input, {
        value: value || slug && '/' + slug,
        onChange: onChange,
        type: 'text',
        'data-__field': dataField,
        'data-__meta': dataMeta
      })
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtc2x1Zy5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJ0b0NsYXNzIiwic2x1Z2lmeSIsIkZvcm1JdGVtIiwicnVsZSIsImlubmVyVHlwZSIsIm5hbWUiLCJmb3JtIiwidmFsdWUiLCJvbkNoYW5nZSIsImRhdGFGaWVsZCIsImRhdGFNZXRhIiwicCIsInNsdWciLCJnZXRGaWVsZFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsV0FBeEI7O0FBRUEsT0FBT0MsT0FBUCxNQUFvQixTQUFwQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsYUFBckI7O0FBRUEsZUFBZTtBQUNiQyxRQUFNO0FBQUEsUUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsV0FBbUJBLFVBQVVDLElBQVYsS0FBbUIsTUFBdEM7QUFBQSxHQURPO0FBRWJDLFFBQU1OLFFBQ0osaUJBT007QUFBQSxRQU5KTSxJQU1JLFNBTkpBLElBTUk7QUFBQSxRQUxKQyxLQUtJLFNBTEpBLEtBS0k7QUFBQSxRQUpKQyxRQUlJLFNBSkpBLFFBSUk7QUFBQSxRQUhZQyxTQUdaLFNBSEosY0FHSTtBQUFBLFFBRldDLFFBRVgsU0FGSixhQUVJO0FBQUEsUUFEREMsQ0FDQyxpRUFISixjQUdJLEVBRkosYUFFSTs7QUFDSixRQUFNQyxPQUFPWCxRQUFRSyxLQUFLTyxhQUFMLENBQW1CLE1BQW5CLENBQVIsQ0FBYjtBQUNBLFdBQ0U7QUFBQyxjQUFEO0FBQUEsaUJBQVUsTUFBTVAsSUFBaEIsSUFBMEJLLENBQTFCO0FBQ0U7QUFDRSxlQUFPSixTQUFVSyxjQUFZQSxJQUQvQjtBQUVFLGtCQUFVSixRQUZaO0FBR0UsY0FBSyxNQUhQO0FBSUUsd0JBQWNDLFNBSmhCO0FBS0UsdUJBQWFDO0FBTGY7QUFERixLQURGO0FBV0QsR0FyQkc7QUFGTyxDQUFmIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL2VkaXQtc2x1Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b0NsYXNzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZTogKHsgaW5uZXJUeXBlIH0pID0+IGlubmVyVHlwZS5uYW1lID09PSAnU2x1ZycsXG4gIGZvcm06IHRvQ2xhc3MoXG4gICAgKHtcbiAgICAgIGZvcm0sXG4gICAgICB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgJ2RhdGEtX19maWVsZCc6IGRhdGFGaWVsZCxcbiAgICAgICdkYXRhLV9fbWV0YSc6IGRhdGFNZXRhLFxuICAgICAgLi4ucFxuICAgIH0pID0+IHtcbiAgICAgIGNvbnN0IHNsdWcgPSBzbHVnaWZ5KGZvcm0uZ2V0RmllbGRWYWx1ZSgnbmFtZScpKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtSXRlbSBmb3JtPXtmb3JtfSB7Li4ucH0+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWUgfHwgKHNsdWcgJiYgYC8ke3NsdWd9YCl9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkYXRhLV9fZmllbGQ9e2RhdGFGaWVsZH1cbiAgICAgICAgICAgIGRhdGEtX19tZXRhPXtkYXRhTWV0YX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgKTtcbiAgICB9LFxuICApLFxufTtcbiJdfQ==
