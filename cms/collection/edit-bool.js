'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switch = require('antd/lib/switch');

var _switch2 = _interopRequireDefault(_switch);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/switch/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.name === 'Boolean';
  },
  form: (0, _recompose.toClass)(function (_ref2) {
    var type = _ref2.type,
        props = _objectWithoutProperties(_ref2, ['type']);

    return _react2.default.createElement(
      _formItem2.default,
      props,
      _react2.default.createElement(_switch2.default, _extends({}, props, { checked: props.value }))
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtYm9vbC5lczYiXSwibmFtZXMiOlsicnVsZSIsImlubmVyVHlwZSIsIm5hbWUiLCJmb3JtIiwidHlwZSIsInByb3BzIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7a0JBRWU7QUFDYkEsUUFBTTtBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFdBQW1CQSxVQUFVQyxJQUFWLEtBQW1CLFNBQXRDO0FBQUEsR0FETztBQUViQyxRQUFNLHdCQUFRO0FBQUEsUUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsUUFBWUMsS0FBWjs7QUFBQSxXQUNaO0FBQUE7QUFBY0EsV0FBZDtBQUNFLG1FQUFZQSxLQUFaLElBQW1CLFNBQVNBLE1BQU1DLEtBQWxDO0FBREYsS0FEWTtBQUFBLEdBQVI7QUFGTyxDIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL2VkaXQtYm9vbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b0NsYXNzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJy4vZm9ybS1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlOiAoeyBpbm5lclR5cGUgfSkgPT4gaW5uZXJUeXBlLm5hbWUgPT09ICdCb29sZWFuJyxcbiAgZm9ybTogdG9DbGFzcygoeyB0eXBlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPEZvcm1JdGVtIHsuLi5wcm9wc30+XG4gICAgICA8U3dpdGNoIHsuLi5wcm9wc30gY2hlY2tlZD17cHJvcHMudmFsdWV9IC8+XG4gICAgPC9Gb3JtSXRlbT5cbiAgKSksXG59O1xuIl19
