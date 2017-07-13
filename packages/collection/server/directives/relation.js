var _a = require('olymp-graphql/server'), addFields = _a.addFields, addArguments = _a.addArguments, createTypeFetcher = _a.createTypeFetcher;
var _b = require('lodash'), get = _b.get, set = _b.set, lowerFirst = _b.lowerFirst;
export default {
    name: 'relation',
    description: 'Marks a type as a relative.',
    resolveStatic: {
        enter: function (node, directive, _a) {
            var resolvers = _a.resolvers, parent = _a.parent, ancestors = _a.ancestors, ast = _a.ast;
            var isList = node.type.kind === 'ListType';
            var type = isList ? node.type.type : node.type;
            var argProperty = directive.arguments.length &&
                directive.arguments.find(function (x) { return x.name.value === 'property'; });
            var argRelationType = directive.arguments.length &&
                directive.arguments.find(function (x) { return x.name.value === 'type'; });
            var relationType = get(argRelationType, 'value.value', isList ? '1-n' : '1-1');
            var leftType = ancestors[ancestors.length - 1].name.value;
            var leftTable = ancestors[ancestors.length - 1].name.value.toLowerCase();
            var leftField = node.name.value;
            var leftNode = parent;
            var rightType = type.name.value;
            var rightTable = type.name.value.toLowerCase();
            var rightField = get(argProperty, 'value.value') || lowerFirst(leftTable);
            var rightNode = createTypeFetcher(function (node) { return get(node, 'name.value') === rightType && get(node, 'kind') === 'ObjectTypeDefinition'; })(ast);
            if (relationType === '1-1') {
                addFields(ast, leftNode, leftField + "Id: String");
                if (rightType === 'User') {
                    set(resolvers, leftType + "." + leftField, function (source, args, _a) {
                        var monk = _a.monk;
                        return monk.collection(rightTable).findOne({
                            id: source[leftField + "Id"],
                        });
                    });
                }
                else {
                    set(resolvers, leftType + "." + leftField, function (source, args, _a) {
                        var monk = _a.monk;
                        return monk.collection('item').findOne({
                            id: source[leftField + "Id"],
                            _type: rightTable,
                        });
                    });
                }
            }
            else if (relationType === '1-n') {
                addFields(ast, leftNode, leftField + "Id: String");
                if (rightType === 'User') {
                    set(resolvers, leftType + "." + leftField, function (source, args, _a) {
                        var monk = _a.monk;
                        return monk.collection(rightTable).findOne({
                            id: source[leftField + "Id"],
                        });
                    });
                }
                else {
                    set(resolvers, leftType + "." + leftField, function (source, args, _a) {
                        var monk = _a.monk;
                        return monk.collection('item').findOne({
                            id: source[leftField + "Id"],
                            _type: rightTable,
                        });
                    });
                }
                addFields(ast, rightNode, rightField + ": [" + leftType + "]");
                set(resolvers, rightType + "." + rightField, function (source, args, _a) {
                    var monk = _a.monk;
                    return monk.collection('item').find((_b = {},
                        _b[leftField + "Id"] = source.id,
                        _b._type = leftTable,
                        _b));
                    var _b;
                });
            }
        },
    },
};
//# sourceMappingURL=relation.js.map