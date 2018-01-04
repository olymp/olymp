'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var omit = function omit(obj) {
  var keyToOmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '__typename';

  if (!(0, _isPlainObject3.default)(obj)) {
    return obj;
  }
  var newObj = Object.keys(obj).reduce(function (store, key) {
    if ((0, _isArray3.default)(obj[key])) {
      store[key] = obj[key].map(function (x) {
        return omit(x, keyToOmit);
      });
    } else if ((0, _isPlainObject3.default)(obj[key])) {
      store[key] = omit(obj[key], keyToOmit);
    } else if (key !== keyToOmit) {
      store[key] = obj[key];
    }
    return store;
  }, {});
  return newObj;
};
exports.default = omit;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL29taXQtdHlwZS5lczYiXSwibmFtZXMiOlsib21pdCIsIm9iaiIsImtleVRvT21pdCIsIm5ld09iaiIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJzdG9yZSIsImtleSIsIm1hcCIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsR0FBRCxFQUFtQztBQUFBLE1BQTdCQyxTQUE2Qix1RUFBakIsWUFBaUI7O0FBQzlDLE1BQUksQ0FBQyw2QkFBY0QsR0FBZCxDQUFMLEVBQXlCO0FBQ3ZCLFdBQU9BLEdBQVA7QUFDRDtBQUNELE1BQU1FLFNBQVNDLE9BQU9DLElBQVAsQ0FBWUosR0FBWixFQUFpQkssTUFBakIsQ0FBd0IsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQ3JELFFBQUksdUJBQVFQLElBQUlPLEdBQUosQ0FBUixDQUFKLEVBQXVCO0FBQ3JCRCxZQUFNQyxHQUFOLElBQWFQLElBQUlPLEdBQUosRUFBU0MsR0FBVCxDQUFhO0FBQUEsZUFBS1QsS0FBS1UsQ0FBTCxFQUFRUixTQUFSLENBQUw7QUFBQSxPQUFiLENBQWI7QUFDRCxLQUZELE1BRU8sSUFBSSw2QkFBY0QsSUFBSU8sR0FBSixDQUFkLENBQUosRUFBNkI7QUFDbENELFlBQU1DLEdBQU4sSUFBYVIsS0FBS0MsSUFBSU8sR0FBSixDQUFMLEVBQWVOLFNBQWYsQ0FBYjtBQUNELEtBRk0sTUFFQSxJQUFJTSxRQUFRTixTQUFaLEVBQXVCO0FBQzVCSyxZQUFNQyxHQUFOLElBQWFQLElBQUlPLEdBQUosQ0FBYjtBQUNEO0FBQ0QsV0FBT0QsS0FBUDtBQUNELEdBVGMsRUFTWixFQVRZLENBQWY7QUFVQSxTQUFPSixNQUFQO0FBQ0QsQ0FmRDtrQkFnQmVILEkiLCJmaWxlIjoiY21zL2dyYXBocWwvb21pdC10eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGFpbk9iamVjdCwgaXNBcnJheSB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IG9taXQgPSAob2JqLCBrZXlUb09taXQgPSAnX190eXBlbmFtZScpID0+IHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGNvbnN0IG5ld09iaiA9IE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChzdG9yZSwga2V5KSA9PiB7XG4gICAgaWYgKGlzQXJyYXkob2JqW2tleV0pKSB7XG4gICAgICBzdG9yZVtrZXldID0gb2JqW2tleV0ubWFwKHggPT4gb21pdCh4LCBrZXlUb09taXQpKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qob2JqW2tleV0pKSB7XG4gICAgICBzdG9yZVtrZXldID0gb21pdChvYmpba2V5XSwga2V5VG9PbWl0KTtcbiAgICB9IGVsc2UgaWYgKGtleSAhPT0ga2V5VG9PbWl0KSB7XG4gICAgICBzdG9yZVtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICAgIHJldHVybiBzdG9yZTtcbiAgfSwge30pO1xuICByZXR1cm4gbmV3T2JqO1xufTtcbmV4cG9ydCBkZWZhdWx0IG9taXQ7XG4iXX0=
