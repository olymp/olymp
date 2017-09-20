export default (options = {}) => {
  const { getMarkdownType } = options;
  const self = {
    getType: (chars) => {
      if (getMarkdownType && getMarkdownType(chars)) {
        return getMarkdownType(chars);
      }
      switch (chars) {
        case '*':
        case '-':
        case '+':
          return 'list-item';
        case '>':
          return 'block-quote';
        case '#':
          return 'heading-one';
        case '##':
          return 'heading-two';
        case '###':
          return 'heading-three';
        case '####':
          return 'heading-four';
        case '#####':
          return 'heading-five';
        case '######':
          return 'heading-six';
        default:
          return null;
      }
    },
    onKeyDown: (e, data, change) => {
      switch (data.key) {
        case 'space':
          return self.onSpace(e, change);
        case 'backspace':
          return self.onBackspace(e, change);
        case 'enter':
          return self.onEnter(e, change);
      }
    },
    onSpace: (e, change) => {
      if (change.state.isExpanded) {
        return undefined;
      }
      const { startText, startBlock, startOffset, selection } = change.state;
      const chars = startBlock.text.slice(0, startOffset).replace(/\s*/g, '');
      const type = self.getType(chars);

      if (!type) {
        return undefined;
      }
      if (type === 'list-item' && startBlock.type === 'list-item') {
        return undefined;
      }
      e.preventDefault();

      let transform = change.setBlock(type);

      if (type === 'list-item') {
        transform = transform.wrapBlock('bulleted-list');
      }

      return transform.extendToStartOf(startBlock).delete();
    },
    onBackspace: (e, change) => {
      if (change.state.isExpanded) {
        return undefined;
      }
      if (change.state.startOffset !== 0) {
        return undefined;
      }
      const { startBlock } = change.state;

      if (startBlock.type === 'paragraph') {
        return undefined;
      }
      e.preventDefault();

      let transform = change.setBlock('paragraph');

      if (startBlock.type === 'list-item') {
        transform = transform.unwrapBlock('bulleted-list');
      }
      return transform;
    },
    onEnter: (e, change) => {
      if (change.state.isExpanded) {
        return undefined;
      }
      const { startBlock, startOffset, endOffset } = change.state;
      if (startOffset === 0 && startBlock.size === 0) {
        return self.onBackspace(e, change.state);
      }
      if (endOffset !== startBlock.size) {
        return undefined;
      }

      if (
        startBlock.type !== 'heading-one' &&
        startBlock.type !== 'heading-two' &&
        startBlock.type !== 'heading-three' &&
        startBlock.type !== 'heading-four' &&
        startBlock.type !== 'heading-five' &&
        startBlock.type !== 'heading-six' &&
        startBlock.type !== 'block-quote'
      ) {
        return undefined;
      }

      e.preventDefault();
      return change.splitBlock().setBlock('paragraph');
    },
  };
  return self;
};
