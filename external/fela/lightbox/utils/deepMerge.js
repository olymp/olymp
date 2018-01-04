'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.default = deepMerge;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvdXRpbHMvZGVlcE1lcmdlLmVzNiJdLCJuYW1lcyI6WyJkZWVwTWVyZ2UiLCJ0YXJnZXQiLCJzb3VyY2UiLCJleHRlbmRlZCIsIk9iamVjdCIsImFzc2lnbiIsImtleXMiLCJmb3JFYWNoIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQXdDO0FBQUEsTUFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUN0QyxNQUFNQyxXQUFXQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosTUFBbEIsQ0FBakI7O0FBRUFHLFNBQU9FLElBQVAsQ0FBWUosTUFBWixFQUFvQkssT0FBcEIsQ0FBNEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ25DLFFBQUksUUFBT04sT0FBT00sR0FBUCxDQUFQLE1BQXVCLFFBQXZCLElBQW1DLENBQUNOLE9BQU9NLEdBQVAsQ0FBeEMsRUFBcUQ7QUFDbkRMLGVBQVNLLEdBQVQsSUFBZ0JOLE9BQU9NLEdBQVAsQ0FBaEI7QUFDRCxLQUZELE1BRU8sSUFBSSxDQUFDUCxPQUFPTyxHQUFQLENBQUwsRUFBa0I7QUFDdkJMLGVBQVNLLEdBQVQsSUFBZ0JOLE9BQU9NLEdBQVAsQ0FBaEI7QUFDRCxLQUZNLE1BRUE7QUFDTEwsZUFBU0ssR0FBVCxJQUFnQlIsVUFBVUMsT0FBT08sR0FBUCxDQUFWLEVBQXVCTixPQUFPTSxHQUFQLENBQXZCLENBQWhCO0FBQ0Q7QUFDRixHQVJEOztBQVVBLFNBQU9MLFFBQVA7QUFDRDs7a0JBRWNILFMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9saWdodGJveC91dGlscy9kZWVwTWVyZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UgPSB7fSkge1xuICBjb25zdCBleHRlbmRlZCA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldCk7XG5cbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZVtrZXldICE9PSAnb2JqZWN0JyB8fCAhc291cmNlW2tleV0pIHtcbiAgICAgIGV4dGVuZGVkW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9IGVsc2UgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgZXh0ZW5kZWRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHRlbmRlZFtrZXldID0gZGVlcE1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXh0ZW5kZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZXBNZXJnZTtcbiJdfQ==
