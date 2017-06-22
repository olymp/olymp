import { parse } from 'graphql/language';
import { buildASTSchema } from 'graphql/utilities';
import { addResolveFunctionsToSchema } from 'graphql-tools';
import applyDirectivesToAST from './apply-directives';

export default ({ typeDefs, resolvers, directives }) => {
  const ast = parse(typeDefs);
  if (directives) {
    applyDirectivesToAST(ast, directives, resolvers);
  }
  const builtSchema = buildASTSchema(ast);
  addResolveFunctionsToSchema(builtSchema, resolvers);
  return builtSchema;
};
