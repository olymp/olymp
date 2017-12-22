import 'antd/lib/icon/style';
import _Icon3 from 'antd/lib/icon';
import 'antd/lib/icon/style';
import _Icon2 from 'antd/lib/icon';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { object, func, number, bool } from 'prop-types';

import { createComponent } from 'react-fela';
import Image from '../image';

var ImageContainer = createComponent(function (_ref) {
  var theme = _ref.theme,
      isActive = _ref.isActive;
  return {
    position: 'relative',
    margin: '.5rem',
    padding: 1,
    cursor: 'pointer',
    display: 'inline-block',
    // outline: isActive ? `3px solid ${theme.color}` : 'none',
    // transform: isActive ? 'scale(1.15)' : 'none',
    transition: 'all .1s ease-in-out',
    backgroundColor: isActive ? theme.color : 'transparent',
    border: isActive ? '1px solid ' + theme.color : '1px solid #ddd',
    // boxShadow: `0px 0px 10px 0px rgba(0, 0, 0, ${isActive ? 0.4 : 0.2})`,
    '> div': {
      opacity: isActive ? 0.8 : 1
    },
    ':hover': {
      // boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.4)',
      transform: 'scale(1.025)',
      transition: 'all .1s ease-in-out'
    }
  };
}, 'div', function (_ref2) {
  var height = _ref2.height,
      isActive = _ref2.isActive,
      p = _objectWithoutProperties(_ref2, ['height', 'isActive']);

  return Object.keys(p);
});

var ImageLabel = createComponent(function (_ref3) {
  var theme = _ref3.theme;
  return {
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%)',
    transition: 'all .15s ease-in-out',
    backgroundColor: theme.color,
    color: '#FFF',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: 25,
    padding: 5,
    lineHeight: 1
    // boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.75)",
  };
}, 'span', function (p) {
  return Object.keys(p);
});

var CheckLabel = createComponent(function (_ref4) {
  var theme = _ref4.theme;
  return {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(40%, -40%) scale(0.667)',
    transition: 'all .15s ease-in-out',
    backgroundColor: theme.color,
    color: '#FFF',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: 25,
    padding: 5,
    lineHeight: 1,
    width: 32,
    height: 32,
    '> *': {
      center: true
    }
  };
}, 'span', function (p) {
  return Object.keys(p);
});

var CloseLabel = createComponent(function (_ref5) {
  var theme = _ref5.theme;
  return {
    ':hover': {
      transform: 'translate(40%, -40%) scale(0.75)',
      transition: 'all .15s ease-in-out'
    }
  };
}, CheckLabel, function (p) {
  return Object.keys(p);
});

var _ref7 = React.createElement(
  ImageLabel,
  null,
  React.createElement(_Icon, { type: 'file-pdf' })
);

var _ref8 = React.createElement(_Icon2, { type: 'close' });

var _ref9 = React.createElement(
  CheckLabel,
  null,
  React.createElement(_Icon3, { type: 'check' })
);

