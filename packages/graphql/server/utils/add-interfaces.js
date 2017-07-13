import { parse } from 'graphql/language';
import { get } from 'lodash';
export default function (ast, node, interfacesToAdd) {
    var interfaces = node.interfaces || node;
    var type = parse("\n    type ___Model implements " + interfacesToAdd + " {\n      id: String\n    }\n  ").definitions[0];
    type.interfaces.forEach(function (field) {
        if (interfaces.find(function (x) { return get(x, 'name.value') === get(field, 'name.value'); })) {
            return;
        }
        interfaces.push(field);
    });
};
//# sourceMappingURL=add-interfaces.js.map