const flatten = require('lodash/flattenDeep');
const orderBy = require('lodash/orderBy');
const uniqBy = require('lodash/uniqBy');
const groupBy = require('lodash/groupBy');

module.exports = (schema, { adapter }) => {
  schema.addSchema({
    name: 'tag',
    query: `
      tags: [Tag]
    `,
    resolvers: {
      Query: {
        tags: (source, args) => adapter.client.collections().then(collections => Promise.all(collections.map(
          collection => collection.find({}, { tags: 1 }).toArray().then(array => array.map(({ tags }) => tags))
        ))).then((array) => {
          const flattened = flatten(array).filter(x => x);
          const grouped = groupBy(flattened);
          const result = Object.keys(grouped).reduce((result, item) => {
            result.push({
              id: item,
              count: grouped[item].length,
            });
            return result;
          }, []);
          return orderBy(result, ['count', 'id'], ['desc', 'asc']);
        }),
      },
    },
    schema: `
      type Tag {
        id: String
        count: Int
      }
    `,
  });
};