var Thumb = function Thumb(_ref6) {
  var item = _ref6.item,
      width = _ref6.width,
      height = _ref6.height,
      onClick = _ref6.onClick,
      onRemove = _ref6.onRemove,
      isActive = _ref6.isActive;
  return item ? React.createElement(
    ImageContainer,
    { isActive: isActive },
    height ? React.createElement(Image, { value: item, height: height, maxWidth: 300, onClick: onClick }) : null,
    width ? React.createElement(Image, {
      value: _extends({}, item, { width: width, height: item.height / item.width * width }),
      width: '100%',
      onClick: onClick
    }) : null,
    item.format === 'pdf' ? _ref7 : undefined,
    isActive ? onRemove ? React.createElement(
      CloseLabel,
      { onClick: onRemove },
      _ref8
    ) : _ref9 : undefined
  ) : null;
};
Thumb.propTypes = {
  item: object,
  onClick: func,
  onRemove: func,
  height: number,
  isActive: bool
};
export default Thumb;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvY29tcG9uZW50cy90aHVtYi5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJvYmplY3QiLCJmdW5jIiwibnVtYmVyIiwiYm9vbCIsImNyZWF0ZUNvbXBvbmVudCIsIkltYWdlIiwiSW1hZ2VDb250YWluZXIiLCJ0aGVtZSIsImlzQWN0aXZlIiwicG9zaXRpb24iLCJtYXJnaW4iLCJwYWRkaW5nIiwiY3Vyc29yIiwiZGlzcGxheSIsInRyYW5zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlciIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJoZWlnaHQiLCJwIiwiT2JqZWN0Iiwia2V5cyIsIkltYWdlTGFiZWwiLCJ0b3AiLCJyaWdodCIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibGluZUhlaWdodCIsIkNoZWNrTGFiZWwiLCJ3aWR0aCIsImNlbnRlciIsIkNsb3NlTGFiZWwiLCJUaHVtYiIsIml0ZW0iLCJvbkNsaWNrIiwib25SZW1vdmUiLCJmb3JtYXQiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLE1BQVQsRUFBaUJDLElBQWpCLEVBQXVCQyxNQUF2QixFQUErQkMsSUFBL0IsUUFBMkMsWUFBM0M7O0FBRUEsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLE9BQU9DLEtBQVAsTUFBa0IsVUFBbEI7O0FBRUEsSUFBTUMsaUJBQWlCRixnQkFDckI7QUFBQSxNQUFHRyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSxTQUEwQjtBQUN4QkMsY0FBVSxVQURjO0FBRXhCQyxZQUFRLE9BRmdCO0FBR3hCQyxhQUFTLENBSGU7QUFJeEJDLFlBQVEsU0FKZ0I7QUFLeEJDLGFBQVMsY0FMZTtBQU14QjtBQUNBO0FBQ0FDLGdCQUFZLHFCQVJZ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SUFBZCxFQUFvQixRQUFRaEIsTUFBNUIsRUFBb0MsVUFBVSxHQUE5QyxFQUFtRCxTQUFTaUIsT0FBNUQsR0FERCxHQUVHLElBSE47QUFJR0wsWUFDQyxvQkFBQyxLQUFEO0FBQ0UsMEJBQVlJLElBQVosSUFBa0JKLFlBQWxCLEVBQXlCWixRQUFRZ0IsS0FBS2hCLE1BQUwsR0FBY2dCLEtBQUtKLEtBQW5CLEdBQTJCQSxLQUE1RCxHQURGO0FBRUUsYUFBTSxNQUZSO0FBR0UsZUFBU0s7QUFIWCxNQURELEdBTUcsSUFWTjtBQVdHRCxTQUFLRyxNQUFMLEtBQWdCLEtBQWhCLFdBS0NDLFNBaEJKO0FBa0JHaEMsZUFDQzhCLFdBQ0U7QUFBQyxnQkFBRDtBQUFBLFFBQVksU0FBU0EsUUFBckI7QUFBQTtBQUFBLEtBREYsUUFERCxHQVdDRTtBQTdCSixHQURGLEdBaUNJLElBbENRO0FBQUEsQ0FBZDtBQW1DQUwsTUFBTU0sU0FBTixHQUFrQjtBQUNoQkwsUUFBTXBDLE1BRFU7QUFFaEJxQyxXQUFTcEMsSUFGTztBQUdoQnFDLFlBQVVyQyxJQUhNO0FBSWhCbUIsVUFBUWxCLE1BSlE7QUFLaEJNLFlBQVVMO0FBTE0sQ0FBbEI7QUFPQSxlQUFlZ0MsS0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jbG91ZGluYXJ5L2NvbXBvbmVudHMvdGh1bWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2JqZWN0LCBmdW5jLCBudW1iZXIsIGJvb2wgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL2ltYWdlJztcblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBpc0FjdGl2ZSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1hcmdpbjogJy41cmVtJyxcbiAgICBwYWRkaW5nOiAxLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIC8vIG91dGxpbmU6IGlzQWN0aXZlID8gYDNweCBzb2xpZCAke3RoZW1lLmNvbG9yfWAgOiAnbm9uZScsXG4gICAgLy8gdHJhbnNmb3JtOiBpc0FjdGl2ZSA/ICdzY2FsZSgxLjE1KScgOiAnbm9uZScsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAuMXMgZWFzZS1pbi1vdXQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogaXNBY3RpdmUgPyB0aGVtZS5jb2xvciA6ICd0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyOiBpc0FjdGl2ZSA/IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcn1gIDogJzFweCBzb2xpZCAjZGRkJyxcbiAgICAvLyBib3hTaGFkb3c6IGAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgJHtpc0FjdGl2ZSA/IDAuNCA6IDAuMn0pYCxcbiAgICAnPiBkaXYnOiB7XG4gICAgICBvcGFjaXR5OiBpc0FjdGl2ZSA/IDAuOCA6IDEsXG4gICAgfSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgLy8gYm94U2hhZG93OiAnMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4wMjUpJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgLjFzIGVhc2UtaW4tb3V0JyxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IGhlaWdodCwgaXNBY3RpdmUsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBJbWFnZUxhYmVsID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgcmlnaHQ6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSg1MCUsIC01MCUpJyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIC4xNXMgZWFzZS1pbi1vdXQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgY29sb3I6ICcjRkZGJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZm9udFNpemU6IDI1LFxuICAgIHBhZGRpbmc6IDUsXG4gICAgbGluZUhlaWdodDogMSxcbiAgICAvLyBib3hTaGFkb3c6IFwiMHB4IDBweCAxMnB4IDBweCByZ2JhKDAsMCwwLDAuNzUpXCIsXG4gIH0pLFxuICAnc3BhbicsXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBDaGVja0xhYmVsID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoNDAlLCAtNDAlKSBzY2FsZSgwLjY2NyknLFxuICAgIHRyYW5zaXRpb246ICdhbGwgLjE1cyBlYXNlLWluLW91dCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcixcbiAgICBjb2xvcjogJyNGRkYnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmb250U2l6ZTogMjUsXG4gICAgcGFkZGluZzogNSxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIHdpZHRoOiAzMixcbiAgICBoZWlnaHQ6IDMyLFxuICAgICc+IConOiB7XG4gICAgICBjZW50ZXI6IHRydWUsXG4gICAgfSxcbiAgfSksXG4gICdzcGFuJyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IENsb3NlTGFiZWwgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgJzpob3Zlcic6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSg0MCUsIC00MCUpIHNjYWxlKDAuNzUpJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgLjE1cyBlYXNlLWluLW91dCcsXG4gICAgfSxcbiAgfSksXG4gIENoZWNrTGFiZWwsXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBUaHVtYiA9ICh7IGl0ZW0sIHdpZHRoLCBoZWlnaHQsIG9uQ2xpY2ssIG9uUmVtb3ZlLCBpc0FjdGl2ZSB9KSA9PlxuICBpdGVtID8gKFxuICAgIDxJbWFnZUNvbnRhaW5lciBpc0FjdGl2ZT17aXNBY3RpdmV9PlxuICAgICAge2hlaWdodCA/IChcbiAgICAgICAgPEltYWdlIHZhbHVlPXtpdGVtfSBoZWlnaHQ9e2hlaWdodH0gbWF4V2lkdGg9ezMwMH0gb25DbGljaz17b25DbGlja30gLz5cbiAgICAgICkgOiBudWxsfVxuICAgICAge3dpZHRoID8gKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICB2YWx1ZT17eyAuLi5pdGVtLCB3aWR0aCwgaGVpZ2h0OiBpdGVtLmhlaWdodCAvIGl0ZW0ud2lkdGggKiB3aWR0aCB9fVxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgLz5cbiAgICAgICkgOiBudWxsfVxuICAgICAge2l0ZW0uZm9ybWF0ID09PSAncGRmJyA/IChcbiAgICAgICAgPEltYWdlTGFiZWw+XG4gICAgICAgICAgPEljb24gdHlwZT1cImZpbGUtcGRmXCIgLz5cbiAgICAgICAgPC9JbWFnZUxhYmVsPlxuICAgICAgKSA6IChcbiAgICAgICAgdW5kZWZpbmVkXG4gICAgICApfVxuICAgICAge2lzQWN0aXZlID8gKFxuICAgICAgICBvblJlbW92ZSA/IChcbiAgICAgICAgICA8Q2xvc2VMYWJlbCBvbkNsaWNrPXtvblJlbW92ZX0+XG4gICAgICAgICAgICA8SWNvbiB0eXBlPVwiY2xvc2VcIiAvPlxuICAgICAgICAgIDwvQ2xvc2VMYWJlbD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q2hlY2tMYWJlbD5cbiAgICAgICAgICAgIDxJY29uIHR5cGU9XCJjaGVja1wiIC8+XG4gICAgICAgICAgPC9DaGVja0xhYmVsPlxuICAgICAgICApXG4gICAgICApIDogKFxuICAgICAgICB1bmRlZmluZWRcbiAgICAgICl9XG4gICAgPC9JbWFnZUNvbnRhaW5lcj5cbiAgKSA6IG51bGw7XG5UaHVtYi5wcm9wVHlwZXMgPSB7XG4gIGl0ZW06IG9iamVjdCxcbiAgb25DbGljazogZnVuYyxcbiAgb25SZW1vdmU6IGZ1bmMsXG4gIGhlaWdodDogbnVtYmVyLFxuICBpc0FjdGl2ZTogYm9vbCxcbn07XG5leHBvcnQgZGVmYXVsdCBUaHVtYjtcbiJdfQ==
