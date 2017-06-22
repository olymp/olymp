import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { bundle } from 'graphql-modules';
import buildSchema from './schema-builder';
import { values } from 'lodash';
import * as scalarModules from './scalars';
import * as defaultDirectives from './directives';

export default ({ modules, directives = {} }) => {
  let schema = null;
  const apply = (modules) => {
    schema = buildSchema({
      ...bundle(values({ ...scalarModules, ...modules })),
      directives: { ...defaultDirectives, ...directives },
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
