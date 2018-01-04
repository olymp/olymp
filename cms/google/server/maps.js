'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _maps = require('@google/maps');

var _maps2 = _interopRequireDefault(_maps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertGeocode = function convertGeocode(result) {
  var newResult = {};
  (result.address_components || []).forEach(function (component) {
    component.types.forEach(function (type) {
      var newType = type.split('_').map(function (frag, i) {
        return i > 0 ? '' + frag[0].toUpperCase() + frag.substr(1) : frag;
      }) // eslint-disable-line
      .join('');
      newResult[newType] = component.long_name;
      newResult[newType + 'Short'] = component.short_name;
    });
  });
  newResult.formattedAddress = result.formatted_address;
  if (result.geometry) {
    if (result.geometry.location) {
      newResult.lat = result.geometry.location.lat;
      newResult.lng = result.geometry.location.lng;
    }
    newResult.locationType = result.geometry.location_type;
  }
  newResult.partialMatch = result.partial_match;
  newResult.id = result.place_id;
  newResult.types = result.types;
  return newResult;
};

exports.default = function (key) {
  var googleMapsClient = _maps2.default.createClient({
    key: key,
    Promise: Promise
  });
  return {
    placeById: function placeById(id) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$raw = _ref.raw,
          raw = _ref$raw === undefined ? false : _ref$raw;

      return new Promise(function (yay, nay) {
        googleMapsClient.place({ placeid: id }, function (err, result) {
          if (err) {
            nay(err.json.error_message);
          } else if (raw) {
            yay(result.json.result);
          } else {
            yay(result.json.result ? convertGeocode(result.json.result) : null);
          }
        });
      });
    },
    geocode: function geocode(payload) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$raw = _ref2.raw,
          raw = _ref2$raw === undefined ? false : _ref2$raw;

      return new Promise(function (yay, nay) {
        googleMapsClient.geocode(payload, function (err, result) {
          if (err) {
            nay(err.json.error_message);
          } else if (raw) {
            yay(result.json.results);
          } else {
            yay(result.json.results.map(convertGeocode));
          }
        });
      });
    },
    placesAutoComplete: function placesAutoComplete(payload) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$raw = _ref3.raw,
          raw = _ref3$raw === undefined ? false : _ref3$raw;

      return new Promise(function (yay, nay) {
        googleMapsClient.placesAutoComplete(payload, function (err, result) {
          if (err) {
            nay(err.json.error_message);
          } else if (raw) {
            yay(result.json.predictions);
          } else {
            yay(result.json.predictions.map(function (_ref4) {
              var description = _ref4.description,
                  id = _ref4.id,
                  place_id = _ref4.place_id,
                  reference = _ref4.reference;
              return {
                description: description,
                id: id,
                placeId: place_id,
                reference: reference
              };
            }));
          }
        });
      });
    }
  };
};

