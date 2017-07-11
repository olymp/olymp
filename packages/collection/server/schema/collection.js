import { get, isArray } from 'lodash';
import { createTypeFetcher } from 'olymp-graphql/server';
import diff from 'deep-diff';
const fetchType = createTypeFetcher((node, name) => get(node, 'kind') === 'ObjectTypeDefinition' && get(node, 'name.value') === name);

export default {
  name: 'collection',
  onBefore: ({ keys, variables, context, resolverAST, ast }) => {
    if (keys[0] === 'RootMutation') {
      const typeName = get(resolverAST, 'returnType.name');
      const type = fetchType(ast, typeName);
      const directive = get(type, 'directives', []).find(d => get(d, 'name.value') === 'collection');
      if (type && directive) {
        const { input, id } = variables;
        if (!input) return undefined;
        const user = context && context.user;
        const monk = context && context.monk;
        if (!user) throw new Error('Not authorized');
        if (typeName === 'Page' && !user.isAdmin) throw new Error('Not authorized');
        if (!user.isAdmin && user.orgId !== input.orgId && user.orgId !== input.id) throw new Error('Not authorized');

        if (id) {
          return monk.collection('item').findOne({ id }).then(old => ({ ...variables, old }));
        }
        // if (!user.isAdmin && ) throw new Error('Not authorized');
      }
    } return undefined;
  },
  onAfter: ({ keys, value, variables, context, resolverAST, ast }) => {
    if (keys[0] === 'RootMutation') {
      const { input, old } = variables;
      const typeName = get(resolverAST, 'returnType.name');
      const type = fetchType(ast, typeName);
      const directive = get(type, 'directives', []).find(d => get(d, 'name.value') === 'collection');
      if (type && directive) {
        const appId = context && context.app && context.app.id;
        const userId = context && context.user && context.user.id;
        const asArray = isArray(value) ? value : [value];
        context.monk.collection('changelog').insert(asArray.map(item => ({
          type: item._type,
          appId: appId,
          userId: userId,
          date: +new Date(),
          diff: diff(old || {}, value),
        })));
        // if (!user.isAdmin && ) throw new Error('Not authorized');
      }
    }
  },
  schema: `
    enum DOCUMENT_STATE {
      PUBLISHED
      DRAFT
      REMOVED
    }
    enum MUTATION_TYPE {
      UPDATE
      REPLACE
      REMOVE
      INSERT
    }
    enum SORT_DIRECTION {
      ASC,
      DESC
    }
    interface CollectionInterface {
      id: String
      name: String
      tags: [String]
      state: DOCUMENT_STATE
      createdAt: DateTime
      createdBy: User
      updatedAt: DateTime
      updatedBy: User
    }
  `,
};
