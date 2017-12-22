var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { slugify, unflatten } from 'olymp-utils';
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Zvcm0uZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic2x1Z2lmeSIsInVuZmxhdHRlbiIsIlBhbmVsIiwiSW5wdXQiLCJQYWdlVHlwZSIsIlN0YXRlIiwiUGFyZW50IiwiSW5wdXROdW1iZXIiLCJUZXh0QXJlYSIsIlBhZ2VGb3JtIiwiaGFuZGxlTmFtZUNoYW5nZSIsImZvcm0iLCJwcm9wcyIsInZhbHVlIiwiZSIsInRhcmdldCIsInNldEZpZWxkc1ZhbHVlIiwic2x1ZyIsImhhbmRsZVR5cGVDaGFuZ2UiLCJwYXJlbnRJZCIsIml0ZW0iLCJpdGVtcyIsInRyZWUiLCJtYXAiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInBhcmVudCIsImNoaWxkcmVuIiwiZ2V0RmllbGRWYWx1ZSIsInR5cGUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJhcnJheU9mIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLFNBQWxCLFFBQW1DLGFBQW5DO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixZQUF0QjtBQUNBLFNBQVNDLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCQyxLQUExQixFQUFpQ0MsTUFBakMsRUFBeUNDLFdBQXpDLEVBQXNEQyxRQUF0RCxRQUFzRSxTQUF0RTs7SUFFTUMsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ0pDLGdCLEdBQW1CLGFBQUs7QUFDdEI7QUFEc0IsVUFFZEMsSUFGYyxHQUVMLE1BQUtDLEtBRkEsQ0FFZEQsSUFGYztBQUFBLFVBR2RFLEtBSGMsR0FHSkMsRUFBRUMsTUFIRSxDQUdkRixLQUhjOztBQUl0QkYsV0FBS0ssY0FBTCxDQUFvQixFQUFFQyxZQUFVakIsUUFBUWEsS0FBUixDQUFaLEVBQXBCO0FBQ0QsSyxRQUVE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UjtBQUVFLGdCQUFNUyxJQUZSO0FBR0UsaUJBQU0sT0FIUjtBQUlFLGlCQUFNO0FBSlI7QUFyR0YsT0FERjtBQThHRDs7OztFQTFJb0J0QixTOztBQTRJdkJXLFNBQVNzQixTQUFULEdBQXFCO0FBQ25CWCxRQUFNckIsVUFBVWlDLE1BREc7QUFFbkJyQixRQUFNWixVQUFVaUMsTUFGRztBQUduQlgsU0FBT3RCLFVBQVVrQyxPQUFWLENBQWtCbEMsVUFBVWlDLE1BQTVCO0FBSFksQ0FBckI7QUFLQXZCLFNBQVN5QixZQUFULEdBQXdCO0FBQ3RCZCxRQUFNLEVBRGdCO0FBRXRCVCxRQUFNLEVBRmdCO0FBR3RCVSxTQUFPO0FBSGUsQ0FBeEI7QUFLQSxlQUFlWixRQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHNsdWdpZnksIHVuZmxhdHRlbiB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCB7IFBhbmVsIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBJbnB1dCwgUGFnZVR5cGUsIFN0YXRlLCBQYXJlbnQsIElucHV0TnVtYmVyLCBUZXh0QXJlYSB9IGZyb20gJy4vZWRpdHMnO1xuXG5jbGFzcyBQYWdlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGhhbmRsZU5hbWVDaGFuZ2UgPSBlID0+IHtcbiAgICAvLyBzZXQgc2x1ZyBpZiB1bnNldFxuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgc2x1ZzogYC8ke3NsdWdpZnkodmFsdWUpfWAgfSk7XG4gIH07XG5cbiAgaGFuZGxlVHlwZUNoYW5nZSA9IGUgPT4ge1xuICAgIC8vIHNldCBzbHVnIGlmIHVuc2V0XG4gICAgY29uc3QgeyBmb3JtIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChlID09PSAnTUVOVScpIHtcbiAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBwYXJlbnRJZDogbnVsbCB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZm9ybSwgaXRlbSwgaXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHJlZSA9IHVuZmxhdHRlbihcbiAgICAgIGl0ZW1zLm1hcCgoeyBpZCwgbmFtZSwgcGFyZW50SWQgfSkgPT4gKHtcbiAgICAgICAgdmFsdWU6IGlkLFxuICAgICAgICBsYWJlbDogbmFtZSxcbiAgICAgICAgcGFyZW50OiBwYXJlbnRJZCxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfSkpLFxuICAgICAgeyBpZDogJ3ZhbHVlJywgcGFyZW50SWQ6ICdwYXJlbnQnIH0sXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZWwgcGFkZGluZz17MTZ9IGFsaWduTGFiZWw9XCJsZWZ0XCI+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICBmaWVsZD1cIm5hbWVcIlxuICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX1cbiAgICAgICAgICBydWxlcz17WydyZXF1aXJlZCddfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0IGZvcm09e2Zvcm19IGl0ZW09e2l0ZW19IGZpZWxkPVwic2x1Z1wiIGxhYmVsPVwiU2x1Z1wiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgIGZpZWxkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGxhYmVsPVwiQmVzY2hyZWlidW5nXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTdGF0ZSBmb3JtPXtmb3JtfSBpdGVtPXtpdGVtfSBmaWVsZD1cInN0YXRlXCIgbGFiZWw9XCJTdGF0dXNcIiAvPlxuICAgICAgICA8UGFnZVR5cGVcbiAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgZmllbGQ9XCJ0eXBlXCJcbiAgICAgICAgICBsYWJlbD1cIkFydFwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVHlwZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgeyhmb3JtLmdldEZpZWxkVmFsdWUoJ3R5cGUnKSB8fCBpdGVtLnR5cGUpICE9PSAnTUVOVScgJiYgKFxuICAgICAgICAgIDxQYXJlbnRcbiAgICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgICB0cmVlRGF0YT17dHJlZX1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBmaWVsZD1cInBhcmVudElkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTWVuw7xcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLDnGJlcmdlb3JkbmV0ZXMgTWVuw7xcIlxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtmb3JtLmdldEZpZWxkVmFsdWUoJ3BhcmVudElkJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyhmb3JtLmdldEZpZWxkVmFsdWUoJ3R5cGUnKSB8fCBpdGVtLnR5cGUpID09PSAnTElOSycgJiYgKFxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBmaWVsZD1cImhyZWZcIlxuICAgICAgICAgICAgbGFiZWw9XCJFeHQuIExpbmtcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHsoZm9ybS5nZXRGaWVsZFZhbHVlKCd0eXBlJykgfHwgaXRlbS50eXBlKSA9PT0gJ0FMSUFTJyAmJiAoXG4gICAgICAgICAgPFBhcmVudFxuICAgICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICAgIHRyZWVEYXRhPXt0cmVlfVxuICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgIGZpZWxkPVwiYWxpYXNJZFwiXG4gICAgICAgICAgICBsYWJlbD1cIkFsaWFzXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWxpYXMgenUuLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgey8qIDxUb2dnbGUgZm9ybT17Zm9ybX0gaXRlbT17aXRlbX0gZmllbGQ9XCJpc01lZ2FcIiBsYWJlbD1cIk1lZ2FcIiAvPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmdcbiAgICAgICAgICBsZXZlbD17Mn1cbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRhdGVuYW5iaW5kdW5nLCBTb3J0aWVydW5nIFVudGVyc2VpdGVuXCJcbiAgICAgICAgPlxuICAgICAgICAgIEVyd2VpdGVydFxuICAgICAgICA8L1NlY3Rpb25IZWFkaW5nPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgZmllbGQ9XCJiaW5kaW5nLnR5cGVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHlwXCJcbiAgICAgICAgICBsYWJlbD1cIkJpbmR1bmdzdHlwXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICBmaWVsZD1cImJpbmRpbmcuZ3JvdXBCeVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJncm91cFwiXG4gICAgICAgICAgbGFiZWw9XCJHcnVwcGllcmVuXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUYWdTZWxlY3RcbiAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgb3B0aW9ucz17WydpZCcsICduYW1lJywgJ3NsdWcnXX1cbiAgICAgICAgICBmaWVsZD1cImJpbmRpbmcuZmllbGRzXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIituYW1lLCAtaWRcIlxuICAgICAgICAgIGxhYmVsPVwiRmVsZGVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEpzb25JbnB1dFxuICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICBmaWVsZD1cImJpbmRpbmcucXVlcnlcIlxuICAgICAgICAgIGxhYmVsPVwiRmlsdGVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRhZ1NlbGVjdFxuICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICBvcHRpb25zPXtbJytuYW1lJywgJy1uYW1lJ119XG4gICAgICAgICAgZmllbGQ9XCJzb3J0aW5nXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIituYW1lLCAtaWRcIlxuICAgICAgICAgIGxhYmVsPVwiU29ydGllcmVuXCJcbiAgICAgICAgLz4gKi99XG4gICAgICAgIDxJbnB1dE51bWJlclxuICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICBmaWVsZD1cIm9yZGVyXCJcbiAgICAgICAgICBsYWJlbD1cIlJlaWhlbmZvbGdlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvUGFuZWw+XG4gICAgKTtcbiAgfVxufVxuUGFnZUZvcm0ucHJvcFR5cGVzID0ge1xuICBpdGVtOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmb3JtOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG59O1xuUGFnZUZvcm0uZGVmYXVsdFByb3BzID0ge1xuICBpdGVtOiB7fSxcbiAgZm9ybToge30sXG4gIGl0ZW1zOiBbXSxcbn07XG5leHBvcnQgZGVmYXVsdCBQYWdlRm9ybTtcbiJdfQ==
