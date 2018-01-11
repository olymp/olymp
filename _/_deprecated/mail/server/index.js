var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import fetch from 'isomorphic-fetch';
import hashtax, { toPlain, toHtml } from '../hashtax';
import htmlTemplate from './templates/default';

var htmlRenderer = function htmlRenderer(name, _ref) {
  var href = _ref.href,
      value = _ref.value;

  if (name === 'link') {
    return '<a href=' + href + ' itemprop="url" style="font-family: \'Helvetica Neue\',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;">' + value + '</a>';
  }
  return undefined;
};
export default (function (key) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') {
    options = { from: options };
  }
  if (options.from.indexOf('<') !== -1) {
    var _options$from$split = options.from.split('<'),
        _options$from$split2 = _slicedToArray(_options$from$split, 2),
        fromName = _options$from$split2[0],
        fromMail = _options$from$split2[1];

    options.fromName = fromName.trim();
    options.fromMail = fromMail.split('>')[1].trim();
  }
  var send = function send(template) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var props = _extends({}, options, args);
    var body = {
      From: props.from,
      To: props.to,
      Subject: props.subject
    };
    var hash = hashtax(template, props);
    body.TextBody = toPlain(hash, { trim: true, schema: {} });
    body.Subject = body.TextBody.split('\n')[0];
    body.HtmlBody = htmlTemplate(toHtml(hash, { minify: true, renderer: htmlRenderer }), props);
    console.log(body);
    return fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'X-Postmark-Server-Token': key,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
  };
  return send;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL21haWwvc2VydmVyL2luZGV4LmVzNiJdLCJuYW1lcyI6WyJmZXRjaCIsImhhc2h0YXgiLCJ0b1BsYWluIiwidG9IdG1sIiwiaHRtbFRlbXBsYXRlIiwiaHRtbFJlbmRlcmVyIiwibmFtZSIsImhyZWYiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImtleSIsIm9wdGlvbnMiLCJmcm9tIiwiaW5kZXhPZiIsInNwbGl0IiwiZnJvbU5hbWUiLCJmcm9tTWFpbCIsInRyaW0iLCJzZW5kIiwidGVtcGxhdGUiLCJhcmdzIiwicHJvcHMiLCJib2R5IiwiRnJvbSIsIlRvIiwidG8iLCJTdWJqZWN0Iiwic3ViamVjdCIsImhhc2giLCJUZXh0Qm9keSIsInNjaGVtYSIsIkh0bWxCb2R5IiwibWluaWZ5IiwicmVuZGVyZXIiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJBY2NlcHQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLGtCQUFsQjtBQUNBLE9BQU9DLE9BQVAsSUFBa0JDLE9BQWxCLEVBQTJCQyxNQUEzQixRQUF5QyxZQUF6QztBQUNBLE9BQU9DLFlBQVAsTUFBeUIscUJBQXpCOztBQUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxJQUFELFFBQTJCO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDOUMsTUFBSUYsU0FBUyxNQUFiLEVBQXFCO0FBQ25CLHdCQUFrQkMsSUFBbEIscWFBQW9iQyxLQUFwYjtBQUNEO0FBQ0QsU0FBT0MsU0FBUDtBQUNELENBTEQ7QUFNQSxnQkFBZSxVQUFDQyxHQUFELEVBQXVCO0FBQUEsTUFBakJDLE9BQWlCLHVFQUFQLEVBQU87O0FBQ3BDLE1BQUksT0FBT0EsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUMvQkEsY0FBVSxFQUFFQyxNQUFNRCxPQUFSLEVBQVY7QUFDRDtBQUNELE1BQUlBLFFBQVFDLElBQVIsQ0FBYUMsT0FBYixDQUFxQixHQUFyQixNQUE4QixDQUFDLENBQW5DLEVBQXNDO0FBQUEsOEJBQ1BGLFFBQVFDLElBQVIsQ0FBYUUsS0FBYixDQUFtQixHQUFuQixDQURPO0FBQUE7QUFBQSxRQUM3QkMsUUFENkI7QUFBQSxRQUNuQkMsUUFEbUI7O0FBRXBDTCxZQUFRSSxRQUFSLEdBQW1CQSxTQUFTRSxJQUFULEVBQW5CO0FBQ0FOLFlBQVFLLFFBQVIsR0FBbUJBLFNBQVNGLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLEVBQXVCRyxJQUF2QixFQUFuQjtBQUNEO0FBQ0QsTUFBTUMsT0FBTyxTQUFQQSxJQUFPLENBQUNDLFFBQUQsRUFBeUI7QUFBQSxRQUFkQyxJQUFjLHVFQUFQLEVBQU87O0FBQ3BDLFFBQU1DLHFCQUFhVixPQUFiLEVBQXlCUyxJQUF6QixDQUFOO0FBQ0EsUUFBTUUsT0FBTztBQUNYQyxZQUFNRixNQUFNVCxJQUREO0FBRVhZLFVBQUlILE1BQU1JLEVBRkM7QUFHWEMsZUFBU0wsTUFBTU07QUFISixLQUFiO0FBS0EsUUFBTUMsT0FBTzNCLFFBQVFrQixRQUFSLEVBQWtCRSxLQUFsQixDQUFiO0FBQ0FDLFNBQUtPLFFBQUwsR0FBZ0IzQixRQUFRMEIsSUFBUixFQUFjLEVBQUVYLE1BQU0sSUFBUixFQUFjYSxRQUFRLEVBQXRCLEVBQWQsQ0FBaEI7QUFDQVIsU0FBS0ksT0FBTCxHQUFlSixLQUFLTyxRQUFMLENBQWNmLEtBQWQsQ0FBb0IsSUFBcEIsRUFBMEIsQ0FBMUIsQ0FBZjtBQUNBUSxTQUFLUyxRQUFMLEdBQWdCM0IsYUFDZEQsT0FBT3lCLElBQVAsRUFBYSxFQUFFSSxRQUFRLElBQVYsRUFBZ0JDLFVBQVU1QixZQUExQixFQUFiLENBRGMsRUFFZGdCLEtBRmMsQ0FBaEI7QUFJQWEsWUFBUUMsR0FBUixDQUFZYixJQUFaO0FBQ0EsV0FBT3RCLE1BQU0sbUNBQU4sRUFBMkM7QUFDaERvQyxjQUFRLE1BRHdDO0FBRWhEZCxZQUFNZSxLQUFLQyxTQUFMLENBQWVoQixJQUFmLENBRjBDO0FBR2hEaUIsZUFBUztBQUNQLG1DQUEyQjdCLEdBRHBCO0FBRVAsd0JBQWdCLGtCQUZUO0FBR1A4QixnQkFBUTtBQUhEO0FBSHVDLEtBQTNDLENBQVA7QUFTRCxHQXhCRDtBQXlCQSxTQUFPdEIsSUFBUDtBQUNELENBbkNEIiwiZmlsZSI6InBhY2thZ2VzL21haWwvc2VydmVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IGhhc2h0YXgsIHsgdG9QbGFpbiwgdG9IdG1sIH0gZnJvbSAnLi4vaGFzaHRheCc7XG5pbXBvcnQgaHRtbFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL2RlZmF1bHQnO1xuXG5jb25zdCBodG1sUmVuZGVyZXIgPSAobmFtZSwgeyBocmVmLCB2YWx1ZSB9KSA9PiB7XG4gIGlmIChuYW1lID09PSAnbGluaycpIHtcbiAgICByZXR1cm4gYDxhIGhyZWY9JHtocmVmfSBpdGVtcHJvcD1cInVybFwiIHN0eWxlPVwiZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICNGRkY7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgbGluZS1oZWlnaHQ6IDJlbTsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtYWxpZ246IGNlbnRlcjsgY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJvcmRlci1yYWRpdXM6IDVweDsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IGJhY2tncm91bmQtY29sb3I6ICMzNDhlZGE7IG1hcmdpbjogMDsgYm9yZGVyLWNvbG9yOiAjMzQ4ZWRhOyBib3JkZXItc3R5bGU6IHNvbGlkOyBib3JkZXItd2lkdGg6IDEwcHggMjBweDtcIj4ke3ZhbHVlfTwvYT5gO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgKGtleSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0geyBmcm9tOiBvcHRpb25zIH07XG4gIH1cbiAgaWYgKG9wdGlvbnMuZnJvbS5pbmRleE9mKCc8JykgIT09IC0xKSB7XG4gICAgY29uc3QgW2Zyb21OYW1lLCBmcm9tTWFpbF0gPSBvcHRpb25zLmZyb20uc3BsaXQoJzwnKTtcbiAgICBvcHRpb25zLmZyb21OYW1lID0gZnJvbU5hbWUudHJpbSgpO1xuICAgIG9wdGlvbnMuZnJvbU1haWwgPSBmcm9tTWFpbC5zcGxpdCgnPicpWzFdLnRyaW0oKTtcbiAgfVxuICBjb25zdCBzZW5kID0gKHRlbXBsYXRlLCBhcmdzID0ge30pID0+IHtcbiAgICBjb25zdCBwcm9wcyA9IHsgLi4ub3B0aW9ucywgLi4uYXJncyB9O1xuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICBGcm9tOiBwcm9wcy5mcm9tLFxuICAgICAgVG86IHByb3BzLnRvLFxuICAgICAgU3ViamVjdDogcHJvcHMuc3ViamVjdCxcbiAgICB9O1xuICAgIGNvbnN0IGhhc2ggPSBoYXNodGF4KHRlbXBsYXRlLCBwcm9wcyk7XG4gICAgYm9keS5UZXh0Qm9keSA9IHRvUGxhaW4oaGFzaCwgeyB0cmltOiB0cnVlLCBzY2hlbWE6IHt9IH0pO1xuICAgIGJvZHkuU3ViamVjdCA9IGJvZHkuVGV4dEJvZHkuc3BsaXQoJ1xcbicpWzBdO1xuICAgIGJvZHkuSHRtbEJvZHkgPSBodG1sVGVtcGxhdGUoXG4gICAgICB0b0h0bWwoaGFzaCwgeyBtaW5pZnk6IHRydWUsIHJlbmRlcmVyOiBodG1sUmVuZGVyZXIgfSksXG4gICAgICBwcm9wcyxcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9hcGkucG9zdG1hcmthcHAuY29tL2VtYWlsJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtUG9zdG1hcmstU2VydmVyLVRva2VuJzoga2V5LFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBzZW5kO1xufTtcbiJdfQ==
