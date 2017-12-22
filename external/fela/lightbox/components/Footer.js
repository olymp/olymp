var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import defaults from '../theme';
import { deepMerge } from '../utils';

var _ref3 = React.createElement('span', null);

var _ref4 = React.createElement('span', null);

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

  var classes = StyleSheet.create(deepMerge(defaultStyles, theme));

  var imageCount = showCount ? React.createElement(
    'div',
    { className: css(classes.footerCount) },
    countCurrent,
    countSeparator,
    countTotal
  ) : _ref3;

  return React.createElement(
    'div',
    _extends({ className: css(classes.footer) }, props),
    caption ? React.createElement(
      'figcaption',
      { className: css(classes.footerCaption) },
      caption
    ) : _ref4,
    imageCount
  );
}

Footer.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  countCurrent: PropTypes.number,
  countSeparator: PropTypes.string,
  countTotal: PropTypes.number,
  showCount: PropTypes.bool
};
Footer.contextTypes = {
  theme: PropTypes.object.isRequired
};

var defaultStyles = {
  footer: {
    boxSizing: 'border-box',
    color: defaults.footer.color,
    cursor: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    left: 0,
    lineHeight: 1.3,
    paddingBottom: defaults.footer.gutter.vertical,
    paddingLeft: defaults.footer.gutter.horizontal,
    paddingRight: defaults.footer.gutter.horizontal,
    paddingTop: defaults.footer.gutter.vertical
  },
  footerCount: {
    color: defaults.footer.count.color,
    fontSize: defaults.footer.count.fontSize,
    paddingLeft: '1em' // add a small gutter for the caption
  },
  footerCaption: {
    flex: '1 1 0'
  }
};

