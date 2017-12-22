import _get from 'lodash/get';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { toClass } from 'recompose';

import FormItem from './form-item';
import DetailEdit from './rel-editor';

export default {
  rule: function rule(_ref) {
    var specialFields = _ref.specialFields,
        type = _ref.type;
    return _get(specialFields, 'idField.type.kind') === 'LIST' || type.kind === 'LIST' && type.ofType.kind === 'OBJECT' && type.ofType.name.indexOf('Nested') === -1;
  },
  form: toClass(function (_ref2) {
    var specialFields = _ref2.specialFields,
        type = _ref2.type,
        value = _ref2.value,
        onChange = _ref2.onChange,
        dataField = _ref2['data-__field'],
        dataMeta = _ref2['data-__meta'],
        props = _objectWithoutProperties(_ref2, ['specialFields', 'type', 'value', 'onChange', 'data-__field', 'data-__meta']);

    return React.createElement(
      FormItem,
      props,
      React.createElement(DetailEdit, {
        mode: 'tags',
        value: (value || []).map(function (item) {
          return item.id;
        }),
        onChange: onChange,
        typeName: specialFields.idField ? specialFields.idField.type.name : type.ofType.name,
        'data-__field': dataField,
        'data-__meta': dataMeta
      })
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1yZWwtbGlzdC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJ0b0NsYXNzIiwiRm9ybUl0ZW0iLCJEZXRhaWxFZGl0IiwicnVsZSIsInNwZWNpYWxGaWVsZHMiLCJ0eXBlIiwia2luZCIsIm9mVHlwZSIsIm5hbWUiLCJpbmRleE9mIiwiZm9ybSIsInZhbHVlIiwib25DaGFuZ2UiLCJkYXRhRmllbGQiLCJkYXRhTWV0YSIsInByb3BzIiwibWFwIiwiaXRlbSIsImlkIiwiaWRGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLFdBQXhCOztBQUVBLE9BQU9DLFFBQVAsTUFBcUIsYUFBckI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGNBQXZCOztBQUVBLGVBQWU7QUFDYkMsUUFBTTtBQUFBLFFBQUdDLGFBQUgsUUFBR0EsYUFBSDtBQUFBLFFBQWtCQyxJQUFsQixRQUFrQkEsSUFBbEI7QUFBQSxXQUNKLEtBQUlELGFBQUosRUFBbUIsbUJBQW5CLE1BQTRDLE1BQTVDLElBQ0NDLEtBQUtDLElBQUwsS0FBYyxNQUFkLElBQ0NELEtBQUtFLE1BQUwsQ0FBWUQsSUFBWixLQUFxQixRQUR0QixJQUVDRCxLQUFLRSxNQUFMLENBQVlDLElBQVosQ0FBaUJDLE9BQWpCLENBQXlCLFFBQXpCLE1BQXVDLENBQUMsQ0FKdEM7QUFBQSxHQURPO0FBTWJDLFFBQU1WLFFBQ0o7QUFBQSxRQUNFSSxhQURGLFNBQ0VBLGFBREY7QUFBQSxRQUVFQyxJQUZGLFNBRUVBLElBRkY7QUFBQSxRQUdFTSxLQUhGLFNBR0VBLEtBSEY7QUFBQSxRQUlFQyxRQUpGLFNBSUVBLFFBSkY7QUFBQSxRQUtrQkMsU0FMbEIsU0FLRSxjQUxGO0FBQUEsUUFNaUJDLFFBTmpCLFNBTUUsYUFORjtBQUFBLFFBT0tDLEtBUEwsa0ZBS0UsY0FMRixFQU1FLGFBTkY7O0FBQUEsV0FTRTtBQUFDLGNBQUQ7QUFBY0EsV0FBZDtBQUNFLDBCQUFDLFVBQUQ7QUFDRSxjQUFLLE1BRFA7QUFFRSxlQUFPLENBQUNKLFNBQVMsRUFBVixFQUFjSyxHQUFkLENBQWtCO0FBQUEsaUJBQVFDLEtBQUtDLEVBQWI7QUFBQSxTQUFsQixDQUZUO0FBR0Usa0JBQVVOLFFBSFo7QUFJRSxrQkFDRVIsY0FBY2UsT0FBZCxHQUNJZixjQUFjZSxPQUFkLENBQXNCZCxJQUF0QixDQUEyQkcsSUFEL0IsR0FFSUgsS0FBS0UsTUFBTCxDQUFZQyxJQVBwQjtBQVNFLHdCQUFjSyxTQVRoQjtBQVVFLHVCQUFhQztBQVZmO0FBREYsS0FURjtBQUFBLEdBREk7QUFOTyxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1yZWwtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b0NsYXNzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgRm9ybUl0ZW0gZnJvbSAnLi9mb3JtLWl0ZW0nO1xuaW1wb3J0IERldGFpbEVkaXQgZnJvbSAnLi9yZWwtZWRpdG9yJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlOiAoeyBzcGVjaWFsRmllbGRzLCB0eXBlIH0pID0+XG4gICAgZ2V0KHNwZWNpYWxGaWVsZHMsICdpZEZpZWxkLnR5cGUua2luZCcpID09PSAnTElTVCcgfHxcbiAgICAodHlwZS5raW5kID09PSAnTElTVCcgJiZcbiAgICAgIHR5cGUub2ZUeXBlLmtpbmQgPT09ICdPQkpFQ1QnICYmXG4gICAgICB0eXBlLm9mVHlwZS5uYW1lLmluZGV4T2YoJ05lc3RlZCcpID09PSAtMSksXG4gIGZvcm06IHRvQ2xhc3MoXG4gICAgKHtcbiAgICAgIHNwZWNpYWxGaWVsZHMsXG4gICAgICB0eXBlLFxuICAgICAgdmFsdWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgICdkYXRhLV9fZmllbGQnOiBkYXRhRmllbGQsXG4gICAgICAnZGF0YS1fX21ldGEnOiBkYXRhTWV0YSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSkgPT4gKFxuICAgICAgPEZvcm1JdGVtIHsuLi5wcm9wc30+XG4gICAgICAgIDxEZXRhaWxFZGl0XG4gICAgICAgICAgbW9kZT1cInRhZ3NcIlxuICAgICAgICAgIHZhbHVlPXsodmFsdWUgfHwgW10pLm1hcChpdGVtID0+IGl0ZW0uaWQpfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICB0eXBlTmFtZT17XG4gICAgICAgICAgICBzcGVjaWFsRmllbGRzLmlkRmllbGRcbiAgICAgICAgICAgICAgPyBzcGVjaWFsRmllbGRzLmlkRmllbGQudHlwZS5uYW1lXG4gICAgICAgICAgICAgIDogdHlwZS5vZlR5cGUubmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhLV9fZmllbGQ9e2RhdGFGaWVsZH1cbiAgICAgICAgICBkYXRhLV9fbWV0YT17ZGF0YU1ldGF9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1JdGVtPlxuICAgICksXG4gICksXG59O1xuIl19
