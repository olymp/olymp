'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloudinaryUrl = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _olympFela = require('olymp-fela');

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/cloudinary/cloudinary-react
// http://cloudinary.com/documentation/image_transformation_reference

var cloudinaryUrl = exports.cloudinaryUrl = function cloudinaryUrl(value, options) {
  var newOptions = _extends({
    c: 'fill',
    f: 'auto',
    q: 'auto:eco',
    fl: 'lossy',
    dpr: 2
  }, options);

  if (!value || !value.url) {
    return '';
  }

  var newUrl = value.url.indexOf('http://res.cloudinary.com/') === 0 ? 'https' + value.url.substr(4) : value.url;

  var crop = value.crop && value.crop.length ? 'w_' + value.crop[0] + ',h_' + value.crop[1] + ',x_' + value.crop[2] + ',y_' + value.crop[3] + ',c_crop/' : '';

  var query = Object.keys(newOptions).map(function (key) {
    return key + '_' + newOptions[key];
  }).join(',');

  if (newUrl.indexOf('/upload/') !== -1) {
    return newUrl.replace('/upload/', '/upload/' + crop + query + '/');
  } else if (newUrl.indexOf('/fetch/') !== -1) {
    return newUrl.replace('/fetch/', '/fetch/' + crop + query + '/');
  }
};

var enhance = (0, _recompose.withHandlers)({
  getUrl: function getUrl(_ref) {
    var avatar = _ref.avatar,
        value = _ref.value,
        options = _ref.options;
    return function (w, h) {
      return value && value.url ? cloudinaryUrl(value, _extends({
        w: w,
        h: h,
        g: avatar ? 'face' : 'auto'
      }, options)) : undefined;
    };
  }
});

var _ref3 = _react2.default.createElement('div', null);

