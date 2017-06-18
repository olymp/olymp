const capitalize = require('lodash/upperFirst');

const { visit, Kind, BREAK } = require('graphql/language');
// https://gist.github.com/voodooattack/ce5f0afb5515ab5a153e535ac20698da thanks!!

function fetchType(name, ast) {
  let currentNode;
  visit(ast, {
    enter(node) {
      if (
        node.kind.endsWith('TypeDefinition') &&
        node.name &&
        node.name.value === name
      ) {
        currentNode = node;
        return BREAK;
      }
      return undefined;
    },
  });
  return currentNode;
}

const transformASTTypeToInput = (
  type,
  { newName, ast, exclude = [], optional = [] },
  generatedInputHistory = []
) => {
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
          if (exclude.indexOf(node.name.value) !== -1) return null; // Delete this node
          copy.kind = Kind.INPUT_VALUE_DEFINITION;
          const fieldName = copy.name.value;
          let typeName = null;
          visit(copy, {
            [Kind.NAMED_TYPE](typeNode) {
              typeName = typeNode.name.value;
            },
          });
          const fieldType = fetchType(typeName, ast);
          if (fieldType && fieldType.kind === Kind.OBJECT_TYPE_DEFINITION) {
            const inputName = `${capitalize(fieldType.name.value)}Input`;
            if (generatedInputHistory.indexOf(inputName) === -1) {
              generatedInputHistory.push(inputName);
              if (
                !fetchType(inputName, ast) &&
                fieldType.name.value !== type.name.value
              ) {
                const newInput = transformASTTypeToInput(
                  fieldType,
                  { newName: inputName, ast },
                  generatedInputHistory
                );
                ast.definitions.push(newInput);
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

module.exports = transformASTTypeToInput;
