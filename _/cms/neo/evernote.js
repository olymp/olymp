'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _evernote = require('evernote');

var _evernote2 = _interopRequireDefault(_evernote);

var _himalaya = require('himalaya');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var is = function is(line, size) {
  return line.attributes && line.attributes.find(function (x) {
    return x.key === 'style' && x.value && x.indexOf(size) !== -1;
  }).length > 0;
};

exports.default = function (_ref) {
  var token = _ref.token,
      sandbox = _ref.sandbox,
      upload = _ref.upload;
  return function (app) {
    var client = new _evernote2.default.Client({
      token: token,
      sandbox: sandbox,
      china: false
    });
    var store = client.getNoteStore();

    var handleFile = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
        var tags, resources, handleLine, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all((file.tagGuids || []).map(function (x) {
                  return store.getTag(x);
                }));

              case 2:
                tags = _context.sent;
                _context.next = 5;
                return Promise.all((file.resources || []).map(function (x) {
                  return upload(x.data.body, {
                    name: x.guid,
                    publicId: x.data.bodyHash.toString('hex'),
                    tags: ['cms', file.guid, app]
                  });
                }));

              case 5:
                _context.t0 = function (current, resource) {
                  return _extends({}, current, _defineProperty({}, resource.id, resource));
                };

                _context.t1 = {};
                resources = _context.sent.reduce(_context.t0, _context.t1);

                handleLine = function handleLine(line) {
                  if (line.tagName === 'div') {
                    console.log(line.children);
                    if (line.children.length === 0) {
                      return null;
                    }
                    return {
                      type: 'div',
                      kind: 'block',
                      nodes: line.children.map(handleLine).filter(function (x) {
                        return x;
                      })
                    };
                  } else if (line.tagName === 'en-media') {
                    return {
                      type: 'img',
                      kind: 'block',
                      data: resources[line.attributes.find(function (x) {
                        return x.key === 'hash';
                      }).value],
                      nodes: []
                    };
                  } else if (line.tagName === 'ul') {
                    return {
                      type: 'ul',
                      kind: 'block',
                      nodes: line.children.map(handleLine).filter(function (x) {
                        return x;
                      })
                    };
                  } else if (line.tagName === 'li') {
                    return {
                      type: 'li',
                      kind: 'block',
                      nodes: line.children.map(handleLine).filter(function (x) {
                        return x;
                      })
                    };
                  } else if (line.tagName === 'a') {
                    return {
                      type: 'a',
                      kind: 'block',
                      nodes: line.children.map(handleLine).filter(function (x) {
                        return x;
                      })
                    };
                  } else if (line.tagName === 'br') {
                    return null;
                  } else if (line.type === 'text' && (is('8px') || is('10px') || is('12px'))) {
                    return {
                      type: 'small',
                      kind: 'block',
                      nodes: [{
                        kind: 'text',
                        leaves: [{
                          kind: 'leaf',
                          text: line.content
                        }]
                      }]
                    };
                  } else if (line.type === 'text' && (is('18px') || is('24px') || is('36px'))) {
                    return {
                      type: 'h' + (is('18px') ? 3 : is('24px') ? 2 : 1),
                      kind: 'block',
                      nodes: [{
                        kind: 'text',
                        leaves: [{
                          kind: 'leaf',
                          text: line.content
                        }]
                      }]
                    };
                  } else if (line.type === 'text') {
                    return {
                      kind: 'text',
                      leaves: [{
                        kind: 'leaf',
                        text: line.content
                      }]
                    };
                  }
                  return null;
                };

                result = {
                  rootId: file.guid,
                  src: file.content,
                  name: file.title,
                  createdAt: new Date(file.created),
                  updatedAt: new Date(file.updated),
                  nodes: ((0, _himalaya.parse)(file.content)[1].children || []).map(handleLine).filter(function (x) {
                    return x;
                  }),
                  tags: (tags || []).map(function (x) {
                    return x.name;
                  })
                };


                console.log(result.name);
                console.log(JSON.stringify(result.nodes, null, 2));
                /* if (
                  result.text.trim().indexOf('--') === 0 &&
                  result.text.split('--').length > 1
                ) {
                  const fm = result.text.split('--')[1];
                  const data = yaml.load(fm);
                  result.data = data;
                  result.text = result.text.substr(fm.length + 4).trim();
                } */
                return _context.abrupt('return', result);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function handleFile(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    var getNodes = function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var result, ids;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return store.findNotesMetadata({
                  words: 'tag:' + app
                }, 0, 100, {
                  includeTitle: true
                });

              case 2:
                result = _context2.sent;
                ids = result.notes.map(function (x) {
                  return x.guid;
                });
                return _context2.abrupt('return', Promise.all(ids.map(function (x) {
                  return store.getNote(x, true, true, false, false).then(handleFile);
                })));

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function getNodes() {
        return _ref3.apply(this, arguments);
      };
    }();

    return getNodes();
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9uZW8vZXZlcm5vdGUuZXM2Il0sIm5hbWVzIjpbImlzIiwibGluZSIsInNpemUiLCJhdHRyaWJ1dGVzIiwiZmluZCIsIngiLCJrZXkiLCJ2YWx1ZSIsImluZGV4T2YiLCJsZW5ndGgiLCJ0b2tlbiIsInNhbmRib3giLCJ1cGxvYWQiLCJjbGllbnQiLCJDbGllbnQiLCJjaGluYSIsInN0b3JlIiwiZ2V0Tm90ZVN0b3JlIiwiaGFuZGxlRmlsZSIsImZpbGUiLCJQcm9taXNlIiwiYWxsIiwidGFnR3VpZHMiLCJtYXAiLCJnZXRUYWciLCJ0YWdzIiwicmVzb3VyY2VzIiwiZGF0YSIsImJvZHkiLCJuYW1lIiwiZ3VpZCIsInB1YmxpY0lkIiwiYm9keUhhc2giLCJ0b1N0cmluZyIsImFwcCIsImN1cnJlbnQiLCJyZXNvdXJjZSIsImlkIiwicmVkdWNlIiwiaGFuZGxlTGluZSIsInRhZ05hbWUiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iLCJ0eXBlIiwia2luZCIsIm5vZGVzIiwiZmlsdGVyIiwibGVhdmVzIiwidGV4dCIsImNvbnRlbnQiLCJyZXN1bHQiLCJyb290SWQiLCJzcmMiLCJ0aXRsZSIsImNyZWF0ZWRBdCIsIkRhdGUiLCJjcmVhdGVkIiwidXBkYXRlZEF0IiwidXBkYXRlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXROb2RlcyIsImZpbmROb3Rlc01ldGFkYXRhIiwid29yZHMiLCJpbmNsdWRlVGl0bGUiLCJpZHMiLCJub3RlcyIsImdldE5vdGUiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxTQUFMQSxFQUFLLENBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLFNBQ1RELEtBQUtFLFVBQUwsSUFDQUYsS0FBS0UsVUFBTCxDQUFnQkMsSUFBaEIsQ0FDRTtBQUFBLFdBQUtDLEVBQUVDLEdBQUYsS0FBVSxPQUFWLElBQXFCRCxFQUFFRSxLQUF2QixJQUFnQ0YsRUFBRUcsT0FB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R0FBUixDQUFZa0IsS0FBS0MsU0FBTCxDQUFlVixPQUFPTCxLQUF0QixFQUE2QixJQUE3QixFQUFtQyxDQUFuQyxDQUFaO0FBQ0E7Ozs7Ozs7OztBQTVIaUIsaURBcUlWSyxNQXJJVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU47O0FBd0lBLFFBQU1XO0FBQUEsMEVBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDTTlDLE1BQU0rQyxpQkFBTixDQUNuQjtBQUNFQyxrQ0FBYzlCO0FBRGhCLGlCQURtQixFQUluQixDQUptQixFQUtuQixHQUxtQixFQU1uQjtBQUNFK0IsZ0NBQWM7QUFEaEIsaUJBTm1CLENBRE47O0FBQUE7QUFDVGQsc0JBRFM7QUFXVGUsbUJBWFMsR0FXSGYsT0FBT2dCLEtBQVAsQ0FBYTVDLEdBQWIsQ0FBaUI7QUFBQSx5QkFBS2xCLEVBQUV5QixJQUFQO0FBQUEsaUJBQWpCLENBWEc7QUFBQSxrREFZUlYsUUFBUUMsR0FBUixDQUNMNkMsSUFBSTNDLEdBQUosQ0FBUTtBQUFBLHlCQUFLUCxNQUFNb0QsT0FBTixDQUFjL0QsQ0FBZCxFQUFpQixJQUFqQixFQUF1QixJQUF2QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQ2dFLElBQTNDLENBQWdEbkQsVUFBaEQsQ0FBTDtBQUFBLGlCQUFSLENBREssQ0FaUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFYOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU47O0FBaUJBLFdBQU80QyxVQUFQO0FBQ0QsR0FsS2M7QUFBQSxDIiwiZmlsZSI6ImNtcy9uZW8vZXZlcm5vdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlcm5vdGUgZnJvbSAnZXZlcm5vdGUnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdoaW1hbGF5YSc7XG5cbmNvbnN0IGlzID0gKGxpbmUsIHNpemUpID0+XG4gIGxpbmUuYXR0cmlidXRlcyAmJlxuICBsaW5lLmF0dHJpYnV0ZXMuZmluZChcbiAgICB4ID0+IHgua2V5ID09PSAnc3R5bGUnICYmIHgudmFsdWUgJiYgeC5pbmRleE9mKHNpemUpICE9PSAtMVxuICApLmxlbmd0aCA+IDA7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRva2VuLCBzYW5kYm94LCB1cGxvYWQgfSkgPT4gYXBwID0+IHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IEV2ZXJub3RlLkNsaWVudCh7XG4gICAgdG9rZW4sXG4gICAgc2FuZGJveCxcbiAgICBjaGluYTogZmFsc2VcbiAgfSk7XG4gIGNvbnN0IHN0b3JlID0gY2xpZW50LmdldE5vdGVTdG9yZSgpO1xuXG4gIGNvbnN0IGhhbmRsZUZpbGUgPSBhc3luYyBmaWxlID0+IHtcbiAgICBjb25zdCB0YWdzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAoZmlsZS50YWdHdWlkcyB8fCBbXSkubWFwKHggPT4gc3RvcmUuZ2V0VGFnKHgpKVxuICAgICk7XG4gICAgY29uc3QgcmVzb3VyY2VzID0gKGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgKGZpbGUucmVzb3VyY2VzIHx8IFtdKS5tYXAoeCA9PlxuICAgICAgICB1cGxvYWQoeC5kYXRhLmJvZHksIHtcbiAgICAgICAgICBuYW1lOiB4Lmd1aWQsXG4gICAgICAgICAgcHVibGljSWQ6IHguZGF0YS5ib2R5SGFzaC50b1N0cmluZygnaGV4JyksXG4gICAgICAgICAgdGFnczogWydjbXMnLCBmaWxlLmd1aWQsIGFwcF1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApKS5yZWR1Y2UoXG4gICAgICAoY3VycmVudCwgcmVzb3VyY2UpID0+ICh7XG4gICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgIFtyZXNvdXJjZS5pZF06IHJlc291cmNlXG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcblxuICAgIGNvbnN0IGhhbmRsZUxpbmUgPSBsaW5lID0+IHtcbiAgICAgIGlmIChsaW5lLnRhZ05hbWUgPT09ICdkaXYnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpbmUuY2hpbGRyZW4pO1xuICAgICAgICBpZiAobGluZS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgbm9kZXM6IGxpbmUuY2hpbGRyZW4ubWFwKGhhbmRsZUxpbmUpLmZpbHRlcih4ID0+IHgpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGxpbmUudGFnTmFtZSA9PT0gJ2VuLW1lZGlhJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6ICdpbWcnLFxuICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgZGF0YTogcmVzb3VyY2VzW2xpbmUuYXR0cmlidXRlcy5maW5kKHggPT4geC5rZXkgPT09ICdoYXNoJykudmFsdWVdLFxuICAgICAgICAgIG5vZGVzOiBbXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChsaW5lLnRhZ05hbWUgPT09ICd1bCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiAndWwnLFxuICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgbm9kZXM6IGxpbmUuY2hpbGRyZW4ubWFwKGhhbmRsZUxpbmUpLmZpbHRlcih4ID0+IHgpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGxpbmUudGFnTmFtZSA9PT0gJ2xpJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6ICdsaScsXG4gICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICBub2RlczogbGluZS5jaGlsZHJlbi5tYXAoaGFuZGxlTGluZSkuZmlsdGVyKHggPT4geClcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS50YWdOYW1lID09PSAnYScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiAnYScsXG4gICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICBub2RlczogbGluZS5jaGlsZHJlbi5tYXAoaGFuZGxlTGluZSkuZmlsdGVyKHggPT4geClcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS50YWdOYW1lID09PSAnYnInKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgbGluZS50eXBlID09PSAndGV4dCcgJiZcbiAgICAgICAgKGlzKCc4cHgnKSB8fCBpcygnMTBweCcpIHx8IGlzKCcxMnB4JykpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiAnc21hbGwnLFxuICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgbm9kZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2luZDogJ3RleHQnLFxuICAgICAgICAgICAgICBsZWF2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBraW5kOiAnbGVhZicsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBsaW5lLmNvbnRlbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBsaW5lLnR5cGUgPT09ICd0ZXh0JyAmJlxuICAgICAgICAoaXMoJzE4cHgnKSB8fCBpcygnMjRweCcpIHx8IGlzKCczNnB4JykpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBgaCR7aXMoJzE4cHgnKSA/IDMgOiBpcygnMjRweCcpID8gMiA6IDF9YCxcbiAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtpbmQ6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgbGVhdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2luZDogJ2xlYWYnLFxuICAgICAgICAgICAgICAgICAgdGV4dDogbGluZS5jb250ZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChsaW5lLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6ICd0ZXh0JyxcbiAgICAgICAgICBsZWF2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2luZDogJ2xlYWYnLFxuICAgICAgICAgICAgICB0ZXh0OiBsaW5lLmNvbnRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgcm9vdElkOiBmaWxlLmd1aWQsXG4gICAgICBzcmM6IGZpbGUuY29udGVudCxcbiAgICAgIG5hbWU6IGZpbGUudGl0bGUsXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKGZpbGUuY3JlYXRlZCksXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKGZpbGUudXBkYXRlZCksXG4gICAgICBub2RlczogKHBhcnNlKGZpbGUuY29udGVudClbMV0uY2hpbGRyZW4gfHwgW10pXG4gICAgICAgIC5tYXAoaGFuZGxlTGluZSlcbiAgICAgICAgLmZpbHRlcih4ID0+IHgpLFxuICAgICAgdGFnczogKHRhZ3MgfHwgW10pLm1hcCh4ID0+IHgubmFtZSlcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2cocmVzdWx0Lm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5ub2RlcywgbnVsbCwgMikpO1xuICAgIC8qIGlmIChcbiAgICAgIHJlc3VsdC50ZXh0LnRyaW0oKS5pbmRleE9mKCctLScpID09PSAwICYmXG4gICAgICByZXN1bHQudGV4dC5zcGxpdCgnLS0nKS5sZW5ndGggPiAxXG4gICAgKSB7XG4gICAgICBjb25zdCBmbSA9IHJlc3VsdC50ZXh0LnNwbGl0KCctLScpWzFdO1xuICAgICAgY29uc3QgZGF0YSA9IHlhbWwubG9hZChmbSk7XG4gICAgICByZXN1bHQuZGF0YSA9IGRhdGE7XG4gICAgICByZXN1bHQudGV4dCA9IHJlc3VsdC50ZXh0LnN1YnN0cihmbS5sZW5ndGggKyA0KS50cmltKCk7XG4gICAgfSAqL1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0Tm9kZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmUuZmluZE5vdGVzTWV0YWRhdGEoXG4gICAgICB7XG4gICAgICAgIHdvcmRzOiBgdGFnOiR7YXBwfWBcbiAgICAgIH0sXG4gICAgICAwLFxuICAgICAgMTAwLFxuICAgICAge1xuICAgICAgICBpbmNsdWRlVGl0bGU6IHRydWVcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGlkcyA9IHJlc3VsdC5ub3Rlcy5tYXAoeCA9PiB4Lmd1aWQpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgIGlkcy5tYXAoeCA9PiBzdG9yZS5nZXROb3RlKHgsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSkudGhlbihoYW5kbGVGaWxlKSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBnZXROb2RlcygpO1xufTtcbiJdfQ==
