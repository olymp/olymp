var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { unflatten } from 'olymp-utils';
import { Panel } from 'olymp-fela';
import { Input, PageType, State, Parent, InputNumber, TextArea } from './edits';

var PageForm = function (_Component) {
  _inherits(PageForm, _Component);

  function PageForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PageForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageForm.__proto__ || Object.getPrototypeOf(PageForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleNameChange = function (e) {
      // set slug if unset
      var form = _this.props.form;
      var value = e.target.value;

      form.setFieldsValue({ slug: '/' + slugify(value) });
    }, _this.handleTypeChange = function (e) {
      // set slug if unset
      var form = _this.props.form;

      if (e === 'MENU') {
        form.setFieldsValue({ parentId: null });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          form = _props.form,
          item = _props.item,
          items = _props.items;

      var tree = unflatten(items.map(function (_ref2) {
        var id = _ref2.id,
            name = _ref2.name,
            parentId = _ref2.parentId;
        return {
          value: id,
          label: name,
          parent: parentId,
          children: []
        };
      }), { id: 'value', parentId: 'parent' });

      return React.createElement(
        Panel,
        { padding: 16, alignLabel: 'left' },
        React.createElement(Input, {
          form: form,
          item: item,
          field: 'name',
          label: 'Name',
          onChange: this.handleNameChange,
          rules: ['required'],
          type: 'text'
        }),
        React.createElement(Input, { form: form, item: item, field: 'slug', label: 'Slug', type: 'text' }),
        React.createElement(TextArea, {
          form: form,
          item: item,
          field: 'description',
          label: 'Beschreibung',
          type: 'text'
        }),
        React.createElement(State, { form: form, item: item, field: 'state', label: 'Status' }),
        React.createElement(PageType, {
          form: form,
          item: item,
          field: 'type',
          label: 'Art',
          onChange: this.handleTypeChange
        }),
        (form.getFieldValue('type') || item.type) !== 'MENU' && React.createElement(Parent, {
          form: form,
          treeData: tree,
          item: item,
          field: 'parentId',
          label: 'Men\xFC',
          placeholder: '\xDCbergeordnetes Men\xFC',
          initialValue: form.getFieldValue('parentId')
        }),
        (form.getFieldValue('type') || item.type) === 'LINK' && React.createElement(Input, {
          form: form,
          item: item,
          field: 'href',
          label: 'Ext. Link',
          type: 'text'
        }),
        (form.getFieldValue('type') || item.type) === 'ALIAS' && React.createElement(Parent, {
          form: form,
          treeData: tree,
          item: item,
          field: 'aliasId',
          label: 'Alias',
          placeholder: 'Alias zu..'
        }),
        React.createElement(InputNumber, {
          form: form,
          item: item,
          field: 'order',
          label: 'Reihenfolge'
        })
      );
    }
  }]);

  return PageForm;
}(Component);

