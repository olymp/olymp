import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';

export default {
  schema: '\n    scalar Email\n  ',
  resolvers: {
    Email: new GraphQLScalarType({
      name: 'Email',
      description: 'The email scalar type represents email adress.',
      parseValue: function parseValue(value) {
        return value ? value.toLowerCase() : value;
      },
      serialize: function serialize(value) {
        return value ? value.toLowerCase() : value;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3NjYWxhcnMvZW1haWwuZXM2Il0sIm5hbWVzIjpbIktpbmQiLCJHcmFwaFFMRXJyb3IiLCJHcmFwaFFMU2NhbGFyVHlwZSIsInNjaGVtYSIsInJlc29sdmVycyIsIkVtYWlsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicGFyc2VWYWx1ZSIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJzZXJpYWxpemUiLCJwYXJzZUxpdGVyYWwiLCJhc3QiLCJraW5kIiwiU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsZUFBN0I7QUFDQSxTQUFTQyxpQkFBVCxRQUFrQyxTQUFsQzs7QUFFQSxlQUFlO0FBQ2JDLGtDQURhO0FBSWJDLGFBQVc7QUFDVEMsV0FBTyxJQUFJSCxpQkFBSixDQUFzQjtBQUMzQkksWUFBTSxPQURxQjtBQUUzQkMsbUJBQWEsZ0RBRmM7QUFHM0JDLGdCQUgyQixzQkFHaEJDLEtBSGdCLEVBR1Q7QUFDaEIsZUFBT0EsUUFBUUEsTUFBTUMsV0FBTixFQUFSLEdBQThCRCxLQUFyQztBQUNELE9BTDBCO0FBTTNCRSxlQU4yQixxQkFNakJGLEtBTmlCLEVBTVY7QUFDZixlQUFPQSxRQUFRQSxNQUFNQyxXQUFOLEVBQVIsR0FBOEJELEtBQXJDO0FBQ0QsT0FSMEI7QUFTM0JHLGtCQVQyQix3QkFTZEMsR0FUYyxFQVNUO0FBQ2hCLFlBQUlBLElBQUlDLElBQUosS0FBYWQsS0FBS2UsTUFBdEIsRUFBOEI7QUFDNUIsZ0JBQU0sSUFBSWQsWUFBSixnREFDeUNZLElBQUlDLElBRDdDLFFBRUosQ0FBQ0QsR0FBRCxDQUZJLENBQU47QUFJRDtBQUNELGVBQU9BLElBQUlKLEtBQVg7QUFDRDtBQWpCMEIsS0FBdEI7QUFERTtBQUpFLENBQWYiLCJmaWxlIjoicGFja2FnZXMvZ3JhcGhxbC9zZXJ2ZXIvc2NhbGFycy9lbWFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtpbmQgfSBmcm9tICdncmFwaHFsL2xhbmd1YWdlJztcbmltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gJ2dyYXBocWwvZXJyb3InO1xuaW1wb3J0IHsgR3JhcGhRTFNjYWxhclR5cGUgfSBmcm9tICdncmFwaHFsJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzY2hlbWE6IGBcbiAgICBzY2FsYXIgRW1haWxcbiAgYCxcbiAgcmVzb2x2ZXJzOiB7XG4gICAgRW1haWw6IG5ldyBHcmFwaFFMU2NhbGFyVHlwZSh7XG4gICAgICBuYW1lOiAnRW1haWwnLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgZW1haWwgc2NhbGFyIHR5cGUgcmVwcmVzZW50cyBlbWFpbCBhZHJlc3MuJyxcbiAgICAgIHBhcnNlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gdmFsdWUudG9Mb3dlckNhc2UoKSA6IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZS50b0xvd2VyQ2FzZSgpIDogdmFsdWU7XG4gICAgICB9LFxuICAgICAgcGFyc2VMaXRlcmFsKGFzdCkge1xuICAgICAgICBpZiAoYXN0LmtpbmQgIT09IEtpbmQuU1RSSU5HKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEdyYXBoUUxFcnJvcihcbiAgICAgICAgICAgIGBRdWVyeSBlcnJvcjogQ2FuIG9ubHkgcGFyc2UgU1RSSU5HIGdvdCBhOiAke2FzdC5raW5kfS5gLFxuICAgICAgICAgICAgW2FzdF1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhc3QudmFsdWU7XG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxufTtcbiJdfQ==
