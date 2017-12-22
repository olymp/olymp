import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';

export default {
  schema: '\n    scalar Url\n  ',
  resolvers: {
    Url: new GraphQLScalarType({
      name: 'Url',
      description: 'The website scalar type represents website url.',
      parseValue: function parseValue(value) {
        return value;
      },
      serialize: function serialize(value) {
        return value;
      },
      parseLiteral: function parseLiteral(ast) {
        if (ast.kind !== Kind.STRING) {
          throw new GraphQLError('Query error: Can only parse STRING got a: ' + ast.kind + '.', [ast]);
        }
        return ast.value;
      }
    })
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3NjYWxhcnMvdXJsLmVzNiJdLCJuYW1lcyI6WyJLaW5kIiwiR3JhcGhRTEVycm9yIiwiR3JhcGhRTFNjYWxhclR5cGUiLCJzY2hlbWEiLCJyZXNvbHZlcnMiLCJVcmwiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwYXJzZVZhbHVlIiwidmFsdWUiLCJzZXJpYWxpemUiLCJwYXJzZUxpdGVyYWwiLCJhc3QiLCJraW5kIiwiU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsZUFBN0I7QUFDQSxTQUFTQyxpQkFBVCxRQUFrQyxTQUFsQzs7QUFFQSxlQUFlO0FBQ2JDLGdDQURhO0FBSWJDLGFBQVc7QUFDVEMsU0FBSyxJQUFJSCxpQkFBSixDQUFzQjtBQUN6QkksWUFBTSxLQURtQjtBQUV6QkMsbUJBQWEsaURBRlk7QUFHekJDLGdCQUh5QixzQkFHZEMsS0FIYyxFQUdQO0FBQ2hCLGVBQU9BLEtBQVA7QUFDRCxPQUx3QjtBQU16QkMsZUFOeUIscUJBTWZELEtBTmUsRUFNUjtBQUNmLGVBQU9BLEtBQVA7QUFDRCxPQVJ3QjtBQVN6QkUsa0JBVHlCLHdCQVNaQyxHQVRZLEVBU1A7QUFDaEIsWUFBSUEsSUFBSUMsSUFBSixLQUFhYixLQUFLYyxNQUF0QixFQUE4QjtBQUM1QixnQkFBTSxJQUFJYixZQUFKLGdEQUN5Q1csSUFBSUMsSUFEN0MsUUFFSixDQUFDRCxHQUFELENBRkksQ0FBTjtBQUlEO0FBQ0QsZUFBT0EsSUFBSUgsS0FBWDtBQUNEO0FBakJ3QixLQUF0QjtBQURJO0FBSkUsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL3VybC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtpbmQgfSBmcm9tICdncmFwaHFsL2xhbmd1YWdlJztcbmltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gJ2dyYXBocWwvZXJyb3InO1xuaW1wb3J0IHsgR3JhcGhRTFNjYWxhclR5cGUgfSBmcm9tICdncmFwaHFsJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzY2hlbWE6IGBcbiAgICBzY2FsYXIgVXJsXG4gIGAsXG4gIHJlc29sdmVyczoge1xuICAgIFVybDogbmV3IEdyYXBoUUxTY2FsYXJUeXBlKHtcbiAgICAgIG5hbWU6ICdVcmwnLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgd2Vic2l0ZSBzY2FsYXIgdHlwZSByZXByZXNlbnRzIHdlYnNpdGUgdXJsLicsXG4gICAgICBwYXJzZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXJpYWxpemUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHBhcnNlTGl0ZXJhbChhc3QpIHtcbiAgICAgICAgaWYgKGFzdC5raW5kICE9PSBLaW5kLlNUUklORykge1xuICAgICAgICAgIHRocm93IG5ldyBHcmFwaFFMRXJyb3IoXG4gICAgICAgICAgICBgUXVlcnkgZXJyb3I6IENhbiBvbmx5IHBhcnNlIFNUUklORyBnb3QgYTogJHthc3Qua2luZH0uYCxcbiAgICAgICAgICAgIFthc3RdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXN0LnZhbHVlO1xuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbn07XG4iXX0=
