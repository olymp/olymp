"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (w, ratio, isPercentage, _ref) {
  var minWidth = _ref.minWidth,
      minHeight = _ref.minHeight,
      maxWidth = _ref.maxWidth,
      maxHeight = _ref.maxHeight,
      maxResolution = _ref.maxResolution;

  var width = w;

  // minWidth/minHeight
  if (minWidth && width < minWidth) {
    width = minWidth;
  }
  if (!isPercentage && minHeight && width * ratio < minHeight) {
    width = minHeight / ratio;
  }

  // maxWidth/maxHeight
  if (maxWidth && width > maxWidth) {
    width = maxWidth;
  }
  if (!isPercentage && maxHeight && width * ratio > maxHeight) {
    width = maxHeight / ratio;
  }

  // maxResolution
  if (Math.pow(width, 2) * ratio > maxResolution) {
    width = Math.sqrt(maxResolution / ratio);
  }

  return Math.round(width);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvaW1hZ2UvdXRpbHMvbGltaXQtd2lkdGguZXM2Il0sIm5hbWVzIjpbInciLCJyYXRpbyIsImlzUGVyY2VudGFnZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJtYXhSZXNvbHV0aW9uIiwid2lkdGgiLCJNYXRoIiwic3FydCIsInJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFDYkEsQ0FEYSxFQUViQyxLQUZhLEVBR2JDLFlBSGEsUUFLVjtBQUFBLE1BRERDLFFBQ0MsUUFEREEsUUFDQztBQUFBLE1BRFNDLFNBQ1QsUUFEU0EsU0FDVDtBQUFBLE1BRG9CQyxRQUNwQixRQURvQkEsUUFDcEI7QUFBQSxNQUQ4QkMsU0FDOUIsUUFEOEJBLFNBQzlCO0FBQUEsTUFEeUNDLGFBQ3pDLFFBRHlDQSxhQUN6Qzs7QUFDSCxNQUFJQyxRQUFRUixDQUFaOztBQUVBO0FBQ0EsTUFBSUcsWUFBWUssUUFBUUwsUUFBeEIsRUFBa0M7QUFDaENLLFlBQVFMLFFBQVI7QUFDRDtBQUNELE1BQUksQ0FBQ0QsWUFBRCxJQUFpQkUsU0FBakIsSUFBOEJJLFFBQVFQLEtBQVIsR0FBZ0JHLFNBQWxELEVBQTZEO0FBQzNESSxZQUFRSixZQUFZSCxLQUFwQjtBQUNEOztBQUVEO0FBQ0EsTUFBSUksWUFBWUcsUUFBUUgsUUFBeEIsRUFBa0M7QUFDaENHLFlBQVFILFFBQVI7QUFDRDtBQUNELE1BQUksQ0FBQ0gsWUFBRCxJQUFpQkksU0FBakIsSUFBOEJFLFFBQVFQLEtBQVIsR0FBZ0JLLFNBQWxELEVBQTZEO0FBQzNERSxZQUFRRixZQUFZTCxLQUFwQjtBQUNEOztBQUVEO0FBQ0EsTUFBSSxnQkFBUyxDQUFULElBQWFBLEtBQWIsR0FBcUJNLGFBQXpCLEVBQXdDO0FBQ3RDQyxZQUFRQyxLQUFLQyxJQUFMLENBQVVILGdCQUFnQk4sS0FBMUIsQ0FBUjtBQUNEOztBQUVELFNBQU9RLEtBQUtFLEtBQUwsQ0FBV0gsS0FBWCxDQUFQO0FBQ0QsQyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL2ltYWdlL3V0aWxzL2xpbWl0LXdpZHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKFxuICB3LFxuICByYXRpbyxcbiAgaXNQZXJjZW50YWdlLFxuICB7IG1pbldpZHRoLCBtaW5IZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHQsIG1heFJlc29sdXRpb24gfSxcbikgPT4ge1xuICBsZXQgd2lkdGggPSB3O1xuXG4gIC8vIG1pbldpZHRoL21pbkhlaWdodFxuICBpZiAobWluV2lkdGggJiYgd2lkdGggPCBtaW5XaWR0aCkge1xuICAgIHdpZHRoID0gbWluV2lkdGg7XG4gIH1cbiAgaWYgKCFpc1BlcmNlbnRhZ2UgJiYgbWluSGVpZ2h0ICYmIHdpZHRoICogcmF0aW8gPCBtaW5IZWlnaHQpIHtcbiAgICB3aWR0aCA9IG1pbkhlaWdodCAvIHJhdGlvO1xuICB9XG5cbiAgLy8gbWF4V2lkdGgvbWF4SGVpZ2h0XG4gIGlmIChtYXhXaWR0aCAmJiB3aWR0aCA+IG1heFdpZHRoKSB7XG4gICAgd2lkdGggPSBtYXhXaWR0aDtcbiAgfVxuICBpZiAoIWlzUGVyY2VudGFnZSAmJiBtYXhIZWlnaHQgJiYgd2lkdGggKiByYXRpbyA+IG1heEhlaWdodCkge1xuICAgIHdpZHRoID0gbWF4SGVpZ2h0IC8gcmF0aW87XG4gIH1cblxuICAvLyBtYXhSZXNvbHV0aW9uXG4gIGlmICh3aWR0aCAqKiAyICogcmF0aW8gPiBtYXhSZXNvbHV0aW9uKSB7XG4gICAgd2lkdGggPSBNYXRoLnNxcnQobWF4UmVzb2x1dGlvbiAvIHJhdGlvKTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKHdpZHRoKTtcbn07XG4iXX0=
