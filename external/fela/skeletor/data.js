'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.image = exports.text = exports.string = exports.color = exports.date = exports.id = undefined;

var _olympUtils = require('olymp-utils');

var id = exports.id = function id() {
  return Math.random().toString(36).substring(7);
};

var date = exports.date = function date() {
  return new Date();
};

var color = exports.color = function color() {
  return '#' + (Math.random() * 0xffffff << 0).toString(16);
};

var string = exports.string = function string() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return (0, _olympUtils.lorem)(length, 'words');
};

var text = exports.text = function text() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return (0, _olympUtils.lorem)(length);
};

var image = exports.image = function image() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 400;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  return {
    id: id(),
    width: width,
    height: height,
    caption: string(),
    source: string()
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvc2tlbGV0b3IvZGF0YS5lczYiXSwibmFtZXMiOlsiaWQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJkYXRlIiwiRGF0ZSIsImNvbG9yIiwic3RyaW5nIiwibGVuZ3RoIiwidGV4dCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJjYXB0aW9uIiwic291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsa0JBQUssU0FBTEEsRUFBSztBQUFBLFNBQ2hCQyxLQUFLQyxNQUFMLEdBQ0dDLFFBREgsQ0FDWSxFQURaLEVBRUdDLFNBRkgsQ0FFYSxDQUZiLENBRGdCO0FBQUEsQ0FBWDs7QUFLQSxJQUFNQyxzQkFBTyxTQUFQQSxJQUFPO0FBQUEsU0FBTSxJQUFJQyxJQUFKLEVBQU47QUFBQSxDQUFiOztBQUVBLElBQU1DLHdCQUFRLFNBQVJBLEtBQVE7QUFBQSxlQUFVLENBQUVOLEtBQUtDLE1BQUwsS0FBZ0IsUUFBakIsSUFBOEIsQ0FBL0IsRUFBa0NDLFFBQWxDLENBQTJDLEVBQTNDLENBQVY7QUFBQSxDQUFkOztBQUVBLElBQU1LLDBCQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUFDQyxNQUFELHVFQUFVLENBQVY7QUFBQSxTQUFnQix1QkFBTUEsTUFBTixFQUFjLE9BQWQsQ0FBaEI7QUFBQSxDQUFmOztBQUVBLElBQU1DLHNCQUFPLFNBQVBBLElBQU87QUFBQSxNQUFDRCxNQUFELHVFQUFVLENBQVY7QUFBQSxTQUFnQix1QkFBTUEsTUFBTixDQUFoQjtBQUFBLENBQWI7O0FBRUEsSUFBTUUsd0JBQVEsU0FBUkEsS0FBUTtBQUFBLE1BQUNDLEtBQUQsdUVBQVMsR0FBVDtBQUFBLE1BQWNDLE1BQWQsdUVBQXVCLEdBQXZCO0FBQUEsU0FBZ0M7QUFDbkRiLFFBQUlBLElBRCtDO0FBRW5EWSxnQkFGbUQ7QUFHbkRDLGtCQUhtRDtBQUluREMsYUFBU04sUUFKMEM7QUFLbkRPLFlBQVFQO0FBTDJDLEdBQWhDO0FBQUEsQ0FBZCIsImZpbGUiOiJleHRlcm5hbC9mZWxhL3NrZWxldG9yL2RhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb3JlbSB9IGZyb20gJ29seW1wLXV0aWxzJztcblxuZXhwb3J0IGNvbnN0IGlkID0gKCkgPT5cbiAgTWF0aC5yYW5kb20oKVxuICAgIC50b1N0cmluZygzNilcbiAgICAuc3Vic3RyaW5nKDcpO1xuXG5leHBvcnQgY29uc3QgZGF0ZSA9ICgpID0+IG5ldyBEYXRlKCk7XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9ICgpID0+IGAjJHsoKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZikgPDwgMCkudG9TdHJpbmcoMTYpfWA7XG5cbmV4cG9ydCBjb25zdCBzdHJpbmcgPSAobGVuZ3RoID0gMSkgPT4gbG9yZW0obGVuZ3RoLCAnd29yZHMnKTtcblxuZXhwb3J0IGNvbnN0IHRleHQgPSAobGVuZ3RoID0gMSkgPT4gbG9yZW0obGVuZ3RoKTtcblxuZXhwb3J0IGNvbnN0IGltYWdlID0gKHdpZHRoID0gNDAwLCBoZWlnaHQgPSAzMDApID0+ICh7XG4gIGlkOiBpZCgpLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBjYXB0aW9uOiBzdHJpbmcoKSxcbiAgc291cmNlOiBzdHJpbmcoKSxcbn0pO1xuIl19
