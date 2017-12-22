var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { toClass } from 'recompose';
import { DateEditor } from 'olymp-ui';
import FormItem from './form-item';

export default {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.name === 'Date' || innerType.name === 'DateTime';
  },
  form: toClass(function (_ref2) {
    var innerType = _ref2.innerType,
        props = _objectWithoutProperties(_ref2, ['innerType']);

    return React.createElement(
      FormItem,
      props,
      React.createElement(DateEditor, _extends({}, props, {
        format: innerType.name === 'DateTime' ? 'DD.MM.YYYY HH:mm' : 'DD.MM.YYYY',
        showTime: innerType.name === 'DateTime' ? { format: 'HH:mm' } : null
      }))
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1kYXRlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInRvQ2xhc3MiLCJEYXRlRWRpdG9yIiwiRm9ybUl0ZW0iLCJydWxlIiwiaW5uZXJUeXBlIiwibmFtZSIsImZvcm0iLCJwcm9wcyIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLFdBQXhCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixVQUEzQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsYUFBckI7O0FBRUEsZUFBZTtBQUNiQyxRQUFNO0FBQUEsUUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsV0FDSkEsVUFBVUMsSUFBVixLQUFtQixNQUFuQixJQUE2QkQsVUFBVUMsSUFBVixLQUFtQixVQUQ1QztBQUFBLEdBRE87QUFHYkMsUUFBTU4sUUFBUTtBQUFBLFFBQUdJLFNBQUgsU0FBR0EsU0FBSDtBQUFBLFFBQWlCRyxLQUFqQjs7QUFBQSxXQUNaO0FBQUMsY0FBRDtBQUFjQSxXQUFkO0FBQ0UsMEJBQUMsVUFBRCxlQUNNQSxLQUROO0FBRUUsZ0JBQ0VILFVBQVVDLElBQVYsS0FBbUIsVUFBbkIsR0FBZ0Msa0JBQWhDLEdBQXFELFlBSHpEO0FBS0Usa0JBQVVELFVBQVVDLElBQVYsS0FBbUIsVUFBbkIsR0FBZ0MsRUFBRUcsUUFBUSxPQUFWLEVBQWhDLEdBQXNEO0FBTGxFO0FBREYsS0FEWTtBQUFBLEdBQVI7QUFITyxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1kYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRvQ2xhc3MgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgRGF0ZUVkaXRvciB9IGZyb20gJ29seW1wLXVpJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZTogKHsgaW5uZXJUeXBlIH0pID0+XG4gICAgaW5uZXJUeXBlLm5hbWUgPT09ICdEYXRlJyB8fCBpbm5lclR5cGUubmFtZSA9PT0gJ0RhdGVUaW1lJyxcbiAgZm9ybTogdG9DbGFzcygoeyBpbm5lclR5cGUsIC4uLnByb3BzIH0pID0+IChcbiAgICA8Rm9ybUl0ZW0gey4uLnByb3BzfT5cbiAgICAgIDxEYXRlRWRpdG9yXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgZm9ybWF0PXtcbiAgICAgICAgICBpbm5lclR5cGUubmFtZSA9PT0gJ0RhdGVUaW1lJyA/ICdERC5NTS5ZWVlZIEhIOm1tJyA6ICdERC5NTS5ZWVlZJ1xuICAgICAgICB9XG4gICAgICAgIHNob3dUaW1lPXtpbm5lclR5cGUubmFtZSA9PT0gJ0RhdGVUaW1lJyA/IHsgZm9ybWF0OiAnSEg6bW0nIH0gOiBudWxsfVxuICAgICAgLz5cbiAgICA8L0Zvcm1JdGVtPlxuICApKSxcbn07XG4iXX0=
