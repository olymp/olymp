function focusAtEnd(transform) {
    var state = transform.state;
    var document = state.document;
    return transform.collapseToEndOf(document);
}
module.exports = focusAtEnd;
//# sourceMappingURL=focus-at-end.js.map