export default Footer;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9Gb290ZXIuZXM2Il0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiY3NzIiwiU3R5bGVTaGVldCIsImRlZmF1bHRzIiwiZGVlcE1lcmdlIiwiRm9vdGVyIiwidGhlbWUiLCJjYXB0aW9uIiwiY291bnRDdXJyZW50IiwiY291bnRTZXBhcmF0b3IiLCJjb3VudFRvdGFsIiwic2hvd0NvdW50IiwicHJvcHMiLCJjbGFzc2VzIiwiY3JlYXRlIiwiZGVmYXVsdFN0eWxlcyIsImltYWdlQ291bnQiLCJmb290ZXJDb3VudCIsImZvb3RlciIsImZvb3RlckNhcHRpb24iLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJlbGVtZW50IiwibnVtYmVyIiwiYm9vbCIsImNvbnRleHRUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib3hTaXppbmciLCJjb2xvciIsImN1cnNvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImxlZnQiLCJsaW5lSGVpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImd1dHRlciIsInZlcnRpY2FsIiwicGFkZGluZ0xlZnQiLCJob3Jpem9udGFsIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ1RvcCIsImNvdW50IiwiZm9udFNpemUiLCJmbGV4Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxHQUFULEVBQWNDLFVBQWQsUUFBZ0Msd0JBQWhDO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixVQUFyQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsVUFBMUI7O1lBc0JNLGlDOztZQVFJLGlDOztBQTVCVixTQUFTQyxNQUFULGNBU0c7QUFBQSxNQUREQyxLQUNDLFNBRERBLEtBQ0M7O0FBQUEsTUFSREMsT0FRQyxRQVJEQSxPQVFDO0FBQUEsTUFQREMsWUFPQyxRQVBEQSxZQU9DO0FBQUEsTUFOREMsY0FNQyxRQU5EQSxjQU1DO0FBQUEsTUFMREMsVUFLQyxRQUxEQSxVQUtDO0FBQUEsTUFKREMsU0FJQyxRQUpEQSxTQUlDO0FBQUEsTUFIRUMsS0FHRjs7QUFDRCxNQUFJLENBQUNMLE9BQUQsSUFBWSxDQUFDSSxTQUFqQixFQUE0QjtBQUFFLFdBQU8sSUFBUDtBQUFjOztBQUU1QyxNQUFNRSxVQUFVWCxXQUFXWSxNQUFYLENBQWtCVixVQUFVVyxhQUFWLEVBQXlCVCxLQUF6QixDQUFsQixDQUFoQjs7QUFFQSxNQUFNVSxhQUFhTCxZQUNqQjtBQUFBO0FBQUEsTUFBSyxXQUFXVixJQUFJWSxRQUFRSSxXQUFaLENBQWhCO0FBQ0NULGdCQUREO0FBRUdDLGtCQUZIO0FBR0dDO0FBSEgsR0FEaUIsUUFBbkI7O0FBUUEsU0FDRTtBQUFBO0FBQUEsZUFBSyxXQUFXVCxJQUFJWSxRQUFRSyxNQUFaLENBQWhCLElBQXlDTixLQUF6QztBQUNHTCxjQUNDO0FBQUE7QUFBQSxRQUFZLFdBQVdOLElBQUlZLFFBQVFNLGFBQVosQ0FBdkI7QUFDSFo7QUFERyxLQURELFFBREg7QUFNR1M7QUFOSCxHQURGO0FBVUQ7O0FBRURYLE9BQU9lLFNBQVAsR0FBbUI7QUFDakJiLFdBQVNSLFVBQVVzQixTQUFWLENBQW9CLENBQUN0QixVQUFVdUIsTUFBWCxFQUFtQnZCLFVBQVV3QixPQUE3QixDQUFwQixDQURRO0FBRWpCZixnQkFBY1QsVUFBVXlCLE1BRlA7QUFHakJmLGtCQUFnQlYsVUFBVXVCLE1BSFQ7QUFJakJaLGNBQVlYLFVBQVV5QixNQUpMO0FBS2pCYixhQUFXWixVQUFVMEI7QUFMSixDQUFuQjtBQU9BcEIsT0FBT3FCLFlBQVAsR0FBc0I7QUFDcEJwQixTQUFPUCxVQUFVNEIsTUFBVixDQUFpQkM7QUFESixDQUF0Qjs7QUFJQSxJQUFNYixnQkFBZ0I7QUFDcEJHLFVBQVE7QUFDTlcsZUFBVyxZQURMO0FBRU5DLFdBQU8zQixTQUFTZSxNQUFULENBQWdCWSxLQUZqQjtBQUdOQyxZQUFRLE1BSEY7QUFJTkMsYUFBUyxNQUpIO0FBS05DLG9CQUFnQixlQUxWO0FBTU5DLFVBQU0sQ0FOQTtBQU9OQyxnQkFBWSxHQVBOO0FBUU5DLG1CQUFlakMsU0FBU2UsTUFBVCxDQUFnQm1CLE1BQWhCLENBQXVCQyxRQVJoQztBQVNOQyxpQkFBYXBDLFNBQVNlLE1BQVQsQ0FBZ0JtQixNQUFoQixDQUF1QkcsVUFUOUI7QUFVTkMsa0JBQWN0QyxTQUFTZSxNQUFULENBQWdCbUIsTUFBaEIsQ0FBdUJHLFVBVi9CO0FBV05FLGdCQUFZdkMsU0FBU2UsTUFBVCxDQUFnQm1CLE1BQWhCLENBQXVCQztBQVg3QixHQURZO0FBY3BCckIsZUFBYTtBQUNYYSxXQUFPM0IsU0FBU2UsTUFBVCxDQUFnQnlCLEtBQWhCLENBQXNCYixLQURsQjtBQUVYYyxjQUFVekMsU0FBU2UsTUFBVCxDQUFnQnlCLEtBQWhCLENBQXNCQyxRQUZyQjtBQUdYTCxpQkFBYSxLQUhGLENBR1M7QUFIVCxHQWRPO0FBbUJwQnBCLGlCQUFlO0FBQ2IwQixVQUFNO0FBRE87QUFuQkssQ0FBdEI7O0FBd0JBLGVBQWV4QyxNQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uL3V0aWxzJztcblxuZnVuY3Rpb24gRm9vdGVyKHtcbiAgY2FwdGlvbixcbiAgY291bnRDdXJyZW50LFxuICBjb3VudFNlcGFyYXRvcixcbiAgY291bnRUb3RhbCxcbiAgc2hvd0NvdW50LFxuICAuLi5wcm9wcyxcbn0sIHtcbiAgdGhlbWUsXG59KSB7XG4gIGlmICghY2FwdGlvbiAmJiAhc2hvd0NvdW50KSB7IHJldHVybiBudWxsOyB9XG5cbiAgY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKGRlZXBNZXJnZShkZWZhdWx0U3R5bGVzLCB0aGVtZSkpO1xuXG4gIGNvbnN0IGltYWdlQ291bnQgPSBzaG93Q291bnQgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmZvb3RlckNvdW50KX0+XG4gICAge2NvdW50Q3VycmVudH1cbiAgICAgIHtjb3VudFNlcGFyYXRvcn1cbiAgICAgIHtjb3VudFRvdGFsfVxuICA8L2Rpdj4pXG4gICAgOiA8c3BhbiAvPjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoY2xhc3Nlcy5mb290ZXIpfSB7Li4ucHJvcHN9PlxuICAgICAge2NhcHRpb24gPyAoXG4gICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuZm9vdGVyQ2FwdGlvbil9PlxuICAgIHtjYXB0aW9ufVxuICA8L2ZpZ2NhcHRpb24+XG4gICAgICApIDogPHNwYW4gLz59XG4gICAgICB7aW1hZ2VDb3VudH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgY2FwdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgY291bnRDdXJyZW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb3VudFNlcGFyYXRvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY291bnRUb3RhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgc2hvd0NvdW50OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5Gb290ZXIuY29udGV4dFR5cGVzID0ge1xuICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgZm9vdGVyOiB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgY29sb3I6IGRlZmF1bHRzLmZvb3Rlci5jb2xvcixcbiAgICBjdXJzb3I6ICdhdXRvJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBsZWZ0OiAwLFxuICAgIGxpbmVIZWlnaHQ6IDEuMyxcbiAgICBwYWRkaW5nQm90dG9tOiBkZWZhdWx0cy5mb290ZXIuZ3V0dGVyLnZlcnRpY2FsLFxuICAgIHBhZGRpbmdMZWZ0OiBkZWZhdWx0cy5mb290ZXIuZ3V0dGVyLmhvcml6b250YWwsXG4gICAgcGFkZGluZ1JpZ2h0OiBkZWZhdWx0cy5mb290ZXIuZ3V0dGVyLmhvcml6b250YWwsXG4gICAgcGFkZGluZ1RvcDogZGVmYXVsdHMuZm9vdGVyLmd1dHRlci52ZXJ0aWNhbCxcbiAgfSxcbiAgZm9vdGVyQ291bnQ6IHtcbiAgICBjb2xvcjogZGVmYXVsdHMuZm9vdGVyLmNvdW50LmNvbG9yLFxuICAgIGZvbnRTaXplOiBkZWZhdWx0cy5mb290ZXIuY291bnQuZm9udFNpemUsXG4gICAgcGFkZGluZ0xlZnQ6ICcxZW0nLCAvLyBhZGQgYSBzbWFsbCBndXR0ZXIgZm9yIHRoZSBjYXB0aW9uXG4gIH0sXG4gIGZvb3RlckNhcHRpb246IHtcbiAgICBmbGV4OiAnMSAxIDAnLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19
