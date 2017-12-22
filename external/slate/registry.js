var blocks = {};

var add = function add(block) {
  if (!block.type) {
    throw new Error('Invalid block');
  }
  blocks[block.type] = block;
};

var addAll = function addAll() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.forEach(add);
};

export default {
  add: addAll,
  remove: function remove() {
    return null;
  },
  blocks: blocks
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3JlZ2lzdHJ5LmVzNiJdLCJuYW1lcyI6WyJibG9ja3MiLCJhZGQiLCJibG9jayIsInR5cGUiLCJFcnJvciIsImFkZEFsbCIsImFyZ3MiLCJmb3JFYWNoIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxTQUFTLEVBQWY7O0FBRUEsSUFBTUMsTUFBTSxTQUFOQSxHQUFNLFFBQVM7QUFDbkIsTUFBSSxDQUFDQyxNQUFNQyxJQUFYLEVBQWlCO0FBQ2YsVUFBTSxJQUFJQyxLQUFKLENBQVUsZUFBVixDQUFOO0FBQ0Q7QUFDREosU0FBT0UsTUFBTUMsSUFBYixJQUFxQkQsS0FBckI7QUFDRCxDQUxEOztBQU9BLElBQU1HLFNBQVMsU0FBVEEsTUFBUztBQUFBLG9DQUFJQyxJQUFKO0FBQUlBLFFBQUo7QUFBQTs7QUFBQSxTQUFhQSxLQUFLQyxPQUFMLENBQWFOLEdBQWIsQ0FBYjtBQUFBLENBQWY7O0FBRUEsZUFBZTtBQUNiQSxPQUFLSSxNQURRO0FBRWJHLFVBQVE7QUFBQSxXQUFNLElBQU47QUFBQSxHQUZLO0FBR2JSO0FBSGEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9zbGF0ZS9yZWdpc3RyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJsb2NrcyA9IHt9O1xuXG5jb25zdCBhZGQgPSBibG9jayA9PiB7XG4gIGlmICghYmxvY2sudHlwZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBibG9jaycpO1xuICB9XG4gIGJsb2Nrc1tibG9jay50eXBlXSA9IGJsb2NrO1xufTtcblxuY29uc3QgYWRkQWxsID0gKC4uLmFyZ3MpID0+IGFyZ3MuZm9yRWFjaChhZGQpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZDogYWRkQWxsLFxuICByZW1vdmU6ICgpID0+IG51bGwsXG4gIGJsb2Nrcyxcbn07XG4iXX0=
