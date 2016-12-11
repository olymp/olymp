import combineASTSchemas from './combine-ast';
import applyDirectivesToAST from './apply-directives';

const { parse } = require('graphql/language');
const { buildASTSchema } = require('graphql/utilities');
const { addResolveFunctionsToSchema } = require('graphql-tools');

export default (schemaFragments, resolvers, directives) => {
  const initialAST = schemaFragments.map(fragment => parse(fragment));
  const combinedAST = combineASTSchemas(initialAST);
  const transformedAST = applyDirectivesToAST(combinedAST, directives, resolvers);
  const builtSchema = buildASTSchema(transformedAST);
  addResolveFunctionsToSchema(builtSchema, resolvers);
  return builtSchema;
};
