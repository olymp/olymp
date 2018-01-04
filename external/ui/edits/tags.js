'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n  query tags {\n    tags {\n      id\n    }\n  }\n'], ['\n  query tags {\n    tags {\n      id\n    }\n  }\n']);

require('antd/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TagsEditor = (_dec = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject)), _dec(_class = function (_Component) {
  _inherits(TagsEditor, _Component);

  function TagsEditor() {
    _classCallCheck(this, TagsEditor);

    return _possibleConstructorReturn(this, (TagsEditor.__proto__ || Object.getPrototypeOf(TagsEditor)).apply(this, arguments));
  }

  _createClass(TagsEditor, [{
    key: 'render',
    value: function render() {
      var tags = this.props.data.tags || [];
      return _react2.default.createElement(
        _select2.default,
        _extends({}, this.props, { mode: 'tags' }),
        tags.map(function (tag) {
          return _react2.default.createElement(
            _select2.default.Option,
            { key: tag.id },
            tag.id
          );
        })
      );
    }
  }]);

  return TagsEditor;
}(_react.Component)) || _class);
exports.default = TagsEditor;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2VkaXRzL3RhZ3MuZXM2Il0sIm5hbWVzIjpbIlRhZ3NFZGl0b3IiLCJ0YWdzIiwicHJvcHMiLCJkYXRhIiwibWFwIiwidGFnIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBU3FCQSxVLFdBUHBCLHFFOzs7Ozs7Ozs7Ozs2QkFRVTtBQUNQLFVBQU1DLE9BQU8sS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCRixJQUFoQixJQUF3QixFQUFyQztBQUNBLGFBQ0U7QUFBQTtBQUFBLHFCQUFZLEtBQUtDLEtBQWpCLElBQXdCLE1BQUssTUFBN0I7QUFDR0QsYUFBS0csR0FBTCxDQUFTO0FBQUEsaUJBQU87QUFBQSw2QkFBUSxNQUFSO0FBQUEsY0FBZSxLQUFLQyxJQUFJQyxFQUF4QjtBQUE2QkQsZ0JBQUlDO0FBQWpDLFdBQVA7QUFBQSxTQUFUO0FBREgsT0FERjtBQUtEOzs7OztrQkFSa0JOLFUiLCJmaWxlIjoiZXh0ZXJuYWwvdWkvZWRpdHMvdGFncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbkBncmFwaHFsKGdxbGBcbiAgcXVlcnkgdGFncyB7XG4gICAgdGFncyB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZ3NFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGFncyA9IHRoaXMucHJvcHMuZGF0YS50YWdzIHx8IFtdO1xuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0IHsuLi50aGlzLnByb3BzfSBtb2RlPVwidGFnc1wiPlxuICAgICAgICB7dGFncy5tYXAodGFnID0+IDxTZWxlY3QuT3B0aW9uIGtleT17dGFnLmlkfT57dGFnLmlkfTwvU2VsZWN0Lk9wdGlvbj4pfVxuICAgICAgPC9TZWxlY3Q+XG4gICAgKTtcbiAgfVxufVxuIl19
