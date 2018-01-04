'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _lowerFirst2 = require('lodash/lowerFirst');

var _lowerFirst3 = _interopRequireDefault(_lowerFirst2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n        query ', 'List($query: ', 'Query) {\n          items: ', 'List(query: $query) {\n            ', '\n          }\n        }\n      '], ['\n        query ', 'List($query: ', 'Query) {\n          items: ', 'List(query: $query) {\n            ', '\n          }\n        }\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n              query ', 'List($query: ', 'Query) {\n                items: ', 'List(query: $query) {\n                  ', '\n                }\n              }\n            '], ['\n              query ', 'List($query: ', 'Query) {\n                items: ', 'List(query: $query) {\n                  ', '\n                }\n              }\n            ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (WrappedComponent) {
  var cache = {};
  var bound = function bound(_ref) {
    var typeName = _ref.typeName,
        fieldNames = _ref.fieldNames;
    return (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject, (0, _lowerFirst3.default)(typeName), typeName, (0, _lowerFirst3.default)(typeName), fieldNames), {
      /* eslint-disable */
      options: function options(_ref2) {
        var id = _ref2.id,
            searchTerm = _ref2.searchTerm,
            query = _ref2.query,
            rest = _objectWithoutProperties(_ref2, ['id', 'searchTerm', 'query']);

        return {
          fetchPolicy: 'cache-and-network',
          variables: searchTerm ? {
            query: {
              name: {
                contains: searchTerm
              },
              state: {
                eq: (0, _get3.default)(query, 'state', 'PUBLISHED')
              }
            }
          } : {
            query: {
              state: {
                eq: (0, _get3.default)(query, 'state', 'PUBLISHED')
              }
            }
          }
        };
      }
    })(function (props) {
      return _react2.default.createElement(WrappedComponent, _extends({}, props, {
        items: props.data.items,
        refetchQuery: function refetchQuery() {
          return {
            query: (0, _graphqlTag2.default)(_templateObject2, (0, _lowerFirst3.default)(typeName), typeName, (0, _lowerFirst3.default)(typeName), fieldNames)
          };
        }
      }));
    });
  };
  return function (props) {
    if (props.typeName && props.fieldNames && props.collection) {
      var name = props.typeName + '|' + props.fieldNames;
      var Bound = cache[name] || bound(props);
      cache[name] = Bound;
      return _react2.default.createElement(Bound, props);
    }
    return null;
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3dpdGgtaXRlbXMuZXM2Il0sIm5hbWVzIjpbImNhY2hlIiwiYm91bmQiLCJ0eXBlTmFtZSIsImZpZWxkTmFtZXMiLCJvcHRpb25zIiwiaWQiLCJzZWFyY2hUZXJtIiwicXVlcnkiLCJyZXN0IiwiZmV0Y2hQb2xpY3kiLCJ2YXJpYWJsZXMiLCJuYW1lIiwiY29udGFpbnMiLCJzdGF0ZSIsImVxIiwicHJvcHMiLCJkYXRhIiwiaXRlbXMiLCJjb2xsZWN0aW9uIiwiQm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O2tCQUdlLDRCQUFvQjtBQUNqQyxNQUFNQSxRQUFRLEVBQWQ7QUFDQSxNQUFNQyxRQUFRLFNBQVJBLEtBQVE7QUFBQSxRQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxRQUFhQyxVQUFiLFFBQWFBLFVBQWI7QUFBQSxXQUNaLHFFQUVZLDBCQUFXRCxRQUFYLENBRlosRUFFZ0RBLFFBRmhELEVBR2UsMEJBQVdBLFFBQVgsQ0FIZixFQUlVQyxVQUpWLEdBUUU7QUFDRTtBQUNBQyxlQUFTO0FBQUEsWUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsWUFBT0MsVUFBUCxTQUFPQSxVQUFQO0FBQUEsWUFBbUJDLEtBQW5CLFNBQW1CQSxLQUFuQjtBQUFBLFlBQTZCQyxJQUE3Qjs7QUFBQSxlQUF5QztBQUNoREMsdUJBQWEsbUJBRG1DO0FBRWhEQyxxQkFBV0osYUFDUDtBQUNFQyxtQkFBTztBQUNMSSxvQkFBTTtBQUNKQywwQkFBVU47QUFETixlQUREO0FBSUxPLHFCQUFPO0FBQ0xDLG9CQUFJLG1CQUFJUCxLQUFKLEVBQVcsT0FBWCxFQUFvQixXQUFwQjtBQURDO0FBSkY7QUFEVCxXQURPLEdBV1A7QUFDRUEsbUJBQU87QUFDTE0scUJBQU87QUFDTEMsb0JBQUksbUJBQUlQLEtBQUosRUFBVyxPQUFYLEVBQW9CLFdBQXBCO0FBREM7QUFERjtBQURUO0FBYjRDLFNBQXpDO0FBQUE7QUFGWCxLQVJGLEVBZ0NFO0FBQUEsYUFDQSw4QkFBQyxnQkFBRCxlQUNNUSxLQUROO0FBRUUsZUFBT0EsTUFBTUMsSUFBTixDQUFXQyxLQUZwQjtBQUdFLHNCQUFjLHdCQUFNO0FBQ2xCLGlCQUFPO0FBQ0xWLCtEQUNVLDBCQUFXTCxRQUFYLENBRFYsRUFDOENBLFFBRDlDLEVBRWEsMEJBQVdBLFFBQVgsQ0FGYixFQUdRQyxVQUhSO0FBREssV0FBUDtBQVNEO0FBYkgsU0FEQTtBQUFBLEtBaENGLENBRFk7QUFBQSxHQUFkO0FBa0RBLFNBQU8saUJBQVM7QUFDZCxRQUFJWSxNQUFNYixRQUFOLElBQWtCYSxNQUFNWixVQUF4QixJQUFzQ1ksTUFBTUcsVUFBaEQsRUFBNEQ7QUFDMUQsVUFBTVAsT0FBVUksTUFBTWIsUUFBaEIsU0FBNEJhLE1BQU1aLFVBQXhDO0FBQ0EsVUFBTWdCLFFBQVFuQixNQUFNVyxJQUFOLEtBQWVWLE1BQU1jLEtBQU4sQ0FBN0I7QUFDQWYsWUFBTVcsSUFBTixJQUFjUSxLQUFkO0FBQ0EsYUFBTyw4QkFBQyxLQUFELEVBQVdKLEtBQVgsQ0FBUDtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsR0FSRDtBQVNELEMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vd2l0aC1pdGVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgbG93ZXJGaXJzdCwgZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlZENvbXBvbmVudCA9PiB7XG4gIGNvbnN0IGNhY2hlID0ge307XG4gIGNvbnN0IGJvdW5kID0gKHsgdHlwZU5hbWUsIGZpZWxkTmFtZXMgfSkgPT5cbiAgICBncmFwaHFsKFxuICAgICAgZ3FsYFxuICAgICAgICBxdWVyeSAke2xvd2VyRmlyc3QodHlwZU5hbWUpfUxpc3QoJHF1ZXJ5OiAke3R5cGVOYW1lfVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbXM6ICR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9TGlzdChxdWVyeTogJHF1ZXJ5KSB7XG4gICAgICAgICAgICAke2ZpZWxkTmFtZXN9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgLFxuICAgICAge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICBvcHRpb25zOiAoeyBpZCwgc2VhcmNoVGVybSwgcXVlcnksIC4uLnJlc3QgfSkgPT4gKHtcbiAgICAgICAgICBmZXRjaFBvbGljeTogJ2NhY2hlLWFuZC1uZXR3b3JrJyxcbiAgICAgICAgICB2YXJpYWJsZXM6IHNlYXJjaFRlcm1cbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBzZWFyY2hUZXJtLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGVxOiBnZXQocXVlcnksICdzdGF0ZScsICdQVUJMSVNIRUQnKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGVxOiBnZXQocXVlcnksICdzdGF0ZScsICdQVUJMSVNIRUQnKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICkocHJvcHMgPT4gKFxuICAgICAgPFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBpdGVtcz17cHJvcHMuZGF0YS5pdGVtc31cbiAgICAgICAgcmVmZXRjaFF1ZXJ5PXsoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBncWxgXG4gICAgICAgICAgICAgIHF1ZXJ5ICR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9TGlzdCgkcXVlcnk6ICR7dHlwZU5hbWV9UXVlcnkpIHtcbiAgICAgICAgICAgICAgICBpdGVtczogJHtsb3dlckZpcnN0KHR5cGVOYW1lKX1MaXN0KHF1ZXJ5OiAkcXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICR7ZmllbGROYW1lc31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgfTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKSk7XG4gIHJldHVybiBwcm9wcyA9PiB7XG4gICAgaWYgKHByb3BzLnR5cGVOYW1lICYmIHByb3BzLmZpZWxkTmFtZXMgJiYgcHJvcHMuY29sbGVjdGlvbikge1xuICAgICAgY29uc3QgbmFtZSA9IGAke3Byb3BzLnR5cGVOYW1lfXwke3Byb3BzLmZpZWxkTmFtZXN9YDtcbiAgICAgIGNvbnN0IEJvdW5kID0gY2FjaGVbbmFtZV0gfHwgYm91bmQocHJvcHMpO1xuICAgICAgY2FjaGVbbmFtZV0gPSBCb3VuZDtcbiAgICAgIHJldHVybiA8Qm91bmQgey4uLnByb3BzfSAvPjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59O1xuIl19
