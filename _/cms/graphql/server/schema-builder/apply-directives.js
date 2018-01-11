'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _require = require('graphql/language'),
    visit = _require.visit;

var getFunc = function getFunc(ast, directives, resolvers, throwOnMissing) {
  return function (node, key, parent, path, ancestors, method) {
    if (node.directives && node.directives.length) {
      var current = node;
      node.directives.forEach(function (directive) {
        if (!current) {
          return;
        }
        var directiveName = directive.name.value;
        if (directiveName in directives) {
          var staticFunctions = directives[directiveName].resolveStatic;
          if (staticFunctions[method]) {
            var ret = staticFunctions[method].call({}, current, directive, Object.assign({
              key: key,
              parent: parent,
              path: path,
              ancestors: ancestors,
              ast: ast,
              resolvers: resolvers
            }));
            if ((typeof ret === 'undefined' ? 'undefined' : _typeof(ret)) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
              current = ret;
            }
          }
        } else if (throwOnMissing) {
          throw new Error('Unknown directive \'' + directiveName + '\'');
        }
      });
      return current;
    }
    return undefined;
  };
};

exports.default = function (ast, directives, resolvers) {
  var throwOnMissing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var func = getFunc(ast, directives, resolvers, throwOnMissing);
  visit(ast, {
    enter: function enter(node, key, parent, path, ancestors) {
      return func(node, key, parent, path, ancestors, 'enter');
    },
    leave: function leave(node, key, parent, path, ancestors) {
      return func(node, key, parent, path, ancestors, 'leave');
    }
  });

  var func2 = getFunc(ast, directives, resolvers, throwOnMissing);
  visit(ast, {
    enter: function enter(node, key, parent, path, ancestors) {
      return func2(node, key, parent, path, ancestors, 'enter2');
    },
    leave: function leave(node, key, parent, path, ancestors) {
      return func2(node, key, parent, path, ancestors, 'leave2');
    }
  });
  Object.keys(directives || {}).map(function (key) {
    return directives[key];
  }).forEach(function (_ref) {
    var resolveStatic = _ref.resolveStatic;
    return resolveStatic && resolveStatic.finalize && resolveStatic.finalize.apply({}, ast);
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9zY2hlbWEtYnVpbGRlci9hcHBseS1kaXJlY3RpdmVzLmVzNiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidmlzaXQiLCJnZXRGdW5jIiwiYXN0IiwiZGlyZWN0aXZlcyIsInJlc29sdmVycyIsInRocm93T25NaXNzaW5nIiwibm9kZSIsImtleSIsInBhcmVudCIsInBhdGgiLCJhbmNlc3RvcnMiLCJtZXRob2QiLCJsZW5ndGgiLCJjdXJyZW50IiwiZm9yRWFjaCIsImRpcmVjdGl2ZSIsImRpcmVjdGl2ZU5hbWUiLCJuYW1lIiwidmFsdWUiLCJzdGF0aWNGdW5jdGlvbnMiLCJyZXNvbHZlU3RhdGljIiwicmV0IiwiY2FsbCIsIk9iamVjdCIsImFzc2lnbiIsInVuZGVmaW5lZCIsIkVycm9yIiwiZnVuYyIsImVudGVyIiwibGVhdmUiLCJmdW5jMiIsImtleXMiLCJtYXAiLCJmaW5hbGl6ZSIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztlQUFrQkEsUUFBUSxrQkFBUixDO0lBQVZDLEssWUFBQUEsSzs7QUFFUixJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRCxFQUFNQyxVQUFOLEVBQWtCQyxTQUFsQixFQUE2QkMsY0FBN0I7QUFBQSxTQUFnRCxVQUM5REMsSUFEOEQsRUFFOURDLEdBRjhELEVBRzlEQyxNQUg4RCxFQUk5REMsSUFKOEQsRUFLOURDLFNBTDhELEVBTTlEQyxNQU44RCxFQU8zRDtBQUNILFFBQUlMLEtBQUtILFVBQUwsSUFBbUJHLEtBQUtILFVBQUwsQ0FBZ0JTLE1BQXZDLEVBQStDO0FBQzdDLFVBQUlDLFVBQVVQLElBQWQ7QUFDQUEsV0FBS0gsVUFBTCxDQUFnQlcsT0FBaEIsQ0FBd0IsVUFBQ0MsU0FBRCxFQUFlO0FBQ3JDLFlBQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1o7QUFDRDtBQUNELFlBQU1HLGdCQUFnQkQsVUFBVUUsSUFBVixDQUFlQyxLQUFyQztBQUNBLFlBQUlGLGlCQUFpQmIsVUFB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ZXJ2ZXIvc2NoZW1hLWJ1aWxkZXIvYXBwbHktZGlyZWN0aXZlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgdmlzaXQgfSA9IHJlcXVpcmUoJ2dyYXBocWwvbGFuZ3VhZ2UnKTtcblxuY29uc3QgZ2V0RnVuYyA9IChhc3QsIGRpcmVjdGl2ZXMsIHJlc29sdmVycywgdGhyb3dPbk1pc3NpbmcpID0+IChcbiAgbm9kZSxcbiAga2V5LFxuICBwYXJlbnQsXG4gIHBhdGgsXG4gIGFuY2VzdG9ycyxcbiAgbWV0aG9kXG4pID0+IHtcbiAgaWYgKG5vZGUuZGlyZWN0aXZlcyAmJiBub2RlLmRpcmVjdGl2ZXMubGVuZ3RoKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBub2RlO1xuICAgIG5vZGUuZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgIGlmICghY3VycmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBkaXJlY3RpdmVOYW1lID0gZGlyZWN0aXZlLm5hbWUudmFsdWU7XG4gICAgICBpZiAoZGlyZWN0aXZlTmFtZSBpbiBkaXJlY3RpdmVzKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0Z1bmN0aW9ucyA9IGRpcmVjdGl2ZXNbZGlyZWN0aXZlTmFtZV0ucmVzb2x2ZVN0YXRpYztcbiAgICAgICAgaWYgKHN0YXRpY0Z1bmN0aW9uc1ttZXRob2RdKSB7XG4gICAgICAgICAgY29uc3QgcmV0ID0gc3RhdGljRnVuY3Rpb25zW21ldGhvZF0uY2FsbChcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgY3VycmVudCxcbiAgICAgICAgICAgIGRpcmVjdGl2ZSxcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgYW5jZXN0b3JzLFxuICAgICAgICAgICAgICBhc3QsXG4gICAgICAgICAgICAgIHJlc29sdmVycyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHJldCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3VycmVudCA9IHJldDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhyb3dPbk1pc3NpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRpcmVjdGl2ZSAnJHtkaXJlY3RpdmVOYW1lfSdgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKGFzdCwgZGlyZWN0aXZlcywgcmVzb2x2ZXJzLCB0aHJvd09uTWlzc2luZyA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGZ1bmMgPSBnZXRGdW5jKGFzdCwgZGlyZWN0aXZlcywgcmVzb2x2ZXJzLCB0aHJvd09uTWlzc2luZyk7XG4gIHZpc2l0KGFzdCwge1xuICAgIGVudGVyKG5vZGUsIGtleSwgcGFyZW50LCBwYXRoLCBhbmNlc3RvcnMpIHtcbiAgICAgIHJldHVybiBmdW5jKG5vZGUsIGtleSwgcGFyZW50LCBwYXRoLCBhbmNlc3RvcnMsICdlbnRlcicpO1xuICAgIH0sXG4gICAgbGVhdmUobm9kZSwga2V5LCBwYXJlbnQsIHBhdGgsIGFuY2VzdG9ycykge1xuICAgICAgcmV0dXJuIGZ1bmMobm9kZSwga2V5LCBwYXJlbnQsIHBhdGgsIGFuY2VzdG9ycywgJ2xlYXZlJyk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZnVuYzIgPSBnZXRGdW5jKGFzdCwgZGlyZWN0aXZlcywgcmVzb2x2ZXJzLCB0aHJvd09uTWlzc2luZyk7XG4gIHZpc2l0KGFzdCwge1xuICAgIGVudGVyKG5vZGUsIGtleSwgcGFyZW50LCBwYXRoLCBhbmNlc3RvcnMpIHtcbiAgICAgIHJldHVybiBmdW5jMihub2RlLCBrZXksIHBhcmVudCwgcGF0aCwgYW5jZXN0b3JzLCAnZW50ZXIyJyk7XG4gICAgfSxcbiAgICBsZWF2ZShub2RlLCBrZXksIHBhcmVudCwgcGF0aCwgYW5jZXN0b3JzKSB7XG4gICAgICByZXR1cm4gZnVuYzIobm9kZSwga2V5LCBwYXJlbnQsIHBhdGgsIGFuY2VzdG9ycywgJ2xlYXZlMicpO1xuICAgIH0sXG4gIH0pO1xuICBPYmplY3Qua2V5cyhkaXJlY3RpdmVzIHx8IHt9KVxuICAgIC5tYXAoa2V5ID0+IGRpcmVjdGl2ZXNba2V5XSlcbiAgICAuZm9yRWFjaChcbiAgICAgICh7IHJlc29sdmVTdGF0aWMgfSkgPT5cbiAgICAgICAgcmVzb2x2ZVN0YXRpYyAmJlxuICAgICAgICByZXNvbHZlU3RhdGljLmZpbmFsaXplICYmXG4gICAgICAgIHJlc29sdmVTdGF0aWMuZmluYWxpemUuYXBwbHkoe30sIGFzdClcbiAgICApO1xufTtcbiJdfQ==
