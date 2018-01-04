'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Placeholder = exports.Container = exports.Panel = exports.SplitView = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _olympFela = require('olymp-fela');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SplitView = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      maxWidth = _ref.maxWidth,
      center = _ref.center,
      background = _ref.background;
  return {
    hasFlex: {
      display: 'flex',
      flex: '1 1 0%'
    },
    background: background === true && 'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.033))',
    '> :first-child': {
      flexGrow: 0,
      overflowY: 'auto',
      position: 'relative'
    },
    '> :nth-child(2)': {
      flexGrow: 1,
      overflowY: 'auto',
      margin: center && '0 auto',
      position: 'relative',
      // borderX: center && border(theme),
      maxWidth: maxWidth,
      height: '100%'
    }
  };
}, 'div', function (_ref2) {
  var maxWidth = _ref2.maxWidth,
      center = _ref2.center,
      background = _ref2.background,
      p = _objectWithoutProperties(_ref2, ['maxWidth', 'center', 'background']);

  return Object.keys(p);
});

exports.SplitView = SplitView;
var Panel = (0, _olympFela.createComponent)(function (_ref3) {
  var display = _ref3.display,
      axis = _ref3.axis,
      show = _ref3.show,
      alignLabel = _ref3.alignLabel,
      rest = _objectWithoutProperties(_ref3, ['display', 'axis', 'show', 'alignLabel']);

  return _extends({
    position: 'relative',
    // border: '1px solid transparent',
    overflowY: 'auto',
    display: show === false ? 'none' : display,
    flexDirection: axis === 'x' ? 'row' : axis === 'y' ? 'column' : undefined,
    '> *': display === 'flex' && {
      overflowY: 'auto'
    }
  }, rest, {
    '& .ant-form-item': alignLabel && {
      // oops, should not be here!
      marginBottom: 12,
      '> .ant-form-item-label': {
        textAlign: alignLabel
      }
    }
  });
}, 'div', ['children', 'itemScope', 'itemType']);

exports.Panel = Panel;
var Container = (0, _olympFela.createComponent)(function (_ref4) {
  var theme = _ref4.theme,
      width = _ref4.width,
      padding = _ref4.padding,
      minHeight = _ref4.minHeight,
      height = _ref4.height;
  return {
    width: width || 700,
    maxWidth: width || 700,
    height: height,
    minHeight: minHeight,
    // boxShadow: theme.boxShadow,
    marginX: 'auto',
    padding: padding !== undefined ? padding : theme.space3,
    backgroundColor: '#FFFFFF',
    position: 'relative'
  };
}, 'div', function (_ref5) {
  var width = _ref5.width,
      minHeight = _ref5.minHeight,
      padding = _ref5.padding,
      p = _objectWithoutProperties(_ref5, ['width', 'minHeight', 'padding']);

  return Object.keys(p);
});

