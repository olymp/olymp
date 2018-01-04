'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slate = require('slate');

var _hasBlock = require('./utils/has-block');

var _hasBlock2 = _interopRequireDefault(_hasBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addBlock = function addBlock(value, node, schema, parentKey) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var transform = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : value.change();
  var _node = node,
      defaultNodes = _node.defaultNodes,
      defaultText = _node.defaultText;
  var _node2 = node,
      type = _node2.type,
      initNode = _node2.initNode;

  var defaultNode = 'paragraph';

  var document = value.document,
      blocks = value.blocks;

  // Handle everything but list buttons.

  if (type !== 'bulleted-list' && type !== 'numbered-list') {
    var isActive = (0, _hasBlock2.default)(value, type);
    var isList = (0, _hasBlock2.default)(value, 'bulleted-list-item') || (0, _hasBlock2.default)(value, 'numbered-list-item');

    if (isList) {
      transform = transform.setBlock(isActive ? defaultNode : type).unwrapBlock('bulleted-list').unwrapBlock('numbered-list');
    } else {
      if (initNode) {
        node = initNode(node, { value: value, schema: schema, parentKey: parentKey, index: index, transform: transform });
      }
      var block = createBlock(node);

      if (defaultNodes && typeof defaultNodes === 'function') {
        defaultNodes = defaultNodes({ value: value, node: node, schema: schema, parentKey: parentKey, index: index, transform: transform });
      } else if (!defaultNodes && !block.isVoid) {
        defaultNodes = [_slate.Text.create(defaultText)];
      }

      if (block && block.kind === 'block') {
        transform = parentKey ? transform.insertNodeByKey(parentKey, index, block) : transform.insertBlock(block);
      } else if (block) {
        transform = parentKey ? transform.insertNodeByKey(parentKey, index, block) : transform.insertInline(block);
      }

      if (defaultNodes) {
        defaultNodes.forEach(function (item, index) {
          if (typeof item === 'string' && schema.nodes[item]) {
            transform = addBlock(value, schema.nodes[item].slate, schema, block.key, index, transform);
          } else if (item.type && schema.nodes[item.type]) {
            transform = addBlock(value, item, schema, block.key, index, transform);
          } else if (_slate.Text.isText(item) || _slate.Block.isBlock(item) || _slate.Inline.isInline(item)) {
            transform = transform.insertNodeByKey(block.key, index, item);
          } else {
            transform = block.kind === 'block' ? transform.insertNodeByKey(block.key, index, _slate.Block.create(item)) : transform.insertNodeByKey(block.key, index, _slate.Inline.create(item));
          }
        });
      }
    }
  } else {
    // Handle the extra wrapping required for list buttons.
    var _isList = (0, _hasBlock2.default)(value, 'bulleted-list-item') || (0, _hasBlock2.default)(value, 'numbered-list-item');
    console.log(_isList);
    var isType = blocks.some(function (block) {
      return !!document.getClosest(block, function (parent) {
        return parent.type === type;
      });
    });

    if (_isList && isType) {
      transform = transform.setBlock(defaultNode).unwrapBlock('bulleted-list').unwrapBlock('numbered-list');
    } else if (_isList) {
      transform = transform.unwrapBlock(type === 'bulleted-list' ? 'bulleted-list' : 'numbered-list').wrapBlock(type);
    } else {
      transform = transform.setBlock(type === 'bulleted-list' ? 'bulleted-list-item' : 'numbered-list-item').wrapBlock(type);
    }
  }

  return transform;
};

