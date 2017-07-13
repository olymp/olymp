import { addQueryInput, addSortInput, addQueries } from '../mongodb';
import { addInput, addFields, addInterfaces, getDirectiveValue, } from 'olymp-graphql/server';
export default {
    name: 'collection',
    description: 'Marks a type as a relative.',
    resolveStatic: {
        enter: function (node, d, _a) {
            var ast = _a.ast, resolvers = _a.resolvers;
            addFields(ast, node, "\n          id: String\n          name: String\n          # @label(\"Schlagworte\")\n          tags: [String]\n          # @label(\"Status\")\n          state: DOCUMENT_STATE\n          createdAt: DateTime\n          updatedAt: DateTime\n          createdBy: User @relation\n          updatedBy: User @relation\n        ");
            var name = getDirectiveValue(node, 'collection', 'name');
            if (name) {
                addInterfaces(ast, node, 'CollectionInterface');
            }
            addQueryInput(ast, node);
            addSortInput(ast, node);
            addQueries(ast, node, resolvers, name);
        },
        enter2: function (node, d, _a) {
            var ast = _a.ast, resolvers = _a.resolvers;
            addInput(ast, node);
            var name = getDirectiveValue(node, 'collection', 'name');
            if (name) {
                addInterfaces(ast, node, 'CollectionInterface');
            }
            addQueryInput(ast, node);
            addSortInput(ast, node);
            addQueries(ast, node, resolvers, name);
        },
    },
};
//# sourceMappingURL=collection.js.map