exports.Container = Container;
var Placeholder = exports.Placeholder = (0, _olympFela.createComponent)(function (_ref6) {
  var theme = _ref6.theme;
  return {
    textAlign: 'center',
    fontWeight: 200,
    fontSize: '200%',
    opacity: 0.5,
    minHeight: 300,
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  };
}, 'div', function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2NvbnRhaW5lcnMuZXM2Il0sIm5hbWVzIjpbIlNwbGl0VmlldyIsInRoZW1lIiwibWF4V2lkdGgiLCJjZW50ZXIiLCJiYWNrZ3JvdW5kIiwiaGFzRmxleCIsImRpc3BsYXkiLCJmbGV4IiwiZmxleEdyb3ciLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsIm1hcmdpbiIsImhlaWdodCIsInAiLCJPYmplY3QiLCJrZXlzIiwiUGFuZWwiLCJheGlzIiwic2hvdyIsImFsaWduTGFiZWwiLCJyZXN0IiwiZmxleERpcmVjdGlvbiIsInVuZGVmaW5lZCIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiIsIkNvbnRhaW5lciIsIndpZHRoIiwicGFkZGluZyIsIm1pbkhlaWdodCIsIm1hcmdpblgiLCJzcGFjZTMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQbGFjZWhvbGRlciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm9wYWNpdHkiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUVPLElBQU1BLFlBQVksZ0NBQ3ZCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsUUFBVixRQUFVQSxRQUFWO0FBQUEsTUFBb0JDLE1BQXBCLFFBQW9CQSxNQUFwQjtBQUFBLE1BQTRCQyxVQUE1QixRQUE0QkEsVUFBNUI7QUFBQSxTQUE4QztBQUM1Q0MsYUFBUztBQUNQQyxlQUFTLE1BREY7QUFFUEMsWUFBTTtBQUZDLEtBRG1DO0FBSzVDSCxnQkFDRUEsZUFBZSxJQUFmLElBQXVCLGtFQU5tQjtBQU81QyxzQkFBa0I7QUFDaEJJLGdCQUFVLENBRE07QUFFaEJDLGlCQUFXLE1BRks7QUFHaEJDLGdCQUFVO0FBSE0sS0FQMEI7QUFZNUMsdUJBQW1CO0FBQ2pCRixnQkFBVSxDQURPO0FBRWpCQyxpQkFBVyxNQUZNO0FBR2pCRSxjQUFRUixVQUFVLFFBSEQ7QUFJakJPLGdCQUFVLFVBSk87QUFLakI7QUFDQVIsd0JBTmlCO0FBT2pCVSxjQUFRO0FBUFM7QUFaeUIsR0FBOUM7QUFBQSxDQUR1QixFQXVCdkIsS0F2QnVCLEVBd0J2QjtBQUFBLE1BQUdWLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFDLE1BQWIsU0FBYUEsTUFBYjtBQUFBLE1BQXFCQyxVQUFyQixTQUFxQkEsVUFBckI7QUFBQSxNQUFvQ1MsQ0FBcEM7O0FBQUEsU0FBNENDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUE1QztBQUFBLENBeEJ1QixDQUFsQjs7O0FBMkJBLElBQU1HLFFBQVEsZ0NBQ25CO0FBQUEsTUFBR1YsT0FBSCxTQUFHQSxPQUFIO0FBQUEsTUFBWVcsSUFBWixTQUFZQSxJQUFaO0FBQUEsTUFBa0JDLElBQWxCLFNBQWtCQSxJQUFsQjtBQUFBLE1BQXdCQyxVQUF4QixTQUF3QkEsVUFBeEI7QUFBQSxNQUF1Q0MsSUFBdkM7O0FBQUE7QUFDRVYsY0FBVSxVQURaO0FBRUU7QUFDQUQsZUFBVyxNQUhiO0FBSUVILGFBQVNZLFNBQVMsS0FBVCxHQUFpQixNQUFqQixHQUEwQlosT0FKckM7QUFLRWUsbUJBQWVKLFNBQVMsR0FBVCxHQUFlLEtBQWYsR0FBdUJBLFNBQVMsR0FBVCxHQUFlLFFBQWYsR0FBMEJLLFNBTGxFO0FBTUUsV0FBT2hCLFlBQVksTUFBWixJQUFzQjtBQUMzQkcsaUJBQVc7QUFEZ0I7QUFOL0IsS0FTS1csSUFUTDtBQVVFLHdCQUFvQkQsY0FBYztBQUNoQztBQUNBSSxvQkFBYyxFQUZrQjtBQUdoQyxnQ0FBMEI7QUFDeEJDLG1CQUFXTDtBQURhO0FBSE07QUFWcEM7QUFBQSxDQURtQixFQW1CbkIsS0FuQm1CLEVBb0JuQixDQUFDLFVBQUQsRUFBYSxXQUFiLEVBQTBCLFVBQTFCLENBcEJtQixDQUFkOzs7QUF1QkEsSUFBTU0sWUFBWSxnQ0FDdkI7QUFBQSxNQUFHeEIsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVXlCLEtBQVYsU0FBVUEsS0FBVjtBQUFBLE1BQWlCQyxPQUFqQixTQUFpQkEsT0FBakI7QUFBQSxNQUEwQkMsU0FBMUIsU0FBMEJBLFNBQTFCO0FBQUEsTUFBcUNoQixNQUFyQyxTQUFxQ0EsTUFBckM7QUFBQSxTQUFtRDtBQUNqRGMsV0FBT0EsU0FBUyxHQURpQztBQUVqRHhCLGNBQVV3QixTQUFTLEdBRjhCO0FBR2pEZCxrQkFIaUQ7QUFJakRnQix3QkFKaUQ7QUFLakQ7QUFDQUMsYUFBUyxNQU53QztBQU9qREYsYUFBU0EsWUFBWUwsU0FBWixHQUF3QkssT0FBeEIsR0FBa0MxQixNQUFNNkIsTUFQQTtBQVFqREMscUJBQWlCLFNBUmdDO0FBU2pEckIsY0FBVTtBQVR1QyxHQUFuRDtBQUFBLENBRHVCLEVBWXZCLEtBWnVCLEVBYXZCO0FBQUEsTUFBR2dCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVVFLFNBQVYsU0FBVUEsU0FBVjtBQUFBLE1BQXFCRCxPQUFyQixTQUFxQkEsT0FBckI7QUFBQSxNQUFpQ2QsQ0FBakM7O0FBQUEsU0FBeUNDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUF6QztBQUFBLENBYnVCLENBQWxCOzs7QUFnQkEsSUFBTW1CLG9DQUFjLGdDQUN6QjtBQUFBLE1BQUcvQixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkdUIsZUFBVyxRQURHO0FBRWRTLGdCQUFZLEdBRkU7QUFHZEMsY0FBVSxNQUhJO0FBSWRDLGFBQVMsR0FKSztBQUtkUCxlQUFXLEdBTEc7QUFNZFEsU0FBSyxLQU5TO0FBT2RDLFVBQU0sS0FQUTtBQVFkM0IsY0FBVSxVQVJJO0FBU2Q0QixlQUFXO0FBVEcsR0FBaEI7QUFBQSxDQUR5QixFQVl6QixLQVp5QixFQWF6QjtBQUFBLFNBQUt4QixPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBTDtBQUFBLENBYnlCLENBQXBCIiwiZmlsZSI6ImV4dGVybmFsL3VpL2NvbnRhaW5lcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb21wb25lbnQsIGJvcmRlciB9IGZyb20gJ29seW1wLWZlbGEnO1xuXG5leHBvcnQgY29uc3QgU3BsaXRWaWV3ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgbWF4V2lkdGgsIGNlbnRlciwgYmFja2dyb3VuZCB9KSA9PiAoe1xuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXg6ICcxIDEgMCUnLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDpcbiAgICAgIGJhY2tncm91bmQgPT09IHRydWUgJiYgJ2xpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMDUpLCByZ2JhKDAsIDAsIDAsIDAuMDMzKSknLFxuICAgICc+IDpmaXJzdC1jaGlsZCc6IHtcbiAgICAgIGZsZXhHcm93OiAwLFxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB9LFxuICAgICc+IDpudGgtY2hpbGQoMiknOiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgbWFyZ2luOiBjZW50ZXIgJiYgJzAgYXV0bycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIC8vIGJvcmRlclg6IGNlbnRlciAmJiBib3JkZXIodGhlbWUpLFxuICAgICAgbWF4V2lkdGgsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IG1heFdpZHRoLCBjZW50ZXIsIGJhY2tncm91bmQsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgY29uc3QgUGFuZWwgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IGRpc3BsYXksIGF4aXMsIHNob3csIGFsaWduTGFiZWwsIC4uLnJlc3QgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgIGRpc3BsYXk6IHNob3cgPT09IGZhbHNlID8gJ25vbmUnIDogZGlzcGxheSxcbiAgICBmbGV4RGlyZWN0aW9uOiBheGlzID09PSAneCcgPyAncm93JyA6IGF4aXMgPT09ICd5JyA/ICdjb2x1bW4nIDogdW5kZWZpbmVkLFxuICAgICc+IConOiBkaXNwbGF5ID09PSAnZmxleCcgJiYge1xuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgfSxcbiAgICAuLi5yZXN0LFxuICAgICcmIC5hbnQtZm9ybS1pdGVtJzogYWxpZ25MYWJlbCAmJiB7XG4gICAgICAvLyBvb3BzLCBzaG91bGQgbm90IGJlIGhlcmUhXG4gICAgICBtYXJnaW5Cb3R0b206IDEyLFxuICAgICAgJz4gLmFudC1mb3JtLWl0ZW0tbGFiZWwnOiB7XG4gICAgICAgIHRleHRBbGlnbjogYWxpZ25MYWJlbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICBbJ2NoaWxkcmVuJywgJ2l0ZW1TY29wZScsICdpdGVtVHlwZSddLFxuKTtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIHdpZHRoLCBwYWRkaW5nLCBtaW5IZWlnaHQsIGhlaWdodCB9KSA9PiAoe1xuICAgIHdpZHRoOiB3aWR0aCB8fCA3MDAsXG4gICAgbWF4V2lkdGg6IHdpZHRoIHx8IDcwMCxcbiAgICBoZWlnaHQsXG4gICAgbWluSGVpZ2h0LFxuICAgIC8vIGJveFNoYWRvdzogdGhlbWUuYm94U2hhZG93LFxuICAgIG1hcmdpblg6ICdhdXRvJyxcbiAgICBwYWRkaW5nOiBwYWRkaW5nICE9PSB1bmRlZmluZWQgPyBwYWRkaW5nIDogdGhlbWUuc3BhY2UzLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IHdpZHRoLCBtaW5IZWlnaHQsIHBhZGRpbmcsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgY29uc3QgUGxhY2Vob2xkZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmb250V2VpZ2h0OiAyMDAsXG4gICAgZm9udFNpemU6ICcyMDAlJyxcbiAgICBvcGFjaXR5OiAwLjUsXG4gICAgbWluSGVpZ2h0OiAzMDAsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICB9KSxcbiAgJ2RpdicsXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuIl19
