'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ref3 = _react2.default.createElement('span', null);

var _ref4 = _react2.default.createElement('span', null);

function Footer(_ref, _ref2) {
  var theme = _ref2.theme;

  var caption = _ref.caption,
      countCurrent = _ref.countCurrent,
      countSeparator = _ref.countSeparator,
      countTotal = _ref.countTotal,
      showCount = _ref.showCount,
      props = _objectWithoutProperties(_ref, ['caption', 'countCurrent', 'countSeparator', 'countTotal', 'showCount']);

  if (!caption && !showCount) {
    return null;
  }

  var classes = _noImportant.StyleSheet.create((0, _utils.deepMerge)(defaultStyles, theme));

  var imageCount = showCount ? _react2.default.createElement(
    'div',
    { className: (0, _noImportant.css)(classes.footerCount) },
    countCurrent,
    countSeparator,
    countTotal
  ) : _ref3;

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _noImportant.css)(classes.footer) }, props),
    caption ? _react2.default.createElement(
      'figcaption',
      { className: (0, _noImportant.css)(classes.footerCaption) },
      caption
    ) : _ref4,
    imageCount
  );
}

Footer.propTypes = {
  caption: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  countCurrent: _propTypes2.default.number,
  countSeparator: _propTypes2.default.string,
  countTotal: _propTypes2.default.number,
  showCount: _propTypes2.default.bool
};
Footer.contextTypes = {
  theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
  footer: {
    boxSizing: 'border-box',
    color: _theme2.default.footer.color,
    cursor: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    left: 0,
    lineHeight: 1.3,
    paddingBottom: _theme2.default.footer.gutter.vertical,
    paddingLeft: _theme2.default.footer.gutter.horizontal,
    paddingRight: _theme2.default.footer.gutter.horizontal,
    paddingTop: _theme2.default.footer.gutter.vertical
  },
  footerCount: {
    color: _theme2.default.footer.count.color,
    fontSize: _theme2.default.footer.count.fontSize,
    paddingLeft: '1em' // add a small gutter for the caption
  },
  footerCaption: {
    flex: '1 1 0'
  }
};

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9Gb290ZXIuZXM2Il0sIm5hbWVzIjpbIkZvb3RlciIsInRoZW1lIiwiY2FwdGlvbiIsImNvdW50Q3VycmVudCIsImNvdW50U2VwYXJhdG9yIiwiY291bnRUb3RhbCIsInNob3dDb3VudCIsInByb3BzIiwiY2xhc3NlcyIsImNyZWF0ZSIsImRlZmF1bHRTdHlsZXMiLCJpbWFnZUNvdW50IiwiZm9vdGVyQ291bnQiLCJmb290ZXIiLCJmb290ZXJDYXB0aW9uIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiZWxlbWVudCIsIm51bWJlciIsImJvb2wiLCJjb250ZXh0VHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm94U2l6aW5nIiwiY29sb3IiLCJjdXJzb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJsZWZ0IiwibGluZUhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJndXR0ZXIiLCJ2ZXJ0aWNhbCIsInBhZGRpbmdMZWZ0IiwiaG9yaXpvbnRhbCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdUb3AiLCJjb3VudCIsImZvbnRTaXplIiwiZmxleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1lBc0JNLDJDOztZQVFJLDJDOztBQTVCVixTQUFTQSxNQUFULGNBU0c7QUFBQSxNQUREQyxLQUNDLFNBRERBLEtBQ0M7O0FBQUEsTUFSREMsT0FRQyxRQVJEQSxPQVFDO0FBQUEsTUFQREMsWUFPQyxRQVBEQSxZQU9DO0FBQUEsTUFOREMsY0FNQyxRQU5EQSxjQU1DO0FBQUEsTUFMREMsVUFLQyxRQUxEQSxVQUtDO0FBQUEsTUFKREMsU0FJQyxRQUpEQSxTQUlDO0FBQUEsTUFIRUMsS0FHRjs7QUFDRCxNQUFJLENBQUNMLE9BQUQsSUFBWSxDQUFDSSxTQUFqQixFQUE0QjtBQUFFLFdBQU8sSUFBUDtBQUFjOztBQUU1QyxNQUFNRSxVQUFVLHdCQUFXQyxNQUFYLENBQWtCLHNCQUFVQyxhQUFWLEVBQXlCVCxLQUF6QixDQUFsQixDQUFoQjs7QUFFQSxNQUFNVSxhQUFhTCxZQUNqQjtBQUFBO0FBQUEsTUFBSyxXQUFXLHNCQUFJRSxRQUFRSSxXQUFaLENBQWhCO0FBQ0NULGdCQUREO0FBRUdDLGtCQUZIO0FBR0dDO0FBSEgsR0FEaUIsUUFBbkI7O0FBUUEsU0FDRTtBQUFBO0FBQUEsZUFBSyxXQUFXLHNCQUFJRyxRQUFRSyxNQUFaLENBQWhCLElBQXlDTixLQUF6QztBQUNHTCxjQUNDO0FBQUE7QUFBQSxRQUFZLFdBQVcsc0JBQUlNLFFBQVFNLGFBQVosQ0FBdkI7QUFDSFo7QUFERyxLQURELFFBREg7QUFNR1M7QUFOSCxHQURGO0FBVUQ7O0FBRURYLE9BQU9lLFNBQVAsR0FBbUI7QUFDakJiLFdBQVMsb0JBQVVjLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUMsTUFBWCxFQUFtQixvQkFBVUMsT0FBN0IsQ0FBcEIsQ0FEUTtBQUVqQmYsZ0JBQWMsb0JBQVVnQixNQUZQO0FBR2pCZixrQkFBZ0Isb0JBQVVhLE1BSFQ7QUFJakJaLGNBQVksb0JBQVVjLE1BSkw7QUFLakJiLGFBQVcsb0JBQVVjO0FBTEosQ0FBbkI7QUFPQXBCLE9BQU9xQixZQUFQLEdBQXNCO0FBQ3BCcEIsU0FBTyxvQkFBVXFCLE1BQVYsQ0FBaUJDO0FBREosQ0FBdEI7O0FBSUEsSUFBTWIsZ0JBQWdCO0FBQ3BCRyxVQUFRO0FBQ05XLGVBQVcsWUFETDtBQUVOQyxXQUFPLGdCQUFTWixNQUFULENBQWdCWSxLQUZqQjtBQUdOQyxZQUFRLE1BSEY7QUFJTkMsYUFBUyxNQUpIO0FBS05DLG9CQUFnQixlQUxWO0FBTU5DLFVBQU0sQ0FOQTtBQU9OQyxnQkFBWSxHQVBOO0FBUU5DLG1CQUFlLGdCQUFTbEIsTUFBVCxDQUFnQm1CLE1BQWhCLENBQXVCQyxRQVJoQztBQVNOQyxpQkFBYSxnQkFBU3JCLE1BQVQsQ0FBZ0JtQixNQUFoQixDQUF1QkcsVUFUOUI7QUFVTkMsa0JBQWMsZ0JBQVN2QixNQUFULENBQWdCbUIsTUFBaEIsQ0FBdUJHLFVBVi9CO0FBV05FLGdCQUFZLGdCQUFTeEIsTUFBVCxDQUFnQm1CLE1BQWhCLENBQXVCQztBQVg3QixHQURZO0FBY3BCckIsZUFBYTtBQUNYYSxXQUFPLGdCQUFTWixNQUFULENBQWdCeUIsS0FBaEIsQ0FBc0JiLEtBRGxCO0FBRVhjLGNBQVUsZ0JBQVMxQixNQUFULENBQWdCeUIsS0FBaEIsQ0FBc0JDLFFBRnJCO0FBR1hMLGlCQUFhLEtBSEYsQ0FHUztBQUhULEdBZE87QUFtQnBCcEIsaUJBQWU7QUFDYjBCLFVBQU07QUFETztBQW5CSyxDQUF0Qjs7a0JBd0JleEMsTSIsImZpbGUiOiJleHRlcm5hbC9mZWxhL2xpZ2h0Ym94L2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi91dGlscyc7XG5cbmZ1bmN0aW9uIEZvb3Rlcih7XG4gIGNhcHRpb24sXG4gIGNvdW50Q3VycmVudCxcbiAgY291bnRTZXBhcmF0b3IsXG4gIGNvdW50VG90YWwsXG4gIHNob3dDb3VudCxcbiAgLi4ucHJvcHMsXG59LCB7XG4gIHRoZW1lLFxufSkge1xuICBpZiAoIWNhcHRpb24gJiYgIXNob3dDb3VudCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZShkZWVwTWVyZ2UoZGVmYXVsdFN0eWxlcywgdGhlbWUpKTtcblxuICBjb25zdCBpbWFnZUNvdW50ID0gc2hvd0NvdW50ID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoY2xhc3Nlcy5mb290ZXJDb3VudCl9PlxuICAgIHtjb3VudEN1cnJlbnR9XG4gICAgICB7Y291bnRTZXBhcmF0b3J9XG4gICAgICB7Y291bnRUb3RhbH1cbiAgPC9kaXY+KVxuICAgIDogPHNwYW4gLz47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuZm9vdGVyKX0gey4uLnByb3BzfT5cbiAgICAgIHtjYXB0aW9uID8gKFxuICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmZvb3RlckNhcHRpb24pfT5cbiAgICB7Y2FwdGlvbn1cbiAgPC9maWdjYXB0aW9uPlxuICAgICAgKSA6IDxzcGFuIC8+fVxuICAgICAge2ltYWdlQ291bnR9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIGNhcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIGNvdW50Q3VycmVudDogUHJvcFR5cGVzLm51bWJlcixcbiAgY291bnRTZXBhcmF0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvdW50VG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNob3dDb3VudDogUHJvcFR5cGVzLmJvb2wsXG59O1xuRm9vdGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gIGZvb3Rlcjoge1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGNvbG9yOiBkZWZhdWx0cy5mb290ZXIuY29sb3IsXG4gICAgY3Vyc29yOiAnYXV0bycsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbGVmdDogMCxcbiAgICBsaW5lSGVpZ2h0OiAxLjMsXG4gICAgcGFkZGluZ0JvdHRvbTogZGVmYXVsdHMuZm9vdGVyLmd1dHRlci52ZXJ0aWNhbCxcbiAgICBwYWRkaW5nTGVmdDogZGVmYXVsdHMuZm9vdGVyLmd1dHRlci5ob3Jpem9udGFsLFxuICAgIHBhZGRpbmdSaWdodDogZGVmYXVsdHMuZm9vdGVyLmd1dHRlci5ob3Jpem9udGFsLFxuICAgIHBhZGRpbmdUb3A6IGRlZmF1bHRzLmZvb3Rlci5ndXR0ZXIudmVydGljYWwsXG4gIH0sXG4gIGZvb3RlckNvdW50OiB7XG4gICAgY29sb3I6IGRlZmF1bHRzLmZvb3Rlci5jb3VudC5jb2xvcixcbiAgICBmb250U2l6ZTogZGVmYXVsdHMuZm9vdGVyLmNvdW50LmZvbnRTaXplLFxuICAgIHBhZGRpbmdMZWZ0OiAnMWVtJywgLy8gYWRkIGEgc21hbGwgZ3V0dGVyIGZvciB0aGUgY2FwdGlvblxuICB9LFxuICBmb290ZXJDYXB0aW9uOiB7XG4gICAgZmxleDogJzEgMSAwJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ==
