'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/form/style');

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormForFullLayout = {
  wrapperCol: { span: 24, offset: 0 },
  style: { marginBottom: 4 }
};

exports.default = function (item, app) {
  return _react2.default.createElement(
    _menu2.default.List,
    { title: 'Meta-Daten', key: '2' },
    _react2.default.createElement(
      _form2.default.Item,
      _extends({ key: 'project', label: 'Projekt' }, FormForFullLayout),
      _react2.default.createElement(_input2.default, { disabled: true, placeholder: 'Projekt', value: app })
    ),
    _react2.default.createElement(
      _form2.default.Item,
      _extends({ key: 'size', label: 'Gr\xF6\xDFe' }, FormForFullLayout),
      _react2.default.createElement(_input2.default, {
        disabled: true,
        placeholder: 'Gr\xF6\xDFe',
        value: item.width + 'x' + item.height
      })
    ),
    _react2.default.createElement(
      _form2.default.Item,
      _extends({ key: 'date', label: 'Hinzugef\xFCgt' }, FormForFullLayout),
      _react2.default.createElement(_input2.default, {
        disabled: true,
        placeholder: 'Hinzugef\xFCgt',
        value: (0, _format2.default)(item.createdAt, 'DD. MMMM YYYY, HH:mm:ss') + ' Uhr'
      })
    ),
    _react2.default.createElement(
      _form2.default.Item,
      _extends({ key: 'format', label: 'Format' }, FormForFullLayout),
      _react2.default.createElement(_input2.default, { disabled: true, placeholder: 'Format', value: item.format })
    ),
    item.format === 'pdf' ? _react2.default.createElement(
      _form2.default.Item,
      _extends({ key: 'pages', label: 'Seiten' }, FormForFullLayout),
      _react2.default.createElement(_input2.default, { disabled: true, placeholder: 'Seiten', value: item.pages })
    ) : undefined,
    _react2.default.createElement(
      _form2.default.Item,
      _extends({ key: 'bytes', label: 'Dateigr\xF6\xDFe' }, FormForFullLayout),
      _react2.default.createElement(_input2.default, {
        disabled: true,
        placeholder: 'Dateigr\xF6\xDFe',
        value: item.bytes / 1000 + ' kB'
      })
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2RldGFpbC9pbmZvLmVzNiJdLCJuYW1lcyI6WyJGb3JtRm9yRnVsbExheW91dCIsIndyYXBwZXJDb2wiLCJzcGFuIiwib2Zmc2V0Iiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJpdGVtIiwiYXBwIiwid2lkdGgiLCJoZWlnaHQiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJwYWdlcyIsInVuZGVmaW5lZCIsImJ5dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxvQkFBb0I7QUFDeEJDLGNBQVksRUFBRUMsTUFBTSxFQUFSLEVBQVlDLFFBQVEsQ0FBcEIsRUFEWTtBQUV4QkMsU0FBTyxFQUFFQyxjQUFjLENBQWhCO0FBRmlCLENBQTFCOztrQkFLZSxVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSxTQUNiO0FBQUEsbUJBQU0sSUFBTjtBQUFBLE1BQVcsT0FBTSxZQUFqQixFQUE4QixLQUFJLEdBQWxDO0FBQ0U7QUFBQSxxQkFBTSxJQUFOO0FBQUEsaUJBQVcsS0FBSSxTQUFmLEVBQXlCLE9BQU0sU0FBL0IsSUFBNkNQLGlCQUE3QztBQUNFLHVEQUFPLGNBQVAsRUFBZ0IsYUFBWSxTQUE1QixFQUFzQyxPQUFPTyxHQUE3QztBQURGLEtBREY7QUFJRTtBQUFBLHFCQUFNLElBQU47QUFBQSxpQkFBVyxLQUFJLE1BQWYsRUFBc0IsT0FBTSxhQUE1QixJQUF3Q1AsaUJBQXhDO0FBQ0U7QUFDRSxzQkFERjtBQUVFLHFCQUFZLGFBRmQ7QUFHRSxlQUFVTSxLQUFLRSxLQUFmLFNBQXdCRixLQUFLRztBQUgvQjtBQURGLEtBSkY7QUFXRTtBQUFBLHFCQUFNLElBQU47QUFBQSxpQkFBVyxLQUFJLE1BQWYsRUFBc0IsT0FBTSxnQkFBNUIsSUFBOENULGlCQUE5QztBQUNFO0FBQ0Usc0JBREY7QUFFRSxxQkFBWSxnQkFGZDtBQUdFLGVBQVUsc0JBQU9NLEtBQUtJLFNBQVosRUFBdUIseUJBQXZCLENBQVY7QUFIRjtBQURGLEtBWEY7QUFrQkU7QUFBQSxxQkFBTSxJQUFOO0FBQUEsaUJBQVcsS0FBSSxRQUFmLEVBQXdCLE9BQU0sUUFBOUIsSUFBMkNWLGlCQUEzQztBQUNFLHVEQUFPLGNBQVAsRUFBZ0IsYUFBWSxRQUE1QixFQUFxQyxPQUFPTSxLQUFLSyxNQUFqRDtBQURGLEtBbEJGO0FBcUJHTCxTQUFLSyxNQUFMLEtBQWdCLEtBQWhCLEdBQ0M7QUFBQSxxQkFBTSxJQUFOO0FBQUEsaUJBQVcsS0FBSSxPQUFmLEVBQXVCLE9BQU0sUUFBN0IsSUFBMENYLGlCQUExQztBQUNFLHVEQUFPLGNBQVAsRUFBZ0IsYUFBWSxRQUE1QixFQUFxQyxPQUFPTSxLQUFLTSxLQUFqRDtBQURGLEtBREQsR0FLQ0MsU0ExQko7QUE0QkU7QUFBQSxxQkFBTSxJQUFOO0FBQUEsaUJBQVcsS0FBSSxPQUFmLEVBQXVCLE9BQU0sa0JBQTdCLElBQThDYixpQkFBOUM7QUFDRTtBQUNFLHNCQURGO0FBRUUscUJBQVksa0JBRmQ7QUFHRSxlQUFVTSxLQUFLUSxLQUFMLEdBQWEsSUFBdkI7QUFIRjtBQURGO0FBNUJGLEdBRGE7QUFBQSxDIiwiZmlsZSI6ImNtcy9jbG91ZGluYXJ5L2RldGFpbC9pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTWVudSBmcm9tICdvbHltcC1mZWxhL21lbnUnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBGb3JtRm9yRnVsbExheW91dCA9IHtcbiAgd3JhcHBlckNvbDogeyBzcGFuOiAyNCwgb2Zmc2V0OiAwIH0sXG4gIHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogNCB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGl0ZW0sIGFwcCkgPT4gKFxuICA8TWVudS5MaXN0IHRpdGxlPVwiTWV0YS1EYXRlblwiIGtleT1cIjJcIj5cbiAgICA8Rm9ybS5JdGVtIGtleT1cInByb2plY3RcIiBsYWJlbD1cIlByb2pla3RcIiB7Li4uRm9ybUZvckZ1bGxMYXlvdXR9PlxuICAgICAgPElucHV0IGRpc2FibGVkIHBsYWNlaG9sZGVyPVwiUHJvamVrdFwiIHZhbHVlPXthcHB9IC8+XG4gICAgPC9Gb3JtLkl0ZW0+XG4gICAgPEZvcm0uSXRlbSBrZXk9XCJzaXplXCIgbGFiZWw9XCJHcsO2w59lXCIgey4uLkZvcm1Gb3JGdWxsTGF5b3V0fT5cbiAgICAgIDxJbnB1dFxuICAgICAgICBkaXNhYmxlZFxuICAgICAgICBwbGFjZWhvbGRlcj1cIkdyw7bDn2VcIlxuICAgICAgICB2YWx1ZT17YCR7aXRlbS53aWR0aH14JHtpdGVtLmhlaWdodH1gfVxuICAgICAgLz5cbiAgICA8L0Zvcm0uSXRlbT5cbiAgICA8Rm9ybS5JdGVtIGtleT1cImRhdGVcIiBsYWJlbD1cIkhpbnp1Z2Vmw7xndFwiIHsuLi5Gb3JtRm9yRnVsbExheW91dH0+XG4gICAgICA8SW5wdXRcbiAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJIaW56dWdlZsO8Z3RcIlxuICAgICAgICB2YWx1ZT17YCR7Zm9ybWF0KGl0ZW0uY3JlYXRlZEF0LCAnREQuIE1NTU0gWVlZWSwgSEg6bW06c3MnKX0gVWhyYH1cbiAgICAgIC8+XG4gICAgPC9Gb3JtLkl0ZW0+XG4gICAgPEZvcm0uSXRlbSBrZXk9XCJmb3JtYXRcIiBsYWJlbD1cIkZvcm1hdFwiIHsuLi5Gb3JtRm9yRnVsbExheW91dH0+XG4gICAgICA8SW5wdXQgZGlzYWJsZWQgcGxhY2Vob2xkZXI9XCJGb3JtYXRcIiB2YWx1ZT17aXRlbS5mb3JtYXR9IC8+XG4gICAgPC9Gb3JtLkl0ZW0+XG4gICAge2l0ZW0uZm9ybWF0ID09PSAncGRmJyA/IChcbiAgICAgIDxGb3JtLkl0ZW0ga2V5PVwicGFnZXNcIiBsYWJlbD1cIlNlaXRlblwiIHsuLi5Gb3JtRm9yRnVsbExheW91dH0+XG4gICAgICAgIDxJbnB1dCBkaXNhYmxlZCBwbGFjZWhvbGRlcj1cIlNlaXRlblwiIHZhbHVlPXtpdGVtLnBhZ2VzfSAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgKSA6IChcbiAgICAgIHVuZGVmaW5lZFxuICAgICl9XG4gICAgPEZvcm0uSXRlbSBrZXk9XCJieXRlc1wiIGxhYmVsPVwiRGF0ZWlncsO2w59lXCIgey4uLkZvcm1Gb3JGdWxsTGF5b3V0fT5cbiAgICAgIDxJbnB1dFxuICAgICAgICBkaXNhYmxlZFxuICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGVpZ3LDtsOfZVwiXG4gICAgICAgIHZhbHVlPXtgJHtpdGVtLmJ5dGVzIC8gMTAwMH0ga0JgfVxuICAgICAgLz5cbiAgICA8L0Zvcm0uSXRlbT5cbiAgPC9NZW51Lkxpc3Q+XG4pO1xuIl19
