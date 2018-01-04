'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('graphql/language');

var _server = require('olymp-graphql/server');

var fetch = (0, _server.createTypeFetcher)(function (node, value) {
  return node.kind !== 'NamedType' && node.kind !== 'NonNullType' && !!node.name && node.name.value === value;
});

var getArgument = function getArgument(field, ast) {
  if (field.type.kind === 'ListType' && field.type.type.name.value && field.type.type.name.value === 'String') {
    (0, _server.addDefinition)(ast, (0, _language.parse)('\n      input ' + field.type.type.name.value + 'Query {\n        in: [' + field.type.type.name.value + '],\n        nin: [' + field.type.type.name.value + '],\n        null: Boolean\n      }\n    ').definitions[0]);
    return field.name.value + ': ' + field.type.type.name.value + 'Query';
  }
  if (!field.type.name) {
    return null;
  }
  var fieldType = fetch(ast, field.type.name.value);
  if (['Date', 'DateTime'].includes(field.type.name.value)) {
    (0, _server.addDefinition)(ast, (0, _language.parse)('\n      input DateQuery {\n        eq: DateTime,\n        ne: DateTime,\n        lt: DateTime,\n        gt: DateTime,\n        gte: DateTime,\n        lte: DateTime,\n        day: DateTime,\n        year: DateTime,\n        month: DateTime,\n        between: [DateTime],\n        null: Boolean\n      }\n    ').definitions[0]);
    return field.name.value + ': DateQuery';
  }
  if (['Int'].includes(field.type.name.value)) {
    (0, _server.addDefinition)(ast, (0, _language.parse)('\n      input IntQuery {\n        eq: Int,\n        ne: Int,\n        in: [Int],\n        nin: [Int],\n        lt: Int,\n        gt: Int,\n        gte: Int,\n        lte: Int,\n        between: [Int],\n        null: Boolean\n      }\n    ').definitions[0]);
    return field.name.value + ': IntQuery';
  }
  if (['Float'].includes(field.type.name.value)) {
    (0, _server.addDefinition)(ast, (0, _language.parse)('\n      input IntQuery {\n        eq: Float,\n        ne: Float,\n        in: [Float],\n        nin: [Float],\n        lt: Float,\n        gt: Float,\n        gte: Float,\n        lte: Float,\n        between: [Float],\n        null: Boolean\n      }\n    ').definitions[0]);
    return field.name.value + ': IntQuery';
  }
  if (['Boolean'].includes(field.type.name.value)) {
    (0, _server.addDefinition)(ast, (0, _language.parse)('\n      input BooleanQuery {\n        eq: Float,\n        ne: Float,\n        null: Boolean\n      }\n    ').definitions[0]);
    return field.name.value + ': BooleanQuery';
  }
  if (['String', 'Website', 'Slug', 'Markdown', 'Color'].includes(field.type.name.value)) {
    (0, _server.addDefinition)(ast, (0, _language.parse)('\n      input StringQuery {\n        eq: String,\n        ne: String,\n        in: [String],\n        nin: [String],\n        startsWith: String,\n        contains: String,\n        null: Boolean\n      }\n    ').definitions[0]);
    return field.name.value + ': StringQuery';
  }
  if (fieldType && fieldType.kind === 'EnumTypeDefinition') {
    (0, _server.addDefinition)(ast, (0, _language.parse)('\n      input ' + fieldType.name.value + 'Query {\n        eq: ' + fieldType.name.value + ',\n        ne: ' + fieldType.name.value + ',\n        in: [' + fieldType.name.value + '],\n        nin: [' + fieldType.name.value + '],\n        null: Boolean\n      }\n    ').definitions[0]);
    return field.name.value + ': ' + fieldType.name.value + 'Query';
  }
  if (fieldType && fieldType.kind === 'ObjectTypeDefinition') {
    (0, _server.addDefinition)(ast, (0, _language.parse)('\n      input GenericQuery {\n        null: Boolean\n      }\n    ').definitions[0]);
    return field.name.value + ': GenericQuery';
  }
};

