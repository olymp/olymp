import { parse } from 'graphql/language';
import { get } from 'lodash';
export default function (ast, node, fieldsToAdd, _a) {
    var _b = (_a === void 0 ? {} : _a).replace, replace = _b === void 0 ? false : _b;
    var fields = node.fields || node;
    var type = parse("\n    type ___Model {\n      " + fieldsToAdd + "\n    }\n  ").definitions[0];
    type.fields.forEach(function (field) {
        if (replace &&
            fields.find(function (x) { return get(x, 'name.value') === get(field, 'name.value'); })) {
            return;
        }
        fields.push(field);
    });
};
//# sourceMappingURL=add-fields.js.map