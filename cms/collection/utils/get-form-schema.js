import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var excludedFields = ['id', 'createdBy', 'createdAt', 'updatedBy', 'updatedAt', 'updatedById', 'createdById'];

export default (function (fields) {
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

      field.specialFields = _extends({}, field.specialFields, _get(field, 'specialFields.idField.specialFields', {}));

      result.rest.splice(result.rest.findIndex(function (_ref3) {
        var name = _ref3.name;
        return name === _get(field, 'specialFields.idField.name');
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
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vdXRpbHMvZ2V0LWZvcm0tc2NoZW1hLmVzNiJdLCJuYW1lcyI6WyJleGNsdWRlZEZpZWxkcyIsIm1hcHBlZEZpZWxkcyIsImZpZWxkcyIsInJlZHVjZSIsInJlc3VsdCIsImYiLCJmaWVsZCIsImluY2x1ZGVzIiwibmFtZSIsInNwZWNpYWxGaWVsZHMiLCJkaXNhYmxlZCIsImVuZHNXaXRoIiwiaWRGaWVsZCIsImZpbmQiLCJyZXN0Iiwic3BsaWNlIiwiZmluZEluZGV4IiwiZW5kIiwic3RhcnQiLCJ4IiwiZW5kRmllbGQiLCJ0eXBlIiwiaW1hZ2VzIiwicHVzaCIsImJsb2NrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLENBQ3JCLElBRHFCLEVBRXJCLFdBRnFCLEVBR3JCLFdBSHFCLEVBSXJCLFdBSnFCLEVBS3JCLFdBTHFCLEVBTXJCLGFBTnFCLEVBT3JCLGFBUHFCLENBQXZCOztBQVVBLGdCQUFlLGtCQUFVO0FBQ3ZCLE1BQU1DLGVBQWVDLE9BQU9DLE1BQVAsQ0FDbkIsVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDYixRQUFNQyxxQkFBYUQsQ0FBYixDQUFOOztBQUVBO0FBQ0EsUUFBSUwsZUFBZU8sUUFBZixDQUF3QkQsTUFBTUUsSUFBOUIsS0FBdUNGLE1BQU1HLGFBQU4sQ0FBb0JDLFFBQS9ELEVBQXlFO0FBQ3ZFLGFBQU9OLE1BQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0EsUUFBSUUsTUFBTUUsSUFBTixDQUFXRyxRQUFYLENBQW9CLElBQXBCLEtBQTZCTCxNQUFNRSxJQUFOLENBQVdHLFFBQVgsQ0FBb0IsS0FBcEIsQ0FBakMsRUFBNkQ7QUFDM0QsVUFBSUwsTUFBTUUsSUFBTixDQUFXRyxRQUFYLENBQW9CLElBQXBCLENBQUosRUFBK0I7QUFDN0JMLGNBQU1HLGFBQU4sQ0FBb0JHLE9BQXBCLEdBQThCVixPQUFPVyxJQUFQLENBQzVCO0FBQUEsY0FBR0wsSUFBSCxRQUFHQSxJQUFIO0FBQUEsaUJBQWlCQSxJQUFILFlBQWdCRixNQUFNRSxJQUFwQztBQUFBLFNBRDRCLENBQTlCO0FBR0QsT0FKRCxNQUlPLElBQUlGLE1BQU1FLElBQU4sQ0FBV0csUUFBWCxDQUFvQixLQUFwQixDQUFKLEVBQWdDO0FBQ3JDTCxjQUFNRyxhQUFOLENBQW9CRyxPQUFwQixHQUE4QlYsT0FBT1csSUFBUCxDQUM1QjtBQUFBLGNBQUdMLElBQUgsU0FBR0EsSUFBSDtBQUFBLGlCQUFpQkEsSUFBSCxhQUFpQkYsTUFBTUUsSUFBckM7QUFBQSxTQUQ0QixDQUE5QjtBQUdEOztBQUVERixZQUFNRyxhQUFOLGdCQUNLSCxNQUFNRyxhQURYLEVBRUssS0FBSUgsS0FBSixFQUFXLHFDQUFYLEVBQWtELEVBQWxELENBRkw7O0FBS0FGLGFBQU9VLElBQVAsQ0FBWUMsTUFBWixDQUNFWCxPQUFPVSxJQUFQLENBQVlFLFNBQVosQ0FDRTtBQUFBLFlBQUdSLElBQUgsU0FBR0EsSUFBSDtBQUFBLGVBQWNBLFNBQVMsS0FBSUYsS0FBSixFQUFXLDRCQUFYLENBQXZCO0FBQUEsT0FERixDQURGLEVBSUUsQ0FKRjtBQU1EOztBQUVEO0FBQ0E7QUFDQSxRQUFJQSxNQUFNRyxhQUFOLENBQW9CUSxHQUF4QixFQUE2QjtBQUMzQixhQUFPYixNQUFQO0FBQ0Q7QUFDRCxRQUFJRSxNQUFNRyxhQUFOLENBQW9CUyxLQUF4QixFQUErQjtBQUM3QixVQUFNRCxNQUFNZixPQUFPVyxJQUFQLENBQVk7QUFBQSxlQUFLTSxFQUFFVixhQUFGLENBQWdCUSxHQUFyQjtBQUFBLE9BQVosQ0FBWjtBQUNBWCxZQUFNRyxhQUFOLENBQW9CVyxRQUFwQixHQUErQkgsR0FBL0I7QUFDRDs7QUFFRCxRQUFJWCxNQUFNZSxJQUFOLENBQVdiLElBQVgsS0FBb0IsT0FBeEIsRUFBaUM7QUFDL0JKLGFBQU9rQixNQUFQLENBQWNDLElBQWQsQ0FBbUJqQixLQUFuQjtBQUNELEtBRkQsTUFFTyxJQUFJQSxNQUFNZSxJQUFOLENBQVdiLElBQVgsS0FBb0IsUUFBeEIsRUFBa0M7QUFDdkNKLGFBQU9vQixNQUFQLENBQWNELElBQWQsQ0FBbUJqQixLQUFuQjtBQUNELEtBRk0sTUFFQTtBQUNMRixhQUFPVSxJQUFQLENBQVlTLElBQVosQ0FBaUJqQixLQUFqQjtBQUNEO0FBQ0QsV0FBT0YsTUFBUDtBQUNELEdBckRrQixFQXNEbkIsRUFBRWtCLFFBQVEsRUFBVixFQUFjUixNQUFNLEVBQXBCLEVBQXdCVSxRQUFRLEVBQWhDLEVBdERtQixDQUFyQjtBQXdEQSxzQ0FBV3ZCLGFBQWFxQixNQUF4QixzQkFBbUNyQixhQUFhdUIsTUFBaEQsc0JBQTJEdkIsYUFBYWEsSUFBeEU7QUFDRCxDQTFERCIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL3V0aWxzL2dldC1mb3JtLXNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IGV4Y2x1ZGVkRmllbGRzID0gW1xuICAnaWQnLFxuICAnY3JlYXRlZEJ5JyxcbiAgJ2NyZWF0ZWRBdCcsXG4gICd1cGRhdGVkQnknLFxuICAndXBkYXRlZEF0JyxcbiAgJ3VwZGF0ZWRCeUlkJyxcbiAgJ2NyZWF0ZWRCeUlkJyxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZpZWxkcyA9PiB7XG4gIGNvbnN0IG1hcHBlZEZpZWxkcyA9IGZpZWxkcy5yZWR1Y2UoXG4gICAgKHJlc3VsdCwgZikgPT4ge1xuICAgICAgY29uc3QgZmllbGQgPSB7IC4uLmYgfTtcblxuICAgICAgLy8gRVhDTFVESU5HXG4gICAgICBpZiAoZXhjbHVkZWRGaWVsZHMuaW5jbHVkZXMoZmllbGQubmFtZSkgfHwgZmllbGQuc3BlY2lhbEZpZWxkcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICAvLyBSRUxBVElPTlxuICAgICAgLy8gdG9kbyA9PiBnZXQtc3BlY2lhbC1GaWVsZHNcbiAgICAgIGlmIChmaWVsZC5uYW1lLmVuZHNXaXRoKCdJZCcpIHx8IGZpZWxkLm5hbWUuZW5kc1dpdGgoJ0lkcycpKSB7XG4gICAgICAgIGlmIChmaWVsZC5uYW1lLmVuZHNXaXRoKCdJZCcpKSB7XG4gICAgICAgICAgZmllbGQuc3BlY2lhbEZpZWxkcy5pZEZpZWxkID0gZmllbGRzLmZpbmQoXG4gICAgICAgICAgICAoeyBuYW1lIH0pID0+IGAke25hbWV9SWRgID09PSBmaWVsZC5uYW1lLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQubmFtZS5lbmRzV2l0aCgnSWRzJykpIHtcbiAgICAgICAgICBmaWVsZC5zcGVjaWFsRmllbGRzLmlkRmllbGQgPSBmaWVsZHMuZmluZChcbiAgICAgICAgICAgICh7IG5hbWUgfSkgPT4gYCR7bmFtZX1JZHNgID09PSBmaWVsZC5uYW1lLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZC5zcGVjaWFsRmllbGRzID0ge1xuICAgICAgICAgIC4uLmZpZWxkLnNwZWNpYWxGaWVsZHMsXG4gICAgICAgICAgLi4uZ2V0KGZpZWxkLCAnc3BlY2lhbEZpZWxkcy5pZEZpZWxkLnNwZWNpYWxGaWVsZHMnLCB7fSksXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVzdWx0LnJlc3Quc3BsaWNlKFxuICAgICAgICAgIHJlc3VsdC5yZXN0LmZpbmRJbmRleChcbiAgICAgICAgICAgICh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gZ2V0KGZpZWxkLCAnc3BlY2lhbEZpZWxkcy5pZEZpZWxkLm5hbWUnKSxcbiAgICAgICAgICApLFxuICAgICAgICAgIDEsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJBTkdFXG4gICAgICAvLyB0b2RvID0+IGdldC1zcGVjaWFsLUZpZWxkc1xuICAgICAgaWYgKGZpZWxkLnNwZWNpYWxGaWVsZHMuZW5kKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBpZiAoZmllbGQuc3BlY2lhbEZpZWxkcy5zdGFydCkge1xuICAgICAgICBjb25zdCBlbmQgPSBmaWVsZHMuZmluZCh4ID0+IHguc3BlY2lhbEZpZWxkcy5lbmQpO1xuICAgICAgICBmaWVsZC5zcGVjaWFsRmllbGRzLmVuZEZpZWxkID0gZW5kO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmllbGQudHlwZS5uYW1lID09PSAnSW1hZ2UnKSB7XG4gICAgICAgIHJlc3VsdC5pbWFnZXMucHVzaChmaWVsZCk7XG4gICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUubmFtZSA9PT0gJ0Jsb2NrcycpIHtcbiAgICAgICAgcmVzdWx0LmJsb2Nrcy5wdXNoKGZpZWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5yZXN0LnB1c2goZmllbGQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIHsgaW1hZ2VzOiBbXSwgcmVzdDogW10sIGJsb2NrczogW10gfSxcbiAgKTtcbiAgcmV0dXJuIFsuLi5tYXBwZWRGaWVsZHMuaW1hZ2VzLCAuLi5tYXBwZWRGaWVsZHMuYmxvY2tzLCAuLi5tYXBwZWRGaWVsZHMucmVzdF07XG59O1xuIl19
