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

var _Thumbnail = require('./Thumbnail');

var _Thumbnail2 = _interopRequireDefault(_Thumbnail);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Thumbnails(_ref) {
  var currentImage = _ref.currentImage,
      images = _ref.images,
      onClickThumbnail = _ref.onClickThumbnail;

  return _react2.default.createElement(
    'div',
    { className: (0, _noImportant.css)(classes.thumbnails) },
    images.map(function (img, idx) {
      return _react2.default.createElement(_Thumbnail2.default, _extends({}, img, {
        active: idx === currentImage,
        index: idx,
        key: idx,
        onClick: onClickThumbnail
      }));
    })
  );
}

Thumbnails.propTypes = {
  currentImage: _propTypes2.default.number,
  images: _propTypes2.default.array,
  onClickThumbnail: _propTypes2.default.func.isRequired
};

var classes = _noImportant.StyleSheet.create({
  thumbnails: {
    bottom: _theme2.default.container.gutter.vertical,
    color: 'white',
    height: _theme2.default.thumbnail.size,
    left: _theme2.default.container.gutter.horizontal,
    overflowX: 'scroll',
    overflowY: 'hidden',
    position: 'absolute',
    right: _theme2.default.container.gutter.horizontal,
    textAlign: 'center',
    whiteSpace: 'nowrap'
  }
});

exports.default = Thumbnails;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9UaHVtYm5haWxzLmVzNiJdLCJuYW1lcyI6WyJUaHVtYm5haWxzIiwiY3VycmVudEltYWdlIiwiaW1hZ2VzIiwib25DbGlja1RodW1ibmFpbCIsImNsYXNzZXMiLCJ0aHVtYm5haWxzIiwibWFwIiwiaW1nIiwiaWR4IiwicHJvcFR5cGVzIiwibnVtYmVyIiwiYXJyYXkiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImNyZWF0ZSIsImJvdHRvbSIsImNvbnRhaW5lciIsImd1dHRlciIsInZlcnRpY2FsIiwiY29sb3IiLCJoZWlnaHQiLCJ0aHVtYm5haWwiLCJzaXplIiwibGVmdCIsImhvcml6b250YWwiLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsInJpZ2h0IiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsU0FBU0EsVUFBVCxPQUFnRTtBQUFBLE1BQTFDQyxZQUEwQyxRQUExQ0EsWUFBMEM7QUFBQSxNQUE1QkMsTUFBNEIsUUFBNUJBLE1BQTRCO0FBQUEsTUFBcEJDLGdCQUFvQixRQUFwQkEsZ0JBQW9COztBQUM5RCxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVcsc0JBQUlDLFFBQVFDLFVBQVosQ0FBaEI7QUFDR0gsV0FBT0ksR0FBUCxDQUFXLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLGFBQ1YsZ0VBQ01ELEdBRE47QUFFRSxnQkFBUUMsUUFBUVAsWUFGbEI7QUFHRSxlQUFPTyxHQUhUO0FBSUUsYUFBS0EsR0FKUDtBQUtFLGlCQUFTTDtBQUxYLFNBRFU7QUFBQSxLQUFYO0FBREgsR0FERjtBQWFEOztBQUVESCxXQUFXUyxTQUFYLEdBQXVCO0FBQ3JCUixnQkFBYyxvQkFBVVMsTUFESDtBQUVyQlIsVUFBUSxvQkFBVVMsS0FGRztBQUdyQlIsb0JBQWtCLG9CQUFVUyxJQUFWLENBQWVDO0FBSFosQ0FBdkI7O0FBTUEsSUFBTVQsVUFBVSx3QkFBV1UsTUFBWCxDQUFrQjtBQUNoQ1QsY0FBWTtBQUNWVSxZQUFRLGdCQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsUUFEckI7QUFFVkMsV0FBTyxPQUZHO0FBR1ZDLFlBQVEsZ0JBQU1DLFNBQU4sQ0FBZ0JDLElBSGQ7QUFJVkMsVUFBTSxnQkFBTVAsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJPLFVBSm5CO0FBS1ZDLGVBQVcsUUFMRDtBQU1WQyxlQUFXLFFBTkQ7QUFPVkMsY0FBVSxVQVBBO0FBUVZDLFdBQU8sZ0JBQU1aLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCTyxVQVJwQjtBQVNWSyxlQUFXLFFBVEQ7QUFVVkMsZ0JBQVk7QUFWRjtBQURvQixDQUFsQixDQUFoQjs7a0JBZWU5QixVIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9UaHVtYm5haWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcbmltcG9ydCBUaHVtYm5haWwgZnJvbSAnLi9UaHVtYm5haWwnO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vdGhlbWUnO1xuXG5mdW5jdGlvbiBUaHVtYm5haWxzKHsgY3VycmVudEltYWdlLCBpbWFnZXMsIG9uQ2xpY2tUaHVtYm5haWwgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoY2xhc3Nlcy50aHVtYm5haWxzKX0+XG4gICAgICB7aW1hZ2VzLm1hcCgoaW1nLCBpZHgpID0+IChcbiAgICAgICAgPFRodW1ibmFpbFxuICAgICAgICAgIHsuLi5pbWd9XG4gICAgICAgICAgYWN0aXZlPXtpZHggPT09IGN1cnJlbnRJbWFnZX1cbiAgICAgICAgICBpbmRleD17aWR4fVxuICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tUaHVtYm5haWx9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuVGh1bWJuYWlscy5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnRJbWFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXksXG4gIG9uQ2xpY2tUaHVtYm5haWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBjbGFzc2VzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICB0aHVtYm5haWxzOiB7XG4gICAgYm90dG9tOiB0aGVtZS5jb250YWluZXIuZ3V0dGVyLnZlcnRpY2FsLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGhlaWdodDogdGhlbWUudGh1bWJuYWlsLnNpemUsXG4gICAgbGVmdDogdGhlbWUuY29udGFpbmVyLmd1dHRlci5ob3Jpem9udGFsLFxuICAgIG92ZXJmbG93WDogJ3Njcm9sbCcsXG4gICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogdGhlbWUuY29udGFpbmVyLmd1dHRlci5ob3Jpem9udGFsLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlscztcbiJdfQ==
