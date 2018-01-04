'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _editStrings = require('./edit-strings');

var _editStrings2 = _interopRequireDefault(_editStrings);

var _editTags = require('./edit-tags');

var _editTags2 = _interopRequireDefault(_editTags);

var _editSlate = require('./edit-slate');

var _editSlate2 = _interopRequireDefault(_editSlate);

var _editOpenings = require('./edit-openings');

var _editOpenings2 = _interopRequireDefault(_editOpenings);

var _editList = require('./edit-list');

var _editList2 = _interopRequireDefault(_editList);

var _editEnum = require('./edit-enum');

var _editEnum2 = _interopRequireDefault(_editEnum);

var _editDate = require('./edit-date');

var _editDate2 = _interopRequireDefault(_editDate);

var _editRel = require('./edit-rel');

var _editRel2 = _interopRequireDefault(_editRel);

var _editRelList = require('./edit-rel-list');

var _editRelList2 = _interopRequireDefault(_editRelList);

var _editInput = require('./edit-input');

var _editInput2 = _interopRequireDefault(_editInput);

var _editImage = require('./edit-image');

var _editImage2 = _interopRequireDefault(_editImage);

var _editColor = require('./edit-color');

var _editColor2 = _interopRequireDefault(_editColor);

var _editTextarea = require('./edit-textarea');

var _editTextarea2 = _interopRequireDefault(_editTextarea);

var _editBool = require('./edit-bool');

var _editBool2 = _interopRequireDefault(_editBool);

var _editGeocode = require('./edit-geocode');

var _editGeocode2 = _interopRequireDefault(_editGeocode);

var _editSlug = require('./edit-slug');

var _editSlug2 = _interopRequireDefault(_editSlug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  slug: _editSlug2.default,
  geocode: _editGeocode2.default,
  bool: _editBool2.default,
  textarea: _editTextarea2.default,
  color: _editColor2.default,
  date: _editDate2.default,
  enu: _editEnum2.default,
  strings: _editStrings2.default,
  tags: _editTags2.default,
  slate: _editSlate2.default,
  openings: _editOpenings2.default,
  list: _editList2.default,
  rel: _editRel2.default,
  relList: _editRelList2.default,
  input: _editInput2.default,
  image: _editImage2.default
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2RlZmF1bHQtZWRpdHMuZXM2Il0sIm5hbWVzIjpbInNsdWciLCJnZW9jb2RlIiwiYm9vbCIsInRleHRhcmVhIiwiY29sb3IiLCJkYXRlIiwiZW51Iiwic3RyaW5ncyIsInRhZ3MiLCJzbGF0ZSIsIm9wZW5pbmdzIiwibGlzdCIsInJlbCIsInJlbExpc3QiLCJpbnB1dCIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ2JBLDBCQURhO0FBRWJDLGdDQUZhO0FBR2JDLDBCQUhhO0FBSWJDLGtDQUphO0FBS2JDLDRCQUxhO0FBTWJDLDBCQU5hO0FBT2JDLHlCQVBhO0FBUWJDLGdDQVJhO0FBU2JDLDBCQVRhO0FBVWJDLDRCQVZhO0FBV2JDLGtDQVhhO0FBWWJDLDBCQVphO0FBYWJDLHdCQWJhO0FBY2JDLGdDQWRhO0FBZWJDLDRCQWZhO0FBZ0JiQztBQWhCYSxDIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL2RlZmF1bHQtZWRpdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RyaW5ncyBmcm9tICcuL2VkaXQtc3RyaW5ncyc7XG5pbXBvcnQgdGFncyBmcm9tICcuL2VkaXQtdGFncyc7XG5pbXBvcnQgc2xhdGUgZnJvbSAnLi9lZGl0LXNsYXRlJztcbmltcG9ydCBvcGVuaW5ncyBmcm9tICcuL2VkaXQtb3BlbmluZ3MnO1xuaW1wb3J0IGxpc3QgZnJvbSAnLi9lZGl0LWxpc3QnO1xuaW1wb3J0IGVudSBmcm9tICcuL2VkaXQtZW51bSc7XG5pbXBvcnQgZGF0ZSBmcm9tICcuL2VkaXQtZGF0ZSc7XG5pbXBvcnQgcmVsIGZyb20gJy4vZWRpdC1yZWwnO1xuaW1wb3J0IHJlbExpc3QgZnJvbSAnLi9lZGl0LXJlbC1saXN0JztcbmltcG9ydCBpbnB1dCBmcm9tICcuL2VkaXQtaW5wdXQnO1xuaW1wb3J0IGltYWdlIGZyb20gJy4vZWRpdC1pbWFnZSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi9lZGl0LWNvbG9yJztcbmltcG9ydCB0ZXh0YXJlYSBmcm9tICcuL2VkaXQtdGV4dGFyZWEnO1xuaW1wb3J0IGJvb2wgZnJvbSAnLi9lZGl0LWJvb2wnO1xuaW1wb3J0IGdlb2NvZGUgZnJvbSAnLi9lZGl0LWdlb2NvZGUnO1xuaW1wb3J0IHNsdWcgZnJvbSAnLi9lZGl0LXNsdWcnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNsdWcsXG4gIGdlb2NvZGUsXG4gIGJvb2wsXG4gIHRleHRhcmVhLFxuICBjb2xvcixcbiAgZGF0ZSxcbiAgZW51LFxuICBzdHJpbmdzLFxuICB0YWdzLFxuICBzbGF0ZSxcbiAgb3BlbmluZ3MsXG4gIGxpc3QsXG4gIHJlbCxcbiAgcmVsTGlzdCxcbiAgaW5wdXQsXG4gIGltYWdlLFxufTtcbiJdfQ==
