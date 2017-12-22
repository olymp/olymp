import _isArray from 'lodash/isArray';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { createTypeFetcher } from 'olymp-graphql/server';

var fetchType = createTypeFetcher(function (node, name) {
  return _get(node, 'kind') === 'ObjectTypeDefinition' && _get(node, 'name.value') === name;
});

export default {
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
      var typeName = _get(resolverAST, 'returnType.name');
      var type = fetchType(ast, typeName);
      var directive = _get(type, 'directives', []).find(function (d) {
        return _get(d, 'name.value') === 'collection';
      });
      if (type && directive) {
        var index = context.algolia.initIndex(context.app.id);
        var asArray = _isArray(value) ? value : [value];
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vc2VydmVyL3NjaGVtYS9hbGdvbGlhLmVzNiJdLCJuYW1lcyI6WyJjcmVhdGVUeXBlRmV0Y2hlciIsImZldGNoVHlwZSIsIm5vZGUiLCJuYW1lIiwicXVlcmllcyIsIm9uQWZ0ZXIiLCJrZXlzIiwidmFsdWUiLCJjb250ZXh0IiwicmVzb2x2ZXJBU1QiLCJhc3QiLCJhbGdvbGlhIiwidHlwZU5hbWUiLCJ0eXBlIiwiZGlyZWN0aXZlIiwiZmluZCIsImQiLCJpbmRleCIsImluaXRJbmRleCIsImFwcCIsImlkIiwiYXNBcnJheSIsImRlbGV0ZU9iamVjdHMiLCJmaWx0ZXIiLCJ4Iiwic3RhdGUiLCJtYXAiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWRkT2JqZWN0cyIsIm9iamVjdElEIiwicmVzb2x2ZXJzIiwic291cmNlIiwidGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2VhcmNoIiwiY29udGVudCIsInNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxTQUFTQSxpQkFBVCxRQUFrQyxzQkFBbEM7O0FBRUEsSUFBTUMsWUFBWUQsa0JBQWtCLFVBQUNFLElBQUQsRUFBT0MsSUFBUDtBQUFBLFNBQWdCLEtBQUlELElBQUosRUFBVSxNQUFWLE1BQXNCLHNCQUF0QixJQUFnRCxLQUFJQSxJQUFKLEVBQVUsWUFBVixNQUE0QkMsSUFBNUY7QUFBQSxDQUFsQixDQUFsQjs7QUFFQSxlQUFlO0FBQ2JBLFFBQU0sU0FETztBQUViQyxzREFGYTtBQUtiQyxXQUFTLHVCQUFnRDtBQUFBLFFBQTdDQyxJQUE2QyxRQUE3Q0EsSUFBNkM7QUFBQSxRQUF2Q0MsS0FBdUMsUUFBdkNBLEtBQXVDO0FBQUEsUUFBaENDLE9BQWdDLFFBQWhDQSxPQUFnQztBQUFBLFFBQXZCQyxXQUF1QixRQUF2QkEsV0FBdUI7QUFBQSxRQUFWQyxHQUFVLFFBQVZBLEdBQVU7O0FBQ3ZELFFBQUksQ0FBQ0YsT0FBRCxJQUFZLENBQUNBLFFBQVFHLE9BQXpCLEVBQWtDO0FBQ2xDLFFBQUlMLEtBQUssQ0FBTCxNQUFZLGNBQVosSUFBOEJDLEtBQWxDLEVBQXlDO0FBQ3ZDLFVBQU1LLFdBQVcsS0FBSUgsV0FBSixFQUFpQixpQkFBakIsQ0FBakI7QUFDQSxVQUFNSSxPQUFPWixVQUFVUyxHQUFWLEVBQWVFLFFBQWYsQ0FBYjtBQUNBLFVBQU1FLFlBQVksS0FBSUQsSUFBSixFQUFVLFlBQVYsRUFBd0IsRUFBeEIsRUFBNEJFLElBQTVCLENBQWlDO0FBQUEsZUFBSyxLQUFJQyxDQUFKLEVBQU8sWUFBUCxNQUF5QixZQUE5QjtBQUFBLE9BQWpDLENBQWxCO0FBQ0EsVUFBSUgsUUFBUUMsU0FBWixFQUF1QjtBQUNyQixZQUFNRyxRQUFRVCxRQUFRRyxPQUFSLENBQWdCTyxTQUFoQixDQUEwQlYsUUFBUVcsR0FBUixDQUFZQyxFQUF0QyxDQUFkO0FBQ0EsWUFBTUMsVUFBVSxTQUFRZCxLQUFSLElBQWlCQSxLQUFqQixHQUF5QixDQUFDQSxLQUFELENBQXpDO0FBQ0FVLGNBQU1LLGFBQU4sQ0FBb0JELFFBQVFFLE1BQVIsQ0FBZTtBQUFBLGlCQUFLQyxFQUFFQyxLQUFGLEtBQVksV0FBakI7QUFBQSxTQUFmLEVBQTZDQyxHQUE3QyxDQUFpRDtBQUFBLGlCQUFLRixFQUFFSixFQUFQO0FBQUEsU0FBakQsQ0FBcEIsRUFBaUYsVUFBQ08sR0FBRCxFQUFTO0FBQ3hGQyxrQkFBUUMsR0FBUixDQUFZLElBQVosRUFBa0JGLEdBQWxCO0FBQ0QsU0FGRDtBQUdBVixjQUFNYSxVQUFOLENBQWlCVCxRQUFRRSxNQUFSLENBQWU7QUFBQSxpQkFBS0MsRUFBRUMsS0FBRixLQUFZLFdBQWpCO0FBQUEsU0FBZixFQUE2Q0MsR0FBN0MsQ0FBaUQ7QUFBQSw4QkFBV0YsQ0FBWCxJQUFjTyxVQUFVUCxFQUFFSixFQUExQjtBQUFBLFNBQWpELENBQWpCLEVBQW9HLFVBQUNPLEdBQUQsRUFBUztBQUMzR0Msa0JBQVFDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCRixHQUFsQjtBQUNELFNBRkQ7QUFHRDtBQUNGO0FBQ0YsR0F0Qlk7QUF1QmJLLGFBQVc7QUFDVDVCLGFBQVM7QUFDUE8sZUFBUyxpQkFBQ3NCLE1BQUQsZ0JBQXdDO0FBQUEsWUFBN0JDLElBQTZCLFNBQTdCQSxJQUE2QjtBQUFBLFlBQW5CZixHQUFtQixTQUFuQkEsR0FBbUI7QUFBQSxZQUFkUixRQUFjLFNBQWRBLE9BQWM7O0FBQy9DLFlBQU1NLFFBQVFOLFNBQVFPLFNBQVIsQ0FBa0JDLElBQUlDLEVBQXRCLENBQWQ7QUFDQSxlQUFPLElBQUllLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENwQixnQkFBTXFCLE1BQU4sQ0FBYUosSUFBYixFQUFtQixVQUFDUCxHQUFELEVBQU1ZLE9BQU4sRUFBa0I7QUFDbkMsZ0JBQUlaLEdBQUosRUFBUztBQUNQVSxxQkFBT1YsR0FBUDtBQUNBO0FBQ0Q7QUFDRFksb0JBQVFuQixFQUFSLEdBQWFjLElBQWI7QUFDQUUsb0JBQVFHLE9BQVI7QUFDRCxXQVBEO0FBUUQsU0FUTSxDQUFQO0FBVUQ7QUFiTTtBQURBLEdBdkJFO0FBd0NiQztBQXhDYSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2NvbGxlY3Rpb24vc2VydmVyL3NjaGVtYS9hbGdvbGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0LCBpc0FycmF5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVR5cGVGZXRjaGVyIH0gZnJvbSAnb2x5bXAtZ3JhcGhxbC9zZXJ2ZXInO1xuXG5jb25zdCBmZXRjaFR5cGUgPSBjcmVhdGVUeXBlRmV0Y2hlcigobm9kZSwgbmFtZSkgPT4gZ2V0KG5vZGUsICdraW5kJykgPT09ICdPYmplY3RUeXBlRGVmaW5pdGlvbicgJiYgZ2V0KG5vZGUsICduYW1lLnZhbHVlJykgPT09IG5hbWUpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhbGdvbGlhJyxcbiAgcXVlcmllczogYFxuICAgIGFsZ29saWEodGV4dDogU3RyaW5nISk6IEFsZ29saWFcbiAgYCxcbiAgb25BZnRlcjogKHsga2V5cywgdmFsdWUsIGNvbnRleHQsIHJlc29sdmVyQVNULCBhc3QgfSkgPT4ge1xuICAgIGlmICghY29udGV4dCB8fCAhY29udGV4dC5hbGdvbGlhKSByZXR1cm47XG4gICAgaWYgKGtleXNbMF0gPT09ICdSb290TXV0YXRpb24nICYmIHZhbHVlKSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IGdldChyZXNvbHZlckFTVCwgJ3JldHVyblR5cGUubmFtZScpO1xuICAgICAgY29uc3QgdHlwZSA9IGZldGNoVHlwZShhc3QsIHR5cGVOYW1lKTtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGdldCh0eXBlLCAnZGlyZWN0aXZlcycsIFtdKS5maW5kKGQgPT4gZ2V0KGQsICduYW1lLnZhbHVlJykgPT09ICdjb2xsZWN0aW9uJyk7XG4gICAgICBpZiAodHlwZSAmJiBkaXJlY3RpdmUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBjb250ZXh0LmFsZ29saWEuaW5pdEluZGV4KGNvbnRleHQuYXBwLmlkKTtcbiAgICAgICAgY29uc3QgYXNBcnJheSA9IGlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgICAgICBpbmRleC5kZWxldGVPYmplY3RzKGFzQXJyYXkuZmlsdGVyKHggPT4geC5zdGF0ZSAhPT0gJ1BVQkxJU0hFRCcpLm1hcCh4ID0+IHguaWQpLCAoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ09LJywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGluZGV4LmFkZE9iamVjdHMoYXNBcnJheS5maWx0ZXIoeCA9PiB4LnN0YXRlID09PSAnUFVCTElTSEVEJykubWFwKHggPT4gKHsgLi4ueCwgb2JqZWN0SUQ6IHguaWQgfSkpLCAoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ09LJywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXNvbHZlcnM6IHtcbiAgICBxdWVyaWVzOiB7XG4gICAgICBhbGdvbGlhOiAoc291cmNlLCB7IHRleHQgfSwgeyBhcHAsIGFsZ29saWEgfSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGFsZ29saWEuaW5pdEluZGV4KGFwcC5pZCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgaW5kZXguc2VhcmNoKHRleHQsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnQuaWQgPSB0ZXh0O1xuICAgICAgICAgICAgcmVzb2x2ZShjb250ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHNjaGVtYTogYFxuICAgIHR5cGUgQWxnb2xpYSB7XG4gICAgICBpZDogU3RyaW5nXG4gICAgICBuYkhpdHM6IEludFxuICAgICAgcGFnZTogSW50XG4gICAgICBuYlBhZ2VzOiBJbnRcbiAgICAgIGhpdHNQZXJQYWdlOiBJbnRcbiAgICAgIHByb2Nlc3NpbmdUaW1lTVM6IEludFxuICAgICAgZXhoYXVzdGl2ZU5iSGl0czogQm9vbGVhblxuICAgICAgcXVlcnk6IFN0cmluZyxcbiAgICAgIHBhcmFtczogU3RyaW5nXG4gICAgICBoaXRzOiBbQWxnb2xpYUhpdF1cbiAgICB9XG4gICAgdHlwZSBBbGdvbGlhSGl0IHtcbiAgICAgIGlkOiBTdHJpbmdcbiAgICAgIGltYWdlOiBJbWFnZVxuICAgICAgX3R5cGU6IFN0cmluZ1xuICAgICAgbmFtZTogU3RyaW5nXG4gICAgICB0YWdzOiBbU3RyaW5nXVxuICAgICAgc3RhdGU6IERPQ1VNRU5UX1NUQVRFXG4gICAgICBjcmVhdGVkQXQ6IERhdGVUaW1lXG4gICAgICBjcmVhdGVkQnk6IFVzZXJcbiAgICAgIHVwZGF0ZWRBdDogRGF0ZVRpbWVcbiAgICAgIHVwZGF0ZWRCeTogVXNlclxuICAgIH1cbiAgYCxcbn07XG4iXX0=
