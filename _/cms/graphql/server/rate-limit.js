'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _server = require('olymp-graphql/server');

var _limiter = require('limiter');

var _lruCache = require('lru-cache');

var _lruCache2 = _interopRequireDefault(_lruCache);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cache = (0, _lruCache2.default)({
  max: 500,
  maxAge: 1000 * 60 * 5
});
var limit = 1000;
var per = 'hour';

var fetchType = (0, _server.createTypeFetcher)(function (node, name) {
  return (0, _get3.default)(node, 'name.value') === name;
});

exports.default = {
  name: 'rate-limit',
  onBefore: function onBefore(_ref) {
    var keys = _ref.keys,
        context = _ref.context,
        resolverAST = _ref.resolverAST,
        ast = _ref.ast,
        rest = _objectWithoutProperties(_ref, ['keys', 'context', 'resolverAST', 'ast']);

    if (keys.length !== 2) return;
    var type = fetchType(ast, keys[1]);
    var directive = (0, _get3.default)(type, 'directives', []).find(function (d) {
      return (0, _get3.default)(d, 'name.value') === 'rateLimit';
    });
    var ip = context.ip;

    if (type && directive) {
      var cachedLimiter = cache.get(ip);
      if (cachedLimiter) {
        if (cachedLimiter.getTokensRemaining() <= 0) {
          throw new Error('too many requests from your ip!');
        }
        cachedLimiter.tryRemoveTokens(1);
      } else {
        cachedLimiter = new _limiter.RateLimiter(limit, per);
        cachedLimiter.id = _shortid2.default.generate();
      }
      cachedLimiter.cost = 1;
      cachedLimiter.limit = limit;
      cachedLimiter.remaining = Math.floor(cachedLimiter.getTokensRemaining());
      cachedLimiter.resetAt = cachedLimiter.tokenBucket.interval;
      cachedLimiter.nodeCount = 0;
      context.rateLimit = cachedLimiter;
      cache.set(ip, cachedLimiter, 10000);
    }
  },
  queries: '\n    rateLimit: RateLimit\n  ',
  resolvers: {
    queries: {
      rateLimit: function rateLimit(source, _ref2, _ref3) {
        var _rateLimit = _ref3.rateLimit;

        _objectDestructuringEmpty(_ref2);

        return console.log(_rateLimit) || _rateLimit;
      }
    }
  },
  schema: '\n    type RateLimit {\n      id: String!\n      cost: Int!\n      limit: Int!\n      remaining: Int!\n      resetAt: DateTime!\n      nodeCount: Int!\n    }\n  '
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9yYXRlLWxpbWl0LmVzNiJdLCJuYW1lcyI6WyJjYWNoZSIsIm1heCIsIm1heEFnZSIsImxpbWl0IiwicGVyIiwiZmV0Y2hUeXBlIiwibm9kZSIsIm5hbWUiLCJvbkJlZm9yZSIsImtleXMiLCJjb250ZXh0IiwicmVzb2x2ZXJBU1QiLCJhc3QiLCJyZXN0IiwibGVuZ3RoIiwidHlwZSIsImRpcmVjdGl2ZSIsImZpbmQiLCJkIiwiaXAiLCJjYWNoZWRMaW1pdGVyIiwiZ2V0IiwiZ2V0VG9rZW5zUmVtYWluaW5nIiwiRXJyb3IiLCJ0cnlSZW1vdmVUb2tlbnMiLCJpZCIsImdlbmVyYXRlIiwiY29zdCIsInJlbWFpbmluZyIsIk1hdGgiLCJmbG9vciIsInJlc2V0QXQiLCJ0b2tlbkJ1Y2tldCIsImludGVydmFsIiwibm9kZUNvdW50IiwicmF0ZUxpbWl0Iiwic2V0IiwicXVlcmllcyIsInJlc29sdmVycyIsInNvdXJjZSIsImNvbnNvbGUiLCJsb2ciLCJzY2hlbWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSx3QkFBSTtBQUNoQkMsT0FBSyxHQURXO0FBRWhCQyxVQUFRLE9BQU8sRUFBUCxHQUFZO0FBRkosQ0FBSixDQUFkO0FBSUEsSUFBTUMsUUFBUSxJQUFkO0FBQ0EsSUFBTUMsTUFBTSxNQUFaOztBQUVBLElBQU1DLFlBQVksK0JBQ2hCLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLFNBQWdCLG1CQUFJRCxJQUFKLEVBQVUsWUFBVixNQUE0QkMsSUFBNUM7QUFBQSxDQURnQixDQUFsQjs7a0JBSWU7QUFDYkEsUUFBTSxZQURPO0FBRWJDLFlBQVUsd0JBQWtEO0FBQUEsUUFBL0NDLElBQStDLFFBQS9DQSxJQUErQztBQUFBLFFBQXpDQyxPQUF5QyxRQUF6Q0EsT0FBeUM7QUFBQSxRQUFoQ0MsV0FBZ0MsUUFBaENBLFdBQWdDO0FBQUEsUUFBbkJDLEdBQW1CLFFBQW5CQSxHQUFtQjtBQUFBLFFBQVhDLElBQVc7O0FBQzFELFFBQUlKLEtBQUtLLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDdkIsUUFBTUMsT0FBT1YsVUFBVU8sR0FBVixFQUFlSCxLQUFLLENBQUwsQ0FBZixDQUFiO0FBQ0EsUUFBTU8sWUFBWSxtQkFBSUQsSUFBSixFQUFVLFlBQVYsRUFBd0IsRUFBeEIsRUFBNEJFLElBQTVCLENBQ2hCO0FBQUEsYUFBSyxtQkFBSUMsQ0FBSixFQUFPLFlBQVAsTUFBeUIsV0FBOUI7QUFBQSxLQURnQixDQUFsQjtBQUgwRCxRQU1sREMsRUFOa0QsR0FNM0NULE9BTjJDLENBTWxEUyxFQU5rRDs7QUFPMUQsUUFBSUosUUFBUUMsU0FBWixFQUF1QjtBQUNyQixVQUFJSSxnQkFBZ0JwQixNQUFNcUIsR0FBTixDQUFVRixFQUFWLENBQXBCO0FBQ0EsVUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFJQSxjQUFjRSxrQkFBZCxNQUFzQyxDQUExQyxFQUE2QztBQUMzQyxnQkFBTSxJQUFJQyxLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUNEO0FBQ0RILHNCQUFjSSxlQUFkLENBQThCLENBQTlCO0FBQ0QsT0FMRCxNQUtPO0FBQ0xKLHdCQUFnQix5QkFBZ0JqQixLQUFoQixFQUF1QkMsR0FBdkIsQ0FBaEI7QUFDQWdCLHNCQUFjSyxFQUFkLEdBQW1CLGtCQUFRQyxRQUFSLEVBQW5CO0FBQ0Q7QUFDRE4sb0JBQWNPLElBQWQsR0FBcUIsQ0FBckI7QUFDQVAsb0JBQWNqQixLQUFkLEdBQXNCQSxLQUF0QjtBQUNBaUIsb0JBQWNRLFNBQWQsR0FBMEJDLEtBQUtDLEtBQUwsQ0FBV1YsY0FBY0Usa0JBQWQsRUFBWCxDQUExQjtBQUNBRixvQkFBY1csT0FBZCxHQUF3QlgsY0FBY1ksV0FBZCxDQUEwQkMsUUFBbEQ7QUFDQWIsb0JBQWNjLFNBQWQsR0FBMEIsQ0FBMUI7QUFDQXhCLGNBQVF5QixTQUFSLEdBQW9CZixhQUFwQjtBQUNBcEIsWUFBTW9DLEdBQU4sQ0FBVWpCLEVBQVYsRUFBY0MsYUFBZCxFQUE2QixLQUE3QjtBQUNEO0FBQ0YsR0E1Qlk7QUE2QmJpQiwyQ0E3QmE7QUFnQ2JDLGFBQVc7QUFDVEQsYUFBUztBQUNQRixpQkFBVyxtQkFBQ0ksTUFBRDtBQUFBLFlBQWVKLFVBQWYsU0FBZUEsU0FBZjs7QUFBQTs7QUFBQSxlQUNUSyxRQUFRQyxHQUFSLENBQVlOLFVBQVosS0FBMEJBLFVBRGpCO0FBQUE7QUFESjtBQURBLEdBaENFO0FBc0NiTztBQXRDYSxDIiwiZmlsZSI6ImNtcy9ncmFwaHFsL3NlcnZlci9yYXRlLWxpbWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVR5cGVGZXRjaGVyIH0gZnJvbSAnb2x5bXAtZ3JhcGhxbC9zZXJ2ZXInO1xuaW1wb3J0IHsgUmF0ZUxpbWl0ZXIgfSBmcm9tICdsaW1pdGVyJztcbmltcG9ydCBMUlUgZnJvbSAnbHJ1LWNhY2hlJztcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xuXG5jb25zdCBjYWNoZSA9IExSVSh7XG4gIG1heDogNTAwLFxuICBtYXhBZ2U6IDEwMDAgKiA2MCAqIDUsXG59KTtcbmNvbnN0IGxpbWl0ID0gMTAwMDtcbmNvbnN0IHBlciA9ICdob3VyJztcblxuY29uc3QgZmV0Y2hUeXBlID0gY3JlYXRlVHlwZUZldGNoZXIoXG4gIChub2RlLCBuYW1lKSA9PiBnZXQobm9kZSwgJ25hbWUudmFsdWUnKSA9PT0gbmFtZSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3JhdGUtbGltaXQnLFxuICBvbkJlZm9yZTogKHsga2V5cywgY29udGV4dCwgcmVzb2x2ZXJBU1QsIGFzdCwgLi4ucmVzdCB9KSA9PiB7XG4gICAgaWYgKGtleXMubGVuZ3RoICE9PSAyKSByZXR1cm47XG4gICAgY29uc3QgdHlwZSA9IGZldGNoVHlwZShhc3QsIGtleXNbMV0pO1xuICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGdldCh0eXBlLCAnZGlyZWN0aXZlcycsIFtdKS5maW5kKFxuICAgICAgZCA9PiBnZXQoZCwgJ25hbWUudmFsdWUnKSA9PT0gJ3JhdGVMaW1pdCcsXG4gICAgKTtcbiAgICBjb25zdCB7IGlwIH0gPSBjb250ZXh0O1xuICAgIGlmICh0eXBlICYmIGRpcmVjdGl2ZSkge1xuICAgICAgbGV0IGNhY2hlZExpbWl0ZXIgPSBjYWNoZS5nZXQoaXApO1xuICAgICAgaWYgKGNhY2hlZExpbWl0ZXIpIHtcbiAgICAgICAgaWYgKGNhY2hlZExpbWl0ZXIuZ2V0VG9rZW5zUmVtYWluaW5nKCkgPD0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndG9vIG1hbnkgcmVxdWVzdHMgZnJvbSB5b3VyIGlwIScpO1xuICAgICAgICB9XG4gICAgICAgIGNhY2hlZExpbWl0ZXIudHJ5UmVtb3ZlVG9rZW5zKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FjaGVkTGltaXRlciA9IG5ldyBSYXRlTGltaXRlcihsaW1pdCwgcGVyKTtcbiAgICAgICAgY2FjaGVkTGltaXRlci5pZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcbiAgICAgIH1cbiAgICAgIGNhY2hlZExpbWl0ZXIuY29zdCA9IDE7XG4gICAgICBjYWNoZWRMaW1pdGVyLmxpbWl0ID0gbGltaXQ7XG4gICAgICBjYWNoZWRMaW1pdGVyLnJlbWFpbmluZyA9IE1hdGguZmxvb3IoY2FjaGVkTGltaXRlci5nZXRUb2tlbnNSZW1haW5pbmcoKSk7XG4gICAgICBjYWNoZWRMaW1pdGVyLnJlc2V0QXQgPSBjYWNoZWRMaW1pdGVyLnRva2VuQnVja2V0LmludGVydmFsO1xuICAgICAgY2FjaGVkTGltaXRlci5ub2RlQ291bnQgPSAwO1xuICAgICAgY29udGV4dC5yYXRlTGltaXQgPSBjYWNoZWRMaW1pdGVyO1xuICAgICAgY2FjaGUuc2V0KGlwLCBjYWNoZWRMaW1pdGVyLCAxMDAwMCk7XG4gICAgfVxuICB9LFxuICBxdWVyaWVzOiBgXG4gICAgcmF0ZUxpbWl0OiBSYXRlTGltaXRcbiAgYCxcbiAgcmVzb2x2ZXJzOiB7XG4gICAgcXVlcmllczoge1xuICAgICAgcmF0ZUxpbWl0OiAoc291cmNlLCB7fSwgeyByYXRlTGltaXQgfSkgPT5cbiAgICAgICAgY29uc29sZS5sb2cocmF0ZUxpbWl0KSB8fCByYXRlTGltaXQsXG4gICAgfSxcbiAgfSxcbiAgc2NoZW1hOiBgXG4gICAgdHlwZSBSYXRlTGltaXQge1xuICAgICAgaWQ6IFN0cmluZyFcbiAgICAgIGNvc3Q6IEludCFcbiAgICAgIGxpbWl0OiBJbnQhXG4gICAgICByZW1haW5pbmc6IEludCFcbiAgICAgIHJlc2V0QXQ6IERhdGVUaW1lIVxuICAgICAgbm9kZUNvdW50OiBJbnQhXG4gICAgfVxuICBgLFxufTtcbiJdfQ==
