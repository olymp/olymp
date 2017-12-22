var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Children, cloneElement } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import createComponent from '../utils/create-component';

var Div = function Div(_ref) {
  var toggled = _ref.toggled,
      onToggle = _ref.onToggle,
      props = _objectWithoutProperties(_ref, ['toggled', 'onToggle']);

  return React.createElement('div', _extends({}, props, { onClick: onToggle }));
};

var _ref4 = React.createElement('span', null);

var _ref5 = React.createElement('span', null);

var _ref6 = React.createElement('span', null);

var _ref7 = React.createElement('span', null);

var Button = createComponent(function (_ref2) {
  var theme = _ref2.theme,
      toggled = _ref2.toggled,
      inverse = _ref2.inverse,
      _ref2$size = _ref2.size,
      size = _ref2$size === undefined ? 20 : _ref2$size;
  return {
    position: 'absolute',
    top: theme.space4,
    right: theme.space4,
    // float: 'right',
    // padding: theme.space2,
    // margin: theme.space3,
    width: Math.round(size * 1.3),
    height: size,
    cursor: 'pointer',
    ifSmallUp: {
      display: 'none'
    },
    '> span': {
      display: 'block',
      position: 'absolute',
      height: Math.round(size / 6),
      borderRadius: Math.round(size / 6),
      width: '100%',
      background: inverse ? theme.light : theme.color,
      left: 0,
      transform: 'rotate(0deg)',
      transition: '.25s ease-in-out',
      ':nth-child(1)': {
        top: toggled ? Math.round(size / 3) : 0,
        width: toggled && '0%',
        left: toggled && '50%'
      },
      ':nth-child(2)': {
        top: Math.round(size / 3),
        transform: toggled && 'rotate(45deg)'
      },
      ':nth-child(3)': {
        top: Math.round(size / 3),
        transform: toggled && 'rotate(-45deg)'
      },
      ':nth-child(4)': {
        top: toggled ? Math.round(size / 3) : Math.round(size / 3) * 2,
        width: toggled && '0%',
        left: toggled && '50%'
      }
    }
  };
}, function (_ref3) {
  var className = _ref3.className,
      onToggle = _ref3.onToggle,
      toggled = _ref3.toggled,
      Comp = _ref3.toggleComponent;
  return React.createElement(
    Comp,
    { className: className, onToggle: onToggle, toggled: toggled },
    _ref4,
    _ref5,
    _ref6,
    _ref7
  );
}, function (p) {
  return Object.keys(p);
});

var Container = createComponent(function (_ref8) {
  var toggled = _ref8.toggled;
  return {
    width: '100%',
    ifMini: {
      '> div:nth-child(2)': {
        clear: 'both',
        transform: toggled ? 'scaleY(1)' : 'scaleY(0)',
        maxHeight: toggled ? 500 : 0,
        overflow: 'auto',
        transformOrigin: 'top',
        transition: 'all 0.25s ease-in-out'
      }
    }
  };
}, 'div', []);