PageForm.propTypes = {
  item: PropTypes.object,
  form: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object)
};
PageForm.defaultProps = {
  item: {},
  form: {},
  items: []
};
export default PageForm;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9mb3JtLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInNsdWdpZnkiLCJ1bmZsYXR0ZW4iLCJQYW5lbCIsIklucHV0IiwiUGFnZVR5cGUiLCJTdGF0ZSIsIlBhcmVudCIsIklucHV0TnVtYmVyIiwiVGV4dEFyZWEiLCJQYWdlRm9ybSIsImhhbmRsZU5hbWVDaGFuZ2UiLCJmb3JtIiwicHJvcHMiLCJ2YWx1ZSIsImUiLCJ0YXJnZXQiLCJzZXRGaWVsZHNWYWx1ZSIsInNsdWciLCJoYW5kbGVUeXBlQ2hhbmdlIiwicGFyZW50SWQiLCJpdGVtIiwiaXRlbXMiLCJ0cmVlIiwibWFwIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImdldEZpZWxkVmFsdWUiLCJ0eXBlIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiYXJyYXlPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLFNBQXBCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxLQUFULEVBQWdCQyxRQUFoQixFQUEwQkMsS0FBMUIsRUFBaUNDLE1BQWpDLEVBQXlDQyxXQUF6QyxFQUFzREMsUUFBdEQsUUFBc0UsU0FBdEU7O0lBRU1DLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNKQyxnQixHQUFtQixhQUFLO0FBQ3RCO0FBRHNCLFVBRWRDLElBRmMsR0FFTCxNQUFLQyxLQUZBLENBRWRELElBRmM7QUFBQSxVQUdkRSxLQUhjLEdBR0pDLEVBQUVDLE1BSEUsQ0FHZEYsS0FIYzs7QUFJdEJGLFdBQUtLLGNBQUwsQ0FBb0IsRUFBRUMsWUFBVWpCLFFBQVFhLEtBQVIsQ0FBWixFQUFwQjtB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Z0JBQU1ULElBRFI7QUFFRSxnQkFBTVMsSUFGUjtBQUdFLGlCQUFNLE9BSFI7QUFJRSxpQkFBTTtBQUpSO0FBckdGLE9BREY7QUE4R0Q7Ozs7RUExSW9CdEIsUzs7QUE0SXZCVyxTQUFTc0IsU0FBVCxHQUFxQjtBQUNuQlgsUUFBTXJCLFVBQVVpQyxNQURHO0FBRW5CckIsUUFBTVosVUFBVWlDLE1BRkc7QUFHbkJYLFNBQU90QixVQUFVa0MsT0FBVixDQUFrQmxDLFVBQVVpQyxNQUE1QjtBQUhZLENBQXJCO0FBS0F2QixTQUFTeUIsWUFBVCxHQUF3QjtBQUN0QmQsUUFBTSxFQURnQjtBQUV0QlQsUUFBTSxFQUZnQjtBQUd0QlUsU0FBTztBQUhlLENBQXhCO0FBS0EsZUFBZVosUUFBZiIsImZpbGUiOiJjbXMvcGFnZXMvZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSc7XG5pbXBvcnQgeyB1bmZsYXR0ZW4gfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgeyBQYW5lbCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgSW5wdXQsIFBhZ2VUeXBlLCBTdGF0ZSwgUGFyZW50LCBJbnB1dE51bWJlciwgVGV4dEFyZWEgfSBmcm9tICcuL2VkaXRzJztcblxuY2xhc3MgUGFnZUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVOYW1lQ2hhbmdlID0gZSA9PiB7XG4gICAgLy8gc2V0IHNsdWcgaWYgdW5zZXRcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IHNsdWc6IGAvJHtzbHVnaWZ5KHZhbHVlKX1gIH0pO1xuICB9O1xuXG4gIGhhbmRsZVR5cGVDaGFuZ2UgPSBlID0+IHtcbiAgICAvLyBzZXQgc2x1ZyBpZiB1bnNldFxuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZSA9PT0gJ01FTlUnKSB7XG4gICAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgcGFyZW50SWQ6IG51bGwgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZvcm0sIGl0ZW0sIGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRyZWUgPSB1bmZsYXR0ZW4oXG4gICAgICBpdGVtcy5tYXAoKHsgaWQsIG5hbWUsIHBhcmVudElkIH0pID0+ICh7XG4gICAgICAgIHZhbHVlOiBpZCxcbiAgICAgICAgbGFiZWw6IG5hbWUsXG4gICAgICAgIHBhcmVudDogcGFyZW50SWQsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH0pKSxcbiAgICAgIHsgaWQ6ICd2YWx1ZScsIHBhcmVudElkOiAncGFyZW50JyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVsIHBhZGRpbmc9ezE2fSBhbGlnbkxhYmVsPVwibGVmdFwiPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgZmllbGQ9XCJuYW1lXCJcbiAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9XG4gICAgICAgICAgcnVsZXM9e1sncmVxdWlyZWQnXX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dCBmb3JtPXtmb3JtfSBpdGVtPXtpdGVtfSBmaWVsZD1cInNsdWdcIiBsYWJlbD1cIlNsdWdcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICBmaWVsZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBsYWJlbD1cIkJlc2NocmVpYnVuZ1wiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAvPlxuICAgICAgICA8U3RhdGUgZm9ybT17Zm9ybX0gaXRlbT17aXRlbX0gZmllbGQ9XCJzdGF0ZVwiIGxhYmVsPVwiU3RhdHVzXCIgLz5cbiAgICAgICAgPFBhZ2VUeXBlXG4gICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgIGZpZWxkPVwidHlwZVwiXG4gICAgICAgICAgbGFiZWw9XCJBcnRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVR5cGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIHsoZm9ybS5nZXRGaWVsZFZhbHVlKCd0eXBlJykgfHwgaXRlbS50eXBlKSAhPT0gJ01FTlUnICYmIChcbiAgICAgICAgICA8UGFyZW50XG4gICAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgICAgdHJlZURhdGE9e3RyZWV9XG4gICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgZmllbGQ9XCJwYXJlbnRJZFwiXG4gICAgICAgICAgICBsYWJlbD1cIk1lbsO8XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiw5xiZXJnZW9yZG5ldGVzIE1lbsO8XCJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17Zm9ybS5nZXRGaWVsZFZhbHVlKCdwYXJlbnRJZCcpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHsoZm9ybS5nZXRGaWVsZFZhbHVlKCd0eXBlJykgfHwgaXRlbS50eXBlKSA9PT0gJ0xJTksnICYmIChcbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgZmllbGQ9XCJocmVmXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRXh0LiBMaW5rXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7KGZvcm0uZ2V0RmllbGRWYWx1ZSgndHlwZScpIHx8IGl0ZW0udHlwZSkgPT09ICdBTElBUycgJiYgKFxuICAgICAgICAgIDxQYXJlbnRcbiAgICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgICB0cmVlRGF0YT17dHJlZX1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBmaWVsZD1cImFsaWFzSWRcIlxuICAgICAgICAgICAgbGFiZWw9XCJBbGlhc1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFsaWFzIHp1Li5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHsvKiA8VG9nZ2xlIGZvcm09e2Zvcm19IGl0ZW09e2l0ZW19IGZpZWxkPVwiaXNNZWdhXCIgbGFiZWw9XCJNZWdhXCIgLz5cbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXG4gICAgICAgICAgbGV2ZWw9ezJ9XG4gICAgICAgICAgZGVzY3JpcHRpb249XCJEYXRlbmFuYmluZHVuZywgU29ydGllcnVuZyBVbnRlcnNlaXRlblwiXG4gICAgICAgID5cbiAgICAgICAgICBFcndlaXRlcnRcbiAgICAgICAgPC9TZWN0aW9uSGVhZGluZz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgIGZpZWxkPVwiYmluZGluZy50eXBlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInR5cFwiXG4gICAgICAgICAgbGFiZWw9XCJCaW5kdW5nc3R5cFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgZmllbGQ9XCJiaW5kaW5nLmdyb3VwQnlcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZ3JvdXBcIlxuICAgICAgICAgIGxhYmVsPVwiR3J1cHBpZXJlblwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAvPlxuICAgICAgICA8VGFnU2VsZWN0XG4gICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgIG9wdGlvbnM9e1snaWQnLCAnbmFtZScsICdzbHVnJ119XG4gICAgICAgICAgZmllbGQ9XCJiaW5kaW5nLmZpZWxkc1wiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIrbmFtZSwgLWlkXCJcbiAgICAgICAgICBsYWJlbD1cIkZlbGRlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxKc29uSW5wdXRcbiAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgZmllbGQ9XCJiaW5kaW5nLnF1ZXJ5XCJcbiAgICAgICAgICBsYWJlbD1cIkZpbHRlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUYWdTZWxlY3RcbiAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgb3B0aW9ucz17WycrbmFtZScsICctbmFtZSddfVxuICAgICAgICAgIGZpZWxkPVwic29ydGluZ1wiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIrbmFtZSwgLWlkXCJcbiAgICAgICAgICBsYWJlbD1cIlNvcnRpZXJlblwiXG4gICAgICAgIC8+ICovfVxuICAgICAgICA8SW5wdXROdW1iZXJcbiAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgZmllbGQ9XCJvcmRlclwiXG4gICAgICAgICAgbGFiZWw9XCJSZWloZW5mb2xnZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1BhbmVsPlxuICAgICk7XG4gIH1cbn1cblBhZ2VGb3JtLnByb3BUeXBlcyA9IHtcbiAgaXRlbTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZm9ybTogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxufTtcblBhZ2VGb3JtLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXRlbToge30sXG4gIGZvcm06IHt9LFxuICBpdGVtczogW10sXG59O1xuZXhwb3J0IGRlZmF1bHQgUGFnZUZvcm07XG4iXX0=
