import _orderBy from 'lodash/orderBy';

var _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import { pageList } from 'olymp-pages/gql/query';
import unflatten from 'olymp-utils/unflatten';
import prerender from 'olymp/node/prerender';
import path from 'path';

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

export default (function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
    var navBindingObj, _ref2, data, flatNavigation;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            navBindingObj = {};
            _context.next = 3;
            return client.query({
              query: pageList,
              variables: {}
            });

          case 3:
            _ref2 = _context.sent;
            data = _ref2.data;
            flatNavigation = [];

            unflatten(data.pageList, {
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
                return _orderBy(newChildren, ['order'], ['asc']);
              },
              setPath: function setPath(current, _ref3) {
                var slug = _ref3.slug,
                    rest = _objectWithoutProperties(_ref3, ['slug']);

                var pathname = ('' + (current || '') + (slug || '')).replace('//', '/');
                flatNavigation.push(_extends({}, rest, { slug: slug, pathname: pathname }));
                return pathname;
              }
            });

            prerender(__dirname, flatNavigation.map(function (x) {
              return x.pathname;
            }), _extends({}, args));
            prerender(path.resolve(__dirname, 'amp'), flatNavigation.map(function (x) {
              return x.pathname;
            }), _extends({}, args, { isAmp: true }));

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL3NlcnZlci9zaXRlbWFwLmVzNiJdLCJuYW1lcyI6WyJwYWdlTGlzdCIsInVuZmxhdHRlbiIsInByZXJlbmRlciIsInBhdGgiLCJyZXF1aXJlIiwiY29uZmlnIiwiSW5NZW1vcnlDYWNoZSIsIkh0dHBMaW5rIiwiQXBvbGxvQ2xpZW50IiwiZmV0Y2giLCJnbG9iYWwiLCJjYWNoZSIsImRhdGFJZEZyb21PYmplY3QiLCJvIiwiaWQiLCJhZGRUeXBlbmFtZSIsImNsaWVudCIsImxpbmsiLCJ1cmkiLCJhcmdzIiwibmF2QmluZGluZ09iaiIsInF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsImZsYXROYXZpZ2F0aW9uIiwicGF0aFByb3AiLCJzb3J0IiwiY2hpbGRyZW4iLCJwYXJlbnQiLCJuZXdDaGlsZHJlbiIsInJlZHVjZSIsInN0YXRlIiwiY2hpbGQiLCJpdGVtcyIsImZvckVhY2giLCJzbHVnIiwiaW50ZXJwb2xhdGUiLCJpdGVtIiwicHVzaCIsInBhZ2VJZCIsImJpbmRpbmdJZCIsImJpbmRpbmdPYmoiLCJuYW1lIiwic2V0UGF0aCIsImN1cnJlbnQiLCJyZXN0IiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiX19kaXJuYW1lIiwibWFwIiwieCIsInJlc29sdmUiLCJpc0FtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLFNBQVNBLFFBQVQsUUFBeUIsdUJBQXpCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQix1QkFBdEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLHNCQUF0QjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsTUFBakI7O0FBRUFDLFFBQVEsUUFBUixFQUFrQkMsTUFBbEI7O2VBQzBCRCxRQUFRLHVCQUFSLEM7SUFBbEJFLGEsWUFBQUEsYTs7Z0JBQ2FGLFFBQVEsa0JBQVIsQztJQUFiRyxRLGFBQUFBLFE7O2dCQUNpQkgsUUFBUSxlQUFSLEM7SUFBakJJLFksYUFBQUEsWTs7QUFDUixJQUFNQyxRQUFRTCxRQUFRLGtCQUFSLENB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O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoicGFja2FnZXMvcGFnZXMvc2VydmVyL3NpdGVtYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcmRlckJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHBhZ2VMaXN0IH0gZnJvbSAnb2x5bXAtcGFnZXMvZ3FsL3F1ZXJ5JztcbmltcG9ydCB1bmZsYXR0ZW4gZnJvbSAnb2x5bXAtdXRpbHMvdW5mbGF0dGVuJztcbmltcG9ydCBwcmVyZW5kZXIgZnJvbSAnb2x5bXAvbm9kZS9wcmVyZW5kZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuY29uc3QgeyBJbk1lbW9yeUNhY2hlIH0gPSByZXF1aXJlKCdhcG9sbG8tY2FjaGUtaW5tZW1vcnknKTtcbmNvbnN0IHsgSHR0cExpbmsgfSA9IHJlcXVpcmUoJ2Fwb2xsby1saW5rLWh0dHAnKTtcbmNvbnN0IHsgQXBvbGxvQ2xpZW50IH0gPSByZXF1aXJlKCdhcG9sbG8tY2xpZW50Jyk7XG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoJ2lzb21vcnBoaWMtZmV0Y2gnKTtcblxuZ2xvYmFsLmZldGNoID0gZmV0Y2g7XG5cbmNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoe1xuICBkYXRhSWRGcm9tT2JqZWN0OiBvID0+IG8uaWQsXG4gIGFkZFR5cGVuYW1lOiB0cnVlLFxufSk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBjYWNoZSxcbiAgbGluazogbmV3IEh0dHBMaW5rKHsgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dyYXBocWwnIH0pLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChhcmdzKSA9PiB7XG4gIGNvbnN0IG5hdkJpbmRpbmdPYmogPSB7fTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBwYWdlTGlzdCxcbiAgICB2YXJpYWJsZXM6IHsgfSxcbiAgfSk7XG5cbiAgY29uc3QgZmxhdE5hdmlnYXRpb24gPSBbXTtcbiAgdW5mbGF0dGVuKGRhdGEucGFnZUxpc3QsIHtcbiAgICBwYXRoUHJvcDogJ3BhdGhuYW1lJyxcbiAgICBzb3J0OiAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgY29uc3QgbmV3Q2hpbGRyZW4gPSBjaGlsZHJlbi5yZWR1Y2UoKHN0YXRlLCBjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gbmF2QmluZGluZ09iaiAmJiBuYXZCaW5kaW5nT2JqW2NoaWxkLmlkXTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAoZGF0YS5pdGVtcyB8fCBbXSkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNsdWcgPSBjaGlsZC5zbHVnXG4gICAgICAgICAgICAgID8gaW50ZXJwb2xhdGUoY2hpbGQuc2x1ZywgaXRlbSlcbiAgICAgICAgICAgICAgOiBpdGVtLnNsdWc7XG4gICAgICAgICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgICAgICAgLi4uY2hpbGQsXG4gICAgICAgICAgICAgIHBhZ2VJZDogY2hpbGQuaWQsXG4gICAgICAgICAgICAgIGJpbmRpbmdJZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgYmluZGluZ09iajogaXRlbSxcbiAgICAgICAgICAgICAgc2x1ZyxcbiAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICBpZDogYCR7Y2hpbGQuaWR9LS0ke2l0ZW0uaWR9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIHJldHVybiBvcmRlckJ5KG5ld0NoaWxkcmVuLCBbJ29yZGVyJ10sIFsnYXNjJ10pO1xuICAgIH0sXG4gICAgc2V0UGF0aDogKGN1cnJlbnQsIHsgc2x1ZywgLi4ucmVzdCB9KSA9PiB7XG4gICAgICBjb25zdCBwYXRobmFtZSA9IGAke2N1cnJlbnQgfHwgJyd9JHtzbHVnIHx8ICcnfWAucmVwbGFjZSgnLy8nLCAnLycpO1xuICAgICAgZmxhdE5hdmlnYXRpb24ucHVzaCh7IC4uLnJlc3QsIHNsdWcsIHBhdGhuYW1lIH0pO1xuICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH0sXG4gIH0pO1xuXG4gIHByZXJlbmRlcihfX2Rpcm5hbWUsIGZsYXROYXZpZ2F0aW9uLm1hcCh4ID0+IHgucGF0aG5hbWUpLCB7Li4uYXJnc30pO1xuICBwcmVyZW5kZXIocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2FtcCcpLCBmbGF0TmF2aWdhdGlvbi5tYXAoeCA9PiB4LnBhdGhuYW1lKSwgey4uLmFyZ3MsIGlzQW1wOiB0cnVlfSk7XG59XG5cbiJdfQ==
