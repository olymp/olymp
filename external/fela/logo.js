'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _reactFela = require('react-fela');

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getColor = function getColor(theme, color) {
  if (color === true) {
    return theme.color;
  } else if (typeof color === 'string') {
    return theme[color] || color;
  }
  return theme.inverted ? theme.light : theme.dark;
};

exports.default = (0, _reactFela.withTheme)(function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      theme = _ref.theme,
      col = _ref.color,
      className = _ref.className;

  var color = getColor(theme, col);
  var id = (0, _shortid2.default)();

  return _react2.default.createElement(
    'svg',
    {
      width: width || size || 100,
      height: height || Math.round(size / 1001 * 790) || 79,
      viewBox: '0 0 1001 790',
      xmlns: 'http://www.w3.org/2000/svg',
      className: className
    },
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'linearGradient',
        {
          x1: '50%',
          y1: '0%',
          x2: '50%',
          y2: '99.273%',
          id: 'linearGradient-' + id + '-1'
        },
        _react2.default.createElement('stop', {
          stopColor: (0, _tinycolor2.default)(color).lighten(8).spin(6).toRgbString(),
          stopOpacity: '.617',
          offset: '0%'
        }),
        _react2.default.createElement('stop', {
          stopColor: (0, _tinycolor2.default)(color).darken(4).spin(-3).toRgbString(),
          stopOpacity: '.863',
          offset: '100%'
        })
      ),
      _react2.default.createElement(
        'linearGradient',
        {
          x1: '15.734%',
          y1: '1.293%',
          x2: '49.318%',
          y2: '94.09%',
          id: 'linearGradient-' + id + '-2'
        },
        _react2.default.createElement('stop', {
          stopColor: (0, _tinycolor2.default)(color).lighten(8).spin(6).toRgbString(),
          stopOpacity: '.587',
          offset: '0%'
        }),
        _react2.default.createElement('stop', {
          stopColor: (0, _tinycolor2.default)(color).darken(4).spin(-3).toRgbString(),
          stopOpacity: '.651',
          offset: '100%'
        })
      ),
      _react2.default.createElement(
        'linearGradient',
        {
          x1: '82.681%',
          y1: '29.971%',
          x2: '50%',
          y2: '70.029%',
          id: 'linearGradient-' + id + '-3'
        },
        _react2.default.createElement('stop', {
          stopColor: (0, _tinycolor2.default)(color).lighten(8).spin(6).toRgbString(),
          offset: '0%'
        }),
        _react2.default.createElement('stop', {
          stopColor: (0, _tinycolor2.default)(color).darken(4).spin(-3).toRgbString(),
          offset: '100%'
        })
      ),
      _react2.default.createElement(
        'linearGradient',
        {
          x1: '8.793%',
          y1: '13.73%',
          x2: '50%',
          y2: '89.257%',
          id: 'linearGradient-' + id + '-4'
        },
        _react2.default.createElement('stop', {
          stopColor: (0, _tinycolor2.default)(color).lighten(8).spin(6).toRgbString(),
          stopOpacity: '.502',
          offset: '0%'
        }),
        _react2.default.createElement('stop', {
          stopColor: (0, _tinycolor2.default)(color).darken(4).spin(-3).toRgbString(),
          stopOpacity: '.758',
          offset: '100%'
        })
      )
    ),
    _react2.default.createElement(
      'g',
      { id: 'Page-1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: 'Artboard' },
        _react2.default.createElement(
          'g',
          { id: 'logo' },
          _react2.default.createElement(
            'g',
            { id: 'Page-1' },
            _react2.default.createElement('polygon', {
              id: 'left',
              fill: 'url(#linearGradient-' + id + '-1)',
              opacity: '.7',
              points: '1 580 301.446897 60 501 790'
            }),
            _react2.default.createElement('polygon', {
              id: 'inner-left',
              fill: 'url(#linearGradient-' + id + '-2)',
              points: '1001 580 301 60 501 790'
            }),
            _react2.default.createElement('polygon', {
              id: 'right',
              fill: 'url(#linearGradient-' + id + '-3)',
              opacity: '.7',
              transform: 'matrix(-1 0 0 1 1502 0)',
              points: '501 580 801 0 1001 790'
            }),
            _react2.default.createElement('polygon', {
              id: 'inner-right',
              fill: 'url(#linearGradient-' + id + '-4)',
              transform: 'matrix(-1 0 0 1 701.997 0)',
              points: '701 579.999802 0.997192 0 200.997192 790'
            })
          )
        )
      )
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbG9nby5lczYiXSwibmFtZXMiOlsiZ2V0Q29sb3IiLCJ0aGVtZSIsImNvbG9yIiwiaW52ZXJ0ZWQiLCJsaWdodCIsImRhcmsiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJjb2wiLCJjbGFzc05hbWUiLCJpZCIsIk1hdGgiLCJyb3VuZCIsImxpZ2h0ZW4iLCJzcGluIiwidG9SZ2JTdHJpbmciLCJkYXJrZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNqQyxNQUFJQSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsV0FBT0QsTUFBTUMsS0FBYjtBQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDcEMsV0FBT0QsTUFBTUMsS0FBTixLQUFnQkEsS0FBdkI7QUFDRDtBQUNELFNBQU9ELE1BQU1FLFFBQU4sR0FBaUJGLE1BQU1HLEtBQXZCLEdBQStCSCxNQUFNSSxJQUE1QztBQUNELENBUEQ7O2tCQVNlLDBCQUNiLGdCQUEyRDtBQUFBLE1BQXhEQyxLQUF3RCxRQUF4REEsS0FBd0Q7QUFBQSxNQUFqREMsTUFBaUQsUUFBakRBLE1BQWlEO0FBQUEsTUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLE1BQW5DUCxLQUFtQyxRQUFuQ0EsS0FBbUM7QUFBQSxNQUFyQlEsR0FBcUIsUUFBNUJQLEtBQTRCO0FBQUEsTUFBaEJRLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDekQsTUFBTVIsUUFBUUYsU0FBU0MsS0FBVCxFQUFnQlEsR0FBaEIsQ0FBZDtBQUNBLE1BQU1FLEtBQUssd0JBQVg7O0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFDRSxhQUFPTCxTQUFTRSxJQUFULElBQWlCLEdBRDFCO0FBRUUsY0FBUUQsVUFBVUssS0FBS0MsS0FBTCxDQUFXTCxPQUFP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WUU7QUFDRSxrQkFBRyxPQURMO0FBRUUsNkNBQTZCQSxFQUE3QixRQUZGO0FBR0UsdUJBQVEsSUFIVjtBQUlFLHlCQUFVLHlCQUpaO0FBS0Usc0JBQU87QUFMVCxjQVpGO0FBbUJFO0FBQ0Usa0JBQUcsYUFETDtBQUVFLDZDQUE2QkEsRUFBN0IsUUFGRjtBQUdFLHlCQUFVLDRCQUhaO0FBSUUsc0JBQU87QUFKVDtBQW5CRjtBQURGO0FBREY7QUFERjtBQXZHRixHQURGO0FBMElELENBL0lZLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9sb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0aW55Y29sb3IgZnJvbSAndGlueWNvbG9yMic7XG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xuXG5jb25zdCBnZXRDb2xvciA9ICh0aGVtZSwgY29sb3IpID0+IHtcbiAgaWYgKGNvbG9yID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoZW1lLmNvbG9yO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdGhlbWVbY29sb3JdIHx8IGNvbG9yO1xuICB9XG4gIHJldHVybiB0aGVtZS5pbnZlcnRlZCA/IHRoZW1lLmxpZ2h0IDogdGhlbWUuZGFyaztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShcbiAgKHsgd2lkdGgsIGhlaWdodCwgc2l6ZSwgdGhlbWUsIGNvbG9yOiBjb2wsIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgY29uc3QgY29sb3IgPSBnZXRDb2xvcih0aGVtZSwgY29sKTtcbiAgICBjb25zdCBpZCA9IHNob3J0SWQoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8c3ZnXG4gICAgICAgIHdpZHRoPXt3aWR0aCB8fCBzaXplIHx8IDEwMH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHQgfHwgTWF0aC5yb3VuZChzaXplIC8gMTAwMSAqIDc5MCkgfHwgNzl9XG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwMSA3OTBcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICA+XG4gICAgICAgIDxkZWZzPlxuICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgeDE9XCI1MCVcIlxuICAgICAgICAgICAgeTE9XCIwJVwiXG4gICAgICAgICAgICB4Mj1cIjUwJVwiXG4gICAgICAgICAgICB5Mj1cIjk5LjI3MyVcIlxuICAgICAgICAgICAgaWQ9e2BsaW5lYXJHcmFkaWVudC0ke2lkfS0xYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICBzdG9wQ29sb3I9e3Rpbnljb2xvcihjb2xvcilcbiAgICAgICAgICAgICAgICAubGlnaHRlbig4KVxuICAgICAgICAgICAgICAgIC5zcGluKDYpXG4gICAgICAgICAgICAgICAgLnRvUmdiU3RyaW5nKCl9XG4gICAgICAgICAgICAgIHN0b3BPcGFjaXR5PVwiLjYxN1wiXG4gICAgICAgICAgICAgIG9mZnNldD1cIjAlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICBzdG9wQ29sb3I9e3Rpbnljb2xvcihjb2xvcilcbiAgICAgICAgICAgICAgICAuZGFya2VuKDQpXG4gICAgICAgICAgICAgICAgLnNwaW4oLTMpXG4gICAgICAgICAgICAgICAgLnRvUmdiU3RyaW5nKCl9XG4gICAgICAgICAgICAgIHN0b3BPcGFjaXR5PVwiLjg2M1wiXG4gICAgICAgICAgICAgIG9mZnNldD1cIjEwMCVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgeDE9XCIxNS43MzQlXCJcbiAgICAgICAgICAgIHkxPVwiMS4yOTMlXCJcbiAgICAgICAgICAgIHgyPVwiNDkuMzE4JVwiXG4gICAgICAgICAgICB5Mj1cIjk0LjA5JVwiXG4gICAgICAgICAgICBpZD17YGxpbmVhckdyYWRpZW50LSR7aWR9LTJgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdG9wXG4gICAgICAgICAgICAgIHN0b3BDb2xvcj17dGlueWNvbG9yKGNvbG9yKVxuICAgICAgICAgICAgICAgIC5saWdodGVuKDgpXG4gICAgICAgICAgICAgICAgLnNwaW4oNilcbiAgICAgICAgICAgICAgICAudG9SZ2JTdHJpbmcoKX1cbiAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9XCIuNTg3XCJcbiAgICAgICAgICAgICAgb2Zmc2V0PVwiMCVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzdG9wXG4gICAgICAgICAgICAgIHN0b3BDb2xvcj17dGlueWNvbG9yKGNvbG9yKVxuICAgICAgICAgICAgICAgIC5kYXJrZW4oNClcbiAgICAgICAgICAgICAgICAuc3BpbigtMylcbiAgICAgICAgICAgICAgICAudG9SZ2JTdHJpbmcoKX1cbiAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9XCIuNjUxXCJcbiAgICAgICAgICAgICAgb2Zmc2V0PVwiMTAwJVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICB4MT1cIjgyLjY4MSVcIlxuICAgICAgICAgICAgeTE9XCIyOS45NzElXCJcbiAgICAgICAgICAgIHgyPVwiNTAlXCJcbiAgICAgICAgICAgIHkyPVwiNzAuMDI5JVwiXG4gICAgICAgICAgICBpZD17YGxpbmVhckdyYWRpZW50LSR7aWR9LTNgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdG9wXG4gICAgICAgICAgICAgIHN0b3BDb2xvcj17dGlueWNvbG9yKGNvbG9yKVxuICAgICAgICAgICAgICAgIC5saWdodGVuKDgpXG4gICAgICAgICAgICAgICAgLnNwaW4oNilcbiAgICAgICAgICAgICAgICAudG9SZ2JTdHJpbmcoKX1cbiAgICAgICAgICAgICAgb2Zmc2V0PVwiMCVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzdG9wXG4gICAgICAgICAgICAgIHN0b3BDb2xvcj17dGlueWNvbG9yKGNvbG9yKVxuICAgICAgICAgICAgICAgIC5kYXJrZW4oNClcbiAgICAgICAgICAgICAgICAuc3BpbigtMylcbiAgICAgICAgICAgICAgICAudG9SZ2JTdHJpbmcoKX1cbiAgICAgICAgICAgICAgb2Zmc2V0PVwiMTAwJVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICB4MT1cIjguNzkzJVwiXG4gICAgICAgICAgICB5MT1cIjEzLjczJVwiXG4gICAgICAgICAgICB4Mj1cIjUwJVwiXG4gICAgICAgICAgICB5Mj1cIjg5LjI1NyVcIlxuICAgICAgICAgICAgaWQ9e2BsaW5lYXJHcmFkaWVudC0ke2lkfS00YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICBzdG9wQ29sb3I9e3Rpbnljb2xvcihjb2xvcilcbiAgICAgICAgICAgICAgICAubGlnaHRlbig4KVxuICAgICAgICAgICAgICAgIC5zcGluKDYpXG4gICAgICAgICAgICAgICAgLnRvUmdiU3RyaW5nKCl9XG4gICAgICAgICAgICAgIHN0b3BPcGFjaXR5PVwiLjUwMlwiXG4gICAgICAgICAgICAgIG9mZnNldD1cIjAlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICBzdG9wQ29sb3I9e3Rpbnljb2xvcihjb2xvcilcbiAgICAgICAgICAgICAgICAuZGFya2VuKDQpXG4gICAgICAgICAgICAgICAgLnNwaW4oLTMpXG4gICAgICAgICAgICAgICAgLnRvUmdiU3RyaW5nKCl9XG4gICAgICAgICAgICAgIHN0b3BPcGFjaXR5PVwiLjc1OFwiXG4gICAgICAgICAgICAgIG9mZnNldD1cIjEwMCVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8L2RlZnM+XG4gICAgICAgIDxnIGlkPVwiUGFnZS0xXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICA8ZyBpZD1cIkFydGJvYXJkXCI+XG4gICAgICAgICAgICA8ZyBpZD1cImxvZ29cIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJQYWdlLTFcIj5cbiAgICAgICAgICAgICAgICA8cG9seWdvblxuICAgICAgICAgICAgICAgICAgaWQ9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9e2B1cmwoI2xpbmVhckdyYWRpZW50LSR7aWR9LTEpYH1cbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIuN1wiXG4gICAgICAgICAgICAgICAgICBwb2ludHM9XCIxIDU4MCAzMDEuNDQ2ODk3IDYwIDUwMSA3OTBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHBvbHlnb25cbiAgICAgICAgICAgICAgICAgIGlkPVwiaW5uZXItbGVmdFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPXtgdXJsKCNsaW5lYXJHcmFkaWVudC0ke2lkfS0yKWB9XG4gICAgICAgICAgICAgICAgICBwb2ludHM9XCIxMDAxIDU4MCAzMDEgNjAgNTAxIDc5MFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cG9seWdvblxuICAgICAgICAgICAgICAgICAgaWQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPXtgdXJsKCNsaW5lYXJHcmFkaWVudC0ke2lkfS0zKWB9XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiLjdcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwibWF0cml4KC0xIDAgMCAxIDE1MDIgMClcIlxuICAgICAgICAgICAgICAgICAgcG9pbnRzPVwiNTAxIDU4MCA4MDEgMCAxMDAxIDc5MFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cG9seWdvblxuICAgICAgICAgICAgICAgICAgaWQ9XCJpbm5lci1yaWdodFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPXtgdXJsKCNsaW5lYXJHcmFkaWVudC0ke2lkfS00KWB9XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJtYXRyaXgoLTEgMCAwIDEgNzAxLjk5NyAwKVwiXG4gICAgICAgICAgICAgICAgICBwb2ludHM9XCI3MDEgNTc5Ljk5OTgwMiAwLjk5NzE5MiAwIDIwMC45OTcxOTIgNzkwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICApO1xuICB9LFxuKTtcbiJdfQ==
