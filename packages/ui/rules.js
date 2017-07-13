export default function (names, label) {
    if (names === void 0) { names = []; }
    return names.map(function (key) { return rules[key]; }).filter(function (x) { return x; }).map(function (x) { return x({ label: label }); });
};
var rules = {
    required: function (_a) {
        var label = _a.label;
        return ({
            required: true,
            message: "'" + label + "' erforderlich",
        });
    },
};
//# sourceMappingURL=rules.js.map