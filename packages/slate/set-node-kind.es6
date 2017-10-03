import { Inline, Block } from 'slate';

export default (change, key, kind) => {
  if (kind === 'inline') {
    return change.removeNodeByKey(node.key).insertInline(
      Inline.create({
        type: node.type,
        isVoid: node.isVoid,
        data: node.data.set('float', 'left'),
      }),
    );
  }
};
