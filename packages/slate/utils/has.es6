export const hasMark = (editorState, type) => {
  try {
    if (!editorState) {
      return null;
    }
    return editorState.marks.some(mark => mark.type === type);
  } catch (err) {}
  return false;
};
export const hasBlock = (editorState, type) => {
  try {
    if (!editorState) {
      return null;
    }
    return editorState.blocks.some(
      node => node.type === type || node.type.indexOf(`${type}-`) === 0,
    );
  } catch (err) {}
  return false;
};
