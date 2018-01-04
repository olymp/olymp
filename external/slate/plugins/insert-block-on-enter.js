'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slate = require('slate');

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('slate:insert-block-on-enter');

function InsertBlockOnEnterPlugin() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var blockArg = args[0];
  var blockInputProps = void 0;
  var defaultProps = { kind: 'block' };

  if (!blockArg) {
    throw new Error('You must pass a block type (string) or object for the block to insert.');
  }
  if (args[0].constructor.name === 'String') {
    blockInputProps = Object.assign({}, defaultProps, { type: blockArg });
  } else {
    blockInputProps = Object.assign({}, defaultProps, blockArg);
  }

  function onKeyDown(e, change) {
    if (e.key === 'Enter') {
      var value = change.value;
      var document = value.document,
          startKey = value.startKey,
          startBlock = value.startBlock;


      if (startBlock && ['code', 'code-line'].includes(startBlock.type)) {
        return change.insertBlock(startBlock.type);
      }
      if (startBlock && !startBlock.isVoid && startBlock.type !== 'paragraph' && startBlock.type !== 'bulleted-list' && startBlock.type !== 'numbered-list' && startBlock.type !== 'list-item') {
        var nextBlock = document.getNextBlock(startKey);
        var prevBlock = document.getPreviousBlock(startKey);
        var blockToInsert = _slate.Block.create(blockInputProps);
        return change.collapseToEndOf(startBlock).insertBlock(blockToInsert).collapseToEnd();
      }
      if (startBlock && startBlock.isVoid) {
        var _nextBlock = document.getNextBlock(startKey);
        var _prevBlock = document.getPreviousBlock(startKey);
        var isFocusedStart = value.selection.hasEdgeAtStartOf(startBlock);
        var isFocusedEnd = value.selection.hasEdgeAtEndOf(startBlock);
        var _blockToInsert = _slate.Block.create(blockInputProps);

        // Void block at the end of the document
        if (!_nextBlock) {
          if (isFocusedEnd) {
            debug('no nextBlock, PrevBlock, isFocusedEnd');
            return change.collapseToEndOf(startBlock).insertBlock(_blockToInsert).collapseToEnd();
          }
          if (_prevBlock) {
            debug('no nextBlock, PrevBlock, isFocusedStart');
            var index = document.nodes.indexOf(_prevBlock);
            return change.collapseToEndOf(_prevBlock).insertNodeByKey(document.key, index + 1, _blockToInsert).collapseToStartOf(startBlock);
          }
          debug('no nextBlock, no PrevBlock');
          return change.collapseToStartOf(startBlock).insertNodeByKey(document.key, 0, _blockToInsert);
        }
        // Void block between two blocks
        if (_nextBlock && _prevBlock) {
          if (isFocusedStart) {
            debug('nextBlock, prevBlock, isFocusedStart');
            var _index = document.nodes.indexOf(_prevBlock);
            return change.collapseToEndOf(_prevBlock).insertNodeByKey(document.key, _index + 1, _blockToInsert).collapseToStartOf(startBlock);
          }
          debug('nextBlock, prevBlock, isFocusedEnd');
          // NOe rart skjer her
          return change.collapseToEndOf(startBlock).insertBlock(_blockToInsert);
        }
        // Void block in the beginning of the document
        if (_nextBlock && !_prevBlock) {
          if (isFocusedStart) {
            debug('nextBlock, no prevBlock, isFocusedStart');
            return change.collapseToStartOf(startBlock).insertNodeByKey(document.key, 0, _blockToInsert);
          }
          debug('nextBlock, no prevBlock, isFocusedEnd');
          return change.collapseToEndOf(startBlock).insertBlock(_blockToInsert);
        }
      }
    }
  }

  return {
    onKeyDown: onKeyDown
  };
}

