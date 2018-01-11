'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    return innerType.name === 'Date' || innerType.name === 'DateTime';
  },
  form: (0, _recompose.toClass)(function (_ref2) {
    var innerType = _ref2.innerType,
        props = _objectWithoutProperties(_ref2, ['innerType']);

    return _react2.default.createElement(
      _formItem2.default,
      props,
      _react2.default.createElement(_olympUi.DateEditor, _extends({}, props, {
        format: innerType.name === 'DateTime' ? 'DD.MM.YYYY HH:mm' : 'DD.MM.YYYY',
        showTime: innerType.name === 'DateTime' ? { format: 'HH:mm' } : null
      }))
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtZGF0ZS5lczYiXSwibmFtZXMiOlsicnVsZSIsImlubmVyVHlwZSIsIm5hbWUiLCJmb3JtIiwicHJvcHMiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7a0JBRWU7QUFDYkEsUUFBTTtBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFdBQ0pBLFVBQVVDLElBQVYsS0FBbUIsTUFBbkIsSUFBNkJELFVBQVVDLElBQVYsS0FBbUIsVUFENUM7QUFBQSxHQURPO0FBR2JDLFFBQU0sd0JBQVE7QUFBQSxRQUFHRixTQUFILFNBQUdBLFNBQUg7QUFBQSxRQUFpQkcsS0FBakI7O0FBQUEsV0FDWjtBQUFBO0FBQWNBLFdBQWQ7QUFDRSxzRUFDTUEsS0FETjtBQUVFLGdCQUNFSCxVQUFVQyxJQUFWLEtBQW1CLFVBQW5CLEdBQWdDLGtCQUFoQyxHQUFxRCxZQUh6RDtBQUtFLGtCQUFVRCxVQUFVQyxJQUFWLEtBQW1CLFVBQW5CLEdBQWdDLEVBQUVHLFFBQVEsT0FBVixFQUFoQyxHQUFzRDtBQUxsRTtBQURGLEtBRFk7QUFBQSxHQUFSO0FBSE8sQyIsImZpbGUiOiJjbXMvY29sbGVjdGlvbi9lZGl0LWRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9DbGFzcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBEYXRlRWRpdG9yIH0gZnJvbSAnb2x5bXAtdWknO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJy4vZm9ybS1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlOiAoeyBpbm5lclR5cGUgfSkgPT5cbiAgICBpbm5lclR5cGUubmFtZSA9PT0gJ0RhdGUnIHx8IGlubmVyVHlwZS5uYW1lID09PSAnRGF0ZVRpbWUnLFxuICBmb3JtOiB0b0NsYXNzKCh7IGlubmVyVHlwZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxGb3JtSXRlbSB7Li4ucHJvcHN9PlxuICAgICAgPERhdGVFZGl0b3JcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBmb3JtYXQ9e1xuICAgICAgICAgIGlubmVyVHlwZS5uYW1lID09PSAnRGF0ZVRpbWUnID8gJ0RELk1NLllZWVkgSEg6bW0nIDogJ0RELk1NLllZWVknXG4gICAgICAgIH1cbiAgICAgICAgc2hvd1RpbWU9e2lubmVyVHlwZS5uYW1lID09PSAnRGF0ZVRpbWUnID8geyBmb3JtYXQ6ICdISDptbScgfSA6IG51bGx9XG4gICAgICAvPlxuICAgIDwvRm9ybUl0ZW0+XG4gICkpLFxufTtcbiJdfQ==
