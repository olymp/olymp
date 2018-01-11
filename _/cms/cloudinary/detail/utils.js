'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.FormForFullLayout = undefined;

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormForFullLayout = exports.FormForFullLayout = {
  wrapperCol: { span: 24, offset: 0 },
  style: { marginBottom: 4 }
};

var Button = exports.Button = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    marginY: theme.space3,
    marginRight: theme.space1
  };
}, function (p) {
  return _react2.default.createElement(_button2.default, p);
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2RldGFpbC91dGlscy5lczYiXSwibmFtZXMiOlsiRm9ybUZvckZ1bGxMYXlvdXQiLCJ3cmFwcGVyQ29sIiwic3BhbiIsIm9mZnNldCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiQnV0dG9uIiwidGhlbWUiLCJtYXJnaW5ZIiwic3BhY2UzIiwibWFyZ2luUmlnaHQiLCJzcGFjZTEiLCJwIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFFTyxJQUFNQSxnREFBb0I7QUFDL0JDLGNBQVksRUFBRUMsTUFBTSxFQUFSLEVBQVlDLFFBQVEsQ0FBcEIsRUFEbUI7QUFFL0JDLFNBQU8sRUFBRUMsY0FBYyxDQUFoQjtBQUZ3QixDQUExQjs7QUFLQSxJQUFNQywwQkFBUyxnQ0FDcEI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxhQUFTRCxNQUFNRSxNQUREO0FBRWRDLGlCQUFhSCxNQUFNSTtBQUZMLEdBQWhCO0FBQUEsQ0FEb0IsRUFLcEI7QUFBQSxTQUFLLGdEQUFlQyxDQUFmLENBQUw7QUFBQSxDQUxvQixFQU1wQjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUFMO0FBQUEsQ0FOb0IsQ0FBZiIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS9kZXRhaWwvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIGFzIEFudEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmV4cG9ydCBjb25zdCBGb3JtRm9yRnVsbExheW91dCA9IHtcbiAgd3JhcHBlckNvbDogeyBzcGFuOiAyNCwgb2Zmc2V0OiAwIH0sXG4gIHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogNCB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBtYXJnaW5ZOiB0aGVtZS5zcGFjZTMsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNlMSxcbiAgfSksXG4gIHAgPT4gPEFudEJ1dHRvbiB7Li4ucH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuIl19
