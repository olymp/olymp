import capitalize from 'lodash/capitalize';
import combineASTSchemas from './combine-ast';
import applyDirectivesToAST from './apply-directives';
import transformASTTypeToInput from './type-to-input';
import addDefinition from './add-definition';

const { parse } = require('graphql/language');
const { buildASTSchema } = require('graphql/utilities');
const { addResolveFunctionsToSchema } = require('graphql-tools');

export default (schemaFragments, resolvers, directives, hooks) => {
  const initialAST = schemaFragments.map(fragment => parse(fragment));
  initialAST.forEach(({ definitions }) => definitions.filter(x => x.kind === 'ObjectTypeDefinition').forEach((definition) => {
    if (['Query', 'Mutation'].includes(definition.name.value)) return;
    const input = transformASTTypeToInput(definition, { newName: `${capitalize(definition.name.value)}Input`, ast: definitions });
    addDefinition(definitions, input);
  }));
  const combinedAST = combineASTSchemas(initialAST);
  const transformedAST = applyDirectivesToAST(combinedAST, directives, resolvers, hooks);
  transformedAST.definitions.filter(x => x.kind === 'ObjectTypeDefinition').forEach((definition) => {
    if (['Query', 'Mutation'].includes(definition.name.value)) return;
    const input = transformASTTypeToInput(definition, { newName: `${capitalize(definition.name.value)}Input`, ast: transformedAST });
    addDefinition(transformedAST, input);
  });
  const builtSchema = buildASTSchema(transformedAST);
  addResolveFunctionsToSchema(builtSchema, resolvers);
  return { schema: builtSchema, ast: transformedAST };
};
