import 'antd/lib/input/style';
import _Input from 'antd/lib/input';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { toClass } from 'recompose';

import { slugify } from 'olymp-utils';
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1zbHVnLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInRvQ2xhc3MiLCJzbHVnaWZ5IiwiRm9ybUl0ZW0iLCJydWxlIiwiaW5uZXJUeXBlIiwibmFtZSIsImZvcm0iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZGF0YUZpZWxkIiwiZGF0YU1ldGEiLCJwIiwic2x1ZyIsImdldEZpZWxkVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixXQUF4Qjs7QUFFQSxTQUFTQyxPQUFULFFBQXdCLGFBQXhCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixhQUFyQjs7QUFFQSxlQUFlO0FBQ2JDLFFBQU07QUFBQSxRQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxXQUFtQkEsVUFBVUMsSUFBVixLQUFtQixNQUF0QztBQUFBLEdBRE87QUFFYkMsUUFBTU4sUUFDSixpQkFPTTtBQUFBLFFBTkpNLElBTUksU0FOSkEsSUFNSTtBQUFBLFFBTEpDLEtBS0ksU0FMSkEsS0FLSTtBQUFBLFFBSkpDLFFBSUksU0FKSkEsUUFJSTtBQUFBLFFBSFlDLFNBR1osU0FISixjQUdJO0FBQUEsUUFGV0MsUUFFWCxTQUZKLGFBRUk7QUFBQSxRQUREQyxDQUNDLGlFQUhKLGNBR0ksRUFGSixhQUVJOztBQUNKLFFBQU1DLE9BQU9YLFFBQVFLLEtBQUtPLGFBQUwsQ0FBbUIsTUFBbkIsQ0FBUixDQUFiO0FBQ0EsV0FDRTtBQUFDLGNBQUQ7QUFBQSxpQkFBVSxNQUFNUCxJQUFoQixJQUEwQkssQ0FBMUI7QUFDRTtBQUNFLGVBQU9KLFNBQVVLLGNBQVlBLElBRC9CO0FBRUUsa0JBQVVKLFFBRlo7QUFHRSxjQUFLLE1BSFA7QUFJRSx3QkFBY0MsU0FKaEI7QUFLRSx1QkFBYUM7QUFMZjtBQURGLEtBREY7QUFXRCxHQXJCRztBQUZPLENBQWYiLCJmaWxlIjoicGFja2FnZXMvY29sbGVjdGlvbi9lZGl0LXNsdWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9DbGFzcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgc2x1Z2lmeSB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZTogKHsgaW5uZXJUeXBlIH0pID0+IGlubmVyVHlwZS5uYW1lID09PSAnU2x1ZycsXG4gIGZvcm06IHRvQ2xhc3MoXG4gICAgKHtcbiAgICAgIGZvcm0sXG4gICAgICB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgJ2RhdGEtX19maWVsZCc6IGRhdGFGaWVsZCxcbiAgICAgICdkYXRhLV9fbWV0YSc6IGRhdGFNZXRhLFxuICAgICAgLi4ucFxuICAgIH0pID0+IHtcbiAgICAgIGNvbnN0IHNsdWcgPSBzbHVnaWZ5KGZvcm0uZ2V0RmllbGRWYWx1ZSgnbmFtZScpKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtSXRlbSBmb3JtPXtmb3JtfSB7Li4ucH0+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWUgfHwgKHNsdWcgJiYgYC8ke3NsdWd9YCl9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkYXRhLV9fZmllbGQ9e2RhdGFGaWVsZH1cbiAgICAgICAgICAgIGRhdGEtX19tZXRhPXtkYXRhTWV0YX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgKTtcbiAgICB9LFxuICApLFxufTtcbiJdfQ==
