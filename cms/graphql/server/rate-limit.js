import _get from 'lodash/get';

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import { createTypeFetcher } from 'olymp-graphql/server';
import { RateLimiter } from 'limiter';
import LRU from 'lru-cache';
import shortId from 'shortid';

var cache = LRU({
  max: 500,
  maxAge: 1000 * 60 * 5
});
var limit = 1000;
var per = 'hour';

var fetchType = createTypeFetcher(function (node, name) {
  return _get(node, 'name.value') === name;
});

export default {
  name: 'rate-limit',
  onBefore: function onBefore(_ref) {
    var keys = _ref.keys,
        context = _ref.context,
        resolverAST = _ref.resolverAST,
        ast = _ref.ast,
        rest = _objectWithoutProperties(_ref, ['keys', 'context', 'resolverAST', 'ast']);

    if (keys.length !== 2) return;
    var type = fetchType(ast, keys[1]);
    var directive = _get(type, 'directives', []).find(function (d) {
      return _get(d, 'name.value') === 'rateLimit';
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
        cachedLimiter = new RateLimiter(limit, per);
        cachedLimiter.id = shortId.generate();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dyYXBocWwvc2VydmVyL3JhdGUtbGltaXQuZXM2Il0sIm5hbWVzIjpbImNyZWF0ZVR5cGVGZXRjaGVyIiwiUmF0ZUxpbWl0ZXIiLCJMUlUiLCJzaG9ydElkIiwiY2FjaGUiLCJtYXgiLCJtYXhBZ2UiLCJsaW1pdCIsInBlciIsImZldGNoVHlwZSIsIm5vZGUiLCJuYW1lIiwib25CZWZvcmUiLCJrZXlzIiwiY29udGV4dCIsInJlc29sdmVyQVNUIiwiYXN0IiwicmVzdCIsImxlbmd0aCIsInR5cGUiLCJkaXJlY3RpdmUiLCJmaW5kIiwiZCIsImlwIiwiY2FjaGVkTGltaXRlciIsImdldCIsImdldFRva2Vuc1JlbWFpbmluZyIsIkVycm9yIiwidHJ5UmVtb3ZlVG9rZW5zIiwiaWQiLCJnZW5lcmF0ZSIsImNvc3QiLCJyZW1haW5pbmciLCJNYXRoIiwiZmxvb3IiLCJyZXNldEF0IiwidG9rZW5CdWNrZXQiLCJpbnRlcnZhbCIsIm5vZGVDb3VudCIsInJhdGVMaW1pdCIsInNldCIsInF1ZXJpZXMiLCJyZXNvbHZlcnMiLCJzb3VyY2UiLCJjb25zb2xlIiwibG9nIiwic2NoZW1hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxTQUFTQSxpQkFBVCxRQUFrQyxzQkFBbEM7QUFDQSxTQUFTQyxXQUFULFFBQTRCLFNBQTVCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixXQUFoQjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsU0FBcEI7O0FBRUEsSUFBTUMsUUFBUUYsSUFBSTtBQUNoQkcsT0FBSyxHQURXO0FBRWhCQyxVQUFRLE9BQU8sRUFBUCxHQUFZO0FBRkosQ0FBSixDQUFkO0FBSUEsSUFBTUMsUUFBUSxJQUFkO0FBQ0EsSUFBTUMsTUFBTSxNQUFaOztBQUVBLElBQU1DLFlBQVlULGtCQUNoQixVQUFDVSxJQUFELEVBQU9DLElBQVA7QUFBQSxTQUFnQixLQUFJRCxJQUFKLEVBQVUsWUFBVixNQUE0QkMsSUFBNUM7QUFBQSxDQURnQixDQUFsQjs7QUFJQSxlQUFlO0FBQ2JBLFFBQU0sWUFETztBQUViQyxZQUFVLHdCQUFrRDtBQUFBLFFBQS9DQyxJQUErQyxRQUEvQ0EsSUFBK0M7QUFBQSxRQUF6Q0MsT0FBeUMsUUFBekNBLE9BQXlDO0FBQUEsUUFBaENDLFdBQWdDLFFBQWhDQSxXQUFnQztBQUFBLFFBQW5CQyxHQUFtQixRQUFuQkEsR0FBbUI7QUFBQSxRQUFYQyxJQUFXOztBQUMxRCxRQUFJSixLQUFLSyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3ZCLFFBQU1DLE9BQU9WLFVBQVVPLEdBQVYsRUFBZUgsS0FBSyxDQUFMLENBQWYsQ0FBYjtBQUNBLFFBQU1PLFlBQVksS0FBSUQsSUFBSixFQUFVLFlBQVYsRUFBd0IsRUFBeEIsRUFBNEJFLElBQTVCLENBQ2hCO0FBQUEsYUFBSyxLQUFJQyxDQUFKLEVBQU8sWUFBUCxNQUF5QixXQUE5QjtBQUFBLEtBRGdCLENBQWxCO0FBSDBELFFBTWxEQyxFQU5rRCxHQU0zQ1QsT0FOMkMsQ0FNbERTLEVBTmtEOztBQU8xRCxRQUFJSixRQUFRQyxTQUFaLEVBQXVCO0FBQ3JCLFVBQUlJLGdCQUFnQnBCLE1BQU1xQixHQUFOLENBQVVGLEVBQVYsQ0FBcEI7QUFDQSxVQUFJQyxhQUFKLEVBQW1CO0FBQ2pCLFlBQUlBLGNBQWNFLGtCQUFkLE1BQXNDLENBQTFDLEVBQTZDO0FBQzNDLGdCQUFNLElBQUlDLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0FBQ0Q7QUFDREgsc0JBQWNJLGVBQWQsQ0FBOEIsQ0FBOUI7QUFDRCxPQUxELE1BS087QUFDTEosd0JBQWdCLElBQUl2QixXQUFKLENBQWdCTSxLQUFoQixFQUF1QkMsR0FBdkIsQ0FBaEI7QUFDQWdCLHNCQUFjSyxFQUFkLEdBQW1CMUIsUUFBUTJCLFFBQVIsRUFBbkI7QUFDRDtBQUNETixvQkFBY08sSUFBZCxHQUFxQixDQUFyQjtBQUNBUCxvQkFBY2pCLEtBQWQsR0FBc0JBLEtBQXRCO0FBQ0FpQixvQkFBY1EsU0FBZCxHQUEwQkMsS0FBS0MsS0FBTCxDQUFXVixjQUFjRSxrQkFBZCxFQUFYLENBQTFCO0FBQ0FGLG9CQUFjVyxPQUFkLEdBQXdCWCxjQUFjWSxXQUFkLENBQTBCQyxRQUFsRDtBQUNBYixvQkFBY2MsU0FBZCxHQUEwQixDQUExQjtBQUNBeEIsY0FBUXlCLFNBQVIsR0FBb0JmLGFBQXBCO0FBQ0FwQixZQUFNb0MsR0FBTixDQUFVakIsRUFBVixFQUFjQyxhQUFkLEVBQTZCLEtBQTdCO0FBQ0Q7QUFDRixHQTVCWTtBQTZCYmlCLDJDQTdCYTtBQWdDYkMsYUFBVztBQUNURCxhQUFTO0FBQ1BGLGlCQUFXLG1CQUFDSSxNQUFEO0FBQUEsWUFBZUosVUFBZixTQUFlQSxTQUFmOztBQUFBOztBQUFBLGVBQ1RLLFFBQVFDLEdBQVIsQ0FBWU4sVUFBWixLQUEwQkEsVUFEakI7QUFBQTtBQURKO0FBREEsR0FoQ0U7QUFzQ2JPO0FBdENhLENBQWYiLCJmaWxlIjoicGFja2FnZXMvZ3JhcGhxbC9zZXJ2ZXIvcmF0ZS1saW1pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjcmVhdGVUeXBlRmV0Y2hlciB9IGZyb20gJ29seW1wLWdyYXBocWwvc2VydmVyJztcbmltcG9ydCB7IFJhdGVMaW1pdGVyIH0gZnJvbSAnbGltaXRlcic7XG5pbXBvcnQgTFJVIGZyb20gJ2xydS1jYWNoZSc7XG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcblxuY29uc3QgY2FjaGUgPSBMUlUoe1xuICBtYXg6IDUwMCxcbiAgbWF4QWdlOiAxMDAwICogNjAgKiA1LFxufSk7XG5jb25zdCBsaW1pdCA9IDEwMDA7XG5jb25zdCBwZXIgPSAnaG91cic7XG5cbmNvbnN0IGZldGNoVHlwZSA9IGNyZWF0ZVR5cGVGZXRjaGVyKFxuICAobm9kZSwgbmFtZSkgPT4gZ2V0KG5vZGUsICduYW1lLnZhbHVlJykgPT09IG5hbWUsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdyYXRlLWxpbWl0JyxcbiAgb25CZWZvcmU6ICh7IGtleXMsIGNvbnRleHQsIHJlc29sdmVyQVNULCBhc3QsIC4uLnJlc3QgfSkgPT4ge1xuICAgIGlmIChrZXlzLmxlbmd0aCAhPT0gMikgcmV0dXJuO1xuICAgIGNvbnN0IHR5cGUgPSBmZXRjaFR5cGUoYXN0LCBrZXlzWzFdKTtcbiAgICBjb25zdCBkaXJlY3RpdmUgPSBnZXQodHlwZSwgJ2RpcmVjdGl2ZXMnLCBbXSkuZmluZChcbiAgICAgIGQgPT4gZ2V0KGQsICduYW1lLnZhbHVlJykgPT09ICdyYXRlTGltaXQnLFxuICAgICk7XG4gICAgY29uc3QgeyBpcCB9ID0gY29udGV4dDtcbiAgICBpZiAodHlwZSAmJiBkaXJlY3RpdmUpIHtcbiAgICAgIGxldCBjYWNoZWRMaW1pdGVyID0gY2FjaGUuZ2V0KGlwKTtcbiAgICAgIGlmIChjYWNoZWRMaW1pdGVyKSB7XG4gICAgICAgIGlmIChjYWNoZWRMaW1pdGVyLmdldFRva2Vuc1JlbWFpbmluZygpIDw9IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RvbyBtYW55IHJlcXVlc3RzIGZyb20geW91ciBpcCEnKTtcbiAgICAgICAgfVxuICAgICAgICBjYWNoZWRMaW1pdGVyLnRyeVJlbW92ZVRva2VucygxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlZExpbWl0ZXIgPSBuZXcgUmF0ZUxpbWl0ZXIobGltaXQsIHBlcik7XG4gICAgICAgIGNhY2hlZExpbWl0ZXIuaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XG4gICAgICB9XG4gICAgICBjYWNoZWRMaW1pdGVyLmNvc3QgPSAxO1xuICAgICAgY2FjaGVkTGltaXRlci5saW1pdCA9IGxpbWl0O1xuICAgICAgY2FjaGVkTGltaXRlci5yZW1haW5pbmcgPSBNYXRoLmZsb29yKGNhY2hlZExpbWl0ZXIuZ2V0VG9rZW5zUmVtYWluaW5nKCkpO1xuICAgICAgY2FjaGVkTGltaXRlci5yZXNldEF0ID0gY2FjaGVkTGltaXRlci50b2tlbkJ1Y2tldC5pbnRlcnZhbDtcbiAgICAgIGNhY2hlZExpbWl0ZXIubm9kZUNvdW50ID0gMDtcbiAgICAgIGNvbnRleHQucmF0ZUxpbWl0ID0gY2FjaGVkTGltaXRlcjtcbiAgICAgIGNhY2hlLnNldChpcCwgY2FjaGVkTGltaXRlciwgMTAwMDApO1xuICAgIH1cbiAgfSxcbiAgcXVlcmllczogYFxuICAgIHJhdGVMaW1pdDogUmF0ZUxpbWl0XG4gIGAsXG4gIHJlc29sdmVyczoge1xuICAgIHF1ZXJpZXM6IHtcbiAgICAgIHJhdGVMaW1pdDogKHNvdXJjZSwge30sIHsgcmF0ZUxpbWl0IH0pID0+XG4gICAgICAgIGNvbnNvbGUubG9nKHJhdGVMaW1pdCkgfHwgcmF0ZUxpbWl0LFxuICAgIH0sXG4gIH0sXG4gIHNjaGVtYTogYFxuICAgIHR5cGUgUmF0ZUxpbWl0IHtcbiAgICAgIGlkOiBTdHJpbmchXG4gICAgICBjb3N0OiBJbnQhXG4gICAgICBsaW1pdDogSW50IVxuICAgICAgcmVtYWluaW5nOiBJbnQhXG4gICAgICByZXNldEF0OiBEYXRlVGltZSFcbiAgICAgIG5vZGVDb3VudDogSW50IVxuICAgIH1cbiAgYCxcbn07XG4iXX0=
