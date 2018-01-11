'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _olympUi = require('olymp-ui');

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.name === 'Color';
  },
  form: (0, _recompose.toClass)(function (_ref2) {
    var type = _ref2.type,
        props = _objectWithoutProperties(_ref2, ['type']);

    return _react2.default.createElement(
      _formItem2.default,
      props,
      _react2.default.createElement(_olympUi.ColorEditor, props)
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtY29sb3IuZXM2Il0sIm5hbWVzIjpbInJ1bGUiLCJpbm5lclR5cGUiLCJuYW1lIiwiZm9ybSIsInR5cGUiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7a0JBRWU7QUFDYkEsUUFBTTtBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFdBQW1CQSxVQUFVQyxJQUFWLEtBQW1CLE9BQXRDO0FBQUEsR0FETztBQUViQyxRQUFNLHdCQUFRO0FBQUEsUUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsUUFBWUMsS0FBWjs7QUFBQSxXQUNaO0FBQUE7QUFBY0EsV0FBZDtBQUNFLDBEQUFpQkEsS0FBakI7QUFERixLQURZO0FBQUEsR0FBUjtBQUZPLEMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vZWRpdC1jb2xvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b0NsYXNzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IENvbG9yRWRpdG9yIH0gZnJvbSAnb2x5bXAtdWknO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJy4vZm9ybS1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlOiAoeyBpbm5lclR5cGUgfSkgPT4gaW5uZXJUeXBlLm5hbWUgPT09ICdDb2xvcicsXG4gIGZvcm06IHRvQ2xhc3MoKHsgdHlwZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxGb3JtSXRlbSB7Li4ucHJvcHN9PlxuICAgICAgPENvbG9yRWRpdG9yIHsuLi5wcm9wc30gLz5cbiAgICA8L0Zvcm1JdGVtPlxuICApKSxcbn07XG4iXX0=
