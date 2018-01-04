'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

var _graphql = require('graphql');

var timeRange = {
  name: 'TimeRange',
  description: 'TimeRange scalar type',
  serialize: function serialize(value) {
    if (value && !Array.isArray(value)) {
      return Object.keys(value).map(function (x) {
        return value[x];
      });
    }
    return value;
  },
  parseValue: function parseValue(value) {
    if (value && !Array.isArray(value)) {
      return Object.keys(value).map(function (x) {
        return value[x];
      });
    }
    return value;
  },
  parseLiteral: function parseLiteral(ast) {
    switch (ast.kind) {
      case _language.Kind.INT:
        return ast.value;
      case _language.Kind.LIST:
        return ast.values.map(timeRange.parseLiteral);
      default:
        return null;
    }
  }
};

exports.default = {
  schema: '\n    scalar TimeRange\n  ',
  resolvers: {
    TimeRange: new _graphql.GraphQLScalarType(timeRange)
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL3RpbWUtcmFuZ2UuZXM2Il0sIm5hbWVzIjpbInRpbWVSYW5nZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInNlcmlhbGl6ZSIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIngiLCJwYXJzZVZhbHVlIiwicGFyc2VMaXRlcmFsIiwiYXN0Iiwia2luZCIsIklOVCIsIkxJU1QiLCJ2YWx1ZXMiLCJzY2hlbWEiLCJyZXNvbHZlcnMiLCJUaW1lUmFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFFBQU0sV0FEVTtBQUVoQkMsZUFBYSx1QkFGRztBQUdoQkMsYUFBVyxtQkFBQ0MsS0FBRCxFQUFXO0FBQ3BCLFFBQUlBLFNBQVMsQ0FBQ0MsTUFBTUMsT0FBTixDQUFjRixLQUFkLENBQWQsRUFBb0M7QUFDbEMsYUFBT0csT0FBT0MsSUFBUCxDQUFZSixLQUFaLEVBQW1CSyxHQUFuQixDQUF1QjtBQUFBLGVBQUtMLE1BQU1NLENBQU4sQ0FBTDtBQUFBLE9BQXZCLENBQVA7QUFDRDtBQUNELFdBQU9OLEtBQVA7QUFDRCxHQVJlO0FBU2hCTyxjQUFZLG9CQUFDUCxLQUFELEVBQVc7QUFDckIsUUFBSUEsU0FBUyxDQUFDQyxNQUFNQyxPQUFOLENBQWNGLEtBQWQsQ0FBZCxFQUFvQztBQUNsQyxhQUFPRyxPQUFPQyxJQUFQLENBQVlKLEtBQVosRUFBbUJLLEdBQW5CLENBQXVCO0FBQUEsZUFBS0wsTUFBTU0sQ0FBTixDQUFMO0FBQUEsT0FBdkIsQ0FBUDtBQUNEO0FBQ0QsV0FBT04sS0FBUDtBQUNELEdBZGU7QUFlaEJRLGdCQUFjLHNCQUFDQyxHQUFELEVBQVM7QUFDckIsWUFBUUEsSUFBSUMsSUFBWjtBQUNFLFdBQUssZUFBS0MsR0FBVjtBQUNFLGVBQU9GLElBQUlULEtBQVg7QUFDRixXQUFLLGVBQUtZLElBQVY7QUFDRSxlQUFPSCxJQUFJSSxNQUFKLENBQVdSLEdBQVgsQ0FBZVQsVUFBVVksWUFBekIsQ0FBUDtBQUNGO0FBQ0UsZUFBTyxJQUFQO0FBTko7QUFRRDtBQXhCZSxDQUFsQjs7a0JBNEJlO0FBQ2JNLHNDQURhO0FBSWJDLGFBQVc7QUFDVEMsZUFBVywrQkFBc0JwQixTQUF0QjtBQURGO0FBSkUsQyIsImZpbGUiOiJjbXMvZ3JhcGhxbC9zZXJ2ZXIvc2NhbGFycy90aW1lLXJhbmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2luZCB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgR3JhcGhRTFNjYWxhclR5cGUgfSBmcm9tICdncmFwaHFsJztcblxuY29uc3QgdGltZVJhbmdlID0ge1xuICBuYW1lOiAnVGltZVJhbmdlJyxcbiAgZGVzY3JpcHRpb246ICdUaW1lUmFuZ2Ugc2NhbGFyIHR5cGUnLFxuICBzZXJpYWxpemU6ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubWFwKHggPT4gdmFsdWVbeF0pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIHBhcnNlVmFsdWU6ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubWFwKHggPT4gdmFsdWVbeF0pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIHBhcnNlTGl0ZXJhbDogKGFzdCkgPT4ge1xuICAgIHN3aXRjaCAoYXN0LmtpbmQpIHtcbiAgICAgIGNhc2UgS2luZC5JTlQ6XG4gICAgICAgIHJldHVybiBhc3QudmFsdWU7XG4gICAgICBjYXNlIEtpbmQuTElTVDpcbiAgICAgICAgcmV0dXJuIGFzdC52YWx1ZXMubWFwKHRpbWVSYW5nZS5wYXJzZUxpdGVyYWwpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNjaGVtYTogYFxuICAgIHNjYWxhciBUaW1lUmFuZ2VcbiAgYCxcbiAgcmVzb2x2ZXJzOiB7XG4gICAgVGltZVJhbmdlOiBuZXcgR3JhcGhRTFNjYWxhclR5cGUodGltZVJhbmdlKSxcbiAgfSxcbn07XG4iXX0=