var CloudinaryImage = enhance(function (_ref2) {
  var options = _ref2.options,
      value = _ref2.value,
      ratio = _ref2.ratio,
      avatar = _ref2.avatar,
      alt = _ref2.alt,
      maxResolution = _ref2.maxResolution,
      getUrl = _ref2.getUrl,
      rest = _objectWithoutProperties(_ref2, ['options', 'value', 'ratio', 'avatar', 'alt', 'maxResolution', 'getUrl']);

  if (!value) {
    return _ref3;
  }

  var width = value.crop && value.crop[0] || value.width;
  var height = value.crop && value.crop[1] || value.height;

  return _react2.default.createElement(_olympFela.Image, _extends({}, rest, {
    maxResolution: maxResolution > 6000000 ? 6000000 : maxResolution,
    src: getUrl,
    alt: alt || value.caption,
    ratio: ratio || height / width,
    srcRatio: height / width
  }));
});
CloudinaryImage.propTypes = {
  value: _propTypes2.default.shape({
    url: _propTypes2.default.string,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number
  }),
  ratio: _propTypes2.default.number,
  maxResolution: _propTypes2.default.number,
  options: _propTypes2.default.shape({
    w: _propTypes2.default.number,
    h: _propTypes2.default.number,
    c: _propTypes2.default.string,
    f: _propTypes2.default.string,
    q: _propTypes2.default.string,
    fl: _propTypes2.default.string,
    dpr: _propTypes2.default.number
    // ...
  }),
  avatar: _propTypes2.default.bool,
  alt: _propTypes2.default.string
};
CloudinaryImage.defaultProps = {
  value: undefined,
  ratio: undefined,
  maxResolution: 111000, // 333*333px
  options: {},
  avatar: false,
  alt: undefined
};
exports.default = CloudinaryImage;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2ltYWdlLmVzNiJdLCJuYW1lcyI6WyJjbG91ZGluYXJ5VXJsIiwidmFsdWUiLCJvcHRpb25zIiwibmV3T3B0aW9ucyIsImMiLCJmIiwicSIsImZsIiwiZHByIiwidXJsIiwibmV3VXJsIiwiaW5kZXhPZiIsInN1YnN0ciIsImNyb3AiLCJsZW5ndGgiLCJxdWVyeSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJqb2luIiwicmVwbGFjZSIsImVuaGFuY2UiLCJnZXRVcmwiLCJhdmF0YXIiLCJ3IiwiaCIsImciLCJ1bmRlZmluZWQiLCJDbG91ZGluYXJ5SW1hZ2UiLCJyYXRpbyIsImFsdCIsIm1heFJlc29sdXRpb24iLCJyZXN0Iiwid2lkdGgiLCJoZWlnaHQiLCJjYXB0aW9uIiwicHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7O0FBRU8sSUFBTUEsd0NBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDL0MsTUFBTUM7QUFDSkMsT0FBRyxNQURDO0FBRUpDLE9BQUcsTUFGQztBQUdKQyxPQUFHLFVBSEM7QUFJSkMsUUFBSSxPQUpBO0FBS0pDLFNBQUs7QUFMRCxLQU1ETixPQU5DLENBQU47O0FBU0EsTUFBSSxDQUFDRCxLQUFELElBQVUsQ0FBQ0EsTUFBTVEsR0FBckIsRUFBMEI7QUFDeEIsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsU0FDSlQsTUFBTVEsR0FBTixDQUFVRSxPQUFWLENBQWtCLDRCQUFsQixNQUFvRCxDQUFwRCxhQUNZVixNQUFNUSxHQUFOLENBQVVHLE1BQVYsQ0FBaUIsQ0FBakIsQ0FEWixHQUVJWCxNQUFNUSxHQUhaOztBQUtBLE1BQU1JLE9BQ0paLE1BQU1ZLElBQU4sSUFBY1osTUFBTVks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LG9CQUFVZSxNQURVO0FBRXZCZCxPQUFHLG9CQUFVYyxNQUZVO0FBR3ZCcEMsT0FBRyxvQkFBVW1DLE1BSFU7QUFJdkJsQyxPQUFHLG9CQUFVa0MsTUFKVTtBQUt2QmpDLE9BQUcsb0JBQVVpQyxNQUxVO0FBTXZCaEMsUUFBSSxvQkFBVWdDLE1BTlM7QUFPdkIvQixTQUFLLG9CQUFVZ0M7QUFDZjtBQVJ1QixHQUFoQixDQVJpQjtBQWtCMUJoQixVQUFRLG9CQUFVaUIsSUFsQlE7QUFtQjFCVixPQUFLLG9CQUFVUTtBQW5CVyxDQUE1QjtBQXFCQVYsZ0JBQWdCYSxZQUFoQixHQUErQjtBQUM3QnpDLFNBQU8yQixTQURzQjtBQUU3QkUsU0FBT0YsU0FGc0I7QUFHN0JJLGlCQUFlLE1BSGMsRUFHTjtBQUN2QjlCLFdBQVMsRUFKb0I7QUFLN0JzQixVQUFRLEtBTHFCO0FBTTdCTyxPQUFLSDtBQU53QixDQUEvQjtrQkFRZUMsZSIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS9pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IHdpdGhIYW5kbGVycyB9IGZyb20gJ3JlY29tcG9zZSc7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jbG91ZGluYXJ5L2Nsb3VkaW5hcnktcmVhY3Rcbi8vIGh0dHA6Ly9jbG91ZGluYXJ5LmNvbS9kb2N1bWVudGF0aW9uL2ltYWdlX3RyYW5zZm9ybWF0aW9uX3JlZmVyZW5jZVxuXG5leHBvcnQgY29uc3QgY2xvdWRpbmFyeVVybCA9ICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBuZXdPcHRpb25zID0ge1xuICAgIGM6ICdmaWxsJyxcbiAgICBmOiAnYXV0bycsXG4gICAgcTogJ2F1dG86ZWNvJyxcbiAgICBmbDogJ2xvc3N5JyxcbiAgICBkcHI6IDIsXG4gICAgLi4ub3B0aW9ucyxcbiAgfTtcblxuICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS51cmwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdCBuZXdVcmwgPVxuICAgIHZhbHVlLnVybC5pbmRleE9mKCdodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tLycpID09PSAwXG4gICAgICA/IGBodHRwcyR7dmFsdWUudXJsLnN1YnN0cig0KX1gXG4gICAgICA6IHZhbHVlLnVybDtcblxuICBjb25zdCBjcm9wID1cbiAgICB2YWx1ZS5jcm9wICYmIHZhbHVlLmNyb3AubGVuZ3RoXG4gICAgICA/IGB3XyR7dmFsdWUuY3JvcFswXX0saF8ke3ZhbHVlLmNyb3BbMV19LHhfJHt2YWx1ZS5jcm9wWzJdfSx5XyR7dmFsdWVcbiAgICAgICAgICAuY3JvcFszXX0sY19jcm9wL2BcbiAgICAgIDogJyc7XG5cbiAgY29uc3QgcXVlcnkgPSBPYmplY3Qua2V5cyhuZXdPcHRpb25zKVxuICAgIC5tYXAoa2V5ID0+IGAke2tleX1fJHtuZXdPcHRpb25zW2tleV19YClcbiAgICAuam9pbignLCcpO1xuXG4gIGlmIChuZXdVcmwuaW5kZXhPZignL3VwbG9hZC8nKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gbmV3VXJsLnJlcGxhY2UoJy91cGxvYWQvJywgYC91cGxvYWQvJHtjcm9wfSR7cXVlcnl9L2ApO1xuICB9IGVsc2UgaWYgKG5ld1VybC5pbmRleE9mKCcvZmV0Y2gvJykgIT09IC0xKSB7XG4gICAgcmV0dXJuIG5ld1VybC5yZXBsYWNlKCcvZmV0Y2gvJywgYC9mZXRjaC8ke2Nyb3B9JHtxdWVyeX0vYCk7XG4gIH1cbn07XG5cbmNvbnN0IGVuaGFuY2UgPSB3aXRoSGFuZGxlcnMoe1xuICBnZXRVcmw6ICh7IGF2YXRhciwgdmFsdWUsIG9wdGlvbnMgfSkgPT4gKHcsIGgpID0+XG4gICAgdmFsdWUgJiYgdmFsdWUudXJsXG4gICAgICA/IGNsb3VkaW5hcnlVcmwodmFsdWUsIHtcbiAgICAgICAgICB3LFxuICAgICAgICAgIGgsXG4gICAgICAgICAgZzogYXZhdGFyID8gJ2ZhY2UnIDogJ2F1dG8nLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pXG4gICAgICA6IHVuZGVmaW5lZCxcbn0pO1xuY29uc3QgQ2xvdWRpbmFyeUltYWdlID0gZW5oYW5jZShcbiAgKHsgb3B0aW9ucywgdmFsdWUsIHJhdGlvLCBhdmF0YXIsIGFsdCwgbWF4UmVzb2x1dGlvbiwgZ2V0VXJsLCAuLi5yZXN0IH0pID0+IHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICB9XG5cbiAgICBjb25zdCB3aWR0aCA9ICh2YWx1ZS5jcm9wICYmIHZhbHVlLmNyb3BbMF0pIHx8IHZhbHVlLndpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9ICh2YWx1ZS5jcm9wICYmIHZhbHVlLmNyb3BbMV0pIHx8IHZhbHVlLmhlaWdodDtcblxuICAgIHJldHVybiAoXG4gICAgICA8SW1hZ2VcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIG1heFJlc29sdXRpb249e21heFJlc29sdXRpb24gPiA2MDAwMDAwID8gNjAwMDAwMCA6IG1heFJlc29sdXRpb259XG4gICAgICAgIHNyYz17Z2V0VXJsfVxuICAgICAgICBhbHQ9e2FsdCB8fCB2YWx1ZS5jYXB0aW9ufVxuICAgICAgICByYXRpbz17cmF0aW8gfHwgaGVpZ2h0IC8gd2lkdGh9XG4gICAgICAgIHNyY1JhdGlvPXtoZWlnaHQgLyB3aWR0aH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSxcbik7XG5DbG91ZGluYXJ5SW1hZ2UucHJvcFR5cGVzID0ge1xuICB2YWx1ZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgcmF0aW86IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heFJlc29sdXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdzogUHJvcFR5cGVzLm51bWJlcixcbiAgICBoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBxOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRwcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvLyAuLi5cbiAgfSksXG4gIGF2YXRhcjogUHJvcFR5cGVzLmJvb2wsXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5DbG91ZGluYXJ5SW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICB2YWx1ZTogdW5kZWZpbmVkLFxuICByYXRpbzogdW5kZWZpbmVkLFxuICBtYXhSZXNvbHV0aW9uOiAxMTEwMDAsIC8vIDMzMyozMzNweFxuICBvcHRpb25zOiB7fSxcbiAgYXZhdGFyOiBmYWxzZSxcbiAgYWx0OiB1bmRlZmluZWQsXG59O1xuZXhwb3J0IGRlZmF1bHQgQ2xvdWRpbmFyeUltYWdlO1xuIl19
