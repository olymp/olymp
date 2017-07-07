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
          .collection('item')
          .find({}, { tags: 1 })
          .then(array => array.map(({ tags }) => tags))
          .then((array) => {
            const grouped = groupBy(array);
            const result = Object.keys(grouped).reduce((result, item) => {
              if (item === 'undefined' || !item || item === 'null') {
                return result;
              }
              result.push({
                id: item,
                count: grouped[item].length,
              });
              return result;
            }, []);
            return orderBy(result, ['count', 'id'], ['desc', 'asc']);
          }),
      suggestions: (source, { collection, field = 'tags' }, { monk }) =>
        monk
          .collection('item')
          .find(collection ? { _type: collection } : {}, { [field]: 1 })
          .then((array) => {
            const grouped = groupBy(array, field);
            const result = Object.keys(grouped).reduce((result, item) => {
              if (item === 'undefined' || !item || item === 'null') {
                return result;
              }
              result.push({ id: item, count: grouped[item].length });
              return result;
            }, []);
            return orderBy(result, ['count', field], ['desc', 'asc']);
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
