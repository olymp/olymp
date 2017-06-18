/**
 * Focus at the end of the document
 * @param  {Slate.Transform} transform
 * @return {Slate.Transform}
 */
function focusAtEnd(transform) {
  const { state } = transform;
  const { document } = state;
  return transform.collapseToEndOf(document);
}

module.exports = focusAtEnd;
