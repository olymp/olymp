import 'antd/lib/select/style';
import _Select2 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n    query suggestions($collection: String, $field: String) {\n      suggestions(collection: $collection, field: $field) {\n        id\n      }\n    }\n  '], ['\n    query suggestions($collection: String, $field: String) {\n      suggestions(collection: $collection, field: $field) {\n        id\n      }\n    }\n  ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

var SuggestionEditor = (_dec = graphql(gql(_templateObject), {
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
      return React.createElement(
        _Select2,
        _extends({}, this.props, { mode: 'combobox' }),
        suggestions.map(function (tag) {
          return React.createElement(
            _Select.Option,
            { key: tag.id },
            tag.id
          );
        })
      );
    }
  }]);

  return SuggestionEditor;
}(Component)) || _class);
export { SuggestionEditor as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2VkaXRzL3N1Z2dlc3QuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ3FsIiwiZ3JhcGhxbCIsIlN1Z2dlc3Rpb25FZGl0b3IiLCJvcHRpb25zIiwiY29sbGVjdGlvbiIsImZpZWxkIiwidmFyaWFibGVzIiwic3VnZ2VzdGlvbnMiLCJwcm9wcyIsImRhdGEiLCJtYXAiLCJ0YWciLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7O0FBRUEsT0FBT0MsR0FBUCxNQUFnQixhQUFoQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsY0FBeEI7O0lBbUJxQkMsZ0IsV0FqQnBCRCxRQUNDRCxHQURELG1CQVFDO0FBQ0VHLFdBQVM7QUFBQSxRQUFHQyxVQUFILFFBQUdBLFVBQUg7QUFBQSxRQUFlQyxLQUFmLFFBQWVBLEtBQWY7QUFBQSxXQUE0QjtBQUNuQ0MsaUJBQVc7QUFDVEYsOEJBRFM7QUFFVEM7QUFGUztBQUR3QixLQUE1QjtBQUFBO0FBRFgsQ0FSRCxDOzs7Ozs7Ozs7Ozs2QkFrQlU7QUFDUCxVQUFNRSxjQUFjLEtBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkYsV0FBaEIsSUFBK0IsRUFBbkQ7QUFDQSxhQUNFO0FBQUE7QUFBQSxxQkFBWSxLQUFLQyxLQUFqQixJQUF3QixNQUFLLFVBQTdCO0FBQ0dELG9CQUFZRyxHQUFaLENBQWdCO0FBQUEsaUJBQU87QUFBQSxvQkFBUSxNQUFSO0FBQUEsY0FBZSxLQUFLQyxJQUFJQyxFQUF4QjtBQUE2QkQsZ0JBQUlDO0FBQWpDLFdBQVA7QUFBQSxTQUFoQjtBQURILE9BREY7QUFLRDs7OztFQVIyQ2IsUztTQUF6QkcsZ0IiLCJmaWxlIjoicGFja2FnZXMvdWkvZWRpdHMvc3VnZ2VzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbkBncmFwaHFsKFxuICBncWxgXG4gICAgcXVlcnkgc3VnZ2VzdGlvbnMoJGNvbGxlY3Rpb246IFN0cmluZywgJGZpZWxkOiBTdHJpbmcpIHtcbiAgICAgIHN1Z2dlc3Rpb25zKGNvbGxlY3Rpb246ICRjb2xsZWN0aW9uLCBmaWVsZDogJGZpZWxkKSB7XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgfVxuICBgLFxuICB7XG4gICAgb3B0aW9uczogKHsgY29sbGVjdGlvbiwgZmllbGQgfSkgPT4gKHtcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICBmaWVsZCxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG4pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWdnZXN0aW9uRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5wcm9wcy5kYXRhLnN1Z2dlc3Rpb25zIHx8IFtdO1xuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0IHsuLi50aGlzLnByb3BzfSBtb2RlPVwiY29tYm9ib3hcIj5cbiAgICAgICAge3N1Z2dlc3Rpb25zLm1hcCh0YWcgPT4gPFNlbGVjdC5PcHRpb24ga2V5PXt0YWcuaWR9Pnt0YWcuaWR9PC9TZWxlY3QuT3B0aW9uPil9XG4gICAgICA8L1NlbGVjdD5cbiAgICApO1xuICB9XG59XG4iXX0=
