'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (field) {
  var type = field.type.kind === 'NON_NULL' ? field.type.ofType : field.type;
  var rules = [];
  var required = field.type.kind === 'NON_NULL' || (0, _get3.default)(field, 'specialFields.required');
  var label = (0, _get3.default)(field, 'specialField.label');

  if (field.name === 'name' && required) {
    rules.push({ required: required, message: '\'' + label + '\' muss angegeben werden!' });
  } else if (type.name === 'Email') {
    rules.push({
      required: required,
      type: 'email',
      message: 'Keine gültige E-Mail Adresse!'
    });
  } else if (type.name === 'Website') {
    rules.push({ required: required, type: 'url', message: 'Keine gültige Website!' });
  } else if (type.name !== 'Boolean' && required) {
    rules.push({ required: required, message: '\'' + label + '\' muss angegeben werden!' });
  }

  return rules;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3V0aWxzL2dldC12YWxpZGF0aW9uLXJ1bGVzLmVzNiJdLCJuYW1lcyI6WyJ0eXBlIiwiZmllbGQiLCJraW5kIiwib2ZUeXBlIiwicnVsZXMiLCJyZXF1aXJlZCIsImxhYmVsIiwibmFtZSIsInB1c2giLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7a0JBRWUsaUJBQVM7QUFDdEIsTUFBTUEsT0FBT0MsTUFBTUQsSUFBTixDQUFXRSxJQUFYLEtBQW9CLFVBQXBCLEdBQWlDRCxNQUFNRCxJQUFOLENBQVdHLE1BQTVDLEdBQXFERixNQUFNRCxJQUF4RTtBQUNBLE1BQU1JLFFBQVEsRUFBZDtBQUNBLE1BQU1DLFdBQ0pKLE1BQU1ELElBQU4sQ0FBV0UsSUFBWCxLQUFvQixVQUFwQixJQUFrQyxtQkFBSUQsS0FBSixFQUFXLHdCQUFYLENBRHBDO0FBRUEsTUFBTUssUUFBUSxtQkFBSUwsS0FBSixFQUFXLG9CQUFYLENBQWQ7O0FBRUEsTUFBSUEsTUFBTU0sSUFBTixLQUFlLE1BQWYsSUFBeUJGLFFBQTdCLEVBQXVDO0FBQ3JDRCxVQUFNSSxJQUFOLENBQVcsRUFBRUgsa0JBQUYsRUFBWUksZ0JBQWFILEtBQWIsOEJBQVosRUFBWDtBQUNELEdBRkQsTUFFTyxJQUFJTixLQUFLTyxJQUFMLEtBQWMsT0FBbEIsRUFBMkI7QUFDaENILFVBQU1JLElBQU4sQ0FBVztBQUNUSCx3QkFEUztBQUVUTCxZQUFNLE9BRkc7QUFHVFMsZUFBUztBQUhBLEtBQVg7QUFLRCxHQU5NLE1BTUEsSUFBSVQsS0FBS08sSUFBTCxLQUFjLFNBQWxCLEVBQTZCO0FBQ2xDSCxVQUFNSSxJQUFOLENBQVcsRUFBRUgsa0JBQUYsRUFBWUwsTUFBTSxLQUFsQixFQUF5QlMsU0FBUyx3QkFBbEMsRUFBWDtBQUNELEdBRk0sTUFFQSxJQUFJVCxLQUFLTyxJQUFMLEtBQWMsU0FBZCxJQUEyQkYsUUFBL0IsRUFBeUM7QUFDOUNELFVBQU1JLElBQU4sQ0FBVyxFQUFFSCxrQkFBRixFQUFZSSxnQkFBYUgsS0FBYiw4QkFBWixFQUFYO0FBQ0Q7O0FBRUQsU0FBT0YsS0FBUDtBQUNELEMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vdXRpbHMvZ2V0LXZhbGlkYXRpb24tcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmaWVsZCA9PiB7XG4gIGNvbnN0IHR5cGUgPSBmaWVsZC50eXBlLmtpbmQgPT09ICdOT05fTlVMTCcgPyBmaWVsZC50eXBlLm9mVHlwZSA6IGZpZWxkLnR5cGU7XG4gIGNvbnN0IHJ1bGVzID0gW107XG4gIGNvbnN0IHJlcXVpcmVkID1cbiAgICBmaWVsZC50eXBlLmtpbmQgPT09ICdOT05fTlVMTCcgfHwgZ2V0KGZpZWxkLCAnc3BlY2lhbEZpZWxkcy5yZXF1aXJlZCcpO1xuICBjb25zdCBsYWJlbCA9IGdldChmaWVsZCwgJ3NwZWNpYWxGaWVsZC5sYWJlbCcpO1xuXG4gIGlmIChmaWVsZC5uYW1lID09PSAnbmFtZScgJiYgcmVxdWlyZWQpIHtcbiAgICBydWxlcy5wdXNoKHsgcmVxdWlyZWQsIG1lc3NhZ2U6IGAnJHtsYWJlbH0nIG11c3MgYW5nZWdlYmVuIHdlcmRlbiFgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGUubmFtZSA9PT0gJ0VtYWlsJykge1xuICAgIHJ1bGVzLnB1c2goe1xuICAgICAgcmVxdWlyZWQsXG4gICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgbWVzc2FnZTogJ0tlaW5lIGfDvGx0aWdlIEUtTWFpbCBBZHJlc3NlIScsXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZS5uYW1lID09PSAnV2Vic2l0ZScpIHtcbiAgICBydWxlcy5wdXNoKHsgcmVxdWlyZWQsIHR5cGU6ICd1cmwnLCBtZXNzYWdlOiAnS2VpbmUgZ8O8bHRpZ2UgV2Vic2l0ZSEnIH0pO1xuICB9IGVsc2UgaWYgKHR5cGUubmFtZSAhPT0gJ0Jvb2xlYW4nICYmIHJlcXVpcmVkKSB7XG4gICAgcnVsZXMucHVzaCh7IHJlcXVpcmVkLCBtZXNzYWdlOiBgJyR7bGFiZWx9JyBtdXNzIGFuZ2VnZWJlbiB3ZXJkZW4hYCB9KTtcbiAgfVxuXG4gIHJldHVybiBydWxlcztcbn07XG4iXX0=
