var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

import defaults from '../theme';
import { deepMerge } from '../utils';
import Icon from './Icon';

function Arrow(_ref, _ref2) {
  var theme = _ref2.theme;

  var direction = _ref.direction,
      icon = _ref.icon,
      onClick = _ref.onClick,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ['direction', 'icon', 'onClick', 'size']);

  var classes = StyleSheet.create(deepMerge(defaultStyles, theme));

  return React.createElement(
    'button',
    _extends({
      type: 'button',
      className: css(classes.arrow, classes['arrow__direction__' + direction], size && classes['arrow__size__' + size]),
      onClick: onClick,
      onTouchEnd: onClick
    }, props),
    React.createElement(Icon, { fill: !!theme.arrow && theme.arrow.fill || defaults.arrow.fill, type: icon })
  );
}

Arrow.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['medium', 'small']).isRequired
};
Arrow.defaultProps = {
  size: 'medium'
};
Arrow.contextTypes = {
  theme: PropTypes.object.isRequired
};

var defaultStyles = {
  arrow: {
    background: 'none',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    outline: 'none',
    padding: 10, // increase hit area
    position: 'absolute',
    top: '50%',

    // disable user select
    WebkitTouchCallout: 'none',
    userSelect: 'none'
  },

  // sizes
  arrow__size__medium: {
    height: defaults.arrow.height,
    marginTop: defaults.arrow.height / -2,
    width: 40,

    '@media (min-width: 768px)': {
      width: 70
    }
  },
  arrow__size__small: {
    height: defaults.thumbnail.size,
    marginTop: defaults.thumbnail.size / -2,
    width: 30,

    '@media (min-width: 500px)': {
      width: 40
    }
  },

  // direction
  arrow__direction__right: {
    right: defaults.container.gutter.horizontal
  },
  arrow__direction__left: {
    left: defaults.container.gutter.horizontal
  }
};

