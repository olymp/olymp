'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

var _error = require('graphql/error');

var _graphql = require('graphql');

exports.default = {
  schema: '\n    scalar Markdown\n  ',
  resolvers: {
    Markdown: new _graphql.GraphQLScalarType({
      name: 'Markdown',
      description: 'The Markdown scalar type represents text in markdown language.',
      parseValue: function parseValue(value) {
        return value ? '' + value : null;
      },
      serialize: function serialize(value) {
        return value ? '' + value : null;
      },
      parseLiteral: function parseLiteral(ast) {
        if (ast.kind === _language.Kind.STRING) {
          return ast.value ? '' + ast.value : null;
        }return null;
      }
    })
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL21hcmtkb3duLmVzNiJdLCJuYW1lcyI6WyJzY2hlbWEiLCJyZXNvbHZlcnMiLCJNYXJrZG93biIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInBhcnNlVmFsdWUiLCJ2YWx1ZSIsInNlcmlhbGl6ZSIsInBhcnNlTGl0ZXJhbCIsImFzdCIsImtpbmQiLCJTVFJJTkciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQUNBOztrQkFFZTtBQUNiQSxxQ0FEYTtBQUliQyxhQUFXO0FBQ1RDLGNBQVUsK0JBQXNCO0FBQzlCQyxZQUFNLFVBRHdCO0FBRTlCQyxtQkFDRSxnRUFINEI7QUFJOUJDLGdCQUo4QixzQkFJbkJDLEtBSm1CLEVBSVo7QUFDaEIsZUFBT0EsYUFBV0EsS0FBWCxHQUFxQixJQUE1QjtBQUNELE9BTjZCO0FBTzlCQyxlQVA4QixxQkFPcEJELEtBUG9CLEVBT2I7QUFDZixlQUFPQSxhQUFXQSxLQUFYLEdBQXFCLElBQTVCO0FBQ0QsT0FUNkI7QUFVOUJFLGtCQVY4Qix3QkFVakJDLEdBVmlCLEVBVVo7QUFDaEIsWUFBSUEsSUFBSUMsSUFBSixLQUFhLGVBQUtDLE1BQXRCLEVBQThCO0FBQzVCLGlCQUFPRixJQUFJSCxLQUFKLFFBQWVHLElBQUlILEtBQW5CLEdBQTZCLElBQXBDO0FBQ0QsU0FBQyxPQUFPLElBQVA7QUFDSDtBQWQ2QixLQUF0QjtBQUREO0FBSkUsQyIsImZpbGUiOiJjbXMvZ3JhcGhxbC9zZXJ2ZXIvc2NhbGFycy9tYXJrZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtpbmQgfSBmcm9tICdncmFwaHFsL2xhbmd1YWdlJztcbmltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gJ2dyYXBocWwvZXJyb3InO1xuaW1wb3J0IHsgR3JhcGhRTFNjYWxhclR5cGUgfSBmcm9tICdncmFwaHFsJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzY2hlbWE6IGBcbiAgICBzY2FsYXIgTWFya2Rvd25cbiAgYCxcbiAgcmVzb2x2ZXJzOiB7XG4gICAgTWFya2Rvd246IG5ldyBHcmFwaFFMU2NhbGFyVHlwZSh7XG4gICAgICBuYW1lOiAnTWFya2Rvd24nLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgTWFya2Rvd24gc2NhbGFyIHR5cGUgcmVwcmVzZW50cyB0ZXh0IGluIG1hcmtkb3duIGxhbmd1YWdlLicsXG4gICAgICBwYXJzZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA/IGAke3ZhbHVlfWAgOiBudWxsO1xuICAgICAgfSxcbiAgICAgIHNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPyBgJHt2YWx1ZX1gIDogbnVsbDtcbiAgICAgIH0sXG4gICAgICBwYXJzZUxpdGVyYWwoYXN0KSB7XG4gICAgICAgIGlmIChhc3Qua2luZCA9PT0gS2luZC5TVFJJTkcpIHtcbiAgICAgICAgICByZXR1cm4gYXN0LnZhbHVlID8gYCR7YXN0LnZhbHVlfWAgOiBudWxsO1xuICAgICAgICB9IHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbn07XG4iXX0=
