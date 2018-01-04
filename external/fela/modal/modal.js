'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _portal = require('../portal');

var _portal2 = _interopRequireDefault(_portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ModalBackground = (0, _reactFela.createComponent)(function (_ref) {
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
  }, (0, _get3.default)(theme, 'modalBackdrop', {}));
}, 'div', ['onClick']);

var Modal = (0, _reactFela.createComponent)(function (_ref2) {
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

exports.default = function (_ref3) {
  var children = _ref3.children,
      open = _ref3.open,
      _ref3$portal = _ref3.portal,
      portal = _ref3$portal === undefined ? false : _ref3$portal,
      _ref3$noScroll = _ref3.noScroll,
      noScroll = _ref3$noScroll === undefined ? true : _ref3$noScroll,
      onClose = _ref3.onClose,
      backgroundColor = _ref3.backgroundColor,
      props = _objectWithoutProperties(_ref3, ['children', 'open', 'portal', 'noScroll', 'onClose', 'backgroundColor']);

  return open === undefined || open ? _react2.default.createElement(
    _portal2.default,
    { noScroll: noScroll, noPortal: !portal },
    _react2.default.createElement(
      ModalBackground,
      {
        backgroundColor: backgroundColor,
        onClick: function onClick(e) {
          e.stopPropagation();
          onClose(e);
        }
      },
      _react2.default.createElement(
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
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbW9kYWwvbW9kYWwuZXM2Il0sIm5hbWVzIjpbIk1vZGFsQmFja2dyb3VuZCIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJvdmVyZmxvdyIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsInpJbmRleCIsImRhcmsyIiwiTW9kYWwiLCJ3aWR0aCIsImhlaWdodCIsInNjcm9sbCIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJib3JkZXIiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ1c2VyU2VsZWN0Iiwid2lsbENoYW5nZSIsImFuaW1hdGlvbk5hbWUiLCJmcm9tIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsInRvIiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uIiwiYW5pbWF0aW9uRmlsbE1vZGUiLCJsaWdodCIsImJvcmRlclJhZGl1cyIsImV4dGVuZCIsIm1pbkhlaWdodCIsIm1hcmdpblRvcCIsImNoaWxkcmVuIiwib3BlbiIsInBvcnRhbCIsIm5vU2Nyb2xsIiwib25DbG9zZSIsInByb3BzIiwidW5kZWZpbmVkIiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsZ0NBQ3RCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsZUFBVixRQUFVQSxlQUFWO0FBQUE7QUFDRUMsY0FBVSxPQURaO0FBRUVDLGNBQVUsTUFGWjtBQUdFQyxTQUFLLENBSFA7QUFJRUMsVUFBTSxDQUpSO0FBS0VDLFlBQVEsQ0FMVjtBQU1FQyxXQUFPLENBTlQ7QUFPRUMsWUFBUSxJQVBWO0FBUUVQLHFCQUFpQkEsbUJBQW1CRCxNQUFNUztBQVI1QyxLQVNLLG1CQUFJVCxLQUFKLEVBQVcsZUFBWCxFQUE0QixFQUE1QixDQVRMO0FBQUEsQ0FEc0IsRUFZdEIsS0Fac0IsRUFhdEIsQ0FBQyxTQUFELENBYnNCLENBQXhCOztBQWdCQSxJQUFNVSxRQUFRLGdDQUNaO0FBQUEsTUFBR1YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsMEJBQVVXLEtBQVY7QUFBQSxNQUFVQSxLQUFWLCtCQUFrQixHQUFsQjtBQUFBLE1BQXVCQyxNQUF2QixTQUF1QkEsTUFBdkI7QUFBQSwyQkFBK0JDLE1BQS9CO0FBQUEsTUFBK0JBLE1BQS9CLGdDQUF3QyxLQUF4QztBQUFBLFNBQXFEO0FBQ25EWCxjQUFVLFFBRHlDO0FBRW5EQyxjQUFVLFFBRnlDO0FBR25EO0FBQ0FLLFlBQVEsSUFKMkM7QUFLbkQ7QUFDQU0sWUFBUSxNQU4yQztBQU9uRFQsVUFBTSxLQVA2QztBQVFuRFUsZ0JBQVksTUFSdUM7QUFTbkRDLFlBQVEsTUFUMkM7QUFVbkRDLHFCQUFpQixTQVZrQztBQVduREMsZ0JBQVksTUFYdUM7QUFZbkRDLGdCQUFZLG1DQVp1QztBQWFuRFIsV0FBT0EsVUFBVSxNQUFWLEdBQW1CLEtBQW5CLEdBQTJCQSxLQWJpQjtBQWNuRFMsbUJBQWU7QUFDYkMsWUFBTTtBQUNKQyxpQkFBUyxDQURMO0FBRUpDLG1CQUFXO0FBRlAsT0FETztBQUtiQyxVQUFJO0FBQ0ZGLGlCQUFTLENBRFA7QUFFRkMsbUJBQVc7QUFGVDtBQUxTLEtBZG9DO0FBd0JuREUsNkJBQXlCLENBeEIwQjtBQXlCbkRDLHVCQUFtQixLQXpCZ0M7QUEwQm5EQyw2QkFBeUIsTUExQjBCO0FBMkJuREMsdUJBQW1CLE1BM0JnQztBQTRCbkQzQixxQkFBaUJELE1BQU02QixLQTVCNEI7QUE2Qm5EO0FBQ0E7QUFDQUMsa0JBQWM5QixNQUFNOEIsWUEvQitCO0FBZ0NuREMsWUFBUWxCLFNBQ0o7QUFDRW1CLGlCQUFXO0FBRGIsS0FESSxHQUlKO0FBQ0VDLGlCQUFXckIsV0FBVyxNQUFYLEdBQW9CLENBQXBCLEdBQXdCLEVBRHJDO0FBRUVBLGNBQVFBLFVBQVU7QUFGcEI7QUFwQytDLEdBQXJEO0FBQUEsQ0FEWSxFQTBDWixLQTFDWSxFQTJDWixDQUFDLFNBQUQsQ0EzQ1ksQ0FBZDs7a0JBOENlO0FBQUEsTUFDYnNCLFFBRGEsU0FDYkEsUUFEYTtBQUFBLE1BRWJDLElBRmEsU0FFYkEsSUFGYTtBQUFBLDJCQUdiQyxNQUhhO0FBQUEsTUFHYkEsTUFIYSxnQ0FHSixLQUhJO0FBQUEsNkJBSWJDLFFBSmE7QUFBQSxNQUliQSxRQUphLGtDQUlGLElBSkU7QUFBQSxNQUtiQyxPQUxhLFNBS2JBLE9BTGE7QUFBQSxNQU1ickMsZUFOYSxTQU1iQSxlQU5hO0FBQUEsTUFPVnNDLEtBUFU7O0FBQUEsU0FTYkosU0FBU0ssU0FBVCxJQUFzQkwsSUFBdEIsR0FDRTtBQUFBO0FBQUEsTUFBUSxVQUFVRSxRQUFsQixFQUE0QixVQUFVLENBQUNELE1BQXZDO0FBQ0U7QUFBQyxxQkFBRDtBQUFBO0FBQ0UseUJBQWlCbkMsZUFEbkI7QUFFRSxpQkFBUyxvQkFBSztBQUNad0MsWUFBRUMsZUFBRjtBQUNBSixrQkFBUUcsQ0FBUjtBQUNEO0FBTEg7QUFPRTtBQUFDLGFBQUQ7QUFBQSxxQkFDTUYsS0FETjtBQUVFLG1CQUFTLG9CQUFLO0FBQ1o7QUFDQSxnQkFBSUUsRUFBRUMsZUFBTixFQUF1QjtBQUNyQkQsZ0JBQUVDLGVBQUY7QUFDRDtBQUNGO0FBUEg7QUFTR1I7QUFUSDtBQVBGO0FBREYsR0FERixHQXNCSSxJQS9CUztBQUFBLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9tb2RhbC9tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uL3BvcnRhbCc7XG5cbmNvbnN0IE1vZGFsQmFja2dyb3VuZCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGJhY2tncm91bmRDb2xvciB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHpJbmRleDogMTAwMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciB8fCB0aGVtZS5kYXJrMixcbiAgICAuLi5nZXQodGhlbWUsICdtb2RhbEJhY2tkcm9wJywge30pLFxuICB9KSxcbiAgJ2RpdicsXG4gIFsnb25DbGljayddLFxuKTtcblxuY29uc3QgTW9kYWwgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCB3aWR0aCA9IDUwMCwgaGVpZ2h0LCBzY3JvbGwgPSBmYWxzZSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAnc3RhdGljJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgLy8gZGlzcGxheTogJ25vbmUnLFxuICAgIHpJbmRleDogMTAwMSxcbiAgICAvLyB0b3A6ICc1MCUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMjUlJyxcbiAgICB1c2VyU2VsZWN0OiAndGV4dCcsXG4gICAgd2lsbENoYW5nZTogJ3RvcCxsZWZ0LG1hcmdpbix0cmFuc2Zvcm0sb3BhY2l0eScsXG4gICAgd2lkdGg6IHdpZHRoID09PSAnZmlsbCcgPyAnOTAlJyA6IHdpZHRoLFxuICAgIGFuaW1hdGlvbk5hbWU6IHtcbiAgICAgIGZyb206IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSg2MHB4KScsXG4gICAgICB9LFxuICAgICAgdG86IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwcHgpJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgICBhbmltYXRpb25EdXJhdGlvbjogJy4zcycsXG4gICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdlYXNlJyxcbiAgICBhbmltYXRpb25GaWxsTW9kZTogJ2JvdGgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUubGlnaHQsXG4gICAgLy8gYm94U2hhZG93OiB0aGVtZS5ib3hTaGFkb3csXG4gICAgLy8gYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuZGFyazF9YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICBleHRlbmQ6IHNjcm9sbFxuICAgICAgPyB7XG4gICAgICAgICAgbWluSGVpZ2h0OiA1MDAsXG4gICAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICAgIG1hcmdpblRvcDogaGVpZ2h0ID09PSAnMTAwJScgPyAwIDogNTAsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgfHwgJzkwJScsXG4gICAgICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgWydvbkNsaWNrJ10sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBjaGlsZHJlbixcbiAgb3BlbixcbiAgcG9ydGFsID0gZmFsc2UsXG4gIG5vU2Nyb2xsID0gdHJ1ZSxcbiAgb25DbG9zZSxcbiAgYmFja2dyb3VuZENvbG9yLFxuICAuLi5wcm9wc1xufSkgPT5cbiAgb3BlbiA9PT0gdW5kZWZpbmVkIHx8IG9wZW4gPyAoXG4gICAgPFBvcnRhbCBub1Njcm9sbD17bm9TY3JvbGx9IG5vUG9ydGFsPXshcG9ydGFsfT5cbiAgICAgIDxNb2RhbEJhY2tncm91bmRcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgb25DbG9zZShlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgLy8gZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvTW9kYWxCYWNrZ3JvdW5kPlxuICAgIDwvUG9ydGFsPlxuICApIDogbnVsbDtcbiJdfQ==
