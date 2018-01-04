'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCursor = toCursor;
exports.fromCursor = fromCursor;

var _language = require('graphql/language');

var _base64Url = require('base64-url');

var _base64Url2 = _interopRequireDefault(_base64Url);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toCursor(_ref) {
  var value = _ref.value;

  return _base64Url2.default.encode(value.toString());
}

function fromCursor(string) {
  var value = _base64Url2.default.decode(string);
  if (value) {
    return { value: value };
  }
  return null;
}

exports.default = {
  schema: '\n    scalar Cursor\n  ',
  resolvers: {
    Cursor: new _graphql.GraphQLScalarType({
      name: 'Cursor',
      serialize: function serialize(value) {
        if (value.value) {
          return toCursor(value);
        }
        return null;
      },
      parseLiteral: function parseLiteral(ast) {
        if (ast.kind === _language.Kind.STRING) {
          return fromCursor(ast.value);
        }
        return null;
      },
      parseValue: function parseValue(value) {
        return fromCursor(value);
      }
    })
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2FsYXJzL2N1cnNvci5lczYiXSwibmFtZXMiOlsidG9DdXJzb3IiLCJmcm9tQ3Vyc29yIiwidmFsdWUiLCJlbmNvZGUiLCJ0b1N0cmluZyIsInN0cmluZyIsImRlY29kZSIsInNjaGVtYSIsInJlc29sdmVycyIsIkN1cnNvciIsIm5hbWUiLCJzZXJpYWxpemUiLCJwYXJzZUxpdGVyYWwiLCJhc3QiLCJraW5kIiwiU1RSSU5HIiwicGFyc2VWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFJZ0JBLFEsR0FBQUEsUTtRQUlBQyxVLEdBQUFBLFU7O0FBUmhCOztBQUNBOzs7O0FBQ0E7Ozs7QUFFTyxTQUFTRCxRQUFULE9BQTZCO0FBQUEsTUFBVEUsS0FBUyxRQUFUQSxLQUFTOztBQUNsQyxTQUFPLG9CQUFVQyxNQUFWLENBQWlCRCxNQUFNRSxRQUFOLEVBQWpCLENBQVA7QUFDRDs7QUFFTSxTQUFTSCxVQUFULENBQW9CSSxNQUFwQixFQUE0QjtBQUNqQyxNQUFNSCxRQUFRLG9CQUFVSSxNQUFWLENBQWlCRCxNQUFqQixDQUFkO0FBQ0EsTUFBSUgsS0FBSixFQUFXO0FBQ1QsV0FBTyxFQUFFQSxZQUFGLEVBQVA7QUFDRDtBQUNELFNBQU8sSUFBUDtBQUNEOztrQkFFYztBQUNiSyxtQ0FEYTtBQUliQyxhQUFXO0FBQ1RDLFlBQVEsK0JBQXNCO0FBQzVCQyxZQUFNLFFBRHNCO0FBRTVCQyxlQUY0QixxQkFFbEJULEtBRmtCLEVBRVg7QUFDZixZQUFJQSxNQUFNQSxLQUFWLEVBQWlCO0FBQ2YsaUJBQU9GLFNBQVNFLEtBQVQsQ0FBUDtBQUNEO0FBQ0QsZUFBTyxJQUFQO0FBQ0QsT0FQMkI7QUFRNUJVLGtCQVI0Qix3QkFRZkMsR0FSZSxFQVFWO0FBQ2hCLFlBQUlBLElBQUlDLElBQUosS0FBYSxlQUFLQyxNQUF0QixFQUE4QjtBQUM1QixpQkFBT2QsV0FBV1ksSUFBSVgsS0FBZixDQUFQO0FBQ0Q7QUFDRCxlQUFPLElBQVA7QUFDRCxPQWIyQjtBQWM1QmMsZ0JBZDRCLHNCQWNqQmQsS0FkaUIsRUFjVjtBQUNoQixlQUFPRCxXQUFXQyxLQUFYLENBQVA7QUFDRDtBQWhCMkIsS0FBdEI7QUFEQztBQUpFLEMiLCJmaWxlIjoiY21zL2dyYXBocWwvc2VydmVyL3NjYWxhcnMvY3Vyc29yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2luZCB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UnO1xuaW1wb3J0IEJhc2U2NFVSTCBmcm9tICdiYXNlNjQtdXJsJztcbmltcG9ydCB7IEdyYXBoUUxTY2FsYXJUeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0N1cnNvcih7IHZhbHVlIH0pIHtcbiAgcmV0dXJuIEJhc2U2NFVSTC5lbmNvZGUodmFsdWUudG9TdHJpbmcoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQ3Vyc29yKHN0cmluZykge1xuICBjb25zdCB2YWx1ZSA9IEJhc2U2NFVSTC5kZWNvZGUoc3RyaW5nKTtcbiAgaWYgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzY2hlbWE6IGBcbiAgICBzY2FsYXIgQ3Vyc29yXG4gIGAsXG4gIHJlc29sdmVyczoge1xuICAgIEN1cnNvcjogbmV3IEdyYXBoUUxTY2FsYXJUeXBlKHtcbiAgICAgIG5hbWU6ICdDdXJzb3InLFxuICAgICAgc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS52YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB0b0N1cnNvcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgICAgcGFyc2VMaXRlcmFsKGFzdCkge1xuICAgICAgICBpZiAoYXN0LmtpbmQgPT09IEtpbmQuU1RSSU5HKSB7XG4gICAgICAgICAgcmV0dXJuIGZyb21DdXJzb3IoYXN0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgICBwYXJzZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmcm9tQ3Vyc29yKHZhbHVlKTtcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG59O1xuIl19
