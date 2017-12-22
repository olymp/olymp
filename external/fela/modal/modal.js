import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'react-fela';

import Portal from '../portal';

var ModalBackground = createComponent(function (_ref) {
  var theme = _ref.theme,
      backgroundColor = _ref.backgroundColor;
  return _extends({
    position: 'fixed',
    overflow: 'auto',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: backgroundColor || theme.dark2
  }, _get(theme, 'modalBackdrop', {}));
}, 'div', ['onClick']);

var Modal = createComponent(function (_ref2) {
  var theme = _ref2.theme,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? 500 : _ref2$width,
      height = _ref2.height,
      _ref2$scroll = _ref2.scroll,
      scroll = _ref2$scroll === undefined ? false : _ref2$scroll;
  return {
    position: 'static',
    overflow: 'hidden',
    // display: 'none',
    zIndex: 1001,
    // top: '50%',
    margin: 'auto',
    left: '50%',
    background: '#fff',
    border: 'none',
    transformOrigin: '50% 25%',
    userSelect: 'text',
    willChange: 'top,left,margin,transform,opacity',
    width: width === 'fill' ? '90%' : width,
    animationName: {
      from: {
        opacity: 0,
        transform: 'translateY(60px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0px)'
      }
    },
    animationIterationCount: 1,
    animationDuration: '.3s',
    animationTimingFunction: 'ease',
    animationFillMode: 'both',
    backgroundColor: theme.light,
    // boxShadow: theme.boxShadow,
    // border: `1px solid ${theme.dark1}`,
    borderRadius: theme.borderRadius,
    extend: scroll ? {
      minHeight: 500
    } : {
      marginTop: height === '100%' ? 0 : 50,
      height: height || '90%'
    }
  };
}, 'div', ['onClick']);

