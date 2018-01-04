'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {
  add: addAll,
  remove: function remove() {
    return null;
  },
  blocks: blocks
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3JlZ2lzdHJ5LmVzNiJdLCJuYW1lcyI6WyJibG9ja3MiLCJhZGQiLCJibG9jayIsInR5cGUiLCJFcnJvciIsImFkZEFsbCIsImFyZ3MiLCJmb3JFYWNoIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFNBQVMsRUFBZjs7QUFFQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU0sUUFBUztBQUNuQixNQUFJLENBQUNDLE1BQU1DLElBQVgsRUFBaUI7QUFDZixVQUFNLElBQUlDLEtBQUosQ0FBVSxlQUFWLENBQU47QUFDRDtBQUNESixTQUFPRSxNQUFNQyxJQUFiLElBQXFCRCxLQUFyQjtBQUNELENBTEQ7O0FBT0EsSUFBTUcsU0FBUyxTQUFUQSxNQUFTO0FBQUEsb0NBQUlDLElBQUo7QUFBSUEsUUFBSjtBQUFBOztBQUFBLFNBQWFBLEtBQUtDLE9BQUwsQ0FBYU4sR0FBYixDQUFiO0FBQUEsQ0FBZjs7a0JBRWU7QUFDYkEsT0FBS0ksTUFEUTtBQUViRyxVQUFRO0FBQUEsV0FBTSxJQUFOO0FBQUEsR0FGSztBQUdiUjtBQUhhLEMiLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvcmVnaXN0cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBibG9ja3MgPSB7fTtcblxuY29uc3QgYWRkID0gYmxvY2sgPT4ge1xuICBpZiAoIWJsb2NrLnR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYmxvY2snKTtcbiAgfVxuICBibG9ja3NbYmxvY2sudHlwZV0gPSBibG9jaztcbn07XG5cbmNvbnN0IGFkZEFsbCA9ICguLi5hcmdzKSA9PiBhcmdzLmZvckVhY2goYWRkKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGQ6IGFkZEFsbCxcbiAgcmVtb3ZlOiAoKSA9PiBudWxsLFxuICBibG9ja3MsXG59O1xuIl19
