'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (value, options) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2Nsb3VkaW5hcnktdXJsLmVzNiJdLCJuYW1lcyI6WyJ2YWx1ZSIsIm9wdGlvbnMiLCJuZXdPcHRpb25zIiwiYyIsImYiLCJxIiwiZmwiLCJkcHIiLCJ1cmwiLCJuZXdVcmwiLCJpbmRleE9mIiwic3Vic3RyIiwiY3JvcCIsImxlbmd0aCIsInF1ZXJ5IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImpvaW4iLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFBZSxVQUFDQSxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDakMsTUFBTUM7QUFDSkMsT0FBRyxNQURDO0FBRUpDLE9BQUcsTUFGQztBQUdKQyxPQUFHLFVBSEM7QUFJSkMsUUFBSSxPQUpBO0FBS0pDLFNBQUs7QUFMRCxLQU1ETixPQU5DLENBQU47O0FBU0EsTUFBSSxDQUFDRCxLQUFELElBQVUsQ0FBQ0EsTUFBTVEsR0FBckIsRUFBMEI7QUFDeEIsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsU0FDSlQsTUFBTVEsR0FBTixDQUFVRSxPQUFWLENBQWtCLDRCQUFsQixNQUFvRCxDQUFwRCxhQUNZVixNQUFNUSxHQUFOLENBQVVHLE1BQVYsQ0FBaUIsQ0FBakIsQ0FEWixHQUVJWCxNQUFNUSxHQUhaOztBQUtBLE1BQU1JLE9BQ0paLE1BQU1ZLElBQU4sSUFBY1osTUFBTVksSUFBTixDQUFXQyxNQUF6QixVQUNTYixNQUFNWSxJQUFOLENBQVcsQ0FBWCxDQURULFdBQzRCWixNQUFNWSxJQUFOLENBQVcsQ0FBWCxDQUQ1QixXQUMrQ1osTUFBTVksSUFBTixDQUFXLENBQVgsQ0FEL0MsV0FDa0VaLE1BQU1ZLElBQU4sQ0FBVyxDQUFYLENBRGxFLGdCQUVJLEVBSE47O0FBS0EsTUFBTUUsUUFBUUMsT0FBT0MsSUFBUCxDQUFZZCxVQUFaLEVBQ1hlLEdBRFcsQ0FDUDtBQUFBLFdBQVVDLEdBQVYsU0FBaUJoQixXQUFXZ0IsR0FBWCxDQUFqQjtBQUFBLEdBRE8sRUFFWEMsSUFGVyxDQUVOLEdBRk0sQ0FBZDs7QUFJQSxNQUFJVixPQUFPQyxPQUFQLENBQWUsVUFBZixNQUErQixDQUFDLENBQXBDLEVBQXVDO0FBQ3JDLFdBQU9ELE9BQU9XLE9BQVAsQ0FBZSxVQUFmLGVBQXNDUixJQUF0QyxHQUE2Q0UsS0FBN0MsT0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJTCxPQUFPQyxPQUFQLENBQWUsU0FBZixNQUE4QixDQUFDLENBQW5DLEVBQXNDO0FBQzNDLFdBQU9ELE9BQU9XLE9BQVAsQ0FBZSxTQUFmLGNBQW9DUixJQUFwQyxHQUEyQ0UsS0FBM0MsT0FBUDtBQUNEO0FBQ0YsQyIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS9jbG91ZGluYXJ5LXVybC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBuZXdPcHRpb25zID0ge1xuICAgIGM6ICdmaWxsJyxcbiAgICBmOiAnYXV0bycsXG4gICAgcTogJ2F1dG86ZWNvJyxcbiAgICBmbDogJ2xvc3N5JyxcbiAgICBkcHI6IDIsXG4gICAgLi4ub3B0aW9ucyxcbiAgfTtcblxuICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS51cmwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdCBuZXdVcmwgPVxuICAgIHZhbHVlLnVybC5pbmRleE9mKCdodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tLycpID09PSAwXG4gICAgICA/IGBodHRwcyR7dmFsdWUudXJsLnN1YnN0cig0KX1gXG4gICAgICA6IHZhbHVlLnVybDtcblxuICBjb25zdCBjcm9wID1cbiAgICB2YWx1ZS5jcm9wICYmIHZhbHVlLmNyb3AubGVuZ3RoXG4gICAgICA/IGB3XyR7dmFsdWUuY3JvcFswXX0saF8ke3ZhbHVlLmNyb3BbMV19LHhfJHt2YWx1ZS5jcm9wWzJdfSx5XyR7dmFsdWUuY3JvcFszXX0sY19jcm9wL2BcbiAgICAgIDogJyc7XG5cbiAgY29uc3QgcXVlcnkgPSBPYmplY3Qua2V5cyhuZXdPcHRpb25zKVxuICAgIC5tYXAoa2V5ID0+IGAke2tleX1fJHtuZXdPcHRpb25zW2tleV19YClcbiAgICAuam9pbignLCcpO1xuXG4gIGlmIChuZXdVcmwuaW5kZXhPZignL3VwbG9hZC8nKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gbmV3VXJsLnJlcGxhY2UoJy91cGxvYWQvJywgYC91cGxvYWQvJHtjcm9wfSR7cXVlcnl9L2ApO1xuICB9IGVsc2UgaWYgKG5ld1VybC5pbmRleE9mKCcvZmV0Y2gvJykgIT09IC0xKSB7XG4gICAgcmV0dXJuIG5ld1VybC5yZXBsYWNlKCcvZmV0Y2gvJywgYC9mZXRjaC8ke2Nyb3B9JHtxdWVyeX0vYCk7XG4gIH1cbn07XG4iXX0=
