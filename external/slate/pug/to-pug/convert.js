function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import convertAttrs from './attrs';
import gen from './utils';

var convertSlateToPug = function convertSlateToPug(value) {
  var line = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var column = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (value.kind === 'value') {
    var nodes = [].concat(_toConsumableArray(value.document.nodes || [])).map(function (x, i) {
      return convertSlateToPug(x, line + i + 1, column + 1);
    }).filter(function (x) {
      return x;
    });
    return gen({
      line: line,
      column: column,
      type: 'Block',
      attrs: convertAttrs(value.data),
      attributeBlocks: [],
      nodes: nodes
    });
  } else if (value.kind === 'block') {
    var isBlock = !![].concat(_toConsumableArray(value.nodes || [])).find(function (x) {
      return x.kind === 'block';
    });
    var isInline = !isBlock && !![].concat(_toConsumableArray(value.nodes || [])).find(function (x) {
      return x.kind === 'inline';
    });
    var _nodes = isBlock ? [].concat(_toConsumableArray(value.nodes || [])).map(function (x, i) {
      return convertSlateToPug(x, line + i + 1, column + 1);
    }).filter(function (x) {
      return x;
    }) : isInline ? [].concat(_toConsumableArray(value.nodes || [])).map(function (x, i) {
      return convertSlateToPug(x, line + i + 1, column + 1, isInline);
    }).filter(function (x) {
      return x;
    }) : [].concat(_toConsumableArray(value.nodes || [])).map(function (x, i) {
      return convertSlateToPug(x, line, column + 1);
    }).filter(function (x) {
      return x;
    });
    return {
      line: line,
      column: column,
      type: 'Tag',
      name: value.type,
      attrs: convertAttrs(value.data),
      textOnly: isInline,
      attributeBlocks: [],
      block: {
        line: line,
        column: column,
        type: 'Block',
        nodes: _nodes
      }
    };
  } else if (value.kind === 'text') {
    var val = value.text || [].concat(_toConsumableArray(value.leaves || [])).map(function (x) {
      return x.text;
    }).join('');
    return {
      line: line,
      column: column,
      type: 'Text',
      attributeBlocks: [],
      attrs: [],
      val: val
    };
  } else if (value.kind === 'inline') {
    var text = value.text || [].concat(_toConsumableArray(value.leaves || [])).map(function (x) {
      return x.text;
    }).join('');
    return {
      line: line,
      column: column,
      attrs: convertAttrs(value.data),
      attributeBlocks: [],
      type: 'Tag',
      name: value.type,
      isInline: true,
      block: {
        line: line,
        column: column,
        type: 'Block',
        nodes: text ? [{ type: 'Text', val: text, line: line, column: column }] : []
      }
    };
  }
};

