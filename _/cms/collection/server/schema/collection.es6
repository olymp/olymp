import { get, isArray } from 'lodash';
import { createTypeFetcher } from 'olymp-graphql/server';
import shortId from 'shortid';
import diff from 'deep-diff';

const fetchType = createTypeFetcher(
  (node, name) =>
    get(node, 'kind') === 'ObjectTypeDefinition' &&
    get(node, 'name.value') === name,
);

export default {
  name: 'collection',
  onBefore: ({ keys, variables, context, resolverAST, ast }) => {
    if (keys[0] === 'RootMutation') {
      const typeName = get(resolverAST, 'returnType.name');
      const type = fetchType(ast, typeName);
      const directive = get(type, 'directives', []).find(
        d => get(d, 'name.value') === 'collection',
      );
      if (type && directive) {
        const { input, id } = variables;
        if (!input) {
          return undefined;
        }
        const user = context && context.user;
        const db = context && context.db;
        /* if (!user) {
          // throw new Error('Not authorized');
        }
        if (typeName === 'Page' && !user.isAdmin) {
          // throw new Error('Not authorized');
        }
        if (
          !user.isAdmin &&
          user.orgId !== input.orgId &&
          user.orgId !== input.id
        ) {
          // throw new Error('Not authorized');
        } */

        if (id) {
          return db
            .collection('item')
            .findOne({ id })
            .then(old => ({ ...variables, old: old || null }));
        }
        // if (!user.isAdmin && ) throw new Error('Not authorized');
      }
    }
    return undefined;
  },
  onAfter: ({ keys, value, variables, context, resolverAST, ast }) => {
    if (keys[0] === 'RootMutation') {
      const { old } = variables;
      const typeName = get(resolverAST, 'returnType.name');
      const type = fetchType(ast, typeName);
      const directive = get(type, 'directives', []).find(
        d => get(d, 'name.value') === 'collection',
      );
      if (type && directive && old !== undefined && !isArray(value)) {
        if (!old && !value) {
          return;
        }
        const appId = context && context.app && context.app.id;
        const userId = context && context.user && context.user.id;
        const id = shortId.generate();
        const diffe = diff(old || {}, value) || [];
        context.db.collection('changelog').insertOne({
          id,
          type: value._type,
          targetId: value.id,
          appId,
          userId,
          date: new Date(),
          diff: diffe.map((x, i) => ({
            ...x,
            id: `${id}${i}`,
          })),
        });
        // if (!user.isAdmin && ) throw new Error('Not authorized');
      }
    }
  },
  queries: `
    changelog(id: String!): [Changelog]
  `,
  resolvers: {
    queries: {
      changelog: (source, { id }, { db, app, user }) => {
        if (!user) {
          return;
        }
        return db.collection('changelog').find({ targetId: id, appId: app.id }).toArray();
      },
    },
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
    type Changelog {
      id: String
      targetId: String
      type: String
      user: User @relation
      date: DateTime
      diff: [ChangelogDiff]
    }
    type ChangelogDiff {
      id: String
      kind: String
      path: [String]
      lhs: Json
      rhs: Json
    }
  `,
};
