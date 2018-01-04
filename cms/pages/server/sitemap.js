'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _orderBy2 = require('lodash/orderBy');

var _orderBy3 = _interopRequireDefault(_orderBy2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _query = require('olymp-pages/gql/query');

var _unflatten = require('olymp-utils/unflatten');

var _unflatten2 = _interopRequireDefault(_unflatten);

var _prerender = require('olymp/node/prerender');

var _prerender2 = _interopRequireDefault(_prerender);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('dotenv').config();

var _require = require('apollo-cache-inmemory'),
    InMemoryCache = _require.InMemoryCache;

var _require2 = require('apollo-link-http'),
    HttpLink = _require2.HttpLink;

var _require3 = require('apollo-client'),
    ApolloClient = _require3.ApolloClient;

var fetch = require('isomorphic-fetch');

global.fetch = fetch;

var cache = new InMemoryCache({
  dataIdFromObject: function dataIdFromObject(o) {
    return o.id;
  },
  addTypename: true
});

var client = new ApolloClient({
  cache: cache,
  link: new HttpLink({ uri: 'http://localhost:3005/graphql' })
});

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
    var navBindingObj, _ref2, data, flatNavigation;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            navBindingObj = {};
            _context.next = 3;
            return client.query({
              query: _query.pageList,
              variables: {}
            });

          case 3:
            _ref2 = _context.sent;
            data = _ref2.data;
            flatNavigation = [];

            (0, _unflatten2.default)(data.pageList, {
              pathProp: 'pathname',
              sort: function sort(children, parent) {
                var newChildren = children.reduce(function (state, child) {
                  var data = navBindingObj && navBindingObj[child.id];
                  if (data) {
                    (data.items || []).forEach(function (item) {
                      var slug = child.slug ? interpolate(child.slug, item) : item.slug;
                      state.push(_extends({}, child, {
                        pageId: child.id,
                        bindingId: item.id,
                        bindingObj: item,
                        slug: slug,
                        name: item.name,
                        id: child.id + '--' + item.id
                      }));
                    });
                  } else {
                    state.push(child);
                  }
                  return state;
                }, []);
                return (0, _orderBy3.default)(newChildren, ['order'], ['asc']);
              },
              setPath: function setPath(current, _ref3) {
                var slug = _ref3.slug,
                    rest = _objectWithoutProperties(_ref3, ['slug']);

                var pathname = ('' + (current || '') + (slug || '')).replace('//', '/');
                flatNavigation.push(_extends({}, rest, { slug: slug, pathname: pathname }));
                return pathname;
              }
            });

            (0, _prerender2.default)(__dirname, flatNavigation.map(function (x) {
              return x.pathname;
            }), _extends({}, args));
            (0, _prerender2.default)(_path2.default.resolve(__dirname, 'amp'), flatNavigation.map(function (x) {
              return x.pathname;
            }), _extends({}, args, { isAmp: true }));

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9zZXJ2ZXIvc2l0ZW1hcC5lczYiXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsIkluTWVtb3J5Q2FjaGUiLCJIdHRwTGluayIsIkFwb2xsb0NsaWVudCIsImZldGNoIiwiZ2xvYmFsIiwiY2FjaGUiLCJkYXRhSWRGcm9tT2JqZWN0IiwibyIsImlkIiwiYWRkVHlwZW5hbWUiLCJjbGllbnQiLCJsaW5rIiwidXJpIiwiYXJncyIsIm5hdkJpbmRpbmdPYmoiLCJxdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJmbGF0TmF2aWdhdGlvbiIsInBhZ2VMaXN0IiwicGF0aFByb3AiLCJzb3J0IiwiY2hpbGRyZW4iLCJwYXJlbnQiLCJuZXdDaGlsZHJlbiIsInJlZHVjZSIsInN0YXRlIiwiY2hpbGQiLCJpdGVtcyIsImZvckVhY2giLCJzbHVnIiwiaW50ZXJwb2xhdGUiLCJpdGVtIiwicHVzaCIsInBhZ2VJZCIsImJpbmRpbmdJZCIsImJpbmRpbmdPYmoiLCJuYW1lIiwic2V0UGF0aCIsImN1cnJlbnQiLCJyZXN0IiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiX19kaXJuYW1lIiwibWFwIiwieCIsInJlc29sdmUiLCJpc0FtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUFBLFFBQVEsUUFBUixFQUFrQkMsTUFBbEI7O2VBQzBCRCxRQUFRLHVCQUFSLEM7SUFBbEJFLGEsWUFBQUEsYTs7Z0JBQ2FGLFFBQVEsa0JBQVIsQztJQUFiRyxRLGFBQUFBLFE7O2dCQUNpQkgsUUFBUSxlQUFSLEM7SUFBakJJLFksYUFBQUEsWTs7QUFDUixJQUFNQyxRQUFRTCxRQUFRLGtCQUFSLENBQWQ7O0FBRUFNLE9BQU9ELEtBQVAsR0FBZUEsS0FBZjs7QUFFQSxJQUFNRSxRQUFRLElBQUlMLGFBQUosQ0FBa0I7QUFDOUJNLG9CQUFrQjtBQUFBLFdBQUtDLEVBQUVDLEVBQVA7QUFBQSxHQURZO0FBRTlCQyxlQUFhO0FBRmlCLENBQWxCLENBQWQ7O0FBS0EsSUFBTUMsU0FBUyxJQUFJUixZQUFKLENBQWlCO0FBQzlCRyxjQUQ4QjtBQUU5Qk0sUUFBTSxJQUFJVixRQUFKLENBQWEsRUFBRVcsS0FBSywrQkFBUCxFQUFiO0FBRndCLENBQWpCLENBQWY7OztxRUFLZSxpQkFBT0MsSUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BDLHlCQURPLEdBQ1MsRUFEVDtBQUFBO0FBQUEsbUJBRVVKLE9BQU9LLEtBQVAsQ0FBYTtBQUNsQ0Esb0NBRGtDO0FBRWxDQyx5QkFBVztBQUZ1QixhQUFiLENBRlY7O0FBQUE7QUFBQTtBQUVMQyxnQkFGSyxTQUVMQSxJQUZLO0FBT1BDLDBCQVBPLEdBT1UsRUFQVjs7QUFRYixxQ0FBVUQsS0FBS0UsUUFBZixFQUF5QjtBQUN2QkMsd0JBQVUsVUFEYTtBQUV2QkMsb0JBQU0sY0FBQ0MsUUFBRCxFQUFXQyxNQUFYLEVBQXNCO0FBQzFCLG9CQUFNQyxjQUFjRixTQUFTRyxNQUFULENBQWdCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNwRCxzQkFBTVYsT0FBT0gsaUJBQWlCQSxjQUFjYSxNQUFNbkIsRUFBcEIsQ0FBOUI7QUFDQSxzQkFBSVMsSUFBSixFQUFVO0FBQ1IscUJBQUNBLEtBQUtXLEtBQUwsSUFBYyxFQUFmLEVBQW1CQyxPQUFuQixDQUEyQixnQkFBUTtBQUNqQywwQkFBTUMsT0FBT0gsTUFBTUcsSUFBTixHQUNUQyxZQUFZSixNQUFNRyxJQUFsQixFQUF3QkUsSUFBeEIsQ0FEUyxHQUVUQSxLQUFLRixJQUZUO0FBR0FKLDRCQUFNTyxJQUFOLGNBQ0tOLEtBREw7QUFFRU8sZ0NBQVFQLE1BQU1uQixFQUZoQjtBQUdFMkIsbUNBQVdILEtBQUt4QixFQUhsQjtBQUlFNEIsb0NBQVlKLElBSmQ7QUFLRUYsa0NBTEY7QUFNRU8sOEJBQU1MLEtBQUtLLElBTmI7QUFPRTdCLDRCQUFPbUIsTUFBTW5CLEVBQWIsVUFBb0J3QixLQUFLeEI7QUFQM0I7QUFTRCxxQkFiRDtBQWNELG1CQWZELE1BZU87QUFDTGtCLDBCQUFNTyxJQUFOLENBQVdOLEtBQVg7QUFDRDtBQUNELHlCQUFPRCxLQUFQO0FBQ0QsaUJBckJtQixFQXFCakIsRUFyQmlCLENBQXBCO0FBc0JBLHVCQUFPLHVCQUFRRixXQUFSLEVBQXFCLENBQUMsT0FBRCxDQUFyQixFQUFnQyxDQUFDLEtBQUQsQ0FBaEMsQ0FBUDtBQUNELGVBMUJzQjtBQTJCdkJjLHVCQUFTLGlCQUFDQyxPQUFELFNBQWdDO0FBQUEsb0JBQXBCVCxJQUFvQixTQUFwQkEsSUFBb0I7QUFBQSxvQkFBWFUsSUFBVzs7QUFDdkMsb0JBQU1DLFdBQVcsT0FBR0YsV0FBVyxFQUFkLEtBQW1CVCxRQUFRLEVBQTNCLEdBQWdDWSxPQUFoQyxDQUF3QyxJQUF4QyxFQUE4QyxHQUE5QyxDQUFqQjtBQUNBeEIsK0JBQWVlLElBQWYsY0FBeUJPLElBQXpCLElBQStCVixVQUEvQixFQUFxQ1csa0JBQXJDO0FBQ0EsdUJBQU9BLFFBQVA7QUFDRDtBQS9Cc0IsYUFBekI7O0FBa0NBLHFDQUFVRSxTQUFWLEVBQXFCekIsZUFBZTBCLEdBQWYsQ0FBbUI7QUFBQSxxQkFBS0MsRUFBRUosUUFBUDtBQUFBLGFBQW5CLENBQXJCLGVBQThENUIsSUFBOUQ7QUFDQSxxQ0FBVSxlQUFLaUMsT0FBTCxDQUFhSCxTQUFiLEVBQXdCLEtBQXhCLENBQVYsRUFBMEN6QixlQUFlMEIsR0FBZixDQUFtQjtBQUFBLHFCQUFLQyxFQUFFSixRQUFQO0FBQUEsYUFBbkIsQ0FBMUMsZUFBbUY1QixJQUFuRixJQUF5RmtDLE9BQU8sSUFBaEc7O0FBM0NhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoiY21zL3BhZ2VzL3NlcnZlci9zaXRlbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3JkZXJCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBwYWdlTGlzdCB9IGZyb20gJ29seW1wLXBhZ2VzL2dxbC9xdWVyeSc7XG5pbXBvcnQgdW5mbGF0dGVuIGZyb20gJ29seW1wLXV0aWxzL3VuZmxhdHRlbic7XG5pbXBvcnQgcHJlcmVuZGVyIGZyb20gJ29seW1wL25vZGUvcHJlcmVuZGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcbmNvbnN0IHsgSW5NZW1vcnlDYWNoZSB9ID0gcmVxdWlyZSgnYXBvbGxvLWNhY2hlLWlubWVtb3J5Jyk7XG5jb25zdCB7IEh0dHBMaW5rIH0gPSByZXF1aXJlKCdhcG9sbG8tbGluay1odHRwJyk7XG5jb25zdCB7IEFwb2xsb0NsaWVudCB9ID0gcmVxdWlyZSgnYXBvbGxvLWNsaWVudCcpO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdpc29tb3JwaGljLWZldGNoJyk7XG5cbmdsb2JhbC5mZXRjaCA9IGZldGNoO1xuXG5jb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgZGF0YUlkRnJvbU9iamVjdDogbyA9PiBvLmlkLFxuICBhZGRUeXBlbmFtZTogdHJ1ZSxcbn0pO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgY2FjaGUsXG4gIGxpbms6IG5ldyBIdHRwTGluayh7IHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9ncmFwaHFsJyB9KSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoYXJncykgPT4ge1xuICBjb25zdCBuYXZCaW5kaW5nT2JqID0ge307XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogcGFnZUxpc3QsXG4gICAgdmFyaWFibGVzOiB7IH0sXG4gIH0pO1xuXG4gIGNvbnN0IGZsYXROYXZpZ2F0aW9uID0gW107XG4gIHVuZmxhdHRlbihkYXRhLnBhZ2VMaXN0LCB7XG4gICAgcGF0aFByb3A6ICdwYXRobmFtZScsXG4gICAgc29ydDogKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NoaWxkcmVuID0gY2hpbGRyZW4ucmVkdWNlKChzdGF0ZSwgY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5hdkJpbmRpbmdPYmogJiYgbmF2QmluZGluZ09ialtjaGlsZC5pZF07XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgKGRhdGEuaXRlbXMgfHwgW10pLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzbHVnID0gY2hpbGQuc2x1Z1xuICAgICAgICAgICAgICA/IGludGVycG9sYXRlKGNoaWxkLnNsdWcsIGl0ZW0pXG4gICAgICAgICAgICAgIDogaXRlbS5zbHVnO1xuICAgICAgICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIC4uLmNoaWxkLFxuICAgICAgICAgICAgICBwYWdlSWQ6IGNoaWxkLmlkLFxuICAgICAgICAgICAgICBiaW5kaW5nSWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgIGJpbmRpbmdPYmo6IGl0ZW0sXG4gICAgICAgICAgICAgIHNsdWcsXG4gICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgaWQ6IGAke2NoaWxkLmlkfS0tJHtpdGVtLmlkfWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZS5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9LCBbXSk7XG4gICAgICByZXR1cm4gb3JkZXJCeShuZXdDaGlsZHJlbiwgWydvcmRlciddLCBbJ2FzYyddKTtcbiAgICB9LFxuICAgIHNldFBhdGg6IChjdXJyZW50LCB7IHNsdWcsIC4uLnJlc3QgfSkgPT4ge1xuICAgICAgY29uc3QgcGF0aG5hbWUgPSBgJHtjdXJyZW50IHx8ICcnfSR7c2x1ZyB8fCAnJ31gLnJlcGxhY2UoJy8vJywgJy8nKTtcbiAgICAgIGZsYXROYXZpZ2F0aW9uLnB1c2goeyAuLi5yZXN0LCBzbHVnLCBwYXRobmFtZSB9KTtcbiAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9LFxuICB9KTtcblxuICBwcmVyZW5kZXIoX19kaXJuYW1lLCBmbGF0TmF2aWdhdGlvbi5tYXAoeCA9PiB4LnBhdGhuYW1lKSwgey4uLmFyZ3N9KTtcbiAgcHJlcmVuZGVyKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdhbXAnKSwgZmxhdE5hdmlnYXRpb24ubWFwKHggPT4geC5wYXRobmFtZSksIHsuLi5hcmdzLCBpc0FtcDogdHJ1ZX0pO1xufVxuXG4iXX0=
