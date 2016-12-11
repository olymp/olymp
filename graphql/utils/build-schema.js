import combineASTSchemas from './combine-ast';
import applyDirectivesToAST from './apply-directives';
import transformASTTypeToInput from './type-to-input';

const { parse } = require('graphql/language');
const { buildASTSchema } = require('graphql/utilities');
const { addResolveFunctionsToSchema } = require('graphql-tools');

export default (schemaFragments, resolvers, directives) => {
  const initialAST = schemaFragments.map(fragment => parse(fragment));
  initialAST.forEach(({ definitions }) => definitions.filter(x => x.kind === 'ObjectTypeDefinition').forEach((definition) => {
    if (['Query', 'Mutation'].includes(definition.name.value)) return;
    const input = transformASTTypeToInput(definition, { newName: `${definition.name.value}Input`, ast: initialAST });
    definitions.push(input);
  }));
  const combinedAST = combineASTSchemas(initialAST);
  const transformedAST = applyDirectivesToAST(combinedAST, directives, { resolvers });
  transformedAST.definitions.filter(x => x.kind === 'ObjectTypeDefinition').forEach((definition) => {
    if (['Query', 'Mutation'].includes(definition.name.value)) return;
    const input = transformASTTypeToInput(definition, { newName: `${definition.name.value}Input`, ast: initialAST });
    const index = transformedAST.definitions.indexOf(transformedAST.definitions.find(x => x.name.value === input.name.value));
    if (index === undefined || index === -1) transformedAST.definitions.push(input);
    else transformedAST.definitions[index] = input;
  });
  const builtSchema = buildASTSchema(transformedAST);
  addResolveFunctionsToSchema(builtSchema, resolvers);
  return { schema: builtSchema, ast: transformedAST };
};
