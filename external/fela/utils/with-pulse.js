import React from 'react';
import { createComponent } from 'react-fela';

export default (function (WrappedComponent) {
  return createComponent(function () {
    return {
      animationName: {
        '0%': {
          opacity: 0.8
        },
        '50%': {
          opacity: 0.4
        },
        '100%': {
          opacity: 0.8
        }
      },
      animationDuration: '1.5s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear'
    };
  }, function (props) {
    return React.createElement(WrappedComponent, props);
  },
  // 'img',
  function (props) {
    return Object.keys(props);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvd2l0aC1wdWxzZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb21wb25lbnQiLCJhbmltYXRpb25OYW1lIiwib3BhY2l0eSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJhbmltYXRpb25UaW1pbmdGdW5jdGlvbiIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsZ0JBQWU7QUFBQSxTQUNiQSxnQkFDRTtBQUFBLFdBQU87QUFDTEMscUJBQWU7QUFDYixjQUFNO0FBQ0pDLG1CQUFTO0FBREwsU0FETztBQUliLGVBQU87QUFDTEEsbUJBQVM7QUFESixTQUpNO0FBT2IsZ0JBQVE7QUFDTkEsbUJBQVM7QUFESDtBQVBLLE9BRFY7QUFZTEMseUJBQW1CLE1BWmQ7QUFhTEMsK0JBQXlCLFVBYnBCO0FBY0xDLCtCQUF5QjtBQWRwQixLQUFQO0FBQUEsR0FERixFQWlCRTtBQUFBLFdBQVMsb0JBQUMsZ0JBQUQsRUFBc0JDLEtBQXRCLENBQVQ7QUFBQSxHQWpCRjtBQWtCRTtBQUNBO0FBQUEsV0FBU0MsT0FBT0MsSUFBUCxDQUFZRixLQUFaLENBQVQ7QUFBQSxHQW5CRixDQURhO0FBQUEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL3V0aWxzL3dpdGgtcHVsc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWRDb21wb25lbnQgPT5cbiAgY3JlYXRlQ29tcG9uZW50KFxuICAgICgpID0+ICh7XG4gICAgICBhbmltYXRpb25OYW1lOiB7XG4gICAgICAgICcwJSc6IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjgsXG4gICAgICAgIH0sXG4gICAgICAgICc1MCUnOiB7XG4gICAgICAgICAgb3BhY2l0eTogMC40LFxuICAgICAgICB9LFxuICAgICAgICAnMTAwJSc6IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjgsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjVzJyxcbiAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgIH0pLFxuICAgIHByb3BzID0+IDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz4sXG4gICAgLy8gJ2ltZycsXG4gICAgcHJvcHMgPT4gT2JqZWN0LmtleXMocHJvcHMpXG4gICk7XG4iXX0=