/*
{ directions: [Function],
  distanceMatrix: [Function],
  elevation: [Function],
  elevationAlongPath: [Function],
  geocode: [Function],
  geolocate: [Function],
  reverseGeocode: [Function],
  places: [Function],
  placesNearby: [Function],
  placesRadar: [Function: deprecated],
  place: [Function],
  placesPhoto: [Function],
  placesAutoComplete: [Function],
  placesQueryAutoComplete: [Function],
  snapToRoads: [Function],
  nearestRoads: [Function],
  speedLimits: [Function],
  snappedSpeedLimits: [Function],
  timezone: [Function] }

*/
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvc2VydmVyL21hcHMuZXM2Il0sIm5hbWVzIjpbImNvbnZlcnRHZW9jb2RlIiwibmV3UmVzdWx0IiwicmVzdWx0IiwiYWRkcmVzc19jb21wb25lbnRzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsInR5cGVzIiwibmV3VHlwZSIsInR5cGUiLCJzcGxpdCIsIm1hcCIsImZyYWciLCJpIiwidG9VcHBlckNhc2UiLCJzdWJzdHIiLCJqb2luIiwibG9uZ19uYW1lIiwic2hvcnRfbmFtZSIsImZvcm1hdHRlZEFkZHJlc3MiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJsb2NhdGlvblR5cGUiLCJsb2NhdGlvbl90eXBlIiwicGFydGlhbE1hdGNoIiwicGFydGlhbF9tYXRjaCIsImlkIiwicGxhY2VfaWQiLCJnb29nbGVNYXBzQ2xpZW50IiwiY3JlYXRlQ2xpZW50Iiwia2V5IiwiUHJvbWlzZSIsInBsYWNlQnlJZCIsInJhdyIsInlheSIsIm5heSIsInBsYWNlIiwicGxhY2VpZCIsImVyciIsImpzb24iLCJlcnJvcl9tZXNzYWdlIiwiZ2VvY29kZSIsInBheWxvYWQiLCJyZXN1bHRzIiwicGxhY2VzQXV0b0NvbXBsZXRlIiwicHJlZGljdGlvbnMiLCJkZXNjcmlwdGlvbiIsInJlZmVyZW5jZSIsInBsYWNlSWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLFNBQVU7QUFDL0IsTUFBTUMsWUFBWSxFQUFsQjtBQUNBLEdBQUNDLE9BQU9DLGtCQUFQLElBQTZCLEVBQTlCLEVBQWtDQyxPQUFsQyxDQUEwQyxxQkFBYTtBQUNyREMsY0FBVUMsS0FBVixDQUFnQkYsT0FBaEIsQ0FBd0IsZ0JBQVE7QUFDOUIsVUFBTUcsVUFBVUMsS0FDYkMsS0FEYSxDQUNQLEdBRE8sRUFFYkMsR0FGYSxDQUdaLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFB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QUEsNEJBQVlULEdBQVo7QUFBQSxVQUFZQSxHQUFaLDZCQUFrQixLQUFsQjs7QUFBQSxhQUNsQixJQUFJRixPQUFKLENBQVksVUFBQ0csR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDeEJQLHlCQUFpQmdCLGtCQUFqQixDQUFvQ0YsT0FBcEMsRUFBNkMsVUFBQ0osR0FBRCxFQUFNdEMsTUFBTixFQUFpQjtBQUM1RCxjQUFJc0MsR0FBSixFQUFTO0FBQ1BILGdCQUFJRyxJQUFJQyxJQUFKLENBQVNDLGFBQWI7QUFDRCxXQUZELE1BRU8sSUFBSVAsR0FBSixFQUFTO0FBQ2RDLGdCQUFJbEMsT0FBT3VDLElBQVAsQ0FBWU0sV0FBaEI7QUFDRCxXQUZNLE1BRUE7QUFDTFgsZ0JBQ0VsQyxPQUFPdUMsSUFBUCxDQUFZTSxXQUFaLENBQXdCckMsR0FBeEIsQ0FDRTtBQUFBLGtCQUFHc0MsV0FBSCxTQUFHQSxXQUFIO0FBQUEsa0JBQWdCcEIsRUFBaEIsU0FBZ0JBLEVBQWhCO0FBQUEsa0JBQW9CQyxRQUFwQixTQUFvQkEsUUFBcEI7QUFBQSxrQkFBOEJvQixTQUE5QixTQUE4QkEsU0FBOUI7QUFBQSxxQkFBK0M7QUFDN0NELHdDQUQ2QztBQUU3Q3BCLHNCQUY2QztBQUc3Q3NCLHlCQUFTckIsUUFIb0M7QUFJN0NvQjtBQUo2QyxlQUEvQztBQUFBLGFBREYsQ0FERjtBQVVEO0FBQ0YsU0FqQkQ7QUFrQkQsT0FuQkQsQ0FEa0I7QUFBQTtBQXpCZixHQUFQO0FBK0NELEM7O0FBRUQiLCJmaWxlIjoiY21zL2dvb2dsZS9zZXJ2ZXIvbWFwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXBzIGZyb20gJ0Bnb29nbGUvbWFwcyc7XG5cbmNvbnN0IGNvbnZlcnRHZW9jb2RlID0gcmVzdWx0ID0+IHtcbiAgY29uc3QgbmV3UmVzdWx0ID0ge307XG4gIChyZXN1bHQuYWRkcmVzc19jb21wb25lbnRzIHx8IFtdKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgY29tcG9uZW50LnR5cGVzLmZvckVhY2godHlwZSA9PiB7XG4gICAgICBjb25zdCBuZXdUeXBlID0gdHlwZVxuICAgICAgICAuc3BsaXQoJ18nKVxuICAgICAgICAubWFwKFxuICAgICAgICAgIChmcmFnLCBpKSA9PlxuICAgICAgICAgICAgaSA+IDAgPyBgJHtmcmFnWzBdLnRvVXBwZXJDYXNlKCl9JHtmcmFnLnN1YnN0cigxKX1gIDogZnJhZyxcbiAgICAgICAgKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIC5qb2luKCcnKTtcbiAgICAgIG5ld1Jlc3VsdFtuZXdUeXBlXSA9IGNvbXBvbmVudC5sb25nX25hbWU7XG4gICAgICBuZXdSZXN1bHRbYCR7bmV3VHlwZX1TaG9ydGBdID0gY29tcG9uZW50LnNob3J0X25hbWU7XG4gICAgfSk7XG4gIH0pO1xuICBuZXdSZXN1bHQuZm9ybWF0dGVkQWRkcmVzcyA9IHJlc3VsdC5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgaWYgKHJlc3VsdC5nZW9tZXRyeSkge1xuICAgIGlmIChyZXN1bHQuZ2VvbWV0cnkubG9jYXRpb24pIHtcbiAgICAgIG5ld1Jlc3VsdC5sYXQgPSByZXN1bHQuZ2VvbWV0cnkubG9jYXRpb24ubGF0O1xuICAgICAgbmV3UmVzdWx0LmxuZyA9IHJlc3VsdC5nZW9tZXRyeS5sb2NhdGlvbi5sbmc7XG4gICAgfVxuICAgIG5ld1Jlc3VsdC5sb2NhdGlvblR5cGUgPSByZXN1bHQuZ2VvbWV0cnkubG9jYXRpb25fdHlwZTtcbiAgfVxuICBuZXdSZXN1bHQucGFydGlhbE1hdGNoID0gcmVzdWx0LnBhcnRpYWxfbWF0Y2g7XG4gIG5ld1Jlc3VsdC5pZCA9IHJlc3VsdC5wbGFjZV9pZDtcbiAgbmV3UmVzdWx0LnR5cGVzID0gcmVzdWx0LnR5cGVzO1xuICByZXR1cm4gbmV3UmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQga2V5ID0+IHtcbiAgY29uc3QgZ29vZ2xlTWFwc0NsaWVudCA9IG1hcHMuY3JlYXRlQ2xpZW50KHtcbiAgICBrZXksXG4gICAgUHJvbWlzZSxcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcGxhY2VCeUlkOiAoaWQsIHsgcmF3ID0gZmFsc2UgfSA9IHt9KSA9PlxuICAgICAgbmV3IFByb21pc2UoKHlheSwgbmF5KSA9PiB7XG4gICAgICAgIGdvb2dsZU1hcHNDbGllbnQucGxhY2UoeyBwbGFjZWlkOiBpZCB9LCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBuYXkoZXJyLmpzb24uZXJyb3JfbWVzc2FnZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyYXcpIHtcbiAgICAgICAgICAgIHlheShyZXN1bHQuanNvbi5yZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5YXkocmVzdWx0Lmpzb24ucmVzdWx0ID8gY29udmVydEdlb2NvZGUocmVzdWx0Lmpzb24ucmVzdWx0KSA6IG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICBnZW9jb2RlOiAocGF5bG9hZCwgeyByYXcgPSBmYWxzZSB9ID0ge30pID0+XG4gICAgICBuZXcgUHJvbWlzZSgoeWF5LCBuYXkpID0+IHtcbiAgICAgICAgZ29vZ2xlTWFwc0NsaWVudC5nZW9jb2RlKHBheWxvYWQsIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIG5heShlcnIuanNvbi5lcnJvcl9tZXNzYWdlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJhdykge1xuICAgICAgICAgICAgeWF5KHJlc3VsdC5qc29uLnJlc3VsdHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5YXkocmVzdWx0Lmpzb24ucmVzdWx0cy5tYXAoY29udmVydEdlb2NvZGUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgcGxhY2VzQXV0b0NvbXBsZXRlOiAocGF5bG9hZCwgeyByYXcgPSBmYWxzZSB9ID0ge30pID0+XG4gICAgICBuZXcgUHJvbWlzZSgoeWF5LCBuYXkpID0+IHtcbiAgICAgICAgZ29vZ2xlTWFwc0NsaWVudC5wbGFjZXNBdXRvQ29tcGxldGUocGF5bG9hZCwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgbmF5KGVyci5qc29uLmVycm9yX21lc3NhZ2UpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmF3KSB7XG4gICAgICAgICAgICB5YXkocmVzdWx0Lmpzb24ucHJlZGljdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5YXkoXG4gICAgICAgICAgICAgIHJlc3VsdC5qc29uLnByZWRpY3Rpb25zLm1hcChcbiAgICAgICAgICAgICAgICAoeyBkZXNjcmlwdGlvbiwgaWQsIHBsYWNlX2lkLCByZWZlcmVuY2UgfSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICBwbGFjZUlkOiBwbGFjZV9pZCxcbiAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICB9O1xufTtcblxuLypcbnsgZGlyZWN0aW9uczogW0Z1bmN0aW9uXSxcbiAgZGlzdGFuY2VNYXRyaXg6IFtGdW5jdGlvbl0sXG4gIGVsZXZhdGlvbjogW0Z1bmN0aW9uXSxcbiAgZWxldmF0aW9uQWxvbmdQYXRoOiBbRnVuY3Rpb25dLFxuICBnZW9jb2RlOiBbRnVuY3Rpb25dLFxuICBnZW9sb2NhdGU6IFtGdW5jdGlvbl0sXG4gIHJldmVyc2VHZW9jb2RlOiBbRnVuY3Rpb25dLFxuICBwbGFjZXM6IFtGdW5jdGlvbl0sXG4gIHBsYWNlc05lYXJieTogW0Z1bmN0aW9uXSxcbiAgcGxhY2VzUmFkYXI6IFtGdW5jdGlvbjogZGVwcmVjYXRlZF0sXG4gIHBsYWNlOiBbRnVuY3Rpb25dLFxuICBwbGFjZXNQaG90bzogW0Z1bmN0aW9uXSxcbiAgcGxhY2VzQXV0b0NvbXBsZXRlOiBbRnVuY3Rpb25dLFxuICBwbGFjZXNRdWVyeUF1dG9Db21wbGV0ZTogW0Z1bmN0aW9uXSxcbiAgc25hcFRvUm9hZHM6IFtGdW5jdGlvbl0sXG4gIG5lYXJlc3RSb2FkczogW0Z1bmN0aW9uXSxcbiAgc3BlZWRMaW1pdHM6IFtGdW5jdGlvbl0sXG4gIHNuYXBwZWRTcGVlZExpbWl0czogW0Z1bmN0aW9uXSxcbiAgdGltZXpvbmU6IFtGdW5jdGlvbl0gfVxuXG4qL1xuIl19
