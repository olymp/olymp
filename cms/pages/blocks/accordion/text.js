var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'olymp-fela';
import { withQueryParam } from 'olymp-router';

var Text = createComponent(function (_ref) {
  var theme = _ref.theme,
      isOpen = _ref.isOpen;
  return {
    /* marginY: theme.space3,
    paddingRight: theme.space3, */
    display: !isOpen && 'none'
  };
}, 'div', function (_ref2) {
  var isOpen = _ref2.isOpen,
      p = _objectWithoutProperties(_ref2, ['isOpen']);

  return Object.keys(p);
});

export default {
  type: 'accordionText',
  isVoid: false,
  kind: 'block',
  label: 'Text',
  defaultNodes: ['paragraph'],
  component: withQueryParam('accordion')(function (_ref3) {
    var className = _ref3.className,
        attributes = _ref3.attributes,
        children = _ref3.children,
        accordion = _ref3.accordion,
        parent = _ref3.parent;
    return React.createElement(
      Text,
      _extends({ className: className, isOpen: accordion === parent.data.get('id') }, attributes),
      children
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9hY2NvcmRpb24vdGV4dC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb21wb25lbnQiLCJ3aXRoUXVlcnlQYXJhbSIsIlRleHQiLCJ0aGVtZSIsImlzT3BlbiIsImRpc3BsYXkiLCJwIiwiT2JqZWN0Iiwia2V5cyIsInR5cGUiLCJpc1ZvaWQiLCJraW5kIiwibGFiZWwiLCJkZWZhdWx0Tm9kZXMiLCJjb21wb25lbnQiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJhY2NvcmRpb24iLCJwYXJlbnQiLCJkYXRhIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7QUFDQSxTQUFTQyxjQUFULFFBQStCLGNBQS9COztBQUVBLElBQU1DLE9BQU9GLGdCQUNYO0FBQUEsTUFBR0csS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsTUFBVixRQUFVQSxNQUFWO0FBQUEsU0FBd0I7QUFDdEI7O0FBRUFDLGFBQVMsQ0FBQ0QsTUFBRCxJQUFXO0FBSEUsR0FBeEI7QUFBQSxDQURXLEVBTVgsS0FOVyxFQU9YO0FBQUEsTUFBR0EsTUFBSCxTQUFHQSxNQUFIO0FBQUEsTUFBY0UsQ0FBZDs7QUFBQSxTQUFzQkMsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQXRCO0FBQUEsQ0FQVyxDQUFiOztBQVVBLGVBQWU7QUFDYkcsUUFBTSxlQURPO0FBRWJDLFVBQVEsS0FGSztBQUdiQyxRQUFNLE9BSE87QUFJYkMsU0FBTyxNQUpNO0FBS2JDLGdCQUFjLENBQUMsV0FBRCxDQUxEO0FBTWJDLGFBQVdiLGVBQ1QsV0FEUyxFQUVUO0FBQUEsUUFBR2MsU0FBSCxTQUFHQSxTQUFIO0FBQUEsUUFBY0MsVUFBZCxTQUFjQSxVQUFkO0FBQUEsUUFBMEJDLFFBQTFCLFNBQTBCQSxRQUExQjtBQUFBLFFBQW9DQyxTQUFwQyxTQUFvQ0EsU0FBcEM7QUFBQSxRQUErQ0MsTUFBL0MsU0FBK0NBLE1BQS9DO0FBQUEsV0FDQTtBQUFDLFVBQUQ7QUFBQSxpQkFBTSxXQUFXSixTQUFqQixFQUE0QixRQUFRRyxjQUFjQyxPQUFPQyxJQUFQLENBQVlDLEdBQVosQ0FBZ0IsSUFBaEIsQ0FBbEQsSUFBNkVMLFVBQTdFO0FBQ0dDO0FBREgsS0FEQTtBQUFBLEdBRlM7QUFORSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9hY2NvcmRpb24vdGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IHdpdGhRdWVyeVBhcmFtIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcblxuY29uc3QgVGV4dCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICAgIC8qIG1hcmdpblk6IHRoZW1lLnNwYWNlMyxcbiAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNlMywgKi9cbiAgICBkaXNwbGF5OiAhaXNPcGVuICYmICdub25lJyxcbiAgfSksXG4gICdkaXYnLFxuICAoeyBpc09wZW4sIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdhY2NvcmRpb25UZXh0JyxcbiAgaXNWb2lkOiBmYWxzZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdUZXh0JyxcbiAgZGVmYXVsdE5vZGVzOiBbJ3BhcmFncmFwaCddLFxuICBjb21wb25lbnQ6IHdpdGhRdWVyeVBhcmFtKFxuICAgICdhY2NvcmRpb24nLFxuICApKCh7IGNsYXNzTmFtZSwgYXR0cmlidXRlcywgY2hpbGRyZW4sIGFjY29yZGlvbiwgcGFyZW50IH0pID0+IChcbiAgICA8VGV4dCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaXNPcGVuPXthY2NvcmRpb24gPT09IHBhcmVudC5kYXRhLmdldCgnaWQnKX0gey4uLmF0dHJpYnV0ZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGV4dD5cbiAgKSksXG59O1xuIl19
