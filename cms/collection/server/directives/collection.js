import { addInput, addFields, addInterfaces, getDirectiveValue } from 'olymp-graphql/server';
import { addQueryInput, addSortInput, addQueries } from '../mongodb';

export default {
  name: 'collection',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter: function enter(node, d, _ref) {
      var ast = _ref.ast,
          resolvers = _ref.resolvers;

      addFields(ast, node, '\n          id: String\n          name: String\n          # @label("Schlagworte")\n          tags: [String]\n          # @label("Status")\n          state: DOCUMENT_STATE\n          # @label("Hinzugef\xFCgt am")\n          createdAt: DateTime\n          # @label("Ge\xE4ndert am")\n          updatedAt: DateTime\n          # @label("Hinzugef\xFCgt von")\n          createdBy: User @relation\n          # @label("Ge\xE4ndert von")\n          updatedBy: User @relation\n        ');
      var name = getDirectiveValue(node, 'collection', 'name');
      if (name) {
        addInterfaces(ast, node, 'CollectionInterface');
      }
      addQueryInput(ast, node);
      addSortInput(ast, node);
      addQueries(ast, node, resolvers, name);
    },
    enter2: function enter2(node, d, _ref2) {
      var ast = _ref2.ast,
          resolvers = _ref2.resolvers;

      addInput(ast, node);
      var name = getDirectiveValue(node, 'collection', 'name');
      if (name) {
        addInterfaces(ast, node, 'CollectionInterface');
      }
      addQueryInput(ast, node);
      addSortInput(ast, node);
      addQueries(ast, node, resolvers, name);
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vc2VydmVyL2RpcmVjdGl2ZXMvY29sbGVjdGlvbi5lczYiXSwibmFtZXMiOlsiYWRkSW5wdXQiLCJhZGRGaWVsZHMiLCJhZGRJbnRlcmZhY2VzIiwiZ2V0RGlyZWN0aXZlVmFsdWUiLCJhZGRRdWVyeUlucHV0IiwiYWRkU29ydElucHV0IiwiYWRkUXVlcmllcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInJlc29sdmVTdGF0aWMiLCJlbnRlciIsIm5vZGUiLCJkIiwiYXN0IiwicmVzb2x2ZXJzIiwiZW50ZXIyIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUNFQSxRQURGLEVBRUVDLFNBRkYsRUFHRUMsYUFIRixFQUlFQyxpQkFKRixRQUtPLHNCQUxQO0FBTUEsU0FBU0MsYUFBVCxFQUF3QkMsWUFBeEIsRUFBc0NDLFVBQXRDLFFBQXdELFlBQXhEOztBQUVBLGVBQWU7QUFDYkMsUUFBTSxZQURPO0FBRWJDLGVBQWEsNkJBRkE7QUFHYkMsaUJBQWU7QUFDYkMsU0FEYSxpQkFDUEMsSUFETyxFQUNEQyxDQURDLFFBQ3NCO0FBQUEsVUFBbEJDLEdBQWtCLFFBQWxCQSxHQUFrQjtBQUFBLFVBQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFDakNiLGdCQUNFWSxHQURGLEVBRUVGLElBRkY7QUFvQkEsVUFBTUosT0FBT0osa0JBQWtCUSxJQUFsQixFQUF3QixZQUF4QixFQUFzQyxNQUF0QyxDQUFiO0FBQ0EsVUFBSUosSUFBSixFQUFVO0FBQ1JMLHNCQUFjVyxHQUFkLEVBQW1CRixJQUFuQixFQUF5QixxQkFBekI7QUFDRDtBQUNEUCxvQkFBY1MsR0FBZCxFQUFtQkYsSUFBbkI7QUFDQU4sbUJBQWFRLEdBQWIsRUFBa0JGLElBQWxCO0FBQ0FMLGlCQUFXTyxHQUFYLEVBQWdCRixJQUFoQixFQUFzQkcsU0FBdEIsRUFBaUNQLElBQWpDO0FBQ0QsS0E3Qlk7QUE4QmJRLFVBOUJhLGtCQThCTkosSUE5Qk0sRUE4QkFDLENBOUJBLFNBOEJ1QjtBQUFBLFVBQWxCQyxHQUFrQixTQUFsQkEsR0FBa0I7QUFBQSxVQUFiQyxTQUFhLFNBQWJBLFNBQWE7O0FBQ2xDZCxlQUFTYSxHQUFULEVBQWNGLElBQWQ7QUFDQSxVQUFNSixPQUFPSixrQkFBa0JRLElBQWxCLEVBQXdCLFlBQXhCLEVBQXNDLE1BQXRDLENBQWI7QUFDQSxVQUFJSixJQUFKLEVBQVU7QUFDUkwsc0JBQWNXLEdBQWQsRUFBbUJGLElBQW5CLEVBQXlCLHFCQUF6QjtBQUNEO0FBQ0RQLG9CQUFjUyxHQUFkLEVBQW1CRixJQUFuQjtBQUNBTixtQkFBYVEsR0FBYixFQUFrQkYsSUFBbEI7QUFDQUwsaUJBQVdPLEdBQVgsRUFBZ0JGLElBQWhCLEVBQXNCRyxTQUF0QixFQUFpQ1AsSUFBakM7QUFDRDtBQXZDWTtBQUhGLENBQWYiLCJmaWxlIjoicGFja2FnZXMvY29sbGVjdGlvbi9zZXJ2ZXIvZGlyZWN0aXZlcy9jb2xsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYWRkSW5wdXQsXG4gIGFkZEZpZWxkcyxcbiAgYWRkSW50ZXJmYWNlcyxcbiAgZ2V0RGlyZWN0aXZlVmFsdWUsXG59IGZyb20gJ29seW1wLWdyYXBocWwvc2VydmVyJztcbmltcG9ydCB7IGFkZFF1ZXJ5SW5wdXQsIGFkZFNvcnRJbnB1dCwgYWRkUXVlcmllcyB9IGZyb20gJy4uL21vbmdvZGInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdjb2xsZWN0aW9uJyxcbiAgZGVzY3JpcHRpb246ICdNYXJrcyBhIHR5cGUgYXMgYSByZWxhdGl2ZS4nLFxuICByZXNvbHZlU3RhdGljOiB7XG4gICAgZW50ZXIobm9kZSwgZCwgeyBhc3QsIHJlc29sdmVycyB9KSB7XG4gICAgICBhZGRGaWVsZHMoXG4gICAgICAgIGFzdCxcbiAgICAgICAgbm9kZSxcbiAgICAgICAgYFxuICAgICAgICAgIGlkOiBTdHJpbmdcbiAgICAgICAgICBuYW1lOiBTdHJpbmdcbiAgICAgICAgICAjIEBsYWJlbChcIlNjaGxhZ3dvcnRlXCIpXG4gICAgICAgICAgdGFnczogW1N0cmluZ11cbiAgICAgICAgICAjIEBsYWJlbChcIlN0YXR1c1wiKVxuICAgICAgICAgIHN0YXRlOiBET0NVTUVOVF9TVEFURVxuICAgICAgICAgICMgQGxhYmVsKFwiSGluenVnZWbDvGd0IGFtXCIpXG4gICAgICAgICAgY3JlYXRlZEF0OiBEYXRlVGltZVxuICAgICAgICAgICMgQGxhYmVsKFwiR2XDpG5kZXJ0IGFtXCIpXG4gICAgICAgICAgdXBkYXRlZEF0OiBEYXRlVGltZVxuICAgICAgICAgICMgQGxhYmVsKFwiSGluenVnZWbDvGd0IHZvblwiKVxuICAgICAgICAgIGNyZWF0ZWRCeTogVXNlciBAcmVsYXRpb25cbiAgICAgICAgICAjIEBsYWJlbChcIkdlw6RuZGVydCB2b25cIilcbiAgICAgICAgICB1cGRhdGVkQnk6IFVzZXIgQHJlbGF0aW9uXG4gICAgICAgIGAsXG4gICAgICApO1xuICAgICAgY29uc3QgbmFtZSA9IGdldERpcmVjdGl2ZVZhbHVlKG5vZGUsICdjb2xsZWN0aW9uJywgJ25hbWUnKTtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGFkZEludGVyZmFjZXMoYXN0LCBub2RlLCAnQ29sbGVjdGlvbkludGVyZmFjZScpO1xuICAgICAgfVxuICAgICAgYWRkUXVlcnlJbnB1dChhc3QsIG5vZGUpO1xuICAgICAgYWRkU29ydElucHV0KGFzdCwgbm9kZSk7XG4gICAgICBhZGRRdWVyaWVzKGFzdCwgbm9kZSwgcmVzb2x2ZXJzLCBuYW1lKTtcbiAgICB9LFxuICAgIGVudGVyMihub2RlLCBkLCB7IGFzdCwgcmVzb2x2ZXJzIH0pIHtcbiAgICAgIGFkZElucHV0KGFzdCwgbm9kZSk7XG4gICAgICBjb25zdCBuYW1lID0gZ2V0RGlyZWN0aXZlVmFsdWUobm9kZSwgJ2NvbGxlY3Rpb24nLCAnbmFtZScpO1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgYWRkSW50ZXJmYWNlcyhhc3QsIG5vZGUsICdDb2xsZWN0aW9uSW50ZXJmYWNlJyk7XG4gICAgICB9XG4gICAgICBhZGRRdWVyeUlucHV0KGFzdCwgbm9kZSk7XG4gICAgICBhZGRTb3J0SW5wdXQoYXN0LCBub2RlKTtcbiAgICAgIGFkZFF1ZXJpZXMoYXN0LCBub2RlLCByZXNvbHZlcnMsIG5hbWUpO1xuICAgIH0sXG4gIH0sXG59O1xuIl19
