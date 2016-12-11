export default (info, context = (info.fieldASTs || info.fieldNodes)[0]) => {
  return context.selectionSet.selections.reduce((projections, selection) => {
    projections[selection.name.value] = 1;
    projections[`${selection.name.value}Id`] = 1;
    projections[`${selection.name.value}Ids`] = 1;
    return projections;
  }, {});
};
