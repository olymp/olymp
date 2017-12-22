var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

export default (function (data) {
  if (!data) return [];
  return [].concat(_toConsumableArray(data.keys())).map(function (x) {
    return {
      name: x,
      val: _typeof(data.get(x)) === 'object' ? JSON.stringify(data.get(x)) : '"' + data.get(x) + '"'
    };
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3B1Zy90by1wdWcvYXR0cnMuZXM2Il0sIm5hbWVzIjpbImRhdGEiLCJrZXlzIiwibWFwIiwibmFtZSIsIngiLCJ2YWwiLCJnZXQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsZ0JBQWUsZ0JBQVE7QUFDckIsTUFBSSxDQUFDQSxJQUFMLEVBQVcsT0FBTyxFQUFQO0FBQ1gsU0FBTyw2QkFBSUEsS0FBS0MsSUFBTCxFQUFKLEdBQWlCQyxHQUFqQixDQUFxQjtBQUFBLFdBQU07QUFDaENDLFlBQU1DLENBRDBCO0FBRWhDQyxXQUNFLFFBQU9MLEtBQUtNLEdBQUwsQ0FBU0YsQ0FBVCxDQUFQLE1BQXVCLFFBQXZCLEdBQ0lHLEtBQUtDLFNBQUwsQ0FBZVIsS0FBS00sR0FBTCxDQUFTRixDQUFULENBQWYsQ0FESixTQUVRSixLQUFLTSxHQUFMLENBQVNGLENBQVQsQ0FGUjtBQUg4QixLQUFOO0FBQUEsR0FBckIsQ0FBUDtBQU9ELENBVEQiLCJmaWxlIjoicGFja2FnZXMvc2xhdGUvcHVnL3RvLXB1Zy9hdHRycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGRhdGEgPT4ge1xuICBpZiAoIWRhdGEpIHJldHVybiBbXTtcbiAgcmV0dXJuIFsuLi5kYXRhLmtleXMoKV0ubWFwKHggPT4gKHtcbiAgICBuYW1lOiB4LFxuICAgIHZhbDpcbiAgICAgIHR5cGVvZiBkYXRhLmdldCh4KSA9PT0gJ29iamVjdCdcbiAgICAgICAgPyBKU09OLnN0cmluZ2lmeShkYXRhLmdldCh4KSlcbiAgICAgICAgOiBgXCIke2RhdGEuZ2V0KHgpfVwiYCxcbiAgfSkpO1xufTtcbiJdfQ==
