'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values2 = require('lodash/values');

var _values3 = _interopRequireDefault(_values2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphqlServerExpress = require('graphql-server-express');

var _graphqlModules = require('graphql-modules');

var _schemaBuilder = require('./schema-builder');

var _schemaBuilder2 = _interopRequireDefault(_schemaBuilder);

var _scalars = require('./scalars');

var scalarModules = _interopRequireWildcard(_scalars);

var _directives = require('./directives');

var defaultDirectives = _interopRequireWildcard(_directives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$modules = _ref.modules,
      modules = _ref$modules === undefined ? null : _ref$modules,
      _ref$directives = _ref.directives,
      directives = _ref$directives === undefined ? {} : _ref$directives;

  var schema = null;
  var _apply = function _apply(modules) {
    var raw = (0, _values3.default)(_extends({}, scalarModules, modules)).filter(function (x) {
      return x;
    });

    var _raw$reduce = raw.reduce(function (store, value) {
      if (value.onBefore) {
        store.onBefore.push(value.onBefore);
      }
      if (value.onAfter) {
        store.onAfter.push(value.onAfter);
      }
      return store;
    }, { onBefore: [], onAfter: [] }),
        onBefore = _raw$reduce.onBefore,
        onAfter = _raw$reduce.onAfter;

    var bundled = (0, _graphqlModules.bundle)(raw);
    schema = (0, _schemaBuilder2.default)(_extends({}, bundled, {
      directives: _extends({}, defaultDirectives, directives),
      onBefore: onBefore,
      onAfter: onAfter
    }));
    return schema;
  };

  if (modules) {
    _apply(modules);
  }
  return {
    middleware: (0, _graphqlServerExpress.graphqlExpress)(function (context) {
      return {
        schema: context.schema,
        context: context
      };
    }),
    express: (0, _graphqlServerExpress.graphqlExpress)(function (context) {
      return { schema: schema, context: context };
    }),
    graphi: (0, _graphqlServerExpress.graphiqlExpress)({ endpointURL: '/graphql' }),
    apply: function apply(m) {
      return _apply(m);
    },
    getSchema: function getSchema() {
      return schema;
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9ncmFwaHFsLmVzNiJdLCJuYW1lcyI6WyJzY2FsYXJNb2R1bGVzIiwiZGVmYXVsdERpcmVjdGl2ZXMiLCJtb2R1bGVzIiwiZGlyZWN0aXZlcyIsInNjaGVtYSIsImFwcGx5IiwicmF3IiwiZmlsdGVyIiwieCIsInJlZHVjZSIsInN0b3JlIiwidmFsdWUiLCJvbkJlZm9yZSIsInB1c2giLCJvbkFmdGVyIiwiYnVuZGxlZCIsIm1pZGRsZXdhcmUiLCJjb250ZXh0IiwiZXhwcmVzcyIsImdyYXBoaSIsImVuZHBvaW50VVJMIiwibSIsImdldFNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7SUFBWUEsYTs7QUFDWjs7SUFBWUMsaUI7Ozs7OztrQkFFRyxnQkFBeUM7QUFBQSwwQkFBdENDLE9BQXNDO0FBQUEsTUFBdENBLE9BQXNDLGdDQUE1QixJQUE0QjtBQUFBLDZCQUF0QkMsVUFBc0I7QUFBQSxNQUF0QkEsVUFBc0IsbUNBQVQsRUFBUzs7QUFDdEQsTUFBSUMsU0FBUyxJQUFiO0FBQ0EsTUFBTUMsU0FBUSxTQUFSQSxNQUFRLFVBQVc7QUFDdkIsUUFBTUMsTUFBTSxtQ0FBWU4sYUFBWixFQUE4QkUsT0FBOUIsR0FBeUNLLE1BQXpDLENBQWdEO0FBQUEsYUFBS0MsQ0FBTDtBQUFBLEtBQWhELENBQVo7O0FBRHVCLHNCQUVPRixJQUFJRyxNQUFKLENBQzVCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNoQixVQUFJQSxNQUFNQyxRQUFWLEVBQW9CO0FBQ2xCRixjQUFNRSxRQUFOLENBQWVDLElBQWYsQ0FBb0JGLE1BQU1DLFFBQTFCO0FBQ0Q7QUFDRCxVQUFJRCxNQUFNRyxPQUFWLEVBQW1CO0FBQ2pCSixjQUFNSSxPQUFOLENBQWNELElBQWQsQ0FBbUJGLE1BQU1HLE9BQXpCO0FBQ0Q7QUFDRCxhQUFPSixLQUFQO0FBQ0QsS0FUMkIsRUFVNUIsRUFBRUUsVUFBVSxFQUFaLEVBQWdCRSxTQUFTLEVBQXpCLEVBVjRCLENBRlA7QUFBQSxRQUVmRixRQUZlLGVBRWZBLFFBRmU7QUFBQSxRQUVMRSxPQUZLLGVBRUxBLE9BRks7O0FBY3ZCLFFBQU1DLFVBQVUsNEJBQU9ULEdBQVAsQ0FBaEI7QUFDQUYsYUFBUywwQ0FDSlcsT0FESTtBQUVQWiwrQkFBaUJGLGlCQUFqQixFQUF1Q0UsVUFBdkMsQ0FGTztBQUdQUyx3QkFITztBQUlQRTtBQUpPLE9BQVQ7QUFNQSxXQUFPVixNQUFQO0FBQ0QsR0F0QkQ7O0FBd0JBLE1BQUlGLE9BQUosRUFBYTtBQUNYRyxXQUFNSCxPQUFOO0FBQ0Q7QUFDRCxTQUFPO0FBQ0xjLGdCQUFZLDBDQUFlO0FBQUEsYUFBWTtBQUNyQ1osZ0JBQVFhLFFBQVFiLE1BRHFCO0FBRXJDYTtBQUZxQyxPQUFaO0FBQUEsS0FBZixDQURQO0FBS0xDLGFBQVMsMENBQWU7QUFBQSxhQUFZLEVBQUVkLGNBQUYsRUFBVWEsZ0JBQVYsRUFBWjtBQUFBLEtBQWYsQ0FMSjtBQU1MRSxZQUFRLDJDQUFnQixFQUFFQyxhQUFhLFVBQWYsRUFBaEIsQ0FOSDtBQU9MZixXQUFPO0FBQUEsYUFBS0EsT0FBTWdCLENBQU4sQ0FBTDtBQUFBLEtBUEY7QUFRTEMsZUFBVztBQUFBLGFBQU1sQixNQUFOO0FBQUE7QUFSTixHQUFQO0FBVUQsQyIsImZpbGUiOiJjbXMvZ3JhcGhxbC9zZXJ2ZXIvZ3JhcGhxbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYXBocWxFeHByZXNzLCBncmFwaGlxbEV4cHJlc3MgfSBmcm9tICdncmFwaHFsLXNlcnZlci1leHByZXNzJztcbmltcG9ydCB7IGJ1bmRsZSB9IGZyb20gJ2dyYXBocWwtbW9kdWxlcyc7XG5pbXBvcnQgeyB2YWx1ZXMgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGJ1aWxkU2NoZW1hIGZyb20gJy4vc2NoZW1hLWJ1aWxkZXInO1xuaW1wb3J0ICogYXMgc2NhbGFyTW9kdWxlcyBmcm9tICcuL3NjYWxhcnMnO1xuaW1wb3J0ICogYXMgZGVmYXVsdERpcmVjdGl2ZXMgZnJvbSAnLi9kaXJlY3RpdmVzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgbW9kdWxlcyA9IG51bGwsIGRpcmVjdGl2ZXMgPSB7fSB9KSA9PiB7XG4gIGxldCBzY2hlbWEgPSBudWxsO1xuICBjb25zdCBhcHBseSA9IG1vZHVsZXMgPT4ge1xuICAgIGNvbnN0IHJhdyA9IHZhbHVlcyh7IC4uLnNjYWxhck1vZHVsZXMsIC4uLm1vZHVsZXMgfSkuZmlsdGVyKHggPT4geCk7XG4gICAgY29uc3QgeyBvbkJlZm9yZSwgb25BZnRlciB9ID0gcmF3LnJlZHVjZShcbiAgICAgIChzdG9yZSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlLm9uQmVmb3JlKSB7XG4gICAgICAgICAgc3RvcmUub25CZWZvcmUucHVzaCh2YWx1ZS5vbkJlZm9yZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLm9uQWZ0ZXIpIHtcbiAgICAgICAgICBzdG9yZS5vbkFmdGVyLnB1c2godmFsdWUub25BZnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgICAgfSxcbiAgICAgIHsgb25CZWZvcmU6IFtdLCBvbkFmdGVyOiBbXSB9LFxuICAgICk7XG4gICAgY29uc3QgYnVuZGxlZCA9IGJ1bmRsZShyYXcpO1xuICAgIHNjaGVtYSA9IGJ1aWxkU2NoZW1hKHtcbiAgICAgIC4uLmJ1bmRsZWQsXG4gICAgICBkaXJlY3RpdmVzOiB7IC4uLmRlZmF1bHREaXJlY3RpdmVzLCAuLi5kaXJlY3RpdmVzIH0sXG4gICAgICBvbkJlZm9yZSxcbiAgICAgIG9uQWZ0ZXIsXG4gICAgfSk7XG4gICAgcmV0dXJuIHNjaGVtYTtcbiAgfTtcblxuICBpZiAobW9kdWxlcykge1xuICAgIGFwcGx5KG1vZHVsZXMpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWlkZGxld2FyZTogZ3JhcGhxbEV4cHJlc3MoY29udGV4dCA9PiAoe1xuICAgICAgc2NoZW1hOiBjb250ZXh0LnNjaGVtYSxcbiAgICAgIGNvbnRleHQsXG4gICAgfSkpLFxuICAgIGV4cHJlc3M6IGdyYXBocWxFeHByZXNzKGNvbnRleHQgPT4gKHsgc2NoZW1hLCBjb250ZXh0IH0pKSxcbiAgICBncmFwaGk6IGdyYXBoaXFsRXhwcmVzcyh7IGVuZHBvaW50VVJMOiAnL2dyYXBocWwnIH0pLFxuICAgIGFwcGx5OiBtID0+IGFwcGx5KG0pLFxuICAgIGdldFNjaGVtYTogKCkgPT4gc2NoZW1hLFxuICB9O1xufTtcbiJdfQ==
