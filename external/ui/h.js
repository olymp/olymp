'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionH = exports.H = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var H = (0, _olympFela.createComponent)(function (_ref) {
  var fontSize = _ref.fontSize,
      theme = _ref.theme,
      padding = _ref.padding,
      marginBottom = _ref.marginBottom,
      marginTop = _ref.marginTop,
      textAlign = _ref.textAlign,
      light = _ref.light,
      colored = _ref.colored,
      color = _ref.color,
      center = _ref.center;
  return {
    color: (colored || color) && theme.color,
    // fontWeight: light && 200,
    textAlign: center ? 'center' : textAlign,
    padding: padding,
    fontSize: fontSize,
    lineHeight: fontSize ? fontSize + 'px' : undefined,
    marginTop: marginTop !== undefined ? marginTop : undefined,
    marginBottom: marginBottom !== undefined ? marginBottom : 15,
    '& .ant-checkbox-inner': {
      width: 21,
      height: 21,
      onAfter: {
        left: 7,
        top: 5
      }
    }
  };
}, function (_ref2) {
  var level = _ref2.level,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ['level', 'children']);

  if (!level) {
    level = 1;
  }
  return _react2.default.createElement('h' + level, rest, children);
}, ['level', 'itemProp']);

exports.H = H;
var SectionH = exports.SectionH = function SectionH(_ref3) {
  var title = _ref3.title,
      description = _ref3.description;
  return _react2.default.createElement(
    'div',
    { key: 0 },
    _react2.default.createElement(
      H,
      { marginBottom: 0, textAlign: 'center', level: 3, light: true, color: true },
      title
    ),
    description && _react2.default.createElement(
      H,
      { marginTop: 0, textAlign: 'center', level: 5, fontSize: 12, light: true },
      description
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2guZXM2Il0sIm5hbWVzIjpbIkgiLCJmb250U2l6ZSIsInRoZW1lIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsImxpZ2h0IiwiY29sb3JlZCIsImNvbG9yIiwiY2VudGVyIiwibGluZUhlaWdodCIsInVuZGVmaW5lZCIsIndpZHRoIiwiaGVpZ2h0Iiwib25BZnRlciIsImxlZnQiLCJ0b3AiLCJsZXZlbCIsImNoaWxkcmVuIiwicmVzdCIsImNyZWF0ZUVsZW1lbnQiLCJTZWN0aW9uSCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxJQUFJLGdDQUNmO0FBQUEsTUFDRUMsUUFERixRQUNFQSxRQURGO0FBQUEsTUFFRUMsS0FGRixRQUVFQSxLQUZGO0FBQUEsTUFHRUMsT0FIRixRQUdFQSxPQUhGO0FBQUEsTUFJRUMsWUFKRixRQUlFQSxZQUpGO0FBQUEsTUFLRUMsU0FMRixRQUtFQSxTQUxGO0FBQUEsTUFNRUMsU0FORixRQU1FQSxTQU5GO0FBQUEsTUFPRUMsS0FQRixRQU9FQSxLQVBGO0FBQUEsTUFRRUMsT0FSRixRQVFFQSxPQVJGO0FBQUEsTUFTRUMsS0FURixRQVNFQSxLQVRGO0FBQUEsTUFVRUMsTUFWRixRQVVFQSxNQVZGO0FBQUEsU0FXTztBQUNMRCxXQUFPLENBQUNELFdBQVdDLEtBQVosS0FBc0JQLE1BQU1PLEtBRDlCO0FBRUw7QUFDQUgsZUFBV0ksU0FBUyxRQUFULEdBQW9CSixTQUgxQjtBQUlMSCxvQkFKSztBQUtMRixzQkFMSztBQU1MVSxnQkFBWVYsV0FBY0EsUUFBZCxVQUE2QlcsU0FOcEM7QUFPTFAsZUFBV0EsY0FBY08sU0FBZCxHQUEwQlAsU0FBMUIsR0FBc0NPLFNBUDVDO0FBUUxSLGtCQUFjQSxpQkFBaUJRLFNBQWpCLEdBQTZCUixZQUE3QixHQUE0QyxFQVJyRDtBQVNMLDZCQUF5QjtBQUN2QlMsYUFBTyxFQURnQjtBQUV2QkMsY0FBUSxFQUZlO0FBR3ZCQyxlQUFTO0FBQ1BDLGNBQU0sQ0FEQztBQUVQQyxhQUFLO0FBRkU7QUFIYztBQVRwQixHQVhQO0FBQUEsQ0FEZSxFQThCZixpQkFBa0M7QUFBQSxNQUEvQkMsS0FBK0IsU0FBL0JBLEtBQStCO0FBQUEsTUFBeEJDLFFBQXdCLFNBQXhCQSxRQUF3QjtBQUFBLE1BQVhDLElBQVc7O0FBQ2hDLE1BQUksQ0FBQ0YsS0FBTCxFQUFZO0FBQ1ZBLFlBQVEsQ0FBUjtBQUNEO0FBQ0QsU0FBTyxnQkFBTUcsYUFBTixPQUF3QkgsS0FBeEIsRUFBaUNFLElBQWpDLEVBQXVDRCxRQUF2QyxDQUFQO0FBQ0QsQ0FuQ2MsRUFvQ2YsQ0FBQyxPQUFELEVBQVUsVUFBVixDQXBDZSxDQUFWOzs7QUF1Q0EsSUFBTUcsOEJBQVcsU0FBWEEsUUFBVztBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVVDLFdBQVYsU0FBVUEsV0FBVjtBQUFBLFNBQ3RCO0FBQUE7QUFBQSxNQUFLLEtBQUssQ0FBVjtBQUNFO0FBQUMsT0FBRDtBQUFBLFFBQUcsY0FBYyxDQUFqQixFQUFvQixXQUFVLFFBQTlCLEVBQXVDLE9BQU8sQ0FBOUMsRUFBaUQsV0FBakQsRUFBdUQsV0FBdkQ7QUFDR0Q7QUFESCxLQURGO0FBSUdDLG1CQUNDO0FBQUMsT0FBRDtBQUFBLFFBQUcsV0FBVyxDQUFkLEVBQWlCLFdBQVUsUUFBM0IsRUFBb0MsT0FBTyxDQUEzQyxFQUE4QyxVQUFVLEVBQXhELEVBQTRELFdBQTVEO0FBQ0dBO0FBREg7QUFMSixHQURzQjtBQUFBLENBQWpCIiwiZmlsZSI6ImV4dGVybmFsL3VpL2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmV4cG9ydCBjb25zdCBIID0gY3JlYXRlQ29tcG9uZW50KFxuICAoe1xuICAgIGZvbnRTaXplLFxuICAgIHRoZW1lLFxuICAgIHBhZGRpbmcsXG4gICAgbWFyZ2luQm90dG9tLFxuICAgIG1hcmdpblRvcCxcbiAgICB0ZXh0QWxpZ24sXG4gICAgbGlnaHQsXG4gICAgY29sb3JlZCxcbiAgICBjb2xvcixcbiAgICBjZW50ZXIsXG4gIH0pID0+ICh7XG4gICAgY29sb3I6IChjb2xvcmVkIHx8IGNvbG9yKSAmJiB0aGVtZS5jb2xvcixcbiAgICAvLyBmb250V2VpZ2h0OiBsaWdodCAmJiAyMDAsXG4gICAgdGV4dEFsaWduOiBjZW50ZXIgPyAnY2VudGVyJyA6IHRleHRBbGlnbixcbiAgICBwYWRkaW5nLFxuICAgIGZvbnRTaXplLFxuICAgIGxpbmVIZWlnaHQ6IGZvbnRTaXplID8gYCR7Zm9udFNpemV9cHhgIDogdW5kZWZpbmVkLFxuICAgIG1hcmdpblRvcDogbWFyZ2luVG9wICE9PSB1bmRlZmluZWQgPyBtYXJnaW5Ub3AgOiB1bmRlZmluZWQsXG4gICAgbWFyZ2luQm90dG9tOiBtYXJnaW5Cb3R0b20gIT09IHVuZGVmaW5lZCA/IG1hcmdpbkJvdHRvbSA6IDE1LFxuICAgICcmIC5hbnQtY2hlY2tib3gtaW5uZXInOiB7XG4gICAgICB3aWR0aDogMjEsXG4gICAgICBoZWlnaHQ6IDIxLFxuICAgICAgb25BZnRlcjoge1xuICAgICAgICBsZWZ0OiA3LFxuICAgICAgICB0b3A6IDUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICAoeyBsZXZlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4ge1xuICAgIGlmICghbGV2ZWwpIHtcbiAgICAgIGxldmVsID0gMTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoYGgke2xldmVsfWAsIHJlc3QsIGNoaWxkcmVuKTtcbiAgfSxcbiAgWydsZXZlbCcsICdpdGVtUHJvcCddXG4pO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbkggPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4gKFxuICA8ZGl2IGtleT17MH0+XG4gICAgPEggbWFyZ2luQm90dG9tPXswfSB0ZXh0QWxpZ249XCJjZW50ZXJcIiBsZXZlbD17M30gbGlnaHQgY29sb3I+XG4gICAgICB7dGl0bGV9XG4gICAgPC9IPlxuICAgIHtkZXNjcmlwdGlvbiAmJiAoXG4gICAgICA8SCBtYXJnaW5Ub3A9ezB9IHRleHRBbGlnbj1cImNlbnRlclwiIGxldmVsPXs1fSBmb250U2l6ZT17MTJ9IGxpZ2h0PlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L0g+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuIl19
