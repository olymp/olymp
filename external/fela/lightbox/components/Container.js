'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Container(_ref, _ref2) {
  var theme = _ref2.theme;

  var props = _objectWithoutProperties(_ref, []);

  var classes = _noImportant.StyleSheet.create((0, _utils.deepMerge)(defaultStyles, theme));

  return _react2.default.createElement('div', _extends({ id: 'lightboxBackdrop', className: (0, _noImportant.css)(classes.container) }, props));
}

Container.contextTypes = {
  theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
  container: {
    alignItems: 'center',
    backgroundColor: _theme2.default.container.background,
    boxSizing: 'border-box',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    paddingBottom: _theme2.default.container.gutter.vertical,
    paddingLeft: _theme2.default.container.gutter.horizontal,
    paddingRight: _theme2.default.container.gutter.horizontal,
    paddingTop: _theme2.default.container.gutter.vertical,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: _theme2.default.container.zIndex
  }
};

exports.default = Container;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9Db250YWluZXIuZXM2Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInRoZW1lIiwicHJvcHMiLCJjbGFzc2VzIiwiY3JlYXRlIiwiZGVmYXVsdFN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRleHRUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsImJveFNpemluZyIsImRpc3BsYXkiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImxlZnQiLCJwYWRkaW5nQm90dG9tIiwiZ3V0dGVyIiwidmVydGljYWwiLCJwYWRkaW5nTGVmdCIsImhvcml6b250YWwiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nVG9wIiwicG9zaXRpb24iLCJ0b3AiLCJ3aWR0aCIsInpJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsU0FBVCxjQUE0QztBQUFBLE1BQVRDLEtBQVMsU0FBVEEsS0FBUzs7QUFBQSxNQUFwQkMsS0FBb0I7O0FBQzFDLE1BQU1DLFVBQVUsd0JBQVdDLE1BQVgsQ0FBa0Isc0JBQVVDLGFBQVYsRUFBeUJKLEtBQXpCLENBQWxCLENBQWhCOztBQUVBLFNBQU8sZ0RBQUssSUFBRyxrQkFBUixFQUEyQixXQUFXLHNCQUFJRSxRQUFRRyxTQUFaLENBQXRDLElBQWtFSixLQUFsRSxFQUFQO0FBQ0Q7O0FBRURGLFVBQVVPLFlBQVYsR0FBeUI7QUFDdkJOLFNBQU8sb0JBQVVPLE1BQVYsQ0FBaUJDO0FBREQsQ0FBekI7O0FBSUEsSUFBTUosZ0JBQWdCO0FBQ3BCQyxhQUFXO0FBQ1RJLGdCQUFZLFFBREg7QUFFVEMscUJBQWlCLGdCQUFTTCxTQUFULENBQW1CTSxVQUYzQjtBQUdUQyxlQUFXLFlBSEY7QUFJVEMsYUFBUyxNQUpBO0FBS1RDLFlBQVEsTUFMQztBQU1UQyxvQkFBZ0IsUUFOUDtBQU9UQyxVQUFNLENBUEc7QUFRVEMsbUJBQWUsZ0JBQVNaLFNBQVQsQ0FBbUJhLE1BQW5CLENBQTBCQyxRQVJoQztBQVNUQyxpQkFBYSxnQkFBU2YsU0FBVCxDQUFtQmEsTUFBbkIsQ0FBMEJHLFVBVDlCO0FBVVRDLGtCQUFjLGdCQUFTakIsU0FBVCxDQUFtQmEsTUFBbkIsQ0FBMEJHLFVBVi9CO0FBV1RFLGdCQUFZLGdCQUFTbEIsU0FBVCxDQUFtQmEsTUFBbkIsQ0FBMEJDLFFBWDdCO0FBWVRLLGNBQVUsT0FaRDtBQWFUQyxTQUFLLENBYkk7QUFjVEMsV0FBTyxNQWRFO0FBZVRDLFlBQVEsZ0JBQVN0QixTQUFULENBQW1Cc0I7QUFmbEI7QUFEUyxDQUF0Qjs7a0JBb0JlNUIsUyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL2xpZ2h0Ym94L2NvbXBvbmVudHMvQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcblxuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uL3V0aWxzJztcblxuZnVuY3Rpb24gQ29udGFpbmVyKHsgLi4ucHJvcHMgfSwgeyB0aGVtZSB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZShkZWVwTWVyZ2UoZGVmYXVsdFN0eWxlcywgdGhlbWUpKTtcblxuICByZXR1cm4gPGRpdiBpZD1cImxpZ2h0Ym94QmFja2Ryb3BcIiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmNvbnRhaW5lcil9IHsuLi5wcm9wc30gLz47XG59XG5cbkNvbnRhaW5lci5jb250ZXh0VHlwZXMgPSB7XG4gIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBkZWZhdWx0U3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGRlZmF1bHRzLmNvbnRhaW5lci5iYWNrZ3JvdW5kLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbGVmdDogMCxcbiAgICBwYWRkaW5nQm90dG9tOiBkZWZhdWx0cy5jb250YWluZXIuZ3V0dGVyLnZlcnRpY2FsLFxuICAgIHBhZGRpbmdMZWZ0OiBkZWZhdWx0cy5jb250YWluZXIuZ3V0dGVyLmhvcml6b250YWwsXG4gICAgcGFkZGluZ1JpZ2h0OiBkZWZhdWx0cy5jb250YWluZXIuZ3V0dGVyLmhvcml6b250YWwsXG4gICAgcGFkZGluZ1RvcDogZGVmYXVsdHMuY29udGFpbmVyLmd1dHRlci52ZXJ0aWNhbCxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB6SW5kZXg6IGRlZmF1bHRzLmNvbnRhaW5lci56SW5kZXgsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iXX0=
