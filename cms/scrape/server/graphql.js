var _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import Metascraper from 'metascraper';
import got from 'got';
import cloudinary from 'cloudinary';
import { URL } from 'url';

var props = {
  image: {
    crop: 'fill',
    format: 'auto',
    quality: 'auto',
    gravity: 'auto',
    dpr: 2,
    width: 150,
    height: 175
  },
  logo: {
    crop: 'fill',
    format: 'auto',
    quality: 'auto',
    gravity: 'auto',
    dpr: 2,
    width: 75,
    height: 75
  },
  favicon: {
    crop: 'fill',
    format: 'auto',
    quality: 'auto',
    gravity: 'auto',
    dpr: 2,
    width: 16,
    height: 16
  }
};
var trimLength = function trimLength(str, length) {
  return str.length > length ? str.substring(0, length) + '...' : str;
};
var getPromise = function getPromise(metadata, prop) {
  if (metadata[prop]) {
    try {
      return {
        id: metadata[prop],
        url: cloudinary.utils.url(metadata[prop], {
          type: 'fetch',
          transformation: props[prop]
        }),
        width: props[prop].width,
        height: props[prop].height
      };
    } catch (err) {}
  }
};

var getImages = function getImages(metadata) {
  return Promise.all([getPromise(metadata, 'image'), getPromise(metadata, 'logo')]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        image = _ref2[0],
        logo = _ref2[1];

    if (image) {
      metadata.image = image;
    }
    if (logo) {
      metadata.logo = logo;
    }
    return metadata;
  });
};

