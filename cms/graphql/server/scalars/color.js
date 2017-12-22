import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';

export default {
  schema: '\n    scalar Color\n  ',
  resolvers: {
    Color: new GraphQLScalarType({
      name: 'Color',
      description: 'The Color scalar type represents color in "red" or "#FFF" or "#FFFFFF" format.',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3NjYWxhcnMvY29sb3IuZXM2Il0sIm5hbWVzIjpbIktpbmQiLCJHcmFwaFFMRXJyb3IiLCJHcmFwaFFMU2NhbGFyVHlwZSIsInNjaGVtYSIsInJlc29sdmVycyIsIkNvbG9yIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicGFyc2VWYWx1ZSIsInZhbHVlIiwic2VyaWFsaXplIiwicGFyc2VMaXRlcmFsIiwiYXN0Iiwia2luZCIsIlNUUklORyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxZQUFULFFBQTZCLGVBQTdCO0FBQ0EsU0FBU0MsaUJBQVQsUUFBa0MsU0FBbEM7O0FBRUEsZUFBZTtBQUNiQyxrQ0FEYTtBQUliQyxhQUFXO0FBQ1RDLFdBQU8sSUFBSUgsaUJBQUosQ0FBc0I7QUFDM0JJLFlBQU0sT0FEcUI7QUFFM0JDLG1CQUFhLGdGQUZjO0FBRzNCQyxnQkFIMkIsc0JBR2hCQyxLQUhnQixFQUdUO0FBQ2hCLGVBQU9BLEtBQVA7QUFDRCxPQUwwQjtBQU0zQkMsZUFOMkIscUJBTWpCRCxLQU5pQixFQU1WO0FBQ2YsZUFBT0EsS0FBUDtBQUNELE9BUjBCO0FBUzNCRSxrQkFUMkIsd0JBU2RDLEdBVGMsRUFTVDtBQUNoQixZQUFJQSxJQUFJQyxJQUFKLEtBQWFiLEtBQUtjLE1BQXRCLEVBQThCO0FBQzVCLGdCQUFNLElBQUliLFlBQUosZ0RBQThEVyxJQUFJQyxJQUFsRSxRQUEyRSxDQUFDRCxHQUFELENBQTNFLENBQU47QUFDRDtBQUNELGVBQU9BLElBQUlILEtBQVg7QUFDRDtBQWQwQixLQUF0QjtBQURFO0FBSkUsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL2NvbG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2luZCB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgR3JhcGhRTEVycm9yIH0gZnJvbSAnZ3JhcGhxbC9lcnJvcic7XG5pbXBvcnQgeyBHcmFwaFFMU2NhbGFyVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNjaGVtYTogYFxuICAgIHNjYWxhciBDb2xvclxuICBgLFxuICByZXNvbHZlcnM6IHtcbiAgICBDb2xvcjogbmV3IEdyYXBoUUxTY2FsYXJUeXBlKHtcbiAgICAgIG5hbWU6ICdDb2xvcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBDb2xvciBzY2FsYXIgdHlwZSByZXByZXNlbnRzIGNvbG9yIGluIFwicmVkXCIgb3IgXCIjRkZGXCIgb3IgXCIjRkZGRkZGXCIgZm9ybWF0LicsXG4gICAgICBwYXJzZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXJpYWxpemUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHBhcnNlTGl0ZXJhbChhc3QpIHtcbiAgICAgICAgaWYgKGFzdC5raW5kICE9PSBLaW5kLlNUUklORykge1xuICAgICAgICAgIHRocm93IG5ldyBHcmFwaFFMRXJyb3IoYFF1ZXJ5IGVycm9yOiBDYW4gb25seSBwYXJzZSBTVFJJTkcgZ290IGE6ICR7YXN0LmtpbmR9LmAsIFthc3RdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXN0LnZhbHVlO1xuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbn07XG4iXX0=
