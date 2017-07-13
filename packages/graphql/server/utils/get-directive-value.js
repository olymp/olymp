import { get } from 'lodash';
export default function (node, directiveName, argumentName) {
    var directive = node.directives.find(function (_a) {
        var name = _a.name;
        return name && name.value === directiveName;
    });
    if (directive && directive.arguments) {
        var argument = directive.arguments.find(function (_a) {
            var name = _a.name;
            return name && name.value === argumentName;
        });
        return get(argument, 'value.value');
    }
    return undefined;
};
//# sourceMappingURL=get-directive-value.js.map