var getRules = function getRules(_url) {
  var wrap = function wrap(rule) {
    return function ($) {
      var value = rule($);
      if (!value || value.endsWith('.svg')) {
        return undefined;
      }
      if (value.indexOf('http') === 0) {
        return value;
      }
      if (value.indexOf('//') === 0) {
        return 'https:' + value;
      }
      if (value.indexOf('/') === 0) {
        return '' + _url.origin + value;
      }
      if (value.indexOf('./') === 0) {
        return '' + _url.href + value.substr(1);
      }
      return value;
    };
  };
  function wrapDescription(rule) {
    return function ($) {
      var value = rule($);
      if (typeof value !== 'string') {
        return undefined;
      }
      value = value.trim();
      value = value.replace(/^[A-Z\s]+\s+[-—–]\s+/, '');
      return trimLength(value, 160);
    };
  }
  return _extends({}, Metascraper.RULES, {
    url: function url() {
      return _url.href;
    },
    origin: function origin() {
      return _url.origin;
    },
    description: [].concat(_toConsumableArray(Metascraper.RULES.description), [wrapDescription(function ($) {
      return $('p').first().text();
    })]),
    favicon: function favicon() {
      return {
        url: 'https://res.cloudinary.com/demo/image/fetch/' + _url.origin + '/favicon.ico',
        width: 32,
        height: 32
      };
    },
    extract: function extract($) {
      return $('p').first().text();
    },
    image: [wrap(function ($) {
      return _url.origin.indexOf('wikipedia.org') !== -1 ? 'https://de.wikipedia.org/static/images/project-logos/dewiki-2x.png' : undefined;
    }), wrap(function ($) {
      return $('meta[property="og:image:secure_url"]').attr('content');
    }), wrap(function ($) {
      return $('meta[property="og:image:url"]').attr('content');
    }), wrap(function ($) {
      return $('meta[property="og:image"]').attr('content');
    }), wrap(function ($) {
      return $('meta[name="twitter:image"]').attr('content');
    }), wrap(function ($) {
      return $('meta[property="twitter:image"]').attr('content');
    }), wrap(function ($) {
      return $('meta[name="twitter:image:src"]').attr('content');
    }), wrap(function ($) {
      return $('meta[property="twitter:image:src"]').attr('content');
    }), wrap(function ($) {
      return $('meta[name="sailthru.image"]').attr('content');
    }), wrap(function ($) {
      return $('meta[name="sailthru.image.full"]').attr('content');
    }), wrap(function ($) {
      return $('meta[name="sailthru.image.thumb"]').attr('content');
    }), wrap(function ($) {
      return $('article img[src]').first().attr('src');
    }), wrap(function ($) {
      return $('#content img[src]').first().attr('src');
    }), wrap(function ($) {
      return $('[class*="article"] img[src]').first().attr('src');
    }), wrap(function ($) {
      return $('img[src]').first().attr('src');
    })],
    logo: [wrap(function ($) {
      return $('img#logo[src]').first().attr('src');
    }), wrap(function ($) {
      return $('img.logo[src]').first().attr('src');
    })]
  });
};
export default (function () {
  return {
    name: 'scrape',
    queries: '\n      scrape(url: String): Meta\n    ',
    resolvers: {
      queries: {
        scrape: function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(source, _ref4) {
            var url = _ref4.url;

            var _ref5, html, metadata;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return got(url);

                  case 2:
                    _ref5 = _context.sent;
                    html = _ref5.body;
                    _context.next = 6;
                    return Metascraper({ html: html, url: url });

                  case 6:
                    metadata = _context.sent;
                    return _context.abrupt('return', _extends({}, metadata, {
                      id: url
                    }));

                  case 9:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }));

          return function scrape(_x, _x2) {
            return _ref3.apply(this, arguments);
          };
        }()
      }
    },
    schema: '\n    type Meta {\n      id: String\n      origin: String\n      author: String\n      extract: String\n      date: DateTime\n      description: String\n      favicon: Image\n      image: Image\n      logo: Image\n      publisher: String\n      title: String\n      url: String\n    }\n  '
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NjcmFwZS9zZXJ2ZXIvZ3JhcGhxbC5lczYiXSwibmFtZXMiOlsiTWV0YXNjcmFwZXIiLCJnb3QiLCJjbG91ZGluYXJ5IiwiVVJMIiwicHJvcHMiLCJpbWFnZSIsImNyb3AiLCJmb3JtYXQiLCJxdWFsaXR5IiwiZ3Jhdml0eSIsImRwciIsIndpZHRoIiwiaGVpZ2h0IiwibG9nbyIsImZhdmljb24iLCJ0cmltTGVuZ3RoIiwic3RyIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiZ2V0UHJvbWlzZSIsIm1ldGFkYXRhIiwicHJvcCIsImlkIiwidXJsIiwidXRpbHMiLCJ0eXBlIiwidHJhbnNmb3JtYXRpb24iLCJlcnIiLCJnZXRJbWFnZXMiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImdldFJ1bGVzIiwid3JhcCIsInZhbHVlIiwicnVsZSIsIiQiLCJlbmRzV2l0aCIsInVuZGVmaW5lZCIsImluZGV4T2YiLCJvcmlnaW4iLCJocmVmIiwic3Vic3RyIiwid3JhcERlc2NyaXB0aW9uIiwidHJpbSIsInJlcGxhY2UiLCJSVUxFUyIsImRlc2NyaXB0aW9uIiwiZmlyc3QiLCJ0ZXh0IiwiZXh0cmFjdCIsImF0dHIiLCJuYW1lIiwicXVlcmllcyIsInJlc29sdmVycyIsInNjcmFwZSIsInNvdXJjZSIsImh0bWwiLCJib2R5Iiwic2NoZW1hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsV0FBUCxNQUF3QixhQUF4QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsS0FBaEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsU0FBU0MsR0FBVCxRQUFvQixLQUFwQjs7QUFFQSxJQUFNQyxRQUFRO0FBQ1pDLFNBQU87QUFDTEMsVUFBTSxNQUREO0FBRUxDLFlBQVEsTUFGSDtBQUdMQyxhQUFTLE1BSEo7QUFJTEMsYUFBUyxNQUpKO0FBS0xDLFNBQUssQ0FMQTtBQU1MQyxXQUFPLEdBTkY7QUFPTEMsWUFBUTtBQVBILEdBREs7QUFVWkMsUUFB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QUFBLEtBQUwsQ0EzQkssRUFnQ0xsQixLQUFLO0FBQUEsYUFDSEcsRUFBRSxVQUFGLEVBQ0dZLEtBREgsR0FFR0csSUFGSCxDQUVRLEtBRlIsQ0FERztBQUFBLEtBQUwsQ0FoQ0ssQ0FyQlQ7QUEyREV0QyxVQUFNLENBQ0pvQixLQUFLO0FBQUEsYUFDSEcsRUFBRSxlQUFGLEVBQ0dZLEtBREgsR0FFR0csSUFGSCxDQUVRLEtBRlIsQ0FERztBQUFBLEtBQUwsQ0FESSxFQU1KbEIsS0FBSztBQUFBLGFBQ0hHLEVBQUUsZUFBRixFQUNHWSxLQURILEdBRUdHLElBRkgsQ0FFUSxLQUZSLENBREc7QUFBQSxLQUFMLENBTkk7QUEzRFI7QUF3RUQsQ0F2R0Q7QUF3R0EsZ0JBQWU7QUFBQSxTQUFPO0FBQ3BCQyxVQUFNLFFBRGM7QUFFcEJDLHNEQUZvQjtBQUtwQkMsZUFBVztBQUNURCxlQUFTO0FBQ1BFO0FBQUEsOEVBQVEsaUJBQU9DLE1BQVA7QUFBQSxnQkFBaUJqQyxHQUFqQixTQUFpQkEsR0FBakI7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUN1QnRCLElBQUlzQixHQUFKLENBRHZCOztBQUFBO0FBQUE7QUFDUWtDLHdCQURSLFNBQ0VDLElBREY7QUFBQTtBQUFBLDJCQUVpQjFELFlBQVksRUFBRXlELFVBQUYsRUFBUWxDLFFBQVIsRUFBWixDQUZqQjs7QUFBQTtBQUVBSCw0QkFGQTtBQUFBLGtFQUlEQSxRQUpDO0FBS0pFLDBCQUFJQztBQUxBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETztBQURBLEtBTFM7QUF3QnBCb0M7QUF4Qm9CLEdBQVA7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3NjcmFwZS9zZXJ2ZXIvZ3JhcGhxbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZXRhc2NyYXBlciBmcm9tICdtZXRhc2NyYXBlcic7XG5pbXBvcnQgZ290IGZyb20gJ2dvdCc7XG5pbXBvcnQgY2xvdWRpbmFyeSBmcm9tICdjbG91ZGluYXJ5JztcbmltcG9ydCB7IFVSTCB9IGZyb20gJ3VybCc7XG5cbmNvbnN0IHByb3BzID0ge1xuICBpbWFnZToge1xuICAgIGNyb3A6ICdmaWxsJyxcbiAgICBmb3JtYXQ6ICdhdXRvJyxcbiAgICBxdWFsaXR5OiAnYXV0bycsXG4gICAgZ3Jhdml0eTogJ2F1dG8nLFxuICAgIGRwcjogMixcbiAgICB3aWR0aDogMTUwLFxuICAgIGhlaWdodDogMTc1LFxuICB9LFxuICBsb2dvOiB7XG4gICAgY3JvcDogJ2ZpbGwnLFxuICAgIGZvcm1hdDogJ2F1dG8nLFxuICAgIHF1YWxpdHk6ICdhdXRvJyxcbiAgICBncmF2aXR5OiAnYXV0bycsXG4gICAgZHByOiAyLFxuICAgIHdpZHRoOiA3NSxcbiAgICBoZWlnaHQ6IDc1LFxuICB9LFxuICBmYXZpY29uOiB7XG4gICAgY3JvcDogJ2ZpbGwnLFxuICAgIGZvcm1hdDogJ2F1dG8nLFxuICAgIHF1YWxpdHk6ICdhdXRvJyxcbiAgICBncmF2aXR5OiAnYXV0bycsXG4gICAgZHByOiAyLFxuICAgIHdpZHRoOiAxNixcbiAgICBoZWlnaHQ6IDE2LFxuICB9LFxufTtcbmNvbnN0IHRyaW1MZW5ndGggPSAoc3RyLCBsZW5ndGgpID0+XG4gIHN0ci5sZW5ndGggPiBsZW5ndGggPyBgJHtzdHIuc3Vic3RyaW5nKDAsIGxlbmd0aCl9Li4uYCA6IHN0cjtcbmNvbnN0IGdldFByb21pc2UgPSAobWV0YWRhdGEsIHByb3ApID0+IHtcbiAgaWYgKG1ldGFkYXRhW3Byb3BdKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBtZXRhZGF0YVtwcm9wXSxcbiAgICAgICAgdXJsOiBjbG91ZGluYXJ5LnV0aWxzLnVybChtZXRhZGF0YVtwcm9wXSwge1xuICAgICAgICAgIHR5cGU6ICdmZXRjaCcsXG4gICAgICAgICAgdHJhbnNmb3JtYXRpb246IHByb3BzW3Byb3BdLFxuICAgICAgICB9KSxcbiAgICAgICAgd2lkdGg6IHByb3BzW3Byb3BdLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHByb3BzW3Byb3BdLmhlaWdodCxcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9XG59O1xuXG5jb25zdCBnZXRJbWFnZXMgPSBtZXRhZGF0YSA9PlxuICBQcm9taXNlLmFsbChbXG4gICAgZ2V0UHJvbWlzZShtZXRhZGF0YSwgJ2ltYWdlJyksXG4gICAgZ2V0UHJvbWlzZShtZXRhZGF0YSwgJ2xvZ28nKSxcbiAgXSkudGhlbigoW2ltYWdlLCBsb2dvXSkgPT4ge1xuICAgIGlmIChpbWFnZSkge1xuICAgICAgbWV0YWRhdGEuaW1hZ2UgPSBpbWFnZTtcbiAgICB9XG4gICAgaWYgKGxvZ28pIHtcbiAgICAgIG1ldGFkYXRhLmxvZ28gPSBsb2dvO1xuICAgIH1cbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH0pO1xuXG5jb25zdCBnZXRSdWxlcyA9IHVybCA9PiB7XG4gIGNvbnN0IHdyYXAgPSBydWxlID0+ICQgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcnVsZSgkKTtcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLmVuZHNXaXRoKCcuc3ZnJykpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5pbmRleE9mKCdodHRwJykgPT09IDApIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmluZGV4T2YoJy8vJykgPT09IDApIHtcbiAgICAgIHJldHVybiBgaHR0cHM6JHt2YWx1ZX1gO1xuICAgIH1cbiAgICBpZiAodmFsdWUuaW5kZXhPZignLycpID09PSAwKSB7XG4gICAgICByZXR1cm4gYCR7dXJsLm9yaWdpbn0ke3ZhbHVlfWA7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5pbmRleE9mKCcuLycpID09PSAwKSB7XG4gICAgICByZXR1cm4gYCR7dXJsLmhyZWZ9JHt2YWx1ZS5zdWJzdHIoMSl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuICBmdW5jdGlvbiB3cmFwRGVzY3JpcHRpb24ocnVsZSkge1xuICAgIHJldHVybiAkID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IHJ1bGUoJCk7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL15bQS1aXFxzXStcXHMrWy3igJTigJNdXFxzKy8sICcnKTtcbiAgICAgIHJldHVybiB0cmltTGVuZ3RoKHZhbHVlLCAxNjApO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAuLi5NZXRhc2NyYXBlci5SVUxFUyxcbiAgICB1cmw6ICgpID0+IHVybC5ocmVmLFxuICAgIG9yaWdpbjogKCkgPT4gdXJsLm9yaWdpbixcbiAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgLi4uTWV0YXNjcmFwZXIuUlVMRVMuZGVzY3JpcHRpb24sXG4gICAgICB3cmFwRGVzY3JpcHRpb24oJCA9PlxuICAgICAgICAkKCdwJylcbiAgICAgICAgICAuZmlyc3QoKVxuICAgICAgICAgIC50ZXh0KCksXG4gICAgICApLFxuICAgIF0sXG4gICAgZmF2aWNvbjogKCkgPT4gKHtcbiAgICAgIHVybDogYGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvZmV0Y2gvJHt1cmwub3JpZ2lufS9mYXZpY29uLmljb2AsXG4gICAgICB3aWR0aDogMzIsXG4gICAgICBoZWlnaHQ6IDMyLFxuICAgIH0pLFxuICAgIGV4dHJhY3Q6ICQgPT5cbiAgICAgICQoJ3AnKVxuICAgICAgICAuZmlyc3QoKVxuICAgICAgICAudGV4dCgpLFxuICAgIGltYWdlOiBbXG4gICAgICB3cmFwKFxuICAgICAgICAkID0+XG4gICAgICAgICAgdXJsLm9yaWdpbi5pbmRleE9mKCd3aWtpcGVkaWEub3JnJykgIT09IC0xXG4gICAgICAgICAgICA/ICdodHRwczovL2RlLndpa2lwZWRpYS5vcmcvc3RhdGljL2ltYWdlcy9wcm9qZWN0LWxvZ29zL2Rld2lraS0yeC5wbmcnXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICksXG4gICAgICB3cmFwKCQgPT4gJCgnbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlOnNlY3VyZV91cmxcIl0nKS5hdHRyKCdjb250ZW50JykpLFxuICAgICAgd3JhcCgkID0+ICQoJ21ldGFbcHJvcGVydHk9XCJvZzppbWFnZTp1cmxcIl0nKS5hdHRyKCdjb250ZW50JykpLFxuICAgICAgd3JhcCgkID0+ICQoJ21ldGFbcHJvcGVydHk9XCJvZzppbWFnZVwiXScpLmF0dHIoJ2NvbnRlbnQnKSksXG4gICAgICB3cmFwKCQgPT4gJCgnbWV0YVtuYW1lPVwidHdpdHRlcjppbWFnZVwiXScpLmF0dHIoJ2NvbnRlbnQnKSksXG4gICAgICB3cmFwKCQgPT4gJCgnbWV0YVtwcm9wZXJ0eT1cInR3aXR0ZXI6aW1hZ2VcIl0nKS5hdHRyKCdjb250ZW50JykpLFxuICAgICAgd3JhcCgkID0+ICQoJ21ldGFbbmFtZT1cInR3aXR0ZXI6aW1hZ2U6c3JjXCJdJykuYXR0cignY29udGVudCcpKSxcbiAgICAgIHdyYXAoJCA9PiAkKCdtZXRhW3Byb3BlcnR5PVwidHdpdHRlcjppbWFnZTpzcmNcIl0nKS5hdHRyKCdjb250ZW50JykpLFxuICAgICAgd3JhcCgkID0+ICQoJ21ldGFbbmFtZT1cInNhaWx0aHJ1LmltYWdlXCJdJykuYXR0cignY29udGVudCcpKSxcbiAgICAgIHdyYXAoJCA9PiAkKCdtZXRhW25hbWU9XCJzYWlsdGhydS5pbWFnZS5mdWxsXCJdJykuYXR0cignY29udGVudCcpKSxcbiAgICAgIHdyYXAoJCA9PiAkKCdtZXRhW25hbWU9XCJzYWlsdGhydS5pbWFnZS50aHVtYlwiXScpLmF0dHIoJ2NvbnRlbnQnKSksXG4gICAgICB3cmFwKCQgPT5cbiAgICAgICAgJCgnYXJ0aWNsZSBpbWdbc3JjXScpXG4gICAgICAgICAgLmZpcnN0KClcbiAgICAgICAgICAuYXR0cignc3JjJyksXG4gICAgICApLFxuICAgICAgd3JhcCgkID0+XG4gICAgICAgICQoJyNjb250ZW50IGltZ1tzcmNdJylcbiAgICAgICAgICAuZmlyc3QoKVxuICAgICAgICAgIC5hdHRyKCdzcmMnKSxcbiAgICAgICksXG4gICAgICB3cmFwKCQgPT5cbiAgICAgICAgJCgnW2NsYXNzKj1cImFydGljbGVcIl0gaW1nW3NyY10nKVxuICAgICAgICAgIC5maXJzdCgpXG4gICAgICAgICAgLmF0dHIoJ3NyYycpLFxuICAgICAgKSxcbiAgICAgIHdyYXAoJCA9PlxuICAgICAgICAkKCdpbWdbc3JjXScpXG4gICAgICAgICAgLmZpcnN0KClcbiAgICAgICAgICAuYXR0cignc3JjJyksXG4gICAgICApLFxuICAgIF0sXG4gICAgbG9nbzogW1xuICAgICAgd3JhcCgkID0+XG4gICAgICAgICQoJ2ltZyNsb2dvW3NyY10nKVxuICAgICAgICAgIC5maXJzdCgpXG4gICAgICAgICAgLmF0dHIoJ3NyYycpLFxuICAgICAgKSxcbiAgICAgIHdyYXAoJCA9PlxuICAgICAgICAkKCdpbWcubG9nb1tzcmNdJylcbiAgICAgICAgICAuZmlyc3QoKVxuICAgICAgICAgIC5hdHRyKCdzcmMnKSxcbiAgICAgICksXG4gICAgXSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoe1xuICBuYW1lOiAnc2NyYXBlJyxcbiAgcXVlcmllczogYFxuICAgICAgc2NyYXBlKHVybDogU3RyaW5nKTogTWV0YVxuICAgIGAsXG4gIHJlc29sdmVyczoge1xuICAgIHF1ZXJpZXM6IHtcbiAgICAgIHNjcmFwZTogYXN5bmMgKHNvdXJjZSwgeyB1cmwgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IGJvZHk6IGh0bWwgfSA9IGF3YWl0IGdvdCh1cmwpO1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IE1ldGFzY3JhcGVyKHsgaHRtbCwgdXJsIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLm1ldGFkYXRhLFxuICAgICAgICAgIGlkOiB1cmwsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBNZXRhc2NyYXBlci5zY3JhcGVVcmwodXJsLCBnZXRSdWxlcyhuZXcgVVJMKHVybCkpKVxuICAgICAgICAgIC50aGVuKGdldEltYWdlcylcbiAgICAgICAgICAudGhlbihtZXRhZGF0YSA9PiAoe1xuICAgICAgICAgICAgLi4ubWV0YWRhdGEsXG4gICAgICAgICAgICBpZDogdXJsLFxuICAgICAgICAgIH0pKVxuICAgICAgICAgIC5jYXRjaCgoKSA9PiAoe30pKVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIHNjaGVtYTogYFxuICAgIHR5cGUgTWV0YSB7XG4gICAgICBpZDogU3RyaW5nXG4gICAgICBvcmlnaW46IFN0cmluZ1xuICAgICAgYXV0aG9yOiBTdHJpbmdcbiAgICAgIGV4dHJhY3Q6IFN0cmluZ1xuICAgICAgZGF0ZTogRGF0ZVRpbWVcbiAgICAgIGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgICAgIGZhdmljb246IEltYWdlXG4gICAgICBpbWFnZTogSW1hZ2VcbiAgICAgIGxvZ286IEltYWdlXG4gICAgICBwdWJsaXNoZXI6IFN0cmluZ1xuICAgICAgdGl0bGU6IFN0cmluZ1xuICAgICAgdXJsOiBTdHJpbmdcbiAgICB9XG4gIGAsXG59KTtcbiJdfQ==
