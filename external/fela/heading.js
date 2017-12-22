var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'react-fela';

var Heading = createComponent(function (_ref) {
  var fontSize = _ref.fontSize,
      theme = _ref.theme,
      padding = _ref.padding,
      marginBottom = _ref.marginBottom,
      marginTop = _ref.marginTop,
      textAlign = _ref.textAlign,
      thin = _ref.thin,
      color = _ref.color,
      center = _ref.center;
  return {
    color: color && (color === true ? theme.color : theme[color] || color),
    textAlign: center ? 'center' : textAlign,
    fontWeight: thin && 200,
    padding: padding,
    fontSize: fontSize,
    lineHeight: fontSize ? fontSize + 'px' : undefined,
    marginTop: marginTop !== undefined ? marginTop : undefined,
    marginBottom: marginBottom !== undefined ? marginBottom : 15
  };
}, function (_ref2) {
  var level = _ref2.level,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ['level', 'children']);

  if (!level) {
    level = 1;
  }
  return React.createElement('h' + level, rest, children);
}, ['level', 'itemProp']);

export { Heading };
export var SectionHeading = function SectionHeading(_ref3) {
  var title = _ref3.title,
      description = _ref3.description,
      children = _ref3.children,
      _ref3$level = _ref3.level,
      level = _ref3$level === undefined ? 0 : _ref3$level;
  return React.createElement(
    'div',
    { key: 0 },
    React.createElement(
      Heading,
      {
        level: 1 + level,
        marginBottom: 0,
        textAlign: 'center',
        light: true,
        color: true,
        thin: true
      },
      title || children
    ),
    description && React.createElement(
      Heading,
      { level: 3 + level, marginTop: 0, textAlign: 'center', thin: true },
      description
    )
  );
};

