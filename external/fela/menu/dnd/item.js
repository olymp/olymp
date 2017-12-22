var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Item from '../item';

var getItemStyle = function getItemStyle(draggableStyle, isDragging) {
  return _extends({
    // change background colour if dragging
    backgroundColor: isDragging ? '#88888878' : undefined,
    borderRadius: 5
  }, draggableStyle);
};

export default (function (_ref) {
  var children = _ref.children,
      id = _ref.id,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['children', 'id', 'onClick']);

  return React.createElement(
    Draggable,
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
      return React.createElement(
        'div',
        null,
        React.createElement(
          Item,
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
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS9kbmQvaXRlbS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJEcmFnZ2FibGUiLCJJdGVtIiwiZ2V0SXRlbVN0eWxlIiwiZHJhZ2dhYmxlU3R5bGUiLCJpc0RyYWdnaW5nIiwiYmFja2dyb3VuZENvbG9yIiwidW5kZWZpbmVkIiwiYm9yZGVyUmFkaXVzIiwiY2hpbGRyZW4iLCJpZCIsIm9uQ2xpY2siLCJwcm9wcyIsInByb3ZpZGVkIiwic25hcHNob3QiLCJvbkNsaWNrTmV3IiwiZHJhZ0hhbmRsZVByb3BzIiwiZXZlbnQiLCJvbkNsaWNrRHJhZyIsImlubmVyUmVmIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixxQkFBMUI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFNBQWpCOztBQUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxjQUFELEVBQWlCQyxVQUFqQjtBQUFBO0FBQ25CO0FBQ0FDLHFCQUFpQkQsYUFBYSxXQUFiLEdBQTJCRSxTQUZ6QjtBQUduQkMsa0JBQWM7QUFISyxLQUloQkosY0FKZ0I7QUFBQSxDQUFyQjs7QUFPQSxnQkFBZTtBQUFBLE1BQUdLLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLEVBQWIsUUFBYUEsRUFBYjtBQUFBLE1BQWlCQyxPQUFqQixRQUFpQkEsT0FBakI7QUFBQSxNQUE2QkMsS0FBN0I7O0FBQUEsU0FDYjtBQUFDLGFBQUQ7QUFBQSxNQUFXLGFBQWFGLEVBQXhCO0FBQ0csY0FBQ0csUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQ3ZCLFVBQU1DLGFBQWFKLFVBQ2QsWUFBTTtBQUNMO0FBQ0EsWUFBSSxDQUFDRSxTQUFTRyxlQUFkLEVBQStCO0FBQzdCLGlCQUFPTCxPQUFQO0FBQ0Q7QUFDRCxlQUFPLGlCQUFTO0FBQ2RFLG1CQUFTRyxlQUFULENBQXlCTCxPQUF6QixDQUFpQ00sS0FBakM7QUFDQU4sa0JBQVFNLEtBQVI7QUFDRCxTQUhEO0FBSUQsT0FURCxFQURlLEdBV2ZKLFNBQVNHLGVBQVQsQ0FBeUJFLFdBWDdCO0FBWUEsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLGNBQUQ7QUFBQTtBQUNFLGtCQUFNTCxTQUFTTSxRQURqQjtBQUVFLG1CQUFPaEIsYUFBYVUsU0FBU1QsY0FBdEIsRUFBc0NVLFNBQVNULFVBQS9DO0FBRlQsYUFHTU8sS0FITixFQUlNQyxTQUFTRyxlQUpmO0FBS0UscUJBQVNEO0FBTFg7QUFPR047QUFQSCxTQURGO0FBVUdJLGlCQUFTTztBQVZaLE9BREY7QUFjRDtBQTVCSCxHQURhO0FBQUEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL21lbnUvZG5kL2l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5pbXBvcnQgSXRlbSBmcm9tICcuLi9pdGVtJztcblxuY29uc3QgZ2V0SXRlbVN0eWxlID0gKGRyYWdnYWJsZVN0eWxlLCBpc0RyYWdnaW5nKSA9PiAoe1xuICAvLyBjaGFuZ2UgYmFja2dyb3VuZCBjb2xvdXIgaWYgZHJhZ2dpbmdcbiAgYmFja2dyb3VuZENvbG9yOiBpc0RyYWdnaW5nID8gJyM4ODg4ODg3OCcgOiB1bmRlZmluZWQsXG4gIGJvcmRlclJhZGl1czogNSxcbiAgLi4uZHJhZ2dhYmxlU3R5bGUsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIGlkLCBvbkNsaWNrLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxEcmFnZ2FibGUgZHJhZ2dhYmxlSWQ9e2lkfT5cbiAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4ge1xuICAgICAgY29uc3Qgb25DbGlja05ldyA9IG9uQ2xpY2tcbiAgICAgICAgPyAoKCkgPT4ge1xuICAgICAgICAgICAgLy8gZHJhZ0hhbmRsZVByb3BzIG1pZ2h0IGJlIG51bGxcbiAgICAgICAgICAgIGlmICghcHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvbkNsaWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgcHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAgICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkoKVxuICAgICAgICA6IHByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wcy5vbkNsaWNrRHJhZztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgIF9yZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgc3R5bGU9e2dldEl0ZW1TdHlsZShwcm92aWRlZC5kcmFnZ2FibGVTdHlsZSwgc25hcHNob3QuaXNEcmFnZ2luZyl9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja05ld31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH19XG4gIDwvRHJhZ2dhYmxlPlxuKTtcbiJdfQ==
