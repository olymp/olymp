'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _relEditor = require('./rel-editor');

var _relEditor2 = _interopRequireDefault(_relEditor);

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = {
  rule: function rule(_ref) {
    var specialFields = _ref.specialFields;
    return (0, _get3.default)(specialFields, 'idField.type.kind', 'LIST') !== 'LIST';
  },
  form: (0, _recompose.toClass)(function (_ref2) {
    var specialFields = _ref2.specialFields,
        props = _objectWithoutProperties(_ref2, ['specialFields']);

    return _react2.default.createElement(
      _formItem2.default,
      props,
      _react2.default.createElement(_relEditor2.default, _extends({}, props, {
        typeName: (0, _get3.default)(specialFields, 'idField.type.name')
      }))
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtcmVsLmVzNiJdLCJuYW1lcyI6WyJydWxlIiwic3BlY2lhbEZpZWxkcyIsImZvcm0iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7OztrQkFFZTtBQUNiQSxRQUFNO0FBQUEsUUFBR0MsYUFBSCxRQUFHQSxhQUFIO0FBQUEsV0FDSixtQkFBSUEsYUFBSixFQUFtQixtQkFBbkIsRUFBd0MsTUFBeEMsTUFBb0QsTUFEaEQ7QUFBQSxHQURPO0FBR2JDLFFBQU0sd0JBQVE7QUFBQSxRQUFHRCxhQUFILFNBQUdBLGFBQUg7QUFBQSxRQUFxQkUsS0FBckI7O0FBQUEsV0FDWjtBQUFBO0FBQWNBLFdBQWQ7QUFDRSxzRUFDTUEsS0FETjtBQUVFLGtCQUFVLG1CQUFJRixhQUFKLEVBQW1CLG1CQUFuQjtBQUZaO0FBREYsS0FEWTtBQUFBLEdBQVI7QUFITyxDIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL2VkaXQtcmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRvQ2xhc3MgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBEZXRhaWxFZGl0IGZyb20gJy4vcmVsLWVkaXRvcic7XG5pbXBvcnQgRm9ybUl0ZW0gZnJvbSAnLi9mb3JtLWl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJ1bGU6ICh7IHNwZWNpYWxGaWVsZHMgfSkgPT5cbiAgICBnZXQoc3BlY2lhbEZpZWxkcywgJ2lkRmllbGQudHlwZS5raW5kJywgJ0xJU1QnKSAhPT0gJ0xJU1QnLFxuICBmb3JtOiB0b0NsYXNzKCh7IHNwZWNpYWxGaWVsZHMsIC4uLnByb3BzIH0pID0+IChcbiAgICA8Rm9ybUl0ZW0gey4uLnByb3BzfT5cbiAgICAgIDxEZXRhaWxFZGl0XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgdHlwZU5hbWU9e2dldChzcGVjaWFsRmllbGRzLCAnaWRGaWVsZC50eXBlLm5hbWUnKX1cbiAgICAgIC8+XG4gICAgPC9Gb3JtSXRlbT5cbiAgKSksXG59O1xuIl19
