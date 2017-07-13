export default function (info, field) {
    var context = (info.fieldASTs || info.fieldNodes)[0];
    if (field) {
        context = context.selectionSet.selections.find(function (x) { return x.name.value === field; });
    }
    if (!context) {
        return {};
    }
    return context.selectionSet.selections.reduce(function (projections, selection) {
        projections[selection.name.value] = 1;
        projections[selection.name.value + "Id"] = 1;
        projections[selection.name.value + "Ids"] = 1;
        return projections;
    }, {});
};
//# sourceMappingURL=projection.js.map