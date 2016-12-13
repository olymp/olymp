const { parse, visit, BREAK, Kind } = require('graphql/language');
const addDefinition = require('./add-definition').default;

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
      if (key2 === 'null') {
        if (obj[key].null) obj[key].$eq = null;
        if (!obj[key].null) obj[key].$ne = null;
        delete obj[key].null;
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
    obj[key] = obj[key] === 'DESC' ? -1 : 1;
  });
  return obj;
};

function fetchType(name, ast) {
  let currentNode;
  visit(ast, {
    enter(node) {
      if (node.kind !== 'NamedType' && node.name && node.name.value === name) {
        currentNode = node;
        return BREAK;
      } return undefined;
    },
  });
  return currentNode;
}
export const addInputTypes = (collectionName, ast) => {
  const getArgument = (field) => {
    if (!field.type.name) return null;
    const fieldType = fetchType(field.type.name.value, ast);
    if (['Date', 'DateTime'].includes(field.type.name.value)) {
      addDefinition(ast, parse(`
        input DateQuery {
          eq: Date,
          ne: Date,
          lt: Date,
          gt: Date,
          gte: Date,
          lte: Date,
          day: Date,
          year: Date,
          month: Date,
          between: [Date],
          null: Boolean
        }
      `).definitions[0]);
      return `${field.name.value}: DateQuery`;
    }
    if (['Int'].includes(field.type.name.value)) {
      addDefinition(ast, parse(`
        input IntQuery {
          eq: Int,
          ne: Int,
          in: [Int],
          nin: [Int],
          lt: Int,
          gt: Int,
          gte: Int,
          lte: Int,
          between: [Int],
          null: Boolean
        }
      `).definitions[0]);
      return `${field.name.value}: IntQuery`;
    }
    if (['Float'].includes(field.type.name.value)) {
      addDefinition(ast, parse(`
        input IntQuery {
          eq: Float,
          ne: Float,
          in: [Float],
          nin: [Float],
          lt: Float,
          gt: Float,
          gte: Float,
          lte: Float,
          between: [Float],
          null: Boolean
        }
      `).definitions[0]);
      return `${field.name.value}: IntQuery`;
    }
    if (['String', 'Website', 'Slug', 'Markdown', 'Color'].includes(field.type.name.value)) {
      addDefinition(ast, parse(`
        input StringQuery {
          eq: String,
          ne: String,
          in: [String],
          nin: [String],
          startsWith: String,
          contains: String,
          null: Boolean
        }
      `).definitions[0]);
      return `${field.name.value}: StringQuery`;
    }
    if (fieldType && fieldType.kind === 'EnumTypeDefinition') {
      addDefinition(ast, parse(`
        input ${fieldType.name.value}Query {
          eq: ${fieldType.name.value},
          ne: ${fieldType.name.value},
          in: [${fieldType.name.value}],
          nin: [${fieldType.name.value}],
          null: Boolean
        }
      `).definitions[0]);
      return `${field.name.value}: ${fieldType.name.value}Query`;
    }
    if (fieldType && fieldType.kind === 'ObjectTypeDefinition') {
      addDefinition(ast, parse(`
        input GenericQuery {
          null: Boolean
        }
      `).definitions[0]);
      return `${field.name.value}: GenericQuery`;
    }
    // if (fieldType) console.log(fieldType);
  };
  const getSort = (field) => {
    if (!field.name) return null;
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

  addDefinition(ast, parse(`
    input ${collectionName}Query {
      ${collectionAst.fields.map(getArgument).filter(x => x).join(', ')}
    }
  `).definitions[0]);
  addDefinition(ast, parse(`
    input ${collectionName}Sort {
      ${collectionAst.fields.map(getSort).filter(x => x).join(', ')}
    }
  `).definitions[0]);
};

