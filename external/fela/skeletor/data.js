import { lorem } from 'olymp-utils';

export var id = function id() {
  return Math.random().toString(36).substring(7);
};

export var date = function date() {
  return new Date();
};

export var color = function color() {
  return '#' + (Math.random() * 0xffffff << 0).toString(16);
};

export var string = function string() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return lorem(length, 'words');
};

export var text = function text() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return lorem(length);
};

export var image = function image() {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvc2tlbGV0b3IvZGF0YS5lczYiXSwibmFtZXMiOlsibG9yZW0iLCJpZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImRhdGUiLCJEYXRlIiwiY29sb3IiLCJzdHJpbmciLCJsZW5ndGgiLCJ0ZXh0IiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImNhcHRpb24iLCJzb3VyY2UiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLEtBQVQsUUFBc0IsYUFBdEI7O0FBRUEsT0FBTyxJQUFNQyxLQUFLLFNBQUxBLEVBQUs7QUFBQSxTQUNoQkMsS0FBS0MsTUFBTCxHQUNHQyxRQURILENBQ1ksRUFEWixFQUVHQyxTQUZILENBRWEsQ0FGYixDQURnQjtBQUFBLENBQVg7O0FBS1AsT0FBTyxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxTQUFNLElBQUlDLElBQUosRUFBTjtBQUFBLENBQWI7O0FBRVAsT0FBTyxJQUFNQyxRQUFRLFNBQVJBLEtBQVE7QUFBQSxlQUFVLENBQUVOLEtBQUtDLE1BQUwsS0FBZ0IsUUFBakIsSUFBOEIsQ0FBL0IsRUFBa0NDLFFBQWxDLENBQTJDLEVBQTNDLENBQVY7QUFBQSxDQUFkOztBQUVQLE9BQU8sSUFBTUssU0FBUyxTQUFUQSxNQUFTO0FBQUEsTUFBQ0MsTUFBRCx1RUFBVSxDQUFWO0FBQUEsU0FBZ0JWLE1BQU1VLE1BQU4sRUFBYyxPQUFkLENBQWhCO0FBQUEsQ0FBZjs7QUFFUCxPQUFPLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUNELE1BQUQsdUVBQVUsQ0FBVjtBQUFBLFNBQWdCVixNQUFNVSxNQUFOLENBQWhCO0FBQUEsQ0FBYjs7QUFFUCxPQUFPLElBQU1FLFFBQVEsU0FBUkEsS0FBUTtBQUFBLE1BQUNDLEtBQUQsdUVBQVMsR0FBVDtBQUFBLE1BQWNDLE1BQWQsdUVBQXVCLEdBQXZCO0FBQUEsU0FBZ0M7QUFDbkRiLFFBQUlBLElBRCtDO0FBRW5EWSxnQkFGbUQ7QUFHbkRDLGtCQUhtRDtBQUluREMsYUFBU04sUUFKMEM7QUFLbkRPLFlBQVFQO0FBTDJDLEdBQWhDO0FBQUEsQ0FBZCIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL3NrZWxldG9yL2RhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb3JlbSB9IGZyb20gJ29seW1wLXV0aWxzJztcblxuZXhwb3J0IGNvbnN0IGlkID0gKCkgPT5cbiAgTWF0aC5yYW5kb20oKVxuICAgIC50b1N0cmluZygzNilcbiAgICAuc3Vic3RyaW5nKDcpO1xuXG5leHBvcnQgY29uc3QgZGF0ZSA9ICgpID0+IG5ldyBEYXRlKCk7XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9ICgpID0+IGAjJHsoKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZikgPDwgMCkudG9TdHJpbmcoMTYpfWA7XG5cbmV4cG9ydCBjb25zdCBzdHJpbmcgPSAobGVuZ3RoID0gMSkgPT4gbG9yZW0obGVuZ3RoLCAnd29yZHMnKTtcblxuZXhwb3J0IGNvbnN0IHRleHQgPSAobGVuZ3RoID0gMSkgPT4gbG9yZW0obGVuZ3RoKTtcblxuZXhwb3J0IGNvbnN0IGltYWdlID0gKHdpZHRoID0gNDAwLCBoZWlnaHQgPSAzMDApID0+ICh7XG4gIGlkOiBpZCgpLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBjYXB0aW9uOiBzdHJpbmcoKSxcbiAgc291cmNlOiBzdHJpbmcoKSxcbn0pO1xuIl19
