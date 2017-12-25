import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var getSpecialFields = function getSpecialFields(description) {
  var specialFields = {};

  (description || '').replace(/\@\w+(\[[0-9]+\])?(\(.+\))?/gi, function (match) {
    if (!match) return {};

    var _match$split = match.split('('),
        _match$split2 = _slicedToArray(_match$split, 2),
        name = _match$split2[0],
        _match$split2$ = _match$split2[1],
        value = _match$split2$ === undefined ? '' : _match$split2$;

    name = name.substr(1); // delete '@'
    value = value // delete ')' and '"'
    .substr(0, value.length - 1).split('"').filter(function (x) {
      return x;
    }).join(', ');

    specialFields[name] = value || true;
  });

  return specialFields;
};

var getSpecialFieldsFromType = function getSpecialFieldsFromType(t) {
  if (!t) return;

  var type = _extends({}, t);

  // get specialFields
  type.specialFields = getSpecialFields(type.description);
  delete type.description;

  // set enum-labels
  if (type.kind === 'ENUM' && type.enumValues) {
    type.enumValues = type.enumValues.map(function (e) {
      return _extends({}, e, {
        label: type.specialFields[e.name] || e.name
      });
    });
  }

  return type;
};

var getSpecialFieldsFromField = function getSpecialFieldsFromField(f) {
  if (!f) return;

  var field = _extends({}, f);

  // get specialFields
  field.specialFields = getSpecialFields(field.description);
  delete field.description;

  field.type = getSpecialFieldsFromType(field.type);
  field.type.ofType = getSpecialFieldsFromType(_get(field, 'type.ofType'));
  field.innerType = field.type.ofType || field.type;
  field.specialFields = _extends({}, field.specialFields, field.innerType.specialFields);

  // set label
  if (!field.specialFields.label) {
    field.specialFields.label = field.name || '';
  }

  return field;
};

