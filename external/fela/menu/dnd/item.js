'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _item = require('../item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getItemStyle = function getItemStyle(draggableStyle, isDragging) {
  return _extends({
    // change background colour if dragging
    backgroundColor: isDragging ? '#88888878' : undefined,
    borderRadius: 5
  }, draggableStyle);
};

exports.default = function (_ref) {
  var children = _ref.children,
      id = _ref.id,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['children', 'id', 'onClick']);

  return _react2.default.createElement(
    _reactBeautifulDnd.Draggable,
    { draggableId: id },
    function (provided, snapshot) {
      var onClickNew = onClick ? function () {
        // dragHandleProps might be null
        if (!provided.dragHandleProps) {
          return onClick;
        }
        return function (event) {
          provided.dragHandleProps.onClick(event);
          onClick(event);
        };
      }() : provided.dragHandleProps.onClickDrag;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _item2.default,
          _extends({
            _ref: provided.innerRef,
            style: getItemStyle(provided.draggableStyle, snapshot.isDragging)
          }, props, provided.dragHandleProps, {
            onClick: onClickNew
          }),
          children
        ),
        provided.placeholder
      );
    }
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9kbmQvaXRlbS5lczYiXSwibmFtZXMiOlsiZ2V0SXRlbVN0eWxlIiwiZHJhZ2dhYmxlU3R5bGUiLCJpc0RyYWdnaW5nIiwiYmFja2dyb3VuZENvbG9yIiwidW5kZWZpbmVkIiwiYm9yZGVyUmFkaXVzIiwiY2hpbGRyZW4iLCJpZCIsIm9uQ2xpY2siLCJwcm9wcyIsInByb3ZpZGVkIiwic25hcHNob3QiLCJvbkNsaWNrTmV3IiwiZHJhZ0hhbmRsZVByb3BzIiwiZXZlbnQiLCJvbkNsaWNrRHJhZyIsImlubmVyUmVmIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsY0FBRCxFQUFpQkMsVUFBakI7QUFBQTtBQUNuQjtBQUNBQyxxQkFBaUJELGFBQWEsV0FBYixHQUEyQkUsU0FGekI7QUFHbkJDLGtCQUFjO0FBSEssS0FJaEJKLGNBSmdCO0FBQUEsQ0FBckI7O2tCQU9lO0FBQUEsTUFBR0ssUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsRUFBYixRQUFhQSxFQUFiO0FBQUEsTUFBaUJDLE9BQWpCLFFBQWlCQSxPQUFqQjtBQUFBLE1BQTZCQyxLQUE3Qjs7QUFBQSxTQUNiO0FBQUE7QUFBQSxNQUFXLGFBQWFGLEVBQXhCO0FBQ0csY0FBQ0csUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQ3ZCLFVBQU1DLGFBQWFKLFVBQ2QsWUFBTTtBQUNMO0FBQ0EsWUFBSSxDQUFDRSxTQUFTRyxlQUFkLEVBQStCO0FBQzdCLGlCQUFPTCxPQUFQO0FBQ0Q7QUFDRCxlQUFPLGlCQUFTO0FBQ2RFLG1CQUFTRyxlQUFULENBQXlCTCxPQUF6QixDQUFpQ00sS0FBakM7QUFDQU4sa0JBQVFNLEtBQVI7QUFDRCxTQUhEO0FBSUQsT0FURCxFQURlLEdBV2ZKLFNBQVNHLGVBQVQsQ0FBeUJFLFdBWDdCO0FBWUEsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxrQkFBTUwsU0FBU00sUUFEakI7QUFFRSxtQkFBT2hCLGFBQWFVLFNBQVNULGNBQXRCLEVBQXNDVSxTQUFTVCxVQUEvQztBQUZULGFBR01PLEtBSE4sRUFJTUMsU0FBU0csZUFKZjtBQUtFLHFCQUFTRDtBQUxYO0FBT0dOO0FBUEgsU0FERjtBQVVHSSxpQkFBU087QUFWWixPQURGO0FBY0Q7QUE1QkgsR0FEYTtBQUFBLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9tZW51L2RuZC9pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vaXRlbSc7XG5cbmNvbnN0IGdldEl0ZW1TdHlsZSA9IChkcmFnZ2FibGVTdHlsZSwgaXNEcmFnZ2luZykgPT4gKHtcbiAgLy8gY2hhbmdlIGJhY2tncm91bmQgY29sb3VyIGlmIGRyYWdnaW5nXG4gIGJhY2tncm91bmRDb2xvcjogaXNEcmFnZ2luZyA/ICcjODg4ODg4NzgnIDogdW5kZWZpbmVkLFxuICBib3JkZXJSYWRpdXM6IDUsXG4gIC4uLmRyYWdnYWJsZVN0eWxlLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCBpZCwgb25DbGljaywgLi4ucHJvcHMgfSkgPT4gKFxuICA8RHJhZ2dhYmxlIGRyYWdnYWJsZUlkPXtpZH0+XG4gICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IHtcbiAgICAgIGNvbnN0IG9uQ2xpY2tOZXcgPSBvbkNsaWNrXG4gICAgICAgID8gKCgpID0+IHtcbiAgICAgICAgICAgIC8vIGRyYWdIYW5kbGVQcm9wcyBtaWdodCBiZSBudWxsXG4gICAgICAgICAgICBpZiAoIXByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wcykge1xuICAgICAgICAgICAgICByZXR1cm4gb25DbGljaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBldmVudCA9PiB7XG4gICAgICAgICAgICAgIHByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgb25DbGljayhldmVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pKClcbiAgICAgICAgOiBwcm92aWRlZC5kcmFnSGFuZGxlUHJvcHMub25DbGlja0RyYWc7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICBfcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbiAgICAgICAgICAgIHN0eWxlPXtnZXRJdGVtU3R5bGUocHJvdmlkZWQuZHJhZ2dhYmxlU3R5bGUsIHNuYXBzaG90LmlzRHJhZ2dpbmcpfVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tOZXd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9fVxuICA8L0RyYWdnYWJsZT5cbik7XG4iXX0=
