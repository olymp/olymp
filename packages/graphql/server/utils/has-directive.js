export default function (ast, model, directive) {
    var schema = ast.definitions.find(function (_a) {
        var name = _a.name;
        return name && name.value === model;
    });
    return schema.directives.filter(function (_a) {
        var name = _a.name;
        return name && name.value === directive;
    }).length;
};
//# sourceMappingURL=has-directive.js.map