var getSpecialFieldsFromCollection = function getSpecialFieldsFromCollection(c) {
  if (!c) return;

  var collection = _extends({}, c);

  // get specialFields
  collection.specialFields = getSpecialFields(collection.description);
  delete collection.description;

  if (collection.fields) {
    collection.fields = collection.fields.map(function (x) {
      return getSpecialFieldsFromField(x);
    });
    collection.fields.forEach(function (f) {
      var reqFields = ['name'];
      reqFields.forEach(function (x) {
        if (f.specialFields[x] || f.name === x && !collection.specialFields[x + 'Field']) {
          collection.specialFields[x + 'Field'] = f.name;
        }
      });

      var fields = ['description', 'color', 'image', 'start', 'end', 'allDay'];
      fields.forEach(function (x) {
        if (f.specialFields[x]) {
          collection.specialFields[x + 'Field'] = f.name;
        }
      });
    });
  }

  return collection;
};
export default getSpecialFieldsFromCollection;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3V0aWxzL2dldC1zcGVjaWFsLWZpZWxkcy5lczYiXSwibmFtZXMiOlsiZ2V0U3BlY2lhbEZpZWxkcyIsInNwZWNpYWxGaWVsZHMiLCJkZXNjcmlwdGlvbiIsInJlcGxhY2UiLCJtYXRjaCIsInNwbGl0IiwibmFtZSIsInZhbHVlIiwic3Vic3RyIiwibGVuZ3RoIiwiZmlsdGVyIiwieCIsImpvaW4iLCJnZXRTcGVjaWFsRmllbGRzRnJvbVR5cGUiLCJ0IiwidHlwZSIsImtpbmQiLCJlbnVtVmFsdWVzIiwibWFwIiwiZSIsImxhYmVsIiwiZ2V0U3BlY2lhbEZpZWxkc0Zyb21GaWVsZCIsImYiLCJmaWVsZCIsIm9mVHlwZSIsImlubmVyVHlwZSIsImdldFNwZWNpYWxGaWVsZHNGcm9tQ29sbGVjdGlvbiIsImMiLCJjb2xsZWN0aW9uIiwiZmllbGRzIiwiZm9yRWFjaCIsInJlcUZpZWxkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLFNBQW5CQSxnQkFBbUIsY0FBZTtBQUN0QyxNQUFNQyxnQkFBZ0IsRUFBdEI7O0FBRUEsR0FBQ0MsZUFBZSxFQUFoQixFQUFvQkMsT0FBcEIsQ0FBNEIsK0JBQTVCLEVBQTZELGlCQUFTO0FBQ3BFLFFBQUksQ0FBQ0MsS0FBTCxFQUFZLE9BQU8sRUFBUDs7QUFEd0QsdUJBRTNDQSxNQUFNQyxLQUFOLENBQVksR0FBWixDQUYyQztBQUFBO0FBQUEsUUFFL0RDLElBRitEO0FBQUE7QUFBQSxRQUV6REMsS0FGeUQsa0NBRWpELEVBRmlEOztBQUdwRUQsV0FBT0EsS0FBS0UsTUFBTCxDQUFZLENBQVosQ0FBUCxDQUhvRSxDQUc3QztBQUN2QkQsWUFBUUEsTUFBTTtBQUFOLEtBQ0xDLE1BREssQ0FDRSxDQURGLEVBQ0tELE1BQU1FLE1BQU4sR0FBZSxDQURwQixFQUVMSixLQUZLLENBRUMsR0FGRCxFQUdMSyxNQUhLLENBR0U7QUFBQSxhQUFLQyxDQUFMO0FBQUEsS0FIRixFQUlMQyxJ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T0MsT0FBUCxDQUFlLGFBQUs7QUFDbEIsWUFBSVIsRUFBRXJCLGFBQUYsQ0FBZ0JVLENBQWhCLENBQUosRUFBd0I7QUFDdEJpQixxQkFBVzNCLGFBQVgsQ0FBNEJVLENBQTVCLGNBQXdDVyxFQUFFaEIsSUFBMUM7QUFDRDtBQUNGLE9BSkQ7QUFLRCxLQXhCRDtBQXlCRDs7QUFFRCxTQUFPc0IsVUFBUDtBQUNELENBekNEO0FBMENBLGVBQWVGLDhCQUFmIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL3V0aWxzL2dldC1zcGVjaWFsLWZpZWxkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IGdldFNwZWNpYWxGaWVsZHMgPSBkZXNjcmlwdGlvbiA9PiB7XG4gIGNvbnN0IHNwZWNpYWxGaWVsZHMgPSB7fTtcblxuICAoZGVzY3JpcHRpb24gfHwgJycpLnJlcGxhY2UoL1xcQFxcdysoXFxbWzAtOV0rXFxdKT8oXFwoLitcXCkpPy9naSwgbWF0Y2ggPT4ge1xuICAgIGlmICghbWF0Y2gpIHJldHVybiB7fTtcbiAgICBsZXQgW25hbWUsIHZhbHVlID0gJyddID0gbWF0Y2guc3BsaXQoJygnKTtcbiAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSk7IC8vIGRlbGV0ZSAnQCdcbiAgICB2YWx1ZSA9IHZhbHVlIC8vIGRlbGV0ZSAnKScgYW5kICdcIidcbiAgICAgIC5zdWJzdHIoMCwgdmFsdWUubGVuZ3RoIC0gMSlcbiAgICAgIC5zcGxpdCgnXCInKVxuICAgICAgLmZpbHRlcih4ID0+IHgpXG4gICAgICAuam9pbignLCAnKTtcblxuICAgIHNwZWNpYWxGaWVsZHNbbmFtZV0gPSB2YWx1ZSB8fCB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gc3BlY2lhbEZpZWxkcztcbn07XG5cbmNvbnN0IGdldFNwZWNpYWxGaWVsZHNGcm9tVHlwZSA9IHQgPT4ge1xuICBpZiAoIXQpIHJldHVybjtcblxuICBjb25zdCB0eXBlID0geyAuLi50IH07XG5cbiAgLy8gZ2V0IHNwZWNpYWxGaWVsZHNcbiAgdHlwZS5zcGVjaWFsRmllbGRzID0gZ2V0U3BlY2lhbEZpZWxkcyh0eXBlLmRlc2NyaXB0aW9uKTtcbiAgZGVsZXRlIHR5cGUuZGVzY3JpcHRpb247XG5cbiAgLy8gc2V0IGVudW0tbGFiZWxzXG4gIGlmICh0eXBlLmtpbmQgPT09ICdFTlVNJyAmJiB0eXBlLmVudW1WYWx1ZXMpIHtcbiAgICB0eXBlLmVudW1WYWx1ZXMgPSB0eXBlLmVudW1WYWx1ZXMubWFwKGUgPT4gKHtcbiAgICAgIC4uLmUsXG4gICAgICBsYWJlbDogdHlwZS5zcGVjaWFsRmllbGRzW2UubmFtZV0gfHwgZS5uYW1lLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufTtcblxuY29uc3QgZ2V0U3BlY2lhbEZpZWxkc0Zyb21GaWVsZCA9IGYgPT4ge1xuICBpZiAoIWYpIHJldHVybjtcblxuICBjb25zdCBmaWVsZCA9IHsgLi4uZiB9O1xuXG4gIC8vIGdldCBzcGVjaWFsRmllbGRzXG4gIGZpZWxkLnNwZWNpYWxGaWVsZHMgPSBnZXRTcGVjaWFsRmllbGRzKGZpZWxkLmRlc2NyaXB0aW9uKTtcbiAgZGVsZXRlIGZpZWxkLmRlc2NyaXB0aW9uO1xuXG4gIGZpZWxkLnR5cGUgPSBnZXRTcGVjaWFsRmllbGRzRnJvbVR5cGUoZmllbGQudHlwZSk7XG4gIGZpZWxkLnR5cGUub2ZUeXBlID0gZ2V0U3BlY2lhbEZpZWxkc0Zyb21UeXBlKGdldChmaWVsZCwgJ3R5cGUub2ZUeXBlJykpO1xuICBmaWVsZC5pbm5lclR5cGUgPSBmaWVsZC50eXBlLm9mVHlwZSB8fCBmaWVsZC50eXBlO1xuICBmaWVsZC5zcGVjaWFsRmllbGRzID0ge1xuICAgIC4uLmZpZWxkLnNwZWNpYWxGaWVsZHMsXG4gICAgLi4uZmllbGQuaW5uZXJUeXBlLnNwZWNpYWxGaWVsZHMsXG4gIH07XG5cbiAgLy8gc2V0IGxhYmVsXG4gIGlmICghZmllbGQuc3BlY2lhbEZpZWxkcy5sYWJlbCkge1xuICAgIGZpZWxkLnNwZWNpYWxGaWVsZHMubGFiZWwgPSBmaWVsZC5uYW1lIHx8ICcnO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkO1xufTtcblxuY29uc3QgZ2V0U3BlY2lhbEZpZWxkc0Zyb21Db2xsZWN0aW9uID0gYyA9PiB7XG4gIGlmICghYykgcmV0dXJuO1xuXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSB7IC4uLmMgfTtcblxuICAvLyBnZXQgc3BlY2lhbEZpZWxkc1xuICBjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHMgPSBnZXRTcGVjaWFsRmllbGRzKGNvbGxlY3Rpb24uZGVzY3JpcHRpb24pO1xuICBkZWxldGUgY29sbGVjdGlvbi5kZXNjcmlwdGlvbjtcblxuICBpZiAoY29sbGVjdGlvbi5maWVsZHMpIHtcbiAgICBjb2xsZWN0aW9uLmZpZWxkcyA9IGNvbGxlY3Rpb24uZmllbGRzLm1hcCh4ID0+XG4gICAgICBnZXRTcGVjaWFsRmllbGRzRnJvbUZpZWxkKHgpLFxuICAgICk7XG4gICAgY29sbGVjdGlvbi5maWVsZHMuZm9yRWFjaChmID0+IHtcbiAgICAgIGNvbnN0IHJlcUZpZWxkcyA9IFsnbmFtZSddO1xuICAgICAgcmVxRmllbGRzLmZvckVhY2goeCA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBmLnNwZWNpYWxGaWVsZHNbeF0gfHxcbiAgICAgICAgICAoZi5uYW1lID09PSB4ICYmICFjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHNbYCR7eH1GaWVsZGBdKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHNbYCR7eH1GaWVsZGBdID0gZi5uYW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZmllbGRzID0gW1xuICAgICAgICAnZGVzY3JpcHRpb24nLFxuICAgICAgICAnY29sb3InLFxuICAgICAgICAnaW1hZ2UnLFxuICAgICAgICAnc3RhcnQnLFxuICAgICAgICAnZW5kJyxcbiAgICAgICAgJ2FsbERheScsXG4gICAgICBdO1xuICAgICAgZmllbGRzLmZvckVhY2goeCA9PiB7XG4gICAgICAgIGlmIChmLnNwZWNpYWxGaWVsZHNbeF0pIHtcbiAgICAgICAgICBjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHNbYCR7eH1GaWVsZGBdID0gZi5uYW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb2xsZWN0aW9uO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldFNwZWNpYWxGaWVsZHNGcm9tQ29sbGVjdGlvbjtcbiJdfQ==
