const { parse, visit, BREAK, Kind } = require('graphql/language');
const addDefinition = require('./add-definition');

const attribs = ['eq', 'ne', 'lt', 'gt', 'gte', 'lte', 'in', 'nin'];
exports.adaptQuery = (obj) => {
  obj = Object.assign({}, obj);
  if (obj.skipQuery) { return {}; }
  delete obj.skipQuery;
  Object.keys(obj).forEach((key) => {
    if (obj[key] && Array.isArray(obj[key])) {
      obj[key] = obj[key].map(
        item => (typeof item === 'object' ? exports.adaptQuery(item) : item)
      );
    } else if (obj[key] && typeof obj[key] === 'object') {
      obj[key] = exports.adaptQuery(obj[key]);
    }
    if (key === 'and') {
      obj.$and = obj.and;
      delete obj.and;
      return;
    }
    if (key === 'or') {
      obj.$or = obj.or;
      delete obj.or;
      return;
    }
    if (key === 'between') {
      obj.$gte = obj[key][0];
      obj.$lt = obj[key][1];
      delete obj[key];
      return;
    }
    if (key === 'startsWith') {
      obj.$regex = new RegExp(`^${obj[key]}.*`, 'i');
      delete obj[key];
      return;
    }
    if (key === 'contains') {
      obj.$regex = new RegExp(`.*${obj[key]}.*`, 'i');
      delete obj[key];
      return;
    }
    if (key === 'null') {
      if (obj.null) { obj.$eq = null; }
      if (!obj.null) { obj.$ne = null; }
      delete obj.null;
      return;
    }
    /* if (key === 'day') {
      obj.$where = `return this.ende.getDate() == ${obj[key]}`;
      delete obj[key];
      return;
    }
    if (key === 'month') {
      obj.$where = `return this.ende.getMonth() == ${obj[key]}`;
      delete obj[key];
      return;
    }
    if (key === 'year') {
      obj.$where = `return this.ende.getFullYear() == ${obj[key]}`;
      delete obj[key];
      return;
    } */
    if (attribs.indexOf(key) !== -1) {
      obj[`$${key}`] = obj[key];
      delete obj[key];
    }
  });
  return obj;
};

exports.adaptSort = (obj) => {
  if (obj.skipSort) { return {}; }
  delete obj.skipSort;
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
      }
      return undefined;
    },
  });
  return currentNode;
}
exports.addInputTypes = (collectionName, ast) => {
  const getArgument = (field) => {
    if (!field.type.name) { return null; }
    const fieldType = fetchType(field.type.name.value, ast);
    if (['Date', 'DateTime'].includes(field.type.name.value)) {
      addDefinition(
        ast,
        parse(`
        input DateQuery {
          eq: Float,
          ne: Float,
          lt: Float,
          gt: Float,
          gte: Float,
          lte: Float,
          day: Float,
          year: Float,
          month: Float,
          between: [Float],
          null: Boolean
        }
      `).definitions[0]
      );
      return `${field.name.value}: DateQuery`;
    }
    if (['Int'].includes(field.type.name.value)) {
      addDefinition(
        ast,
        parse(`
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
      `).definitions[0]
      );
      return `${field.name.value}: IntQuery`;
    }
    if (['Float'].includes(field.type.name.value)) {
      addDefinition(
        ast,
        parse(`
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
      `).definitions[0]
      );
      return `${field.name.value}: IntQuery`;
    }
    if (['Boolean'].includes(field.type.name.value)) {
      addDefinition(
        ast,
        parse(`
        input BooleanQuery {
          eq: Float,
          ne: Float,
          null: Boolean
        }
      `).definitions[0]
      );
      return `${field.name.value}: BooleanQuery`;
    }
    if (
      ['String', 'Website', 'Slug', 'Markdown', 'Color'].includes(
        field.type.name.value
      )
    ) {
      addDefinition(
        ast,
        parse(`
        input StringQuery {
          eq: String,
          ne: String,
          in: [String],
          nin: [String],
          startsWith: String,
          contains: String,
          null: Boolean
        }
      `).definitions[0]
      );
      return `${field.name.value}: StringQuery`;
    }
    if (fieldType && fieldType.kind === 'EnumTypeDefinition') {
      addDefinition(
        ast,
        parse(`
        input ${fieldType.name.value}Query {
          eq: ${fieldType.name.value},
          ne: ${fieldType.name.value},
          in: [${fieldType.name.value}],
          nin: [${fieldType.name.value}],
          null: Boolean
        }
      `).definitions[0]
      );
      return `${field.name.value}: ${fieldType.name.value}Query`;
    }
    if (fieldType && fieldType.kind === 'ObjectTypeDefinition') {
      addDefinition(
        ast,
        parse(`
        input GenericQuery {
          null: Boolean
        }
      `).definitions[0]
      );
      return `${field.name.value}: GenericQuery`;
    }
    // if (fieldType) console.log(fieldType);
  };
  const getSort = (field) => {
    if (!field.name) { return null; }
    return `${field.name.value}: SORT_DIRECTION`;
  };
  let collectionAst = null;
  visit(ast, {
    enter(node) {
      if (
        node.kind.endsWith('TypeDefinition') &&
        node.name &&
        node.name.value === collectionName
      ) {
        collectionAst = node;
        return BREAK;
      }
      return undefined;
    },
  });

  addDefinition(
    ast,
    parse(`
    input ${collectionName}Query {
      skipQuery: Boolean
      ${collectionAst.fields.map(getArgument).filter(x => x).join('\n')}
      and: [${collectionName}Query]
      or: [${collectionName}Query]
    }
  `).definitions[0]
  );
  addDefinition(
    ast,
    parse(`
    input ${collectionName}Sort {
      skipSort: Boolean
      ${collectionAst.fields.map(getSort).filter(x => x).join('\n')}
    }
  `).definitions[0]
  );
};
