export const hasMark = (editorState, type) => {
  if (!editorState) return null;
  return editorState.marks.some(mark => mark.type === type);
};
export const hasBlock = (editorState, type) => {
  if (!editorState) return null;
  return editorState.blocks.some(
    node => node.type === type || node.type.indexOf(`${type}-`) === 0
  );
};
