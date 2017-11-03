const getTopMost = (schema, change, prev) => {
  const next = prev
    ? change.value.document.getParent(prev.key)
    : change.value.startBlock;
  const nextType = next && next.type;
  const prevType = prev && prev.type;
  const isAtomic =
    nextType && schema.nodes[nextType] && schema.nodes[nextType].slate;
  if (
    !nextType ||
    !isAtomic ||
    (prevType && prevType.indexOf(nextType) !== 0)
  ) {
    return prev;
  }
  return getTopMost(schema, change, next);
};
export default getTopMost;
