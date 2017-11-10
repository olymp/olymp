import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { bundle } from 'graphql-modules';
import { values } from 'lodash';
import buildSchema from './schema-builder';
import * as scalarModules from './scalars';
import * as defaultDirectives from './directives';

export default ({ modules = null, directives = {} }) => {
  let schema = null;
  const apply = modules => {
    const raw = values({ ...scalarModules, ...modules }).filter(x => x);
    const { onBefore, onAfter } = raw.reduce(
      (store, value) => {
        if (value.onBefore) {
          store.onBefore.push(value.onBefore);
        }
        if (value.onAfter) {
          store.onAfter.push(value.onAfter);
        }
        return store;
      },
      { onBefore: [], onAfter: [] },
    );
    const bundled = bundle(raw);
    schema = buildSchema({
      ...bundled,
      directives: { ...defaultDirectives, ...directives },
      onBefore,
      onAfter,
    });
    return schema;
  };

  if (modules) {
    apply(modules);
  }
  return {
    middleware: graphqlExpress(context => ({
      schema: context.schema,
      context,
    })),
    express: graphqlExpress(context => ({ schema, context })),
    graphi: graphiqlExpress({ endpointURL: '/graphql' }),
    apply: m => apply(m),
    getSchema: () => schema,
  };
};
