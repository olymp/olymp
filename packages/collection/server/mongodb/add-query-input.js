import { parse } from 'graphql/language';
import { addDefinition, createTypeFetcher } from 'olymp-graphql/server';
var fetch = createTypeFetcher(function (node, value) {
    return node.kind !== 'NamedType' && node.name && node.name.value === value;
});
export default function (ast, node) {
    var getArgument = function (field) {
        if (field.type.kind === 'ListType' && field.type.type && field.type.type.name.value === 'String') {
            addDefinition(ast, parse("\n        input " + field.type.type.name.value + "Query {\n          in: [" + field.type.type.name.value + "],\n          nin: [" + field.type.type.name.value + "],\n          null: Boolean\n        }\n      ").definitions[0]);
            return field.name.value + ": " + field.type.type.name.value + "Query";
        }
        if (!field.type.name) {
            return null;
        }
        var fieldType = fetch(ast, field.type.name.value);
        if (['Date', 'DateTime'].includes(field.type.name.value)) {
            addDefinition(ast, parse("\n        input DateQuery {\n          eq: Float,\n          ne: Float,\n          lt: Float,\n          gt: Float,\n          gte: Float,\n          lte: Float,\n          day: Float,\n          year: Float,\n          month: Float,\n          between: [Float],\n          null: Boolean\n        }\n      ").definitions[0]);
            return field.name.value + ": DateQuery";
        }
        if (['Int'].includes(field.type.name.value)) {
            addDefinition(ast, parse("\n        input IntQuery {\n          eq: Int,\n          ne: Int,\n          in: [Int],\n          nin: [Int],\n          lt: Int,\n          gt: Int,\n          gte: Int,\n          lte: Int,\n          between: [Int],\n          null: Boolean\n        }\n      ").definitions[0]);
            return field.name.value + ": IntQuery";
        }
        if (['Float'].includes(field.type.name.value)) {
            addDefinition(ast, parse("\n        input IntQuery {\n          eq: Float,\n          ne: Float,\n          in: [Float],\n          nin: [Float],\n          lt: Float,\n          gt: Float,\n          gte: Float,\n          lte: Float,\n          between: [Float],\n          null: Boolean\n        }\n      ").definitions[0]);
            return field.name.value + ": IntQuery";
        }
        if (['Boolean'].includes(field.type.name.value)) {
            addDefinition(ast, parse("\n        input BooleanQuery {\n          eq: Float,\n          ne: Float,\n          null: Boolean\n        }\n      ").definitions[0]);
            return field.name.value + ": BooleanQuery";
        }
        if (['String', 'Website', 'Slug', 'Markdown', 'Color'].includes(field.type.name.value)) {
            addDefinition(ast, parse("\n        input StringQuery {\n          eq: String,\n          ne: String,\n          in: [String],\n          nin: [String],\n          startsWith: String,\n          contains: String,\n          null: Boolean\n        }\n      ").definitions[0]);
            return field.name.value + ": StringQuery";
        }
        if (fieldType && fieldType.kind === 'EnumTypeDefinition') {
            addDefinition(ast, parse("\n        input " + fieldType.name.value + "Query {\n          eq: " + fieldType.name.value + ",\n          ne: " + fieldType.name.value + ",\n          in: [" + fieldType.name.value + "],\n          nin: [" + fieldType.name.value + "],\n          null: Boolean\n        }\n      ").definitions[0]);
            return field.name.value + ": " + fieldType.name.value + "Query";
        }
        if (fieldType && fieldType.kind === 'ObjectTypeDefinition') {
            addDefinition(ast, parse("\n        input GenericQuery {\n          null: Boolean\n        }\n      ").definitions[0]);
            return field.name.value + ": GenericQuery";
        }
    };
    addDefinition(ast, parse("\n    input " + node.name.value + "Query {\n      skipqueries: Boolean\n      " + node.fields.map(getArgument).filter(function (x) { return x; }).join('\n') + "\n      and: [" + node.name.value + "Query]\n      or: [" + node.name.value + "Query]\n    }\n  ").definitions[0]);
};
//# sourceMappingURL=add-query-input.js.map