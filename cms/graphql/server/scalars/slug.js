import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';

export default {
  schema: '\n    scalar Slug\n  ',
  resolvers: {
    Slug: new GraphQLScalarType({
      name: 'Slug',
      description: 'The Slug scalar type represents the url after domain part.',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3NjYWxhcnMvc2x1Zy5lczYiXSwibmFtZXMiOlsiS2luZCIsIkdyYXBoUUxFcnJvciIsIkdyYXBoUUxTY2FsYXJUeXBlIiwic2NoZW1hIiwicmVzb2x2ZXJzIiwiU2x1ZyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInBhcnNlVmFsdWUiLCJ2YWx1ZSIsInNlcmlhbGl6ZSIsInBhcnNlTGl0ZXJhbCIsImFzdCIsImtpbmQiLCJTVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixlQUE3QjtBQUNBLFNBQVNDLGlCQUFULFFBQWtDLFNBQWxDOztBQUVBLGVBQWU7QUFDYkMsaUNBRGE7QUFJYkMsYUFBVztBQUNUQyxVQUFNLElBQUlILGlCQUFKLENBQXNCO0FBQzFCSSxZQUFNLE1BRG9CO0FBRTFCQyxtQkFBYSw0REFGYTtBQUcxQkMsZ0JBSDBCLHNCQUdmQyxLQUhlLEVBR1I7QUFDaEIsZUFBT0EsS0FBUDtBQUNELE9BTHlCO0FBTTFCQyxlQU4wQixxQkFNaEJELEtBTmdCLEVBTVQ7QUFDZixlQUFPQSxLQUFQO0FBQ0QsT0FSeUI7QUFTMUJFLGtCQVQwQix3QkFTYkMsR0FUYSxFQVNSO0FBQ2hCLFlBQUlBLElBQUlDLElBQUosS0FBYWIsS0FBS2MsTUFBdEIsRUFBOEI7QUFDNUIsZ0JBQU0sSUFBSWIsWUFBSixnREFDeUNXLElBQUlDLElBRDdDLFFBRUosQ0FBQ0QsR0FBRCxDQUZJLENBQU47QUFJRDtBQUNELGVBQU9BLElBQUlILEtBQVg7QUFDRDtBQWpCeUIsS0FBdEI7QUFERztBQUpFLENBQWYiLCJmaWxlIjoicGFja2FnZXMvZ3JhcGhxbC9zZXJ2ZXIvc2NhbGFycy9zbHVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2luZCB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgR3JhcGhRTEVycm9yIH0gZnJvbSAnZ3JhcGhxbC9lcnJvcic7XG5pbXBvcnQgeyBHcmFwaFFMU2NhbGFyVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNjaGVtYTogYFxuICAgIHNjYWxhciBTbHVnXG4gIGAsXG4gIHJlc29sdmVyczoge1xuICAgIFNsdWc6IG5ldyBHcmFwaFFMU2NhbGFyVHlwZSh7XG4gICAgICBuYW1lOiAnU2x1ZycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBTbHVnIHNjYWxhciB0eXBlIHJlcHJlc2VudHMgdGhlIHVybCBhZnRlciBkb21haW4gcGFydC4nLFxuICAgICAgcGFyc2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBwYXJzZUxpdGVyYWwoYXN0KSB7XG4gICAgICAgIGlmIChhc3Qua2luZCAhPT0gS2luZC5TVFJJTkcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgR3JhcGhRTEVycm9yKFxuICAgICAgICAgICAgYFF1ZXJ5IGVycm9yOiBDYW4gb25seSBwYXJzZSBTVFJJTkcgZ290IGE6ICR7YXN0LmtpbmR9LmAsXG4gICAgICAgICAgICBbYXN0XVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzdC52YWx1ZTtcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG59O1xuIl19
