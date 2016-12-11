const { parse, visit, BREAK } = require('graphql/language');
const transformASTTypeToInput = require('./type-to-input').default;

export const adaptQuery = (obj) => {
  Object.keys(obj).forEach((key) => {
    Object.keys(obj[key]).forEach((key2) => {
      if (key2 === 'between') {
        obj[key].$gte = obj[key][key2][0];
        obj[key].$lt = obj[key][key2][1];
        delete obj[key][key2];
        return;
      }
      if (key2 === 'startsWith') {
        obj[key].$regex = new RegExp(`^${obj[key][key2]}.*`, 'i');
        delete obj[key][key2];
        return;
      }
      if (key2 === 'contains') {
        obj[key].$regex = new RegExp(`.*${obj[key][key2]}.*`, 'i');
        delete obj[key][key2];
        return;
      }
      obj[key][`$${key2}`] = obj[key][key2];
      delete obj[key][key2];
    });
  });
  return obj;
};

export const adaptSort = (obj) => {
  Object.keys(obj).forEach((key) => {
    obj[key] = obj[key] === 'DESCENDING' ? -1 : 1;
  });
  return obj;
};

export const getInputTypes = (collectionName, ast) => {
  const getArgument = (field) => {
    switch (field.type.name.value) {
      case 'String': return `${field.name.value}: StringOperatorInput`;
      case 'Date':
      case 'DateTime': return `${field.name.value}: DateOperatorInput`;
      case 'Int': return `${field.name.value}: IntOperatorInput`;
      default: return null;
    }
  };
  const getSort = (field) => {
    return `${field.name.value}: SORT_DIRECTION`;
  };
  let collectionAst = null;
  visit(ast, {
    enter(node) {
      if (node.kind.endsWith('TypeDefinition') && node.name && node.name.value === collectionName) {
        collectionAst = node;
        return BREAK;
      } return undefined;
    },
  });

  const queryType = parse(`
    input ${collectionName}Query {
      ${collectionAst.fields.map(getArgument).filter(x => x).join(', ')}
    }
  `).definitions[0];
  const sortType = parse(`
    input ${collectionName}Sort {
      ${collectionAst.fields.map(getSort).filter(x => x).join(', ')}
    }
  `).definitions[0];
  const inputType = transformASTTypeToInput(collectionAst, { newName: `${collectionName}Input`, ast });
  return { queryType, sortType, inputType };
};

