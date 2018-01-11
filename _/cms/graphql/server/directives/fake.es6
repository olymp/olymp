import { set } from 'lodash';
import faker from 'faker';
import { getDirectiveValue } from '../utils';

export default {
  name: 'fake',
  description: 'Fakes a field.',
  resolveStatic: {
    enter(node, directive, { ast, resolvers, ancestors }) {
      if (process.env.FAKE) {
        return;
      }
      if (node.kind === 'ObjectTypeDefinition') {
        const isMany = getDirectiveValue(node, 'fake', 'many');
        const isOne = getDirectiveValue(node, 'fake', 'one');
        if (isMany) {
          set(resolvers, `RootQuery.${isMany}`, (source, args) =>
            Array(...{ length: Math.random() * (100 - 20) + 20 }).map(
              Number.call,
              Number,
            ),
          );
        }
        if (isOne) {
          set(resolvers, `RootQuery.${isOne}`, (source, args) => ({}));
        }
      } else {
        const isList = node.type.kind === 'ListType';
        const name = getDirectiveValue(node, 'fake', 'type');
        const leftType = ancestors[ancestors.length - 1].name.value;
        const leftField = node.name.value;
        if (name) {
          const [category, field] = name.split('.');
          set(resolvers, `${leftType}.${leftField}`, (source, args) =>
            faker[category][field](),
          );
        } else if (isList) {
          set(resolvers, `${leftType}.${leftField}`, (source, args) =>
            Array(...{ length: Math.random() * (10 - 3) + 3 }).map(
              Number.call,
              Number,
            ),
          );
        } else {
          set(resolvers, `${leftType}.${leftField}`, (source, args) => ({}));
        }
      }
    },
  },
};
