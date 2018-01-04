'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
/* import createSitemap from 'olymp-sitemap/server'; */


var _server = require('olymp-graphql/server');

var _server2 = _interopRequireDefault(_server);

var _server3 = require('olymp-mail/server');

var _server4 = _interopRequireDefault(_server3);

var _server5 = require('olymp-pages/server');

var _server6 = require('olymp-cloudinary/server');

var _server7 = require('olymp-google/server');

var _server8 = require('olymp-scrape/server');

var _server9 = require('olymp-auth0/server');

var _server10 = _interopRequireDefault(_server9);

var _mongodb = require('mongodb');

var _server11 = require('olymp-collection/server');

var _algoliasearch = require('algoliasearch');

var _algoliasearch2 = _interopRequireDefault(_algoliasearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querystring = require('querystring');

var parser = require('url');

var _process$env = process.env,
    APP = _process$env.APP,
    URL = _process$env.URL,
    MONGODB_URI = _process$env.MONGODB_URI,
    ALGOLIA = _process$env.ALGOLIA,
    POSTMARK_KEY = _process$env.POSTMARK_KEY,
    POSTMARK_FROM = _process$env.POSTMARK_FROM,
    CLOUDINARY_URI = _process$env.CLOUDINARY_URI,
    AUTH_SECRET = _process$env.AUTH_SECRET,
    NODE_ENV = _process$env.NODE_ENV,
    GOOGLE_MAPS_KEY = _process$env.GOOGLE_MAPS_KEY,
    GOOGLE_CLIENT_EMAIL = _process$env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY = _process$env.GOOGLE_PRIVATE_KEY;

exports.default = function (server, options) {
  var db = null;

  var x1 = MONGODB_URI.split('?')[0];
  var x2 = MONGODB_URI.split('?')[1] || '';
  var op2 = querystring.parse(x2);
  new _mongodb.MongoClient(x1, _extends({}, op2, {
    ssl: !!op2.ssl
  })).connect(function (err, mongo) {
    if (err) {
      console.error(err);
      if (err.errors) {
        err.errors.forEach(function (err) {
          return console.error(err);
        });
      }
    }
    db = mongo.db(x1.split('/').pop());
  });

  (0, _server10.default)(server);

  var schema = (0, _server2.default)({ directives: _server11.directives });
  var modules = _extends({
    helloWorld: {
      queries: '\n      helloWorld: String\n    ',
      resolvers: {
        queries: {
          helloWorld: function helloWorld() {
            return 'Hello World!';
          }
        }
      }
    },
    user: {
      schema: '\n        type User {\n          isAdmin: Boolean\n          id: String\n          email: Email\n          token: String\n          name: String\n        }\n      '
    }
  }, (0, _get3.default)(options, 'modules', {}), _server11.modules);
  var mail = (0, _server4.default)(POSTMARK_KEY, {
    from: POSTMARK_FROM,
    url: URL
  });

  var algolia = ALGOLIA ? (0, _algoliasearch2.default)(ALGOLIA.split('@')[1], ALGOLIA.split('@')[0]) : null;

  // const responseCache = createResponseCache();
  var cachedApp = null;

  server.getSchema = schema.getSchema;
  server.getDB = function () {
    return db;
  };
  server.use(function (req, res, next) {
    req.db = db;
    req.mail = mail;
    req.schema = schema.getSchema();
    req.app = APP ? { id: APP } : null;
    req.algolia = algolia;
    next();
  });

  modules.pages = (0, _server5.pagesGraphQL)();
  modules.cloudinary = (0, _server6.cloudinaryGraphQL)(CLOUDINARY_URI);
  modules.scrape = (0, _server8.scrapeGraphQL)();
  modules.google = (0, _server7.googleGraphQL)(GOOGLE_MAPS_KEY, GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY);
  server.post('/graphql', schema.express);
  if (NODE_ENV !== 'production') {
    server.get('/graphql', schema.graphi);
  }
  schema.apply(modules);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbXMvc2VydmVyL2luZGV4LmVzNiJdLCJuYW1lcyI6WyJxdWVyeXN0cmluZyIsInJlcXVpcmUiLCJwYXJzZXIiLCJwcm9jZXNzIiwiZW52IiwiQVBQIiwiVVJMIiwiTU9OR09EQl9VUkkiLCJBTEdPTElBIiwiUE9TVE1BUktfS0VZIiwiUE9TVE1BUktfRlJPTSIsIkNMT1VESU5BUllfVVJJIiwiQVVUSF9TRUNSRVQiLCJOT0RFX0VOViIsIkdPT0dMRV9NQVBTX0tFWSIsIkdPT0dMRV9DTElFTlRfRU1BSUwiLCJHT09HTEVfUFJJVkFURV9LRVkiLCJzZXJ2ZXIiLCJvcHRpb25zIiwiZGIiLCJ4MSIsInNwbGl0IiwieDIiLCJvcDIiLCJwYXJzZSIsInNzbCIsImNvbm5lY3QiLCJlcnIiLCJtb25nbyIsImNvbnNvbGUiLCJlcnJvciIsImVycm9ycyIsImZvckVhY2giLCJwb3AiLCJzY2hlbWEiLCJkaXJlY3RpdmVzIiwibW9kdWxlcyIsImhlbGxvV29ybGQiLCJxdWVyaWVzIiwicmVzb2x2ZXJzIiwidXNlciIsIm1haWwiLCJmcm9tIiwidXJsIiwiYWxnb2xpYSIsImNhY2hlZEFwcCIsImdldFNjaGVtYSIsImdldERCIiwidXNlIiwicmVxIiwicmVzIiwibmV4dCIsImFwcCIsImlkIiwicGFnZXMiLCJjbG91ZGluYXJ5Iiwic2NyYXBlIiwiZ29vZ2xlIiwicG9zdCIsImV4cHJlc3MiLCJnZXQiLCJncmFwaGkiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQTs7O0FBUkE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7OztBQUVBLElBQU1BLGNBQWNDLFFBQVEsYUFBUixDQUFwQjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLEtBQVIsQ0FBZjs7bUJBZ0JJRSxRQUFRQyxHO0lBYlZDLEcsZ0JBQUFBLEc7SUFDQUMsRyxnQkFBQUEsRztJQUNBQyxXLGdCQUFBQSxXO0lBQ0FD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UCxDQUFZLFVBQVosRUFBd0J4QixPQUFPeUIsT0FBL0I7QUFDQSxNQUFJOUMsYUFBYSxZQUFqQixFQUErQjtBQUM3QkksV0FBTzJDLEdBQVAsQ0FBVyxVQUFYLEVBQXVCMUIsT0FBTzJCLE1BQTlCO0FBQ0Q7QUFDRDNCLFNBQU80QixLQUFQLENBQWExQixPQUFiO0FBQ0QsQyIsImZpbGUiOiJjbXMvY21zL3NlcnZlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVTY2hlbWEgZnJvbSAnb2x5bXAtZ3JhcGhxbC9zZXJ2ZXInO1xuaW1wb3J0IGNyZWF0ZU1haWwgZnJvbSAnb2x5bXAtbWFpbC9zZXJ2ZXInO1xuaW1wb3J0IHsgcGFnZXNHcmFwaFFMIH0gZnJvbSAnb2x5bXAtcGFnZXMvc2VydmVyJztcbmltcG9ydCB7IGNsb3VkaW5hcnlHcmFwaFFMIH0gZnJvbSAnb2x5bXAtY2xvdWRpbmFyeS9zZXJ2ZXInO1xuaW1wb3J0IHsgZ29vZ2xlR3JhcGhRTCB9IGZyb20gJ29seW1wLWdvb2dsZS9zZXJ2ZXInO1xuaW1wb3J0IHsgc2NyYXBlR3JhcGhRTCB9IGZyb20gJ29seW1wLXNjcmFwZS9zZXJ2ZXInO1xuaW1wb3J0IGF1dGgwIGZyb20gJ29seW1wLWF1dGgwL3NlcnZlcic7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuLyogaW1wb3J0IGNyZWF0ZVNpdGVtYXAgZnJvbSAnb2x5bXAtc2l0ZW1hcC9zZXJ2ZXInOyAqL1xuaW1wb3J0IHsgbW9kdWxlcyBhcyBjb2xNb2R1bGVzLCBkaXJlY3RpdmVzIH0gZnJvbSAnb2x5bXAtY29sbGVjdGlvbi9zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gnO1xuXG5jb25zdCBxdWVyeXN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG5cbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoJ3VybCcpO1xuXG5jb25zdCB7XG4gIEFQUCxcbiAgVVJMLFxuICBNT05HT0RCX1VSSSxcbiAgQUxHT0xJQSxcbiAgUE9TVE1BUktfS0VZLFxuICBQT1NUTUFSS19GUk9NLFxuICBDTE9VRElOQVJZX1VSSSxcbiAgLy8gRklMRVNUQUNLX0tFWSxcbiAgQVVUSF9TRUNSRVQsXG4gIE5PREVfRU5WLFxuICBHT09HTEVfTUFQU19LRVksXG4gIEdPT0dMRV9DTElFTlRfRU1BSUwsXG4gIEdPT0dMRV9QUklWQVRFX0tFWSxcbn0gPSBwcm9jZXNzLmVudjtcblxuZXhwb3J0IGRlZmF1bHQgKHNlcnZlciwgb3B0aW9ucykgPT4ge1xuICBsZXQgZGIgPSBudWxsO1xuXG5cbiAgY29uc3QgeDEgPSBNT05HT0RCX1VSSS5zcGxpdCgnPycpWzBdO1xuICBjb25zdCB4MiA9IE1PTkdPREJfVVJJLnNwbGl0KCc/JylbMV0gfHwgJyc7XG4gIGNvbnN0IG9wMiA9IHF1ZXJ5c3RyaW5nLnBhcnNlKHgyKTtcbiAgbmV3IE1vbmdvQ2xpZW50KHgxLCB7XG4gICAgLi4ub3AyLFxuICAgIHNzbDogISFvcDIuc3NsLFxuICB9KS5jb25uZWN0KChlcnIsIG1vbmdvKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgaWYgKGVyci5lcnJvcnMpIHtcbiAgICAgICAgZXJyLmVycm9ycy5mb3JFYWNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgICAgfVxuICAgIH1cbiAgICBkYiA9IG1vbmdvLmRiKHgxLnNwbGl0KCcvJykucG9wKCkpO1xuICB9KTtcblxuICBhdXRoMChzZXJ2ZXIpO1xuXG4gIGNvbnN0IHNjaGVtYSA9IGNyZWF0ZVNjaGVtYSh7IGRpcmVjdGl2ZXMgfSk7XG4gIGNvbnN0IG1vZHVsZXMgPSB7XG4gICAgaGVsbG9Xb3JsZDoge1xuICAgICAgcXVlcmllczogYFxuICAgICAgaGVsbG9Xb3JsZDogU3RyaW5nXG4gICAgYCxcbiAgICAgIHJlc29sdmVyczoge1xuICAgICAgICBxdWVyaWVzOiB7XG4gICAgICAgICAgaGVsbG9Xb3JsZDogKCkgPT4gJ0hlbGxvIFdvcmxkIScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgdXNlcjoge1xuICAgICAgc2NoZW1hOiBgXG4gICAgICAgIHR5cGUgVXNlciB7XG4gICAgICAgICAgaXNBZG1pbjogQm9vbGVhblxuICAgICAgICAgIGlkOiBTdHJpbmdcbiAgICAgICAgICBlbWFpbDogRW1haWxcbiAgICAgICAgICB0b2tlbjogU3RyaW5nXG4gICAgICAgICAgbmFtZTogU3RyaW5nXG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgfSxcbiAgICAuLi5nZXQob3B0aW9ucywgJ21vZHVsZXMnLCB7fSksXG4gICAgLi4uY29sTW9kdWxlcyxcbiAgfTtcbiAgY29uc3QgbWFpbCA9IGNyZWF0ZU1haWwoUE9TVE1BUktfS0VZLCB7XG4gICAgZnJvbTogUE9TVE1BUktfRlJPTSxcbiAgICB1cmw6IFVSTCxcbiAgfSk7XG5cbiAgY29uc3QgYWxnb2xpYSA9IEFMR09MSUFcbiAgICA/IGFsZ29saWFzZWFyY2goQUxHT0xJQS5zcGxpdCgnQCcpWzFdLCBBTEdPTElBLnNwbGl0KCdAJylbMF0pXG4gICAgOiBudWxsO1xuXG4gIC8vIGNvbnN0IHJlc3BvbnNlQ2FjaGUgPSBjcmVhdGVSZXNwb25zZUNhY2hlKCk7XG4gIGNvbnN0IGNhY2hlZEFwcCA9IG51bGw7XG5cbiAgc2VydmVyLmdldFNjaGVtYSA9IHNjaGVtYS5nZXRTY2hlbWE7XG4gIHNlcnZlci5nZXREQiA9ICgpID0+IGRiO1xuICBzZXJ2ZXIudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHJlcS5kYiA9IGRiO1xuICAgIHJlcS5tYWlsID0gbWFpbDtcbiAgICByZXEuc2NoZW1hID0gc2NoZW1hLmdldFNjaGVtYSgpO1xuICAgIHJlcS5hcHAgPSBBUFAgPyB7IGlkOiBBUFAgfSA6IG51bGw7XG4gICAgcmVxLmFsZ29saWEgPSBhbGdvbGlhO1xuICAgIG5leHQoKTtcbiAgfSk7XG5cbiAgbW9kdWxlcy5wYWdlcyA9IHBhZ2VzR3JhcGhRTCgpO1xuICBtb2R1bGVzLmNsb3VkaW5hcnkgPSBjbG91ZGluYXJ5R3JhcGhRTChDTE9VRElOQVJZX1VSSSk7XG4gIG1vZHVsZXMuc2NyYXBlID0gc2NyYXBlR3JhcGhRTCgpO1xuICBtb2R1bGVzLmdvb2dsZSA9IGdvb2dsZUdyYXBoUUwoXG4gICAgR09PR0xFX01BUFNfS0VZLFxuICAgIEdPT0dMRV9DTElFTlRfRU1BSUwsXG4gICAgR09PR0xFX1BSSVZBVEVfS0VZLFxuICApO1xuICBzZXJ2ZXIucG9zdCgnL2dyYXBocWwnLCBzY2hlbWEuZXhwcmVzcyk7XG4gIGlmIChOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgc2VydmVyLmdldCgnL2dyYXBocWwnLCBzY2hlbWEuZ3JhcGhpKTtcbiAgfVxuICBzY2hlbWEuYXBwbHkobW9kdWxlcyk7XG59O1xuIl19
