import { upperFirst } from 'lodash';
import { parse } from 'graphql/language';
import { buildASTSchema } from 'graphql/utilities';
import { addResolveFunctionsToSchema } from 'graphql-tools';
import combineASTSchemas from './combine-ast';
import applyDirectivesToAST from './apply-directives';
import transformASTTypeToInput from './type-to-input';
import addDefinition from './add-definition';

export default ({ schemas, resolvers, directives, hooks }) => {
  const initialAST = schemas.map(fragment => parse(fragment));
  initialAST.forEach(({ definitions }) =>
    definitions
      .filter(x => x.kind === 'ObjectTypeDefinition')
      .forEach((definition) => {
        if (['Query', 'Mutation'].includes(definition.name.value)) {
          return;
        }
        const input = transformASTTypeToInput(definition, {
          newName: `${upperFirst(definition.name.value)}Input`,
          ast: definitions,
        });
        addDefinition(definitions, input);
      })
  );
  const combinedAST = combineASTSchemas(initialAST);
  const transformedAST = applyDirectivesToAST(
    combinedAST,
    directives,
    resolvers,
    hooks
  );
  transformedAST.definitions
    .filter(x => x.kind === 'ObjectTypeDefinition')
    .forEach((definition) => {
      if (['Query', 'Mutation'].includes(definition.name.value)) {
        return;
      }
      const input = transformASTTypeToInput(definition, {
        newName: `${upperFirst(definition.name.value)}Input`,
        ast: transformedAST,
      });
      addDefinition(transformedAST, input);
    });
  const builtSchema = buildASTSchema(transformedAST);
  addResolveFunctionsToSchema(builtSchema, resolvers);
  return { schema: builtSchema, ast: transformedAST };
};