var Toggler = function Toggler(_ref9) {
  var className = _ref9.className,
      children = _ref9.children,
      toggled = _ref9.toggled,
      toggleComponent = _ref9.toggleComponent,
      onToggle = _ref9.onToggle,
      props = _objectWithoutProperties(_ref9, ['className', 'children', 'toggled', 'toggleComponent', 'onToggle']);

  return React.createElement(
    Container,
    { className: cn(className, 'o-nav-toggle'), toggled: toggled },
    React.createElement(Button, {
      toggled: toggled,
      toggleComponent: toggleComponent,
      onToggle: onToggle
    }),
    Children.map(children, function (child) {
      return cloneElement(child, props);
    })
  );
};
Toggler.propTypes = {
  // toggleComponent: PropTypes.node,
  onToggle: PropTypes.func,
  toggled: PropTypes.bool
};
Toggler.defaultProps = {
  toggleComponent: Div,
  onToggle: undefined,
  toggled: false
};
Toggler.displayName = 'Toggler';
export default Toggler;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbmF2YmFyL3RvZ2dsZXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hpbGRyZW4iLCJjbG9uZUVsZW1lbnQiLCJjbiIsIlByb3BUeXBlcyIsImNyZWF0ZUNvbXBvbmVudCIsIkRpdiIsInRvZ2dsZWQiLCJvblRvZ2dsZSIsInByb3BzIiwiQnV0dG9uIiwidGhlbWUiLCJpbnZlcnNlIiwic2l6ZSIsInBvc2l0aW9uIiwidG9wIiwic3BhY2U0IiwicmlnaHQiLCJ3aWR0aCIsIk1hdGgiLCJyb3VuZCIsImhlaWdodCIsImN1cnNvciIsImlmU21hbGxVcCIsImRpc3BsYXkiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwibGlnaHQiLCJjb2xvciIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwiY2xhc3NOYW1lIiwiQ29tcCIsInRvZ2dsZUNvbXBvbmVudCIsIk9iamVjdCIsImtleXMiLCJwIiwiQ29udGFpbmVyIiwiaWZNaW5pIiwiY2xlYXIiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsInRyYW5zZm9ybU9yaWdpbiIsIlRvZ2dsZXIiLCJjaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwicHJvcFR5cGVzIiwiZnVuYyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLEVBQTBCQyxZQUExQixRQUE4QyxPQUE5QztBQUNBLE9BQU9DLEVBQVAsTUFBZSxZQUFmO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsMkJBQTVCOztBQUVBLElBQU1DLE1BQU0sU0FBTkEsR0FBTTtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlDLFFBQVosUUFBWUEsUUFBWjtBQUFBLE1BQXlCQyxLQUF6Qjs7QUFBQSxTQUNWLHdDQUFTQSxLQUFULElBQWdCLFNBQVNELFFB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LFVBQVUsU0FBVkEsT0FBVTtBQUFBLE1BQ2RaLFNBRGMsU0FDZEEsU0FEYztBQUFBLE1BRWRhLFFBRmMsU0FFZEEsUUFGYztBQUFBLE1BR2R0QyxPQUhjLFNBR2RBLE9BSGM7QUFBQSxNQUlkMkIsZUFKYyxTQUlkQSxlQUpjO0FBQUEsTUFLZDFCLFFBTGMsU0FLZEEsUUFMYztBQUFBLE1BTVhDLEtBTlc7O0FBQUEsU0FRZDtBQUFDLGFBQUQ7QUFBQSxNQUFXLFdBQVdOLEdBQUc2QixTQUFILEVBQWMsY0FBZCxDQUF0QixFQUFxRCxTQUFTekIsT0FBOUQ7QUFDRSx3QkFBQyxNQUFEO0FBQ0UsZUFBU0EsT0FEWDtBQUVFLHVCQUFpQjJCLGVBRm5CO0FBR0UsZ0JBQVUxQjtBQUhaLE1BREY7QUFNR1AsYUFBUzZDLEdBQVQsQ0FBYUQsUUFBYixFQUF1QjtBQUFBLGFBQVMzQyxhQUFhNkMsS0FBYixFQUFvQnRDLEtBQXBCLENBQVQ7QUFBQSxLQUF2QjtBQU5ILEdBUmM7QUFBQSxDQUFoQjtBQWlCQW1DLFFBQVFJLFNBQVIsR0FBb0I7QUFDbEI7QUFDQXhDLFlBQVVKLFVBQVU2QyxJQUZGO0FBR2xCMUMsV0FBU0gsVUFBVThDO0FBSEQsQ0FBcEI7QUFLQU4sUUFBUU8sWUFBUixHQUF1QjtBQUNyQmpCLG1CQUFpQjVCLEdBREk7QUFFckJFLFlBQVU0QyxTQUZXO0FBR3JCN0MsV0FBUztBQUhZLENBQXZCO0FBS0FxQyxRQUFRUyxXQUFSLEdBQXNCLFNBQXRCO0FBQ0EsZUFBZVQsT0FBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL25hdmJhci90b2dnbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNyZWF0ZUNvbXBvbmVudCBmcm9tICcuLi91dGlscy9jcmVhdGUtY29tcG9uZW50JztcblxuY29uc3QgRGl2ID0gKHsgdG9nZ2xlZCwgb25Ub2dnbGUsIC4uLnByb3BzIH0pID0+IChcbiAgPGRpdiB7Li4ucHJvcHN9IG9uQ2xpY2s9e29uVG9nZ2xlfSAvPlxuKTtcblxuY29uc3QgQnV0dG9uID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgdG9nZ2xlZCwgaW52ZXJzZSwgc2l6ZSA9IDIwIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiB0aGVtZS5zcGFjZTQsXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNlNCxcbiAgICAvLyBmbG9hdDogJ3JpZ2h0JyxcbiAgICAvLyBwYWRkaW5nOiB0aGVtZS5zcGFjZTIsXG4gICAgLy8gbWFyZ2luOiB0aGVtZS5zcGFjZTMsXG4gICAgd2lkdGg6IE1hdGgucm91bmQoc2l6ZSAqIDEuMyksXG4gICAgaGVpZ2h0OiBzaXplLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGlmU21hbGxVcDoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gICAgJz4gc3Bhbic6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGhlaWdodDogTWF0aC5yb3VuZChzaXplIC8gNiksXG4gICAgICBib3JkZXJSYWRpdXM6IE1hdGgucm91bmQoc2l6ZSAvIDYpLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmQ6IGludmVyc2UgPyB0aGVtZS5saWdodCA6IHRoZW1lLmNvbG9yLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScsXG4gICAgICB0cmFuc2l0aW9uOiAnLjI1cyBlYXNlLWluLW91dCcsXG4gICAgICAnOm50aC1jaGlsZCgxKSc6IHtcbiAgICAgICAgdG9wOiB0b2dnbGVkID8gTWF0aC5yb3VuZChzaXplIC8gMykgOiAwLFxuICAgICAgICB3aWR0aDogdG9nZ2xlZCAmJiAnMCUnLFxuICAgICAgICBsZWZ0OiB0b2dnbGVkICYmICc1MCUnLFxuICAgICAgfSxcbiAgICAgICc6bnRoLWNoaWxkKDIpJzoge1xuICAgICAgICB0b3A6IE1hdGgucm91bmQoc2l6ZSAvIDMpLFxuICAgICAgICB0cmFuc2Zvcm06IHRvZ2dsZWQgJiYgJ3JvdGF0ZSg0NWRlZyknLFxuICAgICAgfSxcbiAgICAgICc6bnRoLWNoaWxkKDMpJzoge1xuICAgICAgICB0b3A6IE1hdGgucm91bmQoc2l6ZSAvIDMpLFxuICAgICAgICB0cmFuc2Zvcm06IHRvZ2dsZWQgJiYgJ3JvdGF0ZSgtNDVkZWcpJyxcbiAgICAgIH0sXG4gICAgICAnOm50aC1jaGlsZCg0KSc6IHtcbiAgICAgICAgdG9wOiB0b2dnbGVkID8gTWF0aC5yb3VuZChzaXplIC8gMykgOiBNYXRoLnJvdW5kKHNpemUgLyAzKSAqIDIsXG4gICAgICAgIHdpZHRoOiB0b2dnbGVkICYmICcwJScsXG4gICAgICAgIGxlZnQ6IHRvZ2dsZWQgJiYgJzUwJScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIG9uVG9nZ2xlLCB0b2dnbGVkLCB0b2dnbGVDb21wb25lbnQ6IENvbXAgfSkgPT4gKFxuICAgIDxDb21wIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvblRvZ2dsZT17b25Ub2dnbGV9IHRvZ2dsZWQ9e3RvZ2dsZWR9PlxuICAgICAgPHNwYW4gLz5cbiAgICAgIDxzcGFuIC8+XG4gICAgICA8c3BhbiAvPlxuICAgICAgPHNwYW4gLz5cbiAgICA8L0NvbXA+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRvZ2dsZWQgfSkgPT4gKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGlmTWluaToge1xuICAgICAgJz4gZGl2Om50aC1jaGlsZCgyKSc6IHtcbiAgICAgICAgY2xlYXI6ICdib3RoJyxcbiAgICAgICAgdHJhbnNmb3JtOiB0b2dnbGVkID8gJ3NjYWxlWSgxKScgOiAnc2NhbGVZKDApJyxcbiAgICAgICAgbWF4SGVpZ2h0OiB0b2dnbGVkID8gNTAwIDogMCxcbiAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlLWluLW91dCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgW10sXG4pO1xuXG5jb25zdCBUb2dnbGVyID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgdG9nZ2xlZCxcbiAgdG9nZ2xlQ29tcG9uZW50LFxuICBvblRvZ2dsZSxcbiAgLi4ucHJvcHNcbn0pID0+IChcbiAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgJ28tbmF2LXRvZ2dsZScpfSB0b2dnbGVkPXt0b2dnbGVkfT5cbiAgICA8QnV0dG9uXG4gICAgICB0b2dnbGVkPXt0b2dnbGVkfVxuICAgICAgdG9nZ2xlQ29tcG9uZW50PXt0b2dnbGVDb21wb25lbnR9XG4gICAgICBvblRvZ2dsZT17b25Ub2dnbGV9XG4gICAgLz5cbiAgICB7Q2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBjbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKSl9XG4gIDwvQ29udGFpbmVyPlxuKTtcblRvZ2dsZXIucHJvcFR5cGVzID0ge1xuICAvLyB0b2dnbGVDb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLFxuICBvblRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRvZ2dsZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcblRvZ2dsZXIuZGVmYXVsdFByb3BzID0ge1xuICB0b2dnbGVDb21wb25lbnQ6IERpdixcbiAgb25Ub2dnbGU6IHVuZGVmaW5lZCxcbiAgdG9nZ2xlZDogZmFsc2UsXG59O1xuVG9nZ2xlci5kaXNwbGF5TmFtZSA9ICdUb2dnbGVyJztcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZXI7XG4iXX0=
