'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lowerFirst2 = require('lodash/lowerFirst');

var _lowerFirst3 = _interopRequireDefault(_lowerFirst2);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _server = require('olymp-graphql/server');

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _adaptQuery = require('./adapt-query');

var _adaptQuery2 = _interopRequireDefault(_adaptQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (ast, node, resolvers, typeName, isGeneric) {
  var name = node.name.value;
  var table = (0, _lowerFirst3.default)(typeName || name);

  var Query = ast.definitions.find(function (x) {
    return (0, _get3.default)(x, 'name.value') === 'RootQuery';
  });

  if (Query) {
    // Add one query
    (0, _server.addFields)(ast, Query, table + '(id: String, query: ' + name + 'Query, sort: ' + name + 'Sort): ' + name, {
      replace: false
    });
    if (!(0, _get3.default)(resolvers, 'RootQuery.' + table)) {
      (0, _set3.default)(resolvers, 'RootQuery.' + table, function (source, _ref, _ref2) {
        var id = _ref.id,
            query = _ref.query;
        var db = _ref2.db,
            app = _ref2.app;

        var x = id ? { id: id } : (0, _adaptQuery2.default)(query);
        var q = isGeneric ? _extends({}, x, { _appId: app.id }) : _extends({}, x, { _type: table, _appId: app.id });
        // db.collection(table).findOne(id ? { id } : adaptQuery(query))
        return db.collection('item').findOne(q);
      });
    }

    // Add list query
    (0, _server.addFields)(ast, Query, table + 'List(query: ' + name + 'Query, sort: ' + name + 'Sort, limit: Int, skip: Int): [' + name + ']', { replace: false });
    if (!(0, _get3.default)(resolvers, 'RootQuery.' + table + 'List')) {
      (0, _set3.default)(resolvers, 'RootQuery.' + table + 'List', function (source, _ref3, _ref4) {
        var query = _ref3.query,
            sort = _ref3.sort,
            limit = _ref3.limit,
            skip = _ref3.skip;
        var db = _ref4.db,
            app = _ref4.app;


        var obj = sort || { name: 'ASC' };
        var sorting = Object.keys(obj).reduce(function (store, key) {
          store[key] = obj[key] === 'DESC' ? -1 : 1;
          return store;
        }, {});
        return db.collection('item').find(isGeneric ? _extends({}, (0, _adaptQuery2.default)(query), { _appId: app.id }) : _extends({}, (0, _adaptQuery2.default)(query), { _type: table, _appId: app.id }))
        // .sort(sorting)
        // .limit(limit || 100)
        // .skip(skip || 0)
        .toArray();
      });
    }
  }

  var Mutation = ast.definitions.find(function (x) {
    return (0, _get3.default)(x, 'name.value') === 'RootMutation';
  });

  if (Mutation) {
    // Add mutation
    (0, _server.addFields)(ast, Mutation, table + '(id: String, type: MUTATION_TYPE, input: ' + name + 'Input): ' + name, { replace: false });
    if (!(0, _get3.default)(resolvers, 'RootMutation.' + table)) {
      (0, _set3.default)(resolvers, 'RootMutation.' + table,
      /* (source, { id, input, type }, { db }) => {
        if (!id) {
          db.collection(table).insert(input);
        } else if (type === 'REPLACE') {
          db.collection(table).update(input);
        } else {
          db.collection(table).update({ $set: input });
        }
      } */
      function (source, _ref5, _ref6) {
        var id = _ref5.id,
            input = _ref5.input,
            type = _ref5.type;
        var db = _ref6.db,
            app = _ref6.app;

        var promise = void 0;
        if (!id) {
          id = _shortid2.default.generate();
          promise = db.collection('item').insertOne(_extends({}, input, { _type: table, _appId: app.id, id: id }));
        } else if (type === 'REMOVE') {
          promise = db.collection('item').updateOne({ _type: table, id: id }, _extends({}, input, { state: 'REMOVED' }));
        } else if (type === 'REPLACE') {
          promise = db.collection('item').updateOne({ _type: table, id: id }, _extends({}, input, { _type: table, _appId: app.id, id: id }));
        } else {
          promise = db.collection('item').updateOne({ _type: table, id: id }, { $set: _extends({}, input) });
        }
        return promise.then(function () {
          return db.collection('item').findOne({ id: id, _type: table });
        });
      });
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3NlcnZlci9tb25nb2RiL2FkZC1xdWVyaWVzLmVzNiJdLCJuYW1lcyI6WyJhc3QiLCJub2RlIiwicmVzb2x2ZXJzIiwidHlwZU5hbWUiLCJpc0dlbmVyaWMiLCJuYW1lIiwidmFsdWUiLCJ0YWJsZSIsIlF1ZXJ5IiwiZGVmaW5pdGlvbnMiLCJmaW5kIiwieCIsInJlcGxhY2UiLCJzb3VyY2UiLCJpZCIsInF1ZXJ5IiwiZGIiLCJhcHAiLCJxIiwiX2FwcElkIiwiX3R5cGUiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsInNvcnQiLCJsaW1pdCIsInNraXAiLCJvYmoiLCJzb3J0aW5nIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsInN0b3JlIiwia2V5IiwidG9BcnJheSIsIk11dGF0aW9uIiwiaW5wdXQiLCJ0eXBlIiwicHJvbWlzZSIsImdlbmVyYXRlIiwiaW5zZXJ0T25lIiwidXBkYXRlT25lIiwic3RhdGUiLCIkc2V0IiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQ0EsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLFNBQVosRUFBdUJDLFFBQXZCLEVBQWlDQyxTQUFqQyxFQUErQztBQUM1RCxNQUFNQyxPQUFPSixLQUFLSSxJQUFMLENBQVVDLEtBQXZCO0FBQ0EsTUFBTUMsUUFBUSwwQkFBV0osWUFBWUUsSUFBdkIsQ0FBZDs7QUFFQSxNQUFNRyxRQUFRUixJQUFJUyxXQUFKLENBQWdCQyxJQUFoQixDQUFxQjtBQUFBLFdBQUssbUJBQUlDLENBQUosRUFBTyxZQUFQLE1BQXlCLFdBQTlCO0FBQUEsR0FBckIsQ0FBZDs7QUFFQSxNQUFJSCxLQUFKLEVBQVc7QUFDVDtBQUNBLDJCQUNFUixHQURGLEVBRUVRLEtBRkYsRUFHS0QsS0FITCw0QkFHaUNGLElBSGpDLHFCQUdxREEsSUFIckQsZUFHbUVBLElBSG5FLEVBSUU7QUFDRU8sZUFBUztBQURYLEtB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QVA7QUFHRCxPQXRDSDtBQXdDRDtBQUNGO0FBQ0YsQyIsImZpbGUiOiJjbXMvY29sbGVjdGlvbi9zZXJ2ZXIvbW9uZ29kYi9hZGQtcXVlcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCwgc2V0LCBsb3dlckZpcnN0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGFkZEZpZWxkcyB9IGZyb20gJ29seW1wLWdyYXBocWwvc2VydmVyJztcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xuaW1wb3J0IGFkYXB0UXVlcnkgZnJvbSAnLi9hZGFwdC1xdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IChhc3QsIG5vZGUsIHJlc29sdmVycywgdHlwZU5hbWUsIGlzR2VuZXJpYykgPT4ge1xuICBjb25zdCBuYW1lID0gbm9kZS5uYW1lLnZhbHVlO1xuICBjb25zdCB0YWJsZSA9IGxvd2VyRmlyc3QodHlwZU5hbWUgfHwgbmFtZSk7XG5cbiAgY29uc3QgUXVlcnkgPSBhc3QuZGVmaW5pdGlvbnMuZmluZCh4ID0+IGdldCh4LCAnbmFtZS52YWx1ZScpID09PSAnUm9vdFF1ZXJ5Jyk7XG5cbiAgaWYgKFF1ZXJ5KSB7XG4gICAgLy8gQWRkIG9uZSBxdWVyeVxuICAgIGFkZEZpZWxkcyhcbiAgICAgIGFzdCxcbiAgICAgIFF1ZXJ5LFxuICAgICAgYCR7dGFibGV9KGlkOiBTdHJpbmcsIHF1ZXJ5OiAke25hbWV9UXVlcnksIHNvcnQ6ICR7bmFtZX1Tb3J0KTogJHtuYW1lfWAsXG4gICAgICB7XG4gICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgfSxcbiAgICApO1xuICAgIGlmICghZ2V0KHJlc29sdmVycywgYFJvb3RRdWVyeS4ke3RhYmxlfWApKSB7XG4gICAgICBzZXQoXG4gICAgICAgIHJlc29sdmVycyxcbiAgICAgICAgYFJvb3RRdWVyeS4ke3RhYmxlfWAsXG4gICAgICAgIChzb3VyY2UsIHsgaWQsIHF1ZXJ5IH0sIHsgZGIsIGFwcCB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgeCA9IGlkID8geyBpZCB9IDogYWRhcHRRdWVyeShxdWVyeSk7XG4gICAgICAgICAgY29uc3QgcSA9IGlzR2VuZXJpY1xuICAgICAgICAgICAgPyB7IC4uLngsIF9hcHBJZDogYXBwLmlkIH1cbiAgICAgICAgICAgIDogeyAuLi54LCBfdHlwZTogdGFibGUsIF9hcHBJZDogYXBwLmlkIH07XG4gICAgICAgICAgLy8gZGIuY29sbGVjdGlvbih0YWJsZSkuZmluZE9uZShpZCA/IHsgaWQgfSA6IGFkYXB0UXVlcnkocXVlcnkpKVxuICAgICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKCdpdGVtJykuZmluZE9uZShxKTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQWRkIGxpc3QgcXVlcnlcbiAgICBhZGRGaWVsZHMoXG4gICAgICBhc3QsXG4gICAgICBRdWVyeSxcbiAgICAgIGAke3RhYmxlfUxpc3QocXVlcnk6ICR7bmFtZX1RdWVyeSwgc29ydDogJHtuYW1lfVNvcnQsIGxpbWl0OiBJbnQsIHNraXA6IEludCk6IFske25hbWV9XWAsXG4gICAgICB7IHJlcGxhY2U6IGZhbHNlIH0sXG4gICAgKTtcbiAgICBpZiAoIWdldChyZXNvbHZlcnMsIGBSb290UXVlcnkuJHt0YWJsZX1MaXN0YCkpIHtcbiAgICAgIHNldChcbiAgICAgICAgcmVzb2x2ZXJzLFxuICAgICAgICBgUm9vdFF1ZXJ5LiR7dGFibGV9TGlzdGAsXG4gICAgICAgIChzb3VyY2UsIHsgcXVlcnksIHNvcnQsIGxpbWl0LCBza2lwIH0sIHsgZGIsIGFwcCB9KSA9PiB7XG5cbiAgICAgICAgICBjb25zdCBvYmogPSBzb3J0IHx8IHsgbmFtZTogJ0FTQycgfTtcbiAgICAgICAgICBjb25zdCBzb3J0aW5nID0gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKHN0b3JlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHN0b3JlW2tleV0gPSBvYmpba2V5XSA9PT0gJ0RFU0MnID8gLTEgOiAxO1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICByZXR1cm4gZGJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpdGVtJylcbiAgICAgICAgICAgIC5maW5kKFxuICAgICAgICAgICAgICBpc0dlbmVyaWNcbiAgICAgICAgICAgICAgICA/IHsgLi4uYWRhcHRRdWVyeShxdWVyeSksIF9hcHBJZDogYXBwLmlkIH1cbiAgICAgICAgICAgICAgICA6IHsgLi4uYWRhcHRRdWVyeShxdWVyeSksIF90eXBlOiB0YWJsZSwgX2FwcElkOiBhcHAuaWQgfSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8vIC5zb3J0KHNvcnRpbmcpXG4gICAgICAgICAgICAvLyAubGltaXQobGltaXQgfHwgMTAwKVxuICAgICAgICAgICAgLy8gLnNraXAoc2tpcCB8fCAwKVxuICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IE11dGF0aW9uID0gYXN0LmRlZmluaXRpb25zLmZpbmQoXG4gICAgeCA9PiBnZXQoeCwgJ25hbWUudmFsdWUnKSA9PT0gJ1Jvb3RNdXRhdGlvbicsXG4gICk7XG5cbiAgaWYgKE11dGF0aW9uKSB7XG4gICAgLy8gQWRkIG11dGF0aW9uXG4gICAgYWRkRmllbGRzKFxuICAgICAgYXN0LFxuICAgICAgTXV0YXRpb24sXG4gICAgICBgJHt0YWJsZX0oaWQ6IFN0cmluZywgdHlwZTogTVVUQVRJT05fVFlQRSwgaW5wdXQ6ICR7bmFtZX1JbnB1dCk6ICR7bmFtZX1gLFxuICAgICAgeyByZXBsYWNlOiBmYWxzZSB9LFxuICAgICk7XG4gICAgaWYgKCFnZXQocmVzb2x2ZXJzLCBgUm9vdE11dGF0aW9uLiR7dGFibGV9YCkpIHtcbiAgICAgIHNldChcbiAgICAgICAgcmVzb2x2ZXJzLFxuICAgICAgICBgUm9vdE11dGF0aW9uLiR7dGFibGV9YCxcbiAgICAgICAgLyogKHNvdXJjZSwgeyBpZCwgaW5wdXQsIHR5cGUgfSwgeyBkYiB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgZGIuY29sbGVjdGlvbih0YWJsZSkuaW5zZXJ0KGlucHV0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdSRVBMQUNFJykge1xuICAgICAgICAgICAgZGIuY29sbGVjdGlvbih0YWJsZSkudXBkYXRlKGlucHV0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGIuY29sbGVjdGlvbih0YWJsZSkudXBkYXRlKHsgJHNldDogaW5wdXQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9ICovXG4gICAgICAgIChzb3VyY2UsIHsgaWQsIGlucHV0LCB0eXBlIH0sIHsgZGIsIGFwcCB9KSA9PiB7XG4gICAgICAgICAgbGV0IHByb21pc2U7XG4gICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XG4gICAgICAgICAgICBwcm9taXNlID0gZGJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2l0ZW0nKVxuICAgICAgICAgICAgICAuaW5zZXJ0T25lKHsgLi4uaW5wdXQsIF90eXBlOiB0YWJsZSwgX2FwcElkOiBhcHAuaWQsIGlkIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1JFTU9WRScpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBkYlxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignaXRlbScpXG4gICAgICAgICAgICAgIC51cGRhdGVPbmUoeyBfdHlwZTogdGFibGUsIGlkIH0sIHsgLi4uaW5wdXQsIHN0YXRlOiAnUkVNT1ZFRCcgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUkVQTEFDRScpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBkYlxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignaXRlbScpXG4gICAgICAgICAgICAgIC51cGRhdGVPbmUoXG4gICAgICAgICAgICAgICAgeyBfdHlwZTogdGFibGUsIGlkIH0sXG4gICAgICAgICAgICAgICAgeyAuLi5pbnB1dCwgX3R5cGU6IHRhYmxlLCBfYXBwSWQ6IGFwcC5pZCwgaWQgfSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZSA9IGRiXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpdGVtJylcbiAgICAgICAgICAgICAgLnVwZGF0ZU9uZSh7IF90eXBlOiB0YWJsZSwgaWQgfSwgeyAkc2V0OiB7IC4uLmlucHV0IH0gfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKCkgPT5cbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oJ2l0ZW0nKS5maW5kT25lKHsgaWQsIF90eXBlOiB0YWJsZSB9KSxcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn07XG4iXX0=
