'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

var _error = require('graphql/error');

var _graphql = require('graphql');

exports.default = {
  schema: '\n    scalar Slug\n  ',
  resolvers: {
    Slug: new _graphql.GraphQLScalarType({
      name: 'Slug',
      description: 'The Slug scalar type represents the url after domain part.',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL3NsdWcuZXM2Il0sIm5hbWVzIjpbInNjaGVtYSIsInJlc29sdmVycyIsIlNsdWciLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwYXJzZVZhbHVlIiwidmFsdWUiLCJzZXJpYWxpemUiLCJwYXJzZUxpdGVyYWwiLCJhc3QiLCJraW5kIiwiU1RSSU5HIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7a0JBRWU7QUFDYkEsaUNBRGE7QUFJYkMsYUFBVztBQUNUQyxVQUFNLCtCQUFzQjtBQUMxQkMsWUFBTSxNQURvQjtBQUUxQkMsbUJBQWEsNERBRmE7QUFHMUJDLGdCQUgwQixzQkFHZkMsS0FIZSxFQUdSO0FBQ2hCLGVBQU9BLEtBQVA7QUFDRCxPQUx5QjtBQU0xQkMsZUFOMEIscUJBTWhCRCxLQU5nQixFQU1UO0FBQ2YsZUFBT0EsS0FBUDtBQUNELE9BUnlCO0FBUzFCRSxrQkFUMEIsd0JBU2JDLEdBVGEsRUFTUjtBQUNoQixZQUFJQSxJQUFJQyxJQUFKLEtBQWEsZUFBS0MsTUFBdEIsRUFBOEI7QUFDNUIsZ0JBQU0sdUVBQ3lDRixJQUFJQyxJQUQ3QyxRQUVKLENBQUNELEdBQUQsQ0FGSSxDQUFOO0FBSUQ7QUFDRCxlQUFPQSxJQUFJSCxLQUFYO0FBQ0Q7QUFqQnlCLEtBQXRCO0FBREc7QUFKRSxDIiwiZmlsZSI6ImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL3NsdWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLaW5kIH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZSc7XG5pbXBvcnQgeyBHcmFwaFFMRXJyb3IgfSBmcm9tICdncmFwaHFsL2Vycm9yJztcbmltcG9ydCB7IEdyYXBoUUxTY2FsYXJUeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2NoZW1hOiBgXG4gICAgc2NhbGFyIFNsdWdcbiAgYCxcbiAgcmVzb2x2ZXJzOiB7XG4gICAgU2x1ZzogbmV3IEdyYXBoUUxTY2FsYXJUeXBlKHtcbiAgICAgIG5hbWU6ICdTbHVnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIFNsdWcgc2NhbGFyIHR5cGUgcmVwcmVzZW50cyB0aGUgdXJsIGFmdGVyIGRvbWFpbiBwYXJ0LicsXG4gICAgICBwYXJzZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXJpYWxpemUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHBhcnNlTGl0ZXJhbChhc3QpIHtcbiAgICAgICAgaWYgKGFzdC5raW5kICE9PSBLaW5kLlNUUklORykge1xuICAgICAgICAgIHRocm93IG5ldyBHcmFwaFFMRXJyb3IoXG4gICAgICAgICAgICBgUXVlcnkgZXJyb3I6IENhbiBvbmx5IHBhcnNlIFNUUklORyBnb3QgYTogJHthc3Qua2luZH0uYCxcbiAgICAgICAgICAgIFthc3RdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXN0LnZhbHVlO1xuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbn07XG4iXX0=