exports.default = InsertBlockOnEnterPlugin;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3BsdWdpbnMvaW5zZXJ0LWJsb2NrLW9uLWVudGVyLmVzNiJdLCJuYW1lcyI6WyJkZWJ1ZyIsIkluc2VydEJsb2NrT25FbnRlclBsdWdpbiIsImFyZ3MiLCJibG9ja0FyZyIsImJsb2NrSW5wdXRQcm9wcyIsImRlZmF1bHRQcm9wcyIsImtpbmQiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInR5cGUiLCJvbktleURvd24iLCJlIiwiY2hhbmdlIiwia2V5IiwidmFsdWUiLCJkb2N1bWVudCIsInN0YXJ0S2V5Iiwic3RhcnRCbG9jayIsImluY2x1ZGVzIiwiaW5zZXJ0QmxvY2siLCJpc1ZvaWQiLCJuZXh0QmxvY2siLCJnZXROZXh0QmxvY2siLCJwcmV2QmxvY2siLCJnZXRQcmV2aW91c0Jsb2NrIiwiYmxvY2tUb0luc2VydCIsImNyZWF0ZSIsImNvbGxhcHNlVG9FbmRPZiIsImNvbGxhcHNlVG9FbmQiLCJpc0ZvY3VzZWRTdGFydCIsInNlbGVjdGlvbiIsImhhc0VkZ2VBdFN0YXJ0T2YiLCJpc0ZvY3VzZWRFbmQiLCJoYXNFZGdlQXRFbmRPZiIsImluZGV4Iiwibm9kZXMiLCJpbmRleE9mIiwiaW5zZXJ0Tm9kZUJ5S2V5IiwiY29sbGFwc2VUb1N0YXJ0T2YiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRLHFCQUFNLDZCQUFOLENBQWQ7O0FBRUEsU0FBU0Msd0JBQVQsR0FBMkM7QUFBQSxvQ0FBTkMsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBQ3pDLE1BQU1DLFdBQVdELEtBQUssQ0FBTCxDQUFqQjtBQUNBLE1BQUlFLHdCQUFKO0FBQ0EsTUFBTUMsZUFBZSxFQUFFQyxNQUFNLE9BQVIsRUFBckI7O0FBRUEsTUFBSSxDQUFDSCxRQUFMLEVBQWU7QUFDYixVQUFNLElBQUlJLEtBQUosQ0FDSix3RUFESSxDQUFOO0FBR0Q7QUFDRCxNQUFJTCxLQUFL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QUFhRSxVQUFqQixFQUE0QjtBQUMxQixjQUFJTSxjQUFKLEVBQW9CO0FBQ2xCaEMsa0JBQU0sc0NBQU47QUFDQSxnQkFBTXFDLFNBQVFuQixTQUFTb0IsS0FBVCxDQUFlQyxPQUFmLENBQXVCYixVQUF2QixDQUFkO0FBQ0EsbUJBQU9YLE9BQ0plLGVBREksQ0FDWUosVUFEWixFQUVKYyxlQUZJLENBRVl0QixTQUFTRixHQUZyQixFQUUwQnFCLFNBQVEsQ0FGbEMsRUFFcUNULGNBRnJDLEVBR0phLGlCQUhJLENBR2NyQixVQUhkLENBQVA7QUFJRDtBQUNEcEIsZ0JBQU0sb0NBQU47QUFDQTtBQUNBLGlCQUFPZSxPQUFPZSxlQUFQLENBQXVCVixVQUF2QixFQUFtQ0UsV0FBbkMsQ0FBK0NNLGNBQS9DLENBQVA7QUFDRDtBQUNEO0FBQ0EsWUFBSUosY0FBYSxDQUFDRSxVQUFsQixFQUE2QjtBQUMzQixjQUFJTSxjQUFKLEVBQW9CO0FBQ2xCaEMsa0JBQU0seUNBQU47QUFDQSxtQkFBT2UsT0FDSjBCLGlCQURJLENBQ2NyQixVQURkLEVBRUpvQixlQUZJLENBRVl0QixTQUFTRixHQUZyQixFQUUwQixDQUYxQixFQUU2QlksY0FGN0IsQ0FBUDtBQUdEO0FBQ0Q1QixnQkFBTSx1Q0FBTjtBQUNBLGlCQUFPZSxPQUFPZSxlQUFQLENBQXVCVixVQUF2QixFQUFtQ0UsV0FBbkMsQ0FBK0NNLGNBQS9DLENBQVA7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPO0FBQ0xmO0FBREssR0FBUDtBQUdEOztrQkFFY1osd0IiLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvcGx1Z2lucy9pbnNlcnQtYmxvY2stb24tZW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbG9jayB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCBEZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcoJ3NsYXRlOmluc2VydC1ibG9jay1vbi1lbnRlcicpO1xuXG5mdW5jdGlvbiBJbnNlcnRCbG9ja09uRW50ZXJQbHVnaW4oLi4uYXJncykge1xuICBjb25zdCBibG9ja0FyZyA9IGFyZ3NbMF07XG4gIGxldCBibG9ja0lucHV0UHJvcHM7XG4gIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHsga2luZDogJ2Jsb2NrJyB9O1xuXG4gIGlmICghYmxvY2tBcmcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnWW91IG11c3QgcGFzcyBhIGJsb2NrIHR5cGUgKHN0cmluZykgb3Igb2JqZWN0IGZvciB0aGUgYmxvY2sgdG8gaW5zZXJ0LicsXG4gICAgKTtcbiAgfVxuICBpZiAoYXJnc1swXS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnU3RyaW5nJykge1xuICAgIGJsb2NrSW5wdXRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQcm9wcywgeyB0eXBlOiBibG9ja0FyZyB9KTtcbiAgfSBlbHNlIHtcbiAgICBibG9ja0lucHV0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UHJvcHMsIGJsb2NrQXJnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5RG93bihlLCBjaGFuZ2UpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGNoYW5nZTtcbiAgICAgIGNvbnN0IHsgZG9jdW1lbnQsIHN0YXJ0S2V5LCBzdGFydEJsb2NrIH0gPSB2YWx1ZTtcblxuICAgICAgaWYgKHN0YXJ0QmxvY2sgJiYgWydjb2RlJywgJ2NvZGUtbGluZSddLmluY2x1ZGVzKHN0YXJ0QmxvY2sudHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIGNoYW5nZS5pbnNlcnRCbG9jayhzdGFydEJsb2NrLnR5cGUpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBzdGFydEJsb2NrICYmXG4gICAgICAgICFzdGFydEJsb2NrLmlzVm9pZCAmJlxuICAgICAgICBzdGFydEJsb2NrLnR5cGUgIT09ICdwYXJhZ3JhcGgnICYmXG4gICAgICAgIHN0YXJ0QmxvY2sudHlwZSAhPT0gJ2J1bGxldGVkLWxpc3QnICYmXG4gICAgICAgIHN0YXJ0QmxvY2sudHlwZSAhPT0gJ251bWJlcmVkLWxpc3QnICYmXG4gICAgICAgIHN0YXJ0QmxvY2sudHlwZSAhPT0gJ2xpc3QtaXRlbSdcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXh0QmxvY2sgPSBkb2N1bWVudC5nZXROZXh0QmxvY2soc3RhcnRLZXkpO1xuICAgICAgICBjb25zdCBwcmV2QmxvY2sgPSBkb2N1bWVudC5nZXRQcmV2aW91c0Jsb2NrKHN0YXJ0S2V5KTtcbiAgICAgICAgY29uc3QgYmxvY2tUb0luc2VydCA9IEJsb2NrLmNyZWF0ZShibG9ja0lucHV0UHJvcHMpO1xuICAgICAgICByZXR1cm4gY2hhbmdlXG4gICAgICAgICAgLmNvbGxhcHNlVG9FbmRPZihzdGFydEJsb2NrKVxuICAgICAgICAgIC5pbnNlcnRCbG9jayhibG9ja1RvSW5zZXJ0KVxuICAgICAgICAgIC5jb2xsYXBzZVRvRW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhcnRCbG9jayAmJiBzdGFydEJsb2NrLmlzVm9pZCkge1xuICAgICAgICBjb25zdCBuZXh0QmxvY2sgPSBkb2N1bWVudC5nZXROZXh0QmxvY2soc3RhcnRLZXkpO1xuICAgICAgICBjb25zdCBwcmV2QmxvY2sgPSBkb2N1bWVudC5nZXRQcmV2aW91c0Jsb2NrKHN0YXJ0S2V5KTtcbiAgICAgICAgY29uc3QgaXNGb2N1c2VkU3RhcnQgPSB2YWx1ZS5zZWxlY3Rpb24uaGFzRWRnZUF0U3RhcnRPZihzdGFydEJsb2NrKTtcbiAgICAgICAgY29uc3QgaXNGb2N1c2VkRW5kID0gdmFsdWUuc2VsZWN0aW9uLmhhc0VkZ2VBdEVuZE9mKHN0YXJ0QmxvY2spO1xuICAgICAgICBjb25zdCBibG9ja1RvSW5zZXJ0ID0gQmxvY2suY3JlYXRlKGJsb2NrSW5wdXRQcm9wcyk7XG5cbiAgICAgICAgLy8gVm9pZCBibG9jayBhdCB0aGUgZW5kIG9mIHRoZSBkb2N1bWVudFxuICAgICAgICBpZiAoIW5leHRCbG9jaykge1xuICAgICAgICAgIGlmIChpc0ZvY3VzZWRFbmQpIHtcbiAgICAgICAgICAgIGRlYnVnKCdubyBuZXh0QmxvY2ssIFByZXZCbG9jaywgaXNGb2N1c2VkRW5kJyk7XG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlXG4gICAgICAgICAgICAgIC5jb2xsYXBzZVRvRW5kT2Yoc3RhcnRCbG9jaylcbiAgICAgICAgICAgICAgLmluc2VydEJsb2NrKGJsb2NrVG9JbnNlcnQpXG4gICAgICAgICAgICAgIC5jb2xsYXBzZVRvRW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwcmV2QmxvY2spIHtcbiAgICAgICAgICAgIGRlYnVnKCdubyBuZXh0QmxvY2ssIFByZXZCbG9jaywgaXNGb2N1c2VkU3RhcnQnKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZG9jdW1lbnQubm9kZXMuaW5kZXhPZihwcmV2QmxvY2spO1xuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZVxuICAgICAgICAgICAgICAuY29sbGFwc2VUb0VuZE9mKHByZXZCbG9jaylcbiAgICAgICAgICAgICAgLmluc2VydE5vZGVCeUtleShkb2N1bWVudC5rZXksIGluZGV4ICsgMSwgYmxvY2tUb0luc2VydClcbiAgICAgICAgICAgICAgLmNvbGxhcHNlVG9TdGFydE9mKHN0YXJ0QmxvY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWJ1Zygnbm8gbmV4dEJsb2NrLCBubyBQcmV2QmxvY2snKTtcbiAgICAgICAgICByZXR1cm4gY2hhbmdlXG4gICAgICAgICAgICAuY29sbGFwc2VUb1N0YXJ0T2Yoc3RhcnRCbG9jaylcbiAgICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkoZG9jdW1lbnQua2V5LCAwLCBibG9ja1RvSW5zZXJ0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBWb2lkIGJsb2NrIGJldHdlZW4gdHdvIGJsb2Nrc1xuICAgICAgICBpZiAobmV4dEJsb2NrICYmIHByZXZCbG9jaykge1xuICAgICAgICAgIGlmIChpc0ZvY3VzZWRTdGFydCkge1xuICAgICAgICAgICAgZGVidWcoJ25leHRCbG9jaywgcHJldkJsb2NrLCBpc0ZvY3VzZWRTdGFydCcpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBkb2N1bWVudC5ub2Rlcy5pbmRleE9mKHByZXZCbG9jayk7XG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlXG4gICAgICAgICAgICAgIC5jb2xsYXBzZVRvRW5kT2YocHJldkJsb2NrKVxuICAgICAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KGRvY3VtZW50LmtleSwgaW5kZXggKyAxLCBibG9ja1RvSW5zZXJ0KVxuICAgICAgICAgICAgICAuY29sbGFwc2VUb1N0YXJ0T2Yoc3RhcnRCbG9jayk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlYnVnKCduZXh0QmxvY2ssIHByZXZCbG9jaywgaXNGb2N1c2VkRW5kJyk7XG4gICAgICAgICAgLy8gTk9lIHJhcnQgc2tqZXIgaGVyXG4gICAgICAgICAgcmV0dXJuIGNoYW5nZS5jb2xsYXBzZVRvRW5kT2Yoc3RhcnRCbG9jaykuaW5zZXJ0QmxvY2soYmxvY2tUb0luc2VydCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVm9pZCBibG9jayBpbiB0aGUgYmVnaW5uaW5nIG9mIHRoZSBkb2N1bWVudFxuICAgICAgICBpZiAobmV4dEJsb2NrICYmICFwcmV2QmxvY2spIHtcbiAgICAgICAgICBpZiAoaXNGb2N1c2VkU3RhcnQpIHtcbiAgICAgICAgICAgIGRlYnVnKCduZXh0QmxvY2ssIG5vIHByZXZCbG9jaywgaXNGb2N1c2VkU3RhcnQnKTtcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VcbiAgICAgICAgICAgICAgLmNvbGxhcHNlVG9TdGFydE9mKHN0YXJ0QmxvY2spXG4gICAgICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkoZG9jdW1lbnQua2V5LCAwLCBibG9ja1RvSW5zZXJ0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVidWcoJ25leHRCbG9jaywgbm8gcHJldkJsb2NrLCBpc0ZvY3VzZWRFbmQnKTtcbiAgICAgICAgICByZXR1cm4gY2hhbmdlLmNvbGxhcHNlVG9FbmRPZihzdGFydEJsb2NrKS5pbnNlcnRCbG9jayhibG9ja1RvSW5zZXJ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25LZXlEb3duLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnNlcnRCbG9ja09uRW50ZXJQbHVnaW47XG4iXX0=
