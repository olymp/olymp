'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

var _error = require('graphql/error');

var _graphql = require('graphql');

exports.default = {
  schema: '\n    scalar PhoneNumber\n  ',
  resolvers: {
    PhoneNumber: new _graphql.GraphQLScalarType({
      name: 'PhoneNumber',
      description: 'The phone scalar type represents phone-number.',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL3Bob25lLW51bWJlci5lczYiXSwibmFtZXMiOlsic2NoZW1hIiwicmVzb2x2ZXJzIiwiUGhvbmVOdW1iZXIiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwYXJzZVZhbHVlIiwidmFsdWUiLCJzZXJpYWxpemUiLCJwYXJzZUxpdGVyYWwiLCJhc3QiLCJraW5kIiwiU1RSSU5HIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7a0JBRWU7QUFDYkEsd0NBRGE7QUFJYkMsYUFBVztBQUNUQyxpQkFBYSwrQkFBc0I7QUFDakNDLFlBQU0sYUFEMkI7QUFFakNDLG1CQUFhLGdEQUZvQjtBQUdqQ0MsZ0JBSGlDLHNCQUd0QkMsS0FIc0IsRUFHZjtBQUNoQixlQUFPQSxLQUFQO0FBQ0QsT0FMZ0M7QUFNakNDLGVBTmlDLHFCQU12QkQsS0FOdUIsRUFNaEI7QUFDZixlQUFPQSxLQUFQO0FBQ0QsT0FSZ0M7QUFTakNFLGtCQVRpQyx3QkFTcEJDLEdBVG9CLEVBU2Y7QUFDaEIsWUFBSUEsSUFBSUMsSUFBSixLQUFhLGVBQUtDLE1BQXRCLEVBQThCO0FBQzVCLGdCQUFNLHVFQUN5Q0YsSUFBSUMsSUFEN0MsUUFFSixDQUFDRCxHQUFELENBRkksQ0FBTjtBQUlEO0FBQ0QsZUFBT0EsSUFBSUgsS0FBWDtBQUNEO0FBakJnQyxLQUF0QjtBQURKO0FBSkUsQyIsImZpbGUiOiJjbXMvZ3JhcGhxbC9zZXJ2ZXIvc2NhbGFycy9waG9uZS1udW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLaW5kIH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZSc7XG5pbXBvcnQgeyBHcmFwaFFMRXJyb3IgfSBmcm9tICdncmFwaHFsL2Vycm9yJztcbmltcG9ydCB7IEdyYXBoUUxTY2FsYXJUeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2NoZW1hOiBgXG4gICAgc2NhbGFyIFBob25lTnVtYmVyXG4gIGAsXG4gIHJlc29sdmVyczoge1xuICAgIFBob25lTnVtYmVyOiBuZXcgR3JhcGhRTFNjYWxhclR5cGUoe1xuICAgICAgbmFtZTogJ1Bob25lTnVtYmVyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHBob25lIHNjYWxhciB0eXBlIHJlcHJlc2VudHMgcGhvbmUtbnVtYmVyLicsXG4gICAgICBwYXJzZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXJpYWxpemUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHBhcnNlTGl0ZXJhbChhc3QpIHtcbiAgICAgICAgaWYgKGFzdC5raW5kICE9PSBLaW5kLlNUUklORykge1xuICAgICAgICAgIHRocm93IG5ldyBHcmFwaFFMRXJyb3IoXG4gICAgICAgICAgICBgUXVlcnkgZXJyb3I6IENhbiBvbmx5IHBhcnNlIFNUUklORyBnb3QgYTogJHthc3Qua2luZH0uYCxcbiAgICAgICAgICAgIFthc3RdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXN0LnZhbHVlO1xuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbn07XG4iXX0=
