'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('olymp-graphql/server'),
    addFields = _require.addFields,
    addArguments = _require.addArguments,
    createTypeFetcher = _require.createTypeFetcher;

var _require2 = require('lodash'),
    get = _require2.get,
    set = _require2.set,
    lowerFirst = _require2.lowerFirst;

exports.default = {
  // aggregation
  name: 'relation',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter: function enter(node, directive, _ref) {
      var resolvers = _ref.resolvers,
          parent = _ref.parent,
          ancestors = _ref.ancestors,
          ast = _ref.ast;

      var isList = node.type.kind === 'ListType';
      var type = isList ? node.type.type : node.type;

      var argProperty = directive.arguments.length && directive.arguments.find(function (x) {
        return x.name.value === 'property';
      });
      var argRelationType = directive.arguments.length && directive.arguments.find(function (x) {
        return x.name.value === 'type';
      });
      var relationType = get(argRelationType, 'value.value', isList ? '1-n' : '1-1');

      var leftType = ancestors[ancestors.length - 1].name.value;
      var leftTable = ancestors[ancestors.length - 1].name.value.toLowerCase();
      var leftField = node.name.value;
      var leftNode = parent;
      var rightType = type.name.value;
      var rightTable = type.name.value.toLowerCase();
      var rightField = get(argProperty, 'value.value') || lowerFirst(leftTable);
      var rightNode = createTypeFetcher(function (node) {
        return get(node, 'name.value') === rightType && get(node, 'kind') === 'ObjectTypeDefinition';
      })(ast);

      // one-to-one / one-to-many
      // Only add xxxId field to store/access the id
      if (relationType === '1-1') {
        addFields(ast, leftNode, leftField + 'Id: String');
        if (rightType === 'User') {
          set(resolvers, leftType + '.' + leftField, function (source, args, _ref2) {
            var db = _ref2.db;
            return db.collection(rightTable).findOne({
              id: source[leftField + 'Id']
            });
          });
        } else {
          set(resolvers, leftType + '.' + leftField, function (source, args, _ref3) {
            var db = _ref3.db;
            return db.collection('item').findOne({
              id: source[leftField + 'Id'],
              _type: rightTable
            });
          });
        }
      } else if (relationType === 'embedsMany') {
        addFields(ast, leftNode, leftField + 'Ids: [String]');
        set(resolvers, leftType + '.' + leftField, function (source, args, _ref4) {
          var db = _ref4.db;
          return source[leftField + 'Ids'] && db.collection('item').find({
            id: { $in: source[leftField + 'Ids'] || [] },
            _type: rightTable
          }).toArray();
        });
      } else if (relationType === '1-n') {
        // Add list accessor and xxxIds field since dealing with many
        // addInputTypes(rightTable, ast);
        /* addArguments(
          ast,
          node,
          `query: ${rightType}Query, sort: ${rightType}Sort, limit: Int, skip: Int`
        ); */
        addFields(ast, leftNode, leftField + 'Id: String');
        if (rightType === 'User') {
          set(resolvers, leftType + '.' + leftField, function (source, args, _ref5) {
            var db = _ref5.db;
            return db.collection(rightTable).findOne({
              id: source[leftField + 'Id']
            });
          });
        } else {
          set(resolvers, leftType + '.' + leftField, function (source, args, _ref6) {
            var db = _ref6.db;
            return db.collection('item').findOne({
              id: source[leftField + 'Id'],
              _type: rightTable
            });
          });
        }
        addFields(ast, rightNode, rightField + ': [' + leftType + ']');
        set(resolvers, rightType + '.' + rightField, function (source, args, _ref7) {
          var _db$collection$find;

          var db = _ref7.db;
          return db.collection('item').find((_db$collection$find = {}, _defineProperty(_db$collection$find, leftField + 'Id', source.id), _defineProperty(_db$collection$find, '_type', leftTable), _db$collection$find)).toArray();
        });
      }

      /* if (rightField) {
        const rightNode = ast.definitions.find(
          x => x.name && x.name.value === node.type.name.value
        );
         if (relationType === '1-n') {
          addFields(ast, rightNode, `${rightField}: [${leftType}]`);
          set(resolvers, `${rightType}.${rightField}`, (source, args, { db }) =>
            db.collection(leftTable).find({}).toArray()
          );
        } else if (relationType === '1-1') {
          addFields(ast, rightNode, `${rightField}: ${leftType}`);
          set(resolvers, `${rightType}.${rightField}`, (source, args, { db }) =>
            db.collection(leftTable).findOne({})
          );
        }
      } */
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3NlcnZlci9kaXJlY3RpdmVzL3JlbGF0aW9uLmVzNiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiYWRkRmllbGRzIiwiYWRkQXJndW1lbnRzIiwiY3JlYXRlVHlwZUZldGNoZXIiLCJnZXQiLCJzZXQiLCJsb3dlckZpcnN0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwicmVzb2x2ZVN0YXRpYyIsImVudGVyIiwibm9kZSIsImRpcmVjdGl2ZSIsInJlc29sdmVycyIsInBhcmVudCIsImFuY2VzdG9ycyIsImFzdCIsImlzTGlzdCIsInR5cGUiLCJraW5kIiwiYXJnUHJvcGVydHkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaW5kIiwieCIsInZhbHVlIiwiYXJnUmVsYXRpb25UeXBlIiwicmVsYXRpb25UeXBlIiwibGVmdFR5cGUiLCJsZWZ0VGFibGUiLCJ0b0xvd2VyQ2FzZSIsImxlZnRGaWVsZCIsImxlZnROb2RlIiwicmlnaHRUeXBlIiwicmlnaHRUYWJsZSIsInJpZ2h0RmllbGQiLCJyaWdodE5vZGUiLCJzb3VyY2UiLCJhcmdzIiwiZGIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsImlkIiwiX3R5cGUiLCIkaW4iLCJ0b0FycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztlQUlJQSxRQUFRLHNCQUFSLEM7SUFIRkMsUyxZQUFBQSxTO0lBQ0FDLFksWUFBQUEsWTtJQUNBQyxpQixZQUFBQSxpQjs7Z0JBRStCSCxRQUFRLFFBQVIsQztJQUF6QkksRyxhQUFBQSxHO0lBQUtDLEcsYUFBQUEsRztJQUFLQyxVLGFBQUFBLFU7O2tCQUVIO0FBQ2I7QUFDQUMsUUFBTSxVQUZPO0FBR2JDLGVBQWEsNkJBSEE7QUFJYkMsaUJBQWU7QUFDYkMsU0FEYSxpQkFDUEMsSUFETyxFQUNEQyxTQURDLFFBQ2lEO0FBQUEsVUFBckNDLFNBQXFDLFFBQXJDQSxTQUFxQztBQUFBLFVBQTFCQyxNQUEwQixRQUExQkEsTUFBMEI7QUFBQSxVQUFsQkMsU0FBa0IsUUFB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QUFELEVBQVNDLElBQVQ7QUFBQTs7QUFBQSxjQUFpQkMsRUFBakIsU0FBaUJBLEVBQWpCO0FBQUEsaUJBQzNDQSxHQUNHQyxVQURILENBQ2MsTUFEZCxFQUVHakIsSUFGSCxpRUFHUVEsU0FIUixTQUd3Qk0sT0FBT0ssRUFIL0IsaURBSVdiLFNBSlgseUJBTUdnQixPQU5ILEVBRDJDO0FBQUEsU0FBN0M7QUFTRDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OztBQWlCRDtBQXRIWTtBQUpGLEMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vc2VydmVyL2RpcmVjdGl2ZXMvcmVsYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XG4gIGFkZEZpZWxkcyxcbiAgYWRkQXJndW1lbnRzLFxuICBjcmVhdGVUeXBlRmV0Y2hlcixcbn0gPSByZXF1aXJlKCdvbHltcC1ncmFwaHFsL3NlcnZlcicpO1xuY29uc3QgeyBnZXQsIHNldCwgbG93ZXJGaXJzdCB9ID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gYWdncmVnYXRpb25cbiAgbmFtZTogJ3JlbGF0aW9uJyxcbiAgZGVzY3JpcHRpb246ICdNYXJrcyBhIHR5cGUgYXMgYSByZWxhdGl2ZS4nLFxuICByZXNvbHZlU3RhdGljOiB7XG4gICAgZW50ZXIobm9kZSwgZGlyZWN0aXZlLCB7IHJlc29sdmVycywgcGFyZW50LCBhbmNlc3RvcnMsIGFzdCB9KSB7XG4gICAgICBjb25zdCBpc0xpc3QgPSBub2RlLnR5cGUua2luZCA9PT0gJ0xpc3RUeXBlJztcbiAgICAgIGNvbnN0IHR5cGUgPSBpc0xpc3QgPyBub2RlLnR5cGUudHlwZSA6IG5vZGUudHlwZTtcblxuICAgICAgY29uc3QgYXJnUHJvcGVydHkgPVxuICAgICAgICBkaXJlY3RpdmUuYXJndW1lbnRzLmxlbmd0aCAmJlxuICAgICAgICBkaXJlY3RpdmUuYXJndW1lbnRzLmZpbmQoeCA9PiB4Lm5hbWUudmFsdWUgPT09ICdwcm9wZXJ0eScpO1xuICAgICAgY29uc3QgYXJnUmVsYXRpb25UeXBlID1cbiAgICAgICAgZGlyZWN0aXZlLmFyZ3VtZW50cy5sZW5ndGggJiZcbiAgICAgICAgZGlyZWN0aXZlLmFyZ3VtZW50cy5maW5kKHggPT4geC5uYW1lLnZhbHVlID09PSAndHlwZScpO1xuICAgICAgY29uc3QgcmVsYXRpb25UeXBlID0gZ2V0KFxuICAgICAgICBhcmdSZWxhdGlvblR5cGUsXG4gICAgICAgICd2YWx1ZS52YWx1ZScsXG4gICAgICAgIGlzTGlzdCA/ICcxLW4nIDogJzEtMScsXG4gICAgICApO1xuXG4gICAgICBjb25zdCBsZWZ0VHlwZSA9IGFuY2VzdG9yc1thbmNlc3RvcnMubGVuZ3RoIC0gMV0ubmFtZS52YWx1ZTtcbiAgICAgIGNvbnN0IGxlZnRUYWJsZSA9IGFuY2VzdG9yc1tcbiAgICAgICAgYW5jZXN0b3JzLmxlbmd0aCAtIDFcbiAgICAgIF0ubmFtZS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgbGVmdEZpZWxkID0gbm9kZS5uYW1lLnZhbHVlO1xuICAgICAgY29uc3QgbGVmdE5vZGUgPSBwYXJlbnQ7XG4gICAgICBjb25zdCByaWdodFR5cGUgPSB0eXBlLm5hbWUudmFsdWU7XG4gICAgICBjb25zdCByaWdodFRhYmxlID0gdHlwZS5uYW1lLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCByaWdodEZpZWxkID1cbiAgICAgICAgZ2V0KGFyZ1Byb3BlcnR5LCAndmFsdWUudmFsdWUnKSB8fCBsb3dlckZpcnN0KGxlZnRUYWJsZSk7XG4gICAgICBjb25zdCByaWdodE5vZGUgPSBjcmVhdGVUeXBlRmV0Y2hlcihcbiAgICAgICAgbm9kZSA9PlxuICAgICAgICAgIGdldChub2RlLCAnbmFtZS52YWx1ZScpID09PSByaWdodFR5cGUgJiZcbiAgICAgICAgICBnZXQobm9kZSwgJ2tpbmQnKSA9PT0gJ09iamVjdFR5cGVEZWZpbml0aW9uJyxcbiAgICAgICkoYXN0KTtcblxuICAgICAgLy8gb25lLXRvLW9uZSAvIG9uZS10by1tYW55XG4gICAgICAvLyBPbmx5IGFkZCB4eHhJZCBmaWVsZCB0byBzdG9yZS9hY2Nlc3MgdGhlIGlkXG4gICAgICBpZiAocmVsYXRpb25UeXBlID09PSAnMS0xJykge1xuICAgICAgICBhZGRGaWVsZHMoYXN0LCBsZWZ0Tm9kZSwgYCR7bGVmdEZpZWxkfUlkOiBTdHJpbmdgKTtcbiAgICAgICAgaWYgKHJpZ2h0VHlwZSA9PT0gJ1VzZXInKSB7XG4gICAgICAgICAgc2V0KHJlc29sdmVycywgYCR7bGVmdFR5cGV9LiR7bGVmdEZpZWxkfWAsIChzb3VyY2UsIGFyZ3MsIHsgZGIgfSkgPT5cbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24ocmlnaHRUYWJsZSkuZmluZE9uZSh7XG4gICAgICAgICAgICAgIGlkOiBzb3VyY2VbYCR7bGVmdEZpZWxkfUlkYF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldChyZXNvbHZlcnMsIGAke2xlZnRUeXBlfS4ke2xlZnRGaWVsZH1gLCAoc291cmNlLCBhcmdzLCB7IGRiIH0pID0+XG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKCdpdGVtJykuZmluZE9uZSh7XG4gICAgICAgICAgICAgIGlkOiBzb3VyY2VbYCR7bGVmdEZpZWxkfUlkYF0sXG4gICAgICAgICAgICAgIF90eXBlOiByaWdodFRhYmxlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyZWxhdGlvblR5cGUgPT09ICdlbWJlZHNNYW55Jykge1xuICAgICAgICBhZGRGaWVsZHMoYXN0LCBsZWZ0Tm9kZSwgYCR7bGVmdEZpZWxkfUlkczogW1N0cmluZ11gKTtcbiAgICAgICAgc2V0KFxuICAgICAgICAgIHJlc29sdmVycyxcbiAgICAgICAgICBgJHtsZWZ0VHlwZX0uJHtsZWZ0RmllbGR9YCxcbiAgICAgICAgICAoc291cmNlLCBhcmdzLCB7IGRiIH0pID0+XG4gICAgICAgICAgICBzb3VyY2VbYCR7bGVmdEZpZWxkfUlkc2BdICYmXG4gICAgICAgICAgICBkYlxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignaXRlbScpXG4gICAgICAgICAgICAgIC5maW5kKHtcbiAgICAgICAgICAgICAgICBpZDogeyAkaW46IHNvdXJjZVtgJHtsZWZ0RmllbGR9SWRzYF0gfHwgW10gfSxcbiAgICAgICAgICAgICAgICBfdHlwZTogcmlnaHRUYWJsZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRvQXJyYXkoKSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAocmVsYXRpb25UeXBlID09PSAnMS1uJykge1xuICAgICAgICAvLyBBZGQgbGlzdCBhY2Nlc3NvciBhbmQgeHh4SWRzIGZpZWxkIHNpbmNlIGRlYWxpbmcgd2l0aCBtYW55XG4gICAgICAgIC8vIGFkZElucHV0VHlwZXMocmlnaHRUYWJsZSwgYXN0KTtcbiAgICAgICAgLyogYWRkQXJndW1lbnRzKFxuICAgICAgICAgIGFzdCxcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIGBxdWVyeTogJHtyaWdodFR5cGV9UXVlcnksIHNvcnQ6ICR7cmlnaHRUeXBlfVNvcnQsIGxpbWl0OiBJbnQsIHNraXA6IEludGBcbiAgICAgICAgKTsgKi9cbiAgICAgICAgYWRkRmllbGRzKGFzdCwgbGVmdE5vZGUsIGAke2xlZnRGaWVsZH1JZDogU3RyaW5nYCk7XG4gICAgICAgIGlmIChyaWdodFR5cGUgPT09ICdVc2VyJykge1xuICAgICAgICAgIHNldChyZXNvbHZlcnMsIGAke2xlZnRUeXBlfS4ke2xlZnRGaWVsZH1gLCAoc291cmNlLCBhcmdzLCB7IGRiIH0pID0+XG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKHJpZ2h0VGFibGUpLmZpbmRPbmUoe1xuICAgICAgICAgICAgICBpZDogc291cmNlW2Ake2xlZnRGaWVsZH1JZGBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXQocmVzb2x2ZXJzLCBgJHtsZWZ0VHlwZX0uJHtsZWZ0RmllbGR9YCwgKHNvdXJjZSwgYXJncywgeyBkYiB9KSA9PlxuICAgICAgICAgICAgZGIuY29sbGVjdGlvbignaXRlbScpLmZpbmRPbmUoe1xuICAgICAgICAgICAgICBpZDogc291cmNlW2Ake2xlZnRGaWVsZH1JZGBdLFxuICAgICAgICAgICAgICBfdHlwZTogcmlnaHRUYWJsZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkRmllbGRzKGFzdCwgcmlnaHROb2RlLCBgJHtyaWdodEZpZWxkfTogWyR7bGVmdFR5cGV9XWApO1xuICAgICAgICBzZXQocmVzb2x2ZXJzLCBgJHtyaWdodFR5cGV9LiR7cmlnaHRGaWVsZH1gLCAoc291cmNlLCBhcmdzLCB7IGRiIH0pID0+XG4gICAgICAgICAgZGJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpdGVtJylcbiAgICAgICAgICAgIC5maW5kKHtcbiAgICAgICAgICAgICAgW2Ake2xlZnRGaWVsZH1JZGBdOiBzb3VyY2UuaWQsXG4gICAgICAgICAgICAgIF90eXBlOiBsZWZ0VGFibGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvQXJyYXkoKSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLyogaWYgKHJpZ2h0RmllbGQpIHtcbiAgICAgICAgY29uc3QgcmlnaHROb2RlID0gYXN0LmRlZmluaXRpb25zLmZpbmQoXG4gICAgICAgICAgeCA9PiB4Lm5hbWUgJiYgeC5uYW1lLnZhbHVlID09PSBub2RlLnR5cGUubmFtZS52YWx1ZVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChyZWxhdGlvblR5cGUgPT09ICcxLW4nKSB7XG4gICAgICAgICAgYWRkRmllbGRzKGFzdCwgcmlnaHROb2RlLCBgJHtyaWdodEZpZWxkfTogWyR7bGVmdFR5cGV9XWApO1xuICAgICAgICAgIHNldChyZXNvbHZlcnMsIGAke3JpZ2h0VHlwZX0uJHtyaWdodEZpZWxkfWAsIChzb3VyY2UsIGFyZ3MsIHsgZGIgfSkgPT5cbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24obGVmdFRhYmxlKS5maW5kKHt9KS50b0FycmF5KClcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHJlbGF0aW9uVHlwZSA9PT0gJzEtMScpIHtcbiAgICAgICAgICBhZGRGaWVsZHMoYXN0LCByaWdodE5vZGUsIGAke3JpZ2h0RmllbGR9OiAke2xlZnRUeXBlfWApO1xuICAgICAgICAgIHNldChyZXNvbHZlcnMsIGAke3JpZ2h0VHlwZX0uJHtyaWdodEZpZWxkfWAsIChzb3VyY2UsIGFyZ3MsIHsgZGIgfSkgPT5cbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24obGVmdFRhYmxlKS5maW5kT25lKHt9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gKi9cbiAgICB9LFxuICB9LFxufTtcbiJdfQ==
