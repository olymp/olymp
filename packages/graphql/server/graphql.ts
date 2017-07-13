import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { bundle } from 'graphql-modules';
import buildSchema from './schema-builder';
import { values } from 'lodash';
import * as scalarModules from './scalars';
import * as defaultDirectives from './directives';

export default ({ modules, directives = {} }) => {
  let schema = null;
  const apply = (modules) => {
    const raw = values({ ...scalarModules, ...modules });
    const { onBefore, onAfter } = raw.reduce((store, value) => {
      if (value.onBefore) store.onBefore.push(value.onBefore);
      if (value.onAfter) store.onAfter.push(value.onAfter);
      return store;
    }, { onBefore: [], onAfter: [] });
    const bundled = bundle(raw);
    schema = buildSchema({
      ...bundled,
      directives: { ...defaultDirectives, ...directives },
      onBefore,
      onAfter,
    });
  };
  if (modules) {
    apply(modules);
  }
  return {
    express: graphqlExpress(context => ({ schema, context })),
    graphi: graphiqlExpress({ endpointURL: '/graphql' }),
    apply: modules => apply(modules),
  };
};
