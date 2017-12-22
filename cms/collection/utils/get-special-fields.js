import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { toLabel } from 'olymp-utils';

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
    field.specialFields.label = toLabel(field.name || '');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vdXRpbHMvZ2V0LXNwZWNpYWwtZmllbGRzLmVzNiJdLCJuYW1lcyI6WyJ0b0xhYmVsIiwiZ2V0U3BlY2lhbEZpZWxkcyIsInNwZWNpYWxGaWVsZHMiLCJkZXNjcmlwdGlvbiIsInJlcGxhY2UiLCJtYXRjaCIsInNwbGl0IiwibmFtZSIsInZhbHVlIiwic3Vic3RyIiwibGVuZ3RoIiwiZmlsdGVyIiwieCIsImpvaW4iLCJnZXRTcGVjaWFsRmllbGRzRnJvbVR5cGUiLCJ0IiwidHlwZSIsImtpbmQiLCJlbnVtVmFsdWVzIiwibWFwIiwiZSIsImxhYmVsIiwiZ2V0U3BlY2lhbEZpZWxkc0Zyb21GaWVsZCIsImYiLCJmaWVsZCIsIm9mVHlwZSIsImlubmVyVHlwZSIsImdldFNwZWNpYWxGaWVsZHNGcm9tQ29sbGVjdGlvbiIsImMiLCJjb2xsZWN0aW9uIiwiZmllbGRzIiwiZm9yRWFjaCIsInJlcUZpZWxkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsU0FBU0EsT0FBVCxRQUF3QixhQUF4Qjs7QUFFQSxJQUFNQyxtQkFBbUIsU0FBbkJBLGdCQUFtQixjQUFlO0FBQ3RDLE1BQU1DLGdCQUFnQixFQUF0Qjs7QUFFQSxHQUFDQyxlQUFlLEVBQWhCLEVBQW9CQyxPQUFwQixDQUE0QiwrQkFBNUIsRUFBNkQsaUJBQVM7QUFDcEUsUUFBSSxDQUFDQyxLQUFMLEVBQVksT0FBTyxFQUFQOztBQUR3RCx1QkFFM0NBLE1BQU1DLEtBQU4sQ0FBWSxHQUFaLENBRjJDO0FBQUE7QUFBQSxRQUUvREMsSUFGK0Q7QUFBQTtBQUFBLFFBRXpEQyxLQUZ5RCxrQ0FFakQsRUFGaUQ7O0FBR3BFRCxXQUFPQSxLQUFLRSxNQUFMLENBQVksQ0FBWixDQUFQLENBSG9FLENBRzdDO0FBQ3ZCRCxZQUFRQSxNQUFNO0FBQU4sS0FDTEMsTUFESyxDQUNFLENBREYsRUFDS0QsTUFBTUUsTUFBTixHQUFlLENBRHBCLEVBRUxKLEtBRkssQ0FFQyxHQUZELEVBR0xL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QUZhLEVBR2IsT0FIYSxFQUliLE9BSmEsRUFLYixLQUxhLEVBTWIsUUFOYSxDQUFmO0FBUUFBLGFBQU9DLE9BQVAsQ0FBZSxhQUFLO0FBQ2xCLFlBQUlSLEVBQUVyQixhQUFGLENBQWdCVSxDQUFoQixDQUFKLEVBQXdCO0FBQ3RCaUIscUJBQVczQixhQUFYLENBQTRCVSxDQUE1QixjQUF3Q1csRUFBRWhCLElBQTFDO0FBQ0Q7QUFDRixPQUpEO0FBS0QsS0F4QkQ7QUF5QkQ7O0FBRUQsU0FBT3NCLFVBQVA7QUFDRCxDQXpDRDtBQTBDQSxlQUFlRiw4QkFBZiIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL3V0aWxzL2dldC1zcGVjaWFsLWZpZWxkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyB0b0xhYmVsIH0gZnJvbSAnb2x5bXAtdXRpbHMnO1xuXG5jb25zdCBnZXRTcGVjaWFsRmllbGRzID0gZGVzY3JpcHRpb24gPT4ge1xuICBjb25zdCBzcGVjaWFsRmllbGRzID0ge307XG5cbiAgKGRlc2NyaXB0aW9uIHx8ICcnKS5yZXBsYWNlKC9cXEBcXHcrKFxcW1swLTldK1xcXSk/KFxcKC4rXFwpKT8vZ2ksIG1hdGNoID0+IHtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4ge307XG4gICAgbGV0IFtuYW1lLCB2YWx1ZSA9ICcnXSA9IG1hdGNoLnNwbGl0KCcoJyk7XG4gICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEpOyAvLyBkZWxldGUgJ0AnXG4gICAgdmFsdWUgPSB2YWx1ZSAvLyBkZWxldGUgJyknIGFuZCAnXCInXG4gICAgICAuc3Vic3RyKDAsIHZhbHVlLmxlbmd0aCAtIDEpXG4gICAgICAuc3BsaXQoJ1wiJylcbiAgICAgIC5maWx0ZXIoeCA9PiB4KVxuICAgICAgLmpvaW4oJywgJyk7XG5cbiAgICBzcGVjaWFsRmllbGRzW25hbWVdID0gdmFsdWUgfHwgdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNwZWNpYWxGaWVsZHM7XG59O1xuXG5jb25zdCBnZXRTcGVjaWFsRmllbGRzRnJvbVR5cGUgPSB0ID0+IHtcbiAgaWYgKCF0KSByZXR1cm47XG5cbiAgY29uc3QgdHlwZSA9IHsgLi4udCB9O1xuXG4gIC8vIGdldCBzcGVjaWFsRmllbGRzXG4gIHR5cGUuc3BlY2lhbEZpZWxkcyA9IGdldFNwZWNpYWxGaWVsZHModHlwZS5kZXNjcmlwdGlvbik7XG4gIGRlbGV0ZSB0eXBlLmRlc2NyaXB0aW9uO1xuXG4gIC8vIHNldCBlbnVtLWxhYmVsc1xuICBpZiAodHlwZS5raW5kID09PSAnRU5VTScgJiYgdHlwZS5lbnVtVmFsdWVzKSB7XG4gICAgdHlwZS5lbnVtVmFsdWVzID0gdHlwZS5lbnVtVmFsdWVzLm1hcChlID0+ICh7XG4gICAgICAuLi5lLFxuICAgICAgbGFiZWw6IHR5cGUuc3BlY2lhbEZpZWxkc1tlLm5hbWVdIHx8IGUubmFtZSxcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn07XG5cbmNvbnN0IGdldFNwZWNpYWxGaWVsZHNGcm9tRmllbGQgPSBmID0+IHtcbiAgaWYgKCFmKSByZXR1cm47XG5cbiAgY29uc3QgZmllbGQgPSB7IC4uLmYgfTtcblxuICAvLyBnZXQgc3BlY2lhbEZpZWxkc1xuICBmaWVsZC5zcGVjaWFsRmllbGRzID0gZ2V0U3BlY2lhbEZpZWxkcyhmaWVsZC5kZXNjcmlwdGlvbik7XG4gIGRlbGV0ZSBmaWVsZC5kZXNjcmlwdGlvbjtcblxuICBmaWVsZC50eXBlID0gZ2V0U3BlY2lhbEZpZWxkc0Zyb21UeXBlKGZpZWxkLnR5cGUpO1xuICBmaWVsZC50eXBlLm9mVHlwZSA9IGdldFNwZWNpYWxGaWVsZHNGcm9tVHlwZShnZXQoZmllbGQsICd0eXBlLm9mVHlwZScpKTtcbiAgZmllbGQuaW5uZXJUeXBlID0gZmllbGQudHlwZS5vZlR5cGUgfHwgZmllbGQudHlwZTtcbiAgZmllbGQuc3BlY2lhbEZpZWxkcyA9IHtcbiAgICAuLi5maWVsZC5zcGVjaWFsRmllbGRzLFxuICAgIC4uLmZpZWxkLmlubmVyVHlwZS5zcGVjaWFsRmllbGRzLFxuICB9O1xuXG4gIC8vIHNldCBsYWJlbFxuICBpZiAoIWZpZWxkLnNwZWNpYWxGaWVsZHMubGFiZWwpIHtcbiAgICBmaWVsZC5zcGVjaWFsRmllbGRzLmxhYmVsID0gdG9MYWJlbChmaWVsZC5uYW1lIHx8ICcnKTtcbiAgfVxuXG4gIHJldHVybiBmaWVsZDtcbn07XG5cbmNvbnN0IGdldFNwZWNpYWxGaWVsZHNGcm9tQ29sbGVjdGlvbiA9IGMgPT4ge1xuICBpZiAoIWMpIHJldHVybjtcblxuICBjb25zdCBjb2xsZWN0aW9uID0geyAuLi5jIH07XG5cbiAgLy8gZ2V0IHNwZWNpYWxGaWVsZHNcbiAgY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzID0gZ2V0U3BlY2lhbEZpZWxkcyhjb2xsZWN0aW9uLmRlc2NyaXB0aW9uKTtcbiAgZGVsZXRlIGNvbGxlY3Rpb24uZGVzY3JpcHRpb247XG5cbiAgaWYgKGNvbGxlY3Rpb24uZmllbGRzKSB7XG4gICAgY29sbGVjdGlvbi5maWVsZHMgPSBjb2xsZWN0aW9uLmZpZWxkcy5tYXAoeCA9PlxuICAgICAgZ2V0U3BlY2lhbEZpZWxkc0Zyb21GaWVsZCh4KSxcbiAgICApO1xuICAgIGNvbGxlY3Rpb24uZmllbGRzLmZvckVhY2goZiA9PiB7XG4gICAgICBjb25zdCByZXFGaWVsZHMgPSBbJ25hbWUnXTtcbiAgICAgIHJlcUZpZWxkcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZi5zcGVjaWFsRmllbGRzW3hdIHx8XG4gICAgICAgICAgKGYubmFtZSA9PT0geCAmJiAhY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzW2Ake3h9RmllbGRgXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzW2Ake3h9RmllbGRgXSA9IGYubmFtZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZpZWxkcyA9IFtcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgJ2NvbG9yJyxcbiAgICAgICAgJ2ltYWdlJyxcbiAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgJ2VuZCcsXG4gICAgICAgICdhbGxEYXknLFxuICAgICAgXTtcbiAgICAgIGZpZWxkcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBpZiAoZi5zcGVjaWFsRmllbGRzW3hdKSB7XG4gICAgICAgICAgY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzW2Ake3h9RmllbGRgXSA9IGYubmFtZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29sbGVjdGlvbjtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRTcGVjaWFsRmllbGRzRnJvbUNvbGxlY3Rpb247XG4iXX0=
