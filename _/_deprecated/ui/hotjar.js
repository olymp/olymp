'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children,
      id = _ref.id;
  return _react2.default.createElement(
    _reactHelmet.Helmet,
    null,
    id && _react2.default.createElement(
      'script',
      null,
      '\n            (function(h,o,t,j,a,r){\n              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n              h._hjSettings={hjid:' + id + ',hjsv:5};\n              a=o.getElementsByTagName(\'head\')[0];\n              r=o.createElement(\'script\');r.async=1;\n              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n              a.appendChild(r);\n            })(window,document,\'//static.hotjar.com/c/hotjar-\',\'.js?sv=\');\n          '
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2hvdGphci5lczYiXSwibmFtZXMiOlsiY2hpbGRyZW4iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztrQkFFZTtBQUFBLE1BQUdBLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLEVBQWIsUUFBYUEsRUFBYjtBQUFBLFNBQ1o7QUFBQTtBQUFBO0FBQ0VBLFVBQ0M7QUFBQTtBQUFBO0FBQUEsK0pBSThCQSxFQUo5QjtBQUFBO0FBRkgsR0FEWTtBQUFBLEMiLCJmaWxlIjoiZXh0ZXJuYWwvdWkvaG90amFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCBpZCB9KSA9PlxuICAoPEhlbG1ldD5cbiAgICB7aWQgJiZcbiAgICAgIDxzY3JpcHQ+XG4gICAgICAgIHtgXG4gICAgICAgICAgICAoZnVuY3Rpb24oaCxvLHQsaixhLHIpe1xuICAgICAgICAgICAgICBoLmhqPWguaGp8fGZ1bmN0aW9uKCl7KGguaGoucT1oLmhqLnF8fFtdKS5wdXNoKGFyZ3VtZW50cyl9O1xuICAgICAgICAgICAgICBoLl9oalNldHRpbmdzPXtoamlkOiR7aWR9LGhqc3Y6NX07XG4gICAgICAgICAgICAgIGE9by5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgICAgICAgICByPW8uY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7ci5hc3luYz0xO1xuICAgICAgICAgICAgICByLnNyYz10K2guX2hqU2V0dGluZ3MuaGppZCtqK2guX2hqU2V0dGluZ3MuaGpzdjtcbiAgICAgICAgICAgICAgYS5hcHBlbmRDaGlsZChyKTtcbiAgICAgICAgICAgIH0pKHdpbmRvdyxkb2N1bWVudCwnLy9zdGF0aWMuaG90amFyLmNvbS9jL2hvdGphci0nLCcuanM/c3Y9Jyk7XG4gICAgICAgICAgYH1cbiAgICAgIDwvc2NyaXB0Pn1cbiAgPC9IZWxtZXQ+KTtcbiJdfQ==
