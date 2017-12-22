var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import Container from './container';

export default _extends({}, Container, {
  type: 'containerText',
  label: 'Container schmal',
  category: 'Layout',
  defaultNodes: function defaultNodes() {
    return ['paragraph'];
  },
  styles: function styles() {
    return {
      maxWidth: '100%',
      ifMediumUp: {
        width: 400
      },
      ifLargeUp: {
        width: 520
      },
      ifHugeUp: {
        width: 640
      }
    };
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9jb250YWluZXItdGV4dC5lczYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwidHlwZSIsImxhYmVsIiwiY2F0ZWdvcnkiLCJkZWZhdWx0Tm9kZXMiLCJzdHlsZXMiLCJtYXhXaWR0aCIsImlmTWVkaXVtVXAiLCJ3aWR0aCIsImlmTGFyZ2VVcCIsImlmSHVnZVVwIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsYUFBdEI7O0FBRUEsNEJBQ0tBLFNBREw7QUFFRUMsUUFBTSxlQUZSO0FBR0VDLFNBQU8sa0JBSFQ7QUFJRUMsWUFBVSxRQUpaO0FBS0VDLGdCQUFjO0FBQUEsV0FBTSxDQUFDLFdBQUQsQ0FBTjtBQUFBLEdBTGhCO0FBTUVDLFVBQVE7QUFBQSxXQUFPO0FBQ2JDLGdCQUFVLE1BREc7QUFFYkMsa0JBQVk7QUFDVkMsZUFBTztBQURHLE9BRkM7QUFLYkMsaUJBQVc7QUFDVEQsZUFBTztBQURFLE9BTEU7QUFRYkUsZ0JBQVU7QUFDUkYsZUFBTztBQURDO0FBUkcsS0FBUDtBQUFBO0FBTlYiLCJmaWxlIjoicGFja2FnZXMvcGFnZXMvYmxvY2tzL2NvbnRhaW5lci10ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4uQ29udGFpbmVyLFxuICB0eXBlOiAnY29udGFpbmVyVGV4dCcsXG4gIGxhYmVsOiAnQ29udGFpbmVyIHNjaG1hbCcsXG4gIGNhdGVnb3J5OiAnTGF5b3V0JyxcbiAgZGVmYXVsdE5vZGVzOiAoKSA9PiBbJ3BhcmFncmFwaCddLFxuICBzdHlsZXM6ICgpID0+ICh7XG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBpZk1lZGl1bVVwOiB7XG4gICAgICB3aWR0aDogNDAwLFxuICAgIH0sXG4gICAgaWZMYXJnZVVwOiB7XG4gICAgICB3aWR0aDogNTIwLFxuICAgIH0sXG4gICAgaWZIdWdlVXA6IHtcbiAgICAgIHdpZHRoOiA2NDAsXG4gICAgfSxcbiAgfSksXG59O1xuIl19
