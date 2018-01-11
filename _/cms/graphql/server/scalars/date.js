'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

var _error = require('graphql/error');

var _graphql = require('graphql');

var assertErr = require('assert-err');
var fns = require('date-fns');

exports.default = {
  schema: '\n    scalar Date\n  ',
  resolvers: {
    Date: new _graphql.GraphQLScalarType({
      name: 'Date',
      description: 'DateType as Integer (without time)',
      serialize: function serialize(value) {
        if (typeof value === 'number' || typeof value === 'string') {
          value = new Date(value);
        }
        assertErr(value instanceof Date, TypeError, 'Field error: value is not an instance of Date');
        assertErr(!isNaN(value.getTime()), TypeError, 'Field error: value is an invalid Date');
        return +fns.startOfDay(value);
      },
      parseValue: function parseValue(value) {
        var date = new Date(value);
        assertErr(!isNaN(date.getTime()), TypeError, 'Field error: value is an invalid Date');
        return +fns.startOfDay(date);
      },
      parseLiteral: function parseLiteral(ast) {
        if (ast.kind !== _language.Kind.INT) {
          throw new _error.GraphQLError('Query error: Can only parse INT got a: ' + ast.kind + '.', [ast]);
        }
        var result = new Date(ast.value);
        assertErr(!isNaN(result.getTime()), _error.GraphQLError, 'Query error: Invalid date', [ast]);
        assertErr(ast.value === result.toJSON(), _error.GraphQLError, 'Query error: Invalid date format', [ast]);
        return fns.startOfDay(ast.value);
      }
    })
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL2RhdGUuZXM2Il0sIm5hbWVzIjpbImFzc2VydEVyciIsInJlcXVpcmUiLCJmbnMiLCJzY2hlbWEiLCJyZXNvbHZlcnMiLCJEYXRlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic2VyaWFsaXplIiwidmFsdWUiLCJUeXBlRXJyb3IiLCJpc05hTiIsImdldFRpbWUiLCJzdGFydE9mRGF5IiwicGFyc2VWYWx1ZSIsImRhdGUiLCJwYXJzZUxpdGVyYWwiLCJhc3QiLCJraW5kIiwiSU5UIiwicmVzdWx0IiwidG9KU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFlBQVIsQ0FBbEI7QUFDQSxJQUFNQyxNQUFNRCxRQUFRLFVBQVIsQ0FBWjs7a0JBRWU7QUFDYkUsaUNBRGE7QUFJYkMsYUFBVztBQUNUQyxVQUFNLCtCQUFzQjtBQUMxQkMsWUFBTSxNQURvQjtBQUUxQkMsbUJBQWEsb0NBRmE7QUFHMUJDLGVBSDBCLHFCQUdoQkMsS0FIZ0IsRUFHVDtBQUNmLFlBQUksT0FBT0EsS0FBUCxLQUFpQixRQUFqQixJQUE2QixPQUFPQSxLQUFQLEtBQWlCLFFBQWxELEVBQTREO0FBQzFEQSxrQkFBUSxJQUFJSixJQUFKLENBQVNJLEtBQVQsQ0FBUjtBQUNEO0FBQ0RULGtCQUNFUyxpQkFBaUJKLElBRG5CLEVBRUVLLFNBRkYsRUFHRSwrQ0FIRjtBQUtBVixrQkFBVSxDQUFDVyxNQUFNRixNQUFNRyxPQUFOLEVBQU4sQ0FBWCxFQUFtQ0YsU0FBbkMsRUFBOEMsdUNBQTlDO0FBQ0EsZUFBTyxDQUFDUixJQUFJVyxVQUFKLENBQWVKLEtBQWYsQ0FBUjtBQUNELE9BZHlCO0FBZTFCSyxnQkFmMEIsc0JBZWZMLEtBZmUsRUFlUjtBQUNoQixZQUFNTSxPQUFPLElBQUlWLElBQUosQ0FBU0ksS0FBVCxDQUFiO0FBQ0FULGtCQUFVLENBQUNXLE1BQU1JLEtBQUtILE9BQUwsRUFBTixDQUFYLEVBQWtDRixTQUFsQyxFQUE2Qyx1Q0FBN0M7QUFDQSxlQUFPLENBQUNSLElBQUlXLFVBQUosQ0FBZUUsSUFBZixDQUFSO0FBQ0QsT0FuQnlCO0FBb0IxQkMsa0JBcEIwQix3QkFvQmJDLEdBcEJhLEVBb0JSO0FBQ2hCLFlBQUlBLElBQUlDLElBQUosS0FBYSxlQUFLQyxHQUF0QixFQUEyQjtBQUN6QixnQkFBTSxvRUFBMkRGLElBQUlDLElBQS9ELFFBQXdFLENBQUNELEdBQUQsQ0FBeEUsQ0FBTjtBQUNEO0FBQ0QsWUFBTUcsU0FBUyxJQUFJZixJQUFKLENBQVNZLElBQUlSLEtBQWIsQ0FBZjtBQUNBVCxrQkFBVSxDQUFDVyxNQUFNUyxPQUFPUixPQUFQLEVBQU4sQ0FBWCx1QkFBa0QsMkJBQWxELEVBQStFLENBQUNLLEdBQUQsQ0FBL0U7QUFDQWpCLGtCQUFVaUIsSUFBSVIsS0FBSixLQUFjVyxPQUFPQyxNQUFQLEVBQXhCLHVCQUF1RCxrQ0FBdkQsRUFBMkYsQ0FDekZKLEdBRHlGLENBQTNGO0FBR0EsZUFBT2YsSUFBSVcsVUFBSixDQUFlSSxJQUFJUixLQUFuQixDQUFQO0FBQ0Q7QUE5QnlCLEtBQXRCO0FBREc7QUFKRSxDIiwiZmlsZSI6ImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL2RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLaW5kIH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZSc7XG5pbXBvcnQgeyBHcmFwaFFMRXJyb3IgfSBmcm9tICdncmFwaHFsL2Vycm9yJztcbmltcG9ydCB7IEdyYXBoUUxTY2FsYXJUeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmNvbnN0IGFzc2VydEVyciA9IHJlcXVpcmUoJ2Fzc2VydC1lcnInKTtcbmNvbnN0IGZucyA9IHJlcXVpcmUoJ2RhdGUtZm5zJyk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2NoZW1hOiBgXG4gICAgc2NhbGFyIERhdGVcbiAgYCxcbiAgcmVzb2x2ZXJzOiB7XG4gICAgRGF0ZTogbmV3IEdyYXBoUUxTY2FsYXJUeXBlKHtcbiAgICAgIG5hbWU6ICdEYXRlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGF0ZVR5cGUgYXMgSW50ZWdlciAod2l0aG91dCB0aW1lKScsXG4gICAgICBzZXJpYWxpemUodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGFzc2VydEVycihcbiAgICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIERhdGUsXG4gICAgICAgICAgVHlwZUVycm9yLFxuICAgICAgICAgICdGaWVsZCBlcnJvcjogdmFsdWUgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUnLFxuICAgICAgICApO1xuICAgICAgICBhc3NlcnRFcnIoIWlzTmFOKHZhbHVlLmdldFRpbWUoKSksIFR5cGVFcnJvciwgJ0ZpZWxkIGVycm9yOiB2YWx1ZSBpcyBhbiBpbnZhbGlkIERhdGUnKTtcbiAgICAgICAgcmV0dXJuICtmbnMuc3RhcnRPZkRheSh2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgcGFyc2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICBhc3NlcnRFcnIoIWlzTmFOKGRhdGUuZ2V0VGltZSgpKSwgVHlwZUVycm9yLCAnRmllbGQgZXJyb3I6IHZhbHVlIGlzIGFuIGludmFsaWQgRGF0ZScpO1xuICAgICAgICByZXR1cm4gK2Zucy5zdGFydE9mRGF5KGRhdGUpO1xuICAgICAgfSxcbiAgICAgIHBhcnNlTGl0ZXJhbChhc3QpIHtcbiAgICAgICAgaWYgKGFzdC5raW5kICE9PSBLaW5kLklOVCkge1xuICAgICAgICAgIHRocm93IG5ldyBHcmFwaFFMRXJyb3IoYFF1ZXJ5IGVycm9yOiBDYW4gb25seSBwYXJzZSBJTlQgZ290IGE6ICR7YXN0LmtpbmR9LmAsIFthc3RdKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZShhc3QudmFsdWUpO1xuICAgICAgICBhc3NlcnRFcnIoIWlzTmFOKHJlc3VsdC5nZXRUaW1lKCkpLCBHcmFwaFFMRXJyb3IsICdRdWVyeSBlcnJvcjogSW52YWxpZCBkYXRlJywgW2FzdF0pO1xuICAgICAgICBhc3NlcnRFcnIoYXN0LnZhbHVlID09PSByZXN1bHQudG9KU09OKCksIEdyYXBoUUxFcnJvciwgJ1F1ZXJ5IGVycm9yOiBJbnZhbGlkIGRhdGUgZm9ybWF0JywgW1xuICAgICAgICAgIGFzdCxcbiAgICAgICAgXSk7XG4gICAgICAgIHJldHVybiBmbnMuc3RhcnRPZkRheShhc3QudmFsdWUpO1xuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbn07XG4iXX0=
