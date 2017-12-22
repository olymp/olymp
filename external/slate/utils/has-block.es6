export default (editorState, type) => {
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
