'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

var _graphqlYoga = require('graphql-yoga');

var _db = require('./db');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var schema = '\n  scalar Json\n  scalar DateTime\n\n  enum DOCUMENT_STATE {\n    DRAFT\n    PUBLISHED\n  }\n  type Document {\n    id: ID!\n    rootId: String\n    type: String\n    createdAt: DateTime!\n    updatedAt: DateTime!\n    state: DOCUMENT_STATE\n    slug: String\n    name: String\n    description: String\n    tags: [String!]\n    image: Json\n    data: Json\n    color: String\n    start: DateTime\n    end: DateTime\n    extract: String\n    nodes: [Json!]\n    text: String\n    toc: [Json!]\n  }\n  type ParseResult {\n    updatedIds: [String!]!\n    createdIds: [String!]!\n    deletedIds: [String!]!\n  }\n  type BuildResult {\n    updatedIds: [String!]!\n    createdIds: [String!]!\n    deletedIds: [String!]!\n  }\n  type Query {\n    hello(name: String): String\n    document(id: ID!): Document\n    documentList: [Document]!\n  }\n  type Mutation {\n    executeParse(app: String): ParseResult\n    executeBuild(app: String): BuildResult\n  }\n';

exports.default = function (_ref) {
  var mongoUri = _ref.mongoUri,
      client = _ref.client;

  var typeDefs = schema;
  (0, _db.connectionString)(mongoUri);

  var resolvers = {
    Query: {
      hello: function hello(_, _ref2) {
        var name = _ref2.name;
        return 'Hello ' + (name || 'world');
      },
      document: function document(_, _ref3) {
        var id = _ref3.id;
        return (0, _db.findOne)('document', id);
      },
      documentList: function documentList() {
        return (0, _db.find)('document');
      }
    },
    Mutation: {
      executeBuild: function executeBuild(_, _ref4) {
        var data = _ref4.data;
        return (0, _db.updateOne)('document', data);
      },
      executeParse: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref6) {
          var app = _ref6.app;
          var docs, result;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return client(app);

                case 2:
                  docs = _context.sent;
                  _context.next = 5;
                  return Promise.all(docs.map(function (x) {
                    return (0, _db.updateOne)('document', { rootId: x.rootId }, x);
                  }));

                case 5:
                  result = _context.sent;
                  return _context.abrupt('return', {
                    createdIds: [],
                    deletedIds: [],
                    updatedIds: result.map(function (x) {
                      return x.id;
                    })
                  });

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, undefined);
        }));

        return function executeParse(_x, _x2) {
          return _ref5.apply(this, arguments);
        };
      }()
      // document: (_, { data }) => updateOne('document', data)
    }
  };

  var lambda = new _graphqlYoga.GraphQLServerLambda({
    typeDefs: typeDefs,
    resolvers: resolvers,
    options: {
      endpoint: null
    }
  });

  return {
    server: function server(event, context, callback) {
      context.callbackWaitsForEmptyEventLoop = false;
      lambda.graphqlHandler(event, context, callback);
    },
    playground: lambda.playgroundHandler
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9uZW8vYXBpLmVzNiJdLCJuYW1lcyI6WyJzY2hlbWEiLCJtb25nb1VyaSIsImNsaWVudCIsInR5cGVEZWZzIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJoZWxsbyIsIl8iLCJuYW1lIiwiZG9jdW1lbnQiLCJpZCIsImRvY3VtZW50TGlzdCIsIk11dGF0aW9uIiwiZXhlY3V0ZUJ1aWxkIiwiZGF0YSIsImV4ZWN1dGVQYXJzZSIsImFwcCIsImRvY3MiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwicm9vdElkIiwieCIsInJlc3VsdCIsImNyZWF0ZWRJZHMiLCJkZWxldGVkSWRzIiwidXBkYXRlZElkcyIsImxhbWJkYSIsIm9wdGlvbnMiLCJlbmRwb2ludCIsInNlcnZlciIsImV2ZW50IiwiY29udGV4dCIsImNhbGxiYWNrIiwiY2FsbGJhY2tXYWl0c0ZvckVtcHR5RXZlbnRMb29wIiwiZ3JhcGhxbEhhbmRsZXIiLCJwbGF5Z3JvdW5kIiwicGxheWdyb3VuZEhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsazhCQUFOOztrQkFrRGUsZ0JBQTBCO0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDdkMsTUFBTUMsV0FBV0gsTUFBakI7QUFDQSw0QkFBaUJDLFFBQWpCOztBQUVBLE1BQU1HLFlBQVk7QUFDaEJDLFdBQU87QUFDTEMsYUFBTyxlQUFDQyxDQUFEO0FBQUEsWUFBTUMsSUFBTixTQUFNQSxJQUFOO0FBQUEsMkJBQTBCQSxRQUFRLE9BQWxDO0FBQUEsT0FERjtBQUVMQyxnQkFBVSxrQkFBQ0YsQ0FBRDtBQUFBLFlBQU1HLEVBQU4sU0FBTUEsRUFBTjtBQUFBLGVBQWUsaUJBQVEsVUFBUixFQUFvQkEsRUFBcEIsQ0FBZjtBQUFBLE9BRkw7QUFHTEMsb0JBQWM7QUFBQSxlQUFNLGNBQUssVUFBTCxDQUFOO0FBQUE7QUFIVCxLQURTO0FBTWhCQyxjQUFVO0FBQ1JDLG9CQUFjLHNCQUFDTixDQUFEO0FBQUEsWUFBTU8sSUFBTixTQUFNQSxJQUFOO0FBQUEsZUFBaUIsbUJBQVUsVUFBVixFQUFzQkEsSUFBdEIsQ0FBakI7QUFBQSxPQUROO0FBRVJDO0FBQUEsNEVBQWMsaUJBQU9SLENBQVA7QUFBQSxjQUFZUyxHQUFaLFNBQVlBLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFT2QsT0FBT2MsR0FBUCxDQUZQOztBQUFBO0FBRU5DLHNCQUZNO0FBQUE7QUFBQSx5QkFHU0MsUUFBUUMsR0FBUixDQUNuQkYsS0FBS0csR0FBTCxDQUFTO0FBQUEsMkJBQUssbUJBQVUsVUFBVixFQUFzQixFQUFFQyxRQUFRQyxFQUFFRCxNQUFaLEVBQXRCLEVBQTRDQyxDQUE1QyxDQUFMO0FBQUEsbUJBQVQsQ0FEbUIsQ0FIVDs7QUFBQTtBQUdOQyx3QkFITTtBQUFBLG1EQU1MO0FBQ0xDLGdDQUFZLEVBRFA7QUFFTEMsZ0NBQVksRUFGUDtBQUdMQyxnQ0FBWUgsT0FBT0gsR0FBUCxDQUFXO0FBQUEsNkJBQUtFLEVBQUVaLEVBQVA7QUFBQSxxQkFBWDtBQUhQLG1CQU5LOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQWRRO0FBTk0sR0FBbEI7O0FBd0JBLE1BQU1pQixTQUFTLHFDQUF3QjtBQUNyQ3hCLHNCQURxQztBQUVyQ0Msd0JBRnFDO0FBR3JDd0IsYUFBUztBQUNQQyxnQkFBVTtBQURIO0FBSDRCLEdBQXhCLENBQWY7O0FBUUEsU0FBTztBQUNMQyxZQUFRLGdCQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBaUJDLFFBQWpCLEVBQThCO0FBQ3BDRCxjQUFRRSw4QkFBUixHQUF5QyxLQUF6QztBQUNBUCxhQUFPUSxjQUFQLENBQXNCSixLQUF0QixFQUE2QkMsT0FBN0IsRUFBc0NDLFFBQXRDO0FBQ0QsS0FKSTtBQUtMRyxnQkFBWVQsT0FBT1U7QUFMZCxHQUFQO0FBT0QsQyIsImZpbGUiOiJjbXMvbmVvL2FwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IHsgR3JhcGhRTFNlcnZlckxhbWJkYSB9IGZyb20gJ2dyYXBocWwteW9nYSc7XG5pbXBvcnQgeyBmaW5kT25lLCBmaW5kLCB1cGRhdGVPbmUsIGNvbm5lY3Rpb25TdHJpbmcgfSBmcm9tICcuL2RiJztcblxuY29uc3Qgc2NoZW1hID0gYFxuICBzY2FsYXIgSnNvblxuICBzY2FsYXIgRGF0ZVRpbWVcblxuICBlbnVtIERPQ1VNRU5UX1NUQVRFIHtcbiAgICBEUkFGVFxuICAgIFBVQkxJU0hFRFxuICB9XG4gIHR5cGUgRG9jdW1lbnQge1xuICAgIGlkOiBJRCFcbiAgICByb290SWQ6IFN0cmluZ1xuICAgIHR5cGU6IFN0cmluZ1xuICAgIGNyZWF0ZWRBdDogRGF0ZVRpbWUhXG4gICAgdXBkYXRlZEF0OiBEYXRlVGltZSFcbiAgICBzdGF0ZTogRE9DVU1FTlRfU1RBVEVcbiAgICBzbHVnOiBTdHJpbmdcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBkZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgdGFnczogW1N0cmluZyFdXG4gICAgaW1hZ2U6IEpzb25cbiAgICBkYXRhOiBKc29uXG4gICAgY29sb3I6IFN0cmluZ1xuICAgIHN0YXJ0OiBEYXRlVGltZVxuICAgIGVuZDogRGF0ZVRpbWVcbiAgICBleHRyYWN0OiBTdHJpbmdcbiAgICBub2RlczogW0pzb24hXVxuICAgIHRleHQ6IFN0cmluZ1xuICAgIHRvYzogW0pzb24hXVxuICB9XG4gIHR5cGUgUGFyc2VSZXN1bHQge1xuICAgIHVwZGF0ZWRJZHM6IFtTdHJpbmchXSFcbiAgICBjcmVhdGVkSWRzOiBbU3RyaW5nIV0hXG4gICAgZGVsZXRlZElkczogW1N0cmluZyFdIVxuICB9XG4gIHR5cGUgQnVpbGRSZXN1bHQge1xuICAgIHVwZGF0ZWRJZHM6IFtTdHJpbmchXSFcbiAgICBjcmVhdGVkSWRzOiBbU3RyaW5nIV0hXG4gICAgZGVsZXRlZElkczogW1N0cmluZyFdIVxuICB9XG4gIHR5cGUgUXVlcnkge1xuICAgIGhlbGxvKG5hbWU6IFN0cmluZyk6IFN0cmluZ1xuICAgIGRvY3VtZW50KGlkOiBJRCEpOiBEb2N1bWVudFxuICAgIGRvY3VtZW50TGlzdDogW0RvY3VtZW50XSFcbiAgfVxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBleGVjdXRlUGFyc2UoYXBwOiBTdHJpbmcpOiBQYXJzZVJlc3VsdFxuICAgIGV4ZWN1dGVCdWlsZChhcHA6IFN0cmluZyk6IEJ1aWxkUmVzdWx0XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IG1vbmdvVXJpLCBjbGllbnQgfSkgPT4ge1xuICBjb25zdCB0eXBlRGVmcyA9IHNjaGVtYTtcbiAgY29ubmVjdGlvblN0cmluZyhtb25nb1VyaSk7XG5cbiAgY29uc3QgcmVzb2x2ZXJzID0ge1xuICAgIFF1ZXJ5OiB7XG4gICAgICBoZWxsbzogKF8sIHsgbmFtZSB9KSA9PiBgSGVsbG8gJHtuYW1lIHx8ICd3b3JsZCd9YCxcbiAgICAgIGRvY3VtZW50OiAoXywgeyBpZCB9KSA9PiBmaW5kT25lKCdkb2N1bWVudCcsIGlkKSxcbiAgICAgIGRvY3VtZW50TGlzdDogKCkgPT4gZmluZCgnZG9jdW1lbnQnKVxuICAgIH0sXG4gICAgTXV0YXRpb246IHtcbiAgICAgIGV4ZWN1dGVCdWlsZDogKF8sIHsgZGF0YSB9KSA9PiB1cGRhdGVPbmUoJ2RvY3VtZW50JywgZGF0YSksXG4gICAgICBleGVjdXRlUGFyc2U6IGFzeW5jIChfLCB7IGFwcCB9KSA9PiB7XG4gICAgICAgIC8vIGFwcCArPSAnIHRhZzpjbXMnO1xuICAgICAgICBjb25zdCBkb2NzID0gYXdhaXQgY2xpZW50KGFwcCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgIGRvY3MubWFwKHggPT4gdXBkYXRlT25lKCdkb2N1bWVudCcsIHsgcm9vdElkOiB4LnJvb3RJZCB9LCB4KSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjcmVhdGVkSWRzOiBbXSxcbiAgICAgICAgICBkZWxldGVkSWRzOiBbXSxcbiAgICAgICAgICB1cGRhdGVkSWRzOiByZXN1bHQubWFwKHggPT4geC5pZClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGRvY3VtZW50OiAoXywgeyBkYXRhIH0pID0+IHVwZGF0ZU9uZSgnZG9jdW1lbnQnLCBkYXRhKVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBsYW1iZGEgPSBuZXcgR3JhcGhRTFNlcnZlckxhbWJkYSh7XG4gICAgdHlwZURlZnMsXG4gICAgcmVzb2x2ZXJzLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGVuZHBvaW50OiBudWxsXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHNlcnZlcjogKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjaykgPT4ge1xuICAgICAgY29udGV4dC5jYWxsYmFja1dhaXRzRm9yRW1wdHlFdmVudExvb3AgPSBmYWxzZTtcbiAgICAgIGxhbWJkYS5ncmFwaHFsSGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgcGxheWdyb3VuZDogbGFtYmRhLnBsYXlncm91bmRIYW5kbGVyXG4gIH07XG59O1xuIl19
