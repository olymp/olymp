'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _geocode = require('olymp-google/edits/geocode');

var _geocode2 = _interopRequireDefault(_geocode);

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.name === 'Geocode';
  },
  form: (0, _recompose.toClass)(function (_ref2) {
    var type = _ref2.type,
        props = _objectWithoutProperties(_ref2, ['type']);

    return _react2.default.createElement(
      _formItem2.default,
      props,
      _react2.default.createElement(_geocode2.default, props)
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtZ2VvY29kZS5lczYiXSwibmFtZXMiOlsicnVsZSIsImlubmVyVHlwZSIsIm5hbWUiLCJmb3JtIiwidHlwZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O2tCQUVlO0FBQ2JBLFFBQU07QUFBQSxRQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxXQUFtQkEsVUFBVUMsSUFBVixLQUFtQixTQUF0QztBQUFBLEdBRE87QUFFYkMsUUFBTSx3QkFBUTtBQUFBLFFBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFFBQVlDLEtBQVo7O0FBQUEsV0FDWjtBQUFBO0FBQWNBLFdBQWQ7QUFDRSx1REFBbUJBLEtBQW5CO0FBREYsS0FEWTtBQUFBLEdBQVI7QUFGTyxDIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL2VkaXQtZ2VvY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b0NsYXNzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCBHZW9jb2RlRWRpdG9yIGZyb20gJ29seW1wLWdvb2dsZS9lZGl0cy9nZW9jb2RlJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZTogKHsgaW5uZXJUeXBlIH0pID0+IGlubmVyVHlwZS5uYW1lID09PSAnR2VvY29kZScsXG4gIGZvcm06IHRvQ2xhc3MoKHsgdHlwZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxGb3JtSXRlbSB7Li4ucHJvcHN9PlxuICAgICAgPEdlb2NvZGVFZGl0b3Igey4uLnByb3BzfSAvPlxuICAgIDwvRm9ybUl0ZW0+XG4gICkpLFxufTtcbiJdfQ==
