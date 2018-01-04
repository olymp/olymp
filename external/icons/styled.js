'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactFela = require('react-fela');

exports.default = function (Wrapped) {
  return (0, _reactFela.createComponent)(function (_ref) {
    var theme = _ref.theme,
        color = _ref.color,
        width = _ref.width,
        height = _ref.height,
        size = _ref.size,
        onClick = _ref.onClick,
        margin = _ref.margin,
        marginLeft = _ref.marginLeft,
        marginRight = _ref.marginRight,
        marginTop = _ref.marginTop,
        marginBottom = _ref.marginBottom;
    return {
      margin: margin,
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginTop: marginTop,
      marginBottom: marginBottom,
      fill: color === true ? theme.color : typeof color === 'string' ? theme[color] || color : theme.inverted ? theme.light : theme.dark
    };
  }, Wrapped, ['width', 'height', 'size', 'onClick', 'onMouseEnter', 'onMouseLeave', 'onMouseOver', 'onMouseDown']);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL3N0eWxlZC5lczYiXSwibmFtZXMiOlsidGhlbWUiLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsIm9uQ2xpY2siLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJmaWxsIiwiaW52ZXJ0ZWQiLCJsaWdodCIsImRhcmsiLCJXcmFwcGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7a0JBRWU7QUFBQSxTQUNiLGdDQUNFO0FBQUEsUUFDRUEsS0FERixRQUNFQSxLQURGO0FBQUEsUUFFRUMsS0FGRixRQUVFQSxLQUZGO0FBQUEsUUFHRUMsS0FIRixRQUdFQSxLQUhGO0FBQUEsUUFJRUMsTUFKRixRQUlFQSxNQUpGO0FBQUEsUUFLRUMsSUFMRixRQUtFQSxJQUxGO0FBQUEsUUFNRUMsT0FORixRQU1FQSxPQU5GO0FBQUEsUUFPRUMsTUFQRixRQU9FQSxNQVBGO0FBQUEsUUFRRUMsVUFSRixRQVFFQSxVQVJGO0FBQUEsUUFTRUMsV0FURixRQVNFQSxXQVRGO0FBQUEsUUFVRUMsU0FWRixRQVVFQSxTQVZGO0FBQUEsUUFXRUMsWUFYRixRQVdFQSxZQVhGO0FBQUEsV0FZTztBQUNMSixvQkFESztBQUVMQyw0QkFGSztBQUdMQyw4QkFISztBQUlMQywwQkFKSztBQUtMQyxnQ0FMSztBQU1MQyxZQUNFVixVQUFVLElBQVYsR0FDSUQsTUFBTUMsS0FEVixHQUVJLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsR0FDRUQsTUFBTUMsS0FBTixLQUFnQkEsS0FEbEIsR0FFRUQsTUFBTVksUUFBTixHQUFpQlosTUFBTWEsS0FBdkIsR0FBK0JiLE1BQU1jO0FBWHhDLEtBWlA7QUFBQSxHQURGLEVBMEJFQyxPQTFCRixFQTJCRSxDQUNFLE9BREYsRUFFRSxRQUZGLEVBR0UsTUFIRixFQUlFLFNBSkYsRUFLRSxjQUxGLEVBTUUsY0FORixFQU9FLGFBUEYsRUFRRSxhQVJGLENBM0JGLENBRGE7QUFBQSxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVkID0+XG4gIGNyZWF0ZUNvbXBvbmVudChcbiAgICAoe1xuICAgICAgdGhlbWUsXG4gICAgICBjb2xvcixcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgc2l6ZSxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBtYXJnaW4sXG4gICAgICBtYXJnaW5MZWZ0LFxuICAgICAgbWFyZ2luUmlnaHQsXG4gICAgICBtYXJnaW5Ub3AsXG4gICAgICBtYXJnaW5Cb3R0b20sXG4gICAgfSkgPT4gKHtcbiAgICAgIG1hcmdpbixcbiAgICAgIG1hcmdpbkxlZnQsXG4gICAgICBtYXJnaW5SaWdodCxcbiAgICAgIG1hcmdpblRvcCxcbiAgICAgIG1hcmdpbkJvdHRvbSxcbiAgICAgIGZpbGw6XG4gICAgICAgIGNvbG9yID09PSB0cnVlXG4gICAgICAgICAgPyB0aGVtZS5jb2xvclxuICAgICAgICAgIDogdHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyB0aGVtZVtjb2xvcl0gfHwgY29sb3JcbiAgICAgICAgICAgIDogdGhlbWUuaW52ZXJ0ZWQgPyB0aGVtZS5saWdodCA6IHRoZW1lLmRhcmssXG4gICAgfSksXG4gICAgV3JhcHBlZCxcbiAgICBbXG4gICAgICAnd2lkdGgnLFxuICAgICAgJ2hlaWdodCcsXG4gICAgICAnc2l6ZScsXG4gICAgICAnb25DbGljaycsXG4gICAgICAnb25Nb3VzZUVudGVyJyxcbiAgICAgICdvbk1vdXNlTGVhdmUnLFxuICAgICAgJ29uTW91c2VPdmVyJyxcbiAgICAgICdvbk1vdXNlRG93bicsXG4gICAgXSxcbiAgKTtcbiJdfQ==
