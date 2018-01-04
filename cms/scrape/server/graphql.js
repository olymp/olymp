'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _metascraper = require('metascraper');

var _metascraper2 = _interopRequireDefault(_metascraper);

var _got = require('got');

var _got2 = _interopRequireDefault(_got);

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _url2 = require('url');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
        url: _cloudinary2.default.utils.url(metadata[prop], {
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
  return _extends({}, _metascraper2.default.RULES, {
    url: function url() {
      return _url.href;
    },
    origin: function origin() {
      return _url.origin;
    },
    description: [].concat(_toConsumableArray(_metascraper2.default.RULES.description), [wrapDescription(function ($) {
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

exports.default = function () {
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
                    return (0, _got2.default)(url);

                  case 2:
                    _ref5 = _context.sent;
                    html = _ref5.body;
                    _context.next = 6;
                    return (0, _metascraper2.default)({ html: html, url: url });

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
            }, _callee, undefined);
          }));

          return function scrape(_x, _x2) {
            return _ref3.apply(this, arguments);
          };
        }()
      }
    },
    schema: '\n    type Meta {\n      id: String\n      origin: String\n      author: String\n      extract: String\n      date: DateTime\n      description: String\n      favicon: Image\n      image: Image\n      logo: Image\n      publisher: String\n      title: String\n      url: String\n    }\n  '
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9zY3JhcGUvc2VydmVyL2dyYXBocWwuZXM2Il0sIm5hbWVzIjpbInByb3BzIiwiaW1hZ2UiLCJjcm9wIiwiZm9ybWF0IiwicXVhbGl0eSIsImdyYXZpdHkiLCJkcHIiLCJ3aWR0aCIsImhlaWdodCIsImxvZ28iLCJmYXZpY29uIiwidHJpbUxlbmd0aCIsInN0ciIsImxlbmd0aCIsInN1YnN0cmluZyIsImdldFByb21pc2UiLCJtZXRhZGF0YSIsInByb3AiLCJpZCIsInVybCIsInV0aWxzIiwidHlwZSIsInRyYW5zZm9ybWF0aW9uIiwiZXJyIiwiZ2V0SW1hZ2VzIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJnZXRSdWxlcyIsIndyYXAiLCJ2YWx1ZSIsInJ1bGUiLCIkIiwiZW5kc1dpdGgiLCJ1bmRlZmluZWQiLCJpbmRleE9mIiwib3JpZ2luIiwiaHJlZiIsInN1YnN0ciIsIndyYXBEZXNjcmlwdGlvbiIsInRyaW0iLCJyZXBsYWNlIiwiUlVMRVMiLCJkZXNjcmlwdGlvbiIsImZpcnN0IiwidGV4dCIsImV4dHJhY3QiLCJhdHRyIiwibmFtZSIsInF1ZXJpZXMiLCJyZXNvbHZlcnMiLCJzY3JhcGUiLCJzb3VyY2UiLCJodG1sIiwiYm9keSIsInNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVE7QUFDWkMsU0FBTztBQUNMQyxVQUFNLE1BREQ7QUFFTEMsWUFBUSxNQUZIO0FBR0xDLGFBQVMsTUFISjtBQUlMQyxhQUFTLE1BSko7QUFLTEMsU0FBSyxDQUxBO0FBTUxDLFdBQU8sR0FORjtBQU9MQyxZQUFRO0FBUEgsR0FESztBQVVaQyxRQUFNO0FBQ0pQLFVBQU0sTUFERjtBQUVKQyxZQUFRLE1BRko7QUFHSkMsYUFBUyxNQUhMO0FBSUpDLGFBQVMsTUFKTDtBQUtKQyxTQUFLLENBTEQ7QUFNSkMsV0FBTyxFQU5IO0FBT0pDLFlBQVE7QUFQSixHQVZNO0FB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LEtBQUs7QUFBQSxhQUNIRyxFQUFFLGVBQUYsRUFDR1ksS0FESCxHQUVHRyxJQUZILENBRVEsS0FGUixDQURHO0FBQUEsS0FBTCxDQURJLEVBTUpsQixLQUFLO0FBQUEsYUFDSEcsRUFBRSxlQUFGLEVBQ0dZLEtBREgsR0FFR0csSUFGSCxDQUVRLEtBRlIsQ0FERztBQUFBLEtBQUwsQ0FOSTtBQTNEUjtBQXdFRCxDQXZHRDs7a0JBd0dlO0FBQUEsU0FBTztBQUNwQkMsVUFBTSxRQURjO0FBRXBCQyxzREFGb0I7QUFLcEJDLGVBQVc7QUFDVEQsZUFBUztBQUNQRTtBQUFBLDhFQUFRLGlCQUFPQyxNQUFQO0FBQUEsZ0JBQWlCakMsR0FBakIsU0FBaUJBLEdBQWpCOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFDdUIsbUJBQUlBLEdBQUosQ0FEdkI7O0FBQUE7QUFBQTtBQUNRa0Msd0JBRFIsU0FDRUMsSUFERjtBQUFBO0FBQUEsMkJBRWlCLDJCQUFZLEVBQUVELFVBQUYsRUFBUWxDLFFBQVIsRUFBWixDQUZqQjs7QUFBQTtBQUVBSCw0QkFGQTtBQUFBLGtFQUlEQSxRQUpDO0FBS0pFLDBCQUFJQztBQUxBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETztBQURBLEtBTFM7QUF3QnBCb0M7QUF4Qm9CLEdBQVA7QUFBQSxDIiwiZmlsZSI6ImNtcy9zY3JhcGUvc2VydmVyL2dyYXBocWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWV0YXNjcmFwZXIgZnJvbSAnbWV0YXNjcmFwZXInO1xuaW1wb3J0IGdvdCBmcm9tICdnb3QnO1xuaW1wb3J0IGNsb3VkaW5hcnkgZnJvbSAnY2xvdWRpbmFyeSc7XG5pbXBvcnQgeyBVUkwgfSBmcm9tICd1cmwnO1xuXG5jb25zdCBwcm9wcyA9IHtcbiAgaW1hZ2U6IHtcbiAgICBjcm9wOiAnZmlsbCcsXG4gICAgZm9ybWF0OiAnYXV0bycsXG4gICAgcXVhbGl0eTogJ2F1dG8nLFxuICAgIGdyYXZpdHk6ICdhdXRvJyxcbiAgICBkcHI6IDIsXG4gICAgd2lkdGg6IDE1MCxcbiAgICBoZWlnaHQ6IDE3NSxcbiAgfSxcbiAgbG9nbzoge1xuICAgIGNyb3A6ICdmaWxsJyxcbiAgICBmb3JtYXQ6ICdhdXRvJyxcbiAgICBxdWFsaXR5OiAnYXV0bycsXG4gICAgZ3Jhdml0eTogJ2F1dG8nLFxuICAgIGRwcjogMixcbiAgICB3aWR0aDogNzUsXG4gICAgaGVpZ2h0OiA3NSxcbiAgfSxcbiAgZmF2aWNvbjoge1xuICAgIGNyb3A6ICdmaWxsJyxcbiAgICBmb3JtYXQ6ICdhdXRvJyxcbiAgICBxdWFsaXR5OiAnYXV0bycsXG4gICAgZ3Jhdml0eTogJ2F1dG8nLFxuICAgIGRwcjogMixcbiAgICB3aWR0aDogMTYsXG4gICAgaGVpZ2h0OiAxNixcbiAgfSxcbn07XG5jb25zdCB0cmltTGVuZ3RoID0gKHN0ciwgbGVuZ3RoKSA9PlxuICBzdHIubGVuZ3RoID4gbGVuZ3RoID8gYCR7c3RyLnN1YnN0cmluZygwLCBsZW5ndGgpfS4uLmAgOiBzdHI7XG5jb25zdCBnZXRQcm9taXNlID0gKG1ldGFkYXRhLCBwcm9wKSA9PiB7XG4gIGlmIChtZXRhZGF0YVtwcm9wXSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogbWV0YWRhdGFbcHJvcF0sXG4gICAgICAgIHVybDogY2xvdWRpbmFyeS51dGlscy51cmwobWV0YWRhdGFbcHJvcF0sIHtcbiAgICAgICAgICB0eXBlOiAnZmV0Y2gnLFxuICAgICAgICAgIHRyYW5zZm9ybWF0aW9uOiBwcm9wc1twcm9wXSxcbiAgICAgICAgfSksXG4gICAgICAgIHdpZHRoOiBwcm9wc1twcm9wXS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwcm9wc1twcm9wXS5oZWlnaHQsXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge31cbiAgfVxufTtcblxuY29uc3QgZ2V0SW1hZ2VzID0gbWV0YWRhdGEgPT5cbiAgUHJvbWlzZS5hbGwoW1xuICAgIGdldFByb21pc2UobWV0YWRhdGEsICdpbWFnZScpLFxuICAgIGdldFByb21pc2UobWV0YWRhdGEsICdsb2dvJyksXG4gIF0pLnRoZW4oKFtpbWFnZSwgbG9nb10pID0+IHtcbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgIG1ldGFkYXRhLmltYWdlID0gaW1hZ2U7XG4gICAgfVxuICAgIGlmIChsb2dvKSB7XG4gICAgICBtZXRhZGF0YS5sb2dvID0gbG9nbztcbiAgICB9XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9KTtcblxuY29uc3QgZ2V0UnVsZXMgPSB1cmwgPT4ge1xuICBjb25zdCB3cmFwID0gcnVsZSA9PiAkID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHJ1bGUoJCk7XG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5lbmRzV2l0aCgnLnN2ZycpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodmFsdWUuaW5kZXhPZignaHR0cCcpID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5pbmRleE9mKCcvLycpID09PSAwKSB7XG4gICAgICByZXR1cm4gYGh0dHBzOiR7dmFsdWV9YDtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmluZGV4T2YoJy8nKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGAke3VybC5vcmlnaW59JHt2YWx1ZX1gO1xuICAgIH1cbiAgICBpZiAodmFsdWUuaW5kZXhPZignLi8nKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGAke3VybC5ocmVmfSR7dmFsdWUuc3Vic3RyKDEpfWA7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgZnVuY3Rpb24gd3JhcERlc2NyaXB0aW9uKHJ1bGUpIHtcbiAgICByZXR1cm4gJCA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBydWxlKCQpO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eW0EtWlxcc10rXFxzK1st4oCU4oCTXVxccysvLCAnJyk7XG4gICAgICByZXR1cm4gdHJpbUxlbmd0aCh2YWx1ZSwgMTYwKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgLi4uTWV0YXNjcmFwZXIuUlVMRVMsXG4gICAgdXJsOiAoKSA9PiB1cmwuaHJlZixcbiAgICBvcmlnaW46ICgpID0+IHVybC5vcmlnaW4sXG4gICAgZGVzY3JpcHRpb246IFtcbiAgICAgIC4uLk1ldGFzY3JhcGVyLlJVTEVTLmRlc2NyaXB0aW9uLFxuICAgICAgd3JhcERlc2NyaXB0aW9uKCQgPT5cbiAgICAgICAgJCgncCcpXG4gICAgICAgICAgLmZpcnN0KClcbiAgICAgICAgICAudGV4dCgpLFxuICAgICAgKSxcbiAgICBdLFxuICAgIGZhdmljb246ICgpID0+ICh7XG4gICAgICB1cmw6IGBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL2ZldGNoLyR7dXJsLm9yaWdpbn0vZmF2aWNvbi5pY29gLFxuICAgICAgd2lkdGg6IDMyLFxuICAgICAgaGVpZ2h0OiAzMixcbiAgICB9KSxcbiAgICBleHRyYWN0OiAkID0+XG4gICAgICAkKCdwJylcbiAgICAgICAgLmZpcnN0KClcbiAgICAgICAgLnRleHQoKSxcbiAgICBpbWFnZTogW1xuICAgICAgd3JhcChcbiAgICAgICAgJCA9PlxuICAgICAgICAgIHVybC5vcmlnaW4uaW5kZXhPZignd2lraXBlZGlhLm9yZycpICE9PSAtMVxuICAgICAgICAgICAgPyAnaHR0cHM6Ly9kZS53aWtpcGVkaWEub3JnL3N0YXRpYy9pbWFnZXMvcHJvamVjdC1sb2dvcy9kZXdpa2ktMngucG5nJ1xuICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICApLFxuICAgICAgd3JhcCgkID0+ICQoJ21ldGFbcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCJdJykuYXR0cignY29udGVudCcpKSxcbiAgICAgIHdyYXAoJCA9PiAkKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2U6dXJsXCJdJykuYXR0cignY29udGVudCcpKSxcbiAgICAgIHdyYXAoJCA9PiAkKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKS5hdHRyKCdjb250ZW50JykpLFxuICAgICAgd3JhcCgkID0+ICQoJ21ldGFbbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIl0nKS5hdHRyKCdjb250ZW50JykpLFxuICAgICAgd3JhcCgkID0+ICQoJ21ldGFbcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCJdJykuYXR0cignY29udGVudCcpKSxcbiAgICAgIHdyYXAoJCA9PiAkKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmltYWdlOnNyY1wiXScpLmF0dHIoJ2NvbnRlbnQnKSksXG4gICAgICB3cmFwKCQgPT4gJCgnbWV0YVtwcm9wZXJ0eT1cInR3aXR0ZXI6aW1hZ2U6c3JjXCJdJykuYXR0cignY29udGVudCcpKSxcbiAgICAgIHdyYXAoJCA9PiAkKCdtZXRhW25hbWU9XCJzYWlsdGhydS5pbWFnZVwiXScpLmF0dHIoJ2NvbnRlbnQnKSksXG4gICAgICB3cmFwKCQgPT4gJCgnbWV0YVtuYW1lPVwic2FpbHRocnUuaW1hZ2UuZnVsbFwiXScpLmF0dHIoJ2NvbnRlbnQnKSksXG4gICAgICB3cmFwKCQgPT4gJCgnbWV0YVtuYW1lPVwic2FpbHRocnUuaW1hZ2UudGh1bWJcIl0nKS5hdHRyKCdjb250ZW50JykpLFxuICAgICAgd3JhcCgkID0+XG4gICAgICAgICQoJ2FydGljbGUgaW1nW3NyY10nKVxuICAgICAgICAgIC5maXJzdCgpXG4gICAgICAgICAgLmF0dHIoJ3NyYycpLFxuICAgICAgKSxcbiAgICAgIHdyYXAoJCA9PlxuICAgICAgICAkKCcjY29udGVudCBpbWdbc3JjXScpXG4gICAgICAgICAgLmZpcnN0KClcbiAgICAgICAgICAuYXR0cignc3JjJyksXG4gICAgICApLFxuICAgICAgd3JhcCgkID0+XG4gICAgICAgICQoJ1tjbGFzcyo9XCJhcnRpY2xlXCJdIGltZ1tzcmNdJylcbiAgICAgICAgICAuZmlyc3QoKVxuICAgICAgICAgIC5hdHRyKCdzcmMnKSxcbiAgICAgICksXG4gICAgICB3cmFwKCQgPT5cbiAgICAgICAgJCgnaW1nW3NyY10nKVxuICAgICAgICAgIC5maXJzdCgpXG4gICAgICAgICAgLmF0dHIoJ3NyYycpLFxuICAgICAgKSxcbiAgICBdLFxuICAgIGxvZ286IFtcbiAgICAgIHdyYXAoJCA9PlxuICAgICAgICAkKCdpbWcjbG9nb1tzcmNdJylcbiAgICAgICAgICAuZmlyc3QoKVxuICAgICAgICAgIC5hdHRyKCdzcmMnKSxcbiAgICAgICksXG4gICAgICB3cmFwKCQgPT5cbiAgICAgICAgJCgnaW1nLmxvZ29bc3JjXScpXG4gICAgICAgICAgLmZpcnN0KClcbiAgICAgICAgICAuYXR0cignc3JjJyksXG4gICAgICApLFxuICAgIF0sXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcbiAgbmFtZTogJ3NjcmFwZScsXG4gIHF1ZXJpZXM6IGBcbiAgICAgIHNjcmFwZSh1cmw6IFN0cmluZyk6IE1ldGFcbiAgICBgLFxuICByZXNvbHZlcnM6IHtcbiAgICBxdWVyaWVzOiB7XG4gICAgICBzY3JhcGU6IGFzeW5jIChzb3VyY2UsIHsgdXJsIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBib2R5OiBodG1sIH0gPSBhd2FpdCBnb3QodXJsKTtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCBNZXRhc2NyYXBlcih7IGh0bWwsIHVybCB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5tZXRhZGF0YSxcbiAgICAgICAgICBpZDogdXJsLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTWV0YXNjcmFwZXIuc2NyYXBlVXJsKHVybCwgZ2V0UnVsZXMobmV3IFVSTCh1cmwpKSlcbiAgICAgICAgICAudGhlbihnZXRJbWFnZXMpXG4gICAgICAgICAgLnRoZW4obWV0YWRhdGEgPT4gKHtcbiAgICAgICAgICAgIC4uLm1ldGFkYXRhLFxuICAgICAgICAgICAgaWQ6IHVybCxcbiAgICAgICAgICB9KSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4gKHt9KSlcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBzY2hlbWE6IGBcbiAgICB0eXBlIE1ldGEge1xuICAgICAgaWQ6IFN0cmluZ1xuICAgICAgb3JpZ2luOiBTdHJpbmdcbiAgICAgIGF1dGhvcjogU3RyaW5nXG4gICAgICBleHRyYWN0OiBTdHJpbmdcbiAgICAgIGRhdGU6IERhdGVUaW1lXG4gICAgICBkZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgICBmYXZpY29uOiBJbWFnZVxuICAgICAgaW1hZ2U6IEltYWdlXG4gICAgICBsb2dvOiBJbWFnZVxuICAgICAgcHVibGlzaGVyOiBTdHJpbmdcbiAgICAgIHRpdGxlOiBTdHJpbmdcbiAgICAgIHVybDogU3RyaW5nXG4gICAgfVxuICBgLFxufSk7XG4iXX0=
