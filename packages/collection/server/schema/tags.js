import { orderBy, groupBy } from 'lodash';

export default {
  name: 'tag',
  queries: `
    tags: [Tag]
    suggestions(collection: String, field: String): [Tag]
  `,
  resolvers: {
    queries: {
      tags: (source, args, { monk }) =>
        monk
          .collection('items')
          .find({}, { tags: 1 })
          .then(array => array.map(({ tags }) => tags))
          .then((array) => {
            const grouped = groupBy(array);
            const result = Object.keys(grouped).reduce((result, item) => {
              result.push({
                id: item,
                count: grouped[item].length,
              });
              return result;
            }, []);
            return orderBy(result, ['count', 'id'], ['desc', 'asc']);
          }),
      suggestions: (source, args, { monk }) =>
        monk
          .collection(args.collection.toLowerCase())
          .find({}, { [args.field]: 1 })
          .then((array) => {
            const grouped = groupBy(array, args.field);
            const result = Object.keys(grouped).reduce((result, item) => {
              if (item === 'undefined') {
                return result;
              }
              result.push({ id: item, count: grouped[item].length });
              return result;
            }, []);
            return orderBy(result, ['count', args.field], ['desc', 'asc']);
          }),
    },
  },
  schema: `
    type Tag {
      id: String
      count: Int
    }
  `,
};
