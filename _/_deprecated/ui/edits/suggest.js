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

var _templateObject = _taggedTemplateLiteral(['\n    query suggestions($collection: String, $field: String) {\n      suggestions(collection: $collection, field: $field) {\n        id\n      }\n    }\n  '], ['\n    query suggestions($collection: String, $field: String) {\n      suggestions(collection: $collection, field: $field) {\n        id\n      }\n    }\n  ']);

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

var SuggestionEditor = (_dec = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {
  options: function options(_ref) {
    var collection = _ref.collection,
        field = _ref.field;
    return {
      variables: {
        collection: collection,
        field: field
      }
    };
  }
}), _dec(_class = function (_Component) {
  _inherits(SuggestionEditor, _Component);

  function SuggestionEditor() {
    _classCallCheck(this, SuggestionEditor);

    return _possibleConstructorReturn(this, (SuggestionEditor.__proto__ || Object.getPrototypeOf(SuggestionEditor)).apply(this, arguments));
  }

  _createClass(SuggestionEditor, [{
    key: 'render',
    value: function render() {
      var suggestions = this.props.data.suggestions || [];
      return _react2.default.createElement(
        _select2.default,
        _extends({}, this.props, { mode: 'combobox' }),
        suggestions.map(function (tag) {
          return _react2.default.createElement(
            _select2.default.Option,
            { key: tag.id },
            tag.id
          );
        })
      );
    }
  }]);

  return SuggestionEditor;
}(_react.Component)) || _class);
exports.default = SuggestionEditor;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2VkaXRzL3N1Z2dlc3QuZXM2Il0sIm5hbWVzIjpbIlN1Z2dlc3Rpb25FZGl0b3IiLCJvcHRpb25zIiwiY29sbGVjdGlvbiIsImZpZWxkIiwidmFyaWFibGVzIiwic3VnZ2VzdGlvbnMiLCJwcm9wcyIsImRhdGEiLCJtYXAiLCJ0YWciLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFtQnFCQSxnQixXQWpCcEIsc0VBUUM7QUFDRUMsV0FBUztBQUFBLFFBQUdDLFVBQUgsUUFBR0EsVUFBSDtBQUFBLFFBQWVDLEtBQWYsUUFBZUEsS0FBZjtBQUFBLFdBQTRCO0FBQ25DQyxpQkFBVztBQUNURiw4QkFEUztBQUVUQztBQUZTO0FBRHdCLEtBQTVCO0FBQUE7QUFEWCxDQVJELEM7Ozs7Ozs7Ozs7OzZCQWtCVTtBQUNQLFVBQU1FLGNBQWMsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCRixXQUFoQixJQUErQixFQUFuRDtBQUNBLGFBQ0U7QUFBQTtBQUFBLHFCQUFZLEtBQUtDLEtBQWpCLElBQXdCLE1BQUssVUFBN0I7QUFDR0Qsb0JBQVlHLEdBQVosQ0FBZ0I7QUFBQSxpQkFBTztBQUFBLDZCQUFRLE1BQVI7QUFBQSxjQUFlLEtBQUtDLElBQUlDLEVBQXhCO0FBQTZCRCxnQkFBSUM7QUFBakMsV0FBUDtBQUFBLFNBQWhCO0FBREgsT0FERjtBQUtEOzs7OztrQkFSa0JWLGdCIiwiZmlsZSI6ImV4dGVybmFsL3VpL2VkaXRzL3N1Z2dlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG5AZ3JhcGhxbChcbiAgZ3FsYFxuICAgIHF1ZXJ5IHN1Z2dlc3Rpb25zKCRjb2xsZWN0aW9uOiBTdHJpbmcsICRmaWVsZDogU3RyaW5nKSB7XG4gICAgICBzdWdnZXN0aW9ucyhjb2xsZWN0aW9uOiAkY29sbGVjdGlvbiwgZmllbGQ6ICRmaWVsZCkge1xuICAgICAgICBpZFxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAge1xuICAgIG9wdGlvbnM6ICh7IGNvbGxlY3Rpb24sIGZpZWxkIH0pID0+ICh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgZmllbGQsXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxuKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VnZ2VzdGlvbkVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHRoaXMucHJvcHMuZGF0YS5zdWdnZXN0aW9ucyB8fCBbXTtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdCB7Li4udGhpcy5wcm9wc30gbW9kZT1cImNvbWJvYm94XCI+XG4gICAgICAgIHtzdWdnZXN0aW9ucy5tYXAodGFnID0+IDxTZWxlY3QuT3B0aW9uIGtleT17dGFnLmlkfT57dGFnLmlkfTwvU2VsZWN0Lk9wdGlvbj4pfVxuICAgICAgPC9TZWxlY3Q+XG4gICAgKTtcbiAgfVxufVxuIl19
