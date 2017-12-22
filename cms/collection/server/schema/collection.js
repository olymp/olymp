import _isArray from 'lodash/isArray';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { createTypeFetcher } from 'olymp-graphql/server';
import shortId from 'shortid';
import diff from 'deep-diff';

var fetchType = createTypeFetcher(function (node, name) {
  return _get(node, 'kind') === 'ObjectTypeDefinition' && _get(node, 'name.value') === name;
});

export default {
  name: 'collection',
  onBefore: function onBefore(_ref) {
    var keys = _ref.keys,
        variables = _ref.variables,
        context = _ref.context,
        resolverAST = _ref.resolverAST,
        ast = _ref.ast;

    if (keys[0] === 'RootMutation') {
      var typeName = _get(resolverAST, 'returnType.name');
      var type = fetchType(ast, typeName);
      var directive = _get(type, 'directives', []).find(function (d) {
        return _get(d, 'name.value') === 'collection';
      });
      if (type && directive) {
        var input = variables.input,
            id = variables.id;

        if (!input) {
          return undefined;
        }
        var user = context && context.user;
        var db = context && context.db;
        /* if (!user) {
          // throw new Error('Not authorized');
        }
        if (typeName === 'Page' && !user.isAdmin) {
          // throw new Error('Not authorized');
        }
        if (
          !user.isAdmin &&
          user.orgId !== input.orgId &&
          user.orgId !== input.id
        ) {
          // throw new Error('Not authorized');
        } */

        if (id) {
          return db.collection('item').findOne({ id: id }).then(function (old) {
            return _extends({}, variables, { old: old || null });
          });
        }
        // if (!user.isAdmin && ) throw new Error('Not authorized');
      }
    }
    return undefined;
  },
  onAfter: function onAfter(_ref2) {
    var keys = _ref2.keys,
        value = _ref2.value,
        variables = _ref2.variables,
        context = _ref2.context,
        resolverAST = _ref2.resolverAST,
        ast = _ref2.ast;

    if (keys[0] === 'RootMutation') {
      var old = variables.old;

      var typeName = _get(resolverAST, 'returnType.name');
      var type = fetchType(ast, typeName);
      var directive = _get(type, 'directives', []).find(function (d) {
        return _get(d, 'name.value') === 'collection';
      });
      if (type && directive && old !== undefined && !_isArray(value)) {
        if (!old && !value) {
          return;
        }
        var appId = context && context.app && context.app.id;
        var userId = context && context.user && context.user.id;
        var id = shortId.generate();
        var diffe = diff(old || {}, value) || [];
        context.db.collection('changelog').insertOne({
          id: id,
          type: value._type,
          targetId: value.id,
          appId: appId,
          userId: userId,
          date: new Date(),
          diff: diffe.map(function (x, i) {
            return _extends({}, x, {
              id: '' + id + i
            });
          })
        });
        // if (!user.isAdmin && ) throw new Error('Not authorized');
      }
    }
  },
  queries: '\n    changelog(id: String!): [Changelog]\n  ',
  resolvers: {
    queries: {
      changelog: function changelog(source, _ref3, _ref4) {
        var id = _ref3.id;
        var db = _ref4.db,
            app = _ref4.app,
            user = _ref4.user;

        if (!user) {
          return;
        }
        return db.collection('changelog').find({ targetId: id, appId: app.id }).toArray();
      }
    }
  },
  schema: '\n    enum DOCUMENT_STATE {\n      PUBLISHED\n      DRAFT\n      REMOVED\n    }\n    enum MUTATION_TYPE {\n      UPDATE\n      REPLACE\n      REMOVE\n      INSERT\n    }\n    enum SORT_DIRECTION {\n      ASC,\n      DESC\n    }\n    interface CollectionInterface {\n      id: String\n      name: String\n      tags: [String]\n      state: DOCUMENT_STATE\n      createdAt: DateTime\n      createdBy: User\n      updatedAt: DateTime\n      updatedBy: User\n    }\n    type Changelog {\n      id: String\n      targetId: String\n      type: String\n      user: User @relation\n      date: DateTime\n      diff: [ChangelogDiff]\n    }\n    type ChangelogDiff {\n      id: String\n      kind: String\n      path: [String]\n      lhs: Json\n      rhs: Json\n    }\n  '
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vc2VydmVyL3NjaGVtYS9jb2xsZWN0aW9uLmVzNiJdLCJuYW1lcyI6WyJjcmVhdGVUeXBlRmV0Y2hlciIsInNob3J0SWQiLCJkaWZmIiwiZmV0Y2hUeXBlIiwibm9kZSIsIm5hbWUiLCJvbkJlZm9yZSIsImtleXMiLCJ2YXJpYWJsZXMiLCJjb250ZXh0IiwicmVzb2x2ZXJBU1QiLCJhc3QiLCJ0eXBlTmFtZSIsInR5cGUiLCJkaXJlY3RpdmUiLCJmaW5kIiwiZCIsImlucHV0IiwiaWQiLCJ1bmRlZmluZWQiLCJ1c2VyIiwiZGIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsInRoZW4iLCJvbGQiLCJvbkFmdGVyIiwidmFsdWUiLCJhcHBJZCIsImFwcCIsInVzZXJJZCIsImdlbmVyYXRlIiwiZGlmZmUiLCJpbnNlcnRPbmUiLCJfdHlwZSIsInRhcmdldElkIiwiZGF0ZSIsIkRhdGUiLCJtYXAiLCJ4IiwiaSIsInF1ZXJpZXMiLCJyZXNvbHZlcnMiLCJjaGFuZ2Vsb2ciLCJzb3VyY2UiLCJ0b0FycmF5Iiwic2NoZW1hIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBLFNBQVNBLGlCQUFULFFBQWtDLHNCQUFsQztBQUNBLE9BQU9DLE9BQVAsTUFBb0IsU0FBcEI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFdBQWpCOztBQUVBLElBQU1DLFlBQVlILGtCQUNoQixVQUFDSSxJQUFELEVBQU9DLElBQVA7QUFBQSxTQUNFLEtBQUlELElBQUosRUFBVSxNQUFWLE1BQXNCLHNCQUF0QixJQUNBLEtBQUlBLElBQUosRUFBVSxZQUFWLE1BQTRCQyxJQUY5QjtBQUFBLENBRGdCLENBQWxCOztBQU1BLGVBQWU7QUFDYkEsUUFBTSxZQURPO0FBRWJDLFlBQVUsd0JBQW9EO0FBQUEsUUFBakRDLElBQWlELFFBQWpEQSxJQUFpRDtBQUFBLFFBQTNDQyxTQUEyQyxRQUEzQ0EsU0FBMkM7QUFBQSxRQUFoQ0MsT0FBZ0MsUUFBaENBLE9BQWdDO0FBQUEsUUFBdkJDLFdBQXVCLFFBQXZCQSxXQUF1QjtBQUFBLFFBQVZDLEdBQVUsUUFBVkEsR0FBVTs7QUFDNUQsUUFBSUosS0FBSyxDQUFMLE1BQVksY0FBaEIsRUFBZ0M7QUFDOUIsVUFBTUssV0FBVyxLQUFJRixXQUFKLEVBQWlCLGlCQUFqQixDQUFqQjtBQUNBLFVBQU1HLE9BQU9WLFVBQVVRLEdBQVYsRUFBZUMsUUFBZixDQUFiO0FBQ0EsVUFBTUUsWUFBWSxLQUFJRCxJQUFKLEVBQVUsWUFBVixFQUF3QixFQUF4QixFQUE0QkUsSUFBNUIsQ0FDaEI7QUFBQSxlQUFLLEtBQUlDLENBQUosRUFBTyxZQUFQLE1BQXlCLFlBQTlCO0FBQUEsT0FEZ0IsQ0FBbEI7QUFHQSxVQUFJSCxRQUFRQyxTQUFaLEVBQXVCO0FBQUEsWUFDYkcsS0FEYSxHQUNDVCxTQURELENBQ2JTLEtBRGE7QUFBQSxZQUNOQyxFQURNLEdBQ0NWLFNBREQsQ0FDTlUsRUFETTs7QUFFckIsWUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVixpQkFBT0UsU0FBUDtBQUNEO0FBQ0QsWUFBTUMsT0FBT1gsV0FBV0EsUUFBUVcsSUFBaEM7QUFDQSxZQUFNQyxLQUFLWixXQUFXQSxRQUFRWSxFQUE5QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBLFlBQUlILEVBQUosRUFBUTtBQUNOLGlCQUFPRyxHQUNKQyxVQURJLENBQ08sTUFEUCxFQUVKQyxPQUZJLENBRUksRUFBRUwsTUFBRixFQUZKLEVBR0pNLElBSEksQ0FHQztBQUFBLGdDQUFhaEIsU0FBYixJQUF3QmlCLEtBQUtBLE9BQU8sSUFBcEM7QUFBQSxXQUhELENBQVA7QUFJRDtBQUNEO0FBQ0Q7QUFDRjtBQUNELFdBQU9OLFNBQVA7QUFDRCxHQXhDWTtBQXlDYk8sV0FBUyx3QkFBMkQ7QUFBQSxRQUF4RG5CLElBQXdELFNBQXhEQSxJQUF3RDtBQUFBLFFBQWxEb0IsS0FBa0QsU0FBbERBLEtBQWtEO0FBQUEsUUFBM0NuQixTQUEyQyxTQUEzQ0EsU0FBMkM7QUFBQSxRQUFoQ0MsT0FBZ0MsU0FBaENBLE9BQWdDO0FBQUEsUUFBdkJDLFdBQXVCLFNBQXZCQSxXQUF1QjtBQUFBLFFBQVZDLEdBQVUsU0FBVkEsR0FBVTs7QUFDbEUsUUFBSUosS0FBSyxDQUFMLE1BQVksY0FBaEIsRUFBZ0M7QUFBQSxVQUN0QmtCLEdBRHNCLEdBQ2RqQixTQURjLENBQ3RCaUIsR0FEc0I7O0FBRTlCLFVBQU1iLFdBQVcsS0FBSUYsV0FBSixFQUFpQixpQkFBakIsQ0FBakI7QUFDQSxVQUFNRyxPQUFPVixVQUFVUSxHQUFWLEVBQWVDLFFBQWYsQ0FBYjtBQUNBLFVBQU1FLFlBQVksS0FBSUQsSUFBSixFQUFVLFlBQVYsRUFBd0IsRUFBeEIsRUFBNEJFLElBQTVCLENBQ2hCO0FBQUEsZUFBSyxLQUFJQyxDQUFKLEVBQU8sWUFBUCxNQUF5QixZQUE5QjtBQUFBLE9BRGdCLENBQWxCO0FBR0EsVUFBSUgsUUFBUUMsU0FBUixJQUFxQlcsUUFBUU4sU0FBN0IsSUFBMEMsQ0FBQyxTQUFRUSxLQUFSLENBQS9DLEVBQStEO0FBQzdELFlBQUksQ0FBQ0YsR0FBRCxJQUFRLENBQUNFLEtBQWIsRUFBb0I7QUFDbEI7QUFDRDtBQUNELFlBQU1DLFFBQVFuQixXQUFXQSxRQUFRb0IsR0FBbkIsSUFBMEJwQixRQUFRb0IsR0FBUixDQUFZWCxFQUFwRDtBQUNBLFlBQU1ZLFNBQVNyQixXQUFXQSxRQUFRVyxJQUFuQixJQUEyQlgsUUFBUVcsSUFBUixDQUFhRixFQUF2RDtBQUNBLFlBQU1BLEtBQUtqQixRQUFROEIsUUFBUixFQUFYO0FBQ0EsWUFBTUMsUUFBUTlCLEtBQUt1QixPQUFPLEVBQVosRUFBZ0JFLEtBQWhCLEtBQTBCLEVBQXhDO0FBQ0FsQixnQkFBUVksRUFBUixDQUFXQyxVQUFYLENBQXNCLFdBQXRCLEVBQW1DVyxTQUFuQyxDQUE2QztBQUMzQ2YsZ0JBRDJDO0FBRTNDTCxnQkFBTWMsTUFBTU8sS0FGK0I7QUFHM0NDLG9CQUFVUixNQUFNVCxFQUgyQjtBQUkzQ1Usc0JBSjJDO0FBSzNDRSx3QkFMMkM7QUFNM0NNLGdCQUFNLElBQUlDLElBQUosRUFOcUM7QUFPM0NuQyxnQkFBTThCLE1BQU1NLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxnQ0FDWEQsQ0FEVztBQUVkckIsdUJBQU9BLEVBQVAsR0FBWXNCO0FBRkU7QUFBQSxXQUFWO0FBUHFDLFNBQTdDO0FBWUE7QUFDRDtBQUNGO0FBQ0YsR0F4RVk7QUF5RWJDLDBEQXpFYTtBQTRFYkMsYUFBVztBQUNURCxhQUFTO0FBQ1BFLGlCQUFXLG1CQUFDQyxNQUFELGdCQUF1QztBQUFBLFlBQTVCMUIsRUFBNEIsU0FBNUJBLEVBQTRCO0FBQUEsWUFBcEJHLEVBQW9CLFNBQXBCQSxFQUFvQjtBQUFBLFlBQWhCUSxHQUFnQixTQUFoQkEsR0FBZ0I7QUFBQSxZQUFYVCxJQUFXLFNBQVhBLElBQVc7O0FBQ2hELFlBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1Q7QUFDRDtBQUNELGVBQU9DLEdBQUdDLFVBQUgsQ0FBYyxXQUFkLEVBQTJCUCxJQUEzQixDQUFnQyxFQUFFb0IsVUFBVWpCLEVBQVosRUFBZ0JVLE9BQU9DLElBQUlYLEVBQTNCLEVBQWhDLEVBQWlFMkIsT0FBakUsRUFBUDtBQUNEO0FBTk07QUFEQSxHQTVFRTtBQXNGYkM7QUF0RmEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL3NlcnZlci9zY2hlbWEvY29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCwgaXNBcnJheSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjcmVhdGVUeXBlRmV0Y2hlciB9IGZyb20gJ29seW1wLWdyYXBocWwvc2VydmVyJztcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xuaW1wb3J0IGRpZmYgZnJvbSAnZGVlcC1kaWZmJztcblxuY29uc3QgZmV0Y2hUeXBlID0gY3JlYXRlVHlwZUZldGNoZXIoXG4gIChub2RlLCBuYW1lKSA9PlxuICAgIGdldChub2RlLCAna2luZCcpID09PSAnT2JqZWN0VHlwZURlZmluaXRpb24nICYmXG4gICAgZ2V0KG5vZGUsICduYW1lLnZhbHVlJykgPT09IG5hbWUsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdjb2xsZWN0aW9uJyxcbiAgb25CZWZvcmU6ICh7IGtleXMsIHZhcmlhYmxlcywgY29udGV4dCwgcmVzb2x2ZXJBU1QsIGFzdCB9KSA9PiB7XG4gICAgaWYgKGtleXNbMF0gPT09ICdSb290TXV0YXRpb24nKSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IGdldChyZXNvbHZlckFTVCwgJ3JldHVyblR5cGUubmFtZScpO1xuICAgICAgY29uc3QgdHlwZSA9IGZldGNoVHlwZShhc3QsIHR5cGVOYW1lKTtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGdldCh0eXBlLCAnZGlyZWN0aXZlcycsIFtdKS5maW5kKFxuICAgICAgICBkID0+IGdldChkLCAnbmFtZS52YWx1ZScpID09PSAnY29sbGVjdGlvbicsXG4gICAgICApO1xuICAgICAgaWYgKHR5cGUgJiYgZGlyZWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHsgaW5wdXQsIGlkIH0gPSB2YXJpYWJsZXM7XG4gICAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVzZXIgPSBjb250ZXh0ICYmIGNvbnRleHQudXNlcjtcbiAgICAgICAgY29uc3QgZGIgPSBjb250ZXh0ICYmIGNvbnRleHQuZGI7XG4gICAgICAgIC8qIGlmICghdXNlcikge1xuICAgICAgICAgIC8vIHRocm93IG5ldyBFcnJvcignTm90IGF1dGhvcml6ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZU5hbWUgPT09ICdQYWdlJyAmJiAhdXNlci5pc0FkbWluKSB7XG4gICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdOb3QgYXV0aG9yaXplZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdXNlci5pc0FkbWluICYmXG4gICAgICAgICAgdXNlci5vcmdJZCAhPT0gaW5wdXQub3JnSWQgJiZcbiAgICAgICAgICB1c2VyLm9yZ0lkICE9PSBpbnB1dC5pZFxuICAgICAgICApIHtcbiAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhdXRob3JpemVkJyk7XG4gICAgICAgIH0gKi9cblxuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICByZXR1cm4gZGJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpdGVtJylcbiAgICAgICAgICAgIC5maW5kT25lKHsgaWQgfSlcbiAgICAgICAgICAgIC50aGVuKG9sZCA9PiAoeyAuLi52YXJpYWJsZXMsIG9sZDogb2xkIHx8IG51bGwgfSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmICghdXNlci5pc0FkbWluICYmICkgdGhyb3cgbmV3IEVycm9yKCdOb3QgYXV0aG9yaXplZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LFxuICBvbkFmdGVyOiAoeyBrZXlzLCB2YWx1ZSwgdmFyaWFibGVzLCBjb250ZXh0LCByZXNvbHZlckFTVCwgYXN0IH0pID0+IHtcbiAgICBpZiAoa2V5c1swXSA9PT0gJ1Jvb3RNdXRhdGlvbicpIHtcbiAgICAgIGNvbnN0IHsgb2xkIH0gPSB2YXJpYWJsZXM7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IGdldChyZXNvbHZlckFTVCwgJ3JldHVyblR5cGUubmFtZScpO1xuICAgICAgY29uc3QgdHlwZSA9IGZldGNoVHlwZShhc3QsIHR5cGVOYW1lKTtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGdldCh0eXBlLCAnZGlyZWN0aXZlcycsIFtdKS5maW5kKFxuICAgICAgICBkID0+IGdldChkLCAnbmFtZS52YWx1ZScpID09PSAnY29sbGVjdGlvbicsXG4gICAgICApO1xuICAgICAgaWYgKHR5cGUgJiYgZGlyZWN0aXZlICYmIG9sZCAhPT0gdW5kZWZpbmVkICYmICFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoIW9sZCAmJiAhdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXBwSWQgPSBjb250ZXh0ICYmIGNvbnRleHQuYXBwICYmIGNvbnRleHQuYXBwLmlkO1xuICAgICAgICBjb25zdCB1c2VySWQgPSBjb250ZXh0ICYmIGNvbnRleHQudXNlciAmJiBjb250ZXh0LnVzZXIuaWQ7XG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xuICAgICAgICBjb25zdCBkaWZmZSA9IGRpZmYob2xkIHx8IHt9LCB2YWx1ZSkgfHwgW107XG4gICAgICAgIGNvbnRleHQuZGIuY29sbGVjdGlvbignY2hhbmdlbG9nJykuaW5zZXJ0T25lKHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB0eXBlOiB2YWx1ZS5fdHlwZSxcbiAgICAgICAgICB0YXJnZXRJZDogdmFsdWUuaWQsXG4gICAgICAgICAgYXBwSWQsXG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgZGlmZjogZGlmZmUubWFwKCh4LCBpKSA9PiAoe1xuICAgICAgICAgICAgLi4ueCxcbiAgICAgICAgICAgIGlkOiBgJHtpZH0ke2l9YCxcbiAgICAgICAgICB9KSksXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiAoIXVzZXIuaXNBZG1pbiAmJiApIHRocm93IG5ldyBFcnJvcignTm90IGF1dGhvcml6ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHF1ZXJpZXM6IGBcbiAgICBjaGFuZ2Vsb2coaWQ6IFN0cmluZyEpOiBbQ2hhbmdlbG9nXVxuICBgLFxuICByZXNvbHZlcnM6IHtcbiAgICBxdWVyaWVzOiB7XG4gICAgICBjaGFuZ2Vsb2c6IChzb3VyY2UsIHsgaWQgfSwgeyBkYiwgYXBwLCB1c2VyIH0pID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKCdjaGFuZ2Vsb2cnKS5maW5kKHsgdGFyZ2V0SWQ6IGlkLCBhcHBJZDogYXBwLmlkIH0pLnRvQXJyYXkoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc2NoZW1hOiBgXG4gICAgZW51bSBET0NVTUVOVF9TVEFURSB7XG4gICAgICBQVUJMSVNIRURcbiAgICAgIERSQUZUXG4gICAgICBSRU1PVkVEXG4gICAgfVxuICAgIGVudW0gTVVUQVRJT05fVFlQRSB7XG4gICAgICBVUERBVEVcbiAgICAgIFJFUExBQ0VcbiAgICAgIFJFTU9WRVxuICAgICAgSU5TRVJUXG4gICAgfVxuICAgIGVudW0gU09SVF9ESVJFQ1RJT04ge1xuICAgICAgQVNDLFxuICAgICAgREVTQ1xuICAgIH1cbiAgICBpbnRlcmZhY2UgQ29sbGVjdGlvbkludGVyZmFjZSB7XG4gICAgICBpZDogU3RyaW5nXG4gICAgICBuYW1lOiBTdHJpbmdcbiAgICAgIHRhZ3M6IFtTdHJpbmddXG4gICAgICBzdGF0ZTogRE9DVU1FTlRfU1RBVEVcbiAgICAgIGNyZWF0ZWRBdDogRGF0ZVRpbWVcbiAgICAgIGNyZWF0ZWRCeTogVXNlclxuICAgICAgdXBkYXRlZEF0OiBEYXRlVGltZVxuICAgICAgdXBkYXRlZEJ5OiBVc2VyXG4gICAgfVxuICAgIHR5cGUgQ2hhbmdlbG9nIHtcbiAgICAgIGlkOiBTdHJpbmdcbiAgICAgIHRhcmdldElkOiBTdHJpbmdcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgdXNlcjogVXNlciBAcmVsYXRpb25cbiAgICAgIGRhdGU6IERhdGVUaW1lXG4gICAgICBkaWZmOiBbQ2hhbmdlbG9nRGlmZl1cbiAgICB9XG4gICAgdHlwZSBDaGFuZ2Vsb2dEaWZmIHtcbiAgICAgIGlkOiBTdHJpbmdcbiAgICAgIGtpbmQ6IFN0cmluZ1xuICAgICAgcGF0aDogW1N0cmluZ11cbiAgICAgIGxoczogSnNvblxuICAgICAgcmhzOiBKc29uXG4gICAgfVxuICBgLFxufTtcbiJdfQ==
