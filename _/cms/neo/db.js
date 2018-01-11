'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = exports.updateOne = exports.findOne = exports.transform = exports.close = exports.connectionString = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mongodb = require('mongodb');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var CONNECTION_STRING = void 0;
var connectionString = exports.connectionString = function connectionString(str) {
  return CONNECTION_STRING = str;
};

var cachedDb = null;
var _cachedDb = null;
var connectToDatabase = function connectToDatabase() {
  if (cachedDb && cachedDb.serverConfig.isConnected()) {
    return Promise.resolve(cachedDb);
  }

  return _mongodb.MongoClient.connect(CONNECTION_STRING, {
    ssl: true,
    replicaSet: 'Cluster0-shard-0',
    authSource: 'admin'
  }).then(function (db) {
    _cachedDb = db;
    cachedDb = db.db('olymp');
    return cachedDb;
  });
};

var close = exports.close = function close() {
  if (cachedDb && cachedDb.serverConfig.isConnected()) {
    return _cachedDb.close();
  }
  return Promise.resolve();
};

var enhance = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, collection) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var _db$collection;

    var db;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return connectToDatabase();

          case 2:
            db = _context.sent;
            return _context.abrupt('return', (_db$collection = db.collection(collection))[method].apply(_db$collection, args));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function enhance(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var transform = exports.transform = function transform(item) {
  if (Array.isArray(item)) {
    return item.map(transform);
  } else if (item && item._id) {
    return _extends({}, item, { id: item._id });
  }
  return item;
};

var findOne = exports.findOne = function findOne(collection, filter) {
  if (typeof filter === 'string') {
    return enhance('findOne', collection, { _id: new _mongodb.ObjectID(filter) }).then(transform);
  }
  return enhance('findOne', collection, filter).then(transform);
};

var updateOne = exports.updateOne = function updateOne(collection, query, data) {
  if (!data) {
    data = query || {};
    query = null;
  }
  var id = data.id;
  delete data.id;

  if (id || query) {
    return enhance('findAndModify', collection, query || { _id: new _mongodb.ObjectID(id) }, [], { $set: data }, {
      remove: false,
      new: true,
      upsert: true
    }).then(function (x) {
      return x.value;
    }).then(transform);
  }
  return enhance('insertOne', collection, data).then(function (x) {
    return x.ops[0];
  }).then(transform);
};

var find = exports.find = function find(collection) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return enhance.apply(undefined, ['find', collection].concat(args)).then(function (x) {
    return x.toArray();
  }).then(transform);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9uZW8vZGIuZXM2Il0sIm5hbWVzIjpbIkNPTk5FQ1RJT05fU1RSSU5HIiwiY29ubmVjdGlvblN0cmluZyIsInN0ciIsImNhY2hlZERiIiwiX2NhY2hlZERiIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJzZXJ2ZXJDb25maWciLCJpc0Nvbm5lY3RlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29ubmVjdCIsInNzbCIsInJlcGxpY2FTZXQiLCJhdXRoU291cmNlIiwidGhlbiIsImRiIiwiY2xvc2UiLCJlbmhhbmNlIiwibWV0aG9kIiwiY29sbGVjdGlvbiIsImFyZ3MiLCJ0cmFuc2Zvcm0iLCJBcnJheSIsImlzQXJyYXkiLCJpdGVtIiwibWFwIiwiX2lkIiwiaWQiLCJmaW5kT25lIiwiZmlsdGVyIiwidXBkYXRlT25lIiwicXVlcnkiLCJkYXRhIiwiJHNldCIsInJlbW92ZSIsIm5ldyIsInVwc2VydCIsIngiLCJ2YWx1ZSIsIm9wcyIsImZpbmQiLCJ0b0FycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQUlBLDBCQUFKO0FBQ08sSUFBTUMsOENBQW1CLFNBQW5CQSxnQkFBbUI7QUFBQSxTQUFRRCxvQkFBb0JFLEdBQTVCO0FBQUEsQ0FBekI7O0FBRVAsSUFBSUMsV0FBVyxJQUFmO0FBQ0EsSUFBSUMsWUFBWSxJQUFoQjtBQUNBLElBQU1DLG9CQUFvQixTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIsTUFBSUYsWUFBWUEsU0FBU0csWUFBVCxDQUFzQkMsV0FBdEIsRUFBaEIsRUFBcUQ7QUFDbkQsV0FBT0MsUUFBUUMsT0FBUixDQUFnQk4sUUFBaEIsQ0FBUDtBQUNEOztBQUVELFNBQU8scUJBQVlPLE9BQVosQ0FBb0JWLGlCQUFwQixFQUF1QztBQUM1Q1csU0FBSyxJQUR1QztBQUU1Q0MsZ0JBQVksa0JBRmdDO0FBRzVDQyxnQkFBWTtBQUhnQyxHQUF2QyxFQUlKQyxJQUpJLENBSUMsY0FBTTtBQUNaVixnQkFBWVcsRUFBWjtBQUNB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QkMsSUFBL0IsR0FDR04sSUFESCxDQUNRO0FBQUEsV0FBS3VCLEVBQUVJLE9BQUYsRUFBTDtBQUFBLEdBRFIsRUFFRzNCLElBRkgsQ0FFUU8sU0FGUixDQURrQjtBQUFBLENBQWIiLCJmaWxlIjoiY21zL25lby9kYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJRCB9IGZyb20gJ21vbmdvZGInO1xuXG5sZXQgQ09OTkVDVElPTl9TVFJJTkc7XG5leHBvcnQgY29uc3QgY29ubmVjdGlvblN0cmluZyA9IHN0ciA9PiAoQ09OTkVDVElPTl9TVFJJTkcgPSBzdHIpO1xuXG5sZXQgY2FjaGVkRGIgPSBudWxsO1xubGV0IF9jYWNoZWREYiA9IG51bGw7XG5jb25zdCBjb25uZWN0VG9EYXRhYmFzZSA9ICgpID0+IHtcbiAgaWYgKGNhY2hlZERiICYmIGNhY2hlZERiLnNlcnZlckNvbmZpZy5pc0Nvbm5lY3RlZCgpKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWREYik7XG4gIH1cblxuICByZXR1cm4gTW9uZ29DbGllbnQuY29ubmVjdChDT05ORUNUSU9OX1NUUklORywge1xuICAgIHNzbDogdHJ1ZSxcbiAgICByZXBsaWNhU2V0OiAnQ2x1c3RlcjAtc2hhcmQtMCcsXG4gICAgYXV0aFNvdXJjZTogJ2FkbWluJ1xuICB9KS50aGVuKGRiID0+IHtcbiAgICBfY2FjaGVkRGIgPSBkYjtcbiAgICBjYWNoZWREYiA9IGRiLmRiKCdvbHltcCcpO1xuICAgIHJldHVybiBjYWNoZWREYjtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gIGlmIChjYWNoZWREYiAmJiBjYWNoZWREYi5zZXJ2ZXJDb25maWcuaXNDb25uZWN0ZWQoKSkge1xuICAgIHJldHVybiBfY2FjaGVkRGIuY2xvc2UoKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59O1xuXG5jb25zdCBlbmhhbmNlID0gYXN5bmMgKG1ldGhvZCwgY29sbGVjdGlvbiwgLi4uYXJncykgPT4ge1xuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIHJldHVybiBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pW21ldGhvZF0oLi4uYXJncyk7XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtID0gaXRlbSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgcmV0dXJuIGl0ZW0ubWFwKHRyYW5zZm9ybSk7XG4gIH0gZWxzZSBpZiAoaXRlbSAmJiBpdGVtLl9pZCkge1xuICAgIHJldHVybiB7IC4uLml0ZW0sIGlkOiBpdGVtLl9pZCB9O1xuICB9XG4gIHJldHVybiBpdGVtO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRPbmUgPSAoY29sbGVjdGlvbiwgZmlsdGVyKSA9PiB7XG4gIGlmICh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBlbmhhbmNlKCdmaW5kT25lJywgY29sbGVjdGlvbiwgeyBfaWQ6IG5ldyBPYmplY3RJRChmaWx0ZXIpIH0pLnRoZW4oXG4gICAgICB0cmFuc2Zvcm1cbiAgICApO1xuICB9XG4gIHJldHVybiBlbmhhbmNlKCdmaW5kT25lJywgY29sbGVjdGlvbiwgZmlsdGVyKS50aGVuKHRyYW5zZm9ybSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlT25lID0gKGNvbGxlY3Rpb24sIHF1ZXJ5LCBkYXRhKSA9PiB7XG4gIGlmICghZGF0YSkge1xuICAgIGRhdGEgPSBxdWVyeSB8fCB7fTtcbiAgICBxdWVyeSA9IG51bGw7XG4gIH1cbiAgY29uc3QgaWQgPSBkYXRhLmlkO1xuICBkZWxldGUgZGF0YS5pZDtcblxuICBpZiAoaWQgfHwgcXVlcnkpIHtcbiAgICByZXR1cm4gZW5oYW5jZShcbiAgICAgICdmaW5kQW5kTW9kaWZ5JyxcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBxdWVyeSB8fCB7IF9pZDogbmV3IE9iamVjdElEKGlkKSB9LFxuICAgICAgW10sXG4gICAgICB7ICRzZXQ6IGRhdGEgfSxcbiAgICAgIHtcbiAgICAgICAgcmVtb3ZlOiBmYWxzZSxcbiAgICAgICAgbmV3OiB0cnVlLFxuICAgICAgICB1cHNlcnQ6IHRydWVcbiAgICAgIH1cbiAgICApXG4gICAgICAudGhlbih4ID0+IHgudmFsdWUpXG4gICAgICAudGhlbih0cmFuc2Zvcm0pO1xuICB9XG4gIHJldHVybiBlbmhhbmNlKCdpbnNlcnRPbmUnLCBjb2xsZWN0aW9uLCBkYXRhKVxuICAgIC50aGVuKHggPT4geC5vcHNbMF0pXG4gICAgLnRoZW4odHJhbnNmb3JtKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gKGNvbGxlY3Rpb24sIC4uLmFyZ3MpID0+XG4gIGVuaGFuY2UoJ2ZpbmQnLCBjb2xsZWN0aW9uLCAuLi5hcmdzKVxuICAgIC50aGVuKHggPT4geC50b0FycmF5KCkpXG4gICAgLnRoZW4odHJhbnNmb3JtKTtcbiJdfQ==
