'use strict';

require('babel-polyfill');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jsYaml = require('js-yaml');

var _jsYaml2 = _interopRequireDefault(_jsYaml);

var _db = require('../lambda/db');

var _evernote = require('./evernote');

var _evernote2 = _interopRequireDefault(_evernote);

var _cloudinary = require('./cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _db.connectionString)(_jsYaml2.default.load(_fs2.default.readFileSync(_path2.default.resolve(__dirname, '..', 'lambda', 'env.yml'))).v1.MONGODB_URI);

var upload = (0, _cloudinary2.default)({
  cloudName: 'x',
  apiKey: 'x',
  apiSecret: 'x'
});

var client = (0, _evernote2.default)({
  token: 'x',
  sandbox: true,
  upload: upload
});

var work = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var docs;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client('gzk');

          case 2:
            docs = _context.sent;
            return _context.abrupt('return', Promise.all(docs.map(function (x) {
              return (0, _db.updateOne)('document', { rootId: x.rootId }, x);
            })));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function work() {
    return _ref.apply(this, arguments);
  };
}();

work().then(_db.close).then(function (x) {
  console.log('DONE');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9uZW8vZXhhbXBsZS9pbmRleC5lczYiXSwibmFtZXMiOlsibG9hZCIsInJlYWRGaWxlU3luYyIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJ2MSIsIk1PTkdPREJfVVJJIiwidXBsb2FkIiwiY2xvdWROYW1lIiwiYXBpS2V5IiwiYXBpU2VjcmV0IiwiY2xpZW50IiwidG9rZW4iLCJzYW5kYm94Iiwid29yayIsImRvY3MiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwicm9vdElkIiwieCIsInRoZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsMEJBQ0UsaUJBQUtBLElBQUwsQ0FBVSxhQUFHQyxZQUFILENBQWdCLGVBQUtDLE9BQUwsQ0FBYUMsU0FBYixFQUF3QixJQUF4QixFQUE4QixRQUE5QixFQUF3QyxTQUF4QyxDQUFoQixDQUFWLEVBQ0dDLEVBREgsQ0FDTUMsV0FGUjs7QUFLQSxJQUFNQyxTQUFTLDBCQUFXO0FBQ3hCQyxhQUFXLEdBRGE7QUFFeEJDLFVBQVEsR0FGZ0I7QUFHeEJDLGFBQVc7QUFIYSxDQUFYLENBQWY7O0FBTUEsSUFBTUMsU0FBUyx3QkFBUztBQUN0QkMsU0FBTyxHQURlO0FBRXRCQyxXQUFTLElBRmE7QUFHdEJOO0FBSHNCLENBQVQsQ0FBZjs7QUFNQSxJQUFNTztBQUFBLHFFQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1FILE9BQU8sS0FBUCxDQURSOztBQUFBO0FBQ0xJLGdCQURLO0FBQUEsNkNBRUpDLFFBQVFDLEdBQVIsQ0FDTEYsS0FBS0csR0FBTCxDQUFTO0FBQUEscUJBQUssbUJBQVUsVUFBVixFQUFzQixFQUFFQyxRQUFRQyxFQUFFRCxNQUFaLEVBQXRCLEVBQTRDQyxDQUE1QyxDQUFMO0FBQUEsYUFBVCxDQURLLENBRkk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQU9BTixPQUNHTyxJQURILFlBRUdBLElBRkgsQ0FFUSxhQUFLO0FBQ1RDLFVBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0QsQ0FKSCIsImZpbGUiOiJjbXMvbmVvL2V4YW1wbGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB5YW1sIGZyb20gJ2pzLXlhbWwnO1xuaW1wb3J0IHsgdXBkYXRlT25lLCBjb25uZWN0aW9uU3RyaW5nLCBjbG9zZSB9IGZyb20gJy4uL2xhbWJkYS9kYic7XG5pbXBvcnQgZXZlcm5vdGUgZnJvbSAnLi9ldmVybm90ZSc7XG5pbXBvcnQgY2xvdWRpbmFyeSBmcm9tICcuL2Nsb3VkaW5hcnknO1xuXG5jb25uZWN0aW9uU3RyaW5nKFxuICB5YW1sLmxvYWQoZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicsICdsYW1iZGEnLCAnZW52LnltbCcpKSlcbiAgICAudjEuTU9OR09EQl9VUklcbik7XG5cbmNvbnN0IHVwbG9hZCA9IGNsb3VkaW5hcnkoe1xuICBjbG91ZE5hbWU6ICd4JyxcbiAgYXBpS2V5OiAneCcsXG4gIGFwaVNlY3JldDogJ3gnXG59KTtcblxuY29uc3QgY2xpZW50ID0gZXZlcm5vdGUoe1xuICB0b2tlbjogJ3gnLFxuICBzYW5kYm94OiB0cnVlLFxuICB1cGxvYWRcbn0pO1xuXG5jb25zdCB3b3JrID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkb2NzID0gYXdhaXQgY2xpZW50KCdnemsnKTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgIGRvY3MubWFwKHggPT4gdXBkYXRlT25lKCdkb2N1bWVudCcsIHsgcm9vdElkOiB4LnJvb3RJZCB9LCB4KSlcbiAgKTtcbn07XG5cbndvcmsoKVxuICAudGhlbihjbG9zZSlcbiAgLnRoZW4oeCA9PiB7XG4gICAgY29uc29sZS5sb2coJ0RPTkUnKTtcbiAgfSk7XG4iXX0=