export default Arrow;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9BcnJvdy5lczYiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiUmVhY3QiLCJjc3MiLCJTdHlsZVNoZWV0IiwiZGVmYXVsdHMiLCJkZWVwTWVyZ2UiLCJJY29uIiwiQXJyb3ciLCJ0aGVtZSIsImRpcmVjdGlvbiIsImljb24iLCJvbkNsaWNrIiwic2l6ZSIsInByb3BzIiwiY2xhc3NlcyIsImNyZWF0ZSIsImRlZmF1bHRTdHlsZXMiLCJhcnJvdyIsImZpbGwiLCJwcm9wVHlwZXMiLCJvbmVPZiIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwiY29udGV4dFR5cGVzIiwib2JqZWN0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsIm91dGxpbmUiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJ0b3AiLCJXZWJraXRUb3VjaENhbGxvdXQiLCJ1c2VyU2VsZWN0IiwiYXJyb3dfX3NpemVfX21lZGl1bSIsImhlaWdodCIsIm1hcmdpblRvcCIsIndpZHRoIiwiYXJyb3dfX3NpemVfX3NtYWxsIiwidGh1bWJuYWlsIiwiYXJyb3dfX2RpcmVjdGlvbl9fcmlnaHQiLCJyaWdodCIsImNvbnRhaW5lciIsImd1dHRlciIsImhvcml6b250YWwiLCJhcnJvd19fZGlyZWN0aW9uX19sZWZ0IiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsR0FBVCxFQUFjQyxVQUFkLFFBQWdDLHdCQUFoQzs7QUFFQSxPQUFPQyxRQUFQLE1BQXFCLFVBQXJCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixVQUExQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7O0FBRUEsU0FBU0MsS0FBVCxjQVNHO0FBQUEsTUFEREMsS0FDQyxTQUREQSxLQUNDOztBQUFBLE1BUkRDLFNBUUMsUUFSREEsU0FRQztBQUFBLE1BUERDLElBT0MsUUFQREEsSUFPQztBQUFBLE1BTkRDLE9BTUMsUUFOREEsT0FNQztBQUFBLE1BTERDLElBS0MsUUFMREEsSUFLQztBQUFBLE1BSkVDLEtBSUY7O0FBQ0QsTUFBTUMsVUFBVVgsV0FBV1ksTUFBWCxDQUFrQlYsVUFBVVcsYUFBVixFQUF5QlIsS0FBekIsQ0FBbEIsQ0FBaEI7O0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFDRSxZQUFLLFFBRFA7QUFFRSxpQkFBV04sSUFBSVksUUFBUUcsS0FBWixFQUFtQkgsK0JBQTZCTCxTQUE3QixDQUFuQixFQUE4REcsUUFBUUUsMEJBQXdCRixJQUF4QixDQUF0RSxDQUZiO0FBR0UsZUFBU0QsT0FIWDtBQUlFLGtCQUFZQTtBQUpkLE9BS01FLEtBTE47QUFPRSx3QkFBQyxJQUFELElBQU0sTUFBTSxDQUFDLENBQUNMLE1BQU1TLEtBQVIsSUFBaUJULE1BQU1TLEtBQU4sQ0FBWUMsSUFBN0IsSUFBcUNkLFNBQVNhLEtBQVQsQ0FBZUMsSUFBaEUsRUFBc0UsTUFBTVIsSUFBNUU7QUFQRixHQURGO0FBV0Q7O0FBRURILE1BQU1ZLFNBQU4sR0FBa0I7QUFDaEJWLGFBQVdULFVBQVVvQixLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBaEIsQ0FESztBQUVoQlYsUUFBTVYsVUFBVXFCLE1BRkE7QUFHaEJWLFdBQVNYLFVBQVVzQixJQUFWLENBQWVDLFVBSFI7QUFJaEJYLFFBQU1aLFVBQVVvQixLQUFWLENBQWdCLENBQUMsUUFBRCxFQUFXLE9BQVgsQ0FBaEIsRUFBcUNHO0FBSjNCLENBQWxCO0FBTUFoQixNQUFNaUIsWUFBTixHQUFxQjtBQUNuQlosUUFBTTtBQURhLENBQXJCO0FBR0FMLE1BQU1rQixZQUFOLEdBQXFCO0FBQ25CakIsU0FBT1IsVUFBVTBCLE1BQVYsQ0FBaUJIO0FBREwsQ0FBckI7O0FBSUEsSUFBTVAsZ0JBQWdCO0FBQ3BCQyxTQUFPO0FBQ0xVLGdCQUFZLE1BRFA7QUFFTEMsWUFBUSxNQUZIO0FBR0xDLGtCQUFjLENBSFQ7QUFJTEMsWUFBUSxTQUpIO0FBS0xDLGFBQVMsTUFMSjtBQU1MQyxhQUFTLEVBTkosRUFNUTtBQUNiQyxjQUFVLFVBUEw7QUFRTEMsU0FBSyxLQVJBOztBQVVMO0FBQ0FDLHdCQUFvQixNQVhmO0FBWUxDLGdCQUFZO0FBWlAsR0FEYTs7QUFnQnBCO0FBQ0FDLHVCQUFxQjtBQUNuQkMsWUFBUWxDLFNBQVNhLEtBQVQsQ0FBZXFCLE1BREo7QUFFbkJDLGVBQVduQyxTQUFTYSxLQUFULENBQWVxQixNQUFmLEdBQXdCLENBQUMsQ0FGakI7QUFHbkJFLFdBQU8sRUFIWTs7QUFLbkIsaUNBQTZCO0FBQzNCQSxhQUFPO0FBRG9CO0FBTFYsR0FqQkQ7QUEwQnBCQyxzQkFBb0I7QUFDbEJILFlBQVFsQyxTQUFTc0MsU0FBVCxDQUFtQjlCLElBRFQ7QUFFbEIyQixlQUFXbkMsU0FBU3NDLFNBQVQsQ0FBbUI5QixJQUFuQixHQUEwQixDQUFDLENBRnBCO0FBR2xCNEIsV0FBTyxFQUhXOztBQUtsQixpQ0FBNkI7QUFDM0JBLGFBQU87QUFEb0I7QUFMWCxHQTFCQTs7QUFvQ3BCO0FBQ0FHLDJCQUF5QjtBQUN2QkMsV0FBT3hDLFNBQVN5QyxTQUFULENBQW1CQyxNQUFuQixDQUEwQkM7QUFEVixHQXJDTDtBQXdDcEJDLDBCQUF3QjtBQUN0QkMsVUFBTTdDLFNBQVN5QyxTQUFULENBQW1CQyxNQUFuQixDQUEwQkM7QUFEVjtBQXhDSixDQUF0Qjs7QUE2Q0EsZUFBZXhDLEtBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9saWdodGJveC9jb21wb25lbnRzL0Fycm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcblxuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbmZ1bmN0aW9uIEFycm93KHtcbiAgZGlyZWN0aW9uLFxuICBpY29uLFxuICBvbkNsaWNrLFxuICBzaXplLFxuICAuLi5wcm9wcyxcbn0sXG57XG4gIHRoZW1lLFxufSkge1xuICBjb25zdCBjbGFzc2VzID0gU3R5bGVTaGVldC5jcmVhdGUoZGVlcE1lcmdlKGRlZmF1bHRTdHlsZXMsIHRoZW1lKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuYXJyb3csIGNsYXNzZXNbYGFycm93X19kaXJlY3Rpb25fXyR7ZGlyZWN0aW9ufWBdLCBzaXplICYmIGNsYXNzZXNbYGFycm93X19zaXplX18ke3NpemV9YF0pfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIG9uVG91Y2hFbmQ9e29uQ2xpY2t9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPEljb24gZmlsbD17ISF0aGVtZS5hcnJvdyAmJiB0aGVtZS5hcnJvdy5maWxsIHx8IGRlZmF1bHRzLmFycm93LmZpbGx9IHR5cGU9e2ljb259IC8+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbkFycm93LnByb3BUeXBlcyA9IHtcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydtZWRpdW0nLCAnc21hbGwnXSkuaXNSZXF1aXJlZCxcbn07XG5BcnJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6ICdtZWRpdW0nLFxufTtcbkFycm93LmNvbnRleHRUeXBlcyA9IHtcbiAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gIGFycm93OiB7XG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcGFkZGluZzogMTAsIC8vIGluY3JlYXNlIGhpdCBhcmVhXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNTAlJyxcblxuICAgIC8vIGRpc2FibGUgdXNlciBzZWxlY3RcbiAgICBXZWJraXRUb3VjaENhbGxvdXQ6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIH0sXG5cbiAgLy8gc2l6ZXNcbiAgYXJyb3dfX3NpemVfX21lZGl1bToge1xuICAgIGhlaWdodDogZGVmYXVsdHMuYXJyb3cuaGVpZ2h0LFxuICAgIG1hcmdpblRvcDogZGVmYXVsdHMuYXJyb3cuaGVpZ2h0IC8gLTIsXG4gICAgd2lkdGg6IDQwLFxuXG4gICAgJ0BtZWRpYSAobWluLXdpZHRoOiA3NjhweCknOiB7XG4gICAgICB3aWR0aDogNzAsXG4gICAgfSxcbiAgfSxcbiAgYXJyb3dfX3NpemVfX3NtYWxsOiB7XG4gICAgaGVpZ2h0OiBkZWZhdWx0cy50aHVtYm5haWwuc2l6ZSxcbiAgICBtYXJnaW5Ub3A6IGRlZmF1bHRzLnRodW1ibmFpbC5zaXplIC8gLTIsXG4gICAgd2lkdGg6IDMwLFxuXG4gICAgJ0BtZWRpYSAobWluLXdpZHRoOiA1MDBweCknOiB7XG4gICAgICB3aWR0aDogNDAsXG4gICAgfSxcbiAgfSxcblxuICAvLyBkaXJlY3Rpb25cbiAgYXJyb3dfX2RpcmVjdGlvbl9fcmlnaHQ6IHtcbiAgICByaWdodDogZGVmYXVsdHMuY29udGFpbmVyLmd1dHRlci5ob3Jpem9udGFsLFxuICB9LFxuICBhcnJvd19fZGlyZWN0aW9uX19sZWZ0OiB7XG4gICAgbGVmdDogZGVmYXVsdHMuY29udGFpbmVyLmd1dHRlci5ob3Jpem9udGFsLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJyb3c7XG4iXX0=
