import 'antd/lib/select/style';
import _Select from 'antd/lib/select';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { toClass } from 'recompose';
import FormItem from './form-item';

export default {
  rule: function rule(_ref) {
    var type = _ref.type,
        name = _ref.name;
    return name !== 'tags' && type.kind === 'LIST' && type.ofType.name === 'String';
  },
  form: toClass(function (props) {
    return React.createElement(
      FormItem,
      props,
      React.createElement(_Select, _extends({}, props, { mode: 'tags', style: { width: '100%' } }))
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1zdHJpbmdzLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInRvQ2xhc3MiLCJGb3JtSXRlbSIsInJ1bGUiLCJ0eXBlIiwibmFtZSIsImtpbmQiLCJvZlR5cGUiLCJmb3JtIiwicHJvcHMiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUVBLFNBQVNDLE9BQVQsUUFBd0IsV0FBeEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGFBQXJCOztBQUVBLGVBQWU7QUFDYkMsUUFBTTtBQUFBLFFBQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFFBQVNDLElBQVQsUUFBU0EsSUFBVDtBQUFBLFdBQ0pBLFNBQVMsTUFBVCxJQUFtQkQsS0FBS0UsSUFBTCxLQUFjLE1BQWpDLElBQTJDRixLQUFLRyxNQUFMLENBQVlGLElBQVosS0FBcUIsUUFENUQ7QUFBQSxHQURPO0FBR2JHLFFBQU1QLFFBQVE7QUFBQSxXQUNaO0FBQUMsY0FBRDtBQUFjUSxXQUFkO0FBQ0UsZ0RBQVlBLEtBQVosSUFBbUIsTUFBSyxNQUF4QixFQUErQixPQUFPLEVBQUVDLE9BQU8sTUFBVCxFQUF0QztBQURGLEtBRFk7QUFBQSxHQUFSO0FBSE8sQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL2VkaXQtc3RyaW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHRvQ2xhc3MgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJy4vZm9ybS1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlOiAoeyB0eXBlLCBuYW1lIH0pID0+XG4gICAgbmFtZSAhPT0gJ3RhZ3MnICYmIHR5cGUua2luZCA9PT0gJ0xJU1QnICYmIHR5cGUub2ZUeXBlLm5hbWUgPT09ICdTdHJpbmcnLFxuICBmb3JtOiB0b0NsYXNzKHByb3BzID0+IChcbiAgICA8Rm9ybUl0ZW0gey4uLnByb3BzfT5cbiAgICAgIDxTZWxlY3Qgey4uLnByb3BzfSBtb2RlPVwidGFnc1wiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gLz5cbiAgICA8L0Zvcm1JdGVtPlxuICApKSxcbn07XG4iXX0=
