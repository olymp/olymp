'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = require('olymp-graphql/server');

var _mongodb = require('../mongodb');

exports.default = {
  name: 'collection',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter: function enter(node, d, _ref) {
      var ast = _ref.ast,
          resolvers = _ref.resolvers;

      (0, _server.addFields)(ast, node, '\n          id: String\n          name: String\n          # @label("Schlagworte")\n          tags: [String]\n          # @label("Status")\n          state: DOCUMENT_STATE\n          # @label("Hinzugef\xFCgt am")\n          createdAt: DateTime\n          # @label("Ge\xE4ndert am")\n          updatedAt: DateTime\n          # @label("Hinzugef\xFCgt von")\n          createdBy: User @relation\n          # @label("Ge\xE4ndert von")\n          updatedBy: User @relation\n        ');
      var name = (0, _server.getDirectiveValue)(node, 'collection', 'name');
      if (name) {
        (0, _server.addInterfaces)(ast, node, 'CollectionInterface');
      }
      (0, _mongodb.addQueryInput)(ast, node);
      (0, _mongodb.addSortInput)(ast, node);
      (0, _mongodb.addQueries)(ast, node, resolvers, name);
    },
    enter2: function enter2(node, d, _ref2) {
      var ast = _ref2.ast,
          resolvers = _ref2.resolvers;

      (0, _server.addInput)(ast, node);
      var name = (0, _server.getDirectiveValue)(node, 'collection', 'name');
      if (name) {
        (0, _server.addInterfaces)(ast, node, 'CollectionInterface');
      }
      (0, _mongodb.addQueryInput)(ast, node);
      (0, _mongodb.addSortInput)(ast, node);
      (0, _mongodb.addQueries)(ast, node, resolvers, name);
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3NlcnZlci9kaXJlY3RpdmVzL2NvbGxlY3Rpb24uZXM2Il0sIm5hbWVzIjpbIm5hbWUiLCJkZXNjcmlwdGlvbiIsInJlc29sdmVTdGF0aWMiLCJlbnRlciIsIm5vZGUiLCJkIiwiYXN0IiwicmVzb2x2ZXJzIiwiZW50ZXIyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFNQTs7a0JBRWU7QUFDYkEsUUFBTSxZQURPO0FBRWJDLGVBQWEsNkJBRkE7QUFHYkMsaUJBQWU7QUFDYkMsU0FEYSxpQkFDUEMsSUFETyxFQUNEQyxDQURDLFFBQ3NCO0FBQUEsVUFBbEJDLEdBQWtCLFFBQWxCQSxHQUFrQjtBQUFBLFVBQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFDakMsNkJBQ0VELEdBREYsRUFFRUYsSUFGRjtBQW9CQSxVQUFNSixPQUFPLCtCQUFrQkksSUFBbEIsRUFBd0IsWUFBeEIsRUFBc0MsTUFBdEMsQ0FBYjtBQUNBLFVBQUlKLElBQUosRUFBVTtBQUNSLG1DQUFjTSxHQUFkLEVBQW1CRixJQUFuQixFQUF5QixxQkFBekI7QUFDRDtBQUNELGtDQUFjRSxHQUFkLEVBQW1CRixJQUFuQjtBQUNBLGlDQUFhRSxHQUFiLEVBQWtCRixJQUFsQjtBQUNBLCtCQUFXRSxHQUFYLEVBQWdCRixJQUFoQixFQUFzQkcsU0FBdEIsRUFBaUNQLElBQWpDO0FBQ0QsS0E3Qlk7QUE4QmJRLFVBOUJhLGtCQThCTkosSUE5Qk0sRUE4QkFDLENBOUJBLFNBOEJ1QjtBQUFBLFVBQWxCQyxHQUFrQixTQUFsQkEsR0FBa0I7QUFBQSxVQUFiQyxTQUFhLFNBQWJBLFNBQWE7O0FBQ2xDLDRCQUFTRCxHQUFULEVBQWNGLElBQWQ7QUFDQSxVQUFNSixPQUFPLCtCQUFrQkksSUFBbEIsRUFBd0IsWUFBeEIsRUFBc0MsTUFBdEMsQ0FBYjtBQUNBLFVBQUlKLElBQUosRUFBVTtBQUNSLG1DQUFjTSxHQUFkLEVBQW1CRixJQUFuQixFQUF5QixxQkFBekI7QUFDRDtBQUNELGtDQUFjRSxHQUFkLEVBQW1CRixJQUFuQjtBQUNBLGlDQUFhRSxHQUFiLEVBQWtCRixJQUFsQjtBQUNBLCtCQUFXRSxHQUFYLEVBQWdCRixJQUFoQixFQUFzQkcsU0FBdEIsRUFBaUNQLElBQWpDO0FBQ0Q7QUF2Q1k7QUFIRixDIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL3NlcnZlci9kaXJlY3RpdmVzL2NvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhZGRJbnB1dCxcbiAgYWRkRmllbGRzLFxuICBhZGRJbnRlcmZhY2VzLFxuICBnZXREaXJlY3RpdmVWYWx1ZSxcbn0gZnJvbSAnb2x5bXAtZ3JhcGhxbC9zZXJ2ZXInO1xuaW1wb3J0IHsgYWRkUXVlcnlJbnB1dCwgYWRkU29ydElucHV0LCBhZGRRdWVyaWVzIH0gZnJvbSAnLi4vbW9uZ29kYic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbGxlY3Rpb24nLFxuICBkZXNjcmlwdGlvbjogJ01hcmtzIGEgdHlwZSBhcyBhIHJlbGF0aXZlLicsXG4gIHJlc29sdmVTdGF0aWM6IHtcbiAgICBlbnRlcihub2RlLCBkLCB7IGFzdCwgcmVzb2x2ZXJzIH0pIHtcbiAgICAgIGFkZEZpZWxkcyhcbiAgICAgICAgYXN0LFxuICAgICAgICBub2RlLFxuICAgICAgICBgXG4gICAgICAgICAgaWQ6IFN0cmluZ1xuICAgICAgICAgIG5hbWU6IFN0cmluZ1xuICAgICAgICAgICMgQGxhYmVsKFwiU2NobGFnd29ydGVcIilcbiAgICAgICAgICB0YWdzOiBbU3RyaW5nXVxuICAgICAgICAgICMgQGxhYmVsKFwiU3RhdHVzXCIpXG4gICAgICAgICAgc3RhdGU6IERPQ1VNRU5UX1NUQVRFXG4gICAgICAgICAgIyBAbGFiZWwoXCJIaW56dWdlZsO8Z3QgYW1cIilcbiAgICAgICAgICBjcmVhdGVkQXQ6IERhdGVUaW1lXG4gICAgICAgICAgIyBAbGFiZWwoXCJHZcOkbmRlcnQgYW1cIilcbiAgICAgICAgICB1cGRhdGVkQXQ6IERhdGVUaW1lXG4gICAgICAgICAgIyBAbGFiZWwoXCJIaW56dWdlZsO8Z3Qgdm9uXCIpXG4gICAgICAgICAgY3JlYXRlZEJ5OiBVc2VyIEByZWxhdGlvblxuICAgICAgICAgICMgQGxhYmVsKFwiR2XDpG5kZXJ0IHZvblwiKVxuICAgICAgICAgIHVwZGF0ZWRCeTogVXNlciBAcmVsYXRpb25cbiAgICAgICAgYCxcbiAgICAgICk7XG4gICAgICBjb25zdCBuYW1lID0gZ2V0RGlyZWN0aXZlVmFsdWUobm9kZSwgJ2NvbGxlY3Rpb24nLCAnbmFtZScpO1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgYWRkSW50ZXJmYWNlcyhhc3QsIG5vZGUsICdDb2xsZWN0aW9uSW50ZXJmYWNlJyk7XG4gICAgICB9XG4gICAgICBhZGRRdWVyeUlucHV0KGFzdCwgbm9kZSk7XG4gICAgICBhZGRTb3J0SW5wdXQoYXN0LCBub2RlKTtcbiAgICAgIGFkZFF1ZXJpZXMoYXN0LCBub2RlLCByZXNvbHZlcnMsIG5hbWUpO1xuICAgIH0sXG4gICAgZW50ZXIyKG5vZGUsIGQsIHsgYXN0LCByZXNvbHZlcnMgfSkge1xuICAgICAgYWRkSW5wdXQoYXN0LCBub2RlKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBnZXREaXJlY3RpdmVWYWx1ZShub2RlLCAnY29sbGVjdGlvbicsICduYW1lJyk7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBhZGRJbnRlcmZhY2VzKGFzdCwgbm9kZSwgJ0NvbGxlY3Rpb25JbnRlcmZhY2UnKTtcbiAgICAgIH1cbiAgICAgIGFkZFF1ZXJ5SW5wdXQoYXN0LCBub2RlKTtcbiAgICAgIGFkZFNvcnRJbnB1dChhc3QsIG5vZGUpO1xuICAgICAgYWRkUXVlcmllcyhhc3QsIG5vZGUsIHJlc29sdmVycywgbmFtZSk7XG4gICAgfSxcbiAgfSxcbn07XG4iXX0=
