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

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _deepDiff = require('deep-diff');

var _deepDiff2 = _interopRequireDefault(_deepDiff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchType = (0, _server.createTypeFetcher)(function (node, name) {
  return (0, _get3.default)(node, 'kind') === 'ObjectTypeDefinition' && (0, _get3.default)(node, 'name.value') === name;
});

exports.default = {
  name: 'collection',
  onBefore: function onBefore(_ref) {
    var keys = _ref.keys,
        variables = _ref.variables,
        context = _ref.context,
        resolverAST = _ref.resolverAST,
        ast = _ref.ast;

    if (keys[0] === 'RootMutation') {
      var typeName = (0, _get3.default)(resolverAST, 'returnType.name');
      var type = fetchType(ast, typeName);
      var directive = (0, _get3.default)(type, 'directives', []).find(function (d) {
        return (0, _get3.default)(d, 'name.value') === 'collection';
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

      var typeName = (0, _get3.default)(resolverAST, 'returnType.name');
      var type = fetchType(ast, typeName);
      var directive = (0, _get3.default)(type, 'directives', []).find(function (d) {
        return (0, _get3.default)(d, 'name.value') === 'collection';
      });
      if (type && directive && old !== undefined && !(0, _isArray3.default)(value)) {
        if (!old && !value) {
          return;
        }
        var appId = context && context.app && context.app.id;
        var userId = context && context.user && context.user.id;
        var id = _shortid2.default.generate();
        var diffe = (0, _deepDiff2.default)(old || {}, value) || [];
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3NlcnZlci9zY2hlbWEvY29sbGVjdGlvbi5lczYiXSwibmFtZXMiOlsiZmV0Y2hUeXBlIiwibm9kZSIsIm5hbWUiLCJvbkJlZm9yZSIsImtleXMiLCJ2YXJpYWJsZXMiLCJjb250ZXh0IiwicmVzb2x2ZXJBU1QiLCJhc3QiLCJ0eXBlTmFtZSIsInR5cGUiLCJkaXJlY3RpdmUiLCJmaW5kIiwiZCIsImlucHV0IiwiaWQiLCJ1bmRlZmluZWQiLCJ1c2VyIiwiZGIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsInRoZW4iLCJvbGQiLCJvbkFmdGVyIiwidmFsdWUiLCJhcHBJZCIsImFwcCIsInVzZXJJZCIsImdlbmVyYXRlIiwiZGlmZmUiLCJpbnNlcnRPbmUiLCJfdHlwZSIsInRhcmdldElkIiwiZGF0ZSIsIkRhdGUiLCJkaWZmIiwibWFwIiwieCIsImkiLCJxdWVyaWVzIiwicmVzb2x2ZXJzIiwiY2hhbmdlbG9nIiwic291cmNlIiwidG9BcnJheSIsInNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVksK0JBQ2hCLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLFNBQ0UsbUJBQUlELElBQUosRUFBVSxNQUFWLE1BQXNCLHNCQUF0QixJQUNBLG1CQUFJQSxJQUFKLEVBQVUsWUFBVixNQUE0QkMsSUFGOUI7QUFBQSxDQURnQixDQUFsQjs7a0JBTWU7QUFDYkEsUUFBTSxZQURPO0FBRWJDLFlBQVUsd0JBQW9EO0FBQUEsUUFBakRDLElBQWlELFFBQWpEQSxJQUFpRDtBQUFBLFFBQTNDQyxTQUEyQyxRQUEzQ0EsU0FBMkM7QUFBQSxRQUFoQ0MsT0FBZ0MsUUFBaENBLE9BQWdDO0FBQUEsUUFBdkJDLFdBQXVCLFFBQXZCQSxXQUF1QjtBQUFBLFFBQVZDLEdBQVUsUUFBVkEsR0FBVTs7QUFDNUQsUUFBSUosS0FBSyxDQUFMLE1BQVksY0FBaEIsRUFBZ0M7QUFDOUIsVUFBTUssV0FBVyxtQkFBSUYsV0FBSixFQUFpQixpQkFBakIsQ0FBakI7QUFDQSxVQUFNRyxPQUFPVixVQUFVUSxHQUFWLEVBQWVDLFFBQWYsQ0FBYjtBQUNBLFVBQU1FLFlBQVksbUJBQUlELElBQUosRUFBVSxZQUFWLEVBQXdCLEVBQXhCLEVBQTRCRSxJQUE1QixDQUNoQjtBQUFBLGVBQUssbUJBQUlDLENBQUosRUFBTyxZQUFQLE1BQXlCLFlBQTlCO0FBQUEsT0FEZ0IsQ0FBbEI7QUFHQSxVQUFJSCxRQUFRQyxTQUFaLEVBQXVCO0FBQUEsWUFDYkcsS0FEYSxHQUNDVCxTQURELENBQ2JTLEtBRGE7QUFBQSxZQUNOQyxFQURNLEdBQ0NWLFNBREQsQ0FDTlUsRUFETTs7QUFFckIsWUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVixpQkFBT0UsU0FBUDtBQUNEO0FBQ0QsWUFBTUMsT0FBT1gsV0FBV0EsUUFBUVcsSUFBaEM7QUFDQSxZQUFNQyxLQUFLWixXQUFXQSxRQUFRWSxFQUE5QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBLFlBQUlILEVBQUosRUFBUTtBQUNOLGlCQUFPRyxHQUNKQyxVQURJLENBQ08sTUFEUCxFQUVKQyxPQUZJLENBRUksRUFBRUwsTUFBRixFQUZKLEVBR0pNLElBSEksQ0FHQztBQUFBLGdDQUFhaEIsU0FBYixJQUF3QmlCLEtBQUtBLE9BQU8sSUFBcEM7QUFBQSxXQUhELENBQVA7QUFJRDtBQUNEO0FBQ0Q7QUFDRjtBQUNELFdBQU9OLFNBQVA7QUFDRCxHQXhDWTtBQXlDYk8sV0FBUyx3QkFBMkQ7QUFBQSxRQUF4RG5CLElBQXdELFNBQXhEQSxJQUF3RDtBQUFBLFFBQWxEb0IsS0FBa0QsU0FBbERBLEtBQWtEO0FBQUEsUUFBM0NuQixTQUEyQyxTQUEzQ0EsU0FBMkM7QUFBQSxRQUFoQ0MsT0FBZ0MsU0FBaENBLE9BQWdDO0FBQUEsUUFBdkJDLFdBQXVCLFNBQXZCQSxXQUF1QjtBQUFBLFFBQVZDLEdBQVUsU0FBVkEsR0FBVTs7QUFDbEUsUUFBSUosS0FBSyxDQUFMLE1BQVksY0FBaEIsRUFBZ0M7QUFBQSxVQUN0QmtCLEdBRHNCLEdBQ2RqQixTQURjLENBQ3RCaUIsR0FEc0I7O0FBRTlCLFVBQU1iLFdBQVcsbUJBQUlGLFdBQUosRUFBaUIsaUJBQWpCLENBQWpCO0FBQ0EsVUFBTUcsT0FBT1YsVUFBVVEsR0FBVixFQUFlQyxRQUFmLENBQWI7QUFDQSxVQUFNRSxZQUFZLG1CQUFJRCxJQUFKLEVBQVUsWUFBVixFQUF3QixFQUF4QixFQUE0QkUsSUFBNUIsQ0FDaEI7QUFBQSxlQUFLLG1CQUFJQyxDQUFKLEVBQU8sWUFBUCxNQUF5QixZQUE5QjtBQUFBLE9BRGdCLENBQWxCO0FBR0EsVUFBSUgsUUFBUUMsU0FBUixJQUFxQlcsUUFBUU4sU0FBN0IsSUFBMEMsQ0FBQyx1QkFBUVEsS0FBUixDQUEvQyxFQUErRDtBQUM3RCxZQUFJLENBQUNGLEdBQUQsSUFBUSxDQUFDRSxLQUFiLEVBQW9CO0FBQ2xCO0FBQ0Q7QUFDRCxZQUFNQyxRQUFRbkIsV0FBV0EsUUFBUW9CLEdBQW5CLElBQTBCcEIsUUFBUW9CLEdBQVIsQ0FBWVgsRUFBcEQ7QUFDQSxZQUFNWSxTQUFTckIsV0FBV0EsUUFBUVcsSUFBbkIsSUFBMkJYLFFBQVFXLElBQVIsQ0FBYUYsRUFBdkQ7QUFDQSxZQUFNQSxLQUFLLGtCQUFRYSxRQUFSLEVBQVg7QUFDQSxZQUFNQyxRQUFRLHdCQUFLUCxPQUFPLEVBQVosRUFBZ0JFLEtBQWhCLEtBQTBCLEVBQXhDO0FBQ0FsQixnQkFBUVksRUFBUixDQUFXQyxVQUFYLENBQXNCLFdBQXRCLEVBQW1DVyxTQUFuQyxDQUE2QztBQUMzQ2YsZ0JBRDJDO0FBRTNDTCxnQkFBTWMsTUFBTU8sS0FGK0I7QUFHM0NDLG9CQUFVUixNQUFNVCxFQUgyQjtBQUkzQ1Usc0JBSjJDO0FBSzNDRSx3QkFMMkM7QUFNM0NNLGdCQUFNLElBQUlDLElBQUosRUFOcUM7QUFPM0NDLGdCQUFNTixNQUFNTyxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZ0NBQ1hELENBRFc7QUFFZHRCLHVCQUFPQSxFQUFQLEdBQVl1QjtBQUZFO0FBQUEsV0FBVjtBQVBxQyxTQUE3QztBQVlBO0FBQ0Q7QUFDRjtBQUNGLEdBeEVZO0FBeUViQywwREF6RWE7QUE0RWJDLGFBQVc7QUFDVEQsYUFBUztBQUNQRSxpQkFBVyxtQkFBQ0MsTUFBRCxnQkFBdUM7QUFBQSxZQUE1QjNCLEVBQTRCLFNBQTVCQSxFQUE0QjtBQUFBLFlBQXBCRyxFQUFvQixTQUFwQkEsRUFBb0I7QUFBQSxZQUFoQlEsR0FBZ0IsU0FBaEJBLEdBQWdCO0FBQUEsWUFBWFQsSUFBVyxTQUFYQSxJQUFXOztBQUNoRCxZQUFJLENBQUNBLElBQUwsRUFBVztBQUNUO0FBQ0Q7QUFDRCxlQUFPQyxHQUFHQyxVQUFILENBQWMsV0FBZCxFQUEyQlAsSUFBM0IsQ0FBZ0MsRUFBRW9CLFVBQVVqQixFQUFaLEVBQWdCVSxPQUFPQyxJQUFJWCxFQUEzQixFQUFoQyxFQUFpRTRCLE9BQWpFLEVBQVA7QUFDRDtBQU5NO0FBREEsR0E1RUU7QUFzRmJDO0FBdEZhLEMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vc2VydmVyL3NjaGVtYS9jb2xsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0LCBpc0FycmF5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVR5cGVGZXRjaGVyIH0gZnJvbSAnb2x5bXAtZ3JhcGhxbC9zZXJ2ZXInO1xuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XG5pbXBvcnQgZGlmZiBmcm9tICdkZWVwLWRpZmYnO1xuXG5jb25zdCBmZXRjaFR5cGUgPSBjcmVhdGVUeXBlRmV0Y2hlcihcbiAgKG5vZGUsIG5hbWUpID0+XG4gICAgZ2V0KG5vZGUsICdraW5kJykgPT09ICdPYmplY3RUeXBlRGVmaW5pdGlvbicgJiZcbiAgICBnZXQobm9kZSwgJ25hbWUudmFsdWUnKSA9PT0gbmFtZSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbGxlY3Rpb24nLFxuICBvbkJlZm9yZTogKHsga2V5cywgdmFyaWFibGVzLCBjb250ZXh0LCByZXNvbHZlckFTVCwgYXN0IH0pID0+IHtcbiAgICBpZiAoa2V5c1swXSA9PT0gJ1Jvb3RNdXRhdGlvbicpIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gZ2V0KHJlc29sdmVyQVNULCAncmV0dXJuVHlwZS5uYW1lJyk7XG4gICAgICBjb25zdCB0eXBlID0gZmV0Y2hUeXBlKGFzdCwgdHlwZU5hbWUpO1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gZ2V0KHR5cGUsICdkaXJlY3RpdmVzJywgW10pLmZpbmQoXG4gICAgICAgIGQgPT4gZ2V0KGQsICduYW1lLnZhbHVlJykgPT09ICdjb2xsZWN0aW9uJyxcbiAgICAgICk7XG4gICAgICBpZiAodHlwZSAmJiBkaXJlY3RpdmUpIHtcbiAgICAgICAgY29uc3QgeyBpbnB1dCwgaWQgfSA9IHZhcmlhYmxlcztcbiAgICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXNlciA9IGNvbnRleHQgJiYgY29udGV4dC51c2VyO1xuICAgICAgICBjb25zdCBkYiA9IGNvbnRleHQgJiYgY29udGV4dC5kYjtcbiAgICAgICAgLyogaWYgKCF1c2VyKSB7XG4gICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdOb3QgYXV0aG9yaXplZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlTmFtZSA9PT0gJ1BhZ2UnICYmICF1c2VyLmlzQWRtaW4pIHtcbiAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhdXRob3JpemVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICF1c2VyLmlzQWRtaW4gJiZcbiAgICAgICAgICB1c2VyLm9yZ0lkICE9PSBpbnB1dC5vcmdJZCAmJlxuICAgICAgICAgIHVzZXIub3JnSWQgIT09IGlucHV0LmlkXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIHRocm93IG5ldyBFcnJvcignTm90IGF1dGhvcml6ZWQnKTtcbiAgICAgICAgfSAqL1xuXG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgIHJldHVybiBkYlxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2l0ZW0nKVxuICAgICAgICAgICAgLmZpbmRPbmUoeyBpZCB9KVxuICAgICAgICAgICAgLnRoZW4ob2xkID0+ICh7IC4uLnZhcmlhYmxlcywgb2xkOiBvbGQgfHwgbnVsbCB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKCF1c2VyLmlzQWRtaW4gJiYgKSB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhdXRob3JpemVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sXG4gIG9uQWZ0ZXI6ICh7IGtleXMsIHZhbHVlLCB2YXJpYWJsZXMsIGNvbnRleHQsIHJlc29sdmVyQVNULCBhc3QgfSkgPT4ge1xuICAgIGlmIChrZXlzWzBdID09PSAnUm9vdE11dGF0aW9uJykge1xuICAgICAgY29uc3QgeyBvbGQgfSA9IHZhcmlhYmxlcztcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gZ2V0KHJlc29sdmVyQVNULCAncmV0dXJuVHlwZS5uYW1lJyk7XG4gICAgICBjb25zdCB0eXBlID0gZmV0Y2hUeXBlKGFzdCwgdHlwZU5hbWUpO1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gZ2V0KHR5cGUsICdkaXJlY3RpdmVzJywgW10pLmZpbmQoXG4gICAgICAgIGQgPT4gZ2V0KGQsICduYW1lLnZhbHVlJykgPT09ICdjb2xsZWN0aW9uJyxcbiAgICAgICk7XG4gICAgICBpZiAodHlwZSAmJiBkaXJlY3RpdmUgJiYgb2xkICE9PSB1bmRlZmluZWQgJiYgIWlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmICghb2xkICYmICF2YWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcHBJZCA9IGNvbnRleHQgJiYgY29udGV4dC5hcHAgJiYgY29udGV4dC5hcHAuaWQ7XG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IGNvbnRleHQgJiYgY29udGV4dC51c2VyICYmIGNvbnRleHQudXNlci5pZDtcbiAgICAgICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XG4gICAgICAgIGNvbnN0IGRpZmZlID0gZGlmZihvbGQgfHwge30sIHZhbHVlKSB8fCBbXTtcbiAgICAgICAgY29udGV4dC5kYi5jb2xsZWN0aW9uKCdjaGFuZ2Vsb2cnKS5pbnNlcnRPbmUoe1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHR5cGU6IHZhbHVlLl90eXBlLFxuICAgICAgICAgIHRhcmdldElkOiB2YWx1ZS5pZCxcbiAgICAgICAgICBhcHBJZCxcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICBkaWZmOiBkaWZmZS5tYXAoKHgsIGkpID0+ICh7XG4gICAgICAgICAgICAuLi54LFxuICAgICAgICAgICAgaWQ6IGAke2lkfSR7aX1gLFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGlmICghdXNlci5pc0FkbWluICYmICkgdGhyb3cgbmV3IEVycm9yKCdOb3QgYXV0aG9yaXplZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcXVlcmllczogYFxuICAgIGNoYW5nZWxvZyhpZDogU3RyaW5nISk6IFtDaGFuZ2Vsb2ddXG4gIGAsXG4gIHJlc29sdmVyczoge1xuICAgIHF1ZXJpZXM6IHtcbiAgICAgIGNoYW5nZWxvZzogKHNvdXJjZSwgeyBpZCB9LCB7IGRiLCBhcHAsIHVzZXIgfSkgPT4ge1xuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oJ2NoYW5nZWxvZycpLmZpbmQoeyB0YXJnZXRJZDogaWQsIGFwcElkOiBhcHAuaWQgfSkudG9BcnJheSgpO1xuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBzY2hlbWE6IGBcbiAgICBlbnVtIERPQ1VNRU5UX1NUQVRFIHtcbiAgICAgIFBVQkxJU0hFRFxuICAgICAgRFJBRlRcbiAgICAgIFJFTU9WRURcbiAgICB9XG4gICAgZW51bSBNVVRBVElPTl9UWVBFIHtcbiAgICAgIFVQREFURVxuICAgICAgUkVQTEFDRVxuICAgICAgUkVNT1ZFXG4gICAgICBJTlNFUlRcbiAgICB9XG4gICAgZW51bSBTT1JUX0RJUkVDVElPTiB7XG4gICAgICBBU0MsXG4gICAgICBERVNDXG4gICAgfVxuICAgIGludGVyZmFjZSBDb2xsZWN0aW9uSW50ZXJmYWNlIHtcbiAgICAgIGlkOiBTdHJpbmdcbiAgICAgIG5hbWU6IFN0cmluZ1xuICAgICAgdGFnczogW1N0cmluZ11cbiAgICAgIHN0YXRlOiBET0NVTUVOVF9TVEFURVxuICAgICAgY3JlYXRlZEF0OiBEYXRlVGltZVxuICAgICAgY3JlYXRlZEJ5OiBVc2VyXG4gICAgICB1cGRhdGVkQXQ6IERhdGVUaW1lXG4gICAgICB1cGRhdGVkQnk6IFVzZXJcbiAgICB9XG4gICAgdHlwZSBDaGFuZ2Vsb2cge1xuICAgICAgaWQ6IFN0cmluZ1xuICAgICAgdGFyZ2V0SWQ6IFN0cmluZ1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB1c2VyOiBVc2VyIEByZWxhdGlvblxuICAgICAgZGF0ZTogRGF0ZVRpbWVcbiAgICAgIGRpZmY6IFtDaGFuZ2Vsb2dEaWZmXVxuICAgIH1cbiAgICB0eXBlIENoYW5nZWxvZ0RpZmYge1xuICAgICAgaWQ6IFN0cmluZ1xuICAgICAga2luZDogU3RyaW5nXG4gICAgICBwYXRoOiBbU3RyaW5nXVxuICAgICAgbGhzOiBKc29uXG4gICAgICByaHM6IEpzb25cbiAgICB9XG4gIGAsXG59O1xuIl19
