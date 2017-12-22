var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

import defaults from '../theme';
import { deepMerge } from '../utils';
import Icon from './Icon';

var _ref3 = React.createElement('span', null);

function Header(_ref, _ref2) {
  var theme = _ref2.theme;

  var customControls = _ref.customControls,
      onClose = _ref.onClose,
      showCloseButton = _ref.showCloseButton,
      closeButtonTitle = _ref.closeButtonTitle,
      props = _objectWithoutProperties(_ref, ['customControls', 'onClose', 'showCloseButton', 'closeButtonTitle']);

  var classes = StyleSheet.create(deepMerge(defaultStyles, theme));

  return React.createElement(
    'div',
    _extends({ className: css(classes.header) }, props),
    customControls || _ref3,
    !!showCloseButton && React.createElement(
      'button',
      {
        title: closeButtonTitle,
        className: css(classes.close),
        onClick: onClose
      },
      React.createElement(Icon, { fill: !!theme.close && theme.close.fill || defaults.close.fill, type: 'close' })
    )
  );
}

Header.propTypes = {
  customControls: PropTypes.array,
  onClose: PropTypes.func.isRequired,
  showCloseButton: PropTypes.bool
};
Header.contextTypes = {
  theme: PropTypes.object.isRequired
};

var defaultStyles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    height: defaults.header.height
  },
  close: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    position: 'relative',
    top: 0,
    verticalAlign: 'bottom',

    // increase hit area
    height: 40,
    marginRight: -10,
    padding: 10,
    width: 40
  }
};

