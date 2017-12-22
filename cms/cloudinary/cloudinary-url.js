var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

export default (function (value, options) {
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
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvY2xvdWRpbmFyeS11cmwuZXM2Il0sIm5hbWVzIjpbInZhbHVlIiwib3B0aW9ucyIsIm5ld09wdGlvbnMiLCJjIiwiZiIsInEiLCJmbCIsImRwciIsInVybCIsIm5ld1VybCIsImluZGV4T2YiLCJzdWJzdHIiLCJjcm9wIiwibGVuZ3RoIiwicXVlcnkiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5Iiwiam9pbiIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0JBQWUsVUFBQ0EsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQ2pDLE1BQU1DO0FBQ0pDLE9BQUcsTUFEQztBQUVKQyxPQUFHLE1BRkM7QUFHSkMsT0FBRyxVQUhDO0FBSUpDLFFBQUksT0FKQTtBQUtKQyxTQUFLO0FBTEQsS0FNRE4sT0FOQyxDQUFOOztBQVNBLE1BQUksQ0FBQ0QsS0FBRCxJQUFVLENBQUNBLE1BQU1RLEdBQXJCLEVBQTBCO0FBQ3hCLFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQU1DLFNBQ0pULE1BQU1RLEdBQU4sQ0FBVUUsT0FBVixDQUFrQiw0QkFBbEIsTUFBb0QsQ0FBcEQsYUFDWVYsTUFBTVEsR0FBTixDQUFVRyxNQUFWLENBQWlCLENBQWpCLENBRFosR0FFSVgsTUFBTVEsR0FIWjs7QUFLQSxNQUFNSSxPQUNKWixNQUFNWSxJQUFOLElBQWNaLE1BQU1ZLElBQU4sQ0FBV0MsTUFBekIsVUFDU2IsTUFBTVksSUFBTixDQUFXLENBQVgsQ0FEVCxXQUM0QlosTUFBTVksSUFBTixDQUFXLENBQVgsQ0FENUIsV0FDK0NaLE1BQU1ZLElBQU4sQ0FBVyxDQUFYLENBRC9DLFdBQ2tFWixNQUFNWSxJQUFOLENBQVcsQ0FBWCxDQURsRSxnQkFFSSxFQUhOOztBQUtBLE1BQU1FLFFBQVFDLE9BQU9DLElBQVAsQ0FBWWQsVUFBWixFQUNYZSxHQURXLENBQ1A7QUFBQSxXQUFVQyxHQUFWLFNBQWlCaEIsV0FBV2dCLEdBQVgsQ0FBakI7QUFBQSxHQURPLEVBRVhDLElBRlcsQ0FFTixHQUZNLENBQWQ7O0FBSUEsTUFBSVYsT0FBT0MsT0FBUCxDQUFlLFVBQWYsTUFBK0IsQ0FBQyxDQUFwQyxFQUF1QztBQUNyQyxXQUFPRCxPQUFPVyxPQUFQLENBQWUsVUFBZixlQUFzQ1IsSUFBdEMsR0FBNkNFLEtBQTdDLE9BQVA7QUFDRCxHQUZELE1BRU8sSUFBSUwsT0FBT0MsT0FBUCxDQUFlLFNBQWYsTUFBOEIsQ0FBQyxDQUFuQyxFQUFzQztBQUMzQyxXQUFPRCxPQUFPVyxPQUFQLENBQWUsU0FBZixjQUFvQ1IsSUFBcEMsR0FBMkNFLEtBQTNDLE9BQVA7QUFDRDtBQUNGLENBakNEIiwiZmlsZSI6InBhY2thZ2VzL2Nsb3VkaW5hcnkvY2xvdWRpbmFyeS11cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgbmV3T3B0aW9ucyA9IHtcbiAgICBjOiAnZmlsbCcsXG4gICAgZjogJ2F1dG8nLFxuICAgIHE6ICdhdXRvOmVjbycsXG4gICAgZmw6ICdsb3NzeScsXG4gICAgZHByOiAyLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG5cbiAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudXJsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgbmV3VXJsID1cbiAgICB2YWx1ZS51cmwuaW5kZXhPZignaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS8nKSA9PT0gMFxuICAgICAgPyBgaHR0cHMke3ZhbHVlLnVybC5zdWJzdHIoNCl9YFxuICAgICAgOiB2YWx1ZS51cmw7XG5cbiAgY29uc3QgY3JvcCA9XG4gICAgdmFsdWUuY3JvcCAmJiB2YWx1ZS5jcm9wLmxlbmd0aFxuICAgICAgPyBgd18ke3ZhbHVlLmNyb3BbMF19LGhfJHt2YWx1ZS5jcm9wWzFdfSx4XyR7dmFsdWUuY3JvcFsyXX0seV8ke3ZhbHVlLmNyb3BbM119LGNfY3JvcC9gXG4gICAgICA6ICcnO1xuXG4gIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmtleXMobmV3T3B0aW9ucylcbiAgICAubWFwKGtleSA9PiBgJHtrZXl9XyR7bmV3T3B0aW9uc1trZXldfWApXG4gICAgLmpvaW4oJywnKTtcblxuICBpZiAobmV3VXJsLmluZGV4T2YoJy91cGxvYWQvJykgIT09IC0xKSB7XG4gICAgcmV0dXJuIG5ld1VybC5yZXBsYWNlKCcvdXBsb2FkLycsIGAvdXBsb2FkLyR7Y3JvcH0ke3F1ZXJ5fS9gKTtcbiAgfSBlbHNlIGlmIChuZXdVcmwuaW5kZXhPZignL2ZldGNoLycpICE9PSAtMSkge1xuICAgIHJldHVybiBuZXdVcmwucmVwbGFjZSgnL2ZldGNoLycsIGAvZmV0Y2gvJHtjcm9wfSR7cXVlcnl9L2ApO1xuICB9XG59O1xuIl19
