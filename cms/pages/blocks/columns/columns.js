var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { Container, Grid, createComponent } from 'olymp-fela';
import { addBlock } from 'olymp-slate';
import FaPlus from 'olymp-icons/lib/fa-plus';
import FaMinus from 'olymp-icons/lib/fa-minus';

import Column from './column';

var Ctn = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    paddingTop: theme.space2,
    paddingX: theme.space3,
    hasFlex: {
      '> div': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }
  };
}, function (p) {
  return React.createElement(Container, p);
}, function (p) {
  return Object.keys(p);
});

export default {
  type: 'Pages.Template.Columns',
  isVoid: false,
  kind: 'block',
  label: 'Spalten-Layout',
  category: 'Layout',
  defaultNodes: function defaultNodes() {
    return [Column, Column, Column, Column];
  },
  component: function component(_ref2) {
    var className = _ref2.className,
        children = _ref2.children,
        attributes = _ref2.attributes,
        getData = _ref2.getData;
    return React.createElement(
      Ctn,
      _extends({}, attributes, { className: className }),
      React.createElement(
        Grid,
        { size: getData('columns', 3) },
        children
      )
    );
  },
  actions: [{
    label: React.createElement(FaPlus, null),
    tooltip: 'Spalte hinzufügen',
    toggle: function toggle(_ref3) {
      var value = _ref3.value,
          onChange = _ref3.onChange,
          schema = _ref3.schema,
          node = _ref3.node;

      onChange(addBlock(value, Column, schema, node.key, node.size));
    }
  }, {
    label: React.createElement(FaMinus, null),
    tooltip: 'Spalte entfernen',
    toggle: function toggle(_ref4) {
      var value = _ref4.value,
          onChange = _ref4.onChange,
          node = _ref4.node;

      if (node.nodes.last()) {
        onChange(value.change().removeNodeByKey(node.nodes.last().key));
      }
    }
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9jb2x1bW5zL2NvbHVtbnMuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiR3JpZCIsImNyZWF0ZUNvbXBvbmVudCIsImFkZEJsb2NrIiwiQ29sdW1uIiwiQ3RuIiwidGhlbWUiLCJwYWRkaW5nVG9wIiwic3BhY2UyIiwicGFkZGluZ1giLCJzcGFjZTMiLCJoYXNGbGV4IiwiZGlzcGxheSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJwIiwiT2JqZWN0Iiwia2V5cyIsInR5cGUiLCJpc1ZvaWQiLCJraW5kIiwibGFiZWwiLCJjYXRlZ29yeSIsImRlZmF1bHROb2RlcyIsImNvbXBvbmVudCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiYXR0cmlidXRlcyIsImdldERhdGEiLCJhY3Rpb25zIiwidG9vbHRpcCIsInRvZ2dsZSIsInZhbHVlIiwib25DaGFuZ2UiLCJzY2hlbWEiLCJub2RlIiwia2V5Iiwic2l6ZSIsIm5vZGVzIiwibGFzdCIsImNoYW5nZSIsInJlbW92ZU5vZGVCeUtleSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMsSUFBcEIsRUFBMEJDLGVBQTFCLFFBQWlELFlBQWpEO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixhQUF6Qjs7OztBQUVBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7O0FBRUEsSUFBTUMsTUFBTUgsZ0JBQ1Y7QUFBQSxNQUFHSSxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxnQkFBWUQsTUFBTUUsTUFESjtBQUVkQyxjQUFVSCxNQUFNSSxNQUZGO0FBR2RDLGFBQVM7QUFDUCxlQUFTO0FBQ1BDLGlCQUFTLE1BREY7QUFFUEMsa0JBQVUsTUFGSDtBQUdQQyx3QkFBZ0I7QUFIVDtBQURGO0FBSEssR0FBaEI7QUFBQSxDQURVLEVBWVY7QUFBQSxTQUFLLG9CQUFDLFNBQUQsRUFBZUMsQ0FBZixDQUFMO0FBQUEsQ0FaVSxFQWFWO0FBQUEsU0FBS0MsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQUw7QUFBQSxDQWJVLENBQVo7O0FBZ0JBLGVBQWU7QUFDYkcsUUFBTSx3QkFETztBQUViQyxVQUFRLEtBRks7QUFHYkMsUUFBTSxPQUhPO0FBSWJDLFNBQU8sZ0JBSk07QUFLYkMsWUFBVSxRQUxHO0FBTWJDLGdCQUFjO0FBQUEsV0FBTSxDQUFDbkIsTUFBRCxFQUFTQSxNQUFULEVBQWlCQSxNQUFqQixFQUF5QkEsTUFBekIsQ0FBTjtBQUFBLEdBTkQ7QUFPYm9CLGFBQVc7QUFBQSxRQUFHQyxTQUFILFNBQUdBLFNBQUg7QUFBQSxRQUFjQyxRQUFkLFNBQWNBLFFBQWQ7QUFBQSxRQUF3QkMsVUFBeEIsU0FBd0JBLFVBQXhCO0FBQUEsUUFBb0NDLE9BQXBDLFNBQW9DQSxPQUFwQztBQUFBLFdBQ1Q7QUFBQyxTQUFEO0FBQUEsbUJBQVNELFVBQVQsSUFBcUIsV0FBV0YsU0FBaEM7QUFDRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLE1BQU1HLFFBQVEsU0FBUixFQUFtQixDQUFuQixDQUFaO0FBQW9DRjtBQUFwQztBQURGLEtBRFM7QUFBQSxHQVBFO0FBWWJHLFdBQVMsQ0FDUDtBQUNFUixXQUFPLG9CQUFDLE1BQUQsT0FEVDtBQUVFUyxhQUFTLG1CQUZYO0FBR0VDLFlBQVEsdUJBQXVDO0FBQUEsVUFBcENDLEtBQW9DLFNBQXBDQSxLQUFvQztBQUFBLFVBQTdCQyxRQUE2QixTQUE3QkEsUUFBNkI7QUFBQSxVQUFuQkMsTUFBbUIsU0FBbkJBLE1BQW1CO0FBQUEsVUFBWEMsSUFBVyxTQUFYQSxJQUFXOztBQUM3Q0YsZUFBUzlCLFNBQVM2QixLQUFULEVBQWdCNUIsTUFBaEIsRUFBd0I4QixNQUF4QixFQUFnQ0MsS0FBS0MsR0FBckMsRUFBMENELEtBQUtFLElBQS9DLENBQVQ7QUFDRDtBQUxILEdBRE8sRUFRUDtBQUNFaEIsV0FBTyxvQkFBQyxPQUFELE9BRFQ7QUFFRVMsYUFBUyxrQkFGWDtBQUdFQyxZQUFRLHVCQUErQjtBQUFBLFVBQTVCQyxLQUE0QixTQUE1QkEsS0FBNEI7QUFBQSxVQUFyQkMsUUFBcUIsU0FBckJBLFFBQXFCO0FBQUEsVUFBWEUsSUFBVyxTQUFYQSxJQUFXOztBQUNyQyxVQUFJQSxLQUFLRyxLQUFMLENBQVdDLElBQVgsRUFBSixFQUF1QjtBQUNyQk4saUJBQVNELE1BQU1RLE1BQU4sR0FBZUMsZUFBZixDQUErQk4sS0FBS0csS0FBTCxDQUFXQyxJQUFYLEdBQWtCSCxHQUFqRCxDQUFUO0FBQ0Q7QUFDRjtBQVBILEdBUk87QUFaSSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9jb2x1bW5zL2NvbHVtbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IGFkZEJsb2NrIH0gZnJvbSAnb2x5bXAtc2xhdGUnO1xuaW1wb3J0IHsgRmFQbHVzLCBGYU1pbnVzIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbic7XG5cbmNvbnN0IEN0biA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjZTIsXG4gICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMyxcbiAgICBoYXNGbGV4OiB7XG4gICAgICAnPiBkaXYnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgcCA9PiA8Q29udGFpbmVyIHsuLi5wfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ1BhZ2VzLlRlbXBsYXRlLkNvbHVtbnMnLFxuICBpc1ZvaWQ6IGZhbHNlLFxuICBraW5kOiAnYmxvY2snLFxuICBsYWJlbDogJ1NwYWx0ZW4tTGF5b3V0JyxcbiAgY2F0ZWdvcnk6ICdMYXlvdXQnLFxuICBkZWZhdWx0Tm9kZXM6ICgpID0+IFtDb2x1bW4sIENvbHVtbiwgQ29sdW1uLCBDb2x1bW5dLFxuICBjb21wb25lbnQ6ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGF0dHJpYnV0ZXMsIGdldERhdGEgfSkgPT4gKFxuICAgIDxDdG4gey4uLmF0dHJpYnV0ZXN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxHcmlkIHNpemU9e2dldERhdGEoJ2NvbHVtbnMnLCAzKX0+e2NoaWxkcmVufTwvR3JpZD5cbiAgICA8L0N0bj5cbiAgKSxcbiAgYWN0aW9uczogW1xuICAgIHtcbiAgICAgIGxhYmVsOiA8RmFQbHVzIC8+LFxuICAgICAgdG9vbHRpcDogJ1NwYWx0ZSBoaW56dWbDvGdlbicsXG4gICAgICB0b2dnbGU6ICh7IHZhbHVlLCBvbkNoYW5nZSwgc2NoZW1hLCBub2RlIH0pID0+IHtcbiAgICAgICAgb25DaGFuZ2UoYWRkQmxvY2sodmFsdWUsIENvbHVtbiwgc2NoZW1hLCBub2RlLmtleSwgbm9kZS5zaXplKSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxGYU1pbnVzIC8+LFxuICAgICAgdG9vbHRpcDogJ1NwYWx0ZSBlbnRmZXJuZW4nLFxuICAgICAgdG9nZ2xlOiAoeyB2YWx1ZSwgb25DaGFuZ2UsIG5vZGUgfSkgPT4ge1xuICAgICAgICBpZiAobm9kZS5ub2Rlcy5sYXN0KCkpIHtcbiAgICAgICAgICBvbkNoYW5nZSh2YWx1ZS5jaGFuZ2UoKS5yZW1vdmVOb2RlQnlLZXkobm9kZS5ub2Rlcy5sYXN0KCkua2V5KSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn07XG4iXX0=
