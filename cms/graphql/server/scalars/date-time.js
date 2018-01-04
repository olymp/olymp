'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

var _error = require('graphql/error');

var _graphql = require('graphql');

var assertErr = require('assert-err');

exports.default = {
  schema: '\n    scalar DateTime\n  ',
  resolvers: {
    DateTime: new _graphql.GraphQLScalarType({
      name: 'DateTime',
      description: 'DateType as Integer',
      serialize: function serialize(value) {
        if (typeof value === 'number' || typeof value === 'string') {
          value = new Date(value);
        }
        assertErr(value instanceof Date, TypeError, 'Field error: value is not an instance of Date');
        assertErr(!isNaN(value.getTime()), TypeError, 'Field error: value is an invalid Date');
        return +value;
      },
      parseValue: function parseValue(value) {
        var date = new Date(value);
        assertErr(!isNaN(date.getTime()), TypeError, 'Field error: value is an invalid Date');
        return date;
      },
      parseLiteral: function parseLiteral(ast) {
        if (ast.kind !== _language.Kind.INT) {
          throw new _error.GraphQLError('Query error: Can only parse INT got a: ' + ast.kind + '.', [ast]);
        }
        var result = new Date(ast.value);
        assertErr(!isNaN(result.getTime()), _error.GraphQLError, 'Query error: Invalid date', [ast]);
        assertErr(ast.value === result.toJSON(), _error.GraphQLError, 'Query error: Invalid date format', [ast]);
        return ast.value;
      }
    })
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL2RhdGUtdGltZS5lczYiXSwibmFtZXMiOlsiYXNzZXJ0RXJyIiwicmVxdWlyZSIsInNjaGVtYSIsInJlc29sdmVycyIsIkRhdGVUaW1lIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic2VyaWFsaXplIiwidmFsdWUiLCJEYXRlIiwiVHlwZUVycm9yIiwiaXNOYU4iLCJnZXRUaW1lIiwicGFyc2VWYWx1ZSIsImRhdGUiLCJwYXJzZUxpdGVyYWwiLCJhc3QiLCJraW5kIiwiSU5UIiwicmVzdWx0IiwidG9KU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFlBQVIsQ0FBbEI7O2tCQUVlO0FBQ2JDLHFDQURhO0FBSWJDLGFBQVc7QUFDVEMsY0FBVSwrQkFBc0I7QUFDOUJDLFlBQU0sVUFEd0I7QUFFOUJDLG1CQUFhLHFCQUZpQjtBQUc5QkMsZUFIOEIscUJBR3BCQyxLQUhvQixFQUdiO0FBQ2YsWUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLElBQTZCLE9BQU9BLEtBQVAsS0FBaUIsUUFBbEQsRUFBNEQ7QUFDMURBLGtCQUFRLElBQUlDLElBQUosQ0FBU0QsS0FBVCxDQUFSO0FBQ0Q7QUFDRFIsa0JBQ0VRLGlCQUFpQkMsSUFEbkIsRUFFRUMsU0FGRixFQUdFLCtDQUhGO0FBS0FWLGtCQUFVLENBQUNXLE1BQU1ILE1BQU1JLE9BQU4sRUFBTixDQUFYLEVBQW1DRixTQUFuQyxFQUE4Qyx1Q0FBOUM7QUFDQSxlQUFPLENBQUNGLEtBQVI7QUFDRCxPQWQ2QjtBQWU5QkssZ0JBZjhCLHNCQWVuQkwsS0FmbUIsRUFlWjtBQUNoQixZQUFNTSxPQUFPLElBQUlMLElBQUosQ0FBU0QsS0FBVCxDQUFiO0FBQ0FSLGtCQUFVLENBQUNXLE1BQU1HLEtBQUtGLE9BQUwsRUFBTixDQUFYLEVBQWtDRixTQUFsQyxFQUE2Qyx1Q0FBN0M7QUFDQSxlQUFPSSxJQUFQO0FBQ0QsT0FuQjZCO0FBb0I5QkMsa0JBcEI4Qix3QkFvQmpCQyxHQXBCaUIsRUFvQlo7QUFDaEIsWUFBSUEsSUFBSUMsSUFBSixLQUFhLGVBQUtDLEdBQXRCLEVBQTJCO0FBQ3pCLGdCQUFNLG9FQUEyREYsSUFBSUMsSUFBL0QsUUFBd0UsQ0FBQ0QsR0FBRCxDQUF4RSxDQUFOO0FBQ0Q7QUFDRCxZQUFNRyxTQUFTLElBQUlWLElBQUosQ0FBU08sSUFBSVIsS0FBYixDQUFmO0FBQ0FSLGtCQUFVLENBQUNXLE1BQU1RLE9BQU9QLE9BQVAsRUFBTixDQUFYLHVCQUFrRCwyQkFBbEQsRUFBK0UsQ0FBQ0ksR0FBRCxDQUEvRTtBQUNBaEIsa0JBQVVnQixJQUFJUixLQUFKLEtBQWNXLE9BQU9DLE1BQVAsRUFBeEIsdUJBQXVELGtDQUF2RCxFQUEyRixDQUN6RkosR0FEeUYsQ0FBM0Y7QUFHQSxlQUFPQSxJQUFJUixLQUFYO0FBQ0Q7QUE5QjZCLEtBQXRCO0FBREQ7QUFKRSxDIiwiZmlsZSI6ImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL2RhdGUtdGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtpbmQgfSBmcm9tICdncmFwaHFsL2xhbmd1YWdlJztcbmltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gJ2dyYXBocWwvZXJyb3InO1xuaW1wb3J0IHsgR3JhcGhRTFNjYWxhclR5cGUgfSBmcm9tICdncmFwaHFsJztcblxuY29uc3QgYXNzZXJ0RXJyID0gcmVxdWlyZSgnYXNzZXJ0LWVycicpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNjaGVtYTogYFxuICAgIHNjYWxhciBEYXRlVGltZVxuICBgLFxuICByZXNvbHZlcnM6IHtcbiAgICBEYXRlVGltZTogbmV3IEdyYXBoUUxTY2FsYXJUeXBlKHtcbiAgICAgIG5hbWU6ICdEYXRlVGltZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RhdGVUeXBlIGFzIEludGVnZXInLFxuICAgICAgc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBhc3NlcnRFcnIoXG4gICAgICAgICAgdmFsdWUgaW5zdGFuY2VvZiBEYXRlLFxuICAgICAgICAgIFR5cGVFcnJvcixcbiAgICAgICAgICAnRmllbGQgZXJyb3I6IHZhbHVlIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlJyxcbiAgICAgICAgKTtcbiAgICAgICAgYXNzZXJ0RXJyKCFpc05hTih2YWx1ZS5nZXRUaW1lKCkpLCBUeXBlRXJyb3IsICdGaWVsZCBlcnJvcjogdmFsdWUgaXMgYW4gaW52YWxpZCBEYXRlJyk7XG4gICAgICAgIHJldHVybiArdmFsdWU7XG4gICAgICB9LFxuICAgICAgcGFyc2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICBhc3NlcnRFcnIoIWlzTmFOKGRhdGUuZ2V0VGltZSgpKSwgVHlwZUVycm9yLCAnRmllbGQgZXJyb3I6IHZhbHVlIGlzIGFuIGludmFsaWQgRGF0ZScpO1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgIH0sXG4gICAgICBwYXJzZUxpdGVyYWwoYXN0KSB7XG4gICAgICAgIGlmIChhc3Qua2luZCAhPT0gS2luZC5JTlQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgR3JhcGhRTEVycm9yKGBRdWVyeSBlcnJvcjogQ2FuIG9ubHkgcGFyc2UgSU5UIGdvdCBhOiAke2FzdC5raW5kfS5gLCBbYXN0XSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERhdGUoYXN0LnZhbHVlKTtcbiAgICAgICAgYXNzZXJ0RXJyKCFpc05hTihyZXN1bHQuZ2V0VGltZSgpKSwgR3JhcGhRTEVycm9yLCAnUXVlcnkgZXJyb3I6IEludmFsaWQgZGF0ZScsIFthc3RdKTtcbiAgICAgICAgYXNzZXJ0RXJyKGFzdC52YWx1ZSA9PT0gcmVzdWx0LnRvSlNPTigpLCBHcmFwaFFMRXJyb3IsICdRdWVyeSBlcnJvcjogSW52YWxpZCBkYXRlIGZvcm1hdCcsIFtcbiAgICAgICAgICBhc3QsXG4gICAgICAgIF0pO1xuICAgICAgICByZXR1cm4gYXN0LnZhbHVlO1xuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbn07XG4iXX0=
