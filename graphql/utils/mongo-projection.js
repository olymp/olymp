const getProjection2 = (info, context = (info.fieldASTs || info.fieldNodes)[0]) => {
  return context.selectionSet.selections.reduce((projections, selection) => {
    projections[selection.name.value] = 1;
    projections[`${selection.name.value}Id`] = 1;
    projections[`${selection.name.value}Ids`] = 1;
    return projections;
  }, {});
};

const getProjection = (info, field, context = (info.fieldASTs || info.fieldNodes)[0]) => {
  if (field) {
    context = context.selectionSet.selections.find(x => x.name.value === field);
    if (!context) return {};
  }
  return context.selectionSet.selections.reduce((projections, selection) => {
    projections[selection.name.value] = 1;
    projections[`${selection.name.value}Id`] = 1;
    projections[`${selection.name.value}Ids`] = 1;
    return projections;
  }, {});
};

module.exports = getProjection;
