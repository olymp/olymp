export var hasMark = function (editorState, type) {
    if (!editorState) {
        return null;
    }
    return editorState.marks.some(function (mark) { return mark.type === type; });
};
export var hasBlock = function (editorState, type) {
    if (!editorState) {
        return null;
    }
    return editorState.blocks.some(function (node) { return node.type === type || node.type.indexOf(type + "-") === 0; });
};
//# sourceMappingURL=has.js.map