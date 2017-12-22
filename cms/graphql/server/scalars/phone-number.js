import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';

export default {
  schema: '\n    scalar PhoneNumber\n  ',
  resolvers: {
    PhoneNumber: new GraphQLScalarType({
      name: 'PhoneNumber',
      description: 'The phone scalar type represents phone-number.',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3NjYWxhcnMvcGhvbmUtbnVtYmVyLmVzNiJdLCJuYW1lcyI6WyJLaW5kIiwiR3JhcGhRTEVycm9yIiwiR3JhcGhRTFNjYWxhclR5cGUiLCJzY2hlbWEiLCJyZXNvbHZlcnMiLCJQaG9uZU51bWJlciIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInBhcnNlVmFsdWUiLCJ2YWx1ZSIsInNlcmlhbGl6ZSIsInBhcnNlTGl0ZXJhbCIsImFzdCIsImtpbmQiLCJTVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixlQUE3QjtBQUNBLFNBQVNDLGlCQUFULFFBQWtDLFNBQWxDOztBQUVBLGVBQWU7QUFDYkMsd0NBRGE7QUFJYkMsYUFBVztBQUNUQyxpQkFBYSxJQUFJSCxpQkFBSixDQUFzQjtBQUNqQ0ksWUFBTSxhQUQyQjtBQUVqQ0MsbUJBQWEsZ0RBRm9CO0FBR2pDQyxnQkFIaUMsc0JBR3RCQyxLQUhzQixFQUdmO0FBQ2hCLGVBQU9BLEtBQVA7QUFDRCxPQUxnQztBQU1qQ0MsZUFOaUMscUJBTXZCRCxLQU51QixFQU1oQjtBQUNmLGVBQU9BLEtBQVA7QUFDRCxPQVJnQztBQVNqQ0Usa0JBVGlDLHdCQVNwQkMsR0FUb0IsRUFTZjtBQUNoQixZQUFJQSxJQUFJQyxJQUFKLEtBQWFiLEtBQUtjLE1BQXRCLEVBQThCO0FBQzVCLGdCQUFNLElBQUliLFlBQUosZ0RBQ3lDVyxJQUFJQyxJQUQ3QyxRQUVKLENBQUNELEdBQUQsQ0FGSSxDQUFOO0FBSUQ7QUFDRCxlQUFPQSxJQUFJSCxLQUFYO0FBQ0Q7QUFqQmdDLEtBQXRCO0FBREo7QUFKRSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3NjYWxhcnMvcGhvbmUtbnVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2luZCB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgR3JhcGhRTEVycm9yIH0gZnJvbSAnZ3JhcGhxbC9lcnJvcic7XG5pbXBvcnQgeyBHcmFwaFFMU2NhbGFyVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNjaGVtYTogYFxuICAgIHNjYWxhciBQaG9uZU51bWJlclxuICBgLFxuICByZXNvbHZlcnM6IHtcbiAgICBQaG9uZU51bWJlcjogbmV3IEdyYXBoUUxTY2FsYXJUeXBlKHtcbiAgICAgIG5hbWU6ICdQaG9uZU51bWJlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBwaG9uZSBzY2FsYXIgdHlwZSByZXByZXNlbnRzIHBob25lLW51bWJlci4nLFxuICAgICAgcGFyc2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBwYXJzZUxpdGVyYWwoYXN0KSB7XG4gICAgICAgIGlmIChhc3Qua2luZCAhPT0gS2luZC5TVFJJTkcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgR3JhcGhRTEVycm9yKFxuICAgICAgICAgICAgYFF1ZXJ5IGVycm9yOiBDYW4gb25seSBwYXJzZSBTVFJJTkcgZ290IGE6ICR7YXN0LmtpbmR9LmAsXG4gICAgICAgICAgICBbYXN0XVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzdC52YWx1ZTtcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG59O1xuIl19