exports.default = function (ast, node) {
  (0, _server.addDefinition)(ast, (0, _language.parse)('\n    input ' + node.name.value + 'Query {\n      skipqueries: Boolean\n      ' + node.fields.map(function (x) {
    return getArgument(x, ast);
  }).filter(function (x) {
    return x;
  }).join('\n') + '\n      and: [' + node.name.value + 'Query]\n      or: [' + node.name.value + 'Query]\n    }\n  ').definitions[0]);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3NlcnZlci9tb25nb2RiL2FkZC1xdWVyeS1pbnB1dC5lczYiXSwibmFtZXMiOlsiZmV0Y2giLCJub2RlIiwidmFsdWUiLCJraW5kIiwibmFtZSIsImdldEFyZ3VtZW50IiwiZmllbGQiLCJhc3QiLCJ0eXBlIiwiZGVmaW5pdGlvbnMiLCJmaWVsZFR5cGUiLCJpbmNsdWRlcyIsImZpZWxkcyIsIm1hcCIsIngiLCJmaWx0ZXIiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLCtCQUNaLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFNBQ0VELEtBQUtFLElBQUwsS0FBYyxXQUFkLElBQ0FGLEtBQUtFLElBQUwsS0FBYyxhQURkLElBRUEsQ0FBQyxDQUFDRixLQUFLRyxJQUZQLElBR0FILEtBQUtHLElBQUwsQ0FBVUYsS0FBVixLQUFvQkEsS0FKdEI7QUFBQSxDQURZLENBQWQ7O0FBUUEsSUFBTUcsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUNsQyxNQUNFRCxNQUFNRSxJQUFOLENBQVdMLElBQVgsS0FBb0IsVUFBcEIsSUFDQUcsTUFBTUUsSUFBTixDQUFXQSxJQUFYLENBQWdCSixJQUFoQixDQUFxQkYsS0FEckIsSUFFQUksTUFBTUUsSUFBTixDQUFXQSxJQUFYLENBQWdCSixJQUFoQixDQUFxQkYsS0FBckIsS0FBK0IsUUFIakMsRUFJRTtBQUNBLCtCQUNFSyxHQURGLEVBRUUsd0NBQ1FELE1BQU1FLElBQU4sQ0FBV0EsSUFBWCxDQUFnQkosSUFBaEIsQ0FBcUJGLEtBRDdCLDhCQUVTSSxNQUFNRSxJQUFOLENBQVdBLElBQVgsQ0FBZ0JKLElBQWhCLENBQXFCRixLQUY5QiwwQkFHVUksTUFBTUUsSUFBTixDQUFXQSxJQUFYLENBQWdCSixJQUFoQixDQUFxQkYsS0FIL0IsK0NBTUNPLFdBTkQsQ0FNYSxDQU5iLENBRkY7QUFVQSxXQUFVSCxN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QSxXQUFLRCxDQUFMO0FBQUEsR0FGUixFQUdDRSxJQUhELENBR00sSUFITixDQUhKLHNCQU9VZixLQUFLRyxJQUFMLENBQVVGLEtBUHBCLDJCQVFTRCxLQUFLRyxJQUFMLENBQVVGLEtBUm5CLHdCQVVDTyxXQVZELENBVWEsQ0FWYixDQUZGO0FBY0QsQyIsImZpbGUiOiJjbXMvY29sbGVjdGlvbi9zZXJ2ZXIvbW9uZ29kYi9hZGQtcXVlcnktaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgYWRkRGVmaW5pdGlvbiwgY3JlYXRlVHlwZUZldGNoZXIgfSBmcm9tICdvbHltcC1ncmFwaHFsL3NlcnZlcic7XG5cbmNvbnN0IGZldGNoID0gY3JlYXRlVHlwZUZldGNoZXIoXG4gIChub2RlLCB2YWx1ZSkgPT5cbiAgICBub2RlLmtpbmQgIT09ICdOYW1lZFR5cGUnICYmXG4gICAgbm9kZS5raW5kICE9PSAnTm9uTnVsbFR5cGUnICYmXG4gICAgISFub2RlLm5hbWUgJiZcbiAgICBub2RlLm5hbWUudmFsdWUgPT09IHZhbHVlLFxuKTtcblxuY29uc3QgZ2V0QXJndW1lbnQgPSAoZmllbGQsIGFzdCkgPT4ge1xuICBpZiAoXG4gICAgZmllbGQudHlwZS5raW5kID09PSAnTGlzdFR5cGUnICYmXG4gICAgZmllbGQudHlwZS50eXBlLm5hbWUudmFsdWUgJiZcbiAgICBmaWVsZC50eXBlLnR5cGUubmFtZS52YWx1ZSA9PT0gJ1N0cmluZydcbiAgKSB7XG4gICAgYWRkRGVmaW5pdGlvbihcbiAgICAgIGFzdCxcbiAgICAgIHBhcnNlKGBcbiAgICAgIGlucHV0ICR7ZmllbGQudHlwZS50eXBlLm5hbWUudmFsdWV9UXVlcnkge1xuICAgICAgICBpbjogWyR7ZmllbGQudHlwZS50eXBlLm5hbWUudmFsdWV9XSxcbiAgICAgICAgbmluOiBbJHtmaWVsZC50eXBlLnR5cGUubmFtZS52YWx1ZX1dLFxuICAgICAgICBudWxsOiBCb29sZWFuXG4gICAgICB9XG4gICAgYCkuZGVmaW5pdGlvbnNbMF0sXG4gICAgKTtcbiAgICByZXR1cm4gYCR7ZmllbGQubmFtZS52YWx1ZX06ICR7ZmllbGQudHlwZS50eXBlLm5hbWUudmFsdWV9UXVlcnlgO1xuICB9XG4gIGlmICghZmllbGQudHlwZS5uYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZmllbGRUeXBlID0gZmV0Y2goYXN0LCBmaWVsZC50eXBlLm5hbWUudmFsdWUpO1xuICBpZiAoWydEYXRlJywgJ0RhdGVUaW1lJ10uaW5jbHVkZXMoZmllbGQudHlwZS5uYW1lLnZhbHVlKSkge1xuICAgIGFkZERlZmluaXRpb24oXG4gICAgICBhc3QsXG4gICAgICBwYXJzZShgXG4gICAgICBpbnB1dCBEYXRlUXVlcnkge1xuICAgICAgICBlcTogRGF0ZVRpbWUsXG4gICAgICAgIG5lOiBEYXRlVGltZSxcbiAgICAgICAgbHQ6IERhdGVUaW1lLFxuICAgICAgICBndDogRGF0ZVRpbWUsXG4gICAgICAgIGd0ZTogRGF0ZVRpbWUsXG4gICAgICAgIGx0ZTogRGF0ZVRpbWUsXG4gICAgICAgIGRheTogRGF0ZVRpbWUsXG4gICAgICAgIHllYXI6IERhdGVUaW1lLFxuICAgICAgICBtb250aDogRGF0ZVRpbWUsXG4gICAgICAgIGJldHdlZW46IFtEYXRlVGltZV0sXG4gICAgICAgIG51bGw6IEJvb2xlYW5cbiAgICAgIH1cbiAgICBgKS5kZWZpbml0aW9uc1swXSxcbiAgICApO1xuICAgIHJldHVybiBgJHtmaWVsZC5uYW1lLnZhbHVlfTogRGF0ZVF1ZXJ5YDtcbiAgfVxuICBpZiAoWydJbnQnXS5pbmNsdWRlcyhmaWVsZC50eXBlLm5hbWUudmFsdWUpKSB7XG4gICAgYWRkRGVmaW5pdGlvbihcbiAgICAgIGFzdCxcbiAgICAgIHBhcnNlKGBcbiAgICAgIGlucHV0IEludFF1ZXJ5IHtcbiAgICAgICAgZXE6IEludCxcbiAgICAgICAgbmU6IEludCxcbiAgICAgICAgaW46IFtJbnRdLFxuICAgICAgICBuaW46IFtJbnRdLFxuICAgICAgICBsdDogSW50LFxuICAgICAgICBndDogSW50LFxuICAgICAgICBndGU6IEludCxcbiAgICAgICAgbHRlOiBJbnQsXG4gICAgICAgIGJldHdlZW46IFtJbnRdLFxuICAgICAgICBudWxsOiBCb29sZWFuXG4gICAgICB9XG4gICAgYCkuZGVmaW5pdGlvbnNbMF0sXG4gICAgKTtcbiAgICByZXR1cm4gYCR7ZmllbGQubmFtZS52YWx1ZX06IEludFF1ZXJ5YDtcbiAgfVxuICBpZiAoWydGbG9hdCddLmluY2x1ZGVzKGZpZWxkLnR5cGUubmFtZS52YWx1ZSkpIHtcbiAgICBhZGREZWZpbml0aW9uKFxuICAgICAgYXN0LFxuICAgICAgcGFyc2UoYFxuICAgICAgaW5wdXQgSW50UXVlcnkge1xuICAgICAgICBlcTogRmxvYXQsXG4gICAgICAgIG5lOiBGbG9hdCxcbiAgICAgICAgaW46IFtGbG9hdF0sXG4gICAgICAgIG5pbjogW0Zsb2F0XSxcbiAgICAgICAgbHQ6IEZsb2F0LFxuICAgICAgICBndDogRmxvYXQsXG4gICAgICAgIGd0ZTogRmxvYXQsXG4gICAgICAgIGx0ZTogRmxvYXQsXG4gICAgICAgIGJldHdlZW46IFtGbG9hdF0sXG4gICAgICAgIG51bGw6IEJvb2xlYW5cbiAgICAgIH1cbiAgICBgKS5kZWZpbml0aW9uc1swXSxcbiAgICApO1xuICAgIHJldHVybiBgJHtmaWVsZC5uYW1lLnZhbHVlfTogSW50UXVlcnlgO1xuICB9XG4gIGlmIChbJ0Jvb2xlYW4nXS5pbmNsdWRlcyhmaWVsZC50eXBlLm5hbWUudmFsdWUpKSB7XG4gICAgYWRkRGVmaW5pdGlvbihcbiAgICAgIGFzdCxcbiAgICAgIHBhcnNlKGBcbiAgICAgIGlucHV0IEJvb2xlYW5RdWVyeSB7XG4gICAgICAgIGVxOiBGbG9hdCxcbiAgICAgICAgbmU6IEZsb2F0LFxuICAgICAgICBudWxsOiBCb29sZWFuXG4gICAgICB9XG4gICAgYCkuZGVmaW5pdGlvbnNbMF0sXG4gICAgKTtcbiAgICByZXR1cm4gYCR7ZmllbGQubmFtZS52YWx1ZX06IEJvb2xlYW5RdWVyeWA7XG4gIH1cbiAgaWYgKFxuICAgIFsnU3RyaW5nJywgJ1dlYnNpdGUnLCAnU2x1ZycsICdNYXJrZG93bicsICdDb2xvciddLmluY2x1ZGVzKFxuICAgICAgZmllbGQudHlwZS5uYW1lLnZhbHVlLFxuICAgIClcbiAgKSB7XG4gICAgYWRkRGVmaW5pdGlvbihcbiAgICAgIGFzdCxcbiAgICAgIHBhcnNlKGBcbiAgICAgIGlucHV0IFN0cmluZ1F1ZXJ5IHtcbiAgICAgICAgZXE6IFN0cmluZyxcbiAgICAgICAgbmU6IFN0cmluZyxcbiAgICAgICAgaW46IFtTdHJpbmddLFxuICAgICAgICBuaW46IFtTdHJpbmddLFxuICAgICAgICBzdGFydHNXaXRoOiBTdHJpbmcsXG4gICAgICAgIGNvbnRhaW5zOiBTdHJpbmcsXG4gICAgICAgIG51bGw6IEJvb2xlYW5cbiAgICAgIH1cbiAgICBgKS5kZWZpbml0aW9uc1swXSxcbiAgICApO1xuICAgIHJldHVybiBgJHtmaWVsZC5uYW1lLnZhbHVlfTogU3RyaW5nUXVlcnlgO1xuICB9XG4gIGlmIChmaWVsZFR5cGUgJiYgZmllbGRUeXBlLmtpbmQgPT09ICdFbnVtVHlwZURlZmluaXRpb24nKSB7XG4gICAgYWRkRGVmaW5pdGlvbihcbiAgICAgIGFzdCxcbiAgICAgIHBhcnNlKGBcbiAgICAgIGlucHV0ICR7ZmllbGRUeXBlLm5hbWUudmFsdWV9UXVlcnkge1xuICAgICAgICBlcTogJHtmaWVsZFR5cGUubmFtZS52YWx1ZX0sXG4gICAgICAgIG5lOiAke2ZpZWxkVHlwZS5uYW1lLnZhbHVlfSxcbiAgICAgICAgaW46IFske2ZpZWxkVHlwZS5uYW1lLnZhbHVlfV0sXG4gICAgICAgIG5pbjogWyR7ZmllbGRUeXBlLm5hbWUudmFsdWV9XSxcbiAgICAgICAgbnVsbDogQm9vbGVhblxuICAgICAgfVxuICAgIGApLmRlZmluaXRpb25zWzBdLFxuICAgICk7XG4gICAgcmV0dXJuIGAke2ZpZWxkLm5hbWUudmFsdWV9OiAke2ZpZWxkVHlwZS5uYW1lLnZhbHVlfVF1ZXJ5YDtcbiAgfVxuICBpZiAoZmllbGRUeXBlICYmIGZpZWxkVHlwZS5raW5kID09PSAnT2JqZWN0VHlwZURlZmluaXRpb24nKSB7XG4gICAgYWRkRGVmaW5pdGlvbihcbiAgICAgIGFzdCxcbiAgICAgIHBhcnNlKGBcbiAgICAgIGlucHV0IEdlbmVyaWNRdWVyeSB7XG4gICAgICAgIG51bGw6IEJvb2xlYW5cbiAgICAgIH1cbiAgICBgKS5kZWZpbml0aW9uc1swXSxcbiAgICApO1xuICAgIHJldHVybiBgJHtmaWVsZC5uYW1lLnZhbHVlfTogR2VuZXJpY1F1ZXJ5YDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGFzdCwgbm9kZSkgPT4ge1xuICBhZGREZWZpbml0aW9uKFxuICAgIGFzdCxcbiAgICBwYXJzZShgXG4gICAgaW5wdXQgJHtub2RlLm5hbWUudmFsdWV9UXVlcnkge1xuICAgICAgc2tpcHF1ZXJpZXM6IEJvb2xlYW5cbiAgICAgICR7bm9kZS5maWVsZHNcbiAgICAgICAgLm1hcCh4ID0+IGdldEFyZ3VtZW50KHgsIGFzdCkpXG4gICAgICAgIC5maWx0ZXIoeCA9PiB4KVxuICAgICAgICAuam9pbignXFxuJyl9XG4gICAgICBhbmQ6IFske25vZGUubmFtZS52YWx1ZX1RdWVyeV1cbiAgICAgIG9yOiBbJHtub2RlLm5hbWUudmFsdWV9UXVlcnldXG4gICAgfVxuICBgKS5kZWZpbml0aW9uc1swXSxcbiAgKTtcbn07XG4iXX0=
