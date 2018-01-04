'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSkeletorComponent = exports.withSkeletor = undefined;

var _data = require('./data');

Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

var _withSkeletor = require('./with-skeletor');

Object.defineProperty(exports, 'withSkeletor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withSkeletor).default;
  }
});

var _createSkeletorComponent = require('./create-skeletor-component');

Object.defineProperty(exports, 'createSkeletorComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createSkeletorComponent).default;
  }
});

var _skeletor = require('./skeletor');

var _skeletor2 = _interopRequireDefault(_skeletor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _skeletor2.default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvc2tlbGV0b3IvaW5kZXguZXM2Il0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztpREFDU0EsTzs7Ozs7Ozs7OzREQUVQQSxPOzs7O0FBTkYiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9za2VsZXRvci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTa2VsZXRvciBmcm9tICcuL3NrZWxldG9yJztcblxuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b3I7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoU2tlbGV0b3IgfSBmcm9tICcuL3dpdGgtc2tlbGV0b3InO1xuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBjcmVhdGVTa2VsZXRvckNvbXBvbmVudCxcbn0gZnJvbSAnLi9jcmVhdGUtc2tlbGV0b3ItY29tcG9uZW50JztcbiJdfQ==
