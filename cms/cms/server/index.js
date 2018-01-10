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

var _server9 = require('olymp-auth/server');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbXMvc2VydmVyL2luZGV4LmVzNiJdLCJuYW1lcyI6WyJxdWVyeXN0cmluZyIsInJlcXVpcmUiLCJwYXJzZXIiLCJwcm9jZXNzIiwiZW52IiwiQVBQIiwiVVJMIiwiTU9OR09EQl9VUkkiLCJBTEdPTElBIiwiUE9TVE1BUktfS0VZIiwiUE9TVE1BUktfRlJPTSIsIkNMT1VESU5BUllfVVJJIiwiQVVUSF9TRUNSRVQiLCJOT0RFX0VOViIsIkdPT0dMRV9NQVBTX0tFWSIsIkdPT0dMRV9DTElFTlRfRU1BSUwiLCJHT09HTEVfUFJJVkFURV9LRVkiLCJzZXJ2ZXIiLCJvcHRpb25zIiwiZGIiLCJ4MSIsInNwbGl0IiwieDIiLCJvcDIiLCJwYXJzZSIsInNzbCIsImNvbm5lY3QiLCJlcnIiLCJtb25nbyIsImNvbnNvbGUiLCJlcnJvciIsImVycm9ycyIsImZvckVhY2giLCJwb3AiLCJzY2hlbWEiLCJkaXJlY3RpdmVzIiwibW9kdWxlcyIsImhlbGxvV29ybGQiLCJxdWVyaWVzIiwicmVzb2x2ZXJzIiwidXNlciIsIm1haWwiLCJmcm9tIiwidXJsIiwiYWxnb2xpYSIsImNhY2hlZEFwcCIsImdldFNjaGVtYSIsImdldERCIiwidXNlIiwicmVxIiwicmVzIiwibmV4dCIsImFwcCIsImlkIiwicGFnZXMiLCJjbG91ZGluYXJ5Iiwic2NyYXBlIiwiZ29vZ2xlIiwicG9zdCIsImV4cHJlc3MiLCJnZXQiLCJncmFwaGkiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQTs7O0FBUkE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7OztBQUVBLElBQU1BLGNBQWNDLFFBQVEsYUFBUixDQUFwQjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLEtBQVIsQ0FBZjs7bUJBZ0JJRSxRQUFRQyxHO0lBYlZDLEcsZ0JBQUFBLEc7SUFDQUMsRyxnQkFBQUEsRztJQUNBQyxXLGdCQUFBQSxXO0lBQ0FD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UCxDQUFZLFVBQVosRUFBd0J4QixPQUFPeUIsT0FBL0I7QUFDQSxNQUFJOUMsYUFBYSxZQUFqQixFQUErQjtBQUM3QkksV0FBTzJDLEdBQVAsQ0FBVyxVQUFYLEVBQXVCMUIsT0FBTzJCLE1BQTlCO0FBQ0Q7QUFDRDNCLFNBQU80QixLQUFQLENBQWExQixPQUFiO0FBQ0QsQyIsImZpbGUiOiJjbXMvY21zL3NlcnZlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVTY2hlbWEgZnJvbSAnb2x5bXAtZ3JhcGhxbC9zZXJ2ZXInO1xuaW1wb3J0IGNyZWF0ZU1haWwgZnJvbSAnb2x5bXAtbWFpbC9zZXJ2ZXInO1xuaW1wb3J0IHsgcGFnZXNHcmFwaFFMIH0gZnJvbSAnb2x5bXAtcGFnZXMvc2VydmVyJztcbmltcG9ydCB7IGNsb3VkaW5hcnlHcmFwaFFMIH0gZnJvbSAnb2x5bXAtY2xvdWRpbmFyeS9zZXJ2ZXInO1xuaW1wb3J0IHsgZ29vZ2xlR3JhcGhRTCB9IGZyb20gJ29seW1wLWdvb2dsZS9zZXJ2ZXInO1xuaW1wb3J0IHsgc2NyYXBlR3JhcGhRTCB9IGZyb20gJ29seW1wLXNjcmFwZS9zZXJ2ZXInO1xuaW1wb3J0IGF1dGgwIGZyb20gJ29seW1wLWF1dGgvc2VydmVyJztcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG4vKiBpbXBvcnQgY3JlYXRlU2l0ZW1hcCBmcm9tICdvbHltcC1zaXRlbWFwL3NlcnZlcic7ICovXG5pbXBvcnQgeyBtb2R1bGVzIGFzIGNvbE1vZHVsZXMsIGRpcmVjdGl2ZXMgfSBmcm9tICdvbHltcC1jb2xsZWN0aW9uL3NlcnZlcic7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaCc7XG5cbmNvbnN0IHF1ZXJ5c3RyaW5nID0gcmVxdWlyZSgncXVlcnlzdHJpbmcnKTtcblxuY29uc3QgcGFyc2VyID0gcmVxdWlyZSgndXJsJyk7XG5cbmNvbnN0IHtcbiAgQVBQLFxuICBVUkwsXG4gIE1PTkdPREJfVVJJLFxuICBBTEdPTElBLFxuICBQT1NUTUFSS19LRVksXG4gIFBPU1RNQVJLX0ZST00sXG4gIENMT1VESU5BUllfVVJJLFxuICAvLyBGSUxFU1RBQ0tfS0VZLFxuICBBVVRIX1NFQ1JFVCxcbiAgTk9ERV9FTlYsXG4gIEdPT0dMRV9NQVBTX0tFWSxcbiAgR09PR0xFX0NMSUVOVF9FTUFJTCxcbiAgR09PR0xFX1BSSVZBVEVfS0VZXG59ID0gcHJvY2Vzcy5lbnY7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXJ2ZXIsIG9wdGlvbnMpID0+IHtcbiAgbGV0IGRiID0gbnVsbDtcblxuICBjb25zdCB4MSA9IE1PTkdPREJfVVJJLnNwbGl0KCc/JylbMF07XG4gIGNvbnN0IHgyID0gTU9OR09EQl9VUkkuc3BsaXQoJz8nKVsxXSB8fCAnJztcbiAgY29uc3Qgb3AyID0gcXVlcnlzdHJpbmcucGFyc2UoeDIpO1xuICBuZXcgTW9uZ29DbGllbnQoeDEsIHtcbiAgICAuLi5vcDIsXG4gICAgc3NsOiAhIW9wMi5zc2xcbiAgfSkuY29ubmVjdCgoZXJyLCBtb25nbykgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIGlmIChlcnIuZXJyb3JzKSB7XG4gICAgICAgIGVyci5lcnJvcnMuZm9yRWFjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGIgPSBtb25nby5kYih4MS5zcGxpdCgnLycpLnBvcCgpKTtcbiAgfSk7XG5cbiAgYXV0aDAoc2VydmVyKTtcblxuICBjb25zdCBzY2hlbWEgPSBjcmVhdGVTY2hlbWEoeyBkaXJlY3RpdmVzIH0pO1xuICBjb25zdCBtb2R1bGVzID0ge1xuICAgIGhlbGxvV29ybGQ6IHtcbiAgICAgIHF1ZXJpZXM6IGBcbiAgICAgIGhlbGxvV29ybGQ6IFN0cmluZ1xuICAgIGAsXG4gICAgICByZXNvbHZlcnM6IHtcbiAgICAgICAgcXVlcmllczoge1xuICAgICAgICAgIGhlbGxvV29ybGQ6ICgpID0+ICdIZWxsbyBXb3JsZCEnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHVzZXI6IHtcbiAgICAgIHNjaGVtYTogYFxuICAgICAgICB0eXBlIFVzZXIge1xuICAgICAgICAgIGlzQWRtaW46IEJvb2xlYW5cbiAgICAgICAgICBpZDogU3RyaW5nXG4gICAgICAgICAgZW1haWw6IEVtYWlsXG4gICAgICAgICAgdG9rZW46IFN0cmluZ1xuICAgICAgICAgIG5hbWU6IFN0cmluZ1xuICAgICAgICB9XG4gICAgICBgXG4gICAgfSxcbiAgICAuLi5nZXQob3B0aW9ucywgJ21vZHVsZXMnLCB7fSksXG4gICAgLi4uY29sTW9kdWxlc1xuICB9O1xuICBjb25zdCBtYWlsID0gY3JlYXRlTWFpbChQT1NUTUFSS19LRVksIHtcbiAgICBmcm9tOiBQT1NUTUFSS19GUk9NLFxuICAgIHVybDogVVJMXG4gIH0pO1xuXG4gIGNvbnN0IGFsZ29saWEgPSBBTEdPTElBXG4gICAgPyBhbGdvbGlhc2VhcmNoKEFMR09MSUEuc3BsaXQoJ0AnKVsxXSwgQUxHT0xJQS5zcGxpdCgnQCcpWzBdKVxuICAgIDogbnVsbDtcblxuICAvLyBjb25zdCByZXNwb25zZUNhY2hlID0gY3JlYXRlUmVzcG9uc2VDYWNoZSgpO1xuICBjb25zdCBjYWNoZWRBcHAgPSBudWxsO1xuXG4gIHNlcnZlci5nZXRTY2hlbWEgPSBzY2hlbWEuZ2V0U2NoZW1hO1xuICBzZXJ2ZXIuZ2V0REIgPSAoKSA9PiBkYjtcbiAgc2VydmVyLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICByZXEuZGIgPSBkYjtcbiAgICByZXEubWFpbCA9IG1haWw7XG4gICAgcmVxLnNjaGVtYSA9IHNjaGVtYS5nZXRTY2hlbWEoKTtcbiAgICByZXEuYXBwID0gQVBQID8geyBpZDogQVBQIH0gOiBudWxsO1xuICAgIHJlcS5hbGdvbGlhID0gYWxnb2xpYTtcbiAgICBuZXh0KCk7XG4gIH0pO1xuXG4gIG1vZHVsZXMucGFnZXMgPSBwYWdlc0dyYXBoUUwoKTtcbiAgbW9kdWxlcy5jbG91ZGluYXJ5ID0gY2xvdWRpbmFyeUdyYXBoUUwoQ0xPVURJTkFSWV9VUkkpO1xuICBtb2R1bGVzLnNjcmFwZSA9IHNjcmFwZUdyYXBoUUwoKTtcbiAgbW9kdWxlcy5nb29nbGUgPSBnb29nbGVHcmFwaFFMKFxuICAgIEdPT0dMRV9NQVBTX0tFWSxcbiAgICBHT09HTEVfQ0xJRU5UX0VNQUlMLFxuICAgIEdPT0dMRV9QUklWQVRFX0tFWVxuICApO1xuICBzZXJ2ZXIucG9zdCgnL2dyYXBocWwnLCBzY2hlbWEuZXhwcmVzcyk7XG4gIGlmIChOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgc2VydmVyLmdldCgnL2dyYXBocWwnLCBzY2hlbWEuZ3JhcGhpKTtcbiAgfVxuICBzY2hlbWEuYXBwbHkobW9kdWxlcyk7XG59O1xuIl19
