'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _require = require('../utils'),
    addInput = _require.addInput;

exports.default = {
  name: 'input',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter2: function enter2(node, directive, _ref) {
      var ast = _ref.ast;

      addInput(ast, node);
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9ncmFwaHFsL3NlcnZlci9kaXJlY3RpdmVzL2lucHV0LmVzNiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiYWRkSW5wdXQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJyZXNvbHZlU3RhdGljIiwiZW50ZXIyIiwibm9kZSIsImRpcmVjdGl2ZSIsImFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQXFCQSxRQUFRLFVBQVIsQztJQUFiQyxRLFlBQUFBLFE7O2tCQUVPO0FBQ2JDLFFBQU0sT0FETztBQUViQyxlQUFhLDZCQUZBO0FBR2JDLGlCQUFlO0FBQ2JDLFVBRGEsa0JBQ05DLElBRE0sRUFDQUMsU0FEQSxRQUNvQjtBQUFBLFVBQVBDLEdBQU8sUUFBUEEsR0FBTzs7QUFDL0JQLGVBQVNPLEdBQVQsRUFBY0YsSUFBZDtBQUNEO0FBSFk7QUFIRixDIiwiZmlsZSI6ImNtcy9ncmFwaHFsL3NlcnZlci9kaXJlY3RpdmVzL2lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBhZGRJbnB1dCB9ID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaW5wdXQnLFxuICBkZXNjcmlwdGlvbjogJ01hcmtzIGEgdHlwZSBhcyBhIHJlbGF0aXZlLicsXG4gIHJlc29sdmVTdGF0aWM6IHtcbiAgICBlbnRlcjIobm9kZSwgZGlyZWN0aXZlLCB7IGFzdCB9KSB7XG4gICAgICBhZGRJbnB1dChhc3QsIG5vZGUpO1xuICAgIH0sXG4gIH0sXG59O1xuIl19
