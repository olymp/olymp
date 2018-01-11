'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/select/style');

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('olymp-fela/antd');

var _getRules = require('../get-rules');

var _getRules2 = _interopRequireDefault(_getRules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ref2 = _react2.default.createElement(
  _select2.default.Option,
  { value: 'PAGE' },
  'Seite'
);

var _ref3 = _react2.default.createElement(
  _select2.default.Option,
  { value: 'MENU' },
  'Men\xFC'
);

var _ref4 = _react2.default.createElement(
  _select2.default.Option,
  { value: 'PLACEHOLDER' },
  'Platzhalter'
);

var _ref5 = _react2.default.createElement(
  _select2.default.Option,
  { value: 'ALIAS' },
  'Alias'
);

var _ref6 = _react2.default.createElement(
  _select2.default.Option,
  { value: 'LINK' },
  'Externer Link'
);

var PageTypeInput = function PageTypeInput(_ref) {
  var item = _ref.item,
      field = _ref.field,
      label = _ref.label,
      layout = _ref.layout,
      initialValue = _ref.initialValue,
      rules = _ref.rules,
      placeholder = _ref.placeholder,
      form = _ref.form,
      rest = _objectWithoutProperties(_ref, ['item', 'field', 'label', 'layout', 'initialValue', 'rules', 'placeholder', 'form']);

  return _react2.default.createElement(
    _form2.default.Item,
    _extends({ key: field, label: label }, layout),
    form.getFieldDecorator(field, {
      initialValue: item && item[field] ? item[field] : 'PAGE',
      rules: (0, _getRules2.default)(rules, label)
    })(_react2.default.createElement(
      _select2.default,
      _extends({ style: { width: '100%' } }, rest),
      _ref2,
      _ref3,
      _ref4,
      _ref5,
      _ref6
    ))
  );
};
PageTypeInput.defaultProps = { layout: _antd.layout };
exports.default = PageTypeInput;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy9wYWdlLXR5cGUuZXM2Il0sIm5hbWVzIjpbIlBhZ2VUeXBlSW5wdXQiLCJpdGVtIiwiZmllbGQiLCJsYWJlbCIsImxheW91dCIsImluaXRpYWxWYWx1ZSIsInJ1bGVzIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwicmVzdCIsImdldEZpZWxkRGVjb3JhdG9yIiwid2lkdGgiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7WUFtQlE7QUFBQSxtQkFBUSxNQUFSO0FBQUEsSUFBZSxPQUFNLE1BQXJCO0FBQUE7QUFBQSxDOztZQUNBO0FBQUEsbUJBQVEsTUFBUjtBQUFBLElBQWUsT0FBTSxNQUFyQjtBQUFBO0FBQUEsQzs7WUFDQTtBQUFBLG1CQUFRLE1BQVI7QUFBQSxJQUFlLE9BQU0sYUFBckI7QUFBQTtBQUFBLEM7O1lBQ0E7QUFBQSxtQkFBUSxNQUFSO0FBQUEsSUFBZSxPQUFNLE9BQXJCO0FBQUE7QUFBQSxDOztZQUNBO0FBQUEsbUJBQVEsTUFBUjtBQUFBLElBQWUsT0FBTSxNQUFyQjtBQUFBO0FBQUEsQzs7QUFyQlIsSUFBTUEsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLE1BQ3BCQyxJQURvQixRQUNwQkEsSUFEb0I7QUFBQSxNQUVwQkMsS0FGb0IsUUFFcEJBLEtBRm9CO0FBQUEsTUFHcEJDLEtBSG9CLFFBR3BCQSxLQUhvQjtBQUFBLE1BSXBCQyxNQUpvQixRQUlwQkEsTUFKb0I7QUFBQSxNQUtwQkMsWUFMb0IsUUFLcEJBLFlBTG9CO0FBQUEsTUFNcEJDLEtBTm9CLFFBTXBCQSxLQU5vQjtBQUFBLE1BT3BCQyxXQVBvQixRQU9wQkEsV0FQb0I7QUFBQSxNQVFwQkMsSUFSb0IsUUFRcEJBLElBUm9CO0FBQUEsTUFTakJDLElBVGlCOztBQUFBLFNBV3BCO0FBQUEsbUJBQU0sSUFBTjtBQUFBLGVBQVcsS0FBS1AsS0FBaEIsRUFBdUIsT0FBT0MsS0FBOUIsSUFBeUNDLE1BQXpDO0FBQ0dJLFNBQUtFLGlCQUFMLENBQXVCUixLQUF2QixFQUE4QjtBQUM3Qkcsb0JBQWNKLFFBQVFBLEtBQUtDLEtBQUwsQ0FBUixHQUFzQkQsS0FBS0MsS0FBTCxDQUF0QixHQUFvQyxNQURyQjtBQUU3QkksYUFBTyx3QkFBU0EsS0FBVCxFQUFnQkgsS0FBaEI7QUFGc0IsS0FBOUIsRUFJQztBQUFBO0FBQUEsaUJBQVEsT0FBTyxFQUFFUSxPQUFPLE1BQVQsRUFBZixJQUFzQ0YsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRDtBQURILEdBWG9CO0FBQUEsQ0FBdEI7QUEwQkFULGNBQWNZLFlBQWQsR0FBNkIsRUFBRVIsb0JBQUYsRUFBN0I7a0JBQ2VKLGEiLCJmaWxlIjoiY21zL3BhZ2VzL2VkaXRzL3BhZ2UtdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBTZWxlY3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGxheW91dCB9IGZyb20gJ29seW1wLWZlbGEvYW50ZCc7XG5pbXBvcnQgZ2V0UnVsZXMgZnJvbSAnLi4vZ2V0LXJ1bGVzJztcblxuY29uc3QgUGFnZVR5cGVJbnB1dCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsYWJlbCxcbiAgbGF5b3V0LFxuICBpbml0aWFsVmFsdWUsXG4gIHJ1bGVzLFxuICBwbGFjZWhvbGRlcixcbiAgZm9ybSxcbiAgLi4ucmVzdFxufSkgPT4gKFxuICA8Rm9ybS5JdGVtIGtleT17ZmllbGR9IGxhYmVsPXtsYWJlbH0gey4uLmxheW91dH0+XG4gICAge2Zvcm0uZ2V0RmllbGREZWNvcmF0b3IoZmllbGQsIHtcbiAgICAgIGluaXRpYWxWYWx1ZTogaXRlbSAmJiBpdGVtW2ZpZWxkXSA/IGl0ZW1bZmllbGRdIDogJ1BBR0UnLFxuICAgICAgcnVsZXM6IGdldFJ1bGVzKHJ1bGVzLCBsYWJlbClcbiAgICB9KShcbiAgICAgIDxTZWxlY3Qgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSB7Li4ucmVzdH0+XG4gICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiUEFHRVwiPlNlaXRlPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIk1FTlVcIj5NZW7DvDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJQTEFDRUhPTERFUlwiPlBsYXR6aGFsdGVyPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIkFMSUFTXCI+QWxpYXM8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiTElOS1wiPkV4dGVybmVyIExpbms8L1NlbGVjdC5PcHRpb24+XG4gICAgICA8L1NlbGVjdD5cbiAgICApfVxuICA8L0Zvcm0uSXRlbT5cbik7XG5QYWdlVHlwZUlucHV0LmRlZmF1bHRQcm9wcyA9IHsgbGF5b3V0IH07XG5leHBvcnQgZGVmYXVsdCBQYWdlVHlwZUlucHV0O1xuIl19
