'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

var _error = require('graphql/error');

var _graphql = require('graphql');

exports.default = {
  schema: '\n    scalar Color\n  ',
  resolvers: {
    Color: new _graphql.GraphQLScalarType({
      name: 'Color',
      description: 'The Color scalar type represents color in "red" or "#FFF" or "#FFFFFF" format.',
      parseValue: function parseValue(value) {
        return value;
      },
      serialize: function serialize(value) {
        return value;
      },
      parseLiteral: function parseLiteral(ast) {
        if (ast.kind !== _language.Kind.STRING) {
          throw new _error.GraphQLError('Query error: Can only parse STRING got a: ' + ast.kind + '.', [ast]);
        }
        return ast.value;
      }
    })
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL2NvbG9yLmVzNiJdLCJuYW1lcyI6WyJzY2hlbWEiLCJyZXNvbHZlcnMiLCJDb2xvciIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInBhcnNlVmFsdWUiLCJ2YWx1ZSIsInNlcmlhbGl6ZSIsInBhcnNlTGl0ZXJhbCIsImFzdCIsImtpbmQiLCJTVFJJTkciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQUNBOztrQkFFZTtBQUNiQSxrQ0FEYTtBQUliQyxhQUFXO0FBQ1RDLFdBQU8sK0JBQXNCO0FBQzNCQyxZQUFNLE9BRHFCO0FBRTNCQyxtQkFBYSxnRkFGYztBQUczQkMsZ0JBSDJCLHNCQUdoQkMsS0FIZ0IsRUFHVDtBQUNoQixlQUFPQSxLQUFQO0FBQ0QsT0FMMEI7QUFNM0JDLGVBTjJCLHFCQU1qQkQsS0FOaUIsRUFNVjtBQUNmLGVBQU9BLEtBQVA7QUFDRCxPQVIwQjtBQVMzQkUsa0JBVDJCLHdCQVNkQyxHQVRjLEVBU1Q7QUFDaEIsWUFBSUEsSUFBSUMsSUFBSixLQUFhLGVBQUtDLE1BQXRCLEVBQThCO0FBQzVCLGdCQUFNLHVFQUE4REYsSUFBSUMsSUFBbEUsUUFBMkUsQ0FBQ0QsR0FBRCxDQUEzRSxDQUFOO0FBQ0Q7QUFDRCxlQUFPQSxJQUFJSCxLQUFYO0FBQ0Q7QUFkMEIsS0FBdEI7QUFERTtBQUpFLEMiLCJmaWxlIjoiY21zL2dyYXBocWwvc2VydmVyL3NjYWxhcnMvY29sb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLaW5kIH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZSc7XG5pbXBvcnQgeyBHcmFwaFFMRXJyb3IgfSBmcm9tICdncmFwaHFsL2Vycm9yJztcbmltcG9ydCB7IEdyYXBoUUxTY2FsYXJUeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2NoZW1hOiBgXG4gICAgc2NhbGFyIENvbG9yXG4gIGAsXG4gIHJlc29sdmVyczoge1xuICAgIENvbG9yOiBuZXcgR3JhcGhRTFNjYWxhclR5cGUoe1xuICAgICAgbmFtZTogJ0NvbG9yJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIENvbG9yIHNjYWxhciB0eXBlIHJlcHJlc2VudHMgY29sb3IgaW4gXCJyZWRcIiBvciBcIiNGRkZcIiBvciBcIiNGRkZGRkZcIiBmb3JtYXQuJyxcbiAgICAgIHBhcnNlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgcGFyc2VMaXRlcmFsKGFzdCkge1xuICAgICAgICBpZiAoYXN0LmtpbmQgIT09IEtpbmQuU1RSSU5HKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEdyYXBoUUxFcnJvcihgUXVlcnkgZXJyb3I6IENhbiBvbmx5IHBhcnNlIFNUUklORyBnb3QgYTogJHthc3Qua2luZH0uYCwgW2FzdF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhc3QudmFsdWU7XG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxufTtcbiJdfQ==