export default convertSlateToPug;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3B1Zy90by1wdWcvY29udmVydC5lczYiXSwibmFtZXMiOlsiY29udmVydEF0dHJzIiwiZ2VuIiwiY29udmVydFNsYXRlVG9QdWciLCJ2YWx1ZSIsImxpbmUiLCJjb2x1bW4iLCJraW5kIiwibm9kZXMiLCJkb2N1bWVudCIsIm1hcCIsIngiLCJpIiwiZmlsdGVyIiwidHlwZSIsImF0dHJzIiwiZGF0YSIsImF0dHJpYnV0ZUJsb2NrcyIsImlzQmxvY2siLCJmaW5kIiwiaXNJbmxpbmUiLCJuYW1lIiwidGV4dE9ubHkiLCJibG9jayIsInZhbCIsInRleHQiLCJsZWF2ZXMiLCJqb2luIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLFlBQVAsTUFBeUIsU0FBekI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFNBQWhCOztBQUVBLElBQU1DLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBaUM7QUFBQSxNQUF6QkMsSUFBeUIsdUVBQWxCLENBQWtCO0FBQUEsTUFBZkMsTUFBZSx1RUFBTixDQUFNOztBQUN6RCxNQUFJRixNQUFNRyxJQUFOLEtBQWUsT0FBbkIsRUFBNEI7QUFDMUIsUUFBTUMsUUFBUSw2QkFBS0osTUFBTUssUUFBTixDQUFlRCxLQUFmLElBQXdCLEVBQTdCLEdBQ1hFLEdBRFcsQ0FDUCxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVVCxrQkFBa0JRLENBQWxCLEVBQXFCTixPQUFPTyxDQUFQLEdBQVcsQ0FBaEMsRUFBbUNOLFNBQVMsQ0FBNUMsQ0FBVjtBQUFBLEtBRE8sRUFFWE8sTUFGVyxDQUVKO0FBQUEsYUFBS0YsQ0FBTDtBQUFBLEtBRkksQ0FBZDtBQUdBLFdBQU9ULElBQUk7QUFDVEcsZ0JBRFM7QUFFVEMsb0JBRlM7QUFHVFEsWUFBTSxPQUhHO0FBSVRDLGFBQU9kLGFBQWFHLE1BQU1ZLElBQW5CLENBSkU7QUFLVEMsdUJBQWlCLEVBTFI7QUFNVFQ7QUFOUyxLQUFKLENBQVA7QUFRRCxHQVpE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T0xNLGdCQUFVLElBUEw7QUFRTEcsYUFBTztBQUNMbEIsa0JBREs7QUFFTEMsc0JBRks7QUFHTFEsY0FBTSxPQUhEO0FBSUxOLGVBQU9pQixPQUFPLENBQUMsRUFBRVgsTUFBTSxNQUFSLEVBQWdCVSxLQUFLQyxJQUFyQixFQUEyQnBCLFVBQTNCLEVBQWlDQyxjQUFqQyxFQUFELENBQVAsR0FBcUQ7QUFKdkQ7QUFSRixLQUFQO0FBZUQ7QUFDRixDQTNFRDs7QUE2RUEsZUFBZUgsaUJBQWYiLCJmaWxlIjoicGFja2FnZXMvc2xhdGUvcHVnL3RvLXB1Zy9jb252ZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnZlcnRBdHRycyBmcm9tICcuL2F0dHJzJztcbmltcG9ydCBnZW4gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGNvbnZlcnRTbGF0ZVRvUHVnID0gKHZhbHVlLCBsaW5lID0gMCwgY29sdW1uID0gMCkgPT4ge1xuICBpZiAodmFsdWUua2luZCA9PT0gJ3ZhbHVlJykge1xuICAgIGNvbnN0IG5vZGVzID0gWy4uLih2YWx1ZS5kb2N1bWVudC5ub2RlcyB8fCBbXSldXG4gICAgICAubWFwKCh4LCBpKSA9PiBjb252ZXJ0U2xhdGVUb1B1Zyh4LCBsaW5lICsgaSArIDEsIGNvbHVtbiArIDEpKVxuICAgICAgLmZpbHRlcih4ID0+IHgpO1xuICAgIHJldHVybiBnZW4oe1xuICAgICAgbGluZSxcbiAgICAgIGNvbHVtbixcbiAgICAgIHR5cGU6ICdCbG9jaycsXG4gICAgICBhdHRyczogY29udmVydEF0dHJzKHZhbHVlLmRhdGEpLFxuICAgICAgYXR0cmlidXRlQmxvY2tzOiBbXSxcbiAgICAgIG5vZGVzLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHZhbHVlLmtpbmQgPT09ICdibG9jaycpIHtcbiAgICBjb25zdCBpc0Jsb2NrID0gISFbLi4uKHZhbHVlLm5vZGVzIHx8IFtdKV0uZmluZCh4ID0+IHgua2luZCA9PT0gJ2Jsb2NrJyk7XG4gICAgY29uc3QgaXNJbmxpbmUgPVxuICAgICAgIWlzQmxvY2sgJiYgISFbLi4uKHZhbHVlLm5vZGVzIHx8IFtdKV0uZmluZCh4ID0+IHgua2luZCA9PT0gJ2lubGluZScpO1xuICAgIGNvbnN0IG5vZGVzID0gaXNCbG9ja1xuICAgICAgPyBbLi4uKHZhbHVlLm5vZGVzIHx8IFtdKV1cbiAgICAgICAgICAubWFwKCh4LCBpKSA9PiBjb252ZXJ0U2xhdGVUb1B1Zyh4LCBsaW5lICsgaSArIDEsIGNvbHVtbiArIDEpKVxuICAgICAgICAgIC5maWx0ZXIoeCA9PiB4KVxuICAgICAgOiBpc0lubGluZVxuICAgICAgICA/IFsuLi4odmFsdWUubm9kZXMgfHwgW10pXVxuICAgICAgICAgICAgLm1hcCgoeCwgaSkgPT5cbiAgICAgICAgICAgICAgY29udmVydFNsYXRlVG9QdWcoeCwgbGluZSArIGkgKyAxLCBjb2x1bW4gKyAxLCBpc0lubGluZSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgOiBbLi4uKHZhbHVlLm5vZGVzIHx8IFtdKV1cbiAgICAgICAgICAgIC5tYXAoKHgsIGkpID0+IGNvbnZlcnRTbGF0ZVRvUHVnKHgsIGxpbmUsIGNvbHVtbiArIDEpKVxuICAgICAgICAgICAgLmZpbHRlcih4ID0+IHgpO1xuICAgIHJldHVybiB7XG4gICAgICBsaW5lLFxuICAgICAgY29sdW1uLFxuICAgICAgdHlwZTogJ1RhZycsXG4gICAgICBuYW1lOiB2YWx1ZS50eXBlLFxuICAgICAgYXR0cnM6IGNvbnZlcnRBdHRycyh2YWx1ZS5kYXRhKSxcbiAgICAgIHRleHRPbmx5OiBpc0lubGluZSxcbiAgICAgIGF0dHJpYnV0ZUJsb2NrczogW10sXG4gICAgICBibG9jazoge1xuICAgICAgICBsaW5lLFxuICAgICAgICBjb2x1bW4sXG4gICAgICAgIHR5cGU6ICdCbG9jaycsXG4gICAgICAgIG5vZGVzLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHZhbHVlLmtpbmQgPT09ICd0ZXh0Jykge1xuICAgIGNvbnN0IHZhbCA9XG4gICAgICB2YWx1ZS50ZXh0IHx8IFsuLi4odmFsdWUubGVhdmVzIHx8IFtdKV0ubWFwKHggPT4geC50ZXh0KS5qb2luKCcnKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGluZSxcbiAgICAgIGNvbHVtbixcbiAgICAgIHR5cGU6ICdUZXh0JyxcbiAgICAgIGF0dHJpYnV0ZUJsb2NrczogW10sXG4gICAgICBhdHRyczogW10sXG4gICAgICB2YWwsXG4gICAgfTtcbiAgfSBlbHNlIGlmICh2YWx1ZS5raW5kID09PSAnaW5saW5lJykge1xuICAgIGNvbnN0IHRleHQgPVxuICAgICAgdmFsdWUudGV4dCB8fCBbLi4uKHZhbHVlLmxlYXZlcyB8fCBbXSldLm1hcCh4ID0+IHgudGV4dCkuam9pbignJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmUsXG4gICAgICBjb2x1bW4sXG4gICAgICBhdHRyczogY29udmVydEF0dHJzKHZhbHVlLmRhdGEpLFxuICAgICAgYXR0cmlidXRlQmxvY2tzOiBbXSxcbiAgICAgIHR5cGU6ICdUYWcnLFxuICAgICAgbmFtZTogdmFsdWUudHlwZSxcbiAgICAgIGlzSW5saW5lOiB0cnVlLFxuICAgICAgYmxvY2s6IHtcbiAgICAgICAgbGluZSxcbiAgICAgICAgY29sdW1uLFxuICAgICAgICB0eXBlOiAnQmxvY2snLFxuICAgICAgICBub2RlczogdGV4dCA/IFt7IHR5cGU6ICdUZXh0JywgdmFsOiB0ZXh0LCBsaW5lLCBjb2x1bW4gfV0gOiBbXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udmVydFNsYXRlVG9QdWc7XG4iXX0=
