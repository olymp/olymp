'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

var _error = require('graphql/error');

var _graphql = require('graphql');

exports.default = {
  schema: '\n    scalar Url\n  ',
  resolvers: {
    Url: new _graphql.GraphQLScalarType({
      name: 'Url',
      description: 'The website scalar type represents website url.',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL3VybC5lczYiXSwibmFtZXMiOlsic2NoZW1hIiwicmVzb2x2ZXJzIiwiVXJsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicGFyc2VWYWx1ZSIsInZhbHVlIiwic2VyaWFsaXplIiwicGFyc2VMaXRlcmFsIiwiYXN0Iiwia2luZCIsIlNUUklORyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O2tCQUVlO0FBQ2JBLGdDQURhO0FBSWJDLGFBQVc7QUFDVEMsU0FBSywrQkFBc0I7QUFDekJDLFlBQU0sS0FEbUI7QUFFekJDLG1CQUFhLGlEQUZZO0FBR3pCQyxnQkFIeUIsc0JBR2RDLEtBSGMsRUFHUDtBQUNoQixlQUFPQSxLQUFQO0FBQ0QsT0FMd0I7QUFNekJDLGVBTnlCLHFCQU1mRCxLQU5lLEVBTVI7QUFDZixlQUFPQSxLQUFQO0FBQ0QsT0FSd0I7QUFTekJFLGtCQVR5Qix3QkFTWkMsR0FUWSxFQVNQO0FBQ2hCLFlBQUlBLElBQUlDLElBQUosS0FBYSxlQUFLQyxNQUF0QixFQUE4QjtBQUM1QixnQkFBTSx1RUFDeUNGLElBQUlDLElBRDdDLFFBRUosQ0FBQ0QsR0FBRCxDQUZJLENBQU47QUFJRDtBQUNELGVBQU9BLElBQUlILEtBQVg7QUFDRDtBQWpCd0IsS0FBdEI7QUFESTtBQUpFLEMiLCJmaWxlIjoiY21zL2dyYXBocWwvc2VydmVyL3NjYWxhcnMvdXJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2luZCB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgR3JhcGhRTEVycm9yIH0gZnJvbSAnZ3JhcGhxbC9lcnJvcic7XG5pbXBvcnQgeyBHcmFwaFFMU2NhbGFyVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNjaGVtYTogYFxuICAgIHNjYWxhciBVcmxcbiAgYCxcbiAgcmVzb2x2ZXJzOiB7XG4gICAgVXJsOiBuZXcgR3JhcGhRTFNjYWxhclR5cGUoe1xuICAgICAgbmFtZTogJ1VybCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSB3ZWJzaXRlIHNjYWxhciB0eXBlIHJlcHJlc2VudHMgd2Vic2l0ZSB1cmwuJyxcbiAgICAgIHBhcnNlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgcGFyc2VMaXRlcmFsKGFzdCkge1xuICAgICAgICBpZiAoYXN0LmtpbmQgIT09IEtpbmQuU1RSSU5HKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEdyYXBoUUxFcnJvcihcbiAgICAgICAgICAgIGBRdWVyeSBlcnJvcjogQ2FuIG9ubHkgcGFyc2UgU1RSSU5HIGdvdCBhOiAke2FzdC5raW5kfS5gLFxuICAgICAgICAgICAgW2FzdF1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhc3QudmFsdWU7XG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxufTtcbiJdfQ==
