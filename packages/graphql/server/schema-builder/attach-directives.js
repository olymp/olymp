var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { chainResolvers } from 'graphql-tools';
export default {
    translate: function (value) {
        return value;
    },
};
export function attachDirectivesToSchema(info, directives) {
    function attachSelectionSetDirectives(_a, parentType) {
        var selections = _a.selections;
        return selections.forEach(function (selection) {
            var key = selection.name.value;
            var typeDef = parentType._fields[key];
            if (typeDef) {
                var fieldNodeType = typeDef.type.ofType || typeDef.type;
                var directiveResolvers = selection.directives
                    .map(function (directive) {
                    var name = directive.name.value;
                    var params = directive.arguments.reduce(function (acc, arg) {
                        return (__assign({}, acc, (_a = {}, _a[arg.name.value] = arg.value.value, _a)));
                        var _a;
                    }, {});
                    if (directives[name]) {
                        return function (obj, args) {
                            var rest = [];
                            for (var _i = 2; _i < arguments.length; _i++) {
                                rest[_i - 2] = arguments[_i];
                            }
                            return directives[name].apply(directives, [obj, __assign({}, args, params)].concat(rest));
                        };
                    }
                    return null;
                })
                    .filter(function (x) { return !!x; });
                if (!typeDef.original) {
                    typeDef.original = [typeDef.resolve];
                }
                if (directiveResolvers.length > 0) {
                    typeDef.resolve = chainResolvers(typeDef.original.concat(directiveResolvers));
                }
                else if (typeDef.original) {
                    typeDef.resolve = typeDef.original[0];
                }
                if (selection.selectionSet) {
                    attachSelectionSetDirectives(selection.selectionSet, fieldNodeType);
                }
            }
        }, {});
    }
    return attachSelectionSetDirectives({ selections: info.fieldNodes }, info.parentType);
}
//# sourceMappingURL=attach-directives.js.map