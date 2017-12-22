function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import { createComponent } from 'react-fela';

export default createComponent(function (_ref) {
  var theme = _ref.theme,
      height = _ref.height,
      size = _ref.size,
      marginTop = _ref.marginTop;
  return {
    minHeight: 30,
    height: height,
    marginTop: marginTop,
    position: 'relative',
    marginX: 'auto',
    paddingX: theme.space2,
    onAfter: {
      content: '""',
      clear: 'both',
      display: 'block',
      visibility: 'hidden',
      height: 0
    },
    ifMini: {
      width: '100%'
    },
    ifSmallUp: {
      width: 540,
      maxWidth: '100%'
    },
    ifMediumUp: {
      width: 720,
      maxWidth: '100%'
    },
    ifLargeUp: {
      width: 960,
      maxWidth: '100%'
    },
    ifHugeUp: {
      width: 1140,
      maxWidth: '100%'
    },
    extend: [{
      condition: size === 'small',
      style: {
        onAfter: {
          content: '""',
          clear: 'both',
          display: 'block',
          visibility: 'hidden',
          height: 0
        },
        ifMediumUp: {
          width: 400,
          maxWidth: '100%'
        },
        ifLargeUp: {
          width: 520,
          maxWidth: '100%'
        },
        ifHugeUp: {
          width: 640,
          maxWidth: '100%'
        }
      }
    }]
  };
}, 'div', function (_ref2) {
  var height = _ref2.height,
      marginTop = _ref2.marginTop,
      p = _objectWithoutProperties(_ref2, ['height', 'marginTop']);

  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvY29udGFpbmVyLmVzNiJdLCJuYW1lcyI6WyJjcmVhdGVDb21wb25lbnQiLCJ0aGVtZSIsImhlaWdodCIsInNpemUiLCJtYXJnaW5Ub3AiLCJtaW5IZWlnaHQiLCJwb3NpdGlvbiIsIm1hcmdpblgiLCJwYWRkaW5nWCIsInNwYWNlMiIsIm9uQWZ0ZXIiLCJjb250ZW50IiwiY2xlYXIiLCJkaXNwbGF5IiwidmlzaWJpbGl0eSIsImlmTWluaSIsIndpZHRoIiwiaWZTbWFsbFVwIiwibWF4V2lkdGgiLCJpZk1lZGl1bVVwIiwiaWZMYXJnZVVwIiwiaWZIdWdlVXAiLCJleHRlbmQiLCJjb25kaXRpb24iLCJzdHlsZSIsInAiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsZUFBZUEsZ0JBQ2I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxNQUFWLFFBQVVBLE1BQVY7QUFBQSxNQUFrQkMsSUFBbEIsUUFBa0JBLElBQWxCO0FBQUEsTUFBd0JDLFNBQXhCLFFBQXdCQSxTQUF4QjtBQUFBLFNBQXlDO0FBQ3ZDQyxlQUFXLEVBRDRCO0FBRXZDSCxrQkFGdUM7QUFHdkNFLHdCQUh1QztBQUl2Q0UsY0FBVSxVQUo2QjtBQUt2Q0MsYUFBUyxNQUw4QjtBQU12Q0MsY0FBVVAsTUFBTVEsTUFOdUI7QUFPdkNDLGFBQVM7QUFDUEMsZUFBUyxJQURGO0FBRVBDLGFBQU8sTUFGQTtBQUdQQyxlQUFTLE9BSEY7QUFJUEMsa0JBQVksUUFKTDtBQUtQWixjQUFRO0FBTEQsS0FQOEI7QUFjdkNhLFlBQVE7QUFDTkMsYUFBTztBQURELEtBZCtCO0FBaUJ2Q0MsZUFBVztBQUNURCxhQUFPLEdBREU7QUFFVEUsZ0JBQVU7QUFGRCxLQWpCNEI7QUFxQnZDQyxnQkFBWTtBQUNWSCxhQUFPLEdBREc7QUFFVkUsZ0JBQVU7QUFGQSxLQXJCMkI7QUF5QnZDRSxlQUFXO0FBQ1RKLGFBQU8sR0FERTtBQUVURSxnQkFBVTtBQUZELEtBekI0QjtBQTZCdkNHLGNBQVU7QUFDUkwsYUFBTyxJQURDO0FBRVJFLGdCQUFVO0FBRkYsS0E3QjZCO0FBaUN2Q0ksWUFBUSxDQUNOO0FBQ0VDLGlCQUFXcEIsU0FBUyxPQUR0QjtBQUVFcUIsYUFBTztBQUNMZCxpQkFBUztBQUNQQyxtQkFBUyxJQURGO0FBRVBDLGlCQUFPLE1BRkE7QUFHUEMsbUJBQVMsT0FIRjtBQUlQQyxzQkFBWSxRQUpMO0FBS1BaLGtCQUFRO0FBTEQsU0FESjtBQVFMaUIsb0JBQVk7QUFDVkgsaUJBQU8sR0FERztBQUVWRSxvQkFBVTtBQUZBLFNBUlA7QUFZTEUsbUJBQVc7QUFDVEosaUJBQU8sR0FERTtBQUVURSxvQkFBVTtBQUZELFNBWk47QUFnQkxHLGtCQUFVO0FBQ1JMLGlCQUFPLEdBREM7QUFFUkUsb0JBQVU7QUFGRjtBQWhCTDtBQUZULEtBRE07QUFqQytCLEdBQXpDO0FBQUEsQ0FEYSxFQTZEYixLQTdEYSxFQThEYjtBQUFBLE1BQUdoQixNQUFILFNBQUdBLE1BQUg7QUFBQSxNQUFXRSxTQUFYLFNBQVdBLFNBQVg7QUFBQSxNQUF5QnFCLENBQXpCOztBQUFBLFNBQWlDQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBakM7QUFBQSxDQTlEYSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGhlaWdodCwgc2l6ZSwgbWFyZ2luVG9wIH0pID0+ICh7XG4gICAgbWluSGVpZ2h0OiAzMCxcbiAgICBoZWlnaHQsXG4gICAgbWFyZ2luVG9wLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1hcmdpblg6ICdhdXRvJyxcbiAgICBwYWRkaW5nWDogdGhlbWUuc3BhY2UyLFxuICAgIG9uQWZ0ZXI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGNsZWFyOiAnYm90aCcsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgfSxcbiAgICBpZk1pbmk6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICBpZlNtYWxsVXA6IHtcbiAgICAgIHdpZHRoOiA1NDAsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgaWZNZWRpdW1VcDoge1xuICAgICAgd2lkdGg6IDcyMCxcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICBpZkxhcmdlVXA6IHtcbiAgICAgIHdpZHRoOiA5NjAsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgaWZIdWdlVXA6IHtcbiAgICAgIHdpZHRoOiAxMTQwLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIGV4dGVuZDogW1xuICAgICAge1xuICAgICAgICBjb25kaXRpb246IHNpemUgPT09ICdzbWFsbCcsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgb25BZnRlcjoge1xuICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICAgICAgY2xlYXI6ICdib3RoJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlmTWVkaXVtVXA6IHtcbiAgICAgICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWZMYXJnZVVwOiB7XG4gICAgICAgICAgICB3aWR0aDogNTIwLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlmSHVnZVVwOiB7XG4gICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IGhlaWdodCwgbWFyZ2luVG9wLCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbiJdfQ==
