import { parse } from 'graphql/language';
import { addDefinition } from 'olymp-graphql/server';
export default function (ast, node) {
    var getSort = function (field) {
        if (!field.name) {
            return null;
        }
        return field.name.value + ": SORT_DIRECTION";
    };
    addDefinition(ast, parse("\n    input " + node.name.value + "Sort {\n      skipSort: Boolean\n      " + node.fields.map(getSort).filter(function (x) { return x; }).join('\n') + "\n    }\n  ").definitions[0]);
};
//# sourceMappingURL=add-sort-input.js.map