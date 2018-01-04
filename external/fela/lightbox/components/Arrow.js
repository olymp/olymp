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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Arrow(_ref, _ref2) {
  var theme = _ref2.theme;

  var direction = _ref.direction,
      icon = _ref.icon,
      onClick = _ref.onClick,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ['direction', 'icon', 'onClick', 'size']);

  var classes = _noImportant.StyleSheet.create((0, _utils.deepMerge)(defaultStyles, theme));

  return _react2.default.createElement(
    'button',
    _extends({
      type: 'button',
      className: (0, _noImportant.css)(classes.arrow, classes['arrow__direction__' + direction], size && classes['arrow__size__' + size]),
      onClick: onClick,
      onTouchEnd: onClick
    }, props),
    _react2.default.createElement(_Icon2.default, { fill: !!theme.arrow && theme.arrow.fill || _theme2.default.arrow.fill, type: icon })
  );
}

Arrow.propTypes = {
  direction: _propTypes2.default.oneOf(['left', 'right']),
  icon: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  size: _propTypes2.default.oneOf(['medium', 'small']).isRequired
};
Arrow.defaultProps = {
  size: 'medium'
};
Arrow.contextTypes = {
  theme: _propTypes2.default.object.isRequired
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
    height: _theme2.default.arrow.height,
    marginTop: _theme2.default.arrow.height / -2,
    width: 40,

    '@media (min-width: 768px)': {
      width: 70
    }
  },
  arrow__size__small: {
    height: _theme2.default.thumbnail.size,
    marginTop: _theme2.default.thumbnail.size / -2,
    width: 30,

    '@media (min-width: 500px)': {
      width: 40
    }
  },

  // direction
  arrow__direction__right: {
    right: _theme2.default.container.gutter.horizontal
  },
  arrow__direction__left: {
    left: _theme2.default.container.gutter.horizontal
  }
};

