import 'antd/lib/select/style';
import _Select2 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n  query tags {\n    tags {\n      id\n    }\n  }\n'], ['\n  query tags {\n    tags {\n      id\n    }\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

var TagsEditor = (_dec = graphql(gql(_templateObject)), _dec(_class = function (_Component) {
  _inherits(TagsEditor, _Component);

  function TagsEditor() {
    _classCallCheck(this, TagsEditor);

    return _possibleConstructorReturn(this, (TagsEditor.__proto__ || Object.getPrototypeOf(TagsEditor)).apply(this, arguments));
  }

  _createClass(TagsEditor, [{
    key: 'render',
    value: function render() {
      var tags = this.props.data.tags || [];
      return React.createElement(
        _Select2,
        _extends({}, this.props, { mode: 'tags' }),
        tags.map(function (tag) {
          return React.createElement(
            _Select.Option,
            { key: tag.id },
            tag.id
          );
        })
      );
    }
  }]);

  return TagsEditor;
}(Component)) || _class);
export { TagsEditor as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2VkaXRzL3RhZ3MuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ3FsIiwiZ3JhcGhxbCIsIlRhZ3NFZGl0b3IiLCJ0YWdzIiwicHJvcHMiLCJkYXRhIiwibWFwIiwidGFnIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDOztBQUVBLE9BQU9DLEdBQVAsTUFBZ0IsYUFBaEI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGNBQXhCOztJQVNxQkMsVSxXQVBwQkQsUUFBUUQsR0FBUixrQjs7Ozs7Ozs7Ozs7NkJBUVU7QUFDUCxVQUFNRyxPQUFPLEtBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkYsSUFBaEIsSUFBd0IsRUFBckM7QUFDQSxhQUNFO0FBQUE7QUFBQSxxQkFBWSxLQUFLQyxLQUFqQixJQUF3QixNQUFLLE1BQTdCO0FBQ0dELGFBQUtHLEdBQUwsQ0FBUztBQUFBLGlCQUFPO0FBQUEsb0JBQVEsTUFBUjtBQUFBLGNBQWUsS0FBS0MsSUFBSUMsRUFBeEI7QUFBNkJELGdCQUFJQztBQUFqQyxXQUFQO0FBQUEsU0FBVDtBQURILE9BREY7QUFLRDs7OztFQVJxQ1QsUztTQUFuQkcsVSIsImZpbGUiOiJwYWNrYWdlcy91aS9lZGl0cy90YWdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuQGdyYXBocWwoZ3FsYFxuICBxdWVyeSB0YWdzIHtcbiAgICB0YWdzIHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnc0VkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0YWdzID0gdGhpcy5wcm9wcy5kYXRhLnRhZ3MgfHwgW107XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3Qgey4uLnRoaXMucHJvcHN9IG1vZGU9XCJ0YWdzXCI+XG4gICAgICAgIHt0YWdzLm1hcCh0YWcgPT4gPFNlbGVjdC5PcHRpb24ga2V5PXt0YWcuaWR9Pnt0YWcuaWR9PC9TZWxlY3QuT3B0aW9uPil9XG4gICAgICA8L1NlbGVjdD5cbiAgICApO1xuICB9XG59XG4iXX0=
