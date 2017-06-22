import { parse } from 'graphql/language';
import { addDefinition, createTypeFetcher } from 'olymp-graphql/server';

const fetch = createTypeFetcher(
  (node, value) =>
    node.kind !== 'NamedType' && node.name && node.name.value === value
);

export default (ast, node) => {
  const getArgument = (field) => {
    if (!field.type.name) {
      return null;
    }
    const fieldType = fetch(ast, field.type.name.value);
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
  addDefinition(
    ast,
    parse(`
    input ${node.name.value}Query {
      skipqueries: Boolean
      ${node.fields.map(getArgument).filter(x => x).join('\n')}
      and: [${node.name.value}Query]
      or: [${node.name.value}Query]
    }
  `).definitions[0]
  );
};
