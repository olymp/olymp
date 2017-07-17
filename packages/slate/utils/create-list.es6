import { Block, Raw } from 'slate';

const empty = () =>
  Raw.deserializeNode({
    kind: 'block',
    type: 'paragraph',
    nodes: [{ kind: 'text', text: '', ranges: [] }],
  });
export default items =>
  Block.createList(
    items
      .map((item) => {
        if (!item) {
          return empty();
        } else if (item.component && item.key) {
          const block = { type: item.key, kind: 'block' };
          if (!item.editable) {
            block.isVoid = true;
          } else {
            block.nodes = Block.createList([empty()]);
          }
          return block;
        }
      })
      .filter(x => x)
  );