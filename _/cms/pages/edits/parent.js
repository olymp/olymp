'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _treeSelect = require('antd/lib/tree-select');

var _treeSelect2 = _interopRequireDefault(_treeSelect);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/form/style');

require('antd/lib/tree-select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('olymp-fela/antd');

var _recompose = require('recompose');

var _getRules = require('../get-rules');

var _getRules2 = _interopRequireDefault(_getRules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NullableTree = (0, _recompose.withPropsOnChange)(['onChange'], function (_ref) {
  var _onChange = _ref.onChange;
  return {
    onChange: function onChange(x) {
      return _onChange(x || null);
    }
  };
})(_treeSelect2.default);

var ParentSelect = function ParentSelect(_ref2) {
  var item = _ref2.item,
      field = _ref2.field,
      label = _ref2.label,
      layout = _ref2.layout,
      initialValue = _ref2.initialValue,
      rules = _ref2.rules,
      placeholder = _ref2.placeholder,
      form = _ref2.form,
      rest = _objectWithoutProperties(_ref2, ['item', 'field', 'label', 'layout', 'initialValue', 'rules', 'placeholder', 'form']);

  return _react2.default.createElement(
    _form2.default.Item,
    _extends({ key: field, label: label }, layout),
    form.getFieldDecorator(field, {
      initialValue: item && item[field] ? item[field] : initialValue,
      rules: (0, _getRules2.default)(rules, label)
    })(_react2.default.createElement(NullableTree, _extends({
      placeholder: placeholder || label,
      style: { width: '100%' },
      allowClear: true,
      onChange: function onChange(x) {
        return console.log(x);
      },
      dropdownStyle: { maxHeight: 400, overflowY: 'auto' }
    }, rest)))
  );
};
ParentSelect.defaultProps = { layout: _antd.layout };
exports.default = ParentSelect;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy9wYXJlbnQuZXM2Il0sIm5hbWVzIjpbIk51bGxhYmxlVHJlZSIsIm9uQ2hhbmdlIiwieCIsIlBhcmVudFNlbGVjdCIsIml0ZW0iLCJmaWVsZCIsImxhYmVsIiwibGF5b3V0IiwiaW5pdGlhbFZhbHVlIiwicnVsZXMiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJyZXN0IiwiZ2V0RmllbGREZWNvcmF0b3IiLCJ3aWR0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLGtDQUFrQixDQUFDLFVBQUQsQ0FBbEIsRUFBZ0M7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUN0RUEsY0FBVTtBQUFBLGFBQUtBLFVBQVNDLEtBQUssSUFBZCxDQUFMO0FBQUE7QUFENEQsR0FBbkI7QUFBQSxDQUFoQyx1QkFBckI7O0FBSUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsTUFDbkJDLElBRG1CLFNBQ25CQSxJQURtQjtBQUFBLE1BRW5CQyxLQUZtQixTQUVuQkEsS0FGbUI7QUFBQSxNQUduQkMsS0FIbUIsU0FHbkJBLEtBSG1CO0FBQUEsTUFJbkJDLE1BSm1CLFNBSW5CQSxNQUptQjtBQUFBLE1BS25CQyxZQUxtQixTQUtuQkEsWUFMbUI7QUFBQSxNQU1uQkMsS0FObUIsU0FNbkJBLEtBTm1CO0FBQUEsTUFPbkJDLFdBUG1CLFNBT25CQSxXQVBtQjtBQUFBLE1BUW5CQyxJQVJtQixTQVFuQkEsSUFSbUI7QUFBQSxNQVNoQkMsSUFUZ0I7O0FBQUEsU0FXbkI7QUFBQSxtQkFBTSxJQUFOO0FBQUEsZUFBVyxLQUFLUCxLQUFoQixFQUF1QixPQUFPQyxLQUE5QixJQUF5Q0MsTUFBekM7QUFDR0ksU0FBS0UsaUJBQUwsQ0FBdUJSLEtBQXZCLEVBQThCO0FBQzdCRyxvQkFBY0osUUFBUUEsS0FBS0MsS0FBTCxDQUFSLEdBQXNCRCxLQUFLQyxLQUFMLENBQXRCLEdBQW9DRyxZQURyQjtBQUU3QkMsYUFBTyx3QkFBU0EsS0FBVCxFQUFnQkgsS0FBaEI7QUFGc0IsS0FBOUIsRUFJQyw4QkFBQyxZQUFEO0FBQ0UsbUJBQWFJLGVBQWVKLEtBRDlCO0FBRUUsYUFBTyxFQUFFUSxPQUFPLE1BQVQsRUFGVDtBQUdFLHNCQUhGO0FBSUUsZ0JBQVU7QUFBQSxlQUFLQyxRQUFRQyxHQUFSLENBQVlkLENBQVosQ0FBTDtBQUFBLE9BSlo7QUFLRSxxQkFBZSxFQUFFZSxXQUFXLEdBQWIsRUFBa0JDLFdBQVcsTUFBN0I7QUFMakIsT0FNTU4sSUFOTixFQUpEO0FBREgsR0FYbUI7QUFBQSxDQUFyQjtBQTJCQVQsYUFBYWdCLFlBQWIsR0FBNEIsRUFBRVosb0JBQUYsRUFBNUI7a0JBQ2VKLFkiLCJmaWxlIjoiY21zL3BhZ2VzL2VkaXRzL3BhcmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUcmVlU2VsZWN0LCBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tICdvbHltcC1mZWxhL2FudGQnO1xuaW1wb3J0IHsgd2l0aFByb3BzT25DaGFuZ2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IGdldFJ1bGVzIGZyb20gJy4uL2dldC1ydWxlcyc7XG5cbmNvbnN0IE51bGxhYmxlVHJlZSA9IHdpdGhQcm9wc09uQ2hhbmdlKFsnb25DaGFuZ2UnXSwgKHsgb25DaGFuZ2UgfSkgPT4gKHtcbiAgb25DaGFuZ2U6IHggPT4gb25DaGFuZ2UoeCB8fCBudWxsKVxufSkpKFRyZWVTZWxlY3QpO1xuXG5jb25zdCBQYXJlbnRTZWxlY3QgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGFiZWwsXG4gIGxheW91dCxcbiAgaW5pdGlhbFZhbHVlLFxuICBydWxlcyxcbiAgcGxhY2Vob2xkZXIsXG4gIGZvcm0sXG4gIC4uLnJlc3Rcbn0pID0+IChcbiAgPEZvcm0uSXRlbSBrZXk9e2ZpZWxkfSBsYWJlbD17bGFiZWx9IHsuLi5sYXlvdXR9PlxuICAgIHtmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGZpZWxkLCB7XG4gICAgICBpbml0aWFsVmFsdWU6IGl0ZW0gJiYgaXRlbVtmaWVsZF0gPyBpdGVtW2ZpZWxkXSA6IGluaXRpYWxWYWx1ZSxcbiAgICAgIHJ1bGVzOiBnZXRSdWxlcyhydWxlcywgbGFiZWwpXG4gICAgfSkoXG4gICAgICA8TnVsbGFibGVUcmVlXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlciB8fCBsYWJlbH1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICBhbGxvd0NsZWFyXG4gICAgICAgIG9uQ2hhbmdlPXt4ID0+IGNvbnNvbGUubG9nKHgpfVxuICAgICAgICBkcm9wZG93blN0eWxlPXt7IG1heEhlaWdodDogNDAwLCBvdmVyZmxvd1k6ICdhdXRvJyB9fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9Gb3JtLkl0ZW0+XG4pO1xuUGFyZW50U2VsZWN0LmRlZmF1bHRQcm9wcyA9IHsgbGF5b3V0IH07XG5leHBvcnQgZGVmYXVsdCBQYXJlbnRTZWxlY3Q7XG4iXX0=