export default (function (_ref3) {
  var children = _ref3.children,
      open = _ref3.open,
      _ref3$portal = _ref3.portal,
      portal = _ref3$portal === undefined ? false : _ref3$portal,
      _ref3$noScroll = _ref3.noScroll,
      noScroll = _ref3$noScroll === undefined ? true : _ref3$noScroll,
      onClose = _ref3.onClose,
      backgroundColor = _ref3.backgroundColor,
      props = _objectWithoutProperties(_ref3, ['children', 'open', 'portal', 'noScroll', 'onClose', 'backgroundColor']);

  return open === undefined || open ? React.createElement(
    Portal,
    { noScroll: noScroll, noPortal: !portal },
    React.createElement(
      ModalBackground,
      {
        backgroundColor: backgroundColor,
        onClick: function onClick(e) {
          e.stopPropagation();
          onClose(e);
        }
      },
      React.createElement(
        Modal,
        _extends({}, props, {
          onClick: function onClick(e) {
            // e.cancelBubble = true;
            if (e.stopPropagation) {
              e.stopPropagation();
            }
          }
        }),
        children
      )
    )
  ) : null;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbW9kYWwvbW9kYWwuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29tcG9uZW50IiwiUG9ydGFsIiwiTW9kYWxCYWNrZ3JvdW5kIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiekluZGV4IiwiZGFyazIiLCJNb2RhbCIsIndpZHRoIiwiaGVpZ2h0Iiwic2Nyb2xsIiwibWFyZ2luIiwiYmFja2dyb3VuZCIsImJvcmRlciIsInRyYW5zZm9ybU9yaWdpbiIsInVzZXJTZWxlY3QiLCJ3aWxsQ2hhbmdlIiwiYW5pbWF0aW9uTmFtZSIsImZyb20iLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwidG8iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJhbmltYXRpb25GaWxsTW9kZSIsImxpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZXh0ZW5kIiwibWluSGVpZ2h0IiwibWFyZ2luVG9wIiwiY2hpbGRyZW4iLCJvcGVuIiwicG9ydGFsIiwibm9TY3JvbGwiLCJvbkNsb3NlIiwicHJvcHMiLCJ1bmRlZmluZWQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQzs7QUFFQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztBQUVBLElBQU1DLGtCQUFrQkYsZ0JBQ3RCO0FBQUEsTUFBR0csS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsZUFBVixRQUFVQSxlQUFWO0FBQUE7QUFDRUMsY0FBVSxPQURaO0FBRUVDLGNBQVUsTUFGWjtBQUdFQyxTQUFLLENBSFA7QUFJRUMsVUFBTSxDQUpSO0FBS0VDLFlBQVEsQ0FMVjtBQU1FQyxXQUFPLENBTlQ7QUFPRUMsWUFBUSxJQVBWO0FBUUVQLHFCQUFpQkEsbUJBQW1CRCxNQUFNUztBQVI1QyxLQVNLLEtBQUlULEtBQUosRUFBVyxlQUFYLEVBQTRCLEVBQTVCLENBVEw7QUFBQSxDQURzQixFQVl0QixLQVpzQixFQWF0QixDQUFDLFNBQUQsQ0Fic0IsQ0FBeEI7O0FBZ0JBLElBQU1VLFFBQVFiLGdCQUNaO0FBQUEsTUFBR0csS0FBSCxTQUFHQSxLQUFIO0FBQUEsMEJBQVVXLEtBQVY7QUFBQSxNQUFVQSxLQUFWLCtCQUFrQixHQUFsQjtBQUFBLE1BQXVCQyxNQUF2QixTQUF1QkEsTUFBdkI7QUFBQSwyQkFBK0JDLE1BQS9CO0FBQUEsTUFBK0JBLE1BQS9CLGdDQUF3QyxLQUF4QztBQUFBLFNBQXFEO0FBQ25EWCxjQUFVLFFBRHlDO0FBRW5EQyxjQUFVLFFBRnlDO0FBR25EO0FBQ0FLLFlBQVEsSUFKMkM7QUFLbkQ7QUFDQU0sWUFBUSxNQU4yQztBQU9uRFQsVUFBTSxLQVA2QztBQVFuRFUsZ0JBQVksTUFSdUM7QUFTbkRDLFlBQVEsTUFUMkM7QUFVbkRDLHFCQUFpQixTQVZrQztBQVduREMsZ0JBQVksTUFYdUM7QUFZbkRDLGdCQUFZLG1DQVp1QztBQWFuRFIsV0FBT0EsVUFBVSxNQUFWLEdBQW1CLEtBQW5CLEdBQTJCQSxLQWJpQjtBQWNuRFMsbUJBQWU7QUFDYkMsWUFBTTtBQUNKQyxpQkFBUyxDQURMO0FBRUpDLG1CQUFXO0FBRlAsT0FETztBQUtiQyxVQUFJO0FBQ0ZGLGlCQUFTLENBRFA7QUFFRkMsbUJBQVc7QUFGVDtBQUxTLEtBZG9DO0FBd0JuREUsNkJBQXlCLENBeEIwQjtBQXlCbkRDLHVCQUFtQixLQXpCZ0M7QUEwQm5EQyw2QkFBeUIsTUExQjBCO0FBMkJuREMsdUJBQW1CLE1BM0JnQztBQTRCbkQzQixxQkFBaUJELE1BQU02QixLQTVCNEI7QUE2Qm5EO0FBQ0E7QUFDQUMsa0JBQWM5QixNQUFNOEIsWUEvQitCO0FBZ0NuREMsWUFBUWxCLFNBQ0o7QUFDRW1CLGlCQUFXO0FBRGIsS0FESSxHQUlKO0FBQ0VDLGlCQUFXckIsV0FBVyxNQUFYLEdBQW9CLENBQXBCLEdBQXdCLEVBRHJDO0FBRUVBLGNBQVFBLFVBQVU7QUFGcEI7QUFwQytDLEdBQXJEO0FBQUEsQ0FEWSxFQTBDWixLQTFDWSxFQTJDWixDQUFDLFNBQUQsQ0EzQ1ksQ0FBZDs7QUE4Q0EsZ0JBQWU7QUFBQSxNQUNic0IsUUFEYSxTQUNiQSxRQURhO0FBQUEsTUFFYkMsSUFGYSxTQUViQSxJQUZhO0FBQUEsMkJBR2JDLE1BSGE7QUFBQSxNQUdiQSxNQUhhLGdDQUdKLEtBSEk7QUFBQSw2QkFJYkMsUUFKYTtBQUFBLE1BSWJBLFFBSmEsa0NBSUYsSUFKRTtBQUFBLE1BS2JDLE9BTGEsU0FLYkEsT0FMYTtBQUFBLE1BTWJyQyxlQU5hLFNBTWJBLGVBTmE7QUFBQSxNQU9Wc0MsS0FQVTs7QUFBQSxTQVNiSixTQUFTSyxTQUFULElBQXNCTCxJQUF0QixHQUNFO0FBQUMsVUFBRDtBQUFBLE1BQVEsVUFBVUUsUUFBbEIsRUFBNEIsVUFBVSxDQUFDRCxNQUF2QztBQUNFO0FBQUMscUJBQUQ7QUFBQTtBQUNFLHlCQUFpQm5DLGVBRG5CO0FBRUUsaUJBQVMsb0JBQUs7QUFDWndDLFlBQUVDLGVBQUY7QUFDQUosa0JBQVFHLENBQVI7QUFDRDtBQUxIO0FBT0U7QUFBQyxhQUFEO0FBQUEscUJBQ01GLEtBRE47QUFFRSxtQkFBUyxvQkFBSztBQUNaO0FBQ0EsZ0JBQUlFLEVBQUVDLGVBQU4sRUFBdUI7QUFDckJELGdCQUFFQyxlQUFGO0FBQ0Q7QUFDRjtBQVBIO0FBU0dSO0FBVEg7QUFQRjtBQURGLEdBREYsR0FzQkksSUEvQlM7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbW9kYWwvbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi9wb3J0YWwnO1xuXG5jb25zdCBNb2RhbEJhY2tncm91bmQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBiYWNrZ3JvdW5kQ29sb3IgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IgfHwgdGhlbWUuZGFyazIsXG4gICAgLi4uZ2V0KHRoZW1lLCAnbW9kYWxCYWNrZHJvcCcsIHt9KSxcbiAgfSksXG4gICdkaXYnLFxuICBbJ29uQ2xpY2snXSxcbik7XG5cbmNvbnN0IE1vZGFsID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgd2lkdGggPSA1MDAsIGhlaWdodCwgc2Nyb2xsID0gZmFsc2UgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ3N0YXRpYycsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIC8vIGRpc3BsYXk6ICdub25lJyxcbiAgICB6SW5kZXg6IDEwMDEsXG4gICAgLy8gdG9wOiAnNTAlJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDI1JScsXG4gICAgdXNlclNlbGVjdDogJ3RleHQnLFxuICAgIHdpbGxDaGFuZ2U6ICd0b3AsbGVmdCxtYXJnaW4sdHJhbnNmb3JtLG9wYWNpdHknLFxuICAgIHdpZHRoOiB3aWR0aCA9PT0gJ2ZpbGwnID8gJzkwJScgOiB3aWR0aCxcbiAgICBhbmltYXRpb25OYW1lOiB7XG4gICAgICBmcm9tOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoNjBweCknLFxuICAgICAgfSxcbiAgICAgIHRvOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMHB4KScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICcuM3MnLFxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXG4gICAgYW5pbWF0aW9uRmlsbE1vZGU6ICdib3RoJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmxpZ2h0LFxuICAgIC8vIGJveFNoYWRvdzogdGhlbWUuYm94U2hhZG93LFxuICAgIC8vIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmRhcmsxfWAsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgZXh0ZW5kOiBzY3JvbGxcbiAgICAgID8ge1xuICAgICAgICAgIG1pbkhlaWdodDogNTAwLFxuICAgICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgICBtYXJnaW5Ub3A6IGhlaWdodCA9PT0gJzEwMCUnID8gMCA6IDUwLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0IHx8ICc5MCUnLFxuICAgICAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gIFsnb25DbGljayddLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgY2hpbGRyZW4sXG4gIG9wZW4sXG4gIHBvcnRhbCA9IGZhbHNlLFxuICBub1Njcm9sbCA9IHRydWUsXG4gIG9uQ2xvc2UsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgLi4ucHJvcHNcbn0pID0+XG4gIG9wZW4gPT09IHVuZGVmaW5lZCB8fCBvcGVuID8gKFxuICAgIDxQb3J0YWwgbm9TY3JvbGw9e25vU2Nyb2xsfSBub1BvcnRhbD17IXBvcnRhbH0+XG4gICAgICA8TW9kYWxCYWNrZ3JvdW5kXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIG9uQ2xvc2UoZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIC8vIGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L01vZGFsQmFja2dyb3VuZD5cbiAgICA8L1BvcnRhbD5cbiAgKSA6IG51bGw7XG4iXX0=
