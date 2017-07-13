import { chainResolvers } from 'graphql-tools';

export default {
  translate: value =>
    // Translate field value.
     value,
};

// Helper to attach directives to the schema.
export function attachDirectivesToSchema(info, directives) {
  function attachSelectionSetDirectives({ selections }, parentType) {
    return selections.forEach((selection) => {
      const key = selection.name.value;
      const typeDef = parentType._fields[key]; // eslint-disable-line
      if (typeDef) {
        const fieldNodeType = typeDef.type.ofType || typeDef.type;
        const directiveResolvers = selection.directives
          .map((directive) => {
            const name = directive.name.value;
            const params = directive.arguments.reduce(
              (acc, arg) => ({
                ...acc,
                [arg.name.value]: arg.value.value,
              }),
              {}
            );
            if (directives[name]) {
              return (obj, args, ...rest) =>
                directives[name](obj, { ...args, ...params }, ...rest);
            }
            return null;
          })
          .filter(x => !!x);
        // Keep track of the original resolver.
        if (!typeDef.original) {
          typeDef.original = [typeDef.resolve];
        }
        // Chain the resolvers for the directives.
        if (directiveResolvers.length > 0) {
          typeDef.resolve = chainResolvers([
            ...typeDef.original,
            ...directiveResolvers,
          ]);
        } else if (typeDef.original) {
          typeDef.resolve = typeDef.original[0];
        }
        // Recurse down the selectionSet.
        if (selection.selectionSet) {
          attachSelectionSetDirectives(selection.selectionSet, fieldNodeType);
        }
      }
    }, {});
  }

  return attachSelectionSetDirectives(
    { selections: info.fieldNodes },
    info.parentType
  );
}