var createBlock = function createBlock(block) {
  var type = block.type;
  var isVoid = block.isVoid,
      key = block.key,
      kind = block.kind,
      data = block.data;

  if (!type) {
    type = key;
  }
  if (kind === 'inline' || !kind && isVoid) {
    return _slate.Inline.create({
      type: type,
      isVoid: isVoid,
      kind: kind,
      data: data || {}
    });
  }
  return _slate.Block.create({
    type: type,
    isVoid: isVoid,
    kind: kind,
    data: data || {}
  });
};
exports.default = addBlock;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL2FkZC1ibG9jay5lczYiXSwibmFtZXMiOlsiYWRkQmxvY2siLCJ2YWx1ZSIsIm5vZGUiLCJzY2hlbWEiLCJwYXJlbnRLZXkiLCJpbmRleCIsInRyYW5zZm9ybSIsImNoYW5nZSIsImRlZmF1bHROb2RlcyIsImRlZmF1bHRUZXh0IiwidHlwZSIsImluaXROb2RlIiwiZGVmYXVsdE5vZGUiLCJkb2N1bWVudCIsImJsb2NrcyIsImlzQWN0aXZlIiwiaXNMaXN0Iiwic2V0QmxvY2siLCJ1bndyYXBCbG9jayIsImJsb2NrIiwiY3JlYXRlQmxvY2siLCJpc1ZvaWQiLCJjcmVhdGUiLCJraW5kIiwiaW5zZXJ0Tm9kZUJ5S2V5IiwiaW5zZXJ0QmxvY2siLCJpbnNlcnRJbmxpbmUiLCJmb3JFYWNoIiwiaXRlbSIsIm5vZGVzIiwic2xhdGUiLCJrZXkiLCJpc1RleHQiLCJpc0Jsb2NrIiwiaXNJbmxpbmUiLCJjb25zb2xlIiwibG9nIiwiaXNUeXBlIiwic29tZSIsImdldENsb3Nlc3QiLCJwYXJlbnQiLCJ3cmFwQmxvY2siLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFjQyxNQUFkLEVBQXNCQyxTQUF0QixFQUEyRTtBQUFBLE1BQTFDQyxLQUEwQyx1RUFBbEMsQ0FBa0M7QUFBQSxNQUEvQkMsU0FBK0IsdUVBQW5CTCxNQUFNTSxNQUFOLEVBQW1CO0FBQUEsY0FDdERMLElBRHNEO0FBQUEsTUFDcEZNLFlBRG9GLFNBQ3BGQSxZQURvRjtBQUFBLE1BQ3RFQyxXQURzRSxTQUN0RUEsV0FEc0U7QUFBQSxlQUUvRFAsSUFGK0Q7QUFBQSxNQUVsRlEsSUFGa0YsVUFFbEZBLElBRmtGO0FBQUEsTUFFNUVDLFFBRjRFLFVBRTVFQSxRQUY0RTs7QUFHMUYsTUFBTUMsY0FBYyxXQUFwQjs7QUFIMEYsTUFLbEZDLFFBTGtGLEdBSzdE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U0FBT0osU0FBUDtBQUNELENBeEZEOztBQTBGQSxJQUFNYyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0QsS0FBRCxFQUFXO0FBQUEsTUFDdkJULElBRHVCLEdBQ2RTLEtBRGMsQ0FDdkJULElBRHVCO0FBQUEsTUFFckJXLE1BRnFCLEdBRU9GLEtBRlAsQ0FFckJFLE1BRnFCO0FBQUEsTUFFYlUsR0FGYSxHQUVPWixLQUZQLENBRWJZLEdBRmE7QUFBQSxNQUVSUixJQUZRLEdBRU9KLEtBRlAsQ0FFUkksSUFGUTtBQUFBLE1BRUZtQixJQUZFLEdBRU92QixLQUZQLENBRUZ1QixJQUZFOztBQUc3QixNQUFJLENBQUNoQyxJQUFMLEVBQVc7QUFDVEEsV0FBT3FCLEdBQVA7QUFDRDtBQUNELE1BQUlSLFNBQVMsUUFBVCxJQUFzQixDQUFDQSxJQUFELElBQVNGLE1BQW5DLEVBQTRDO0FBQzFDLFdBQU8sY0FBT0MsTUFBUCxDQUFjO0FBQ25CWixnQkFEbUI7QUFFbkJXLG9CQUZtQjtBQUduQkUsZ0JBSG1CO0FBSW5CbUIsWUFBTUEsUUFBUTtBQUpLLEtBQWQsQ0FBUDtBQU1EO0FBQ0QsU0FBTyxhQUFNcEIsTUFBTixDQUFhO0FBQ2xCWixjQURrQjtBQUVsQlcsa0JBRmtCO0FBR2xCRSxjQUhrQjtBQUlsQm1CLFVBQU1BLFFBQVE7QUFKSSxHQUFiLENBQVA7QUFNRCxDQXBCRDtrQkFxQmUxQyxRIiwiZmlsZSI6ImV4dGVybmFsL3NsYXRlL2FkZC1ibG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHQsIEJsb2NrLCBJbmxpbmUgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgaGFzQmxvY2sgZnJvbSAnLi91dGlscy9oYXMtYmxvY2snO1xuXG5jb25zdCBhZGRCbG9jayA9ICh2YWx1ZSwgbm9kZSwgc2NoZW1hLCBwYXJlbnRLZXksIGluZGV4ID0gMCwgdHJhbnNmb3JtID0gdmFsdWUuY2hhbmdlKCkpID0+IHtcbiAgbGV0IHsgZGVmYXVsdE5vZGVzLCBkZWZhdWx0VGV4dCB9ID0gbm9kZTtcbiAgY29uc3QgeyB0eXBlLCBpbml0Tm9kZSB9ID0gbm9kZTtcbiAgY29uc3QgZGVmYXVsdE5vZGUgPSAncGFyYWdyYXBoJztcblxuICBjb25zdCB7IGRvY3VtZW50LCBibG9ja3MgfSA9IHZhbHVlO1xuXG4gIC8vIEhhbmRsZSBldmVyeXRoaW5nIGJ1dCBsaXN0IGJ1dHRvbnMuXG4gIGlmICh0eXBlICE9PSAnYnVsbGV0ZWQtbGlzdCcgJiYgdHlwZSAhPT0gJ251bWJlcmVkLWxpc3QnKSB7XG4gICAgY29uc3QgaXNBY3RpdmUgPSBoYXNCbG9jayh2YWx1ZSwgdHlwZSk7XG4gICAgY29uc3QgaXNMaXN0ID0gaGFzQmxvY2sodmFsdWUsICdidWxsZXRlZC1saXN0LWl0ZW0nKSB8fCBoYXNCbG9jayh2YWx1ZSwgJ251bWJlcmVkLWxpc3QtaXRlbScpO1xuXG4gICAgaWYgKGlzTGlzdCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtXG4gICAgICAgIC5zZXRCbG9jayhpc0FjdGl2ZSA/IGRlZmF1bHROb2RlIDogdHlwZSlcbiAgICAgICAgLnVud3JhcEJsb2NrKCdidWxsZXRlZC1saXN0JylcbiAgICAgICAgLnVud3JhcEJsb2NrKCdudW1iZXJlZC1saXN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbml0Tm9kZSkge1xuICAgICAgICBub2RlID0gaW5pdE5vZGUobm9kZSwgeyB2YWx1ZSwgc2NoZW1hLCBwYXJlbnRLZXksIGluZGV4LCB0cmFuc2Zvcm0gfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBibG9jayA9IGNyZWF0ZUJsb2NrKG5vZGUpO1xuXG4gICAgICBpZiAoZGVmYXVsdE5vZGVzICYmIHR5cGVvZiBkZWZhdWx0Tm9kZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGVmYXVsdE5vZGVzID0gZGVmYXVsdE5vZGVzKHsgdmFsdWUsIG5vZGUsIHNjaGVtYSwgcGFyZW50S2V5LCBpbmRleCwgdHJhbnNmb3JtIH0pO1xuICAgICAgfSBlbHNlIGlmICghZGVmYXVsdE5vZGVzICYmICFibG9jay5pc1ZvaWQpIHtcbiAgICAgICAgZGVmYXVsdE5vZGVzID0gW1RleHQuY3JlYXRlKGRlZmF1bHRUZXh0KV07XG4gICAgICB9XG5cbiAgICAgIGlmIChibG9jayAmJiBibG9jay5raW5kID09PSAnYmxvY2snKSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHBhcmVudEtleVxuICAgICAgICAgID8gdHJhbnNmb3JtLmluc2VydE5vZGVCeUtleShwYXJlbnRLZXksIGluZGV4LCBibG9jaylcbiAgICAgICAgICA6IHRyYW5zZm9ybS5pbnNlcnRCbG9jayhibG9jayk7XG4gICAgICB9IGVsc2UgaWYgKGJsb2NrKSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHBhcmVudEtleVxuICAgICAgICAgID8gdHJhbnNmb3JtLmluc2VydE5vZGVCeUtleShwYXJlbnRLZXksIGluZGV4LCBibG9jaylcbiAgICAgICAgICA6IHRyYW5zZm9ybS5pbnNlcnRJbmxpbmUoYmxvY2spO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVmYXVsdE5vZGVzKSB7XG4gICAgICAgIGRlZmF1bHROb2Rlcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgJiYgc2NoZW1hLm5vZGVzW2l0ZW1dKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBhZGRCbG9jayhcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgIHNjaGVtYS5ub2Rlc1tpdGVtXS5zbGF0ZSxcbiAgICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgICBibG9jay5rZXksXG4gICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICB0cmFuc2Zvcm0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlICYmIHNjaGVtYS5ub2Rlc1tpdGVtLnR5cGVdKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBhZGRCbG9jayh2YWx1ZSwgaXRlbSwgc2NoZW1hLCBibG9jay5rZXksIGluZGV4LCB0cmFuc2Zvcm0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoVGV4dC5pc1RleHQoaXRlbSkgfHwgQmxvY2suaXNCbG9jayhpdGVtKSB8fCBJbmxpbmUuaXNJbmxpbmUoaXRlbSkpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5pbnNlcnROb2RlQnlLZXkoYmxvY2sua2V5LCBpbmRleCwgaXRlbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9XG4gICAgICAgICAgICAgIGJsb2NrLmtpbmQgPT09ICdibG9jaydcbiAgICAgICAgICAgICAgICA/IHRyYW5zZm9ybS5pbnNlcnROb2RlQnlLZXkoYmxvY2sua2V5LCBpbmRleCwgQmxvY2suY3JlYXRlKGl0ZW0pKVxuICAgICAgICAgICAgICAgIDogdHJhbnNmb3JtLmluc2VydE5vZGVCeUtleShibG9jay5rZXksIGluZGV4LCBJbmxpbmUuY3JlYXRlKGl0ZW0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBIYW5kbGUgdGhlIGV4dHJhIHdyYXBwaW5nIHJlcXVpcmVkIGZvciBsaXN0IGJ1dHRvbnMuXG4gICAgY29uc3QgaXNMaXN0ID0gaGFzQmxvY2sodmFsdWUsICdidWxsZXRlZC1saXN0LWl0ZW0nKSB8fCBoYXNCbG9jayh2YWx1ZSwgJ251bWJlcmVkLWxpc3QtaXRlbScpO1xuICAgIGNvbnNvbGUubG9nKGlzTGlzdCk7XG4gICAgY29uc3QgaXNUeXBlID0gYmxvY2tzLnNvbWUoXG4gICAgICBibG9jayA9PiAhIWRvY3VtZW50LmdldENsb3Nlc3QoYmxvY2ssIHBhcmVudCA9PiBwYXJlbnQudHlwZSA9PT0gdHlwZSksXG4gICAgKTtcblxuICAgIGlmIChpc0xpc3QgJiYgaXNUeXBlKSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbiAgICAgICAgLnNldEJsb2NrKGRlZmF1bHROb2RlKVxuICAgICAgICAudW53cmFwQmxvY2soJ2J1bGxldGVkLWxpc3QnKVxuICAgICAgICAudW53cmFwQmxvY2soJ251bWJlcmVkLWxpc3QnKTtcbiAgICB9IGVsc2UgaWYgKGlzTGlzdCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtXG4gICAgICAgIC51bndyYXBCbG9jayh0eXBlID09PSAnYnVsbGV0ZWQtbGlzdCcgPyAnYnVsbGV0ZWQtbGlzdCcgOiAnbnVtYmVyZWQtbGlzdCcpXG4gICAgICAgIC53cmFwQmxvY2sodHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuICAgICAgICAuc2V0QmxvY2sodHlwZSA9PT0gJ2J1bGxldGVkLWxpc3QnID8gJ2J1bGxldGVkLWxpc3QtaXRlbScgOiAnbnVtYmVyZWQtbGlzdC1pdGVtJylcbiAgICAgICAgLndyYXBCbG9jayh0eXBlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJhbnNmb3JtO1xufTtcblxuY29uc3QgY3JlYXRlQmxvY2sgPSAoYmxvY2spID0+IHtcbiAgbGV0IHsgdHlwZSB9ID0gYmxvY2s7XG4gIGNvbnN0IHsgaXNWb2lkLCBrZXksIGtpbmQsIGRhdGEgfSA9IGJsb2NrO1xuICBpZiAoIXR5cGUpIHtcbiAgICB0eXBlID0ga2V5O1xuICB9XG4gIGlmIChraW5kID09PSAnaW5saW5lJyB8fCAoIWtpbmQgJiYgaXNWb2lkKSkge1xuICAgIHJldHVybiBJbmxpbmUuY3JlYXRlKHtcbiAgICAgIHR5cGUsXG4gICAgICBpc1ZvaWQsXG4gICAgICBraW5kLFxuICAgICAgZGF0YTogZGF0YSB8fCB7fSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gQmxvY2suY3JlYXRlKHtcbiAgICB0eXBlLFxuICAgIGlzVm9pZCxcbiAgICBraW5kLFxuICAgIGRhdGE6IGRhdGEgfHwge30sXG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGFkZEJsb2NrO1xuIl19