export default Header;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9IZWFkZXIuZXM2Il0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiY3NzIiwiU3R5bGVTaGVldCIsImRlZmF1bHRzIiwiZGVlcE1lcmdlIiwiSWNvbiIsIkhlYWRlciIsInRoZW1lIiwiY3VzdG9tQ29udHJvbHMiLCJvbkNsb3NlIiwic2hvd0Nsb3NlQnV0dG9uIiwiY2xvc2VCdXR0b25UaXRsZSIsInByb3BzIiwiY2xhc3NlcyIsImNyZWF0ZSIsImRlZmF1bHRTdHlsZXMiLCJoZWFkZXIiLCJjbG9zZSIsImZpbGwiLCJwcm9wVHlwZXMiLCJhcnJheSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImNvbnRleHRUeXBlcyIsIm9iamVjdCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJjdXJzb3IiLCJvdXRsaW5lIiwicG9zaXRpb24iLCJ0b3AiLCJ2ZXJ0aWNhbEFsaWduIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLEdBQVQsRUFBY0MsVUFBZCxRQUFnQyx3QkFBaEM7O0FBRUEsT0FBT0MsUUFBUCxNQUFxQixVQUFyQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsVUFBMUI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCOztZQWV5QixpQzs7QUFiekIsU0FBU0MsTUFBVCxjQVFHO0FBQUEsTUFEREMsS0FDQyxTQUREQSxLQUNDOztBQUFBLE1BUERDLGNBT0MsUUFQREEsY0FPQztBQUFBLE1BTkRDLE9BTUMsUUFOREEsT0FNQztBQUFBLE1BTERDLGVBS0MsUUFMREEsZUFLQztBQUFBLE1BSkRDLGdCQUlDLFFBSkRBLGdCQUlDO0FBQUEsTUFIRUMsS0FHRjs7QUFDRCxNQUFNQyxVQUFVWCxXQUFXWSxNQUFYLENBQWtCVixVQUFVVyxhQUFWLEVBQXlCUixLQUF6QixDQUFsQixDQUFoQjs7QUFFQSxTQUNFO0FBQUE7QUFBQSxlQUFLLFdBQVdOLElBQUlZLFFBQVFHLE1BQVosQ0FBaEIsSUFBeUNKLEtBQXpDO0FBQ0dKLDJCQURIO0FBRUcsS0FBQyxDQUFDRSxlQUFGLElBQ0M7QUFBQTtBQUFBO0FBQ0UsZUFBT0MsZ0JBRFQ7QUFFRSxtQkFBV1YsSUFBSVksUUFBUUksS0FBWixDQUZiO0FBR0UsaUJBQVNSO0FBSFg7QUFLRSwwQkFBQyxJQUFELElBQU0sTUFBTSxDQUFDLENBQUNGLE1BQU1VLEtBQVIsSUFBaUJWLE1BQU1VLEtBQU4sQ0FBWUMsSUFBN0IsSUFBcUNmLFNBQVNjLEtBQVQsQ0FBZUMsSUFBaEUsRUFBc0UsTUFBSyxPQUEzRTtBQUxGO0FBSEosR0FERjtBQWNEOztBQUVEWixPQUFPYSxTQUFQLEdBQW1CO0FBQ2pCWCxrQkFBZ0JULFVBQVVxQixLQURUO0FBRWpCWCxXQUFTVixVQUFVc0IsSUFBVixDQUFlQyxVQUZQO0FBR2pCWixtQkFBaUJYLFVBQVV3QjtBQUhWLENBQW5CO0FBS0FqQixPQUFPa0IsWUFBUCxHQUFzQjtBQUNwQmpCLFNBQU9SLFVBQVUwQixNQUFWLENBQWlCSDtBQURKLENBQXRCOztBQUlBLElBQU1QLGdCQUFnQjtBQUNwQkMsVUFBUTtBQUNOVSxhQUFTLE1BREg7QUFFTkMsb0JBQWdCLGVBRlY7QUFHTkMsWUFBUXpCLFNBQVNhLE1BQVQsQ0FBZ0JZO0FBSGxCLEdBRFk7QUFNcEJYLFNBQU87QUFDTFksZ0JBQVksTUFEUDtBQUVMQyxZQUFRLE1BRkg7QUFHTEMsWUFBUSxTQUhIO0FBSUxDLGFBQVMsTUFKSjtBQUtMQyxjQUFVLFVBTEw7QUFNTEMsU0FBSyxDQU5BO0FBT0xDLG1CQUFlLFFBUFY7O0FBU0w7QUFDQVAsWUFBUSxFQVZIO0FBV0xRLGlCQUFhLENBQUMsRUFYVDtBQVlMQyxhQUFTLEVBWko7QUFhTEMsV0FBTztBQWJGO0FBTmEsQ0FBdEI7O0FBdUJBLGVBQWVoQyxNQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuXG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi4vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuZnVuY3Rpb24gSGVhZGVyKHtcbiAgY3VzdG9tQ29udHJvbHMsXG4gIG9uQ2xvc2UsXG4gIHNob3dDbG9zZUJ1dHRvbixcbiAgY2xvc2VCdXR0b25UaXRsZSxcbiAgLi4ucHJvcHMsXG59LCB7XG4gIHRoZW1lLFxufSkge1xuICBjb25zdCBjbGFzc2VzID0gU3R5bGVTaGVldC5jcmVhdGUoZGVlcE1lcmdlKGRlZmF1bHRTdHlsZXMsIHRoZW1lKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuaGVhZGVyKX0gey4uLnByb3BzfT5cbiAgICAgIHtjdXN0b21Db250cm9scyB8fCA8c3BhbiAvPn1cbiAgICAgIHshIXNob3dDbG9zZUJ1dHRvbiAmJiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0aXRsZT17Y2xvc2VCdXR0b25UaXRsZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmNsb3NlKX1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gZmlsbD17ISF0aGVtZS5jbG9zZSAmJiB0aGVtZS5jbG9zZS5maWxsIHx8IGRlZmF1bHRzLmNsb3NlLmZpbGx9IHR5cGU9XCJjbG9zZVwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY3VzdG9tQ29udHJvbHM6IFByb3BUeXBlcy5hcnJheSxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2hvd0Nsb3NlQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5IZWFkZXIuY29udGV4dFR5cGVzID0ge1xuICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgaGVhZGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgaGVpZ2h0OiBkZWZhdWx0cy5oZWFkZXIuaGVpZ2h0LFxuICB9LFxuICBjbG9zZToge1xuICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdG9wOiAwLFxuICAgIHZlcnRpY2FsQWxpZ246ICdib3R0b20nLFxuXG4gICAgLy8gaW5jcmVhc2UgaGl0IGFyZWFcbiAgICBoZWlnaHQ6IDQwLFxuICAgIG1hcmdpblJpZ2h0OiAtMTAsXG4gICAgcGFkZGluZzogMTAsXG4gICAgd2lkdGg6IDQwLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19
