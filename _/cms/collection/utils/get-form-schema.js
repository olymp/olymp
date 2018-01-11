'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var excludedFields = ['id', 'createdBy', 'createdAt', 'updatedBy', 'updatedAt', 'updatedById', 'createdById'];

exports.default = function (fields) {
  var mappedFields = fields.reduce(function (result, f) {
    var field = _extends({}, f);

    // EXCLUDING
    if (excludedFields.includes(field.name) || field.specialFields.disabled) {
      return result;
    }

    // RELATION
    // todo => get-special-Fields
    if (field.name.endsWith('Id') || field.name.endsWith('Ids')) {
      if (field.name.endsWith('Id')) {
        field.specialFields.idField = fields.find(function (_ref) {
          var name = _ref.name;
          return name + 'Id' === field.name;
        });
      } else if (field.name.endsWith('Ids')) {
        field.specialFields.idField = fields.find(function (_ref2) {
          var name = _ref2.name;
          return name + 'Ids' === field.name;
        });
      }

      field.specialFields = _extends({}, field.specialFields, (0, _get3.default)(field, 'specialFields.idField.specialFields', {}));

      result.rest.splice(result.rest.findIndex(function (_ref3) {
        var name = _ref3.name;
        return name === (0, _get3.default)(field, 'specialFields.idField.name');
      }), 1);
    }

    // RANGE
    // todo => get-special-Fields
    if (field.specialFields.end) {
      return result;
    }
    if (field.specialFields.start) {
      var end = fields.find(function (x) {
        return x.specialFields.end;
      });
      field.specialFields.endField = end;
    }

    if (field.type.name === 'Image') {
      result.images.push(field);
    } else if (field.type.name === 'Blocks') {
      result.blocks.push(field);
    } else {
      result.rest.push(field);
    }
    return result;
  }, { images: [], rest: [], blocks: [] });
  return [].concat(_toConsumableArray(mappedFields.images), _toConsumableArray(mappedFields.blocks), _toConsumableArray(mappedFields.rest));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3V0aWxzL2dldC1mb3JtLXNjaGVtYS5lczYiXSwibmFtZXMiOlsiZXhjbHVkZWRGaWVsZHMiLCJtYXBwZWRGaWVsZHMiLCJmaWVsZHMiLCJyZWR1Y2UiLCJyZXN1bHQiLCJmIiwiZmllbGQiLCJpbmNsdWRlcyIsIm5hbWUiLCJzcGVjaWFsRmllbGRzIiwiZGlzYWJsZWQiLCJlbmRzV2l0aCIsImlkRmllbGQiLCJmaW5kIiwicmVzdCIsInNwbGljZSIsImZpbmRJbmRleCIsImVuZCIsInN0YXJ0IiwieCIsImVuZEZpZWxkIiwidHlwZSIsImltYWdlcyIsInB1c2giLCJibG9ja3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsQ0FDckIsSUFEcUIsRUFFckIsV0FGcUIsRUFHckIsV0FIcUIsRUFJckIsV0FKcUIsRUFLckIsV0FMcUIsRUFNckIsYUFOcUIsRUFPckIsYUFQcUIsQ0FBdkI7O2tCQVVlLGtCQUFVO0FBQ3ZCLE1BQU1DLGVBQWVDLE9BQU9DLE1BQVAsQ0FDbkIsVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDYixRQUFNQyxxQkFBYUQsQ0FBYixDQUFOOztBQUVBO0FBQ0EsUUFBSUwsZUFBZU8sUUFBZixDQUF3QkQsTUFBTUUsSUFBOUIsS0FBdUNGLE1BQU1HLGFBQU4sQ0FBb0JDLFFBQS9ELEVBQXlFO0FBQ3ZFLGFBQU9OLE1BQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0EsUUFBSUUsTUFBTUUsSUFBTixDQUFXRyxRQUFYLENBQW9CLElBQXBCLEtBQTZCTCxNQUFNRSxJQUFOLENBQVdHLFFBQVgsQ0FBb0IsS0FBcEIsQ0FBakMsRUFBNkQ7QUFDM0QsVUFBSUwsTUFBTUUsSUFBTixDQUFXRyxRQUFYLENBQW9CLElBQXBCLENBQUosRUFBK0I7QUFDN0JMLGNBQU1HLGFBQU4sQ0FBb0JHLE9BQXBCLEdBQThCVixPQUFPVyxJQUFQLENBQzVCO0FBQUEsY0FBR0wsSUFBSCxRQUFHQSxJQUFIO0FBQUEsaUJBQWlCQSxJQUFILFlBQWdCRixNQUFNRSxJQUFwQztBQUFBLFNBRDRCLENBQTlCO0FBR0QsT0FKRCxNQUlPLElBQUlGLE1BQU1FLElBQU4sQ0FBV0csUUFBWCxDQUFvQixLQUFwQixDQUFKLEVBQWdDO0FBQ3JDTCxjQUFNRyxhQUFOLENBQW9CRyxPQUFwQixHQUE4QlYsT0FBT1csSUFBUCxDQUM1QjtBQUFBLGNBQUdMLElBQUgsU0FBR0EsSUFBSDtBQUFBLGlCQUFpQkEsSUFBSCxhQUFpQkYsTUFBTUUsSUFBckM7QUFBQSxTQUQ0QixDQUE5QjtBQUdEOztBQUVERixZQUFNRyxhQUFOLGdCQUNLSCxNQUFNRyxhQURYLEVBRUssbUJBQUlILEtBQUosRUFBVyxxQ0FBWCxFQUFrRCxFQUFsRCxDQUZMOztBQUtBRixhQUFPVSxJQUFQLENBQVlDLE1BQVosQ0FDRVgsT0FBT1UsSUFBUCxDQUFZRSxTQUFaLENBQ0U7QUFBQSxZQUFHUixJQUFILFNBQUdBLElBQUg7QUFBQSxlQUFjQSxTQUFTLG1CQUFJRixLQUFKLEVBQVcsNEJBQVgsQ0FBdkI7QUFBQSxPQURGLENBREYsRUFJRSxDQUpGO0FBTUQ7O0FBRUQ7QUFDQTtBQUNBLFFBQUlBLE1BQU1HLGFBQU4sQ0FBb0JRLEdBQXhCLEVBQTZCO0FBQzNCLGFBQU9iLE1BQVA7QUFDRDtBQUNELFFBQUlFLE1BQU1HLGFBQU4sQ0FBb0JTLEtBQXhCLEVBQStCO0FBQzdCLFVBQU1ELE1BQU1mLE9BQU9XLElBQVAsQ0FBWTtBQUFBLGVBQUtNLEVBQUVWLGFBQUYsQ0FBZ0JRLEdBQXJCO0FBQUEsT0FBWixDQUFaO0FBQ0FYLFlBQU1HLGFBQU4sQ0FBb0JXLFFBQXBCLEdBQStCSCxHQUEvQjtBQUNEOztBQUVELFFBQUlYLE1BQU1lLElBQU4sQ0FBV2IsSUFBWCxLQUFvQixPQUF4QixFQUFpQztBQUMvQkosYUFBT2tCLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQmpCLEtBQW5CO0FBQ0QsS0FGRCxNQUVPLElBQUlBLE1BQU1lLElBQU4sQ0FBV2IsSUFBWCxLQUFvQixRQUF4QixFQUFrQztBQUN2Q0osYUFBT29CLE1BQVAsQ0FBY0QsSUFBZCxDQUFtQmpCLEtBQW5CO0FBQ0QsS0FGTSxNQUVBO0FBQ0xGLGFBQU9VLElBQVAsQ0FBWVMsSUFBWixDQUFpQmpCLEtBQWpCO0FBQ0Q7QUFDRCxXQUFPRixNQUFQO0FBQ0QsR0FyRGtCLEVBc0RuQixFQUFFa0IsUUFBUSxFQUFWLEVBQWNSLE1BQU0sRUFBcEIsRUFBd0JVLFFBQVEsRUFBaEMsRUF0RG1CLENBQXJCO0FBd0RBLHNDQUFXdkIsYUFBYXFCLE1BQXhCLHNCQUFtQ3JCLGFBQWF1QixNQUFoRCxzQkFBMkR2QixhQUFhYSxJQUF4RTtBQUNELEMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vdXRpbHMvZ2V0LWZvcm0tc2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgZXhjbHVkZWRGaWVsZHMgPSBbXG4gICdpZCcsXG4gICdjcmVhdGVkQnknLFxuICAnY3JlYXRlZEF0JyxcbiAgJ3VwZGF0ZWRCeScsXG4gICd1cGRhdGVkQXQnLFxuICAndXBkYXRlZEJ5SWQnLFxuICAnY3JlYXRlZEJ5SWQnLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZmllbGRzID0+IHtcbiAgY29uc3QgbWFwcGVkRmllbGRzID0gZmllbGRzLnJlZHVjZShcbiAgICAocmVzdWx0LCBmKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZCA9IHsgLi4uZiB9O1xuXG4gICAgICAvLyBFWENMVURJTkdcbiAgICAgIGlmIChleGNsdWRlZEZpZWxkcy5pbmNsdWRlcyhmaWVsZC5uYW1lKSB8fCBmaWVsZC5zcGVjaWFsRmllbGRzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIFJFTEFUSU9OXG4gICAgICAvLyB0b2RvID0+IGdldC1zcGVjaWFsLUZpZWxkc1xuICAgICAgaWYgKGZpZWxkLm5hbWUuZW5kc1dpdGgoJ0lkJykgfHwgZmllbGQubmFtZS5lbmRzV2l0aCgnSWRzJykpIHtcbiAgICAgICAgaWYgKGZpZWxkLm5hbWUuZW5kc1dpdGgoJ0lkJykpIHtcbiAgICAgICAgICBmaWVsZC5zcGVjaWFsRmllbGRzLmlkRmllbGQgPSBmaWVsZHMuZmluZChcbiAgICAgICAgICAgICh7IG5hbWUgfSkgPT4gYCR7bmFtZX1JZGAgPT09IGZpZWxkLm5hbWUsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5uYW1lLmVuZHNXaXRoKCdJZHMnKSkge1xuICAgICAgICAgIGZpZWxkLnNwZWNpYWxGaWVsZHMuaWRGaWVsZCA9IGZpZWxkcy5maW5kKFxuICAgICAgICAgICAgKHsgbmFtZSB9KSA9PiBgJHtuYW1lfUlkc2AgPT09IGZpZWxkLm5hbWUsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkLnNwZWNpYWxGaWVsZHMgPSB7XG4gICAgICAgICAgLi4uZmllbGQuc3BlY2lhbEZpZWxkcyxcbiAgICAgICAgICAuLi5nZXQoZmllbGQsICdzcGVjaWFsRmllbGRzLmlkRmllbGQuc3BlY2lhbEZpZWxkcycsIHt9KSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXN1bHQucmVzdC5zcGxpY2UoXG4gICAgICAgICAgcmVzdWx0LnJlc3QuZmluZEluZGV4KFxuICAgICAgICAgICAgKHsgbmFtZSB9KSA9PiBuYW1lID09PSBnZXQoZmllbGQsICdzcGVjaWFsRmllbGRzLmlkRmllbGQubmFtZScpLFxuICAgICAgICAgICksXG4gICAgICAgICAgMSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gUkFOR0VcbiAgICAgIC8vIHRvZG8gPT4gZ2V0LXNwZWNpYWwtRmllbGRzXG4gICAgICBpZiAoZmllbGQuc3BlY2lhbEZpZWxkcy5lbmQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGlmIChmaWVsZC5zcGVjaWFsRmllbGRzLnN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IGZpZWxkcy5maW5kKHggPT4geC5zcGVjaWFsRmllbGRzLmVuZCk7XG4gICAgICAgIGZpZWxkLnNwZWNpYWxGaWVsZHMuZW5kRmllbGQgPSBlbmQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZC50eXBlLm5hbWUgPT09ICdJbWFnZScpIHtcbiAgICAgICAgcmVzdWx0LmltYWdlcy5wdXNoKGZpZWxkKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZS5uYW1lID09PSAnQmxvY2tzJykge1xuICAgICAgICByZXN1bHQuYmxvY2tzLnB1c2goZmllbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnJlc3QucHVzaChmaWVsZCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgeyBpbWFnZXM6IFtdLCByZXN0OiBbXSwgYmxvY2tzOiBbXSB9LFxuICApO1xuICByZXR1cm4gWy4uLm1hcHBlZEZpZWxkcy5pbWFnZXMsIC4uLm1hcHBlZEZpZWxkcy5ibG9ja3MsIC4uLm1hcHBlZEZpZWxkcy5yZXN0XTtcbn07XG4iXX0=
