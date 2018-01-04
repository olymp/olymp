'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

var _relEditor = require('./rel-editor');

var _relEditor2 = _interopRequireDefault(_relEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = {
  rule: function rule(_ref) {
    var specialFields = _ref.specialFields,
        type = _ref.type;
    return (0, _get3.default)(specialFields, 'idField.type.kind') === 'LIST' || type.kind === 'LIST' && type.ofType.kind === 'OBJECT' && type.ofType.name.indexOf('Nested') === -1;
  },
  form: (0, _recompose.toClass)(function (_ref2) {
    var specialFields = _ref2.specialFields,
        type = _ref2.type,
        value = _ref2.value,
        onChange = _ref2.onChange,
        dataField = _ref2['data-__field'],
        dataMeta = _ref2['data-__meta'],
        props = _objectWithoutProperties(_ref2, ['specialFields', 'type', 'value', 'onChange', 'data-__field', 'data-__meta']);

    return _react2.default.createElement(
      _formItem2.default,
      props,
      _react2.default.createElement(_relEditor2.default, {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtcmVsLWxpc3QuZXM2Il0sIm5hbWVzIjpbInJ1bGUiLCJzcGVjaWFsRmllbGRzIiwidHlwZSIsImtpbmQiLCJvZlR5cGUiLCJuYW1lIiwiaW5kZXhPZiIsImZvcm0iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZGF0YUZpZWxkIiwiZGF0YU1ldGEiLCJwcm9wcyIsIm1hcCIsIml0ZW0iLCJpZCIsImlkRmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O2tCQUVlO0FBQ2JBLFFBQU07QUFBQSxRQUFHQyxhQUFILFFBQUdBLGFBQUg7QUFBQSxRQUFrQkMsSUFBbEIsUUFBa0JBLElBQWxCO0FBQUEsV0FDSixtQkFBSUQsYUFBSixFQUFtQixtQkFBbkIsTUFBNEMsTUFBNUMsSUFDQ0MsS0FBS0MsSUFBTCxLQUFjLE1BQWQsSUFDQ0QsS0FBS0UsTUFBTCxDQUFZRCxJQUFaLEtBQXFCLFFBRHRCLElBRUNELEtBQUtFLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkMsT0FBakIsQ0FBeUIsUUFBekIsTUFBdUMsQ0FBQyxDQUp0QztBQUFBLEdBRE87QUFNYkMsUUFBTSx3QkFDSjtBQUFBLFFBQ0VOLGFBREYsU0FDRUEsYUFERjtBQUFBLFFBRUVDLElBRkYsU0FFRUEsSUFGRjtBQUFBLFFBR0VNLEtBSEYsU0FHRUEsS0FIRjtBQUFBLFFBSUVDLFFBSkYsU0FJRUEsUUFKRjtBQUFBLFFBS2tCQyxTQUxsQixTQUtFLGNBTEY7QUFBQSxRQU1pQkMsUUFOakIsU0FNRSxhQU5GO0FBQUEsUUFPS0MsS0FQTCxrRkFLRSxjQUxGLEVBTUUsYUFORjs7QUFBQSxXQVNFO0FBQUE7QUFBY0EsV0FBZDtBQUNFO0FBQ0UsY0FBSyxNQURQO0FBRUUsZUFBTyxDQUFDSixTQUFTLEVBQVYsRUFBY0ssR0FBZCxDQUFrQjtBQUFBLGlCQUFRQyxLQUFLQyxFQUFiO0FBQUEsU0FBbEIsQ0FGVDtBQUdFLGtCQUFVTixRQUhaO0FBSUUsa0JBQ0VSLGNBQWNlLE9BQWQsR0FDSWYsY0FBY2UsT0FBZCxDQUFzQmQsSUFBdEIsQ0FBMkJHLElBRC9CLEdBRUlILEtBQUtFLE1BQUwsQ0FBWUMsSUFQcEI7QUFTRSx3QkFBY0ssU0FUaEI7QUFVRSx1QkFBYUM7QUFWZjtBQURGLEtBVEY7QUFBQSxHQURJO0FBTk8sQyIsImZpbGUiOiJjbXMvY29sbGVjdGlvbi9lZGl0LXJlbC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRvQ2xhc3MgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5pbXBvcnQgRGV0YWlsRWRpdCBmcm9tICcuL3JlbC1lZGl0b3InO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJ1bGU6ICh7IHNwZWNpYWxGaWVsZHMsIHR5cGUgfSkgPT5cbiAgICBnZXQoc3BlY2lhbEZpZWxkcywgJ2lkRmllbGQudHlwZS5raW5kJykgPT09ICdMSVNUJyB8fFxuICAgICh0eXBlLmtpbmQgPT09ICdMSVNUJyAmJlxuICAgICAgdHlwZS5vZlR5cGUua2luZCA9PT0gJ09CSkVDVCcgJiZcbiAgICAgIHR5cGUub2ZUeXBlLm5hbWUuaW5kZXhPZignTmVzdGVkJykgPT09IC0xKSxcbiAgZm9ybTogdG9DbGFzcyhcbiAgICAoe1xuICAgICAgc3BlY2lhbEZpZWxkcyxcbiAgICAgIHR5cGUsXG4gICAgICB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgJ2RhdGEtX19maWVsZCc6IGRhdGFGaWVsZCxcbiAgICAgICdkYXRhLV9fbWV0YSc6IGRhdGFNZXRhLFxuICAgICAgLi4ucHJvcHNcbiAgICB9KSA9PiAoXG4gICAgICA8Rm9ybUl0ZW0gey4uLnByb3BzfT5cbiAgICAgICAgPERldGFpbEVkaXRcbiAgICAgICAgICBtb2RlPVwidGFnc1wiXG4gICAgICAgICAgdmFsdWU9eyh2YWx1ZSB8fCBbXSkubWFwKGl0ZW0gPT4gaXRlbS5pZCl9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIHR5cGVOYW1lPXtcbiAgICAgICAgICAgIHNwZWNpYWxGaWVsZHMuaWRGaWVsZFxuICAgICAgICAgICAgICA/IHNwZWNpYWxGaWVsZHMuaWRGaWVsZC50eXBlLm5hbWVcbiAgICAgICAgICAgICAgOiB0eXBlLm9mVHlwZS5uYW1lXG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGEtX19maWVsZD17ZGF0YUZpZWxkfVxuICAgICAgICAgIGRhdGEtX19tZXRhPXtkYXRhTWV0YX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgKSxcbiAgKSxcbn07XG4iXX0=
