'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

var _graphql = require('graphql');

var json = {
  name: 'Json',
  description: 'The JSON scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/ publications/files/ECMA-ST/ECMA-404.pdf).',
  serialize: function serialize(value) {
    return value;
  },
  parseValue: function parseValue(value) {
    return value;
  },
  parseLiteral: function parseLiteral(ast) {
    switch (ast.kind) {
      case _language.Kind.STRING:
      case _language.Kind.BOOLEAN:
        return ast.value;
      case _language.Kind.INT:
      case _language.Kind.FLOAT:
        return parseFloat(ast.value);
      case _language.Kind.OBJECT:
        {
          var value = Object.create(null);
          ast.fields.forEach(function (field) {
            value[field.name.value] = json.parseLiteral(field.value);
          });

          return value;
        }
      case _language.Kind.LIST:
        return ast.values.map(json.parseLiteral);
      default:
        return null;
    }
  }
};

exports.default = {
  schema: '\n    scalar Json\n  ',
  resolvers: {
    Json: new _graphql.GraphQLScalarType(json)
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL2pzb24uZXM2Il0sIm5hbWVzIjpbImpzb24iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzZXJpYWxpemUiLCJ2YWx1ZSIsInBhcnNlVmFsdWUiLCJwYXJzZUxpdGVyYWwiLCJhc3QiLCJraW5kIiwiU1RSSU5HIiwiQk9PTEVBTiIsIklOVCIsIkZMT0FUIiwicGFyc2VGbG9hdCIsIk9CSkVDVCIsIk9iamVjdCIsImNyZWF0ZSIsImZpZWxkcyIsImZvckVhY2giLCJmaWVsZCIsIkxJU1QiLCJ2YWx1ZXMiLCJtYXAiLCJzY2hlbWEiLCJyZXNvbHZlcnMiLCJKc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxPQUFPO0FBQ1hDLFFBQU0sTUFESztBQUVYQyxlQUNFLHFKQUhTO0FBSVhDLGFBQVc7QUFBQSxXQUFTQyxLQUFUO0FBQUEsR0FKQTtBQUtYQyxjQUFZO0FBQUEsV0FBU0QsS0FBVDtBQUFBLEdBTEQ7QUFNWEUsZ0JBQWMsc0JBQUNDLEdBQUQsRUFBUztBQUNyQixZQUFRQSxJQUFJQyxJQUFaO0FBQ0UsV0FBSyxlQUFLQyxNQUFWO0FBQ0EsV0FBSyxlQUFLQyxPQUFWO0FBQ0UsZUFBT0gsSUFBSUgsS0FBWDtBQUNGLFdBQUssZUFBS08sR0FBVjtBQUNBLFdBQUssZUFBS0MsS0FBVjtBQUNFLGVBQU9DLFdBQVdOLElBQUlILEtBQWYsQ0FBUDtBQUNGLFdBQUssZUFBS1UsTUFBVjtBQUFrQjtBQUNoQixjQUFNVixRQUFRVyxPQUFPQyxNQUFQLENBQWMsSUFBZCxDQUFkO0FBQ0FULGNBQUlVLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixVQUFDQyxLQUFELEVBQVc7QUFDNUJmLGtCQUFNZSxNQUFNbEIsSUFBTixDQUFXRyxLQUFqQixJQUEwQkosS0FBS00sWUFBTCxDQUFrQmEsTUFBTWYsS0FBeEIsQ0FBMUI7QUFDRCxXQUZEOztBQUlBLGlCQUFPQSxLQUFQO0FBQ0Q7QUFDRCxXQUFLLGVBQUtnQixJQUFWO0FBQ0UsZUFBT2IsSUFBSWMsTUFBSixDQUFXQyxHQUFYLENBQWV0QixLQUFLTSxZQUFwQixDQUFQO0FBQ0Y7QUFDRSxlQUFPLElBQVA7QUFsQko7QUFvQkQ7QUEzQlUsQ0FBYjs7a0JBOEJlO0FBQ2JpQixpQ0FEYTtBQUliQyxhQUFXO0FBQ1RDLFVBQU0sK0JBQXNCekIsSUFBdEI7QUFERztBQUpFLEMiLCJmaWxlIjoiY21zL2dyYXBocWwvc2VydmVyL3NjYWxhcnMvanNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtpbmQgfSBmcm9tICdncmFwaHFsL2xhbmd1YWdlJztcbmltcG9ydCB7IEdyYXBoUUxTY2FsYXJUeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmNvbnN0IGpzb24gPSB7XG4gIG5hbWU6ICdKc29uJyxcbiAgZGVzY3JpcHRpb246XG4gICAgJ1RoZSBKU09OIHNjYWxhciB0eXBlIHJlcHJlc2VudHMgSlNPTiB2YWx1ZXMgYXMgc3BlY2lmaWVkIGJ5IFtFQ01BLTQwNF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnLyBwdWJsaWNhdGlvbnMvZmlsZXMvRUNNQS1TVC9FQ01BLTQwNC5wZGYpLicsXG4gIHNlcmlhbGl6ZTogdmFsdWUgPT4gdmFsdWUsXG4gIHBhcnNlVmFsdWU6IHZhbHVlID0+IHZhbHVlLFxuICBwYXJzZUxpdGVyYWw6IChhc3QpID0+IHtcbiAgICBzd2l0Y2ggKGFzdC5raW5kKSB7XG4gICAgICBjYXNlIEtpbmQuU1RSSU5HOlxuICAgICAgY2FzZSBLaW5kLkJPT0xFQU46XG4gICAgICAgIHJldHVybiBhc3QudmFsdWU7XG4gICAgICBjYXNlIEtpbmQuSU5UOlxuICAgICAgY2FzZSBLaW5kLkZMT0FUOlxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChhc3QudmFsdWUpO1xuICAgICAgY2FzZSBLaW5kLk9CSkVDVDoge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGFzdC5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICB2YWx1ZVtmaWVsZC5uYW1lLnZhbHVlXSA9IGpzb24ucGFyc2VMaXRlcmFsKGZpZWxkLnZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgY2FzZSBLaW5kLkxJU1Q6XG4gICAgICAgIHJldHVybiBhc3QudmFsdWVzLm1hcChqc29uLnBhcnNlTGl0ZXJhbCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNjaGVtYTogYFxuICAgIHNjYWxhciBKc29uXG4gIGAsXG4gIHJlc29sdmVyczoge1xuICAgIEpzb246IG5ldyBHcmFwaFFMU2NhbGFyVHlwZShqc29uKSxcbiAgfSxcbn07XG4iXX0=
