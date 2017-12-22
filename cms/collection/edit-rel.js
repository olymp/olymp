import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { toClass } from 'recompose';

import DetailEdit from './rel-editor';
import FormItem from './form-item';

export default {
  rule: function rule(_ref) {
    var specialFields = _ref.specialFields;
    return _get(specialFields, 'idField.type.kind', 'LIST') !== 'LIST';
  },
  form: toClass(function (_ref2) {
    var specialFields = _ref2.specialFields,
        props = _objectWithoutProperties(_ref2, ['specialFields']);

    return React.createElement(
      FormItem,
      props,
      React.createElement(DetailEdit, _extends({}, props, {
        typeName: _get(specialFields, 'idField.type.name')
      }))
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1yZWwuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwidG9DbGFzcyIsIkRldGFpbEVkaXQiLCJGb3JtSXRlbSIsInJ1bGUiLCJzcGVjaWFsRmllbGRzIiwiZm9ybSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixXQUF4Qjs7QUFFQSxPQUFPQyxVQUFQLE1BQXVCLGNBQXZCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixhQUFyQjs7QUFFQSxlQUFlO0FBQ2JDLFFBQU07QUFBQSxRQUFHQyxhQUFILFFBQUdBLGFBQUg7QUFBQSxXQUNKLEtBQUlBLGFBQUosRUFBbUIsbUJBQW5CLEVBQXdDLE1BQXhDLE1BQW9ELE1BRGhEO0FBQUEsR0FETztBQUdiQyxRQUFNTCxRQUFRO0FBQUEsUUFBR0ksYUFBSCxTQUFHQSxhQUFIO0FBQUEsUUFBcUJFLEtBQXJCOztBQUFBLFdBQ1o7QUFBQyxjQUFEO0FBQWNBLFdBQWQ7QUFDRSwwQkFBQyxVQUFELGVBQ01BLEtBRE47QUFFRSxrQkFBVSxLQUFJRixhQUFKLEVBQW1CLG1CQUFuQjtBQUZaO0FBREYsS0FEWTtBQUFBLEdBQVI7QUFITyxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1yZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9DbGFzcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IERldGFpbEVkaXQgZnJvbSAnLi9yZWwtZWRpdG9yJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZTogKHsgc3BlY2lhbEZpZWxkcyB9KSA9PlxuICAgIGdldChzcGVjaWFsRmllbGRzLCAnaWRGaWVsZC50eXBlLmtpbmQnLCAnTElTVCcpICE9PSAnTElTVCcsXG4gIGZvcm06IHRvQ2xhc3MoKHsgc3BlY2lhbEZpZWxkcywgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxGb3JtSXRlbSB7Li4ucHJvcHN9PlxuICAgICAgPERldGFpbEVkaXRcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICB0eXBlTmFtZT17Z2V0KHNwZWNpYWxGaWVsZHMsICdpZEZpZWxkLnR5cGUubmFtZScpfVxuICAgICAgLz5cbiAgICA8L0Zvcm1JdGVtPlxuICApKSxcbn07XG4iXX0=
