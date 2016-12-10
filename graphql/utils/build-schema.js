import transformASTTypeToInput from './type-to-input';
import combineASTSchemas from './combine-ast';
import applyDirectivesToAST from './apply-directives';

const { parse } = require('graphql/language');
const { buildASTSchema } = require('graphql/utilities');
const { addResolveFunctionsToSchema } = require('graphql-tools');

export default (schemaFragments, resolvers, directives) => {
  const initialAST = schemaFragments.map(fragment => parse(fragment));
  // Create input types
  initialAST.forEach(({ definitions }) => definitions.filter(x => x.kind === 'ObjectTypeDefinition').forEach((definition) => {
    if (['Query', 'Mutation'].includes(definition.name.value)) return;
    const input = transformASTTypeToInput(definition, { newName: `${definition.name.value}Input`, ast: initialAST });
    definitions.push(input);
  }));
  const combinedAST = combineASTSchemas(initialAST);
  const transformedAST = applyDirectivesToAST(combinedAST, directives, resolvers);
  const builtSchema = buildASTSchema(transformedAST);
  addResolveFunctionsToSchema(builtSchema, resolvers);
  return builtSchema;
};
