import 'antd/lib/button/style';
import _Button from 'antd/lib/button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { createComponent } from 'olymp-fela';


var Button = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    paddingTop: 1,
    backgroundColor: theme.dark5,
    borderWidth: 0,
    color: theme.dark3,
    onHover: {
      borderWidth: 1
    },
    onActive: {
      borderWidth: 1
    },
    onFocus: {
      borderWidth: 1
    },
    '> *': {
      marginTop: 1
    }
  };
}, function (p) {
  return React.createElement(_Button, _extends({ size: 'large' }, p));
}, function (p) {
  return Object.keys(p);
});

export default Button;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL3NpZGViYXIvYnV0dG9uLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsIkJ1dHRvbiIsInRoZW1lIiwicGFkZGluZ1RvcCIsImJhY2tncm91bmRDb2xvciIsImRhcms1IiwiYm9yZGVyV2lkdGgiLCJjb2xvciIsImRhcmszIiwib25Ib3ZlciIsIm9uQWN0aXZlIiwib25Gb2N1cyIsIm1hcmdpblRvcCIsInAiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDOzs7QUFHQSxJQUFNQyxTQUFTRCxnQkFDYjtBQUFBLE1BQUdFLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLGdCQUFZLENBREU7QUFFZEMscUJBQWlCRixNQUFNRyxLQUZUO0FBR2RDLGlCQUFhLENBSEM7QUFJZEMsV0FBT0wsTUFBTU0sS0FKQztBQUtkQyxhQUFTO0FBQ1BILG1CQUFhO0FBRE4sS0FMSztBQVFkSSxjQUFVO0FBQ1JKLG1CQUFhO0FBREwsS0FSSTtBQVdkSyxhQUFTO0FBQ1BMLG1CQUFhO0FBRE4sS0FYSztBQWNkLFdBQU87QUFDTE0saUJBQVc7QUFETjtBQWRPLEdBQWhCO0FBQUEsQ0FEYSxFQW1CYjtBQUFBLFNBQUssd0NBQVcsTUFBSyxPQUFoQixJQUE0QkMsQ0FBNUIsRUFBTDtBQUFBLENBbkJhLEVBb0JiO0FBQUEsU0FBS0MsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQUw7QUFBQSxDQXBCYSxDQUFmOztBQXVCQSxlQUFlWixNQUFmIiwiZmlsZSI6InBhY2thZ2VzL3VpL3NpZGViYXIvYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgQnV0dG9uIGFzIEFudEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBCdXR0b24gPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcGFkZGluZ1RvcDogMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRhcms1LFxuICAgIGJvcmRlcldpZHRoOiAwLFxuICAgIGNvbG9yOiB0aGVtZS5kYXJrMyxcbiAgICBvbkhvdmVyOiB7XG4gICAgICBib3JkZXJXaWR0aDogMSxcbiAgICB9LFxuICAgIG9uQWN0aXZlOiB7XG4gICAgICBib3JkZXJXaWR0aDogMSxcbiAgICB9LFxuICAgIG9uRm9jdXM6IHtcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIH0sXG4gICAgJz4gKic6IHtcbiAgICAgIG1hcmdpblRvcDogMSxcbiAgICB9LFxuICB9KSxcbiAgcCA9PiA8QW50QnV0dG9uIHNpemU9XCJsYXJnZVwiIHsuLi5wfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ==