export var H1 = function H1(props) {
  return React.createElement(Heading, _extends({}, props, { level: 1 }));
};
export var H2 = function H2(props) {
  return React.createElement(Heading, _extends({}, props, { level: 2 }));
};
export var H3 = function H3(props) {
  return React.createElement(Heading, _extends({}, props, { level: 3 }));
};
export var H4 = function H4(props) {
  return React.createElement(Heading, _extends({}, props, { level: 4 }));
};
export var H5 = function H5(props) {
  return React.createElement(Heading, _extends({}, props, { level: 5 }));
};
export var H6 = function H6(props) {
  return React.createElement(Heading, _extends({}, props, { level: 6 }));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvaGVhZGluZy5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb21wb25lbnQiLCJIZWFkaW5nIiwiZm9udFNpemUiLCJ0aGVtZSIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJ0aGluIiwiY29sb3IiLCJjZW50ZXIiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsInVuZGVmaW5lZCIsImxldmVsIiwiY2hpbGRyZW4iLCJyZXN0IiwiY3JlYXRlRWxlbWVudCIsIlNlY3Rpb25IZWFkaW5nIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkgxIiwicHJvcHMiLCJIMiIsIkgzIiwiSDQiLCJINSIsIkg2Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRU8sSUFBTUMsVUFBVUQsZ0JBQ3JCO0FBQUEsTUFDRUUsUUFERixRQUNFQSxRQURGO0FBQUEsTUFFRUMsS0FGRixRQUVFQSxLQUZGO0FBQUEsTUFHRUMsT0FIRixRQUdFQSxPQUhGO0FBQUEsTUFJRUMsWUFKRixRQUlFQSxZQUpGO0FBQUEsTUFLRUMsU0FMRixRQUtFQSxTQUxGO0FBQUEsTUFNRUMsU0FORixRQU1FQSxTQU5GO0FBQUEsTUFPRUMsSUFQRixRQU9FQSxJQVBGO0FBQUEsTUFRRUMsS0FSRixRQVFFQSxLQVJGO0FBQUEsTUFTRUMsTUFURixRQVNFQSxNQVRGO0FBQUEsU0FVTztBQUNMRCxXQUFPQSxVQUFVQSxVQUFVLElBQVYsR0FBaUJOLE1BQU1NLEtBQXZCLEdBQStCTixNQUFNTSxLQUFOLEtBQWdCQSxLQUF6RCxDQURGO0FBRUxGLGVBQVdHLFNBQVMsUUFBVCxHQUFvQkgsU0FGMUI7QUFHTEksZ0JBQVlILFFBQVEsR0FIZjtBQUlMSixvQkFKSztBQUtMRixzQkFMSztBQU1MVSxnQkFBWVYsV0FBY0EsUUFBZCxVQUE2QlcsU0FOcEM7QUFPTFAsZUFBV0EsY0FBY08sU0FBZCxHQUEwQlAsU0FBMUIsR0FBc0NPLFNBUDVDO0FBUUxSLGtCQUFjQSxpQkFBaUJRLFNBQWpCLEdBQTZCUixZQUE3QixHQUE0QztBQVJyRCxHQVZQO0FBQUEsQ0FEcUIsRUFxQnJCLGlCQUFrQztBQUFBLE1BQS9CUyxLQUErQixTQUEvQkEsS0FBK0I7QUFBQSxNQUF4QkMsUUFBd0IsU0FBeEJBLFFBQXdCO0FBQUEsTUFBWEMsSUFBVzs7QUFDaEMsTUFBSSxDQUFDRixLQUFMLEVBQVk7QUFDVkEsWUFBUSxDQUFSO0FBQ0Q7QUFDRCxTQUFPZixNQUFNa0IsYUFBTixPQUF3QkgsS0FBeEIsRUFBaUNFLElBQWpDLEVBQXVDRCxRQUF2QyxDQUFQO0FBQ0QsQ0ExQm9CLEVBMkJyQixDQUFDLE9BQUQsRUFBVSxVQUFWLENBM0JxQixDQUFoQjs7O0FBOEJQLE9BQU8sSUFBTUcsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVVDLFdBQVYsU0FBVUEsV0FBVjtBQUFBLE1BQXVCTCxRQUF2QixTQUF1QkEsUUFBdkI7QUFBQSwwQkFBaUNELEtBQWpDO0FBQUEsTUFBaUNBLEtBQWpDLCtCQUF5QyxDQUF6QztBQUFBLFNBQzVCO0FBQUE7QUFBQSxNQUFLLEtBQUssQ0FBVjtBQUNFO0FBQUMsYUFBRDtBQUFBO0FBQ0UsZUFBTyxJQUFJQSxLQURiO0FBRUUsc0JBQWMsQ0FGaEI7QUFHRSxtQkFBVSxRQUhaO0FBSUUsbUJBSkY7QUFLRSxtQkFMRjtBQU1FO0FBTkY7QUFRR0ssZUFBU0o7QUFSWixLQURGO0FBV0dLLG1CQUNDO0FBQUMsYUFBRDtBQUFBLFFBQVMsT0FBTyxJQUFJTixLQUFwQixFQUEyQixXQUFXLENBQXRDLEVBQXlDLFdBQVUsUUFBbkQsRUFBNEQsVUFBNUQ7QUFDR007QUFESDtBQVpKLEdBRDRCO0FBQUEsQ0FBdkI7O0FBb0JQLE9BQU8sSUFBTUMsS0FBSyxTQUFMQSxFQUFLO0FBQUEsU0FBUyxvQkFBQyxPQUFELGVBQWFDLEtBQWIsSUFBb0IsT0FBTyxDQUEzQixJQUFUO0FBQUEsQ0FBWDtBQUNQLE9BQU8sSUFBTUMsS0FBSyxTQUFMQSxFQUFLO0FBQUEsU0FBUyxvQkFBQyxPQUFELGVBQWFELEtBQWIsSUFBb0IsT0FBTyxDQUEzQixJQUFUO0FBQUEsQ0FBWDtBQUNQLE9BQU8sSUFBTUUsS0FBSyxTQUFMQSxFQUFLO0FBQUEsU0FBUyxvQkFBQyxPQUFELGVBQWFGLEtBQWIsSUFBb0IsT0FBTyxDQUEzQixJQUFUO0FBQUEsQ0FBWDtBQUNQLE9BQU8sSUFBTUcsS0FBSyxTQUFMQSxFQUFLO0FBQUEsU0FBUyxvQkFBQyxPQUFELGVBQWFILEtBQWIsSUFBb0IsT0FBTyxDQUEzQixJQUFUO0FBQUEsQ0FBWDtBQUNQLE9BQU8sSUFBTUksS0FBSyxTQUFMQSxFQUFLO0FBQUEsU0FBUyxvQkFBQyxPQUFELGVBQWFKLEtBQWIsSUFBb0IsT0FBTyxDQUEzQixJQUFUO0FBQUEsQ0FBWDtBQUNQLE9BQU8sSUFBTUssS0FBSyxTQUFMQSxFQUFLO0FBQUEsU0FBUyxvQkFBQyxPQUFELGVBQWFMLEtBQWIsSUFBb0IsT0FBTyxDQUEzQixJQUFUO0FBQUEsQ0FBWCIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL2hlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gY3JlYXRlQ29tcG9uZW50KFxuICAoe1xuICAgIGZvbnRTaXplLFxuICAgIHRoZW1lLFxuICAgIHBhZGRpbmcsXG4gICAgbWFyZ2luQm90dG9tLFxuICAgIG1hcmdpblRvcCxcbiAgICB0ZXh0QWxpZ24sXG4gICAgdGhpbixcbiAgICBjb2xvcixcbiAgICBjZW50ZXIsXG4gIH0pID0+ICh7XG4gICAgY29sb3I6IGNvbG9yICYmIChjb2xvciA9PT0gdHJ1ZSA/IHRoZW1lLmNvbG9yIDogdGhlbWVbY29sb3JdIHx8IGNvbG9yKSxcbiAgICB0ZXh0QWxpZ246IGNlbnRlciA/ICdjZW50ZXInIDogdGV4dEFsaWduLFxuICAgIGZvbnRXZWlnaHQ6IHRoaW4gJiYgMjAwLFxuICAgIHBhZGRpbmcsXG4gICAgZm9udFNpemUsXG4gICAgbGluZUhlaWdodDogZm9udFNpemUgPyBgJHtmb250U2l6ZX1weGAgOiB1bmRlZmluZWQsXG4gICAgbWFyZ2luVG9wOiBtYXJnaW5Ub3AgIT09IHVuZGVmaW5lZCA/IG1hcmdpblRvcCA6IHVuZGVmaW5lZCxcbiAgICBtYXJnaW5Cb3R0b206IG1hcmdpbkJvdHRvbSAhPT0gdW5kZWZpbmVkID8gbWFyZ2luQm90dG9tIDogMTUsXG4gIH0pLFxuICAoeyBsZXZlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4ge1xuICAgIGlmICghbGV2ZWwpIHtcbiAgICAgIGxldmVsID0gMTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoYGgke2xldmVsfWAsIHJlc3QsIGNoaWxkcmVuKTtcbiAgfSxcbiAgWydsZXZlbCcsICdpdGVtUHJvcCddLFxuKTtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25IZWFkaW5nID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiwgbGV2ZWwgPSAwIH0pID0+IChcbiAgPGRpdiBrZXk9ezB9PlxuICAgIDxIZWFkaW5nXG4gICAgICBsZXZlbD17MSArIGxldmVsfVxuICAgICAgbWFyZ2luQm90dG9tPXswfVxuICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgIGxpZ2h0XG4gICAgICBjb2xvclxuICAgICAgdGhpblxuICAgID5cbiAgICAgIHt0aXRsZSB8fCBjaGlsZHJlbn1cbiAgICA8L0hlYWRpbmc+XG4gICAge2Rlc2NyaXB0aW9uICYmIChcbiAgICAgIDxIZWFkaW5nIGxldmVsPXszICsgbGV2ZWx9IG1hcmdpblRvcD17MH0gdGV4dEFsaWduPVwiY2VudGVyXCIgdGhpbj5cbiAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgPC9IZWFkaW5nPlxuICAgICl9XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IEgxID0gcHJvcHMgPT4gPEhlYWRpbmcgey4uLnByb3BzfSBsZXZlbD17MX0gLz47XG5leHBvcnQgY29uc3QgSDIgPSBwcm9wcyA9PiA8SGVhZGluZyB7Li4ucHJvcHN9IGxldmVsPXsyfSAvPjtcbmV4cG9ydCBjb25zdCBIMyA9IHByb3BzID0+IDxIZWFkaW5nIHsuLi5wcm9wc30gbGV2ZWw9ezN9IC8+O1xuZXhwb3J0IGNvbnN0IEg0ID0gcHJvcHMgPT4gPEhlYWRpbmcgey4uLnByb3BzfSBsZXZlbD17NH0gLz47XG5leHBvcnQgY29uc3QgSDUgPSBwcm9wcyA9PiA8SGVhZGluZyB7Li4ucHJvcHN9IGxldmVsPXs1fSAvPjtcbmV4cG9ydCBjb25zdCBINiA9IHByb3BzID0+IDxIZWFkaW5nIHsuLi5wcm9wc30gbGV2ZWw9ezZ9IC8+O1xuIl19
