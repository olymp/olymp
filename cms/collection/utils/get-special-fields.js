'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  field.type.ofType = getSpecialFieldsFromType((0, _get3.default)(field, 'type.ofType'));
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
exports.default = getSpecialFieldsFromCollection;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3V0aWxzL2dldC1zcGVjaWFsLWZpZWxkcy5lczYiXSwibmFtZXMiOlsiZ2V0U3BlY2lhbEZpZWxkcyIsInNwZWNpYWxGaWVsZHMiLCJkZXNjcmlwdGlvbiIsInJlcGxhY2UiLCJtYXRjaCIsInNwbGl0IiwibmFtZSIsInZhbHVlIiwic3Vic3RyIiwibGVuZ3RoIiwiZmlsdGVyIiwieCIsImpvaW4iLCJnZXRTcGVjaWFsRmllbGRzRnJvbVR5cGUiLCJ0IiwidHlwZSIsImtpbmQiLCJlbnVtVmFsdWVzIiwibWFwIiwiZSIsImxhYmVsIiwiZ2V0U3BlY2lhbEZpZWxkc0Zyb21GaWVsZCIsImYiLCJmaWVsZCIsIm9mVHlwZSIsImlubmVyVHlwZSIsImdldFNwZWNpYWxGaWVsZHNGcm9tQ29sbGVjdGlvbiIsImMiLCJjb2xsZWN0aW9uIiwiZmllbGRzIiwiZm9yRWFjaCIsInJlcUZpZWxkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixTQUFuQkEsZ0JBQW1CLGNBQWU7QUFDdEMsTUFBTUMsZ0JBQWdCLEVBQXRCOztBQUVBLEdBQUNDLGVBQWUsRUFBaEIsRUFBb0JDLE9BQXBCLENBQTRCLCtCQUE1QixFQUE2RCxpQkFBUztBQUNwRSxRQUFJLENBQUNDLEtBQUwsRUFBWSxPQUFPLEVBQVA7O0FBRHdELHVCQUUzQ0EsTUFBTUMsS0FBTixDQUFZLEdBQVosQ0FGMkM7QUFBQTtBQUFBLFFBRS9EQyxJQUYrRDtBQUFBO0FBQUEsUUFFekRDLEtBRnlELGtDQUVqRCxFQUZpRDs7QUFHcEVELFdBQU9BLEtBQUtFLE1BQUwsQ0FBWSxDQUFaLENBQVAsQ0FIb0UsQ0FHN0M7QUFDdkJELFlBQVFBLE1BQU07QUFBTixLQUNMQyxNQURLLENBQ0UsQ0FERixFQUNLRCxNQUFNRSxNQUFOLEdBQWUsQ0FEcEIsRUFFTEosS0FGSyxDQUVDLEdBRkQsRUFHTEssTUFISyxDQUdFO0FBQUEsYUFBS0MsQ0FBTDtBQUFBLEtB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ZjtBQVFBQSxhQUFPQyxPQUFQLENBQWUsYUFBSztBQUNsQixZQUFJUixFQUFFckIsYUFBRixDQUFnQlUsQ0FBaEIsQ0FBSixFQUF3QjtBQUN0QmlCLHFCQUFXM0IsYUFBWCxDQUE0QlUsQ0FBNUIsY0FBd0NXLEVBQUVoQixJQUExQztBQUNEO0FBQ0YsT0FKRDtBQUtELEtBeEJEO0FBeUJEOztBQUVELFNBQU9zQixVQUFQO0FBQ0QsQ0F6Q0Q7a0JBMENlRiw4QiIsImZpbGUiOiJjbXMvY29sbGVjdGlvbi91dGlscy9nZXQtc3BlY2lhbC1maWVsZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBnZXRTcGVjaWFsRmllbGRzID0gZGVzY3JpcHRpb24gPT4ge1xuICBjb25zdCBzcGVjaWFsRmllbGRzID0ge307XG5cbiAgKGRlc2NyaXB0aW9uIHx8ICcnKS5yZXBsYWNlKC9cXEBcXHcrKFxcW1swLTldK1xcXSk/KFxcKC4rXFwpKT8vZ2ksIG1hdGNoID0+IHtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4ge307XG4gICAgbGV0IFtuYW1lLCB2YWx1ZSA9ICcnXSA9IG1hdGNoLnNwbGl0KCcoJyk7XG4gICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEpOyAvLyBkZWxldGUgJ0AnXG4gICAgdmFsdWUgPSB2YWx1ZSAvLyBkZWxldGUgJyknIGFuZCAnXCInXG4gICAgICAuc3Vic3RyKDAsIHZhbHVlLmxlbmd0aCAtIDEpXG4gICAgICAuc3BsaXQoJ1wiJylcbiAgICAgIC5maWx0ZXIoeCA9PiB4KVxuICAgICAgLmpvaW4oJywgJyk7XG5cbiAgICBzcGVjaWFsRmllbGRzW25hbWVdID0gdmFsdWUgfHwgdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNwZWNpYWxGaWVsZHM7XG59O1xuXG5jb25zdCBnZXRTcGVjaWFsRmllbGRzRnJvbVR5cGUgPSB0ID0+IHtcbiAgaWYgKCF0KSByZXR1cm47XG5cbiAgY29uc3QgdHlwZSA9IHsgLi4udCB9O1xuXG4gIC8vIGdldCBzcGVjaWFsRmllbGRzXG4gIHR5cGUuc3BlY2lhbEZpZWxkcyA9IGdldFNwZWNpYWxGaWVsZHModHlwZS5kZXNjcmlwdGlvbik7XG4gIGRlbGV0ZSB0eXBlLmRlc2NyaXB0aW9uO1xuXG4gIC8vIHNldCBlbnVtLWxhYmVsc1xuICBpZiAodHlwZS5raW5kID09PSAnRU5VTScgJiYgdHlwZS5lbnVtVmFsdWVzKSB7XG4gICAgdHlwZS5lbnVtVmFsdWVzID0gdHlwZS5lbnVtVmFsdWVzLm1hcChlID0+ICh7XG4gICAgICAuLi5lLFxuICAgICAgbGFiZWw6IHR5cGUuc3BlY2lhbEZpZWxkc1tlLm5hbWVdIHx8IGUubmFtZSxcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn07XG5cbmNvbnN0IGdldFNwZWNpYWxGaWVsZHNGcm9tRmllbGQgPSBmID0+IHtcbiAgaWYgKCFmKSByZXR1cm47XG5cbiAgY29uc3QgZmllbGQgPSB7IC4uLmYgfTtcblxuICAvLyBnZXQgc3BlY2lhbEZpZWxkc1xuICBmaWVsZC5zcGVjaWFsRmllbGRzID0gZ2V0U3BlY2lhbEZpZWxkcyhmaWVsZC5kZXNjcmlwdGlvbik7XG4gIGRlbGV0ZSBmaWVsZC5kZXNjcmlwdGlvbjtcblxuICBmaWVsZC50eXBlID0gZ2V0U3BlY2lhbEZpZWxkc0Zyb21UeXBlKGZpZWxkLnR5cGUpO1xuICBmaWVsZC50eXBlLm9mVHlwZSA9IGdldFNwZWNpYWxGaWVsZHNGcm9tVHlwZShnZXQoZmllbGQsICd0eXBlLm9mVHlwZScpKTtcbiAgZmllbGQuaW5uZXJUeXBlID0gZmllbGQudHlwZS5vZlR5cGUgfHwgZmllbGQudHlwZTtcbiAgZmllbGQuc3BlY2lhbEZpZWxkcyA9IHtcbiAgICAuLi5maWVsZC5zcGVjaWFsRmllbGRzLFxuICAgIC4uLmZpZWxkLmlubmVyVHlwZS5zcGVjaWFsRmllbGRzLFxuICB9O1xuXG4gIC8vIHNldCBsYWJlbFxuICBpZiAoIWZpZWxkLnNwZWNpYWxGaWVsZHMubGFiZWwpIHtcbiAgICBmaWVsZC5zcGVjaWFsRmllbGRzLmxhYmVsID0gZmllbGQubmFtZSB8fCAnJztcbiAgfVxuXG4gIHJldHVybiBmaWVsZDtcbn07XG5cbmNvbnN0IGdldFNwZWNpYWxGaWVsZHNGcm9tQ29sbGVjdGlvbiA9IGMgPT4ge1xuICBpZiAoIWMpIHJldHVybjtcblxuICBjb25zdCBjb2xsZWN0aW9uID0geyAuLi5jIH07XG5cbiAgLy8gZ2V0IHNwZWNpYWxGaWVsZHNcbiAgY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzID0gZ2V0U3BlY2lhbEZpZWxkcyhjb2xsZWN0aW9uLmRlc2NyaXB0aW9uKTtcbiAgZGVsZXRlIGNvbGxlY3Rpb24uZGVzY3JpcHRpb247XG5cbiAgaWYgKGNvbGxlY3Rpb24uZmllbGRzKSB7XG4gICAgY29sbGVjdGlvbi5maWVsZHMgPSBjb2xsZWN0aW9uLmZpZWxkcy5tYXAoeCA9PlxuICAgICAgZ2V0U3BlY2lhbEZpZWxkc0Zyb21GaWVsZCh4KSxcbiAgICApO1xuICAgIGNvbGxlY3Rpb24uZmllbGRzLmZvckVhY2goZiA9PiB7XG4gICAgICBjb25zdCByZXFGaWVsZHMgPSBbJ25hbWUnXTtcbiAgICAgIHJlcUZpZWxkcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZi5zcGVjaWFsRmllbGRzW3hdIHx8XG4gICAgICAgICAgKGYubmFtZSA9PT0geCAmJiAhY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzW2Ake3h9RmllbGRgXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzW2Ake3h9RmllbGRgXSA9IGYubmFtZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZpZWxkcyA9IFtcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgJ2NvbG9yJyxcbiAgICAgICAgJ2ltYWdlJyxcbiAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgJ2VuZCcsXG4gICAgICAgICdhbGxEYXknLFxuICAgICAgXTtcbiAgICAgIGZpZWxkcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBpZiAoZi5zcGVjaWFsRmllbGRzW3hdKSB7XG4gICAgICAgICAgY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzW2Ake3h9RmllbGRgXSA9IGYubmFtZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29sbGVjdGlvbjtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRTcGVjaWFsRmllbGRzRnJvbUNvbGxlY3Rpb247XG4iXX0=
