export default (editorState, type) => {
  try {
    if (!editorState) {
      return null;
    }
    return editorState.marks.some(mark => mark.type === type);
  } catch (err) {}
  return false;
};
