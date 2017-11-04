import { parse } from 'graphql/language';
import { addDefinition, createTypeFetcher } from 'olymp-graphql/server';
import { get } from 'lodash';

const fetch = createTypeFetcher(
  (node, value) =>
    node.kind !== 'NamedType' &&
    node.kind !== 'NonNullType' &&
    !!node.name &&
    node.name.value === value,
);

const getArgument = (field, ast) => {
  // if field ist required
  if (get(field, 'type.kind') === 'NonNullType') {
    field.type.name = get(field, 'type.type.name');
    field.type.kind = 'NamedType';
  }

  const requiredTest = {
    /* kind: 'FieldDefinition',
    name: {
      kind: 'Name',
      value: 'state',
      loc: { start: 172, end: 177 },
    },
    arguments: [], */
    type: {
      kind: 'NonNullType',
      type: {
        kind: 'NamedType',
        name: {
          kind: 'Name',
          value: 'DOCUMENT_STATE',
          loc: { start: 179, end: 193 },
        },
        loc: { start: 179, end: 193 },
      },
      loc: { start: 179, end: 194 },
    },
    /* directives: [],
    loc: { start: 172, end: 194 }, */
  };

  const test = {
    /* kind: 'FieldDefinition',
    name: {
      kind: 'Name',
      value: 'updatedById',
      loc: { start: 27, end: 38 },
    },
    arguments: [], */
    type: {
      kind: 'NamedType',
      name: {
        kind: 'Name',
        value: 'String',
        loc: { start: 7641, end: 7647 },
      },
      loc: { start: 7641, end: 7647 },
    },
    /* directives: [],
    loc: { start: 27, end: 46 }, */
  };

  const value = get(field, 'type.type.name.value');
  if (field.type.kind === 'ListType' && value && value === 'String') {
    addDefinition(
      ast,
      parse(`
      input ${value}Query {
        in: [${value}],
        nin: [${value}],
        null: Boolean
      }
    `).definitions[0],
    );
    return `${field.name.value}: ${value}Query`;
  }
  if (!field.type.name) {
    return null;
  }
  const fieldType = fetch(ast, field.type.name.value);
  if (['Date', 'DateTime'].includes(field.type.name.value)) {
    addDefinition(
      ast,
      parse(`
      input DateQuery {
        eq: DateTime,
        ne: DateTime,
        lt: DateTime,
        gt: DateTime,
        gte: DateTime,
        lte: DateTime,
        day: DateTime,
        year: DateTime,
        month: DateTime,
        between: [DateTime],
        null: Boolean
      }
    `).definitions[0],
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
    `).definitions[0],
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
    `).definitions[0],
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
    `).definitions[0],
    );
    return `${field.name.value}: BooleanQuery`;
  }
  if (
    ['String', 'Website', 'Slug', 'Markdown', 'Color'].includes(
      field.type.name.value,
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
    `).definitions[0],
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
    `).definitions[0],
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
    `).definitions[0],
    );
    return `${field.name.value}: GenericQuery`;
  }
  // if (fieldType) console.log(fieldType);
};

export default (ast, node) => {
  addDefinition(
    ast,
    parse(`
    input ${node.name.value}Query {
      skipqueries: Boolean
      ${node.fields
        .map(x => getArgument(x, ast))
        .filter(x => x)
        .join('\n')}
      and: [${node.name.value}Query]
      or: [${node.name.value}Query]
    }
  `).definitions[0],
  );
};
