import _get from 'lodash/get';
import _lowerFirst from 'lodash/lowerFirst';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n        query ', 'List($query: ', 'Query) {\n          items: ', 'List(query: $query) {\n            ', '\n          }\n        }\n      '], ['\n        query ', 'List($query: ', 'Query) {\n          items: ', 'List(query: $query) {\n            ', '\n          }\n        }\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n              query ', 'List($query: ', 'Query) {\n                items: ', 'List(query: $query) {\n                  ', '\n                }\n              }\n            '], ['\n              query ', 'List($query: ', 'Query) {\n                items: ', 'List(query: $query) {\n                  ', '\n                }\n              }\n            ']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


export default (function (WrappedComponent) {
  var cache = {};
  var bound = function bound(_ref) {
    var typeName = _ref.typeName,
        fieldNames = _ref.fieldNames;
    return graphql(gql(_templateObject, _lowerFirst(typeName), typeName, _lowerFirst(typeName), fieldNames), {
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
                eq: _get(query, 'state', 'PUBLISHED')
              }
            }
          } : {
            query: {
              state: {
                eq: _get(query, 'state', 'PUBLISHED')
              }
            }
          }
        };
      }
    })(function (props) {
      return React.createElement(WrappedComponent, _extends({}, props, {
        items: props.data.items,
        refetchQuery: function refetchQuery() {
          return {
            query: gql(_templateObject2, _lowerFirst(typeName), typeName, _lowerFirst(typeName), fieldNames)
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
      return React.createElement(Bound, props);
    }
    return null;
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vd2l0aC1pdGVtcy5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJncmFwaHFsIiwiZ3FsIiwiY2FjaGUiLCJib3VuZCIsInR5cGVOYW1lIiwiZmllbGROYW1lcyIsIm9wdGlvbnMiLCJpZCIsInNlYXJjaFRlcm0iLCJxdWVyeSIsInJlc3QiLCJmZXRjaFBvbGljeSIsInZhcmlhYmxlcyIsIm5hbWUiLCJjb250YWlucyIsInN0YXRlIiwiZXEiLCJwcm9wcyIsImRhdGEiLCJpdGVtcyIsImNvbGxlY3Rpb24iLCJCb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsY0FBeEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLGFBQWhCOzs7QUFHQSxnQkFBZSw0QkFBb0I7QUFDakMsTUFBTUMsUUFBUSxFQUFkO0FBQ0EsTUFBTUMsUUFBUSxTQUFSQSxLQUFRO0FBQUEsUUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsUUFBYUMsVUFBYixRQUFhQSxVQUFiO0FBQUEsV0FDWkwsUUFDRUMsR0FERixrQkFFWSxZQUFXRyxRQUFYLENBRlosRUFFZ0RBLFFBRmhELEVBR2UsWUFBV0EsUUFBWCxDQUhmLEVBSVVDLFVBSlYsR0FRRTtBQUNFO0FBQ0FDLGVBQVM7QUFBQSxZQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxZQUFPQyxVQUFQLFNBQU9BLFVBQVA7QUFBQSxZQUFtQkMsS0FBbkIsU0FBbUJBLEtBQW5CO0FBQUEsWUFBNkJDLElBQTdCOztBQUFBLGVBQXlDO0FBQ2hEQyx1QkFBYSxtQkFEbUM7QUFFaERDLHFCQUFXSixhQUNQO0FBQ0VDLG1CQUFPO0FBQ0xJLG9CQUFNO0FBQ0pDLDBCQUFVTjtBQUROLGVBREQ7QUFJTE8scUJBQU87QUFDTEMsb0JBQUksS0FBSVAsS0FBSixFQUFXLE9BQVgsRUFBb0IsV0FBcEI7QUFEQztBQUpGO0FBRFQsV0FETyxHQVdQO0FBQ0VBLG1CQUFPO0FBQ0xNLHFCQUFPO0FBQ0xDLG9CQUFJLEtBQUlQLEtBQUosRUFBVyxPQUFYLEVBQW9CLFdBQXBCO0FBREM7QUFERjtBQURUO0FBYjRDLFNBQXpDO0FBQUE7QUFGWCxLQVJGLEVBZ0NFO0FBQUEsYUFDQSxvQkFBQyxnQkFBRCxlQUNNUSxLQUROO0FBRUUsZUFBT0EsTUFBTUMsSUFBTixDQUFXQyxLQUZwQjtBQUdFLHNCQUFjLHdCQUFNO0FBQ2xCLGlCQUFPO0FBQ0xWLG1CQUFPUixHQUFQLG1CQUNVLFlBQVdHLFFBQVgsQ0FEVixFQUM4Q0EsUUFEOUMsRUFFYSxZQUFXQSxRQUFYLENBRmIsRUFHUUMsVUFIUjtBQURLLFdBQVA7QUFTRDtBQWJILFNBREE7QUFBQSxLQWhDRixDQURZO0FBQUEsR0FBZDtBQWtEQSxTQUFPLGlCQUFTO0FBQ2QsUUFBSVksTUFBTWIsUUFBTixJQUFrQmEsTUFBTVosVUFBeEIsSUFBc0NZLE1BQU1HLFVBQWhELEVBQTREO0FBQzFELFVBQU1QLE9BQVVJLE1BQU1iLFFBQWhCLFNBQTRCYSxNQUFNWixVQUF4QztBQUNBLFVBQU1nQixRQUFRbkIsTUFBTVcsSUFBTixLQUFlVixNQUFNYyxLQUFOLENBQTdCO0FBQ0FmLFlBQU1XLElBQU4sSUFBY1EsS0FBZDtBQUNBLGFBQU8sb0JBQUMsS0FBRCxFQUFXSixLQUFYLENBQVA7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNELEdBUkQ7QUFTRCxDQTdERCIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL3dpdGgtaXRlbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IGxvd2VyRmlyc3QsIGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWRDb21wb25lbnQgPT4ge1xuICBjb25zdCBjYWNoZSA9IHt9O1xuICBjb25zdCBib3VuZCA9ICh7IHR5cGVOYW1lLCBmaWVsZE5hbWVzIH0pID0+XG4gICAgZ3JhcGhxbChcbiAgICAgIGdxbGBcbiAgICAgICAgcXVlcnkgJHtsb3dlckZpcnN0KHR5cGVOYW1lKX1MaXN0KCRxdWVyeTogJHt0eXBlTmFtZX1RdWVyeSkge1xuICAgICAgICAgIGl0ZW1zOiAke2xvd2VyRmlyc3QodHlwZU5hbWUpfUxpc3QocXVlcnk6ICRxdWVyeSkge1xuICAgICAgICAgICAgJHtmaWVsZE5hbWVzfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgb3B0aW9uczogKHsgaWQsIHNlYXJjaFRlcm0sIHF1ZXJ5LCAuLi5yZXN0IH0pID0+ICh7XG4gICAgICAgICAgZmV0Y2hQb2xpY3k6ICdjYWNoZS1hbmQtbmV0d29yaycsXG4gICAgICAgICAgdmFyaWFibGVzOiBzZWFyY2hUZXJtXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluczogc2VhcmNoVGVybSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBlcTogZ2V0KHF1ZXJ5LCAnc3RhdGUnLCAnUFVCTElTSEVEJyksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBlcTogZ2V0KHF1ZXJ5LCAnc3RhdGUnLCAnUFVCTElTSEVEJyksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICApKHByb3BzID0+IChcbiAgICAgIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgaXRlbXM9e3Byb3BzLmRhdGEuaXRlbXN9XG4gICAgICAgIHJlZmV0Y2hRdWVyeT17KCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBxdWVyeTogZ3FsYFxuICAgICAgICAgICAgICBxdWVyeSAke2xvd2VyRmlyc3QodHlwZU5hbWUpfUxpc3QoJHF1ZXJ5OiAke3R5cGVOYW1lfVF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgaXRlbXM6ICR7bG93ZXJGaXJzdCh0eXBlTmFtZSl9TGlzdChxdWVyeTogJHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAke2ZpZWxkTmFtZXN9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgLFxuICAgICAgICAgIH07XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICkpO1xuICByZXR1cm4gcHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy50eXBlTmFtZSAmJiBwcm9wcy5maWVsZE5hbWVzICYmIHByb3BzLmNvbGxlY3Rpb24pIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBgJHtwcm9wcy50eXBlTmFtZX18JHtwcm9wcy5maWVsZE5hbWVzfWA7XG4gICAgICBjb25zdCBCb3VuZCA9IGNhY2hlW25hbWVdIHx8IGJvdW5kKHByb3BzKTtcbiAgICAgIGNhY2hlW25hbWVdID0gQm91bmQ7XG4gICAgICByZXR1cm4gPEJvdW5kIHsuLi5wcm9wc30gLz47XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufTtcbiJdfQ==
