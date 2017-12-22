import maps from '@google/maps';

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

export default (function (key) {
  var googleMapsClient = maps.createClient({
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
});

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9zZXJ2ZXIvbWFwcy5lczYiXSwibmFtZXMiOlsibWFwcyIsImNvbnZlcnRHZW9jb2RlIiwibmV3UmVzdWx0IiwicmVzdWx0IiwiYWRkcmVzc19jb21wb25lbnRzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsInR5cGVzIiwibmV3VHlwZSIsInR5cGUiLCJzcGxpdCIsIm1hcCIsImZyYWciLCJpIiwidG9VcHBlckNhc2UiLCJzdWJzdHIiLCJqb2luIiwibG9uZ19uYW1lIiwic2hvcnRfbmFtZSIsImZvcm1hdHRlZEFkZHJlc3MiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJsb2NhdGlvblR5cGUiLCJsb2NhdGlvbl90eXBlIiwicGFydGlhbE1hdGNoIiwicGFydGlhbF9tYXRjaCIsImlkIiwicGxhY2VfaWQiLCJnb29nbGVNYXBzQ2xpZW50IiwiY3JlYXRlQ2xpZW50Iiwia2V5IiwiUHJvbWlzZSIsInBsYWNlQnlJZCIsInJhdyIsInlheSIsIm5heSIsInBsYWNlIiwicGxhY2VpZCIsImVyciIsImpzb24iLCJlcnJvcl9tZXNzYWdlIiwiZ2VvY29kZSIsInBheWxvYWQiLCJyZXN1bHRzIiwicGxhY2VzQXV0b0NvbXBsZXRlIiwicHJlZGljdGlvbnMiLCJkZXNjcmlwdGlvbiIsInJlZmVyZW5jZSIsInBsYWNlSWQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLElBQVAsTUFBaUIsY0FBakI7O0FBRUEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixTQUFVO0FBQy9CLE1BQU1DLFlBQVksRUFBbEI7QUFDQSxHQUFDQyxPQUFPQyxrQkFBUCxJQUE2QixFQUE5QixFQUFrQ0MsT0FBbEMsQ0FBMEMscUJBQWE7QUFDckRDLGNBQVVDLEtBQVYsQ0FBZ0JGLE9BQWhCLENBQXdCLGdCQUFRO0FBQzlCLFVBQU1HLFVBQVVDLEtBQ2JDLEtBRGEsQ0FDUCxHQURPLEVBRWJDLEdBRmEsQ0FHWixV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LDRCQUFDRixPQUFEO0FBQUEsc0ZBQTRCLEVBQTVCO0FBQUEsNEJBQVlULEdBQVo7QUFBQSxVQUFZQSxHQUFaLDZCQUFrQixLQUFsQjs7QUFBQSxhQUNsQixJQUFJRixPQUFKLENBQVksVUFBQ0csR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDeEJQLHlCQUFpQmdCLGtCQUFqQixDQUFvQ0YsT0FBcEMsRUFBNkMsVUFBQ0osR0FBRCxFQUFNdEMsTUFBTixFQUFpQjtBQUM1RCxjQUFJc0MsR0FBSixFQUFTO0FBQ1BILGdCQUFJRyxJQUFJQyxJQUFKLENBQVNDLGFBQWI7QUFDRCxXQUZELE1BRU8sSUFBSVAsR0FBSixFQUFTO0FBQ2RDLGdCQUFJbEMsT0FBT3VDLElBQVAsQ0FBWU0sV0FBaEI7QUFDRCxXQUZNLE1BRUE7QUFDTFgsZ0JBQ0VsQyxPQUFPdUMsSUFBUCxDQUFZTSxXQUFaLENBQXdCckMsR0FBeEIsQ0FDRTtBQUFBLGtCQUFHc0MsV0FBSCxTQUFHQSxXQUFIO0FBQUEsa0JBQWdCcEIsRUFBaEIsU0FBZ0JBLEVBQWhCO0FBQUEsa0JBQW9CQyxRQUFwQixTQUFvQkEsUUFBcEI7QUFBQSxrQkFBOEJvQixTQUE5QixTQUE4QkEsU0FBOUI7QUFBQSxxQkFBK0M7QUFDN0NELHdDQUQ2QztBQUU3Q3BCLHNCQUY2QztBQUc3Q3NCLHlCQUFTckIsUUFIb0M7QUFJN0NvQjtBQUo2QyxlQUEvQztBQUFBLGFBREYsQ0FERjtBQVVEO0FBQ0YsU0FqQkQ7QUFrQkQsT0FuQkQsQ0FEa0I7QUFBQTtBQXpCZixHQUFQO0FBK0NELENBcEREOztBQXNEQSIsImZpbGUiOiJwYWNrYWdlcy9nb29nbGUvc2VydmVyL21hcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFwcyBmcm9tICdAZ29vZ2xlL21hcHMnO1xuXG5jb25zdCBjb252ZXJ0R2VvY29kZSA9IHJlc3VsdCA9PiB7XG4gIGNvbnN0IG5ld1Jlc3VsdCA9IHt9O1xuICAocmVzdWx0LmFkZHJlc3NfY29tcG9uZW50cyB8fCBbXSkuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgIGNvbXBvbmVudC50eXBlcy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgY29uc3QgbmV3VHlwZSA9IHR5cGVcbiAgICAgICAgLnNwbGl0KCdfJylcbiAgICAgICAgLm1hcChcbiAgICAgICAgICAoZnJhZywgaSkgPT5cbiAgICAgICAgICAgIGkgPiAwID8gYCR7ZnJhZ1swXS50b1VwcGVyQ2FzZSgpfSR7ZnJhZy5zdWJzdHIoMSl9YCA6IGZyYWcsXG4gICAgICAgICkgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAuam9pbignJyk7XG4gICAgICBuZXdSZXN1bHRbbmV3VHlwZV0gPSBjb21wb25lbnQubG9uZ19uYW1lO1xuICAgICAgbmV3UmVzdWx0W2Ake25ld1R5cGV9U2hvcnRgXSA9IGNvbXBvbmVudC5zaG9ydF9uYW1lO1xuICAgIH0pO1xuICB9KTtcbiAgbmV3UmVzdWx0LmZvcm1hdHRlZEFkZHJlc3MgPSByZXN1bHQuZm9ybWF0dGVkX2FkZHJlc3M7XG4gIGlmIChyZXN1bHQuZ2VvbWV0cnkpIHtcbiAgICBpZiAocmVzdWx0Lmdlb21ldHJ5LmxvY2F0aW9uKSB7XG4gICAgICBuZXdSZXN1bHQubGF0ID0gcmVzdWx0Lmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcbiAgICAgIG5ld1Jlc3VsdC5sbmcgPSByZXN1bHQuZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xuICAgIH1cbiAgICBuZXdSZXN1bHQubG9jYXRpb25UeXBlID0gcmVzdWx0Lmdlb21ldHJ5LmxvY2F0aW9uX3R5cGU7XG4gIH1cbiAgbmV3UmVzdWx0LnBhcnRpYWxNYXRjaCA9IHJlc3VsdC5wYXJ0aWFsX21hdGNoO1xuICBuZXdSZXN1bHQuaWQgPSByZXN1bHQucGxhY2VfaWQ7XG4gIG5ld1Jlc3VsdC50eXBlcyA9IHJlc3VsdC50eXBlcztcbiAgcmV0dXJuIG5ld1Jlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGtleSA9PiB7XG4gIGNvbnN0IGdvb2dsZU1hcHNDbGllbnQgPSBtYXBzLmNyZWF0ZUNsaWVudCh7XG4gICAga2V5LFxuICAgIFByb21pc2UsXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHBsYWNlQnlJZDogKGlkLCB7IHJhdyA9IGZhbHNlIH0gPSB7fSkgPT5cbiAgICAgIG5ldyBQcm9taXNlKCh5YXksIG5heSkgPT4ge1xuICAgICAgICBnb29nbGVNYXBzQ2xpZW50LnBsYWNlKHsgcGxhY2VpZDogaWQgfSwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgbmF5KGVyci5qc29uLmVycm9yX21lc3NhZ2UpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmF3KSB7XG4gICAgICAgICAgICB5YXkocmVzdWx0Lmpzb24ucmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWF5KHJlc3VsdC5qc29uLnJlc3VsdCA/IGNvbnZlcnRHZW9jb2RlKHJlc3VsdC5qc29uLnJlc3VsdCkgOiBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgZ2VvY29kZTogKHBheWxvYWQsIHsgcmF3ID0gZmFsc2UgfSA9IHt9KSA9PlxuICAgICAgbmV3IFByb21pc2UoKHlheSwgbmF5KSA9PiB7XG4gICAgICAgIGdvb2dsZU1hcHNDbGllbnQuZ2VvY29kZShwYXlsb2FkLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBuYXkoZXJyLmpzb24uZXJyb3JfbWVzc2FnZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyYXcpIHtcbiAgICAgICAgICAgIHlheShyZXN1bHQuanNvbi5yZXN1bHRzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWF5KHJlc3VsdC5qc29uLnJlc3VsdHMubWFwKGNvbnZlcnRHZW9jb2RlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgIHBsYWNlc0F1dG9Db21wbGV0ZTogKHBheWxvYWQsIHsgcmF3ID0gZmFsc2UgfSA9IHt9KSA9PlxuICAgICAgbmV3IFByb21pc2UoKHlheSwgbmF5KSA9PiB7XG4gICAgICAgIGdvb2dsZU1hcHNDbGllbnQucGxhY2VzQXV0b0NvbXBsZXRlKHBheWxvYWQsIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIG5heShlcnIuanNvbi5lcnJvcl9tZXNzYWdlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJhdykge1xuICAgICAgICAgICAgeWF5KHJlc3VsdC5qc29uLnByZWRpY3Rpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWF5KFxuICAgICAgICAgICAgICByZXN1bHQuanNvbi5wcmVkaWN0aW9ucy5tYXAoXG4gICAgICAgICAgICAgICAgKHsgZGVzY3JpcHRpb24sIGlkLCBwbGFjZV9pZCwgcmVmZXJlbmNlIH0pID0+ICh7XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgcGxhY2VJZDogcGxhY2VfaWQsXG4gICAgICAgICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgfTtcbn07XG5cbi8qXG57IGRpcmVjdGlvbnM6IFtGdW5jdGlvbl0sXG4gIGRpc3RhbmNlTWF0cml4OiBbRnVuY3Rpb25dLFxuICBlbGV2YXRpb246IFtGdW5jdGlvbl0sXG4gIGVsZXZhdGlvbkFsb25nUGF0aDogW0Z1bmN0aW9uXSxcbiAgZ2VvY29kZTogW0Z1bmN0aW9uXSxcbiAgZ2VvbG9jYXRlOiBbRnVuY3Rpb25dLFxuICByZXZlcnNlR2VvY29kZTogW0Z1bmN0aW9uXSxcbiAgcGxhY2VzOiBbRnVuY3Rpb25dLFxuICBwbGFjZXNOZWFyYnk6IFtGdW5jdGlvbl0sXG4gIHBsYWNlc1JhZGFyOiBbRnVuY3Rpb246IGRlcHJlY2F0ZWRdLFxuICBwbGFjZTogW0Z1bmN0aW9uXSxcbiAgcGxhY2VzUGhvdG86IFtGdW5jdGlvbl0sXG4gIHBsYWNlc0F1dG9Db21wbGV0ZTogW0Z1bmN0aW9uXSxcbiAgcGxhY2VzUXVlcnlBdXRvQ29tcGxldGU6IFtGdW5jdGlvbl0sXG4gIHNuYXBUb1JvYWRzOiBbRnVuY3Rpb25dLFxuICBuZWFyZXN0Um9hZHM6IFtGdW5jdGlvbl0sXG4gIHNwZWVkTGltaXRzOiBbRnVuY3Rpb25dLFxuICBzbmFwcGVkU3BlZWRMaW1pdHM6IFtGdW5jdGlvbl0sXG4gIHRpbWV6b25lOiBbRnVuY3Rpb25dIH1cblxuKi9cbiJdfQ==
