'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _faLink = require('olymp-icons/lib/fa-link');

var _faLink2 = _interopRequireDefault(_faLink);

var _faAlignCenter = require('olymp-icons/lib/fa-align-center');

var _faAlignCenter2 = _interopRequireDefault(_faAlignCenter);

var _icon = require('../components/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  type: 'link', // ['link', 'link-page', 'link-media'],
  label: _react2.default.createElement(_icon2.default, { icon: _faLink2.default }),
  description: 'Link', // ['Extern', 'Intern', 'Datei'],
  onClick: function onClick(_ref, isActive) {
    var value = _ref.value,
        onChange = _ref.onChange;

    if (isActive) {
      onChange(value.change().unwrapInline('link'));
    } else {
      var href = window.prompt('URL');
      if (href) {
        if (href.indexOf('mailto') === 0) {} else if (href.indexOf('tel') === 0) {} else if (href.indexOf('/') === 0) {} else if (href.indexOf('http') !== 0 && href.indexOf('.') !== -1) {
          href = 'http://' + href;
        }
        onChange(value.change().wrapInline({
          type: 'link',
          data: { href: href, target: '_blank' }
        }).collapseToEnd());
      }
    }
  },
  isActive: function isActive(_ref2) {
    var value = _ref2.value;
    return value && value.inlines.some(function (inline) {
      return inline.type === 'link';
    });
  }
}, {
  type: 'center',
  label: _react2.default.createElement(_icon2.default, { icon: _faAlignCenter2.default }),
  description: 'Center',
  onClick: function onClick(_ref3, isActive) {
    var value = _ref3.value,
        onChange = _ref3.onChange;

    if (isActive) {
      onChange(value.change().unwrapBlock('center'));
    } else {
      onChange(value.change().wrapBlock({ type: 'center' }).collapseToEnd());
    }
  },
  isActive: function isActive(_ref4) {
    var value = _ref4.value;
    return value && value.inlines.some(function (inline) {
      return inline.type === 'link';
    });
  }
}];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL2RlZmF1bHRzL3Rvb2xiYXItYWN0aW9ucy5lczYiXSwibmFtZXMiOlsidHlwZSIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJvbkNsaWNrIiwiaXNBY3RpdmUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiY2hhbmdlIiwidW53cmFwSW5saW5lIiwiaHJlZiIsIndpbmRvdyIsInByb21wdCIsImluZGV4T2YiLCJ3cmFwSW5saW5lIiwiZGF0YSIsInRhcmdldCIsImNvbGxhcHNlVG9FbmQiLCJpbmxpbmVzIiwic29tZSIsImlubGluZSIsInVud3JhcEJsb2NrIiwid3JhcEJsb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztrQkFFZSxDQUNiO0FBQ0VBLFFBQU0sTUFEUixFQUNnQjtBQUNkQyxTQUFPLGdEQUFHLHNCQUFILEdBRlQ7QUFHRUMsZUFBYSxNQUhmLEVBR3VCO0FBQ3JCQyxXQUFTLHVCQUFzQkMsUUFBdEIsRUFBbUM7QUFBQSxRQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsUUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5Qjs7QUFDMUMsUUFBSUYsUUFBSixFQUFjO0FBQ1pFLGVBQVNELE1BQU1FLE1BQU4sR0FBZUMsWUFBZixDQUE0QixNQUE1QixDQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSUMsT0FBT0MsT0FBT0MsTUFBUCxDQUFjLEtBQWQsQ0FBWDtBQUNBLFVBQUlGLElBQUosRUFBVTtBQUNSLFlBQUlBLEtBQUtHLE9BQUwsQ0FBYSxRQUFiLE1BQTJCLENBQS9CLEVBQWtDLENBQ2pDLENBREQsTUFDTyxJQUFJSCxLQUFLRyxPQUFMLENBQWEsS0FBYixNQUF3QixDQUE1QixFQUErQixDQUNyQyxDQURNLE1BQ0EsSUFBSUgsS0FBS0csT0FBTCxDQUFhLEdBQWIsTUFBc0IsQ0FBMUIsRUFBNkIsQ0FDbkMsQ0FETSxNQUNBLElBQUlILEtBQUtHLE9BQUwsQ0FBYSxNQUFiLE1BQXlCLENBQXpCLElBQThCSCxLQUFLRyxPQUFMLENBQWEsR0FBYixNQUFzQixDQUFDLENBQXpELEVBQTREO0FBQ2pFSCw2QkFBaUJBLElBQWpCO0FBQ0Q7QUFDREgsaUJBQ0VELE1BQ0dFLE1BREgsR0FFR00sVUFGSCxDQUVjO0FBQ1ZiLGdCQUFNLE1BREk7QUFFVmMsZ0JBQU0sRUFBRUwsVUFBRixFQUFRTSxRQUFRLFFBQWhCO0FBRkksU0FGZCxFQU1HQyxhQU5ILEVBREY7QUFTRDtBQUNGO0FBQ0YsR0EzQkg7QUE0QkVaLFlBQVU7QUFBQSxRQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxXQUNSQSxTQUFTQSxNQUFNWSxPQUFOLENBQWNDLElBQWQsQ0FBbUI7QUFBQSxhQUFVQyxPQUFPbkIsSUFBUCxLQUFnQixNQUExQjtBQUFBLEtBQW5CLENBREQ7QUFBQTtBQTVCWixDQURhLEVBZ0NiO0FBQ0VBLFFBQU0sUUFEUjtBQUVFQyxTQUFPLGdEQUFHLDZCQUFILEdBRlQ7QUFHRUMsZUFBYSxRQUhmO0FBSUVDLFdBQVMsd0JBQXNCQyxRQUF0QixFQUFtQztBQUFBLFFBQWhDQyxLQUFnQyxTQUFoQ0EsS0FBZ0M7QUFBQSxRQUF6QkMsUUFBeUIsU0FBekJBLFFBQXlCOztBQUMxQyxRQUFJRixRQUFKLEVBQWM7QUFDWkUsZUFBU0QsTUFBTUUsTUFBTixHQUFlYSxXQUFmLENBQTJCLFFBQTNCLENBQVQ7QUFDRCxLQUZELE1BRU87QUFDTGQsZUFDRUQsTUFDR0UsTUFESCxHQUVHYyxTQUZILENBRWEsRUFBRXJCLE1BQU0sUUFBUixFQUZiLEVBR0dnQixhQUhILEVBREY7QUFNRDtBQUNGLEdBZkg7QUFnQkVaLFlBQVU7QUFBQSxRQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxXQUNSQSxTQUFTQSxNQUFNWSxPQUFOLENBQWNDLElBQWQsQ0FBbUI7QUFBQSxhQUFVQyxPQUFPbkIsSUFBUCxLQUFnQixNQUExQjtBQUFBLEtBQW5CLENBREQ7QUFBQTtBQWhCWixDQWhDYSxDIiwiZmlsZSI6ImV4dGVybmFsL3NsYXRlL2RlZmF1bHRzL3Rvb2xiYXItYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYUxpbmssIEZhQWxpZ25DZW50ZXIgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgSSBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICB0eXBlOiAnbGluaycsIC8vIFsnbGluaycsICdsaW5rLXBhZ2UnLCAnbGluay1tZWRpYSddLFxuICAgIGxhYmVsOiA8SSBpY29uPXtGYUxpbmt9IC8+LFxuICAgIGRlc2NyaXB0aW9uOiAnTGluaycsIC8vIFsnRXh0ZXJuJywgJ0ludGVybicsICdEYXRlaSddLFxuICAgIG9uQ2xpY2s6ICh7IHZhbHVlLCBvbkNoYW5nZSB9LCBpc0FjdGl2ZSkgPT4ge1xuICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlLmNoYW5nZSgpLnVud3JhcElubGluZSgnbGluaycpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBocmVmID0gd2luZG93LnByb21wdCgnVVJMJyk7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignbWFpbHRvJykgPT09IDApIHtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhyZWYuaW5kZXhPZigndGVsJykgPT09IDApIHtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhyZWYuaW5kZXhPZignLycpID09PSAwKSB7XG4gICAgICAgICAgfSBlbHNlIGlmIChocmVmLmluZGV4T2YoJ2h0dHAnKSAhPT0gMCAmJiBocmVmLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGhyZWYgPSBgaHR0cDovLyR7aHJlZn1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICAud3JhcElubGluZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgaHJlZiwgdGFyZ2V0OiAnX2JsYW5rJyB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY29sbGFwc2VUb0VuZCgpLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGlzQWN0aXZlOiAoeyB2YWx1ZSB9KSA9PlxuICAgICAgdmFsdWUgJiYgdmFsdWUuaW5saW5lcy5zb21lKGlubGluZSA9PiBpbmxpbmUudHlwZSA9PT0gJ2xpbmsnKSxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdjZW50ZXInLFxuICAgIGxhYmVsOiA8SSBpY29uPXtGYUFsaWduQ2VudGVyfSAvPixcbiAgICBkZXNjcmlwdGlvbjogJ0NlbnRlcicsXG4gICAgb25DbGljazogKHsgdmFsdWUsIG9uQ2hhbmdlIH0sIGlzQWN0aXZlKSA9PiB7XG4gICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgb25DaGFuZ2UodmFsdWUuY2hhbmdlKCkudW53cmFwQmxvY2soJ2NlbnRlcicpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgIC53cmFwQmxvY2soeyB0eXBlOiAnY2VudGVyJyB9KVxuICAgICAgICAgICAgLmNvbGxhcHNlVG9FbmQoKSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzQWN0aXZlOiAoeyB2YWx1ZSB9KSA9PlxuICAgICAgdmFsdWUgJiYgdmFsdWUuaW5saW5lcy5zb21lKGlubGluZSA9PiBpbmxpbmUudHlwZSA9PT0gJ2xpbmsnKSxcbiAgfSxcbl07XG4iXX0=
