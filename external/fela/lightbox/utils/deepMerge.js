var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function deepMerge(target) {
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var extended = Object.assign({}, target);

  Object.keys(source).forEach(function (key) {
    if (_typeof(source[key]) !== 'object' || !source[key]) {
      extended[key] = source[key];
    } else if (!target[key]) {
      extended[key] = source[key];
    } else {
      extended[key] = deepMerge(target[key], source[key]);
    }
  });

  return extended;
}

export default deepMerge;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvdXRpbHMvZGVlcE1lcmdlLmVzNiJdLCJuYW1lcyI6WyJkZWVwTWVyZ2UiLCJ0YXJnZXQiLCJzb3VyY2UiLCJleHRlbmRlZCIsIk9iamVjdCIsImFzc2lnbiIsImtleXMiLCJmb3JFYWNoIiwia2V5Il0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQXdDO0FBQUEsTUFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUN0QyxNQUFNQyxXQUFXQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosTUFBbEIsQ0FBakI7O0FBRUFHLFNBQU9FLElBQVAsQ0FBWUosTUFBWixFQUFvQkssT0FBcEIsQ0FBNEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ25DLFFBQUksUUFBT04sT0FBT00sR0FBUCxDQUFQLE1BQXVCLFFBQXZCLElBQW1DLENBQUNOLE9BQU9NLEdBQVAsQ0FBeEMsRUFBcUQ7QUFDbkRMLGVBQVNLLEdBQVQsSUFBZ0JOLE9BQU9NLEdBQVAsQ0FBaEI7QUFDRCxLQUZELE1BRU8sSUFBSSxDQUFDUCxPQUFPTyxHQUFQLENBQUwsRUFBa0I7QUFDdkJMLGVBQVNLLEdBQVQsSUFBZ0JOLE9BQU9NLEdBQVAsQ0FBaEI7QUFDRCxLQUZNLE1BRUE7QUFDTEwsZUFBU0ssR0FBVCxJQUFnQlIsVUFBVUMsT0FBT08sR0FBUCxDQUFWLEVBQXVCTixPQUFPTSxHQUFQLENBQXZCLENBQWhCO0FBQ0Q7QUFDRixHQVJEOztBQVVBLFNBQU9MLFFBQVA7QUFDRDs7QUFFRCxlQUFlSCxTQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvdXRpbHMvZGVlcE1lcmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlID0ge30pIHtcbiAgY29uc3QgZXh0ZW5kZWQgPSBPYmplY3QuYXNzaWduKHt9LCB0YXJnZXQpO1xuXG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2Vba2V5XSAhPT0gJ29iamVjdCcgfHwgIXNvdXJjZVtrZXldKSB7XG4gICAgICBleHRlbmRlZFtrZXldID0gc291cmNlW2tleV07XG4gICAgfSBlbHNlIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgIGV4dGVuZGVkW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXh0ZW5kZWRba2V5XSA9IGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGV4dGVuZGVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWVwTWVyZ2U7XG4iXX0=
