import combineASTSchemas from './combine-ast';
import applyDirectivesToAST from './apply-directives';
import transformASTTypeToInput from './type-to-input';
import addDefinition from './add-definition';

const { parse } = require('graphql/language');
const { buildASTSchema } = require('graphql/utilities');
const { addResolveFunctionsToSchema } = require('graphql-tools');

export default (schemaFragments, resolvers, directives) => {
  const initialAST = schemaFragments.map(fragment => parse(fragment));
  initialAST.forEach(({ definitions }) => definitions.filter(x => x.kind === 'ObjectTypeDefinition').forEach((definition) => {
    if (['Query', 'Mutation'].includes(definition.name.value)) return;
    const input = transformASTTypeToInput(definition, { newName: `${definition.name.value}Input`, ast: initialAST });
    addDefinition(definitions, input);
  }));
  const combinedAST = combineASTSchemas(initialAST);
  const transformedAST = applyDirectivesToAST(combinedAST, directives, resolvers);
  transformedAST.definitions.filter(x => x.kind === 'ObjectTypeDefinition').forEach((definition) => {
    if (['Query', 'Mutation'].includes(definition.name.value)) return;
    const input = transformASTTypeToInput(definition, { newName: `${definition.name.value}Input`, ast: initialAST });
    addDefinition(transformedAST, input);
  });
  const builtSchema = buildASTSchema(transformedAST);
  addResolveFunctionsToSchema(builtSchema, resolvers);
  console.log(resolvers)
  return { schema: builtSchema, ast: transformedAST };
};
