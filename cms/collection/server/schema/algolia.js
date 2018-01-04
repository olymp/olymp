'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _server = require('olymp-graphql/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchType = (0, _server.createTypeFetcher)(function (node, name) {
  return (0, _get3.default)(node, 'kind') === 'ObjectTypeDefinition' && (0, _get3.default)(node, 'name.value') === name;
});

exports.default = {
  name: 'algolia',
  queries: '\n    algolia(text: String!): Algolia\n  ',
  onAfter: function onAfter(_ref) {
    var keys = _ref.keys,
        value = _ref.value,
        context = _ref.context,
        resolverAST = _ref.resolverAST,
        ast = _ref.ast;

    if (!context || !context.algolia) return;
    if (keys[0] === 'RootMutation' && value) {
      var typeName = (0, _get3.default)(resolverAST, 'returnType.name');
      var type = fetchType(ast, typeName);
      var directive = (0, _get3.default)(type, 'directives', []).find(function (d) {
        return (0, _get3.default)(d, 'name.value') === 'collection';
      });
      if (type && directive) {
        var index = context.algolia.initIndex(context.app.id);
        var asArray = (0, _isArray3.default)(value) ? value : [value];
        index.deleteObjects(asArray.filter(function (x) {
          return x.state !== 'PUBLISHED';
        }).map(function (x) {
          return x.id;
        }), function (err) {
          console.log('OK', err);
        });
        index.addObjects(asArray.filter(function (x) {
          return x.state === 'PUBLISHED';
        }).map(function (x) {
          return _extends({}, x, { objectID: x.id });
        }), function (err) {
          console.log('OK', err);
        });
      }
    }
  },
  resolvers: {
    queries: {
      algolia: function algolia(source, _ref2, _ref3) {
        var text = _ref2.text;
        var app = _ref3.app,
            _algolia = _ref3.algolia;

        var index = _algolia.initIndex(app.id);
        return new Promise(function (resolve, reject) {
          index.search(text, function (err, content) {
            if (err) {
              reject(err);
              return;
            }
            content.id = text;
            resolve(content);
          });
        });
      }
    }
  },
  schema: '\n    type Algolia {\n      id: String\n      nbHits: Int\n      page: Int\n      nbPages: Int\n      hitsPerPage: Int\n      processingTimeMS: Int\n      exhaustiveNbHits: Boolean\n      query: String,\n      params: String\n      hits: [AlgoliaHit]\n    }\n    type AlgoliaHit {\n      id: String\n      image: Image\n      _type: String\n      name: String\n      tags: [String]\n      state: DOCUMENT_STATE\n      createdAt: DateTime\n      createdBy: User\n      updatedAt: DateTime\n      updatedBy: User\n    }\n  '
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3NlcnZlci9zY2hlbWEvYWxnb2xpYS5lczYiXSwibmFtZXMiOlsiZmV0Y2hUeXBlIiwibm9kZSIsIm5hbWUiLCJxdWVyaWVzIiwib25BZnRlciIsImtleXMiLCJ2YWx1ZSIsImNvbnRleHQiLCJyZXNvbHZlckFTVCIsImFzdCIsImFsZ29saWEiLCJ0eXBlTmFtZSIsInR5cGUiLCJkaXJlY3RpdmUiLCJmaW5kIiwiZCIsImluZGV4IiwiaW5pdEluZGV4IiwiYXBwIiwiaWQiLCJhc0FycmF5IiwiZGVsZXRlT2JqZWN0cyIsImZpbHRlciIsIngiLCJzdGF0ZSIsIm1hcCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJhZGRPYmplY3RzIiwib2JqZWN0SUQiLCJyZXNvbHZlcnMiLCJzb3VyY2UiLCJ0ZXh0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZWFyY2giLCJjb250ZW50Iiwic2NoZW1hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLCtCQUFrQixVQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSxTQUFnQixtQkFBSUQsSUFBSixFQUFVLE1BQVYsTUFBc0Isc0JBQXRCLElBQWdELG1CQUFJQSxJQUFKLEVBQVUsWUFBVixNQUE0QkMsSUFBNUY7QUFBQSxDQUFsQixDQUFsQjs7a0JBRWU7QUFDYkEsUUFBTSxTQURPO0FBRWJDLHNEQUZhO0FBS2JDLFdBQVMsdUJBQWdEO0FBQUEsUUFBN0NDLElBQTZDLFFBQTdDQSxJQUE2QztBQUFBLFFBQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxRQUFoQ0MsT0FBZ0MsUUFBaENBLE9BQWdDO0FBQUEsUUFBdkJDLFdBQXVCLFFBQXZCQSxXQUF1QjtBQUFBLFFBQVZDLEdBQVUsUUFBVkEsR0FBVTs7QUFDdkQsUUFBSSxDQUFDRixPQUFELElBQVksQ0FBQ0EsUUFBUUcsT0FBekIsRUFBa0M7QUFDbEMsUUFBSUwsS0FBSyxDQUFMLE1BQVksY0FBWixJQUE4QkMsS0FBbEMsRUFBeUM7QUFDdkMsVUFBTUssV0FBVyxtQkFBSUgsV0FBSixFQUFpQixpQkFBakIsQ0FBakI7QUFDQSxVQUFNSSxPQUFPWixVQUFVUyxHQUFWLEVBQWVFLFFBQWYsQ0FBYjtBQUNBLFVBQU1FLFlBQVksbUJBQUlELElBQUosRUFBVSxZQUFWLEVBQXdCLEVBQXhCLEVBQTRCRSxJQUE1QixDQUFpQztBQUFBLGVBQUssbUJBQUlDLENBQUosRUFBTyxZQUFQLE1BQXlCLFlBQTlCO0FBQUEsT0FBakMsQ0FBbEI7QUFDQSxVQUFJSCxRQUFRQyxTQUFaLEVBQXVCO0FBQ3JCLFlBQU1HLFFBQVFULFFBQVFHLE9BQVIsQ0FBZ0JPLFNBQWhCLENBQTBCVixRQUFRVyxHQUFSLENBQVlDLEVBQXRDLENBQWQ7QUFDQSxZQUFNQyxVQUFVLHVCQUFRZCxLQUFSLElBQWlCQSxLQUFqQixHQUF5QixDQUFDQSxLQUFELENBQXpDO0FBQ0FVLGNBQU1LLGFBQU4sQ0FBb0JELFFBQVFFLE1BQVIsQ0FBZTtBQUFBLGlCQUFLQyxFQUFFQyxLQUFGLEtBQVksV0FBakI7QUFBQSxTQUFmLEVBQTZDQyxHQUE3QyxDQUFpRDtBQUFBLGlCQUFLRixFQUFFSixFQUFQO0FBQUEsU0FBakQsQ0FBcEIsRUFBaUYsVUFBQ08sR0FBRCxFQUFTO0FBQ3hGQyxrQkFBUUMsR0FBUixDQUFZLElBQVosRUFBa0JGLEdBQWxCO0FBQ0QsU0FGRDtBQUdBVixjQUFNYSxVQUFOLENBQWlCVCxRQUFRRSxNQUFSLENBQWU7QUFBQSxpQkFBS0MsRUFBRUMsS0FBRixLQUFZLFdBQWpCO0FBQUEsU0FBZixFQUE2Q0MsR0FBN0MsQ0FBaUQ7QUFBQSw4QkFBV0YsQ0FBWCxJQUFjTyxVQUFVUCxFQUFFSixFQUExQjtBQUFBLFNBQWpELENBQWpCLEVBQW9HLFVBQUNPLEdBQUQsRUFBUztBQUMzR0Msa0JBQVFDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCRixHQUFsQjtBQUNELFNBRkQ7QUFHRDtBQUNGO0FBQ0YsR0F0Qlk7QUF1QmJLLGFBQVc7QUFDVDVCLGFBQVM7QUFDUE8sZUFBUyxpQkFBQ3NCLE1BQUQsZ0JBQXdDO0FBQUEsWUFBN0JDLElBQTZCLFNBQTdCQSxJQUE2QjtBQUFBLFlBQW5CZixHQUFtQixTQUFuQkEsR0FBbUI7QUFBQSxZQUFkUixRQUFjLFNBQWRBLE9BQWM7O0FBQy9DLFlBQU1NLFFBQVFOLFNBQVFPLFNBQVIsQ0FBa0JDLElBQUlDLEVBQXRCLENBQWQ7QUFDQSxlQUFPLElBQUllLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENwQixnQkFBTXFCLE1BQU4sQ0FBYUosSUFBYixFQUFtQixVQUFDUCxHQUFELEVBQU1ZLE9BQU4sRUFBa0I7QUFDbkMsZ0JBQUlaLEdBQUosRUFBUztBQUNQVSxxQkFBT1YsR0FBUDtBQUNBO0FBQ0Q7QUFDRFksb0JBQVFuQixFQUFSLEdBQWFjLElBQWI7QUFDQUUsb0JBQVFHLE9BQVI7QUFDRCxXQVBEO0FBUUQsU0FUTSxDQUFQO0FBVUQ7QUFiTTtBQURBLEdBdkJFO0FBd0NiQztBQXhDYSxDIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL3NlcnZlci9zY2hlbWEvYWxnb2xpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCwgaXNBcnJheSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjcmVhdGVUeXBlRmV0Y2hlciB9IGZyb20gJ29seW1wLWdyYXBocWwvc2VydmVyJztcblxuY29uc3QgZmV0Y2hUeXBlID0gY3JlYXRlVHlwZUZldGNoZXIoKG5vZGUsIG5hbWUpID0+IGdldChub2RlLCAna2luZCcpID09PSAnT2JqZWN0VHlwZURlZmluaXRpb24nICYmIGdldChub2RlLCAnbmFtZS52YWx1ZScpID09PSBuYW1lKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYWxnb2xpYScsXG4gIHF1ZXJpZXM6IGBcbiAgICBhbGdvbGlhKHRleHQ6IFN0cmluZyEpOiBBbGdvbGlhXG4gIGAsXG4gIG9uQWZ0ZXI6ICh7IGtleXMsIHZhbHVlLCBjb250ZXh0LCByZXNvbHZlckFTVCwgYXN0IH0pID0+IHtcbiAgICBpZiAoIWNvbnRleHQgfHwgIWNvbnRleHQuYWxnb2xpYSkgcmV0dXJuO1xuICAgIGlmIChrZXlzWzBdID09PSAnUm9vdE11dGF0aW9uJyAmJiB2YWx1ZSkge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSBnZXQocmVzb2x2ZXJBU1QsICdyZXR1cm5UeXBlLm5hbWUnKTtcbiAgICAgIGNvbnN0IHR5cGUgPSBmZXRjaFR5cGUoYXN0LCB0eXBlTmFtZSk7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSBnZXQodHlwZSwgJ2RpcmVjdGl2ZXMnLCBbXSkuZmluZChkID0+IGdldChkLCAnbmFtZS52YWx1ZScpID09PSAnY29sbGVjdGlvbicpO1xuICAgICAgaWYgKHR5cGUgJiYgZGlyZWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY29udGV4dC5hbGdvbGlhLmluaXRJbmRleChjb250ZXh0LmFwcC5pZCk7XG4gICAgICAgIGNvbnN0IGFzQXJyYXkgPSBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgICAgICAgaW5kZXguZGVsZXRlT2JqZWN0cyhhc0FycmF5LmZpbHRlcih4ID0+IHguc3RhdGUgIT09ICdQVUJMSVNIRUQnKS5tYXAoeCA9PiB4LmlkKSwgKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdPSycsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBpbmRleC5hZGRPYmplY3RzKGFzQXJyYXkuZmlsdGVyKHggPT4geC5zdGF0ZSA9PT0gJ1BVQkxJU0hFRCcpLm1hcCh4ID0+ICh7IC4uLngsIG9iamVjdElEOiB4LmlkIH0pKSwgKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdPSycsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmVzb2x2ZXJzOiB7XG4gICAgcXVlcmllczoge1xuICAgICAgYWxnb2xpYTogKHNvdXJjZSwgeyB0ZXh0IH0sIHsgYXBwLCBhbGdvbGlhIH0pID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhbGdvbGlhLmluaXRJbmRleChhcHAuaWQpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGluZGV4LnNlYXJjaCh0ZXh0LCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZW50LmlkID0gdGV4dDtcbiAgICAgICAgICAgIHJlc29sdmUoY29udGVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBzY2hlbWE6IGBcbiAgICB0eXBlIEFsZ29saWEge1xuICAgICAgaWQ6IFN0cmluZ1xuICAgICAgbmJIaXRzOiBJbnRcbiAgICAgIHBhZ2U6IEludFxuICAgICAgbmJQYWdlczogSW50XG4gICAgICBoaXRzUGVyUGFnZTogSW50XG4gICAgICBwcm9jZXNzaW5nVGltZU1TOiBJbnRcbiAgICAgIGV4aGF1c3RpdmVOYkhpdHM6IEJvb2xlYW5cbiAgICAgIHF1ZXJ5OiBTdHJpbmcsXG4gICAgICBwYXJhbXM6IFN0cmluZ1xuICAgICAgaGl0czogW0FsZ29saWFIaXRdXG4gICAgfVxuICAgIHR5cGUgQWxnb2xpYUhpdCB7XG4gICAgICBpZDogU3RyaW5nXG4gICAgICBpbWFnZTogSW1hZ2VcbiAgICAgIF90eXBlOiBTdHJpbmdcbiAgICAgIG5hbWU6IFN0cmluZ1xuICAgICAgdGFnczogW1N0cmluZ11cbiAgICAgIHN0YXRlOiBET0NVTUVOVF9TVEFURVxuICAgICAgY3JlYXRlZEF0OiBEYXRlVGltZVxuICAgICAgY3JlYXRlZEJ5OiBVc2VyXG4gICAgICB1cGRhdGVkQXQ6IERhdGVUaW1lXG4gICAgICB1cGRhdGVkQnk6IFVzZXJcbiAgICB9XG4gIGAsXG59O1xuIl19
