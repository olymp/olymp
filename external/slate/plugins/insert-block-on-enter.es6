import { Block } from 'slate';
import Debug from 'debug';

const debug = Debug('slate:insert-block-on-enter');

function InsertBlockOnEnterPlugin(...args) {
  const blockArg = args[0];
  let blockInputProps;
  const defaultProps = { kind: 'block' };

  if (!blockArg) {
    throw new Error(
      'You must pass a block type (string) or object for the block to insert.',
    );
  }
  if (args[0].constructor.name === 'String') {
    blockInputProps = Object.assign({}, defaultProps, { type: blockArg });
  } else {
    blockInputProps = Object.assign({}, defaultProps, blockArg);
  }

  function onKeyDown(e, change) {
    if (e.key === 'Enter') {
      const { value } = change;
      const { document, startKey, startBlock } = value;

      if (startBlock && ['code', 'code-line'].includes(startBlock.type)) {
        return change.insertBlock(startBlock.type);
      }
      if (
        startBlock &&
        !startBlock.isVoid &&
        startBlock.type !== 'paragraph' &&
        startBlock.type !== 'bulleted-list' &&
        startBlock.type !== 'numbered-list' &&
        startBlock.type !== 'list-item'
      ) {
        const nextBlock = document.getNextBlock(startKey);
        const prevBlock = document.getPreviousBlock(startKey);
        const blockToInsert = Block.create(blockInputProps);
        return change
          .collapseToEndOf(startBlock)
          .insertBlock(blockToInsert)
          .collapseToEnd();
      }
      if (startBlock && startBlock.isVoid) {
        const nextBlock = document.getNextBlock(startKey);
        const prevBlock = document.getPreviousBlock(startKey);
        const isFocusedStart = value.selection.hasEdgeAtStartOf(startBlock);
        const isFocusedEnd = value.selection.hasEdgeAtEndOf(startBlock);
        const blockToInsert = Block.create(blockInputProps);

        // Void block at the end of the document
        if (!nextBlock) {
          if (isFocusedEnd) {
            debug('no nextBlock, PrevBlock, isFocusedEnd');
            return change
              .collapseToEndOf(startBlock)
              .insertBlock(blockToInsert)
              .collapseToEnd();
          }
          if (prevBlock) {
            debug('no nextBlock, PrevBlock, isFocusedStart');
            const index = document.nodes.indexOf(prevBlock);
            return change
              .collapseToEndOf(prevBlock)
              .insertNodeByKey(document.key, index + 1, blockToInsert)
              .collapseToStartOf(startBlock);
          }
          debug('no nextBlock, no PrevBlock');
          return change
            .collapseToStartOf(startBlock)
            .insertNodeByKey(document.key, 0, blockToInsert);
        }
        // Void block between two blocks
        if (nextBlock && prevBlock) {
          if (isFocusedStart) {
            debug('nextBlock, prevBlock, isFocusedStart');
            const index = document.nodes.indexOf(prevBlock);
            return change
              .collapseToEndOf(prevBlock)
              .insertNodeByKey(document.key, index + 1, blockToInsert)
              .collapseToStartOf(startBlock);
          }
          debug('nextBlock, prevBlock, isFocusedEnd');
          // NOe rart skjer her
          return change.collapseToEndOf(startBlock).insertBlock(blockToInsert);
        }
        // Void block in the beginning of the document
        if (nextBlock && !prevBlock) {
          if (isFocusedStart) {
            debug('nextBlock, no prevBlock, isFocusedStart');
            return change
              .collapseToStartOf(startBlock)
              .insertNodeByKey(document.key, 0, blockToInsert);
          }
          debug('nextBlock, no prevBlock, isFocusedEnd');
          return change.collapseToEndOf(startBlock).insertBlock(blockToInsert);
        }
      }
    }
  }

  return {
    onKeyDown,
  };
}

export default InsertBlockOnEnterPlugin;
