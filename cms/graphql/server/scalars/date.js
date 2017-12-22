import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';

var assertErr = require('assert-err');
var fns = require('date-fns');

export default {
  schema: '\n    scalar Date\n  ',
  resolvers: {
    Date: new GraphQLScalarType({
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
        if (ast.kind !== Kind.INT) {
          throw new GraphQLError('Query error: Can only parse INT got a: ' + ast.kind + '.', [ast]);
        }
        var result = new Date(ast.value);
        assertErr(!isNaN(result.getTime()), GraphQLError, 'Query error: Invalid date', [ast]);
        assertErr(ast.value === result.toJSON(), GraphQLError, 'Query error: Invalid date format', [ast]);
        return fns.startOfDay(ast.value);
      }
    })
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3NjYWxhcnMvZGF0ZS5lczYiXSwibmFtZXMiOlsiS2luZCIsIkdyYXBoUUxFcnJvciIsIkdyYXBoUUxTY2FsYXJUeXBlIiwiYXNzZXJ0RXJyIiwicmVxdWlyZSIsImZucyIsInNjaGVtYSIsInJlc29sdmVycyIsIkRhdGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzZXJpYWxpemUiLCJ2YWx1ZSIsIlR5cGVFcnJvciIsImlzTmFOIiwiZ2V0VGltZSIsInN0YXJ0T2ZEYXkiLCJwYXJzZVZhbHVlIiwiZGF0ZSIsInBhcnNlTGl0ZXJhbCIsImFzdCIsImtpbmQiLCJJTlQiLCJyZXN1bHQiLCJ0b0pTT04iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixlQUE3QjtBQUNBLFNBQVNDLGlCQUFULFFBQWtDLFNBQWxDOztBQUVBLElBQU1DLFlBQVlDLFFBQVEsWUFBUixDQUFsQjtBQUNBLElBQU1DLE1BQU1ELFFBQVEsVUFBUixDQUFaOztBQUVBLGVBQWU7QUFDYkUsaUNBRGE7QUFJYkMsYUFBVztBQUNUQyxVQUFNLElBQUlOLGlCQUFKLENBQXNCO0FBQzFCTyxZQUFNLE1BRG9CO0FBRTFCQyxtQkFBYSxvQ0FGYTtBQUcxQkMsZUFIMEIscUJBR2hCQyxLQUhnQixFQUdUO0FBQ2YsWUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLElBQTZCLE9BQU9BLEtBQVAsS0FBaUIsUUFBbEQsRUFBNEQ7QUFDMURBLGtCQUFRLElBQUlKLElBQUosQ0FBU0ksS0FBVCxDQUFSO0FBQ0Q7QUFDRFQsa0JBQ0VTLGlCQUFpQkosSUFEbkIsRUFFRUssU0FGRixFQUdFLCtDQUhGO0FBS0FWLGtCQUFVLENBQUNXLE1BQU1GLE1BQU1HLE9BQU4sRUFBTixDQUFYLEVBQW1DRixTQUFuQyxFQUE4Qyx1Q0FBOUM7QUFDQSxlQUFPLENBQUNSLElBQUlXLFVBQUosQ0FBZUosS0FBZixDQUFSO0FBQ0QsT0FkeUI7QUFlMUJLLGdCQWYwQixzQkFlZkwsS0FmZSxFQWVSO0FBQ2hCLFlBQU1NLE9BQU8sSUFBSVYsSUFBSixDQUFTSSxLQUFULENBQWI7QUFDQVQsa0JBQVUsQ0FBQ1csTUFBTUksS0FBS0gsT0FBTCxFQUFOLENBQVgsRUFBa0NGLFNBQWxDLEVBQTZDLHVDQUE3QztBQUNBLGVBQU8sQ0FBQ1IsSUFBSVcsVUFBSixDQUFlRSxJQUFmLENBQVI7QUFDRCxPQW5CeUI7QUFvQjFCQyxrQkFwQjBCLHdCQW9CYkMsR0FwQmEsRUFvQlI7QUFDaEIsWUFBSUEsSUFBSUMsSUFBSixLQUFhckIsS0FBS3NCLEdBQXRCLEVBQTJCO0FBQ3pCLGdCQUFNLElBQUlyQixZQUFKLDZDQUEyRG1CLElBQUlDLElBQS9ELFFBQXdFLENBQUNELEdBQUQsQ0FBeEUsQ0FBTjtBQUNEO0FBQ0QsWUFBTUcsU0FBUyxJQUFJZixJQUFKLENBQVNZLElBQUlSLEtBQWIsQ0FBZjtBQUNBVCxrQkFBVSxDQUFDVyxNQUFNUyxPQUFPUixPQUFQLEVBQU4sQ0FBWCxFQUFvQ2QsWUFBcEMsRUFBa0QsMkJBQWxELEVBQStFLENBQUNtQixHQUFELENBQS9FO0FBQ0FqQixrQkFBVWlCLElBQUlSLEtBQUosS0FBY1csT0FBT0MsTUFBUCxFQUF4QixFQUF5Q3ZCLFlBQXpDLEVBQXVELGtDQUF2RCxFQUEyRixDQUN6Rm1CLEdBRHlGLENBQTNGO0FBR0EsZUFBT2YsSUFBSVcsVUFBSixDQUFlSSxJQUFJUixLQUFuQixDQUFQO0FBQ0Q7QUE5QnlCLEtBQXRCO0FBREc7QUFKRSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3NjYWxhcnMvZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtpbmQgfSBmcm9tICdncmFwaHFsL2xhbmd1YWdlJztcbmltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gJ2dyYXBocWwvZXJyb3InO1xuaW1wb3J0IHsgR3JhcGhRTFNjYWxhclR5cGUgfSBmcm9tICdncmFwaHFsJztcblxuY29uc3QgYXNzZXJ0RXJyID0gcmVxdWlyZSgnYXNzZXJ0LWVycicpO1xuY29uc3QgZm5zID0gcmVxdWlyZSgnZGF0ZS1mbnMnKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzY2hlbWE6IGBcbiAgICBzY2FsYXIgRGF0ZVxuICBgLFxuICByZXNvbHZlcnM6IHtcbiAgICBEYXRlOiBuZXcgR3JhcGhRTFNjYWxhclR5cGUoe1xuICAgICAgbmFtZTogJ0RhdGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdEYXRlVHlwZSBhcyBJbnRlZ2VyICh3aXRob3V0IHRpbWUpJyxcbiAgICAgIHNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYXNzZXJ0RXJyKFxuICAgICAgICAgIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSxcbiAgICAgICAgICBUeXBlRXJyb3IsXG4gICAgICAgICAgJ0ZpZWxkIGVycm9yOiB2YWx1ZSBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZScsXG4gICAgICAgICk7XG4gICAgICAgIGFzc2VydEVycighaXNOYU4odmFsdWUuZ2V0VGltZSgpKSwgVHlwZUVycm9yLCAnRmllbGQgZXJyb3I6IHZhbHVlIGlzIGFuIGludmFsaWQgRGF0ZScpO1xuICAgICAgICByZXR1cm4gK2Zucy5zdGFydE9mRGF5KHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBwYXJzZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgIGFzc2VydEVycighaXNOYU4oZGF0ZS5nZXRUaW1lKCkpLCBUeXBlRXJyb3IsICdGaWVsZCBlcnJvcjogdmFsdWUgaXMgYW4gaW52YWxpZCBEYXRlJyk7XG4gICAgICAgIHJldHVybiArZm5zLnN0YXJ0T2ZEYXkoZGF0ZSk7XG4gICAgICB9LFxuICAgICAgcGFyc2VMaXRlcmFsKGFzdCkge1xuICAgICAgICBpZiAoYXN0LmtpbmQgIT09IEtpbmQuSU5UKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEdyYXBoUUxFcnJvcihgUXVlcnkgZXJyb3I6IENhbiBvbmx5IHBhcnNlIElOVCBnb3QgYTogJHthc3Qua2luZH0uYCwgW2FzdF0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEYXRlKGFzdC52YWx1ZSk7XG4gICAgICAgIGFzc2VydEVycighaXNOYU4ocmVzdWx0LmdldFRpbWUoKSksIEdyYXBoUUxFcnJvciwgJ1F1ZXJ5IGVycm9yOiBJbnZhbGlkIGRhdGUnLCBbYXN0XSk7XG4gICAgICAgIGFzc2VydEVycihhc3QudmFsdWUgPT09IHJlc3VsdC50b0pTT04oKSwgR3JhcGhRTEVycm9yLCAnUXVlcnkgZXJyb3I6IEludmFsaWQgZGF0ZSBmb3JtYXQnLCBbXG4gICAgICAgICAgYXN0LFxuICAgICAgICBdKTtcbiAgICAgICAgcmV0dXJuIGZucy5zdGFydE9mRGF5KGFzdC52YWx1ZSk7XG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxufTtcbiJdfQ==
