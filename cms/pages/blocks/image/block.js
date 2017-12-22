var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import cn from 'classnames';
import Image from './image';
import Label from './label';

export default {
  type: 'imageWithLabel',
  isVoid: false,
  kind: 'block',
  defaultNodes: function defaultNodes() {
    return [Image, Label];
  },
  label: 'Bild mit Text',
  category: 'Bilder',
  styles: function styles() {
    return {
      position: 'relative'
    };
  },
  component: function component(_ref) {
    var className = _ref.className,
        children = _ref.children,
        attributes = _ref.attributes;
    return React.createElement(
      'div',
      _extends({ className: cn(className, 'image-with-label-block') }, attributes),
      children
    );
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9pbWFnZS9ibG9jay5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjbiIsIkltYWdlIiwiTGFiZWwiLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImRlZmF1bHROb2RlcyIsImxhYmVsIiwiY2F0ZWdvcnkiLCJzdHlsZXMiLCJwb3NpdGlvbiIsImNvbXBvbmVudCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiYXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLFNBQWxCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixTQUFsQjs7QUFFQSxlQUFlO0FBQ2JDLFFBQU0sZ0JBRE87QUFFYkMsVUFBUSxLQUZLO0FBR2JDLFFBQU0sT0FITztBQUliQyxnQkFBYztBQUFBLFdBQU0sQ0FBQ0wsS0FBRCxFQUFRQyxLQUFSLENBQU47QUFBQSxHQUpEO0FBS2JLLFNBQU8sZUFMTTtBQU1iQyxZQUFVLFFBTkc7QUFPYkMsVUFBUTtBQUFBLFdBQU87QUFDYkMsZ0JBQVU7QUFERyxLQUFQO0FBQUEsR0FQSztBQVViQyxhQUFXO0FBQUEsUUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsUUFBY0MsUUFBZCxRQUFjQSxRQUFkO0FBQUEsUUFBd0JDLFVBQXhCLFFBQXdCQSxVQUF4QjtBQUFBLFdBQ1Q7QUFBQTtBQUFBLGlCQUFLLFdBQVdkLEdBQUdZLFNBQUgsRUFBYyx3QkFBZCxDQUFoQixJQUE2REUsVUFBN0Q7QUFDR0Q7QUFESCxLQURTO0FBQUE7QUFWRSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9pbWFnZS9ibG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9sYWJlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ2ltYWdlV2l0aExhYmVsJyxcbiAgaXNWb2lkOiBmYWxzZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgZGVmYXVsdE5vZGVzOiAoKSA9PiBbSW1hZ2UsIExhYmVsXSxcbiAgbGFiZWw6ICdCaWxkIG1pdCBUZXh0JyxcbiAgY2F0ZWdvcnk6ICdCaWxkZXInLFxuICBzdHlsZXM6ICgpID0+ICh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH0pLFxuICBjb21wb25lbnQ6ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGF0dHJpYnV0ZXMgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsICdpbWFnZS13aXRoLWxhYmVsLWJsb2NrJyl9IHsuLi5hdHRyaWJ1dGVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKSxcbn07XG4iXX0=
