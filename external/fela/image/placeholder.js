import React from 'react';
import PropTypes from 'prop-types';
import { withAmp } from 'olymp-utils';
import { createComponent, withTheme } from 'react-fela';

var Image = createComponent(function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      theme = _ref.theme,
      circle = _ref.circle;
  return {
    width: width,
    height: height,
    backgroundColor: theme.dark5,
    borderRadius: circle ? '50%' : 0,
    '> img': {
      opacity: 0.4,
      center: true,
      transition: 'opacity 0.5s ease-in-out',
      maxWidth: '33%'
    },
    '> svg': {
      opacity: 0.4,
      center: true,
      transition: 'opacity 0.5s ease-in-out',
      maxWidth: '33%'
    },
    onHover: {
      '> img': {
        opacity: 0.8
      },
      '> svg': {
        opacity: 0.8
      }
    }
  };
}, withAmp(withTheme(function (_ref2) {
  var className = _ref2.className,
      theme = _ref2.theme,
      amp = _ref2.amp;
  return React.createElement(
    'div',
    { className: className },
    !amp && typeof theme.logo === 'string' && React.createElement('img', { src: theme.logo, alt: 'placeholder' }),
    !amp && typeof theme.logo === 'function' && theme.logo()
  );
})), ['onClick', 'amp']);
Image.displayName = 'Placeholder';
Image.propTypes = {
  circle: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Image.defaultProps = {
  circle: false,
  width: undefined,
  height: undefined
};
export default Image;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvaW1hZ2UvcGxhY2Vob2xkZXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwid2l0aEFtcCIsImNyZWF0ZUNvbXBvbmVudCIsIndpdGhUaGVtZSIsIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJ0aGVtZSIsImNpcmNsZSIsImJhY2tncm91bmRDb2xvciIsImRhcms1IiwiYm9yZGVyUmFkaXVzIiwib3BhY2l0eSIsImNlbnRlciIsInRyYW5zaXRpb24iLCJtYXhXaWR0aCIsIm9uSG92ZXIiLCJjbGFzc05hbWUiLCJhbXAiLCJsb2dvIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJib29sIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7QUFDQSxTQUFTQyxlQUFULEVBQTBCQyxTQUExQixRQUEyQyxZQUEzQzs7QUFFQSxJQUFNQyxRQUFRRixnQkFDWjtBQUFBLE1BQUdHLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLE1BQVYsUUFBVUEsTUFBVjtBQUFBLE1BQWtCQyxLQUFsQixRQUFrQkEsS0FBbEI7QUFBQSxNQUF5QkMsTUFBekIsUUFBeUJBLE1BQXpCO0FBQUEsU0FBdUM7QUFDckNILGdCQURxQztBQUVyQ0Msa0JBRnFDO0FBR3JDRyxxQkFBaUJGLE1BQU1HLEtBSGM7QUFJckNDLGtCQUFjSCxTQUFTLEtBQVQsR0FBaUIsQ0FKTTtBQUtyQyxhQUFTO0FBQ1BJLGVBQVMsR0FERjtBQUVQQyxjQUFRLElBRkQ7QUFHUEMsa0JBQVksMEJBSEw7QUFJUEMsZ0JBQVU7QUFKSCxLQUw0QjtBQVdyQyxhQUFTO0FBQ1BILGVBQVMsR0FERjtBQUVQQyxjQUFRLElBRkQ7QUFHUEMsa0JBQVksMEJBSEw7QUFJUEMsZ0JBQVU7QUFKSCxLQVg0QjtBQWlCckNDLGFBQVM7QUFDUCxlQUFTO0FBQ1BKLGlCQUFTO0FBREYsT0FERjtBQUlQLGVBQVM7QUFDUEEsaUJBQVM7QUFERjtBQUpGO0FBakI0QixHQUF2QztBQUFBLENBRFksRUEyQlpYLFFBQ0VFLFVBQVU7QUFBQSxNQUFHYyxTQUFILFNBQUdBLFNBQUg7QUFBQSxNQUFjVixLQUFkLFNBQWNBLEtBQWQ7QUFBQSxNQUFxQlcsR0FBckIsU0FBcUJBLEdBQXJCO0FBQUEsU0FDUjtBQUFBO0FBQUEsTUFBSyxXQUFXRCxTQUFoQjtBQUNHLEtBQUNDLEdBQUQsSUFDQyxPQUFPWCxNQUFNWSxJQUFiLEtBQXNCLFFBRHZCLElBRUcsNkJBQUssS0FBS1osTUFBTVksSUFBaEIsRUFBc0IsS0FBSSxhQUExQixHQUhOO0FBS0csS0FBQ0QsR0FBRCxJQUFRLE9BQU9YLE1BQU1ZLElBQWIsS0FBc0IsVUFBOUIsSUFBNENaLE1BQU1ZLElBQU47QUFML0MsR0FEUTtBQUFBLENBQVYsQ0FERixDQTNCWSxFQXNDWixDQUFDLFNBQUQsRUFBWSxLQUFaLENBdENZLENBQWQ7QUF3Q0FmLE1BQU1nQixXQUFOLEdBQW9CLGFBQXBCO0FBQ0FoQixNQUFNaUIsU0FBTixHQUFrQjtBQUNoQmIsVUFBUVIsVUFBVXNCLElBREY7QUFFaEJqQixTQUFPTCxVQUFVdUIsU0FBVixDQUFvQixDQUFDdkIsVUFBVXdCLE1BQVgsRUFBbUJ4QixVQUFVeUIsTUFBN0IsQ0FBcEIsQ0FGUztBQUdoQm5CLFVBQVFOLFVBQVV1QixTQUFWLENBQW9CLENBQUN2QixVQUFVd0IsTUFBWCxFQUFtQnhCLFVBQVV5QixNQUE3QixDQUFwQjtBQUhRLENBQWxCO0FBS0FyQixNQUFNc0IsWUFBTixHQUFxQjtBQUNuQmxCLFVBQVEsS0FEVztBQUVuQkgsU0FBT3NCLFNBRlk7QUFHbkJyQixVQUFRcUI7QUFIVyxDQUFyQjtBQUtBLGVBQWV2QixLQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvaW1hZ2UvcGxhY2Vob2xkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhBbXAgfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQsIHdpdGhUaGVtZSB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5jb25zdCBJbWFnZSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgd2lkdGgsIGhlaWdodCwgdGhlbWUsIGNpcmNsZSB9KSA9PiAoe1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRhcms1LFxuICAgIGJvcmRlclJhZGl1czogY2lyY2xlID8gJzUwJScgOiAwLFxuICAgICc+IGltZyc6IHtcbiAgICAgIG9wYWNpdHk6IDAuNCxcbiAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQnLFxuICAgICAgbWF4V2lkdGg6ICczMyUnLFxuICAgIH0sXG4gICAgJz4gc3ZnJzoge1xuICAgICAgb3BhY2l0eTogMC40LFxuICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC41cyBlYXNlLWluLW91dCcsXG4gICAgICBtYXhXaWR0aDogJzMzJScsXG4gICAgfSxcbiAgICBvbkhvdmVyOiB7XG4gICAgICAnPiBpbWcnOiB7XG4gICAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgIH0sXG4gICAgICAnPiBzdmcnOiB7XG4gICAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIHdpdGhBbXAoXG4gICAgd2l0aFRoZW1lKCh7IGNsYXNzTmFtZSwgdGhlbWUsIGFtcCB9KSA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgeyFhbXAgJiZcbiAgICAgICAgICB0eXBlb2YgdGhlbWUubG9nbyA9PT0gJ3N0cmluZycgJiYgKFxuICAgICAgICAgICAgPGltZyBzcmM9e3RoZW1lLmxvZ299IGFsdD1cInBsYWNlaG9sZGVyXCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICB7IWFtcCAmJiB0eXBlb2YgdGhlbWUubG9nbyA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGVtZS5sb2dvKCl9XG4gICAgICA8L2Rpdj5cbiAgICApKSxcbiAgKSxcbiAgWydvbkNsaWNrJywgJ2FtcCddLFxuKTtcbkltYWdlLmRpc3BsYXlOYW1lID0gJ1BsYWNlaG9sZGVyJztcbkltYWdlLnByb3BUeXBlcyA9IHtcbiAgY2lyY2xlOiBQcm9wVHlwZXMuYm9vbCxcbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59O1xuSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICBjaXJjbGU6IGZhbHNlLFxuICB3aWR0aDogdW5kZWZpbmVkLFxuICBoZWlnaHQ6IHVuZGVmaW5lZCxcbn07XG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcbiJdfQ==
