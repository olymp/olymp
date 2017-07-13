import { upperFirst } from 'lodash';
import { visit, Kind } from 'graphql/language';
import createTypeFetcher from './fetch-type';
import addDefinition from './add-definition';
var fetch = createTypeFetcher(function (node, value) {
    return node.kind.endsWith('TypeDefinition') &&
        node.name &&
        node.name.value === value;
});
var transformASTTypeToInput = function (type, _a, generatedInputHistory) {
    var newName = _a.newName, ast = _a.ast, _b = _a.exclude, exclude = _b === void 0 ? [] : _b, _c = _a.optional, optional = _c === void 0 ? [] : _c;
    if (generatedInputHistory === void 0) { generatedInputHistory = []; }
    var definitions = ast.definitions || ast;
    return visit(type, {
        enter: function (node) {
            var copy = Object.assign({}, node);
            copy.directives = [];
            switch (copy.kind) {
                case Kind.OBJECT_TYPE_DEFINITION:
                    copy.kind = Kind.INPUT_OBJECT_TYPE_DEFINITION;
                    copy.name = Object.assign({}, copy.name);
                    copy.name.value = newName;
                    break;
                case Kind.FIELD_DEFINITION:
                    if (exclude.indexOf(node.name.value) !== -1) {
                        return null;
                    }
                    copy.kind = Kind.INPUT_VALUE_DEFINITION;
                    var fieldName = copy.name.value;
                    var typeName_1 = null;
                    visit(copy, (_a = {},
                        _a[Kind.NAMED_TYPE] = function (typeNode) {
                            typeName_1 = typeNode.name.value;
                        },
                        _a));
                    var fieldType = fetch(ast, typeName_1);
                    if (fieldType && fieldType.kind === Kind.OBJECT_TYPE_DEFINITION) {
                        var inputName_1 = upperFirst(fieldType.name.value) + "Input";
                        if (generatedInputHistory.indexOf(inputName_1) === -1) {
                            generatedInputHistory.push(inputName_1);
                            if (!fetch(ast, inputName_1) &&
                                fieldType.name.value !== type.name.value) {
                                var newInput = transformASTTypeToInput(fieldType, { newName: inputName_1, ast: ast }, generatedInputHistory);
                                definitions.push(newInput);
                            }
                        }
                        copy = visit(copy, (_b = {},
                            _b[Kind.NAMED_TYPE] = function (typeNode) {
                                var newNode = Object.assign({}, typeNode);
                                newNode.name = Object.assign({}, newNode.name);
                                newNode.name.value = inputName_1;
                                return newNode;
                            },
                            _b));
                        if (optional.indexOf(fieldName) !== -1) {
                            while (copy.type.kind === Kind.NON_NULL_TYPE) {
                                copy.type = Object.assign({}, copy.type.type);
                            }
                        }
                    }
                    break;
            }
            return copy;
            var _a, _b;
        },
    });
};
export default function (ast, node) {
    var input = transformASTTypeToInput(node, {
        newName: node.name.value + "Input",
        ast: ast.definitions,
    });
    addDefinition(ast.definitions, input);
};
//# sourceMappingURL=add-input.js.map