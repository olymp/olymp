'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _attrs = require('./attrs');

var _attrs2 = _interopRequireDefault(_attrs);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var convertSlateToPug = function convertSlateToPug(value) {
  var line = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var column = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (value.kind === 'value') {
    var nodes = [].concat(_toConsumableArray(value.document.nodes || [])).map(function (x, i) {
      return convertSlateToPug(x, line + i + 1, column + 1);
    }).filter(function (x) {
      return x;
    });
    return (0, _utils2.default)({
      line: line,
      column: column,
      type: 'Block',
      attrs: (0, _attrs2.default)(value.data),
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
      attrs: (0, _attrs2.default)(value.data),
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
      attrs: (0, _attrs2.default)(value.data),
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

exports.default = convertSlateToPug;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3B1Zy90by1wdWcvY29udmVydC5lczYiXSwibmFtZXMiOlsiY29udmVydFNsYXRlVG9QdWciLCJ2YWx1ZSIsImxpbmUiLCJjb2x1bW4iLCJraW5kIiwibm9kZXMiLCJkb2N1bWVudCIsIm1hcCIsIngiLCJpIiwiZmlsdGVyIiwidHlwZSIsImF0dHJzIiwiZGF0YSIsImF0dHJpYnV0ZUJsb2NrcyIsImlzQmxvY2siLCJmaW5kIiwiaXNJbmxpbmUiLCJuYW1lIiwidGV4dE9ubHkiLCJibG9jayIsInZhbCIsInRleHQiLCJsZWF2ZXMiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBaUM7QUFBQSxNQUF6QkMsSUFBeUIsdUVBQWxCLENBQWtCO0FBQUEsTUFBZkMsTUFBZSx1RUFBTixDQUFNOztBQUN6RCxNQUFJRixNQUFNRyxJQUFOLEtBQWUsT0FBbkIsRUFBNEI7QUFDMUIsUUFBTUMsUUFBUSw2QkFBS0osTUFBTUssUUFBTixDQUFlRCxLQUFmLElBQXdCLEVBQTdCLEdBQ1hFLEdBRFcsQ0FDUCxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVVCxrQkFBa0JRLENBQWxCLEVBQXFCTixPQUFPTyxDQUFQLEdBQVcsQ0FBaEMsRUFBbUNOLFNBQVMsQ0FBNUMsQ0FBVjtBQUFBLEtBRE8sRUFFWE8sTUFGVyxDQUVKO0FBQUEsYUFBS0YsQ0FBTDtBQUFBLEtBRkksQ0FBZDtBQUdBLFdBQU8scUJBQUk7QUFDVE4sZ0JBRFM7QUFFVEMsb0JBRlM7QUFHVFEsWUFBTSxPQUhHO0FBSVRDLGFBQU8scUJBQWFYLE1BQU1ZLElBQW5CLENBSkU7QUFLVEMsdUJBQWlCLEVBTFI7QUFNVFQ7QUFOUyxLQUFKLENBQVA7QUFRRCxHQVpELE1BWU8sSUFBSUosTUFBTUcsSUFBTixLQUFlLE9BQW5CLEVBQTRCO0FBQ2pDLFFBQU1XLFVB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TFEsY0FBTSxPQUhEO0FBSUxOLGVBQU9pQixPQUFPLENBQUMsRUFBRVgsTUFBTSxNQUFSLEVBQWdCVSxLQUFLQyxJQUFyQixFQUEyQnBCLFVBQTNCLEVBQWlDQyxjQUFqQyxFQUFELENBQVAsR0FBcUQ7QUFKdkQ7QUFSRixLQUFQO0FBZUQ7QUFDRixDQTNFRDs7a0JBNkVlSCxpQiIsImZpbGUiOiJleHRlcm5hbC9zbGF0ZS9wdWcvdG8tcHVnL2NvbnZlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udmVydEF0dHJzIGZyb20gJy4vYXR0cnMnO1xuaW1wb3J0IGdlbiBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgY29udmVydFNsYXRlVG9QdWcgPSAodmFsdWUsIGxpbmUgPSAwLCBjb2x1bW4gPSAwKSA9PiB7XG4gIGlmICh2YWx1ZS5raW5kID09PSAndmFsdWUnKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbLi4uKHZhbHVlLmRvY3VtZW50Lm5vZGVzIHx8IFtdKV1cbiAgICAgIC5tYXAoKHgsIGkpID0+IGNvbnZlcnRTbGF0ZVRvUHVnKHgsIGxpbmUgKyBpICsgMSwgY29sdW1uICsgMSkpXG4gICAgICAuZmlsdGVyKHggPT4geCk7XG4gICAgcmV0dXJuIGdlbih7XG4gICAgICBsaW5lLFxuICAgICAgY29sdW1uLFxuICAgICAgdHlwZTogJ0Jsb2NrJyxcbiAgICAgIGF0dHJzOiBjb252ZXJ0QXR0cnModmFsdWUuZGF0YSksXG4gICAgICBhdHRyaWJ1dGVCbG9ja3M6IFtdLFxuICAgICAgbm9kZXMsXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodmFsdWUua2luZCA9PT0gJ2Jsb2NrJykge1xuICAgIGNvbnN0IGlzQmxvY2sgPSAhIVsuLi4odmFsdWUubm9kZXMgfHwgW10pXS5maW5kKHggPT4geC5raW5kID09PSAnYmxvY2snKTtcbiAgICBjb25zdCBpc0lubGluZSA9XG4gICAgICAhaXNCbG9jayAmJiAhIVsuLi4odmFsdWUubm9kZXMgfHwgW10pXS5maW5kKHggPT4geC5raW5kID09PSAnaW5saW5lJyk7XG4gICAgY29uc3Qgbm9kZXMgPSBpc0Jsb2NrXG4gICAgICA/IFsuLi4odmFsdWUubm9kZXMgfHwgW10pXVxuICAgICAgICAgIC5tYXAoKHgsIGkpID0+IGNvbnZlcnRTbGF0ZVRvUHVnKHgsIGxpbmUgKyBpICsgMSwgY29sdW1uICsgMSkpXG4gICAgICAgICAgLmZpbHRlcih4ID0+IHgpXG4gICAgICA6IGlzSW5saW5lXG4gICAgICAgID8gWy4uLih2YWx1ZS5ub2RlcyB8fCBbXSldXG4gICAgICAgICAgICAubWFwKCh4LCBpKSA9PlxuICAgICAgICAgICAgICBjb252ZXJ0U2xhdGVUb1B1Zyh4LCBsaW5lICsgaSArIDEsIGNvbHVtbiArIDEsIGlzSW5saW5lKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4KVxuICAgICAgICA6IFsuLi4odmFsdWUubm9kZXMgfHwgW10pXVxuICAgICAgICAgICAgLm1hcCgoeCwgaSkgPT4gY29udmVydFNsYXRlVG9QdWcoeCwgbGluZSwgY29sdW1uICsgMSkpXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmUsXG4gICAgICBjb2x1bW4sXG4gICAgICB0eXBlOiAnVGFnJyxcbiAgICAgIG5hbWU6IHZhbHVlLnR5cGUsXG4gICAgICBhdHRyczogY29udmVydEF0dHJzKHZhbHVlLmRhdGEpLFxuICAgICAgdGV4dE9ubHk6IGlzSW5saW5lLFxuICAgICAgYXR0cmlidXRlQmxvY2tzOiBbXSxcbiAgICAgIGJsb2NrOiB7XG4gICAgICAgIGxpbmUsXG4gICAgICAgIGNvbHVtbixcbiAgICAgICAgdHlwZTogJ0Jsb2NrJyxcbiAgICAgICAgbm9kZXMsXG4gICAgICB9LFxuICAgIH07XG4gIH0gZWxzZSBpZiAodmFsdWUua2luZCA9PT0gJ3RleHQnKSB7XG4gICAgY29uc3QgdmFsID1cbiAgICAgIHZhbHVlLnRleHQgfHwgWy4uLih2YWx1ZS5sZWF2ZXMgfHwgW10pXS5tYXAoeCA9PiB4LnRleHQpLmpvaW4oJycpO1xuICAgIHJldHVybiB7XG4gICAgICBsaW5lLFxuICAgICAgY29sdW1uLFxuICAgICAgdHlwZTogJ1RleHQnLFxuICAgICAgYXR0cmlidXRlQmxvY2tzOiBbXSxcbiAgICAgIGF0dHJzOiBbXSxcbiAgICAgIHZhbCxcbiAgICB9O1xuICB9IGVsc2UgaWYgKHZhbHVlLmtpbmQgPT09ICdpbmxpbmUnKSB7XG4gICAgY29uc3QgdGV4dCA9XG4gICAgICB2YWx1ZS50ZXh0IHx8IFsuLi4odmFsdWUubGVhdmVzIHx8IFtdKV0ubWFwKHggPT4geC50ZXh0KS5qb2luKCcnKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGluZSxcbiAgICAgIGNvbHVtbixcbiAgICAgIGF0dHJzOiBjb252ZXJ0QXR0cnModmFsdWUuZGF0YSksXG4gICAgICBhdHRyaWJ1dGVCbG9ja3M6IFtdLFxuICAgICAgdHlwZTogJ1RhZycsXG4gICAgICBuYW1lOiB2YWx1ZS50eXBlLFxuICAgICAgaXNJbmxpbmU6IHRydWUsXG4gICAgICBibG9jazoge1xuICAgICAgICBsaW5lLFxuICAgICAgICBjb2x1bW4sXG4gICAgICAgIHR5cGU6ICdCbG9jaycsXG4gICAgICAgIG5vZGVzOiB0ZXh0ID8gW3sgdHlwZTogJ1RleHQnLCB2YWw6IHRleHQsIGxpbmUsIGNvbHVtbiB9XSA6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb252ZXJ0U2xhdGVUb1B1ZztcbiJdfQ==
