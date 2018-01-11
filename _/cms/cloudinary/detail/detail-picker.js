'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/input/style');

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

var _crop = require('../components/crop');

var _crop2 = _interopRequireDefault(_crop);

var _info = require('./info');

var _info2 = _interopRequireDefault(_info);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = _react2.default.createElement(_input2.default, { placeholder: 'Quelle' });

var _ref3 = _react2.default.createElement(_input2.default.TextArea, { rows: 3, placeholder: 'Bezeichnung' });

exports.default = function (_ref) {
  var form = _ref.form,
      item = _ref.item;

  form.getFieldDecorator(item.id + '.id', { initialValue: item.id });
  form.getFieldDecorator(item.id + '.url', { initialValue: item.url });
  form.getFieldDecorator(item.id + '.width', { initialValue: item.width });
  form.getFieldDecorator(item.id + '.height', { initialValue: item.height });

  return _react2.default.createElement(
    _form2.default,
    null,
    _react2.default.createElement(
      _form2.default.Item,
      _utils.FormForFullLayout,
      form.getFieldDecorator(item.id + '.crop', {
        initialValue: item.crop
      })(_react2.default.createElement(_crop2.default, { url: item.url, height: item.height, width: item.width }))
    ),
    _react2.default.createElement(
      _menu2.default.List,
      { title: 'Bild' },
      form.getFieldDecorator(item.id + '.source', {
        initialValue: item.source
      })(_react2.default.createElement(
        _form2.default.Item,
        _extends({ label: 'Quelle' }, _utils.FormForFullLayout),
        _ref2
      )),
      _react2.default.createElement(
        _form2.default.Item,
        _extends({ key: 'caption', label: 'Bezeichnung' }, _utils.FormForFullLayout),
        form.getFieldDecorator(item.id + '.caption', {
          initialValue: item.caption
        })(_ref3)
      )
    ),
    (0, _info2.default)(item)
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2RldGFpbC9kZXRhaWwtcGlja2VyLmVzNiJdLCJuYW1lcyI6WyJmb3JtIiwiaXRlbSIsImdldEZpZWxkRGVjb3JhdG9yIiwiaWQiLCJpbml0aWFsVmFsdWUiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImNyb3AiLCJzb3VyY2UiLCJjYXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7WUFxQlksaURBQU8sYUFBWSxRQUFuQixHOztZQU1DLDhDQUFPLFFBQVAsSUFBZ0IsTUFBTSxDQUF0QixFQUF5QixhQUFZLGFBQXJDLEc7O2tCQXpCRSxnQkFBb0I7QUFBQSxNQUFqQkEsSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUNqQ0QsT0FBS0UsaUJBQUwsQ0FBMEJELEtBQUtFLEVBQS9CLFVBQXdDLEVBQUVDLGNBQWNILEtBQUtFLEVBQXJCLEVBQXhDO0FBQ0FILE9BQUtFLGlCQUFMLENBQTBCRCxLQUFLRSxFQUEvQixXQUF5QyxFQUFFQyxjQUFjSCxLQUFLSSxHQUFyQixFQUF6QztBQUNBTCxPQUFLRSxpQkFBTCxDQUEwQkQsS0FBS0UsRUFBL0IsYUFBMkMsRUFBRUMsY0FBY0gsS0FBS0ssS0FBckIsRUFBM0M7QUFDQU4sT0FBS0UsaUJBQUwsQ0FBMEJELEtBQUtFLEVBQS9CLGNBQTRDLEVBQUVDLGNBQWNILEtBQUtNLE1BQXJCLEVBQTVDOztBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQSxxQkFBTSxJQUFOO0FBQUE7QUFDR1AsV0FBS0UsaUJBQUwsQ0FBMEJELEtBQUtFLEVBQS9CLFlBQTBDO0FBQ3pDQyxzQkFBY0gsS0FBS087QUFEc0IsT0FBMUMsRUFFRSxnREFBTSxLQUFLUCxLQUFLSSxHQUFoQixFQUFxQixRQUFRSixLQUFLTSxNQUFsQyxFQUEwQyxPQUFPTixLQUFLSyxLQUF0RCxHQUZGO0FBREgsS0FERjtBQU9FO0FBQUEscUJBQU0sSUFBTjtBQUFBLFFBQVcsT0FBTSxNQUFqQjtBQUNHTixXQUFLRSxpQkFBTCxDQUEwQkQsS0FBS0UsRUFBL0IsY0FBNEM7QUFDM0NDLHNCQUFjSCxLQUFLUTtBQUR3QixPQUE1QyxFQUdDO0FBQUEsdUJBQU0sSUFBTjtBQUFBLG1CQUFXLE9BQU0sUUFBakI7QUFBQTtBQUFBLE9BSEQsQ0FESDtBQVFFO0FBQUEsdUJBQU0sSUFBTjtBQUFBLG1CQUFXLEtBQUksU0FBZixFQUF5QixPQUFNLGFBQS9CO0FBQ0dULGFBQUtFLGlCQUFMLENBQTBCRCxLQUFLRSxFQUEvQixlQUE2QztBQUM1Q0Msd0JBQWNILEtBQUtTO0FBRHlCLFNBQTdDO0FBREg7QUFSRixLQVBGO0FBc0JHLHdCQUFhVCxJQUFiO0FBdEJILEdBREY7QUEwQkQsQyIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS9kZXRhaWwvZGV0YWlsLXBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IE1lbnUgZnJvbSAnb2x5bXAtZmVsYS9tZW51JztcbmltcG9ydCBDcm9wIGZyb20gJy4uL2NvbXBvbmVudHMvY3JvcCc7XG5pbXBvcnQgZ2V0SW1hZ2VJbmZvIGZyb20gJy4vaW5mbyc7XG5pbXBvcnQgeyBGb3JtRm9yRnVsbExheW91dCB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBmb3JtLCBpdGVtIH0pID0+IHtcbiAgZm9ybS5nZXRGaWVsZERlY29yYXRvcihgJHtpdGVtLmlkfS5pZGAsIHsgaW5pdGlhbFZhbHVlOiBpdGVtLmlkIH0pO1xuICBmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGAke2l0ZW0uaWR9LnVybGAsIHsgaW5pdGlhbFZhbHVlOiBpdGVtLnVybCB9KTtcbiAgZm9ybS5nZXRGaWVsZERlY29yYXRvcihgJHtpdGVtLmlkfS53aWR0aGAsIHsgaW5pdGlhbFZhbHVlOiBpdGVtLndpZHRoIH0pO1xuICBmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGAke2l0ZW0uaWR9LmhlaWdodGAsIHsgaW5pdGlhbFZhbHVlOiBpdGVtLmhlaWdodCB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtPlxuICAgICAgPEZvcm0uSXRlbSB7Li4uRm9ybUZvckZ1bGxMYXlvdXR9PlxuICAgICAgICB7Zm9ybS5nZXRGaWVsZERlY29yYXRvcihgJHtpdGVtLmlkfS5jcm9wYCwge1xuICAgICAgICAgIGluaXRpYWxWYWx1ZTogaXRlbS5jcm9wLFxuICAgICAgICB9KSg8Q3JvcCB1cmw9e2l0ZW0udXJsfSBoZWlnaHQ9e2l0ZW0uaGVpZ2h0fSB3aWR0aD17aXRlbS53aWR0aH0gLz4pfVxuICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgIDxNZW51Lkxpc3QgdGl0bGU9XCJCaWxkXCI+XG4gICAgICAgIHtmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGAke2l0ZW0uaWR9LnNvdXJjZWAsIHtcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IGl0ZW0uc291cmNlLFxuICAgICAgICB9KShcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiUXVlbGxlXCIgey4uLkZvcm1Gb3JGdWxsTGF5b3V0fT5cbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlF1ZWxsZVwiIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+LFxuICAgICAgICApfVxuICAgICAgICA8Rm9ybS5JdGVtIGtleT1cImNhcHRpb25cIiBsYWJlbD1cIkJlemVpY2hudW5nXCIgey4uLkZvcm1Gb3JGdWxsTGF5b3V0fT5cbiAgICAgICAgICB7Zm9ybS5nZXRGaWVsZERlY29yYXRvcihgJHtpdGVtLmlkfS5jYXB0aW9uYCwge1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBpdGVtLmNhcHRpb24sXG4gICAgICAgICAgfSkoPElucHV0LlRleHRBcmVhIHJvd3M9ezN9IHBsYWNlaG9sZGVyPVwiQmV6ZWljaG51bmdcIiAvPil9XG4gICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPC9NZW51Lkxpc3Q+XG5cbiAgICAgIHtnZXRJbWFnZUluZm8oaXRlbSl9XG4gICAgPC9Gb3JtPlxuICApO1xufTtcbiJdfQ==
