'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (data) {
  if (!data) return [];
  return [].concat(_toConsumableArray(data.keys())).map(function (x) {
    return {
      name: x,
      val: _typeof(data.get(x)) === 'object' ? JSON.stringify(data.get(x)) : '"' + data.get(x) + '"'
    };
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3B1Zy90by1wdWcvYXR0cnMuZXM2Il0sIm5hbWVzIjpbImRhdGEiLCJrZXlzIiwibWFwIiwibmFtZSIsIngiLCJ2YWwiLCJnZXQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUFlLGdCQUFRO0FBQ3JCLE1BQUksQ0FBQ0EsSUFBTCxFQUFXLE9BQU8sRUFBUDtBQUNYLFNBQU8sNkJBQUlBLEtBQUtDLElBQUwsRUFBSixHQUFpQkMsR0FBakIsQ0FBcUI7QUFBQSxXQUFNO0FBQ2hDQyxZQUFNQyxDQUQwQjtBQUVoQ0MsV0FDRSxRQUFPTCxLQUFLTSxHQUFMLENBQVNGLENBQVQsQ0FBUCxNQUF1QixRQUF2QixHQUNJRyxLQUFLQyxTQUFMLENBQWVSLEtBQUtNLEdBQUwsQ0FBU0YsQ0FBVCxDQUFmLENBREosU0FFUUosS0FBS00sR0FBTCxDQUFTRixDQUFULENBRlI7QUFIOEIsS0FBTjtBQUFBLEdBQXJCLENBQVA7QUFPRCxDIiwiZmlsZSI6ImV4dGVybmFsL3NsYXRlL3B1Zy90by1wdWcvYXR0cnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBkYXRhID0+IHtcbiAgaWYgKCFkYXRhKSByZXR1cm4gW107XG4gIHJldHVybiBbLi4uZGF0YS5rZXlzKCldLm1hcCh4ID0+ICh7XG4gICAgbmFtZTogeCxcbiAgICB2YWw6XG4gICAgICB0eXBlb2YgZGF0YS5nZXQoeCkgPT09ICdvYmplY3QnXG4gICAgICAgID8gSlNPTi5zdHJpbmdpZnkoZGF0YS5nZXQoeCkpXG4gICAgICAgIDogYFwiJHtkYXRhLmdldCh4KX1cImAsXG4gIH0pKTtcbn07XG4iXX0=
