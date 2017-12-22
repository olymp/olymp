import 'antd/lib/switch/style';
import _Switch from 'antd/lib/switch';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { toClass } from 'recompose';

import FormItem from './form-item';

export default {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.name === 'Boolean';
  },
  form: toClass(function (_ref2) {
    var type = _ref2.type,
        props = _objectWithoutProperties(_ref2, ['type']);

    return React.createElement(
      FormItem,
      props,
      React.createElement(_Switch, _extends({}, props, { checked: props.value }))
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1ib29sLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInRvQ2xhc3MiLCJGb3JtSXRlbSIsInJ1bGUiLCJpbm5lclR5cGUiLCJuYW1lIiwiZm9ybSIsInR5cGUiLCJwcm9wcyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsV0FBeEI7O0FBRUEsT0FBT0MsUUFBUCxNQUFxQixhQUFyQjs7QUFFQSxlQUFlO0FBQ2JDLFFBQU07QUFBQSxRQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxXQUFtQkEsVUFBVUMsSUFBVixLQUFtQixTQUF0QztBQUFBLEdBRE87QUFFYkMsUUFBTUwsUUFBUTtBQUFBLFFBQUdNLElBQUgsU0FBR0EsSUFBSDtBQUFBLFFBQVlDLEtBQVo7O0FBQUEsV0FDWjtBQUFDLGNBQUQ7QUFBY0EsV0FBZDtBQUNFLGdEQUFZQSxLQUFaLElBQW1CLFNBQVNBLE1BQU1DLEtBQWxDO0FBREYsS0FEWTtBQUFBLEdBQVI7QUFGTyxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1ib29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRvQ2xhc3MgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgRm9ybUl0ZW0gZnJvbSAnLi9mb3JtLWl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJ1bGU6ICh7IGlubmVyVHlwZSB9KSA9PiBpbm5lclR5cGUubmFtZSA9PT0gJ0Jvb2xlYW4nLFxuICBmb3JtOiB0b0NsYXNzKCh7IHR5cGUsIC4uLnByb3BzIH0pID0+IChcbiAgICA8Rm9ybUl0ZW0gey4uLnByb3BzfT5cbiAgICAgIDxTd2l0Y2ggey4uLnByb3BzfSBjaGVja2VkPXtwcm9wcy52YWx1ZX0gLz5cbiAgICA8L0Zvcm1JdGVtPlxuICApKSxcbn07XG4iXX0=
