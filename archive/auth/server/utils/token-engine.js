var jwt = require('jsonwebtoken');
jwt.verify = require('bluebird').promisify(jwt.verify);

var getDays = function getDays() {
  var days = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return Math.floor(Date.now() / 1000) + 60 * 60 * 24 * days;
};
export default (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      secret = _ref.secret;

  var SECRET = secret || process.env.AUTH_SECRET || 'abc';

  var createFromUser = function createFromUser(_ref2) {
    var id = _ref2.id,
        orgId = _ref2.orgId,
        scopes = _ref2.scopes;

    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref3$days = _ref3.days,
        days = _ref3$days === undefined ? 1 : _ref3$days;

    return jwt.sign({ id: id, orgId: orgId, scopes: scopes, exp: getDays(days) }, SECRET);
  };

  var create = function create(data) {
    var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref4$days = _ref4.days,
        days = _ref4$days === undefined ? 7 : _ref4$days;

    if (!data.exp) {
      data.exp = getDays(days);
    }
    return jwt.sign(data, SECRET);
  };

  var verify = function verify(token) {
    return jwt.verify(token, SECRET);
  };

  return { createFromUser: createFromUser, create: create, verify: verify };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvc2VydmVyL3V0aWxzL3Rva2VuLWVuZ2luZS5lczYiXSwibmFtZXMiOlsiand0IiwicmVxdWlyZSIsInZlcmlmeSIsInByb21pc2lmeSIsImdldERheXMiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInNlY3JldCIsIlNFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIX1NFQ1JFVCIsImNyZWF0ZUZyb21Vc2VyIiwiaWQiLCJvcmdJZCIsInNjb3BlcyIsInNpZ24iLCJleHAiLCJjcmVhdGUiLCJkYXRhIiwidG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLE1BQU1DLFFBQVEsY0FBUixDQUFaO0FBQ0FELElBQUlFLE1BQUosR0FBYUQsUUFBUSxVQUFSLEVBQW9CRSxTQUFwQixDQUE4QkgsSUFBSUUsTUFBbEMsQ0FBYjs7QUFFQSxJQUFNRSxVQUFVLFNBQVZBLE9BQVU7QUFBQSxNQUFDQyxJQUFELHVFQUFRLENBQVI7QUFBQSxTQUNkQyxLQUFLQyxLQUFMLENBQVdDLEtBQUtDLEdBQUwsS0FBYSxJQUF4QixJQUFnQyxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWVKLElBRGpDO0FBQUEsQ0FBaEI7QUFFQSxnQkFBZSxZQUFxQjtBQUFBLGlGQUFQLEVBQU87QUFBQSxNQUFsQkssTUFBa0IsUUFBbEJBLE1BQWtCOztBQUNsQyxNQUFNQyxTQUFTRCxVQUFVRSxRQUFRQyxHQUFSLENBQVlDLFdBQXRCLElBQXFDLEtBQXBEOztBQUVBLE1BQU1DLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQSxRQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxRQUFPQyxLQUFQLFNBQU9BLEtBQVA7QUFBQSxRQUFjQyxNQUFkLFNBQWNBLE1BQWQ7O0FBQUEsb0ZBQXVDLEVBQXZDO0FBQUEsMkJBQTBCYixJQUExQjtBQUFBLFFBQTBCQSxJQUExQiw4QkFBaUMsQ0FBakM7O0FBQUEsV0FDckJMLElBQUltQixJQUFKLENBQVMsRUFBRUgsTUFBRixFQUFNQyxZQUFOLEVBQWFDLGNBQWIsRUFBcUJFLEtBQUtoQixRQUFRQyxJQUFSLENBQTFCLEVBQVQsRUFBb0RNLE1BQXBELENBRHFCO0FBQUEsR0FBdkI7O0FBR0EsTUFBTVUsU0FBUyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBNkI7QUFBQSxvRkFBUCxFQUFPO0FBQUEsMkJBQXBCakIsSUFBb0I7QUFBQSxRQUFwQkEsSUFBb0IsOEJBQWIsQ0FBYTs7QUFDMUMsUUFBSSxDQUFDaUIsS0FBS0YsR0FBVixFQUFlO0FBQ2JFLFdBQUtGLEdBQUwsR0FBV2hCLFFBQVFDLElBQVIsQ0FBWDtBQUNEO0FBQ0QsV0FBT0wsSUFBSW1CLElBQUosQ0FBU0csSUFBVCxFQUFlWCxNQUFmLENBQVA7QUFDRCxHQUxEOztBQU9BLE1BQU1ULFNBQVMsU0FBVEEsTUFBUztBQUFBLFdBQVNGLElBQUlFLE1BQUosQ0FBV3FCLEtBQVgsRUFBa0JaLE1BQWxCLENBQVQ7QUFBQSxHQUFmOztBQUVBLFNBQU8sRUFBRUksOEJBQUYsRUFBa0JNLGNBQWxCLEVBQTBCbkIsY0FBMUIsRUFBUDtBQUNELENBaEJEIiwiZmlsZSI6InBhY2thZ2VzL2F1dGgvc2VydmVyL3V0aWxzL3Rva2VuLWVuZ2luZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xuand0LnZlcmlmeSA9IHJlcXVpcmUoJ2JsdWViaXJkJykucHJvbWlzaWZ5KGp3dC52ZXJpZnkpO1xuXG5jb25zdCBnZXREYXlzID0gKGRheXMgPSAxKSA9PlxuICBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSArIDYwICogNjAgKiAyNCAqIGRheXM7XG5leHBvcnQgZGVmYXVsdCAoeyBzZWNyZXQgfSA9IHt9KSA9PiB7XG4gIGNvbnN0IFNFQ1JFVCA9IHNlY3JldCB8fCBwcm9jZXNzLmVudi5BVVRIX1NFQ1JFVCB8fCAnYWJjJztcblxuICBjb25zdCBjcmVhdGVGcm9tVXNlciA9ICh7IGlkLCBvcmdJZCwgc2NvcGVzIH0sIHsgZGF5cyA9IDEgfSA9IHt9KSA9PlxuICAgIGp3dC5zaWduKHsgaWQsIG9yZ0lkLCBzY29wZXMsIGV4cDogZ2V0RGF5cyhkYXlzKSB9LCBTRUNSRVQpO1xuXG4gIGNvbnN0IGNyZWF0ZSA9IChkYXRhLCB7IGRheXMgPSA3IH0gPSB7fSkgPT4ge1xuICAgIGlmICghZGF0YS5leHApIHtcbiAgICAgIGRhdGEuZXhwID0gZ2V0RGF5cyhkYXlzKTtcbiAgICB9XG4gICAgcmV0dXJuIGp3dC5zaWduKGRhdGEsIFNFQ1JFVCk7XG4gIH07XG5cbiAgY29uc3QgdmVyaWZ5ID0gdG9rZW4gPT4gand0LnZlcmlmeSh0b2tlbiwgU0VDUkVUKTtcblxuICByZXR1cm4geyBjcmVhdGVGcm9tVXNlciwgY3JlYXRlLCB2ZXJpZnkgfTtcbn07XG4iXX0=
