import { upperFirst } from 'lodash';
import { visit, Kind } from 'graphql/language';
import createTypeFetcher from './fetch-type';
import addDefinition from './add-definition';

const fetch = createTypeFetcher(
  (node, value) =>
    node.kind.endsWith('TypeDefinition') &&
    node.name &&
    node.name.value === value
);

const transformASTTypeToInput = (
  type,
  { newName, ast, exclude = [], optional = [] },
  generatedInputHistory = []
) => {
  const definitions = ast.definitions || ast;
  return visit(type, {
    enter(node /* , key, parent, path, ancestors*/) {
      let copy = Object.assign({}, node);
      copy.directives = [];
      switch (copy.kind) {
        case Kind.OBJECT_TYPE_DEFINITION:
          copy.kind = Kind.INPUT_OBJECT_TYPE_DEFINITION;
          copy.name = Object.assign({}, copy.name);
          copy.name.value = newName;
          break;
        case Kind.FIELD_DEFINITION:
          if (exclude.indexOf(node.name.value) !== -1) {
            return null;
          } // Delete this node
          copy.kind = Kind.INPUT_VALUE_DEFINITION;
          const fieldName = copy.name.value;
          let typeName = null;
          visit(copy, {
            [Kind.NAMED_TYPE](typeNode) {
              typeName = typeNode.name.value;
            },
          });
          const fieldType = fetch(ast, typeName);
          if (fieldType && fieldType.kind === Kind.OBJECT_TYPE_DEFINITION) {
            const inputName = `${upperFirst(fieldType.name.value)}Input`;
            if (generatedInputHistory.indexOf(inputName) === -1) {
              generatedInputHistory.push(inputName);
              if (
                !fetch(ast, inputName) &&
                fieldType.name.value !== type.name.value
              ) {
                const newInput = transformASTTypeToInput(
                  fieldType,
                  { newName: inputName, ast },
                  generatedInputHistory
                );
                definitions.push(newInput);
              }
            }
            copy = visit(copy, {
              [Kind.NAMED_TYPE](typeNode) {
                const newNode = Object.assign({}, typeNode);
                newNode.name = Object.assign({}, newNode.name);
                newNode.name.value = inputName;
                return newNode;
              },
            });
            if (optional.indexOf(fieldName) !== -1) {
              while (copy.type.kind === Kind.NON_NULL_TYPE) {
                copy.type = Object.assign({}, copy.type.type);
              }
            }
          }
          break;
      }
      return copy;
    },
  });
};

export default (ast, node) => {
  const input = transformASTTypeToInput(node, {
    newName: `${node.name.value}Input`,
    ast: ast.definitions,
  });
  addDefinition(ast.definitions, input);
};