exports.default = Arrow;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9BcnJvdy5lczYiXSwibmFtZXMiOlsiQXJyb3ciLCJ0aGVtZSIsImRpcmVjdGlvbiIsImljb24iLCJvbkNsaWNrIiwic2l6ZSIsInByb3BzIiwiY2xhc3NlcyIsImNyZWF0ZSIsImRlZmF1bHRTdHlsZXMiLCJhcnJvdyIsImZpbGwiLCJwcm9wVHlwZXMiLCJvbmVPZiIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwiY29udGV4dFR5cGVzIiwib2JqZWN0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsIm91dGxpbmUiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJ0b3AiLCJXZWJraXRUb3VjaENhbGxvdXQiLCJ1c2VyU2VsZWN0IiwiYXJyb3dfX3NpemVfX21lZGl1bSIsImhlaWdodCIsIm1hcmdpblRvcCIsIndpZHRoIiwiYXJyb3dfX3NpemVfX3NtYWxsIiwidGh1bWJuYWlsIiwiYXJyb3dfX2RpcmVjdGlvbl9fcmlnaHQiLCJyaWdodCIsImNvbnRhaW5lciIsImd1dHRlciIsImhvcml6b250YWwiLCJhcnJvd19fZGlyZWN0aW9uX19sZWZ0IiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTQSxLQUFULGNBU0c7QUFBQSxNQUREQyxLQUNDLFNBRERBLEtBQ0M7O0FBQUEsTUFSREMsU0FRQyxRQVJEQSxTQVFDO0FBQUEsTUFQREMsSUFPQyxRQVBEQSxJQU9DO0FBQUEsTUFOREMsT0FNQyxRQU5EQSxPQU1DO0FBQUEsTUFMREMsSUFLQyxRQUxEQSxJQUtDO0FBQUEsTUFKRUMsS0FJRjs7QUFDRCxNQUFNQyxVQUFVLHdCQUFXQyxNQUFYLENBQWtCLHNCQUFVQyxhQUFWLEVBQXlCUixLQUF6QixDQUFsQixDQUFoQjs7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUNFLFlBQUssUUFEUDtBQUVFLGlCQUFXLHNCQUFJTSxRQUFRRyxLQUFaLEVBQW1CSCwrQkFBNkJMLFNBQTdCLENBQW5CLEVBQThERyxRQUFRRSwwQkFBd0JGLElBQXhCLENBQXRFLENBRmI7QUFHRSxlQUFTRCxPQUhYO0FBSUUsa0JBQVlBO0FBSmQsT0FLTUUsS0FMTjtBQU9FLG9EQUFNLE1BQU0sQ0FBQyxDQUFDTCxNQUFNUyxLQUFSLElBQWlCVCxNQUFNUyxLQUFOLENBQVlDLElBQTdCLElBQXFDLGdCQUFTRCxLQUFULENBQWVDLElBQWhFLEVBQXNFLE1BQU1SLElBQTVFO0FBUEYsR0FERjtBQVdEOztBQUVESCxNQUFNWSxTQUFOLEdBQWtCO0FBQ2hCVixhQUFXLG9CQUFVVyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBaEIsQ0FESztBQUVoQlYsUUFBTSxvQkFBVVcsTUFGQTtBQUdoQlYsV0FBUyxvQkFBVVcsSUFBVixDQUFlQyxVQUhSO0FBSWhCWCxRQUFNLG9CQUFVUSxLQUFWLENBQWdCLENBQUMsUUFBRCxFQUFXLE9BQVgsQ0FBaEIsRUFBcUNHO0FBSjNCLENBQWxCO0FBTUFoQixNQUFNaUIsWUFBTixHQUFxQjtBQUNuQlosUUFBTTtBQURhLENBQXJCO0FBR0FMLE1BQU1rQixZQUFOLEdBQXFCO0FBQ25CakIsU0FBTyxvQkFBVWtCLE1BQVYsQ0FBaUJIO0FBREwsQ0FBckI7O0FBSUEsSUFBTVAsZ0JBQWdCO0FBQ3BCQyxTQUFPO0FBQ0xVLGdCQUFZLE1BRFA7QUFFTEMsWUFBUSxNQUZIO0FBR0xDLGtCQUFjLENBSFQ7QUFJTEMsWUFBUSxTQUpIO0FBS0xDLGFBQVMsTUFMSjtBQU1MQyxhQUFTLEVBTkosRUFNUTtBQUNiQyxjQUFVLFVBUEw7QUFRTEMsU0FBSyxLQVJBOztBQVVMO0FBQ0FDLHdCQUFvQixNQVhmO0FBWUxDLGdCQUFZO0FBWlAsR0FEYTs7QUFnQnBCO0FBQ0FDLHVCQUFxQjtBQUNuQkMsWUFBUSxnQkFBU3JCLEtBQVQsQ0FBZXFCLE1BREo7QUFFbkJDLGVBQVcsZ0JBQVN0QixLQUFULENBQWVxQixNQUFmLEdBQXdCLENBQUMsQ0FGakI7QUFHbkJFLFdBQU8sRUFIWTs7QUFLbkIsaUNBQTZCO0FBQzNCQSxhQUFPO0FBRG9CO0FBTFYsR0FqQkQ7QUEwQnBCQyxzQkFBb0I7QUFDbEJILFlBQVEsZ0JBQVNJLFNBQVQsQ0FBbUI5QixJQURUO0FBRWxCMkIsZUFBVyxnQkFBU0csU0FBVCxDQUFtQjlCLElBQW5CLEdBQTBCLENBQUMsQ0FGcEI7QUFHbEI0QixXQUFPLEVBSFc7O0FBS2xCLGlDQUE2QjtBQUMzQkEsYUFBTztBQURvQjtBQUxYLEdBMUJBOztBQW9DcEI7QUFDQUcsMkJBQXlCO0FBQ3ZCQyxXQUFPLGdCQUFTQyxTQUFULENBQW1CQyxNQUFuQixDQUEwQkM7QUFEVixHQXJDTDtBQXdDcEJDLDBCQUF3QjtBQUN0QkMsVUFBTSxnQkFBU0osU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEJDO0FBRFY7QUF4Q0osQ0FBdEI7O2tCQTZDZXhDLEsiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9saWdodGJveC9jb21wb25lbnRzL0Fycm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcblxuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbmZ1bmN0aW9uIEFycm93KHtcbiAgZGlyZWN0aW9uLFxuICBpY29uLFxuICBvbkNsaWNrLFxuICBzaXplLFxuICAuLi5wcm9wcyxcbn0sXG57XG4gIHRoZW1lLFxufSkge1xuICBjb25zdCBjbGFzc2VzID0gU3R5bGVTaGVldC5jcmVhdGUoZGVlcE1lcmdlKGRlZmF1bHRTdHlsZXMsIHRoZW1lKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuYXJyb3csIGNsYXNzZXNbYGFycm93X19kaXJlY3Rpb25fXyR7ZGlyZWN0aW9ufWBdLCBzaXplICYmIGNsYXNzZXNbYGFycm93X19zaXplX18ke3NpemV9YF0pfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIG9uVG91Y2hFbmQ9e29uQ2xpY2t9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPEljb24gZmlsbD17ISF0aGVtZS5hcnJvdyAmJiB0aGVtZS5hcnJvdy5maWxsIHx8IGRlZmF1bHRzLmFycm93LmZpbGx9IHR5cGU9e2ljb259IC8+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbkFycm93LnByb3BUeXBlcyA9IHtcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydtZWRpdW0nLCAnc21hbGwnXSkuaXNSZXF1aXJlZCxcbn07XG5BcnJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6ICdtZWRpdW0nLFxufTtcbkFycm93LmNvbnRleHRUeXBlcyA9IHtcbiAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gIGFycm93OiB7XG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcGFkZGluZzogMTAsIC8vIGluY3JlYXNlIGhpdCBhcmVhXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNTAlJyxcblxuICAgIC8vIGRpc2FibGUgdXNlciBzZWxlY3RcbiAgICBXZWJraXRUb3VjaENhbGxvdXQ6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIH0sXG5cbiAgLy8gc2l6ZXNcbiAgYXJyb3dfX3NpemVfX21lZGl1bToge1xuICAgIGhlaWdodDogZGVmYXVsdHMuYXJyb3cuaGVpZ2h0LFxuICAgIG1hcmdpblRvcDogZGVmYXVsdHMuYXJyb3cuaGVpZ2h0IC8gLTIsXG4gICAgd2lkdGg6IDQwLFxuXG4gICAgJ0BtZWRpYSAobWluLXdpZHRoOiA3NjhweCknOiB7XG4gICAgICB3aWR0aDogNzAsXG4gICAgfSxcbiAgfSxcbiAgYXJyb3dfX3NpemVfX3NtYWxsOiB7XG4gICAgaGVpZ2h0OiBkZWZhdWx0cy50aHVtYm5haWwuc2l6ZSxcbiAgICBtYXJnaW5Ub3A6IGRlZmF1bHRzLnRodW1ibmFpbC5zaXplIC8gLTIsXG4gICAgd2lkdGg6IDMwLFxuXG4gICAgJ0BtZWRpYSAobWluLXdpZHRoOiA1MDBweCknOiB7XG4gICAgICB3aWR0aDogNDAsXG4gICAgfSxcbiAgfSxcblxuICAvLyBkaXJlY3Rpb25cbiAgYXJyb3dfX2RpcmVjdGlvbl9fcmlnaHQ6IHtcbiAgICByaWdodDogZGVmYXVsdHMuY29udGFpbmVyLmd1dHRlci5ob3Jpem9udGFsLFxuICB9LFxuICBhcnJvd19fZGlyZWN0aW9uX19sZWZ0OiB7XG4gICAgbGVmdDogZGVmYXVsdHMuY29udGFpbmVyLmd1dHRlci5ob3Jpem9udGFsLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJyb3c7XG4iXX0=
