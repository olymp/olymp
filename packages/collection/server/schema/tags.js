import { flatten, orderBy, groupBy } from 'lodash';

export default {
  name: 'tag',
  queries: `
    tags: [Tag]
    suggestions(collection: String, field: String): [Tag]
  `,
  resolvers: {
    queries: {
      tags: (source, args, { db }) =>
        db
          .collections()
          .then(collections =>
            Promise.all(
              collections.map(collection =>
                collection
                  .find({}, { tags: 1 })
                  .toArray()
                  .then(array => array.map(({ tags }) => tags))
              )
            )
          )
          .then((array) => {
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
      suggestions: (source, args, { db }) =>
        db
          .collection(args.collection.toLowerCase())
          .find({}, { [args.field]: 1 })
          .toArray()
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
