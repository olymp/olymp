import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';

export default {
  schema: '\n    scalar Markdown\n  ',
  resolvers: {
    Markdown: new GraphQLScalarType({
      name: 'Markdown',
      description: 'The Markdown scalar type represents text in markdown language.',
      parseValue: function parseValue(value) {
        return value ? '' + value : null;
      },
      serialize: function serialize(value) {
        return value ? '' + value : null;
      },
      parseLiteral: function parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
          return ast.value ? '' + ast.value : null;
        }return null;
      }
    })
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3NjYWxhcnMvbWFya2Rvd24uZXM2Il0sIm5hbWVzIjpbIktpbmQiLCJHcmFwaFFMRXJyb3IiLCJHcmFwaFFMU2NhbGFyVHlwZSIsInNjaGVtYSIsInJlc29sdmVycyIsIk1hcmtkb3duIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicGFyc2VWYWx1ZSIsInZhbHVlIiwic2VyaWFsaXplIiwicGFyc2VMaXRlcmFsIiwiYXN0Iiwia2luZCIsIlNUUklORyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxZQUFULFFBQTZCLGVBQTdCO0FBQ0EsU0FBU0MsaUJBQVQsUUFBa0MsU0FBbEM7O0FBRUEsZUFBZTtBQUNiQyxxQ0FEYTtBQUliQyxhQUFXO0FBQ1RDLGNBQVUsSUFBSUgsaUJBQUosQ0FBc0I7QUFDOUJJLFlBQU0sVUFEd0I7QUFFOUJDLG1CQUNFLGdFQUg0QjtBQUk5QkMsZ0JBSjhCLHNCQUluQkMsS0FKbUIsRUFJWjtBQUNoQixlQUFPQSxhQUFXQSxLQUFYLEdBQXFCLElBQTVCO0FBQ0QsT0FONkI7QUFPOUJDLGVBUDhCLHFCQU9wQkQsS0FQb0IsRUFPYjtBQUNmLGVBQU9BLGFBQVdBLEtBQVgsR0FBcUIsSUFBNUI7QUFDRCxPQVQ2QjtBQVU5QkUsa0JBVjhCLHdCQVVqQkMsR0FWaUIsRUFVWjtBQUNoQixZQUFJQSxJQUFJQyxJQUFKLEtBQWFiLEtBQUtjLE1BQXRCLEVBQThCO0FBQzVCLGlCQUFPRixJQUFJSCxLQUFKLFFBQWVHLElBQUlILEtBQW5CLEdBQTZCLElBQXBDO0FBQ0QsU0FBQyxPQUFPLElBQVA7QUFDSDtBQWQ2QixLQUF0QjtBQUREO0FBSkUsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL21hcmtkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2luZCB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgR3JhcGhRTEVycm9yIH0gZnJvbSAnZ3JhcGhxbC9lcnJvcic7XG5pbXBvcnQgeyBHcmFwaFFMU2NhbGFyVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNjaGVtYTogYFxuICAgIHNjYWxhciBNYXJrZG93blxuICBgLFxuICByZXNvbHZlcnM6IHtcbiAgICBNYXJrZG93bjogbmV3IEdyYXBoUUxTY2FsYXJUeXBlKHtcbiAgICAgIG5hbWU6ICdNYXJrZG93bicsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBNYXJrZG93biBzY2FsYXIgdHlwZSByZXByZXNlbnRzIHRleHQgaW4gbWFya2Rvd24gbGFuZ3VhZ2UuJyxcbiAgICAgIHBhcnNlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gYCR7dmFsdWV9YCA6IG51bGw7XG4gICAgICB9LFxuICAgICAgc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA/IGAke3ZhbHVlfWAgOiBudWxsO1xuICAgICAgfSxcbiAgICAgIHBhcnNlTGl0ZXJhbChhc3QpIHtcbiAgICAgICAgaWYgKGFzdC5raW5kID09PSBLaW5kLlNUUklORykge1xuICAgICAgICAgIHJldHVybiBhc3QudmFsdWUgPyBgJHthc3QudmFsdWV9YCA6IG51bGw7XG4gICAgICAgIH0gcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxufTtcbiJdfQ==
