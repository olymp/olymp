'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

var _error = require('graphql/error');

var _graphql = require('graphql');

exports.default = {
  schema: '\n    scalar Email\n  ',
  resolvers: {
    Email: new _graphql.GraphQLScalarType({
      name: 'Email',
      description: 'The email scalar type represents email adress.',
      parseValue: function parseValue(value) {
        return value ? value.toLowerCase() : value;
      },
      serialize: function serialize(value) {
        return value ? value.toLowerCase() : value;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL2VtYWlsLmVzNiJdLCJuYW1lcyI6WyJzY2hlbWEiLCJyZXNvbHZlcnMiLCJFbWFpbCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInBhcnNlVmFsdWUiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwic2VyaWFsaXplIiwicGFyc2VMaXRlcmFsIiwiYXN0Iiwia2luZCIsIlNUUklORyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O2tCQUVlO0FBQ2JBLGtDQURhO0FBSWJDLGFBQVc7QUFDVEMsV0FBTywrQkFBc0I7QUFDM0JDLFlBQU0sT0FEcUI7QUFFM0JDLG1CQUFhLGdEQUZjO0FBRzNCQyxnQkFIMkIsc0JBR2hCQyxLQUhnQixFQUdUO0FBQ2hCLGVBQU9BLFFBQVFBLE1BQU1DLFdBQU4sRUFBUixHQUE4QkQsS0FBckM7QUFDRCxPQUwwQjtBQU0zQkUsZUFOMkIscUJBTWpCRixLQU5pQixFQU1WO0FBQ2YsZUFBT0EsUUFBUUEsTUFBTUMsV0FBTixFQUFSLEdBQThCRCxLQUFyQztBQUNELE9BUjBCO0FBUzNCRyxrQkFUMkIsd0JBU2RDLEdBVGMsRUFTVDtBQUNoQixZQUFJQSxJQUFJQyxJQUFKLEtBQWEsZUFBS0MsTUFBdEIsRUFBOEI7QUFDNUIsZ0JBQU0sdUVBQ3lDRixJQUFJQyxJQUQ3QyxRQUVKLENBQUNELEdBQUQsQ0FGSSxDQUFOO0FBSUQ7QUFDRCxlQUFPQSxJQUFJSixLQUFYO0FBQ0Q7QUFqQjBCLEtBQXRCO0FBREU7QUFKRSxDIiwiZmlsZSI6ImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL2VtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2luZCB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgR3JhcGhRTEVycm9yIH0gZnJvbSAnZ3JhcGhxbC9lcnJvcic7XG5pbXBvcnQgeyBHcmFwaFFMU2NhbGFyVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNjaGVtYTogYFxuICAgIHNjYWxhciBFbWFpbFxuICBgLFxuICByZXNvbHZlcnM6IHtcbiAgICBFbWFpbDogbmV3IEdyYXBoUUxTY2FsYXJUeXBlKHtcbiAgICAgIG5hbWU6ICdFbWFpbCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBlbWFpbCBzY2FsYXIgdHlwZSByZXByZXNlbnRzIGVtYWlsIGFkcmVzcy4nLFxuICAgICAgcGFyc2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZS50b0xvd2VyQ2FzZSgpIDogdmFsdWU7XG4gICAgICB9LFxuICAgICAgc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLnRvTG93ZXJDYXNlKCkgOiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBwYXJzZUxpdGVyYWwoYXN0KSB7XG4gICAgICAgIGlmIChhc3Qua2luZCAhPT0gS2luZC5TVFJJTkcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgR3JhcGhRTEVycm9yKFxuICAgICAgICAgICAgYFF1ZXJ5IGVycm9yOiBDYW4gb25seSBwYXJzZSBTVFJJTkcgZ290IGE6ICR7YXN0LmtpbmR9LmAsXG4gICAgICAgICAgICBbYXN0XVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzdC52YWx1ZTtcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG59O1xuIl19
